import { isFunction, isNumber, isObject } from '@antv/util';
import { parseSize } from './size';
/**
 * Format value with multiple types into a function returns number.
 * @param defaultValue default value when value is invalid
 * @param value value to be formatted
 * @returns formatted result, a function returns number
 */
export function formatNumberFn(defaultValue, value) {
    let resultFunc;
    if (isFunction(value)) {
        resultFunc = value;
    }
    else if (isNumber(value)) {
        // value is number
        resultFunc = () => value;
    }
    else {
        // value is not number and function
        resultFunc = () => defaultValue;
    }
    return resultFunc;
}
/**
 * Format size config with multiple types into a function returns number
 * @param defaultValue default value when value is invalid
 * @param value value to be formatted
 * @param resultIsNumber whether returns number
 * @returns formatted result, a function returns number
 */
export function formatSizeFn(defaultValue, value, resultIsNumber = true) {
    if (!value && value !== 0) {
        return (d) => {
            const { size } = d.data || {};
            if (size) {
                if (Array.isArray(size))
                    return resultIsNumber ? Math.max(...size) || defaultValue : size;
                if (isObject(size) &&
                    size.width &&
                    size.height) {
                    return resultIsNumber
                        ? Math.max(size.width, size.height) || defaultValue
                        : [size.width, size.height];
                }
                return size;
            }
            return defaultValue;
        };
    }
    if (isFunction(value))
        return value;
    if (isNumber(value))
        return () => value;
    if (Array.isArray(value)) {
        return () => {
            if (resultIsNumber)
                return Math.max(...value) || defaultValue;
            return value;
        };
    }
    if (isObject(value) && value.width && value.height) {
        return () => {
            if (resultIsNumber)
                return Math.max(value.width, value.height) || defaultValue;
            return [value.width, value.height];
        };
    }
    return () => defaultValue;
}
/**
 * format the props nodeSize and nodeSpacing to a function
 * @param nodeSize
 * @param nodeSpacing
 * @returns
 */
export const formatNodeSizeToNumber = (nodeSize, nodeSpacing, defaultNodeSize = 10) => {
    let nodeSizeFunc;
    const nodeSpacingFunc = typeof nodeSpacing === 'function' ? nodeSpacing : () => nodeSpacing || 0;
    if (!nodeSize) {
        nodeSizeFunc = (d) => {
            var _a, _b, _c;
            if ((_a = d.data) === null || _a === void 0 ? void 0 : _a.bboxSize)
                return (_b = d.data) === null || _b === void 0 ? void 0 : _b.bboxSize;
            if ((_c = d.data) === null || _c === void 0 ? void 0 : _c.size) {
                const dataSize = d.data.size;
                if (Array.isArray(dataSize))
                    return dataSize;
                if (isObject(dataSize))
                    return [dataSize.width, dataSize.height];
                return dataSize;
            }
            return defaultNodeSize;
        };
    }
    else if (Array.isArray(nodeSize)) {
        nodeSizeFunc = (d) => nodeSize;
    }
    else if (isFunction(nodeSize)) {
        nodeSizeFunc = nodeSize;
    }
    else {
        nodeSizeFunc = (d) => nodeSize;
    }
    const func = (d) => {
        const nodeSize = nodeSizeFunc(d);
        const nodeSpacing = nodeSpacingFunc(d);
        return Math.max(...parseSize(nodeSize)) + nodeSpacing;
    };
    return func;
};
//# sourceMappingURL=function.js.map