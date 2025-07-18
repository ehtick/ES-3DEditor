/**
 * @file Package.ts
 * @description 场景打包解包
 * @date 2024-07-31
 * @version 4.0.0
 */
import JSZip from "jszip";
import { ObjectLoader, Vector3, Mesh, Group, Bone } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { BASE64_TYPES, TYPED_ARRAYS } from "@/utils/common/constant";
import { unzip, zip } from "@/utils/common/pako";
import { fetchController } from "@/utils/service/fetchController";
import { PackageSkeleton } from "@/core/loader/Package.Skeleton";
import { useProjectConfigStoreWithOut } from "@/store/modules/projectConfig";
import { useDispatchSignal } from "@/hooks/useSignal";
// @ts-ignore
import { IConfigJson, ISceneJson } from "~/scene";

interface IPackConfig {
    name: string; // 首包名称
    layer?: number; // 拆分的最深层级 0:拆分至最深层
    sceneInfo?: any; // 场景其他信息（存入首包）
    zipUploadFun: (zip: File) => Promise<any>; // 压缩包上传接口函数，多压缩包
    onProgress?: (progress: number) => void; // 打包进度回调
    onComplete?: (_: { firstUploadResult: any, totalSize: number, totalZipNumber: number }) => void; // 打包完成回调
}

interface IUnpackConfig {
    url: string, // 首包url
    onSceneLoad?: (sceneJson: ISceneJson, configJson: IConfigJson, fromJSONResult: IFromJSONResult) => void, // 场景首包加载完成回调
    onProgress?: (progress: number) => void; // 场景加载进度回调
    onComplete?: () => void // 场景加载完成回调.
}

interface SourceData {
    name: string;
    json?: string | ArrayBuffer
    texture?: string | ArrayBuffer;
    geometry?: string;
    drawing?: string;
}

interface GroupJson {
    images: any[];
    geometries: any[];
    object: {
        children: any[],
        groupChildren: string[]
    };
}

const projectConfigStore = useProjectConfigStoreWithOut();

export class Package {
    // 控制fetch并发
    static _fetch = fetchController(10, false);

    private totalSize: number = 0; // 总包体大小

    private geometryArr: any[];
    private imagesArr: any[];
    private materialsArr: any[];
    private textureArr: any[];
    private skeletonsArr: any[];

    // 解压时oss 对应文件夹url
    private prefix_url: string;
    private loader: ObjectLoader;

    private geometryMap: Map<string, any>;
    private imagesMap: Map<string, any>;
    private materialsMap: Map<string, any>;
    private textureMap: Map<string, any>;
    private callFunNum: { value: number; };
    private skeletonClass: PackageSkeleton;

    constructor() {
        // 存储已参与打包过的geometry uuid
        this.geometryArr = [];
        // 存储已参与打包过的images uuid
        this.imagesArr = [];
        // 存储已参与打包过的materials uuid
        this.materialsArr = [];
        // 存储已参与打包过的texture uuid
        this.textureArr = [];
        // 存储已参与打包过的skeleton uuid
        this.skeletonsArr = [];

        /**  下面都是解包用  */
        this.prefix_url = "";
        this.loader = new ObjectLoader();

        this.geometryMap = new Map<string, any>();
        this.imagesMap = new Map<string, any>();
        this.materialsMap = new Map<string, any>();
        this.textureMap = new Map<string, any>();

        this.callFunNum = { value: 0 };

        this.skeletonClass = new PackageSkeleton();
    }

    /*  -------------------------------------------- 切片打包 ---------------------------------------------------   */

    /**
     * 处理 geometry json
     * @param arr 几何数据数组
     */
    private handleGeometryJson(arr) {
        function handler(value) {
            if (value instanceof Array) {
                return zip(value, false);
            }
            return value;
        }

        return arr.map((geometry) => {
            if (geometry.data) {
                const data = geometry.data;
                if (data.attributes) {
                    for (let key in data.attributes) {
                        data.attributes[key].array = handler(data.attributes[key].array);
                    }
                }
                if (data.index) {
                    data.index.array = handler(data.index.array);
                }
            }
            return geometry;
        })
    }

