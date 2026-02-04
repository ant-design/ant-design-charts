"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeDefaultX = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add a default encode for rangeX
 * when data is just an array
 */
const MaybeDefaultX = () => {
    return (I, mark) => {
        const { data } = mark;
        if (Array.isArray(data) &&
            (data.every(Array.isArray) || !data.some(helper_1.isObject))) {
            const extractX = (data, index) => Array.isArray(data[0])
                ? data.map((item) => item[index])
                : [data[index]];
            return [
                I,
                (0, util_1.deepMix)({}, mark, {
                    encode: {
                        x: (0, helper_1.column)(extractX(data, 0)),
                        x1: (0, helper_1.column)(extractX(data, 1)),
                    },
                }),
            ];
        }
        return [I, mark];
    };
};
exports.MaybeDefaultX = MaybeDefaultX;
exports.MaybeDefaultX.props = {};
//# sourceMappingURL=maybeDefaultX.js.map