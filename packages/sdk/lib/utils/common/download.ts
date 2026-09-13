/**
 * 下载 Blob 二进制对象，并在触发下载后释放临时 URL。
 * @param {Blob} blob 待下载的二进制对象。
 * @param {string} filename 下载文件名，空值时使用 data.json。
 * @returns {void} 无返回值。
 */
export function downloadBlob(blob, filename) {
    const link = document.createElement('a');

    link.download = filename || 'data.json';
    const blobUrl = URL.createObjectURL(blob);
    try {
        link.href = blobUrl;
        link.dispatchEvent(new MouseEvent('click'));
    } finally {
        // 延迟回收，为浏览器启动下载预留时间；触发异常时同样释放本次 URL。
        setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    }
}

/**
 * 下载ArrayBuffer对象
 * @param buffer
 * @param filename
 */
export function saveArrayBuffer(buffer, filename) {
    downloadBlob(new Blob([buffer], {type: 'application/octet-stream'}), filename);
}

/**
 * 下载text文档
 * @param text
 * @param filename
 */
export function saveString(text, filename) {
    downloadBlob(new Blob([text], {type: 'text/plain'}), filename);
}