    /**
     * 处理 image json
     * @param imageJson
     * @param zipData 存储待压缩数据
     * @returns {string} 返回贴图存储文件名称
     */
    handleImage(imageJson, zipData): string {
        if (typeof imageJson.url === "string") {
            const name = imageJson.uuid + `.${BASE64_TYPES[imageJson.url.split(",")[0]]}`;
            const content = imageJson.url;
            zipData.push({ name, texture: content });
            return name;
        }

        console.log(imageJson)

        const name = `${imageJson.url.type}!${imageJson.url.width}!${imageJson.url.height}!${imageJson.uuid}.env`;
        const buffer = new TYPED_ARRAYS[imageJson.url.type](imageJson.url.data);
        zipData.push({ name, texture: buffer.buffer });
        return name;
    }

    /**
     * 处理 mesh json
     * @param mesh
     * @param json group json
     * @param zipData 存储待压缩数据
     */
    handleMesh(mesh: Mesh, json, zipData) {
        const meshJson: any = mesh.toJSON();

        // 处理几何数据
        if (meshJson.geometries) {
            const geometries: any = [];
            meshJson.geometries.forEach((geometry) => {
                if (this.geometryArr.indexOf(geometry.uuid) === -1) {
                    this.geometryArr.push(geometry.uuid);
                    geometries.push(geometry);
                }
            })

            !json.geometries && (json.geometries = []);
            json.geometries.push(...this.handleGeometryJson(geometries));
        }

        // 处理贴图image
        if (meshJson.images) {
            meshJson.images.forEach((image) => {
                if (this.imagesArr.indexOf(image.uuid) === -1) {
                    this.imagesArr.push(image.uuid);

                    !json.images && (json.images = []);

                    json.images.push(this.handleImage(image, zipData));
                }
            })
        }

        // 处理贴图texture
        if (meshJson.textures) {
            meshJson.textures.forEach((texture) => {
                if (this.textureArr.indexOf(texture.uuid) === -1) {
                    this.textureArr.push(texture.uuid);

                    !json.textures && (json.textures = []);

                    json.textures.push(texture);
                }
            })
        }

        // 处理材质material
        if (meshJson.materials) {
            meshJson.materials.forEach((material) => {
                if (this.materialsArr.indexOf(material.uuid) === -1) {
                    this.materialsArr.push(material.uuid);

                    !json.materials && (json.materials = []);

                    json.materials.push(material);
                }
            })
        }

        // 处理骨骼动画
        if (meshJson.skeletons) {
            meshJson.skeletons.forEach((skeleton) => {
                if (this.skeletonsArr.indexOf(skeleton.uuid) === -1) {
                    this.skeletonsArr.push(skeleton.uuid);

                    !json.skeletons && (json.skeletons = []);

                    json.skeletons.push(skeleton);
                }
            })
        }

        // object 字段存入group json(parent json)
        if (meshJson.object) {
            !json.object.children && (json.object.children = []);

            json.object.children.push(meshJson.object);
        }
    }

