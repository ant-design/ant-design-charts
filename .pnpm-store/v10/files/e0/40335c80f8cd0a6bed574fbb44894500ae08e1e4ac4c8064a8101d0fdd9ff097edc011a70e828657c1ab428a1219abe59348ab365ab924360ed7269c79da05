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
import { CustomElement } from '@antv/g';
import { Layout } from '@antv/component';
import { deepMix, upperFirst } from '@antv/util';
import { select } from '../utils/selection';
export function createComponent(descriptor) {
    return class extends CustomElement {
        constructor(config) {
            super(config);
            this.descriptor = descriptor;
        }
        connectedCallback() {
            var _a, _b;
            (_b = (_a = this.descriptor).render) === null || _b === void 0 ? void 0 : _b.call(_a, this.attributes, this);
        }
        update(cfg = {}) {
            var _a, _b;
            this.attr(deepMix({}, this.attributes, cfg));
            (_b = (_a = this.descriptor).render) === null || _b === void 0 ? void 0 : _b.call(_a, this.attributes, this);
        }
    };
}
export function maybeAppend(parent, selector, node) {
    if (!parent.querySelector(selector)) {
        return select(parent).append(node);
    }
    return select(parent).select(selector);
}
export function titleContent(field) {
    return Array.isArray(field) ? field.join(', ') : `${field || ''}`;
}
export function inferComponentLayout(position, userDefinitions) {
    const preset = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    };
    let { flexDirection, justifyContent, alignItems } = preset;
    const layout = {
        top: ['row', 'flex-start', 'center'],
        bottom: ['row', 'flex-start', 'center'],
        left: ['column', 'flex-start', 'center'],
        right: ['column', 'flex-start', 'center'],
        center: ['column', 'center', 'center'],
    };
    if (position in layout) {
        [flexDirection, justifyContent, alignItems] = layout[position];
    }
    return Object.assign({ display: 'flex', flexDirection,
        justifyContent,
        alignItems }, userDefinitions);
}
export class G2Layout extends Layout {
    get child() {
        var _a;
        return (_a = this.children) === null || _a === void 0 ? void 0 : _a[0];
    }
    update(options) {
        var _a;
        this.attr(options);
        const { subOptions } = options;
        (_a = this.child) === null || _a === void 0 ? void 0 : _a.update(subOptions);
    }
}
export class LegendCategoryLayout extends G2Layout {
    update(options) {
        var _a;
        const { subOptions } = options;
        this.attr(options);
        (_a = this.child) === null || _a === void 0 ? void 0 : _a.update(subOptions);
    }
}
export function scaleOf(scales, type) {
    var _a;
    return (_a = scales.filter((s) => s.getOptions().name === type)) === null || _a === void 0 ? void 0 : _a[0];
}
export function isHorizontal(orientation) {
    return orientation === 'horizontal' || orientation === 0;
}
export function isVertical(orientation) {
    return orientation === 'vertical' || orientation === -Math.PI / 2;
}
export function inferComponentShape(value, options, component) {
    const { bbox } = value;
    const { position = 'top', size: userDefinedSize, length: userDefinedLength, } = options;
    const isHorizontal = ['top', 'bottom', 'center'].includes(position);
    const [bboxSize, bboxLength] = isHorizontal
        ? [bbox.height, bbox.width]
        : [bbox.width, bbox.height];
    const { defaultSize, defaultLength } = component.props;
    const size = userDefinedSize || defaultSize || bboxSize;
    const length = userDefinedLength || defaultLength || bboxLength;
    const orientation = isHorizontal ? 'horizontal' : 'vertical';
    const [width, height] = isHorizontal ? [length, size] : [size, length];
    return {
        orientation,
        width,
        height,
        size,
        length,
    };
}
export function domainOf(scales) {
    // to get a available scale's domain
    return scales
        .find((scale) => scale.getOptions().domain.length > 0)
        .getOptions().domain;
}
export function adaptor(style) {
    const reservedKeys = [
        'arrow',
        'crosshairs',
        'grid',
        'handle',
        'handleLabel',
        'indicator',
        'label',
        'line',
        'tick',
        'tip',
        'title',
        'trunc',
    ];
    // @ts-ignore
    const { style: styles } = style, rest = __rest(style, ["style"]);
    const finalStyle = {};
    Object.entries(rest).forEach(([key, value]) => {
        if (reservedKeys.includes(key)) {
            finalStyle[`show${upperFirst(key)}`] = value;
        }
        else
            finalStyle[key] = value;
    });
    return Object.assign(Object.assign({}, finalStyle), styles);
}
//# sourceMappingURL=utils.js.map