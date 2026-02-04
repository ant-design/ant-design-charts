"use strict";
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
exports.Title = void 0;
const constants_1 = require("../../constants");
const label_1 = require("../../elements/shapes/label");
const padding_1 = require("../../utils/padding");
const prefix_1 = require("../../utils/prefix");
const base_plugin_1 = require("../base-plugin");
const canvas_1 = require("../utils/canvas");
const commonStyle = {
    fill: '#1D2129',
    wordWrap: true, // 自动换行
    maxLines: 1, // 最大行数
    textOverflow: 'ellipsis', // 溢出隐藏省略号
    textBaseline: 'top',
    /**
     * textAlign 需要和 x 结合使用
     * 举例: 前提条件: 画布 width = 600
     * - textAlign: 'start' | 'left
     *    需要设 x = 0
     * - textAlign: 'end' | 'right'
     *    需要设 x = 600 (即画布的宽度)
     * - textAlign: 'center'
     *    需要设 x = 300 (即画布的宽度 / 2)
     */
    textAlign: 'start',
    x: 0,
};
const defaultTitleStyle = Object.assign(Object.assign({}, commonStyle), { fillOpacity: 0.9, fontSize: 16, fontWeight: 'bold' });
const defaultSubTitleStyle = Object.assign(Object.assign({}, commonStyle), { fillOpacity: 0.65, fontSize: 12, fontWeight: 'normal' });
const defaultOptions = {
    align: 'left',
    spacing: 8,
    size: 44,
    padding: [16, 24, 0, 24],
};
const titleKey = 'title';
const subtitleKey = 'subtitle';
class Title extends base_plugin_1.BasePlugin {
    get padding() {
        return (0, padding_1.parsePadding)(this.options.padding);
    }
    constructor(context, options) {
        const combineOption = Object.assign({}, defaultOptions, options);
        super(context, combineOption);
        this.onRender = () => {
            const canvas = this.updateCanvas();
            this.renderTitle(canvas);
        };
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(constants_1.GraphEvent.AFTER_RENDER, this.onRender);
        graph.on(constants_1.GraphEvent.AFTER_ANIMATE, this.onRender);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(constants_1.GraphEvent.AFTER_RENDER, this.onRender);
        graph.off(constants_1.GraphEvent.AFTER_ANIMATE, this.onRender);
    }
    destroy() {
        var _a, _b;
        this.unbindEvents();
        (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.container) === null || _b === void 0 ? void 0 : _b.remove();
        super.destroy();
    }
    updateCanvas() {
        const { size, className, align } = this.options;
        const [width] = this.context.canvas.getSize();
        const [pt = 0, , pb = 0] = this.padding;
        const height = size + pt + pb;
        if (this.canvas) {
            const { width: w, height: h } = this.canvas.getConfig();
            if (width !== w || height !== h)
                this.canvas.resize(width, height);
        }
        else {
            const positions = {
                left: 'left-top',
                center: 'top',
                right: 'right-top',
            };
            const [$container, canvas] = (0, canvas_1.createPluginCanvas)({
                width,
                height,
                placement: positions[align] || positions.left,
                className: 'title-canvas',
                graphCanvas: this.context.canvas,
            });
            if (className)
                $container.classList.add(className);
            this.container = $container;
            this.canvas = canvas;
        }
        return this.canvas;
    }
    renderTitle(canvas) {
        const titles = new TitleComponent({
            options: this.options,
            ctx: this.context,
        });
        canvas.removeChildren();
        titles.getTitle().forEach((label) => {
            if (label)
                canvas.appendChild(label);
        });
    }
}
exports.Title = Title;
class TitleComponent {
    get padding() {
        return (0, padding_1.parsePadding)(this.options.padding);
    }
    constructor(props) {
        const { options, ctx } = props;
        this.options = options;
        this.context = ctx;
    }
    getTitle() {
        const _a = this.options, _b = titleKey, propsTitle = _a[_b], _c = subtitleKey, propsSubtitle = _a[_c], { spacing = 44, padding, align } = _a, style = __rest(_a, [typeof _b === "symbol" ? _b : _b + "", typeof _c === "symbol" ? _c : _c + "", "spacing", "padding", "align"]);
        const titleText = propsTitle;
        const subTitleText = propsSubtitle;
        const titleStyle = (0, prefix_1.subStyleProps)(style, titleKey);
        const subtitleStyle = (0, prefix_1.subStyleProps)(style, subtitleKey);
        const [topGraphWidth] = this.context.graph.getSize();
        const [pt = 0, pr = 0, , pl = 0] = this.padding;
        const canvasWidth = topGraphWidth;
        const textWidth = canvasWidth - pl - pr;
        let subTitle = null;
        let alignX = pl;
        let textAlign = 'left';
        switch (align) {
            case 'left':
                alignX = pl;
                textAlign = 'left';
                break;
            case 'center':
                alignX = canvasWidth / 2;
                textAlign = 'center';
                break;
            case 'right':
                alignX = canvasWidth - pr;
                textAlign = 'right';
                break;
            default:
                alignX = pl;
                textAlign = 'left';
        }
        const title = new label_1.Label({
            className: titleKey,
            style: Object.assign(Object.assign(Object.assign(Object.assign({}, defaultTitleStyle), { wordWrapWidth: textWidth - 5, x: alignX, y: pt, textAlign }), titleStyle), { text: titleText }),
        });
        const titleBBox = title.getBBox();
        if (subTitleText) {
            subTitle = new label_1.Label({
                className: 'subTitle',
                style: Object.assign(Object.assign(Object.assign(Object.assign({}, defaultSubTitleStyle), { wordWrapWidth: textWidth - 5, x: alignX, y: titleBBox.height + spacing + pt, textAlign }), subtitleStyle), { text: subTitleText }),
            });
        }
        return [title, subTitle];
    }
}
//# sourceMappingURL=index.js.map