    /**
     * 按 group 分组各打包为1个zip文件
     * @param {IPackConfig} packConfig 
     * @remarks 首包保存scene基本信息 和 图纸信息 及 基础配置
     * @remarks 前面已打包的几何数据和材质贴图不会再次打包
     */
    async pack(packConfig: IPackConfig) {
        packConfig.layer = packConfig.layer || 0;

        this.totalSize = 0;

        // 首包保存scene基本信息,不clone子级
        const newScene = window.viewer.scene.clone(false);
        newScene.children = [];

        const sceneJson = newScene.toJSON();
        console.log(newScene,sceneJson.images)
        // scene uuid需要和原来一致，防止绑定在scene的脚本无法还原
        sceneJson.object.uuid = window.viewer.scene.uuid;
        sceneJson.object.children = [];

        // 20250718: 环境类型是ModelViewer时需要特殊处理，因为scene.toJSON()不会处理renderTargetTexture
        if(newScene.environment && newScene.environment.isRenderTargetTexture){
            sceneJson.object.environmentType = "ModelViewer";
        }

        const sceneZipData: SourceData[] = [];
        // 处理背景和环境贴图
        if (!sceneJson.images) sceneJson.images = [];

        console.log(sceneJson.images)
        sceneJson.images = sceneJson.images.map((image) => this.handleImage(image, sceneZipData));

        // 保存场景中需打包的group数组
        let groupArr: Group[] = [];

        // 处理 scene 子级
        window.viewer.scene.children.forEach((child) => {
            if (child.ignore) return;

            if (child.type === "Group" || child.children?.length > 0) {
                sceneJson.object.children?.push(child.uuid);

                child.groupLayer = 1;
                groupArr.push(child);

                child.traverseByCondition((c) => {
                    // 不递归自身
                    if (c.uuid === child.uuid) return;

                    if (c.type === "Group" || c.children?.length > 0) {
                        c.groupLayer = c.parent.groupLayer + 1;
                        if (c.groupLayer <= <number>packConfig.layer || packConfig.layer === 0) {
                            groupArr.push(c);
                        }
                    }
                }, (c) => {
                    return !c.ignore;
                })
            } else {
                this.handleMesh(<Mesh>child, sceneJson, sceneZipData);
            }
        })

        // 将所有几何数据取出 单独存储
        if (sceneJson.geometries) {
            // 为避免数据量过大超过V8引擎对于字符串2^32的限制，分为多个切片（10个几何数据为一组）json
            const transferNum = Math.ceil(sceneJson.geometries.length / 10);
            for (let i = 0; i < transferNum; i++) {
                const name = `geometries_${i}.json`;
                const geometry = JSON.stringify(sceneJson.geometries.slice(i * 10, (i + 1) * 10));
                sceneZipData.push({ name, geometry });
            }
            sceneJson.geometries = [];
        }

        // 图纸
        if (packConfig.sceneInfo.drawingInfo) {
            // 图片
            sceneZipData.push({
                name: packConfig.sceneInfo.id + `.${BASE64_TYPES[packConfig.sceneInfo.drawingInfo.imgSrc.split(",")[0]]}`,
                drawing: packConfig.sceneInfo.drawingInfo.imgSrc
            });

            // 标记
            sceneZipData.push({ name: "drawingMark.txt", drawing: packConfig.sceneInfo.drawingInfo.markList });

            // 图片信息(宽高信息等，以便于其他地方使用可计算标记左上距离百分比)
            sceneZipData.push({ name: "drawingImgInfo.json", drawing: packConfig.sceneInfo.drawingInfo.imgInfo });

            packConfig.sceneInfo.drawingInfo = null;
        }

        // 项目配置
        sceneZipData.push({
            name: "config.json",
            json: JSON.stringify({
                // 项目运行是否启用xr
                xr: projectConfigStore.xr,
                // 项目渲染器配置
                renderer: projectConfigStore.renderer,
                // 项目后处理配置
                effect: projectConfigStore.effect,
            })
        });

        const totalNum = groupArr.length + 1;
        sceneZipData.push({
            name: "scene.json",
            json: JSON.stringify({
                // 解包时需要还原的编辑器场景信息
                metadata: window.editor.metadata,
                camera: window.viewer.camera.toJSON(),
                scene: sceneJson,
                scripts: window.editor.scripts,
                controls: {
                    state: window.viewer.modules.controls.toJSON(),
                },
                totalZipNumber: totalNum,
                sceneInfo: packConfig.sceneInfo,
            })
        });

        // 首包上传
        const firstUploadResult = await this.zip(sceneZipData, packConfig.name, packConfig.zipUploadFun);

        // 进度
        let progress = 0;
        packConfig.onProgress && packConfig.onProgress(parseFloat((progress / groupArr.length * 100).toFixed(2)));

        // 遍历打包group并上传
        for (const group of groupArr) {
            // clone(false) 不克隆子元素
            const g = group.clone(false);
            g.children = [];

            // 空 group
            let json: any = g.toJSON();
            json.geometries = [];
            json.images = [];
            json.textures = [];
            json.materials = [];
            json.object.uuid = group.uuid;
            json.object.children = [];

            // 存储待压缩数据
            const zipData: SourceData[] = [];

            group.children.forEach((child) => {
                // 被groupArr包含的子级后面会单独处理，此处引用其uuid
                if (groupArr.find(item => item.uuid === child.uuid)) {
                    json.object.children?.push(child.uuid);
                    return;
                }

                this.handleMesh(<Mesh>child, json, zipData);
            })

            // 将所有几何数据取出 单独存储
            if (json.geometries) {
                // 为避免数据量过大超过V8引擎对于字符串2^32的限制，分为多个切片（10个几何数据为一组）json
                const transferNum = Math.ceil(json.geometries.length / 10);
                for (let i = 0; i < transferNum; i++) {
                    const name = `geometries_${i}.json`;
                    const geometry = JSON.stringify(json.geometries.slice(i * 10, (i + 1) * 10));
                    zipData.push({ name, geometry });
                }
                json.geometries = [];
            }

            // json 打包
            // 还原uuid
            json.object.uuid = group.uuid;
            const name = `${group.uuid}.json`;
            const content = JSON.stringify(json);
            zipData.push({ name, json: content });

            await this.zip(zipData, group.uuid, packConfig.zipUploadFun);

            progress++;
            packConfig.onProgress && packConfig.onProgress(parseFloat((progress / groupArr.length * 100).toFixed(2)));
        }

        packConfig.onComplete && packConfig.onComplete({ firstUploadResult, totalSize: this.totalSize, totalZipNumber: totalNum });

        // reset
        groupArr = [];
        this.geometryArr = [];
        this.imagesArr = [];
        this.materialsArr = [];
        this.textureArr = [];

        return { firstUploadResult, totalSize: this.totalSize, totalZipNumber: totalNum };
    }

