import { injectWasm } from "@/utils/wasm/inject";

export function clearBuffer() {
    injectWasm({ wasmUrl: "/wasm/Astral3DEditor.wasm" }).then(() => {
        // 加载完wasm后自动注册了清除缓存的函数调用
        window.clearBuffer();
    });
}