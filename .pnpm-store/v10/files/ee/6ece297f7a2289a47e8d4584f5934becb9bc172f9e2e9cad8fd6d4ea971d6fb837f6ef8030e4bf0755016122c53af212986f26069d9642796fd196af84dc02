import { mergeOptions } from '../../utils/style';
import { BaseShape } from './base-shape';
import { Label } from './label';
/**
 * <zh/> 徽标
 *
 * <en/> Badge
 * @remarks
 * <zh/> 徽标是一种特殊的标签，通常用于展示数量或状态信息。
 *
 * <en/> Badge is a special label, usually used to display quantity or status information.
 */
export class Badge extends BaseShape {
    constructor(options) {
        super(mergeOptions({ style: Badge.defaultStyleProps }, options));
    }
    getBadgeStyle(attributes) {
        return this.getGraphicStyle(attributes);
    }
    render(attributes = this.parsedAttributes, container = this) {
        this.upsert('label', Label, this.getBadgeStyle(attributes), container);
    }
    getGeometryBounds() {
        const labelShape = this.getShape('label');
        const shape = labelShape.getShape('background') || labelShape.getShape('text');
        return shape.getGeometryBounds();
    }
}
Badge.defaultStyleProps = {
    padding: [2, 4, 2, 4],
    fontSize: 10,
    wordWrap: false,
    backgroundRadius: '50%',
    backgroundOpacity: 1,
};
//# sourceMappingURL=badge.js.map