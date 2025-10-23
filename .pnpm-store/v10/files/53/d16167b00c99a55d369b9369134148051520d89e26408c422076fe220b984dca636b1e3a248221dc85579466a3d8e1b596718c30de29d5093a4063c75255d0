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
exports.WordCloud = exports.normalizeFontSize = exports.processImageMask = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const flow_1 = require("./utils/flow");
const d3_cloud_1 = require("./utils/d3-cloud");
const DEFAULT_OPTIONS = {
    fontSize: [20, 60],
    font: 'Impact',
    padding: 2,
    rotate: function () {
        return (~~(Math.random() * 6) - 3) * 30;
    },
};
/**
 * Process the image mask of wordCloud.
 * @param img
 * @returns
 */
function processImageMask(img) {
    return new Promise((res, rej) => {
        if (img instanceof HTMLImageElement) {
            res(img);
            return;
        }
        if (typeof img === 'string') {
            const image = new Image();
            image.crossOrigin = 'anonymous';
            image.src = img;
            image.onload = () => res(image);
            image.onerror = () => {
                console.error(`'image ${img} load failed !!!'`);
                rej();
            };
            return;
        }
        rej();
    });
}
exports.processImageMask = processImageMask;
/**
 * normalize fontSize range to d3-cloud fontSize function.
 * @param fontSize
 * @param range
 * @returns
 */
function normalizeFontSize(fontSize, range) {
    if (typeof fontSize === 'function')
        return fontSize;
    if (Array.isArray(fontSize)) {
        const [fMin, fMax] = fontSize;
        if (!range)
            return () => (fMax + fMin) / 2;
        const [min, max] = range;
        if (max === min)
            return () => (fMax + fMin) / 2;
        return ({ value }) => ((fMax - fMin) / (max - min)) * (value - min) + fMin;
    }
    return () => fontSize;
}
exports.normalizeFontSize = normalizeFontSize;
const WordCloud = (options, context) => {
    return (data) => __awaiter(void 0, void 0, void 0, function* () {
        const cloudOptions = Object.assign({}, DEFAULT_OPTIONS, options, {
            canvas: context.createCanvas,
        });
        const layout = (0, d3_cloud_1.tagCloud)();
        yield (0, flow_1.flow)(layout, cloudOptions)
            .set('fontSize', (v) => {
            const arr = data.map((d) => d.value);
            return normalizeFontSize(v, [(0, d3_array_1.min)(arr), (0, d3_array_1.max)(arr)]);
        })
            .set('font')
            .set('fontStyle')
            .set('fontWeight')
            .set('padding')
            .set('rotate')
            .set('size')
            .set('spiral')
            .set('timeInterval')
            .set('random')
            .set('text')
            .set('on')
            .set('canvas')
            .setAsync('imageMask', processImageMask, layout.createMask);
        layout.words([...data]);
        const result = layout.start();
        const [cw, ch] = cloudOptions.size;
        const defaultBounds = [
            { x: 0, y: 0 },
            { x: cw, y: ch },
        ];
        const { _bounds: bounds = defaultBounds, _tags, hasImage } = result;
        const tags = _tags.map((_a) => {
            var { x, y, font } = _a, rest = __rest(_a, ["x", "y", "font"]);
            return (Object.assign(Object.assign({}, rest), { x: x + cw / 2, y: y + ch / 2, fontFamily: font }));
        });
        // Append two data to replace the corner of top-left and bottom-right, avoid calculate the actual bounds will occur some error.
        const [{ x: tlx, y: tly }, { x: brx, y: bry }] = bounds;
        const invisibleText = { text: '', value: 0, opacity: 0, fontSize: 0 };
        tags.push(Object.assign(Object.assign({}, invisibleText), { x: hasImage ? 0 : tlx, y: hasImage ? 0 : tly }), Object.assign(Object.assign({}, invisibleText), { x: hasImage ? cw : brx, y: hasImage ? ch : bry }));
        return tags;
    });
};
exports.WordCloud = WordCloud;
exports.WordCloud.props = {};
//# sourceMappingURL=wordCloud.js.map