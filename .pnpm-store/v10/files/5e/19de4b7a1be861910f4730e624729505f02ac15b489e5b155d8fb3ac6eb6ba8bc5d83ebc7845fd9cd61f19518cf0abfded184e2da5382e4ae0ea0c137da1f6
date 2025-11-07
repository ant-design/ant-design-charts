"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lru = void 0;
const flru_1 = __importDefault(require("flru"));
const cache = (0, flru_1.default)(3);
/**
 * A decorator to return new function with LRU cache.
 */
function lru(fn, keyFn = (...args) => `${args[0]}`, maxSize = 16) {
    const cache = (0, flru_1.default)(maxSize);
    return (...args) => {
        const key = keyFn(...args);
        let v = cache.get(key);
        if (cache.has(key))
            return cache.get(key);
        v = fn(...args);
        cache.set(key, v);
        return v;
    };
}
exports.lru = lru;
//# sourceMappingURL=lru.js.map