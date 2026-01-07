const globals = getGlobalThis();
/**
 * Get the global scope for browsers that do not support globalThis
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis
 */
export function getGlobalThis() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
}
;
/**
 * Test if an object is transferable
 * @param x Object
 */
export function isTransferableObject(x) {
    return (x instanceof ArrayBuffer ||
        x instanceof MessagePort ||
        (globals.ImageBitmap && x instanceof ImageBitmap) ||
        (globals.OffscreenCanvas && x instanceof OffscreenCanvas));
}
//# sourceMappingURL=util.js.map