    /**
     * zip 打包
     * @param sourceData 待打包数据
     * @param {string | number} zipName 打包文件名
     * @return {Promise<any>} 返回包上传接口结果
     */
    private async zip(sourceData: SourceData[], zipName: string | number, zipUploadFun: (zip: File) => Promise<any>): Promise<any> {
        const jszip = new JSZip();
        const imgFolder = jszip.folder("Textures") as JSZip; // 贴图文件夹
        const geometriesFolder = jszip.folder("Geometries") as JSZip; // 几何数据文件夹
        let drawingFolder = jszip.folder("Drawing") as JSZip; // 图纸文件夹

        sourceData.forEach((item) => {
            if (item.texture) {
                imgFolder.file(item.name, item.texture, {
                    compression: "DEFLATE",//"STORE",//"DEFLATE
                    compressionOptions: {
                        level: 7
                    }
                });
            } else if (item.geometry) {
                geometriesFolder.file(item.name, item.geometry, {
                    compression: "DEFLATE",//"STORE",//"DEFLATE
                    compressionOptions: {
                        level: 7
                    }
                });
            } else if (item.json) {
                jszip.file(item.name, item.json, {
                    compression: "DEFLATE",//"STORE",//"DEFLATE
                    compressionOptions: {
                        level: 7
                    }
                });
            } else if (item.drawing) {
                drawingFolder.file(item.name, item.drawing, {
                    compression: "DEFLATE",//"STORE",//"DEFLATE
                    compressionOptions: {
                        level: 9
                    }
                });
            }
        })

        const content = await jszip.generateAsync({ type: 'blob' });

        const zipFile = new File([content], `${zipName}.zip`, { type: "application/zip" });

        this.totalSize += zipFile.size;

        // 上传zip包
        return await zipUploadFun(zipFile);
    }

    /*  -------------------------------------------- 解包 ---------------------------------------------------   */

    /**
     * 还原几何数据
     * @param arr
     * @private
     */
    private unGzipGeometryJson(arr) {
        // 几何数据array 还原
        function handler(value) {
            if (typeof value === "string") {
                return unzip(value, false);
            }
            return value;
        }

        return arr.map((geometry) => {
            if (geometry.data) {
                const data = geometry.data;
                if (data.attributes) {
                    for (let key in data.attributes) {
                        data.attributes[key].array = handler(data.attributes[key].array);
                    }
                }
                if (data.index) {
                    data.index.array = handler(data.index.array);
                }
            }
            return geometry;
        })
    }

    /**
     * 还原贴图
     * @param imageName
     * @param data
     */
    private unGzipImage(imageName: string, data) {
        const nameSplit = imageName.split(".");
        if (nameSplit[1] === "env") {
            const urlSplit = nameSplit[0].split("!");
            this.imagesMap.set(urlSplit[3], {
                uuid: urlSplit[3],
                url: {
                    type: urlSplit[0],
                    width: parseInt(urlSplit[1]),
                    height: parseInt(urlSplit[2]),
                    /**
                     * sceneJson打zip包前原数据为Array,此处解压后我们使用ArrayBuffer，不还原为Array
                     * 还原为Array这样写 Array.from(new TYPED_ARRAYS[urlSplit[0]](textureMap.get(urlSplit[3] + ".env")))
                     **/
                    data: data
                }
            });
        } else {
            this.imagesMap.set(nameSplit[0], {
                uuid: nameSplit[0],
                url: data
            });
        }
    }

