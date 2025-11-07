import { Text as GText } from '@antv/g';
import { BaseShape } from './base-shape';
import { Image as GImage } from './image';
/**
 * <zh/> 图标
 *
 * <en/> Icon
 * @remarks
 * <zh/> 图标是一种特殊的图形，可以是图片或者文字。传入 src 属性时，会渲染图片；传入 text 属性时，会渲染文字。
 *
 * <en/> Icon is a special shape, which can be an image or text. When the src attribute is passed in, an image will be rendered; when the text attribute is passed in, text will be rendered.
 */
export class Icon extends BaseShape {
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
        this.upsert('icon', (this.isImage() ? GImage : GText), this.getIconStyle(attributes), container);
    }
}
//# sourceMappingURL=icon.js.map