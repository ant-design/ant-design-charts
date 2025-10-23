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
exports.BaseCombo = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const bbox_1 = require("../../utils/bbox");
const id_1 = require("../../utils/id");
const padding_1 = require("../../utils/padding");
const position_1 = require("../../utils/position");
const prefix_1 = require("../../utils/prefix");
const size_1 = require("../../utils/size");
const style_1 = require("../../utils/style");
const vector_1 = require("../../utils/vector");
const nodes_1 = require("../nodes");
const shapes_1 = require("../shapes");
const image_1 = require("../shapes/image");
/**
 * <zh/> 组合元素的基类
 *
 * <en/> Base class of combo
 * @remarks
 * <zh/> 自定义组合时，推荐使用这个类作为基类。这样，用户只需要专注于实现 keyShape 的绘制逻辑
 *
 * <en/> When customizing a combo, it is recommended to use this class as the base class. In this way, users only need to focus on the logic of drawing keyShape
 */
class BaseCombo extends nodes_1.BaseNode {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: BaseCombo.defaultStyleProps }, options));
        this.type = 'combo';
        this.updateComboPosition(this.parsedAttributes);
    }
    getKeySize(attributes) {
        const { collapsed, childrenNode = [] } = attributes;
        if (childrenNode.length === 0)
            return this.getEmptyKeySize(attributes);
        return collapsed ? this.getCollapsedKeySize(attributes) : this.getExpandedKeySize(attributes);
    }
    getEmptyKeySize(attributes) {
        const { padding, collapsedSize } = attributes;
        const [top, right, bottom, left] = (0, padding_1.parsePadding)(padding);
        return (0, vector_1.add)((0, size_1.parseSize)(collapsedSize), [left + right, top + bottom, 0]);
    }
    getCollapsedKeySize(attributes) {
        return (0, size_1.parseSize)(attributes.collapsedSize);
    }
    getExpandedKeySize(attributes) {
        const contentBBox = this.getContentBBox(attributes);
        return [(0, bbox_1.getBBoxWidth)(contentBBox), (0, bbox_1.getBBoxHeight)(contentBBox), 0];
    }
    getContentBBox(attributes) {
        const { childrenNode = [], padding } = attributes;
        const children = childrenNode.map((id) => this.context.element.getElement(id)).filter(Boolean);
        if (children.length === 0) {
            const bbox = new g_1.AABB();
            const { x = 0, y = 0, size } = attributes;
            const [width, height] = (0, size_1.parseSize)(size);
            bbox.setMinMax([x - width / 2, y - height / 2, 0], [x + width / 2, y + height / 2, 0]);
            return bbox;
        }
        const childrenBBox = (0, bbox_1.getCombinedBBox)(children.map((child) => child.getBounds()));
        if (!padding)
            return childrenBBox;
        return (0, bbox_1.getExpandedBBox)(childrenBBox, padding);
    }
    drawCollapsedMarkerShape(attributes, container) {
        const style = this.getCollapsedMarkerStyle(attributes);
        this.upsert('collapsed-marker', shapes_1.Icon, style, container);
        (0, image_1.connectImage)(this);
    }
    getCollapsedMarkerStyle(attributes) {
        if (!attributes.collapsed || !attributes.collapsedMarker)
            return false;
        const _a = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'collapsedMarker'), { type } = _a, collapsedMarkerStyle = __rest(_a, ["type"]);
        const keyShape = this.getShape('key');
        const [x, y] = (0, position_1.getXYByPlacement)(keyShape.getLocalBounds(), 'center');
        const style = Object.assign(Object.assign({}, collapsedMarkerStyle), { x, y });
        if (type) {
            const text = this.getCollapsedMarkerText(type, attributes);
            Object.assign(style, { text });
        }
        return style;
    }
    getCollapsedMarkerText(type, attributes) {
        const { childrenData = [] } = attributes;
        const { model } = this.context;
        if (type === 'descendant-count')
            return model.getDescendantsData(this.id).length.toString();
        if (type === 'child-count')
            return childrenData.length.toString();
        if (type === 'node-count')
            return model
                .getDescendantsData(this.id)
                .filter((datum) => model.getElementType((0, id_1.idOf)(datum)) === 'node')
                .length.toString();
        if ((0, util_1.isFunction)(type))
            return type(childrenData);
        return '';
    }
    getComboPosition(attributes) {
        const { x = 0, y = 0, collapsed, childrenData = [] } = attributes;
        if (childrenData.length === 0)
            return [+x, +y, 0];
        if (collapsed) {
            const { model } = this.context;
            const descendants = model.getDescendantsData(this.id).filter((datum) => !model.isCombo((0, id_1.idOf)(datum)));
            if (descendants.length > 0 && descendants.some(position_1.hasPosition)) {
                // combo 被收起，返回平均中心位置 / combo is collapsed, return the average center position
                const totalPosition = descendants.reduce((acc, datum) => (0, vector_1.add)(acc, (0, position_1.positionOf)(datum)), [0, 0, 0]);
                return (0, vector_1.divide)(totalPosition, descendants.length);
            }
            // empty combo
            return [+x, +y, 0];
        }
        return this.getContentBBox(attributes).center;
    }
    getComboStyle(attributes) {
        const [x, y] = this.getComboPosition(attributes);
        // x/y will be used to calculate position later.
        return { x, y, transform: [['translate', x, y]] };
    }
    updateComboPosition(attributes) {
        const comboStyle = this.getComboStyle(attributes);
        Object.assign(this.style, comboStyle);
        // Sync combo position to model
        const { x, y } = comboStyle;
        this.context.model.syncNodeLikeDatum({ id: this.id, style: { x, y } });
        (0, image_1.dispatchPositionChange)(this);
    }
    render(attributes, container = this) {
        super.render(attributes, container);
        // collapsed marker
        this.drawCollapsedMarkerShape(attributes, container);
    }
    update(attr = {}) {
        super.update(attr);
        this.updateComboPosition(this.parsedAttributes);
    }
    onframe() {
        super.onframe();
        // 收起状态下，通过动画来更新位置
        // Update position through animation in collapsed state
        if (!this.attributes.collapsed)
            this.updateComboPosition(this.parsedAttributes);
        this.drawKeyShape(this.parsedAttributes, this);
    }
    animate(keyframes, options) {
        const animation = super.animate(this.attributes.collapsed
            ? keyframes
            : // 如果当前 combo 是展开状态，则动画不受 x, y, z, transform 影响，仅由子元素决定位置
                // If the current combo is in the expanded state, the animation is not affected by x, y, z, transform, and the position is determined only by the child elements
                keyframes.map((_a) => {
                    var { x, y, z, transform } = _a, keyframe = __rest(_a, ["x", "y", "z", "transform"]);
                    return keyframe;
                }), options);
        if (!animation)
            return animation;
        return new Proxy(animation, {
            set: (target, propKey, value) => {
                if (propKey === 'currentTime')
                    Promise.resolve().then(() => this.onframe());
                return Reflect.set(target, propKey, value);
            },
        });
    }
}
exports.BaseCombo = BaseCombo;
BaseCombo.defaultStyleProps = {
    childrenNode: [],
    droppable: true,
    draggable: true,
    collapsed: false,
    collapsedSize: 32,
    collapsedMarker: true,
    collapsedMarkerZIndex: 1,
    collapsedMarkerFontSize: 12,
    collapsedMarkerTextAlign: 'center',
    collapsedMarkerTextBaseline: 'middle',
    collapsedMarkerType: 'child-count',
};
//# sourceMappingURL=base-combo.js.map