    /**
     * 记录materials、texture、geometry已加载的uuid
     * @param object3D 模型json
     */
    private recordUuid(object3D) {
        if (object3D.geometries) {
            object3D.geometries.forEach((geometry) => {
                this.geometryMap.set(geometry.uuid, geometry);
            })
        }
        if (object3D.materials) {
            object3D.materials.forEach((material) => {
                this.materialsMap.set(material.uuid, material);
            })
        }
        if (object3D.textures) {
            object3D.textures.forEach((texture) => {
                this.textureMap.set(texture.uuid, texture);
            })
        }
    }

    /**
     * 从首包开始解包
     * @param {IUnpackConfig} unpackConfig
     */
    public unpack(unpackConfig: IUnpackConfig) {
        unpackConfig.onProgress && unpackConfig.onProgress(0);
        let totalZipNumber = 0, progress = 0;

        const match = unpackConfig.url.match( /(.*[\\/])?([a-zA-Z0-9]+-V\d+)(?=[\\/]|$)/);
        this.prefix_url = "/file/static/" + (match ? match[0] : unpackConfig.url.substring(0, unpackConfig.url.lastIndexOf("/")));

        // indexDb存储
        // const db = window.VIEWPORT.modules["db"];
        //const dbKey = `${useProjectState.getState().sceneId}-${useProjectState.getState().version.id}`;

        const that = this;
        this.callFunNum = new Proxy({ value: 0 }, {
            set(target, p, value) {
                if (target[p] < value) {
                    progress += (value - target[p]) / totalZipNumber * 100;
                    unpackConfig.onProgress && unpackConfig.onProgress(progress);
                }
                target[p] = value;

                if (value <= 0) {
                    const done = () => {
                        // 重置清除map
                        that.geometryMap.clear();
                        that.imagesMap.clear();
                        that.materialsMap.clear();
                        that.textureMap.clear();
                        // @ts-ignore 清除loader
                        that.loader = undefined;
                    }

                    const complete = () => {
                        done();

                        unpackConfig.onComplete && unpackConfig.onComplete();

                        that.skeletonClass.clear();

                        // 关闭IndexDB 否则新的标签页无法正常打开
                        // db.close();
                    }

                    complete();
                }
                return true;
            }
        });

        // map 存储 json 解析完成后执行的 function; key 为 uuid
        const funcMap = new Map<string, Function>();

        const loadScene = (sceneJson: ISceneJson, configJson: IConfigJson) => {
            window.editor.fromJSON(sceneJson).then(async (fromJSONResult: IFromJSONResult) => {
                unpackConfig.onSceneLoad && unpackConfig.onSceneLoad(sceneJson, configJson, fromJSONResult);

                // 还原控制器
                if (sceneJson.controls?.state) {
                    // 预览页面下使用的仍然是OrbitControls，后续如果改成CameraControls，则将此判断移除
                    if(window.viewer.modules.controls instanceof OrbitControls){
                        window.viewer.modules.controls.target = new Vector3().fromArray(JSON.parse(sceneJson.controls.state).target);
                    }else{
                        window.viewer.modules.controls.fromJSON(sceneJson.controls.state,true);
                    }
                }

                // 防止项目只有一个包的情况造成不触发proxy set
                if (this.callFunNum.value === 0) {
                    this.callFunNum.value = 0;
                    unpackConfig.onProgress && unpackConfig.onProgress(100);
                }

                // 还原项目配置
                if (configJson) {
                    configJson.xr && (projectConfigStore.xr = configJson.xr);

                    if (configJson.renderer) {
                        const notChange = Object.keys(configJson.renderer).every((key) => {
                            return configJson.renderer[key] === projectConfigStore.renderer[key];
                        });

                        Object.keys(configJson.renderer).forEach((key) => {
                            projectConfigStore.renderer[key] = configJson.renderer[key];
                        });

                        if (!notChange) {
                            useDispatchSignal("rendererConfigUpdate");
                        }
                    }

                    configJson.effect && Object.keys(configJson.effect).forEach((key) => {
                        projectConfigStore.effect[key] = configJson.effect[key];
                        window.viewer.modules.effect.handlePassConfigChange(key, configJson.effect[key]);
                    });
                }

                // 添加indexDB表存储zip包
                // await db.addStore(dbKey);

                // 开始执行funcMap中的function
                funcMap.forEach((func, uuid) => {
                    func.call(this, uuid, window.viewer.scene, uuid);
                })
            })
        }

        const networkGet = () => {
            // 下载场景包
            fetch(`/file/static/${unpackConfig.url}`)
                .then(zipRes => zipRes.blob())
                .then(async (file) => {
                    unpackConfig.onProgress && unpackConfig.onProgress(1);

                    let sceneJson: ISceneJson, configJson: IConfigJson;

                    // 开始解压首包
                    const zip = new JSZip();

                    // 几何数据数组
                    let geometries: Array<any> = [];

                    // 图纸信息
                    let drawingInfo = {
                        imgSrc: "",
                        markList: [],
                        imgInfo: {}
                    }

                    const res = await zip.loadAsync(file);

                    /**
                     * res.files里包含整个zip里的文件描述、目录描述列表
                     * res本身就是JSZip的实例
                     */
                    for (let key in res.files) {
                        //判断是否是目录
                        if (!res.files[key].dir) {
                            const fileName = res.files[key].name;

                            //找到我们压缩包所需要的json文件
                            if (fileName === "scene.json") { // 场景json
                                const content = await res.file(fileName)?.async('string') as string;
                                //得到scene.json文件的内容
                                sceneJson = JSON.parse(content);
                            } else if (fileName === "config.json") { // 项目配置json
                                const content = await res.file(fileName)?.async('string') as string;
                                configJson = JSON.parse(content);
                            } else if (fileName.substring(0, 9) === "Textures/") {
                                /**
                                 * 贴图
                                 * 分为两种情况：
                                 * 1.贴图为env格式（type!width!height!uuid.env），转换为arraybuffer格式，存入map
                                 * 2.贴图为普通图片格式，直接存入map
                                 **/
                                if (/\.env$/.test(fileName)) {
                                    // 转换回贴图原始信息，存入map
                                    const content = await res.file(fileName)?.async('arraybuffer');
                                    this.unGzipImage(fileName.replace("Textures/", ""), content);
                                } else {
                                    const content = await res.file(fileName)?.async('string')
                                    this.unGzipImage(fileName.replace("Textures/", ""), content);
                                }
                            } else if (/^Geometries\/geometries_\d*\.json$/.test(fileName)) {
                                const content = await res.file(fileName)?.async('string') as string;
                                geometries.push(...this.unGzipGeometryJson(JSON.parse(content)));
                            } else if (/^Geometries\/geometries_\d*\.zip$/.test(fileName)) {
                                /** 此处为兼容整体打包的版本 **/
                                // geometry切片zip包，内部是json文件
                                const content = await res.file(fileName)?.async('blob') as Blob;
                                const zip = new JSZip();
                                const zipRes = await zip.loadAsync(content);
                                for (let zipKey in zipRes.files) {
                                    const content = await zip.file(zipRes.files[zipKey].name)?.async('string') as string;
                                    geometries.push(...this.unGzipGeometryJson(JSON.parse(content)));
                                }
                            } else if (fileName.substring(0, 8) === "Drawing/") {
                                /**
                                 * 图纸文件夹下的文件
                                 * 1. drawingMarking.txt 为图纸标注文件，须解压
                                 * 2. sceneId开头的图片是图纸
                                 */
                                if (res.files[key].name === "Drawing/drawingMark.txt") {
                                    const content = await res.file(res.files[key].name)?.async('string') as string;
                                    drawingInfo.markList = unzip(content)
                                } else if (res.files[key].name === "Drawing/drawingImgInfo.json") {
                                    drawingInfo.imgInfo = JSON.parse(await res.file(res.files[key].name)?.async('string') as string);
                                } else {
                                    drawingInfo.imgSrc = await res.file(res.files[key].name)?.async('string') as string;
                                }
                            }
                        }
                    }

                    totalZipNumber = sceneJson.totalZipNumber || 0;

                    // 贴图还原至sceneJson
                    sceneJson.scene.images = sceneJson.scene.images.map((item) => {
                        const nameSplit = item.split(".");
                        if (nameSplit[1] === "env") {
                            const urlSplit = nameSplit[0].split("!");
                            return this.imagesMap.get(urlSplit[3])
                        } else {
                            return this.imagesMap.get(nameSplit[0])
                        }
                    });

                    // 几何数据还原至sceneJson
                    sceneJson.scene.geometries = geometries;

                    this.recordUuid(sceneJson.scene);

                    // 存储图档信息
                    sceneJson.drawingInfo = drawingInfo.imgSrc ? drawingInfo : undefined;

                    const newChildren: any = [];
                    // 遍历sceneJson.object.children,拉取group zip还原
                    sceneJson.scene.object.children.forEach(uuid => {
                        if (typeof uuid === "string") {
                            // 保存uuid对应的function
                            funcMap.set(uuid, this.unpackGroup);

                            this.callFunNum.value++;
                        } else {
                            newChildren.push(uuid)
                        }
                    })
                    sceneJson.scene.object.children = newChildren;

                    loadScene(sceneJson, configJson);

                    sceneJson.scene.groupChildren = [...funcMap.keys()];

                    // 解压处理好的数据添加至 indexDB -> Msy3D -> scene
                    // db.setItem(dbKey, sceneJson);
                })
        }

        // db.getItem(dbKey).then((dbData) => {
        //     if (dbData === undefined) {
        networkGet();
        //     }else{
        //         this.recordUuid(dbData.scene);
        //
        //         dbData.scene.images.forEach((image) => {
        //             this.imagesMap.set(image.uuid, image);
        //         })
        //
        //         dbData.scene.groupChildren.forEach((uuid) => {
        //             // 保存uuid对应的function
        //             funcMap.set(uuid, this.unpackGroup);
        //
        //             this.callFunNum.value++;
        //         })
        //
        //         loadScene(dbData);
        //     }
        // })
    }

