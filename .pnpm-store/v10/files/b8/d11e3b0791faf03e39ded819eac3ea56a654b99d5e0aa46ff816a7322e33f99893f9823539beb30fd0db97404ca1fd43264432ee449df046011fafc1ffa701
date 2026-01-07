"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeDefaultY = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add a default encode for rangeY
 * when data is just an array
 */
const MaybeDefaultY = () => {
    return (I, mark) => {
        const { data } = mark;
        if (Array.isArray(data) &&
            (data.every(Array.isArray) || !data.some(helper_1.isObject))) {
            const extractY = (data, index) => Array.isArray(data[0])
                ? data.map((item) => item[index])
                : [data[index]];
            return [
                I,
                (0, util_1.deepMix)({}, mark, {
                    encode: {
                        y: (0, helper_1.column)(extractY(data, 0)),
                        y1: (0, helper_1.column)(extractY(data, 1)),
                    },
                }),
            ];
        }
        return [I, mark];
    };
};
exports.MaybeDefaultY = MaybeDefaultY;
exports.MaybeDefaultY.props = {};
//# sourceMappingURL=maybeDefaultY.js.map