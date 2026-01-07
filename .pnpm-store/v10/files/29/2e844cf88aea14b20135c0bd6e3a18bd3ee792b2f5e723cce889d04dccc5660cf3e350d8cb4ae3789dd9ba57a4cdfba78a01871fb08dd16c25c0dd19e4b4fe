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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordCloud = void 0;
const util_1 = require("@antv/util");
function initializeData(data, encode) {
    const { text = 'text', value = 'value' } = encode;
    return data.map((d) => (Object.assign(Object.assign({}, d), { text: d[text], value: d[value] })));
}
const GET_DEFAULT_OPTIONS = () => ({
    axis: false,
    type: 'text',
    encode: {
        x: 'x',
        y: 'y',
        text: 'text',
        rotate: 'rotate',
        fontSize: 'size',
        shape: 'tag',
    },
    scale: {
        x: { range: [0, 1] },
        y: { range: [0, 1] },
    },
    style: {
        fontFamily: (d) => d.fontFamily,
    },
    tooltip: {
        items: [
            (datum) => ({
                name: datum.text,
                value: datum.value,
            }),
        ],
    },
});
const WordCloud = (options, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { width, height } = context;
    const { data, encode = {}, scale, style = {}, layout = {} } = options, resOptions = __rest(options, ["data", "encode", "scale", "style", "layout"]);
    const initializedData = initializeData(data, encode);
    return (0, util_1.deepMix)({}, GET_DEFAULT_OPTIONS(), Object.assign(Object.assign({ data: {
            value: initializedData,
            transform: [
                Object.assign({ type: 'wordCloud', size: [width, height] }, layout),
            ],
        }, encode,
        scale,
        style }, resOptions), { axis: false }));
});
exports.WordCloud = WordCloud;
exports.WordCloud.props = {};
//# sourceMappingURL=wordCloud.js.map