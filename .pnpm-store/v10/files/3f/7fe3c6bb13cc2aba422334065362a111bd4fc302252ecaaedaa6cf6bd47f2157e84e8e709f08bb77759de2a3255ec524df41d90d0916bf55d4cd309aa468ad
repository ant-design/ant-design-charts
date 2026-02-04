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
import { Image, Path } from '@antv/g';
import { isFunction, pick } from '@antv/util';
import { getBBoxHeight, getBBoxWidth, getNodeBBox } from '../../utils/bbox';
import { getArrowSize, getBadgePositionStyle, getCubicLoopPath, getLabelPositionStyle } from '../../utils/edge';
import { findPorts, getConnectionPoint, getPortPosition, isSameNode } from '../../utils/element';
import { subStyleProps } from '../../utils/prefix';
import { parseSize } from '../../utils/size';
import { mergeOptions } from '../../utils/style';
import * as Symbol from '../../utils/symbol';
import { getWordWrapWidthByEnds } from '../../utils/text';
import { BaseElement } from '../base-element';
import { Badge, Label } from '../shapes';
/**
 * <zh/> 边元素基类
 *
 * <en/> Base class of the edge
 */
export class BaseEdge extends BaseElement {
    constructor(options) {
        super(mergeOptions({ style: BaseEdge.defaultStyleProps }, options));
        this.type = 'edge';
    }
    get sourceNode() {
        const { sourceNode: source } = this.parsedAttributes;
        return this.context.element.getElement(source);
    }
    get targetNode() {
        const { targetNode: target } = this.parsedAttributes;
        return this.context.element.getElement(target);
    }
    getKeyStyle(attributes) {
        const _a = this.getGraphicStyle(attributes), { loop } = _a, style = __rest(_a, ["loop"]);
        const { sourceNode, targetNode } = this;
        const d = loop && isSameNode(sourceNode, targetNode) ? this.getLoopPath(attributes) : this.getKeyPath(attributes);
        const keyStyle = { d };
        Path.PARSED_STYLE_LIST.forEach((key) => {
            // @ts-expect-error skip type error
            if (key in style)
                keyStyle[key] = style[key];
        });
        return keyStyle;
    }
    getLoopPath(attributes) {
        const { sourcePort, targetPort } = attributes;
        const node = this.sourceNode;
        const bbox = getNodeBBox(node);
        const defaultDist = Math.max(getBBoxWidth(bbox), getBBoxHeight(bbox));
        const { placement, clockwise, dist = defaultDist, } = subStyleProps(this.getGraphicStyle(attributes), 'loop');
        return getCubicLoopPath(node, placement, clockwise, dist, sourcePort, targetPort);
    }
    getEndpoints(attributes, optimize = true, controlPoints = []) {
        const { sourcePort: sourcePortKey, targetPort: targetPortKey } = attributes;
        const { sourceNode, targetNode } = this;
        const [sourcePort, targetPort] = findPorts(sourceNode, targetNode, sourcePortKey, targetPortKey);
        if (!optimize) {
            const sourcePoint = sourcePort ? getPortPosition(sourcePort) : sourceNode.getCenter();
            const targetPoint = targetPort ? getPortPosition(targetPort) : targetNode.getCenter();
            return [sourcePoint, targetPoint];
        }
        const _controlPoints = typeof controlPoints === 'function' ? controlPoints() : controlPoints;
        const sourcePoint = getConnectionPoint(sourcePort || sourceNode, _controlPoints[0] || targetPort || targetNode);
        const targetPoint = getConnectionPoint(targetPort || targetNode, _controlPoints[_controlPoints.length - 1] || sourcePort || sourceNode);
        return [sourcePoint, targetPoint];
    }
    getHaloStyle(attributes) {
        if (attributes.halo === false)
            return false;
        const keyStyle = this.getKeyStyle(attributes);
        const haloStyle = subStyleProps(this.getGraphicStyle(attributes), 'halo');
        return Object.assign(Object.assign({}, keyStyle), haloStyle);
    }
    getLabelStyle(attributes) {
        if (attributes.label === false || !attributes.labelText)
            return false;
        const labelStyle = subStyleProps(this.getGraphicStyle(attributes), 'label');
        const { placement, offsetX, offsetY, autoRotate, maxWidth } = labelStyle, restStyle = __rest(labelStyle, ["placement", "offsetX", "offsetY", "autoRotate", "maxWidth"]);
        const labelPositionStyle = getLabelPositionStyle(this.shapeMap.key, placement, autoRotate, offsetX, offsetY);
        const bbox = this.shapeMap.key.getLocalBounds();
        const wordWrapWidth = getWordWrapWidthByEnds([bbox.min, bbox.max], maxWidth);
        return Object.assign({ wordWrapWidth }, labelPositionStyle, restStyle);
    }
    getBadgeStyle(attributes) {
        if (attributes.badge === false || !attributes.badgeText)
            return false;
        const _a = subStyleProps(attributes, 'badge'), { offsetX, offsetY, placement } = _a, badgeStyle = __rest(_a, ["offsetX", "offsetY", "placement"]);
        return Object.assign(badgeStyle, getBadgePositionStyle(this.shapeMap, placement, attributes.labelPlacement, offsetX, offsetY));
    }
    drawArrow(attributes, type) {
        var _a;
        const isStart = type === 'start';
        const arrowType = type === 'start' ? 'startArrow' : 'endArrow';
        const enable = attributes[arrowType];
        const keyShape = this.shapeMap.key;
        if (enable) {
            const arrowStyle = this.getArrowStyle(attributes, isStart);
            const [marker, markerOffset, arrowOffset] = isStart
                ? ['markerStart', 'markerStartOffset', 'startArrowOffset']
                : ['markerEnd', 'markerEndOffset', 'endArrowOffset'];
            const arrow = keyShape.parsedStyle[marker];
            // update
            if (arrow)
                arrow.attr(arrowStyle);
            // create
            else {
                const Ctor = arrowStyle.src ? Image : Path;
                const arrowShape = new Ctor({ style: arrowStyle });
                keyShape.style[marker] = arrowShape;
            }
            keyShape.style[markerOffset] = attributes[arrowOffset] || arrowStyle.width / 2 + +arrowStyle.lineWidth;
        }
        else {
            // destroy
            const marker = isStart ? 'markerStart' : 'markerEnd';
            (_a = keyShape.style[marker]) === null || _a === void 0 ? void 0 : _a.destroy();
            keyShape.style[marker] = null;
        }
    }
    getArrowStyle(attributes, isStart) {
        const keyStyle = this.getShape('key').attributes;
        const arrowType = isStart ? 'startArrow' : 'endArrow';
        const _a = subStyleProps(this.getGraphicStyle(attributes), arrowType), { size, type } = _a, arrowStyle = __rest(_a, ["size", "type"]);
        const [width, height] = parseSize(getArrowSize(keyStyle.lineWidth, size));
        const arrowFn = isFunction(type) ? type : Symbol[type] || Symbol.triangle;
        const d = arrowFn(width, height);
        return Object.assign(pick(keyStyle, ['stroke', 'strokeOpacity', 'fillOpacity']), { width, height }, Object.assign({}, (d && { d, fill: type === 'simple' ? '' : keyStyle.stroke })), arrowStyle);
    }
    drawLabelShape(attributes, container) {
        const style = this.getLabelStyle(attributes);
        this.upsert('label', Label, style, container);
    }
    drawHaloShape(attributes, container) {
        const style = this.getHaloStyle(attributes);
        this.upsert('halo', Path, style, container);
    }
    drawBadgeShape(attributes, container) {
        const style = this.getBadgeStyle(attributes);
        this.upsert('badge', Badge, style, container);
    }
    drawSourceArrow(attributes) {
        this.drawArrow(attributes, 'start');
    }
    drawTargetArrow(attributes) {
        this.drawArrow(attributes, 'end');
    }
    drawKeyShape(attributes, container) {
        const style = this.getKeyStyle(attributes);
        return this.upsert('key', Path, style, container);
    }
    render(attributes = this.parsedAttributes, container = this) {
        // 1. key shape
        this.drawKeyShape(attributes, container);
        if (!this.getShape('key'))
            return;
        // 2. arrows
        this.drawSourceArrow(attributes);
        this.drawTargetArrow(attributes);
        // 3. label
        this.drawLabelShape(attributes, container);
        // 4. halo
        this.drawHaloShape(attributes, container);
        // 5. badges
        this.drawBadgeShape(attributes, container);
    }
    onframe() {
        this.drawKeyShape(this.parsedAttributes, this);
        this.drawSourceArrow(this.parsedAttributes);
        this.drawTargetArrow(this.parsedAttributes);
        this.drawHaloShape(this.parsedAttributes, this);
        this.drawLabelShape(this.parsedAttributes, this);
        this.drawBadgeShape(this.parsedAttributes, this);
    }
    animate(keyframes, options) {
        const animation = super.animate(keyframes, options);
        if (!animation)
            return animation;
        // 设置 currentTime 时触发更新
        // Trigger update when setting currentTime
        return new Proxy(animation, {
            set: (target, propKey, value) => {
                // 需要推迟 onframe 调用时机，等待节点位置更新完成
                // Need to delay the timing of the onframe call, wait for the node position update to complete
                if (propKey === 'currentTime')
                    Promise.resolve().then(() => this.onframe());
                return Reflect.set(target, propKey, value);
            },
        });
    }
}
BaseEdge.defaultStyleProps = {
    badge: true,
    badgeOffsetX: 0,
    badgeOffsetY: 0,
    badgePlacement: 'suffix',
    isBillboard: true,
    label: true,
    labelAutoRotate: true,
    labelIsBillboard: true,
    labelMaxWidth: '80%',
    labelOffsetX: 4,
    labelOffsetY: 0,
    labelPlacement: 'center',
    labelTextBaseline: 'middle',
    labelWordWrap: false,
    halo: false,
    haloDroppable: false,
    haloLineDash: 0,
    haloLineWidth: 12,
    haloPointerEvents: 'none',
    haloStrokeOpacity: 0.25,
    haloZIndex: -1,
    loop: true,
    startArrow: false,
    startArrowLineDash: 0,
    startArrowLineJoin: 'round',
    startArrowLineWidth: 1,
    startArrowTransformOrigin: 'center',
    startArrowType: 'vee',
    endArrow: false,
    endArrowLineDash: 0,
    endArrowLineJoin: 'round',
    endArrowLineWidth: 1,
    endArrowTransformOrigin: 'center',
    endArrowType: 'vee',
    loopPlacement: 'top',
    loopClockwise: true,
};
//# sourceMappingURL=base-edge.js.map