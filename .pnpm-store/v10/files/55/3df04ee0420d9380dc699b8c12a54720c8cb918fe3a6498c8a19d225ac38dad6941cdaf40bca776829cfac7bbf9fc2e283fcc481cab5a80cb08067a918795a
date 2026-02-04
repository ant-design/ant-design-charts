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
exports.BaseNode = void 0;
const g_1 = require("@antv/g");
const element_1 = require("../../utils/element");
const node_1 = require("../../utils/node");
const palette_1 = require("../../utils/palette");
const point_1 = require("../../utils/point");
const prefix_1 = require("../../utils/prefix");
const size_1 = require("../../utils/size");
const style_1 = require("../../utils/style");
const text_1 = require("../../utils/text");
const visibility_1 = require("../../utils/visibility");
const base_element_1 = require("../base-element");
const shapes_1 = require("../shapes");
const image_1 = require("../shapes/image");
/**
 * <zh/> 节点元素的基类
 *
 * <en/> Base node class
 * @remarks
 * <zh/> 自定义节点时，建议将此类作为基类。这样，你只需要关注如何实现 keyShape 的绘制逻辑
 *
 * <zh/> 设计文档：https://www.yuque.com/antv/g6/gl1iof1xpzg6ed98
 *
 * <en/> When customizing a node, it is recommended to use this class as the base class. This way, you can directly focus on how to implement the drawing logic of keyShape
 *
 * <en/> Design document: https://www.yuque.com/antv/g6/gl1iof1xpzg6ed98
 */
