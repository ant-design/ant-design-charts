"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow = void 0;
/**
 * @todo Combine with the `Container` util
 */
function flow(target, source) {
    return {
        set(key, normalize, callback) {
            if (source[key] === undefined)
                return this;
            const value = normalize ? normalize.call(null, source[key]) : source[key];
            if (callback)
                callback.call(null, value);
            else if (typeof target[key] === 'function')
                target[key](value);
            else
                target[key] = value;
            return this;
        },
        setAsync(key, normalize, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                if (source[key] === undefined)
                    return this;
                const value = normalize
                    ? yield normalize.call(null, source[key])
                    : source[key];
                if (callback)
                    callback.call(null, value);
                else if (typeof target[key] === 'function')
                    target[key](value);
                else
                    target[key] = value;
                return this;
            });
        },
    };
}
exports.flow = flow;
//# sourceMappingURL=flow.js.map