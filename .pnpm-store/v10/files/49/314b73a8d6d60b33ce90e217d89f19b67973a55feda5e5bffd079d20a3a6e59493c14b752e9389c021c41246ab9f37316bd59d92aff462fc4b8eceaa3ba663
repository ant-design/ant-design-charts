import { Rect as GRect } from '@antv/g';
import { subStyleProps } from '../../utils/prefix';
import { BaseCombo } from './base-combo';
/**
 * <zh/> 矩形组合
 *
 * <en/> Rect combo
 */
export class RectCombo extends BaseCombo {
    constructor(options) {
        super(options);
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', GRect, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        const [width, height] = this.getKeySize(attributes);
        return Object.assign(Object.assign(Object.assign({}, keyStyle), (attributes.collapsed && subStyleProps(keyStyle, 'collapsed'))), { width,
            height, x: -width / 2, y: -height / 2 });
    }
}
//# sourceMappingURL=rect.js.map