class BaseNode extends base_element_1.BaseElement {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: BaseNode.defaultStyleProps }, options));
        this.type = 'node';
    }
    getSize(attributes = this.attributes) {
        const { size } = attributes;
        return (0, size_1.parseSize)(size);
    }
    getKeyStyle(attributes) {
        const style = this.getGraphicStyle(attributes);
        return Object.assign((0, prefix_1.omitStyleProps)(style, ['label', 'halo', 'icon', 'badge', 'port']));
    }
    getLabelStyle(attributes) {
        if (attributes.label === false || !attributes.labelText)
            return false;
        const _a = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'label'), { placement, maxWidth, offsetX, offsetY } = _a, labelStyle = __rest(_a, ["placement", "maxWidth", "offsetX", "offsetY"]);
        const keyBounds = this.getShape('key').getLocalBounds();
        return Object.assign((0, element_1.getTextStyleByPlacement)(keyBounds, placement, offsetX, offsetY), { wordWrapWidth: (0, text_1.getWordWrapWidthByBox)(keyBounds, maxWidth) }, labelStyle);
    }
    getHaloStyle(attributes) {
        if (attributes.halo === false)
            return false;
        const _a = this.getKeyStyle(attributes), { fill } = _a, keyStyle = __rest(_a, ["fill"]);
        const haloStyle = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'halo');
        return Object.assign(Object.assign(Object.assign({}, keyStyle), { stroke: fill }), haloStyle);
    }
    getIconStyle(attributes) {
        if (attributes.icon === false || (!attributes.iconText && !attributes.iconSrc))
            return false;
        const iconStyle = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'icon');
        return Object.assign((0, node_1.inferIconStyle)(attributes.size, iconStyle), iconStyle);
    }
    getBadgesStyle(attributes) {
        var _a;
        const badges = (0, prefix_1.subObject)(this.shapeMap, 'badge-');
        const badgesShapeStyle = {};
        Object.keys(badges).forEach((key) => {
            badgesShapeStyle[key] = false;
        });
        if (attributes.badge === false || !((_a = attributes.badges) === null || _a === void 0 ? void 0 : _a.length))
            return badgesShapeStyle;
        const { badges: badgeOptions = [], badgePalette, opacity = 1 } = attributes, restAttributes = __rest(attributes, ["badges", "badgePalette", "opacity"]);
        const colors = (0, palette_1.getPaletteColors)(badgePalette);
        const badgeStyle = (0, prefix_1.subStyleProps)(this.getGraphicStyle(restAttributes), 'badge');
        badgeOptions.forEach((option, i) => {
            badgesShapeStyle[i] = Object.assign(Object.assign({ backgroundFill: colors ? colors[i % (colors === null || colors === void 0 ? void 0 : colors.length)] : undefined, opacity }, badgeStyle), this.getBadgeStyle(option));
        });
        return badgesShapeStyle;
    }
    getBadgeStyle(style) {
        const keyShape = this.getShape('key');
        const { placement = 'top', offsetX, offsetY } = style, restStyle = __rest(style, ["placement", "offsetX", "offsetY"]);
        const textStyle = (0, element_1.getTextStyleByPlacement)(keyShape.getLocalBounds(), placement, offsetX, offsetY, true);
        return Object.assign(Object.assign({}, textStyle), restStyle);
    }
    getPortsStyle(attributes) {
        var _a;
        const ports = this.getPorts();
        const portsShapeStyle = {};
        Object.keys(ports).forEach((key) => {
            portsShapeStyle[key] = false;
        });
        if (attributes.port === false || !((_a = attributes.ports) === null || _a === void 0 ? void 0 : _a.length))
            return portsShapeStyle;
        const portStyle = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'port');
        const { ports: portOptions = [] } = attributes;
        portOptions.forEach((option, index) => {
            const key = option.key || index;
            const mergedStyle = Object.assign(Object.assign({}, portStyle), option);
            if ((0, element_1.isSimplePort)(mergedStyle)) {
                portsShapeStyle[key] = false;
            }
            else {
                const [x, y] = this.getPortXY(attributes, option);
                portsShapeStyle[key] = Object.assign({ transform: [['translate', x, y]] }, mergedStyle);
            }
        });
        return portsShapeStyle;
    }
    getPortXY(attributes, style) {
        const { placement = 'left' } = style;
        const keyShape = this.getShape('key');
        return (0, element_1.getPortXYByPlacement)(getBoundsInOffscreen(this.context, keyShape), placement);
    }
    /**
     * Get the ports for the node.
     * @returns Ports shape map.
     */
    getPorts() {
        return (0, prefix_1.subObject)(this.shapeMap, 'port-');
    }
    /**
     * Get the center point of the node.
     * @returns The center point of the node.
     */
    getCenter() {
        return this.getShape('key').getBounds().center;
    }
    /**
     * Get the point on the outer contour of the node that is the intersection with a line starting in the center the ending in the point `p`.
     * @param point - The point to intersect with the node.
     * @param useExtendedLine - Whether to use the extended line.
     * @returns The intersection point.
     */
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return (0, point_1.getRectIntersectPoint)(point, keyShapeBounds, useExtendedLine);
    }
    drawHaloShape(attributes, container) {
        const style = this.getHaloStyle(attributes);
        const keyShape = this.getShape('key');
        this.upsert('halo', keyShape.constructor, style, container);
    }
    drawIconShape(attributes, container) {
        const style = this.getIconStyle(attributes);
        this.upsert('icon', shapes_1.Icon, style, container);
        (0, image_1.connectImage)(this);
    }
    drawBadgeShapes(attributes, container) {
        const badgesStyle = this.getBadgesStyle(attributes);
        Object.keys(badgesStyle).forEach((key) => {
            const style = badgesStyle[key];
            this.upsert(`badge-${key}`, shapes_1.Badge, style, container);
        });
    }
    drawPortShapes(attributes, container) {
        const portsStyle = this.getPortsStyle(attributes);
        Object.keys(portsStyle).forEach((key) => {
            const style = portsStyle[key];
            const shapeKey = `port-${key}`;
            this.upsert(shapeKey, g_1.Circle, style, container);
        });
    }
    drawLabelShape(attributes, container) {
        const style = this.getLabelStyle(attributes);
        this.upsert('label', shapes_1.Label, style, container);
    }
    // 用于装饰抽象方法 / Used to decorate abstract methods
    _drawKeyShape(attributes, container) {
        return this.drawKeyShape(attributes, container);
    }
    render(attributes = this.parsedAttributes, container = this) {
        // 1. key shape
        this._drawKeyShape(attributes, container);
        if (!this.getShape('key'))
            return;
        // 2. halo, use shape same with keyShape
        this.drawHaloShape(attributes, container);
        // 3. icon
        this.drawIconShape(attributes, container);
        // 4. badges
        this.drawBadgeShapes(attributes, container);
        // 5. label
        this.drawLabelShape(attributes, container);
        // 6. ports
        this.drawPortShapes(attributes, container);
    }
    update(attr) {
        super.update(attr);
        if (attr && ('x' in attr || 'y' in attr || 'z' in attr)) {
            (0, image_1.dispatchPositionChange)(this);
        }
    }
    onframe() {
        this.drawBadgeShapes(this.parsedAttributes, this);
        this.drawLabelShape(this.parsedAttributes, this);
    }
}
exports.BaseNode = BaseNode;
BaseNode.defaultStyleProps = {
    x: 0,
    y: 0,
    size: 32,
    droppable: true,
    draggable: true,
    port: true,
    ports: [],
    portZIndex: 2,
    portLinkToCenter: false,
    badge: true,
    badges: [],
    badgeZIndex: 3,
    halo: false,
    haloDroppable: false,
    haloLineDash: 0,
    haloLineWidth: 12,
    haloStrokeOpacity: 0.25,
    haloPointerEvents: 'none',
    haloZIndex: -1,
    icon: true,
    iconZIndex: 1,
    label: true,
    labelIsBillboard: true,
    labelMaxWidth: '200%',
    labelPlacement: 'bottom',
    labelWordWrap: false,
    labelZIndex: 0,
};
/**
 * <zh/> 在离屏画布中获取图形包围盒
 *
 * <en/> Get the bounding box of the shape in the off-screen canvas
 * @param context - <zh/> 运行时上下文 <en/> Runtime context
 * @param shape - <zh/> 图形实例 <en/> Graphic instance
 * @returns <zh/> 图形包围盒 <en/> Graphic bounding box
 */
function getBoundsInOffscreen(context, shape) {
    if (!context)
        return shape.getLocalBounds();
    // 将主图形靠背至全局空间，避免受到父级 transform 的影响
    // 合理的操作应该是拷贝至离屏画布，但目前 G 有点问题
    // Move the main shape to the global space to avoid being affected by the parent transform
    // The reasonable operation should be moved to the off-screen canvas, but there is a problem with G at present
    const canvas = context.canvas.getLayer();
    const substitute = shape.cloneNode();
    (0, visibility_1.setVisibility)(substitute, 'hidden');
    canvas.appendChild(substitute);
    const bounds = substitute.getLocalBounds();
    substitute.destroy();
    return bounds;
}
//# sourceMappingURL=base-node.js.map