"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const g_1 = require("@antv/g");
const base_shape_1 = require("./base-shape");
const image_1 = require("./image");
/**
 * <zh/> 图标
 *
 * <en/> Icon
 * @remarks
 * <zh/> 图标是一种特殊的图形，可以是图片或者文字。传入 src 属性时，会渲染图片；传入 text 属性时，会渲染文字。
 *
 * <en/> Icon is a special shape, which can be an image or text. When the src attribute is passed in, an image will be rendered; when the text attribute is passed in, text will be rendered.
 */
class Icon extends base_shape_1.BaseShape {
    constructor(options) {
        super(options);
    }
    isImage() {
        const { src } = this.attributes;
        return !!src;
    }
    getIconStyle(attributes = this.attributes) {
        const { width = 0, height = 0 } = attributes;
        const style = this.getGraphicStyle(attributes);
        if (this.isImage()) {
            return Object.assign({ x: -width / 2, y: -height / 2 }, style);
        }
        return Object.assign({ textBaseline: 'middle', textAlign: 'center' }, style);
    }
    render(attributes = this.attributes, container = this) {
        this.upsert('icon', (this.isImage() ? image_1.Image : g_1.Text), this.getIconStyle(attributes), container);
    }
}
exports.Icon = Icon;
//# sourceMappingURL=icon.js.map