    /**
     * 异步解压group zip
     * @param uuid
     * @param parent
     * @param rootGroupUuid
     */
    private unpackGroup(uuid: string, parent, rootGroupUuid) {
        //const db = window.VIEWPORT.modules["db"];
        //const dbTable = `${useProjectState.getState().sceneId}-${useProjectState.getState().info.id}`;

        // map 存储 json 解析完成后执行的 function; key 为 uuid
        const funcMap = new Map<string, Function>();

        const check = (object, group) => {
            // 检查数据是否已完善
            let isDone = true;
            object.children.forEach((child) => {
                // 检查几何数据是否都已拥有
                if (child.geometry && group.geometries?.findIndex((geometry) => geometry.uuid === child.geometry) === -1) {
                    if (!this.geometryMap.has(child.geometry)) {
                        isDone = false;
                    } else {
                        group.geometries.push(this.geometryMap.get(child.geometry));
                    }
                }

                // material->texture->image
                if (child.material && group.materials?.findIndex((material) => material.uuid === child.material) === -1) {
                    if (!this.materialsMap.has(child.material)) {
                        isDone = false;
                    } else {
                        group.materials.push(this.materialsMap.get(child.material));

                        const material = this.materialsMap.get(child.material);
                        if (material.map && group.textures?.findIndex((texture) => texture.uuid === material.map) === -1) {
                            if (!this.textureMap.has(material.map)) {
                                isDone = false;
                            } else {
                                group.textures.push(this.textureMap.get(material.map));

                                const texture = this.textureMap.get(material.map);
                                if (texture.image && group.images?.findIndex((image) => image.uuid === texture.image) === -1) {
                                    if (!this.imagesMap.has(texture.image)) {
                                        isDone = false;
                                    } else {
                                        group.images.push(this.imagesMap.get(texture.image));
                                    }
                                }
                            }
                        }
                    }
                }

                if (child.children?.length > 0 && isDone) {
                    isDone = check(child, group);
                }
            })

            return isDone;
        }

        const parse = (json) => {
            if (check(json.object, json)) {
                this.loader.parse(json, (group) => {
                    const bones: Bone[] = [];
                    group.getObjectsByProperty("type", "Bone", bones);
                    if (bones.length > 0) {
                        this.skeletonClass.addBones(bones);
                    }

                    // 如果存在Skeleton（骨架），须存下来后面替换回原骨骼。
                    // 因为loader.parse时如果对应骨骼（Bone）还未加载，会生成新的空骨骼替代，
                    if (json.skeletons) {
                        this.skeletonClass.handleSkeletons(json.skeletons, group);
                    }

                    group.uuid = uuid;

                    // requestIdleCallback(()=>{
                    window.editor.addObject(group, parent);

                    this.callFunNum.value--;
                    // })

                    // 开始执行funcMap中的function
                    funcMap.forEach((func, uuid) => {
                        func.call(this, uuid, group, rootGroupUuid);
                    })
                })
            } else {
                const timer = setTimeout(() => {
                    clearTimeout(timer);
                    parse(json);
                }, 200)
            }
        }

        const getByNetwork = () => {
            Package._fetch(`${this.prefix_url}/${uuid}.zip`, {
                onSuccess: (zipRes) => {
                    const file = zipRes.blob();

                    const zip = new JSZip();
                    let json: GroupJson;

                    // 几何数据数组
                    let geometries: Array<any> = [];

                    const unzipDone = () => {
                        // 贴图还原至sceneJson
                        json.images = json.images.map((item) => {
                            const nameSplit = item.split(".");
                            if (nameSplit[1] === "env") {
                                const urlSplit = nameSplit[0].split("!");
                                return this.imagesMap.get(urlSplit[3])
                            } else {
                                return this.imagesMap.get(nameSplit[0])
                            }
                        });

                        // 几何数据还原至sceneJson
                        json.geometries = geometries;

                        this.recordUuid(json);

                        // 遍历children,拉取group zip还原
                        const children: any = [];
                        json.object.children.forEach((uuid) => {
                            if (typeof uuid === "string") {
                                // 保存uuid对应的function
                                funcMap.set(uuid, this.unpackGroup);

                                this.callFunNum.value++;
                            } else {
                                children.push(uuid)
                            }
                        })
                        json.object.children = children;

                        json.object.groupChildren = [...funcMap.keys()];

                        // 解压处理好的数据添加至 indexDB -> Msy3D -> ${dbTable}
                        // db.setItem(`${uuid}.zip`, json,dbTable);

                        parse(json);
                    }

                    zip.loadAsync(file as Blob).then(res => {
                        let num = new Proxy({ value: Object.keys(res.files).length }, {
                            set(target, p, value) {
                                target[p] = value;
                                if (value === 0) {
                                    unzipDone();
                                }
                                return true;
                            }
                        })
                        for (let key in res.files) {
                            //判断是否是目录
                            if (!res.files[key].dir) {
                                const fileName = res.files[key].name;

                                //找到我们压缩包所需要的json文件
                                if (fileName === `${uuid}.json`) { // 场景json
                                    res.file(fileName)?.async('string').then(content => {
                                        //得到scene.json文件的内容
                                        json = JSON.parse(content);

                                        num.value--;
                                    })
                                } else if (fileName.substring(0, 9) === "Textures/") {
                                    /**
                                     * 贴图
                                     * 分为两种情况：
                                     * 1.贴图为env格式（type!width!height!uuid.env），转换为arraybuffer格式，存入map
                                     * 2.贴图为普通图片格式，直接存入map
                                     **/
                                    if (/\.env$/.test(fileName)) {
                                        // 转换回贴图原始信息，存入map
                                        res.file(fileName)?.async('arraybuffer').then(content => {
                                            this.unGzipImage(fileName.replace("Textures/", ""), content);

                                            num.value--;
                                        })
                                    } else {
                                        res.file(fileName)?.async('string').then(content => {
                                            this.unGzipImage(fileName.replace("Textures/", ""), content);

                                            num.value--;
                                        })
                                    }
                                } else if (/^Geometries\/geometries_\d*\.json$/.test(fileName)) {
                                    res.file(fileName)?.async('string').then(content => {
                                        geometries.push(...this.unGzipGeometryJson(JSON.parse(content)));

                                        num.value--;
                                    })
                                }
                            } else {
                                num.value--;
                            }
                        }
                    })
                }
            });
        }

        // db.getItem(`${uuid}.zip`, dbTable).then((dbData:GroupJson | undefined) => {
        //     if (dbData === undefined) {
        getByNetwork();
        //     } else {
        //         this.recordUuid(dbData);
        //
        //         dbData.images.forEach((image) => {
        //             this.imagesMap.set(image.uuid, image);
        //         })
        //
        //         dbData.object.groupChildren.forEach((uuid) => {
        //             // 保存uuid对应的function
        //             funcMap.set(uuid, this.unpackGroup);
        //
        //             this.callFunNum.value++;
        //         })
        //
        //         parse(dbData);
        //     }
        // }).catch((err: string) => {
        //     console.log("err:", err)
        // })
    }
}