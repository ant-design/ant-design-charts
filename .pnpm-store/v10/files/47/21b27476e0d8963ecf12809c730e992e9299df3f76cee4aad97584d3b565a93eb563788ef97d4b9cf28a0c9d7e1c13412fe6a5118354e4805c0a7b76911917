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
import { Path } from '@antv/g';
import { getPolygonTextStyleByPlacement } from '../../utils/polygon';
import { subStyleProps } from '../../utils/prefix';
import { mergeOptions } from '../../utils/style';
import { getWordWrapWidthByBox } from '../../utils/text';
import { BaseShape } from './base-shape';
import { Label } from './label';
export class Contour extends BaseShape {
    constructor(options) {
        super(mergeOptions({ style: Contour.defaultStyleProps }, options));
    }
    getLabelStyle(attributes) {
        if (!attributes.label || !attributes.d || attributes.d.length === 0)
            return false;
        const _a = subStyleProps(this.getGraphicStyle(attributes), 'label'), { maxWidth, offsetX, offsetY, autoRotate, placement, closeToPath } = _a, labelStyle = __rest(_a, ["maxWidth", "offsetX", "offsetY", "autoRotate", "placement", "closeToPath"]);
        const key = this.shapeMap.key;
        const keyBounds = key === null || key === void 0 ? void 0 : key.getRenderBounds();
        return Object.assign(getPolygonTextStyleByPlacement(keyBounds, placement, offsetX, offsetY, closeToPath, attributes.d, autoRotate), { wordWrapWidth: getWordWrapWidthByBox(keyBounds, maxWidth) }, labelStyle);
    }
    getKeyStyle(attributes) {
        return this.getGraphicStyle(attributes);
    }
    render(attributes, container) {
        this.upsert('key', Path, this.getKeyStyle(attributes), container);
        this.upsert('label', Label, this.getLabelStyle(attributes), container);
    }
}
Contour.defaultStyleProps = {
    label: true,
    labelPlacement: 'bottom',
    labelCloseToPath: true,
    labelAutoRotate: true,
    labelOffsetX: 0,
    labelOffsetY: 0,
};
//# sourceMappingURL=contour.js.map