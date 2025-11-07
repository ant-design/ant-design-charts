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
exports.useMemoConnector = exports.useAsyncMemoPreprocessor = exports.useMemoPreprocessor = void 0;
function withFunction(_, value) {
    return typeof value === 'function' ? `${value}` : value;
}
/**
 * Returns a sync function returning memoized transform of preprocessor and connector.
 * The memoized value will recompute only when the data reference or options has changed.
 */
function useMemoPreprocessor(Preprocessor) {
    const dataCache = new Map();
    const NewPreprocessor = (options) => {
        const key = JSON.stringify(options, withFunction);
        const transform = Preprocessor(options);
        return ({ data }) => {
            if (dataCache.has(data)) {
                const cache = dataCache.get(data);
                cache[key] = cache[key] || transform(data);
                return cache[key];
            }
            const cache = {};
            cache[key] = transform({ data });
            dataCache.set(data, cache);
            return cache[key];
        };
    };
    NewPreprocessor.props = Preprocessor.props;
    return NewPreprocessor;
}
exports.useMemoPreprocessor = useMemoPreprocessor;
/**
 * Returns a async function returning memoized transform and connector.
 * The memoized value will recompute only when the data reference or options has changed.
 */
function useAsyncMemoPreprocessor(Preprocessor) {
    const dataCache = new Map();
    const NewPreprocessor = (options) => {
        const key = JSON.stringify(options, withFunction);
        const transform = Preprocessor(options);
        return ({ data }) => __awaiter(this, void 0, void 0, function* () {
            if (dataCache.has(data)) {
                const cache = dataCache.get(data);
                cache[key] = cache[key] || (yield transform(data));
                return cache[key];
            }
            const cache = {};
            cache[key] = transform({ data });
            dataCache.set(data, cache);
            return cache[key];
        });
    };
    NewPreprocessor.props = Preprocessor.props;
    return NewPreprocessor;
}
exports.useAsyncMemoPreprocessor = useAsyncMemoPreprocessor;
/**
 * Returns a async function returning memoized connector transform.
 * The memoized value will recompute only when options has changed
 * and ignore data.
 */
function useMemoConnector(Connector) {
    const cache = {};
    const NewConnector = (options) => {
        const transform = Connector(options);
        const key = JSON.stringify(options, withFunction);
        return () => __awaiter(this, void 0, void 0, function* () {
            cache[key] = cache[key] || (yield transform({}));
            return cache[key];
        });
    };
    NewConnector.props = Connector.props;
    return NewConnector;
}
exports.useMemoConnector = useMemoConnector;
//# sourceMappingURL=memo.js.map