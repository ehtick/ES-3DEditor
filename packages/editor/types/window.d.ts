declare interface IAstralEditorWasm {
    exports:{
        computedStyle:()=>void
    }
}
declare interface IAstralEngineWasm {
    exports: {
    }
}

declare interface Window {
	$t:(s: string)=>string;
	$cpt:(s: string)=>ComputedRef<string>;
    $loadingBar?: import("naive-ui").LoadingBarProviderInst;
	$dialog: import('naive-ui').DialogProviderInst;
	$modal: import('naive-ui').ModalProviderInst;
	$message?: import('naive-ui').MessageProviderInst;
	$notification: import('naive-ui').NotificationProviderInst;
	viewer: import('@astral3d/engine').Viewer;
	DrawViewer: any;
    CesiumApp:any;
	VRButton: any;
    log: import('loglevel').RootLogger;
    // 在wasm中注册
    AstralEditorWasm: IAstralEditorWasm;
    AstralEngineWasm: IAstralEngineWasm;
}

declare interface Number{
	format:()=>string
}

declare namespace Common {
    /**
     * 策略模式
     * [状态, 为true时执行的回调函数]
     */
    type StrategyAction = [boolean, () => void];
}
