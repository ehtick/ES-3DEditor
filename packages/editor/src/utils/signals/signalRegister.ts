import {Utils} from '@astral3d/engine';

/**
 * cesium 相关页面使用的
 */
const cesiumSignals = [
    // cesium/viewPort.ts 停止渲染循环
    "cesium_stopLoop",
    // cesium融合场景下的threejs scene点击事件
    "cesium_clickThreeScene",
    //销毁viewPort
    "cesium_destroy",
    // 飞行定位
    "cesium_flyTo",
]

/**
 * 其他不便分类的
 */
const otherSignal = [
    // 编辑脚本
    "editScript",
    // 场景树变化
    "sceneTreeChange",
]

Utils.SignalsRegisterFn([
    ...cesiumSignals,
    ...otherSignal
])