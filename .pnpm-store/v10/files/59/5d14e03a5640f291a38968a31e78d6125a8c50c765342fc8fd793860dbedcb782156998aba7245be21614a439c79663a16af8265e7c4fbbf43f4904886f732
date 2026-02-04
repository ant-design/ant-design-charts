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
import { FederatedPointerEvent, HTML as GHTML, Rect, } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { isNil, isUndefined, pick, set } from '@antv/util';
import { CommonEvent } from '../../constants';
import { BaseNode } from './base-node';
/**
 * <zh/> HTML 节点
 *
 * <en/> HTML node
 * @see https://github.com/antvis/G/blob/next/packages/g/src/plugins/EventPlugin.ts
 */
export class HTML extends BaseNode {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { style: Object.assign({}, HTML.defaultStyleProps, options.style) }));
        this.rootPointerEvent = new FederatedPointerEvent(null);
        this.forwardEvents = (nativeEvent) => {
            const canvas = this.context.canvas;
            const iCanvas = canvas.context.renderingContext.root.ownerDocument.defaultView;
            const normalizedEvents = this.normalizeToPointerEvent(nativeEvent, iCanvas);
            normalizedEvents.forEach((normalizedEvent) => {
                const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvent, iCanvas, nativeEvent);
                // 当点击到 html 元素时，避免触发 pointerupoutside 事件
                // When clicking on the html element, avoid triggering the pointerupoutside event
                set(canvas.context.eventService, 'mappingTable.pointerupoutside', []);
                canvas.context.eventService.mapEvent(event);
            });
        };
    }
    get eventService() {
        return this.context.canvas.context.eventService;
    }
    get events() {
        return [
            CommonEvent.CLICK,
            CommonEvent.POINTER_DOWN,
            CommonEvent.POINTER_MOVE,
            CommonEvent.POINTER_UP,
            CommonEvent.POINTER_OVER,
            CommonEvent.POINTER_LEAVE,
        ];
    }
    getDomElement() {
        return this.getShape('key').getDomElement();
    }
    /**
     * @override
     */
    render(attributes = this.parsedAttributes, container = this) {
        this.drawKeyShape(attributes, container);
        this.drawPortShapes(attributes, container);
    }
    getKeyStyle(attributes) {
        const _a = pick(attributes, ['dx', 'dy', 'innerHTML', 'pointerEvents', 'cursor']), { dx = 0, dy = 0 } = _a, style = __rest(_a, ["dx", "dy"]);
        const [width, height] = this.getSize(attributes);
        return Object.assign(Object.assign({ x: dx, y: dy }, style), { width, height });
    }
    drawKeyShape(attributes, container) {
        const style = this.getKeyStyle(attributes);
        const { x, y, width = 0, height = 0 } = style;
        const bounds = this.upsert('key-container', Rect, { x, y, width, height, opacity: 0 }, container);
        return this.upsert('key', GHTML, style, bounds);
    }
    connectedCallback() {
        // only enable in canvas renderer
        const renderer = this.context.canvas.getRenderer('main');
        const isCanvasRenderer = renderer instanceof Renderer;
        if (!isCanvasRenderer)
            return;
        const element = this.getDomElement();
        this.events.forEach((eventName) => {
            // @ts-expect-error assert event is PointerEvent
            element.addEventListener(eventName, this.forwardEvents);
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'zIndex' && oldValue !== newValue) {
            this.getDomElement().style.zIndex = newValue;
        }
    }
    destroy() {
        const element = this.getDomElement();
        this.events.forEach((eventName) => {
            // @ts-expect-error assert event is PointerEvent
            element.removeEventListener(eventName, this.forwardEvents);
        });
        super.destroy();
    }
    normalizeToPointerEvent(event, canvas) {
        const normalizedEvents = [];
        if (canvas.isTouchEvent(event)) {
            for (let i = 0; i < event.changedTouches.length; i++) {
                const touch = event.changedTouches[i];
                // use changedTouches instead of touches since touchend has no touches
                // @see https://stackoverflow.com/a/10079076
                if (isUndefined(touch.button))
                    touch.button = 0;
                if (isUndefined(touch.buttons))
                    touch.buttons = 1;
                if (isUndefined(touch.isPrimary)) {
                    touch.isPrimary = event.touches.length === 1 && event.type === 'touchstart';
                }
                if (isUndefined(touch.width))
                    touch.width = touch.radiusX || 1;
                if (isUndefined(touch.height))
                    touch.height = touch.radiusY || 1;
                if (isUndefined(touch.tiltX))
                    touch.tiltX = 0;
                if (isUndefined(touch.tiltY))
                    touch.tiltY = 0;
                if (isUndefined(touch.pointerType))
                    touch.pointerType = 'touch';
                // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/identifier
                if (isUndefined(touch.pointerId))
                    touch.pointerId = touch.identifier || 0;
                if (isUndefined(touch.pressure))
                    touch.pressure = touch.force || 0.5;
                if (isUndefined(touch.twist))
                    touch.twist = 0;
                if (isUndefined(touch.tangentialPressure))
                    touch.tangentialPressure = 0;
                touch.isNormalized = true;
                touch.type = event.type;
                normalizedEvents.push(touch);
            }
        }
        else if (canvas.isMouseEvent(event)) {
            const tempEvent = event;
            if (isUndefined(tempEvent.isPrimary))
                tempEvent.isPrimary = true;
            if (isUndefined(tempEvent.width))
                tempEvent.width = 1;
            if (isUndefined(tempEvent.height))
                tempEvent.height = 1;
            if (isUndefined(tempEvent.tiltX))
                tempEvent.tiltX = 0;
            if (isUndefined(tempEvent.tiltY))
                tempEvent.tiltY = 0;
            if (isUndefined(tempEvent.pointerType))
                tempEvent.pointerType = 'mouse';
            if (isUndefined(tempEvent.pointerId))
                tempEvent.pointerId = 1;
            if (isUndefined(tempEvent.pressure))
                tempEvent.pressure = 0.5;
            if (isUndefined(tempEvent.twist))
                tempEvent.twist = 0;
            if (isUndefined(tempEvent.tangentialPressure))
                tempEvent.tangentialPressure = 0;
            tempEvent.isNormalized = true;
            normalizedEvents.push(tempEvent);
        }
        else {
            normalizedEvents.push(event);
        }
        return normalizedEvents;
    }
    transferMouseData(event, nativeEvent) {
        event.isTrusted = nativeEvent.isTrusted;
        event.srcElement = nativeEvent.srcElement;
        event.timeStamp = performance.now();
        event.type = nativeEvent.type;
        event.altKey = nativeEvent.altKey;
        event.metaKey = nativeEvent.metaKey;
        event.shiftKey = nativeEvent.shiftKey;
        event.ctrlKey = nativeEvent.ctrlKey;
        event.button = nativeEvent.button;
        event.buttons = nativeEvent.buttons;
        event.client.x = nativeEvent.clientX;
        event.client.y = nativeEvent.clientY;
        event.movement.x = nativeEvent.movementX;
        event.movement.y = nativeEvent.movementY;
        event.page.x = nativeEvent.pageX;
        event.page.y = nativeEvent.pageY;
        event.screen.x = nativeEvent.screenX;
        event.screen.y = nativeEvent.screenY;
        event.relatedTarget = null;
    }
    bootstrapEvent(event, normalizedEvent, view, nativeEvent) {
        event.view = view;
        // @ts-ignore
        event.originalEvent = null;
        event.nativeEvent = nativeEvent;
        event.pointerId = normalizedEvent.pointerId;
        event.width = normalizedEvent.width;
        event.height = normalizedEvent.height;
        event.isPrimary = normalizedEvent.isPrimary;
        event.pointerType = normalizedEvent.pointerType;
        event.pressure = normalizedEvent.pressure;
        event.tangentialPressure = normalizedEvent.tangentialPressure;
        event.tiltX = normalizedEvent.tiltX;
        event.tiltY = normalizedEvent.tiltY;
        event.twist = normalizedEvent.twist;
        this.transferMouseData(event, normalizedEvent);
        const { x, y } = this.getViewportXY(normalizedEvent);
        event.viewport.x = x;
        event.viewport.y = y;
        const [canvasX, canvasY] = this.context.canvas.getCanvasByViewport([x, y]);
        event.canvas.x = canvasX;
        event.canvas.y = canvasY;
        event.global.copyFrom(event.canvas);
        event.offset.copyFrom(event.canvas);
        event.isTrusted = nativeEvent.isTrusted;
        if (event.type === 'pointerleave') {
            event.type = 'pointerout';
        }
        return event;
    }
    getViewportXY(nativeEvent) {
        let x;
        let y;
        const { offsetX, offsetY, clientX, clientY } = nativeEvent;
        if (!isNil(offsetX) && !isNil(offsetY)) {
            x = offsetX;
            y = offsetY;
        }
        else {
            const point = this.eventService.client2Viewport({ x: clientX, y: clientY });
            x = point.x;
            y = point.y;
        }
        return { x, y };
    }
    onframe() {
        super.onframe();
        // sync opacity
        const { opacity } = this.attributes;
        this.getDomElement().style.opacity = `${opacity}`;
    }
}
HTML.defaultStyleProps = {
    size: [160, 80],
    halo: false,
    icon: false,
    label: false,
    pointerEvents: 'auto',
};
//# sourceMappingURL=html.js.map