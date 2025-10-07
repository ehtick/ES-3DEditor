declare namespace ITiles{
    interface options{
        // tiles地址
        url:string;
        // tiles group名称
        name?:string;
        // 加载的3d tiles由于坐标原因，一般不在原点。此配置项为true则重置回原点
        reset2origin?:boolean;
        // debug模式
        debug?: {
            // 是否启用
            enabled:boolean;
            // 渲染tile set时使用的颜色模式
            colorMode: number;
            // 显示包围盒的线框
            displayBoxBounds: boolean;
            // 显示包围球的线框
            displaySphereBounds: boolean;
        };
        // 目标屏幕空间误差（以像素为单位）
        errorTarget?: number;
        // LRU缓存:TilesRenderer 的实用程序类，用于跟踪当前使用的项目，以便渲染的项目不会被卸载
        LRUCache?:{
            // 缓存项的最大数量。如果当前缓存项的数量等于此值，则无法再缓存任何项
            maxSize?:number;
            // 缓存项的最小数量。超过此数量，若缓存数据未被使用，则会将其卸载。
            minSize?:number;
            // 最大缓存大小（以字节为单位）。如果当前缓存的字节数等于此值，则无法再缓存任何项目。
            maxBytesSize?:number;
            // 最小缓存大小（以字节数为单位）。超过此大小的缓存数据（如果未使用）将被卸载。
            minBytesSize?:number;
        }
    }
}