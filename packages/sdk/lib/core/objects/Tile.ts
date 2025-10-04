import {TilesRenderer} from "3d-tiles-renderer";
import {GLTFExtensionsPlugin,DebugTilesPlugin} from "3d-tiles-renderer/plugins";
import Loader from "@/core/loader/Loader.ts";
import {PerspectiveCamera, WebGLRenderer, Group, JSONMeta} from "three";
import {deepAssign} from "@/utils";

export default class Tiles extends Group{
    type = "TilesGroup";
    isTilesGroup = true;

    // 默认配置
    options: ITiles.options = {
        url:"",
        reset2origin:true,
        debug:false,
        name:"Tiles",
        errorTarget: 5,
        LRUCache:{
            maxSize: 4000,
            minSize: 3000,
            maxBytesSize: 0.4 * 2**30,
            minBytesSize: 0.3 * 2**30,
        }
    };

    renderer: TilesRenderer;

    constructor(options:ITiles.options) {
        super();

        if(!options.url){
            throw new Error('[Astral 3D]: No url provided.');
        }

        deepAssign(this.options,options);

        this.name = this.options.name as string;

        this.renderer = this.initRenderer();
        this.add(this.renderer.group);
    }

    get group(){
        return this.renderer.group;
    }

    /**
     * 初始化Tiles渲染器
     */
    initRenderer():TilesRenderer{
        const tilesRenderer = new TilesRenderer(this.options.url);
        tilesRenderer.fetchOptions.mode = 'cors';
        tilesRenderer.errorTarget = this.options.errorTarget || 6;
        // LRUCache
        if(this.options.LRUCache){
            tilesRenderer.lruCache.maxSize = this.options.LRUCache.maxSize || 800;
            tilesRenderer.lruCache.minSize = this.options.LRUCache.minSize || 600;
            tilesRenderer.lruCache.maxBytesSize = this.options.LRUCache.maxBytesSize || 0.4 * 2**30;
            tilesRenderer.lruCache.minBytesSize = this.options.LRUCache.minBytesSize || 0.3 * 2**30;
        }

        // isTilesGroup是只读的，此处绕过 readonly，防止编译报错
        (tilesRenderer.group as { isTilesGroup: boolean }).isTilesGroup = false;
        (tilesRenderer.group as { type: string }).type = "Tiles";
        tilesRenderer.group.isTiles = true;
        tilesRenderer.group.proxy = this;

        tilesRenderer.registerPlugin(new GLTFExtensionsPlugin({
            dracoLoader: Loader.dracoLoader,
            ktxLoader: Loader.ktx2Loader,
        }));
        // Loader.createGLTFLoader(tilesRenderer.manager).then(loader => {
        //     tilesRenderer.manager.addHandler( /\.(gltf|glb)$/g, loader );
        // })

        // 子级瓦片加载
        tilesRenderer.addEventListener('load-model', (e) => {
            e.scene.traverse(c => {
                c.isTiles = true;
                // 子级瓦片不允许选中，添加proxy属性让点击此瓦片时选中此组
                c.proxy = this;

                if(c.type === "Group"){
                    (c as { type: string }).type = "Tiles";
                }else{
                    (c as { type: string }).type = "Tile";
                }
            })
        });

        tilesRenderer.addEventListener("load-error", (e) => {
            console.error(`${tilesRenderer.group.name} load error:`, e);
        });

        if(this.options.debug){
            // 注册调试插件
            tilesRenderer.registerPlugin(new DebugTilesPlugin());
            // 获取调试插件
            const debugTilesPlugin = tilesRenderer.getPluginByName('DEBUG_TILES_PLUGIN') as DebugTilesPlugin;
            // 显示包围盒的线框
            debugTilesPlugin.displayBoxBounds = true;
        }

        return tilesRenderer;
    }

    /**
     * 设置相机和渲染器
     */
    setCameraAndRenderer(camera:PerspectiveCamera,renderer:WebGLRenderer){
        this.renderer.setCamera(camera);
        this.renderer.setResolutionFromRenderer(camera, renderer);
    }

    /**
     * 重写clone方法，因为要接收参数
     */
    clone(recursive: boolean = true) {
        // 断言为可构造类型
        const Ctor = this.constructor as new (opts: ITiles.options) => this;
        return new Ctor(this.options).copy(this, recursive);
    }

    /**
     * 重写toJSON
     */
    toJSON(meta?: JSONMeta){
        const json =  super.toJSON(meta);
        json.object.type= "TilesGroup";
        json.object.options = this.options;

        return json;
    }

    static fromJSON(data: { options: ITiles.options,[s:string]:any },copyAttr = true){
        const tiles = new Tiles(data.options);

        if(copyAttr){
            data.children = undefined;
            Loader.objectLoader.copyAttrByData(tiles,data);
        }

        return tiles;
    }

    /**
     * 更新/渲染Tiles
     */
    update(){
        this.renderer.update();
    }

    /**
     * 自我销毁
     */
    dispose(){
        this.renderer.dispose();
    }
}