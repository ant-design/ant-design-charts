"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const event_1 = require("../utils/event");
const helper_1 = require("../utils/helper");
const utils_1 = require("./utils");
// For extended component
function maybeComponentRoot(node) {
    return (0, utils_1.maybeRoot)(node, (node) => node.className === 'component');
}
// For extended shape.
function maybeElementRoot(node) {
    return (0, utils_1.maybeRoot)(node, (node) => node.className === 'element');
}
// For extended label.
function maybeLabelRoot(node) {
    return (0, utils_1.maybeRoot)(node, (node) => node.className === 'label');
}
function bubblesEvent(eventType, view, emitter, predicate = (event) => true) {
    return (e) => {
        if (!predicate(e))
            return;
        // Emit plot events.
        emitter.emit(`plot:${eventType}`, e);
        const { target } = e;
        // There is no target for pointerupoutside event if out of canvas.
        if (!target)
            return;
        const { className } = target;
        // If target area is plot area, do not emit extra events.
        if (className === 'plot')
            return;
        // If target is element or child of element.
        const elementRoot = maybeElementRoot(target);
        // If target is component or child of component.
        const componentRoot = maybeComponentRoot(target);
        //  If target is babel or child of babel.
        const babelRoot = maybeLabelRoot(target);
        const root = elementRoot || componentRoot || babelRoot;
        if (!root)
            return;
        const { className: elementType, markType } = root;
        const e1 = Object.assign(Object.assign({}, e), { nativeEvent: true });
        if (elementType === 'element') {
            e1['data'] = { data: (0, helper_1.dataOf)(root, view) };
            emitter.emit(`element:${eventType}`, e1);
            emitter.emit(`${markType}:${eventType}`, e1);
        }
        else if (elementType === 'label') {
            //label children [Text2, Rect2, Path2],
            e1['data'] = { data: root.attributes.datum };
            emitter.emit(`label:${eventType}`, e1);
            emitter.emit(`${className}:${eventType}`, e1);
        }
        else {
            emitter.emit(`component:${eventType}`, e1);
            emitter.emit(`${className}:${eventType}`, e1);
        }
    };
}
// @todo Provide more info for event.dataset.
function Event() {
    return (context, _, emitter) => {
        const { container, view } = context;
        // Click events.
        const click = bubblesEvent(event_1.ChartEvent.CLICK, view, emitter, (e) => e.detail === 1);
        const dblclick = bubblesEvent(event_1.ChartEvent.DBLCLICK, view, emitter, (e) => e.detail === 2);
        // Pointer events.
        const pointertap = bubblesEvent(event_1.ChartEvent.POINTER_TAP, view, emitter);
        const pointerdown = bubblesEvent(event_1.ChartEvent.POINTER_DOWN, view, emitter);
        const pointerup = bubblesEvent(event_1.ChartEvent.POINTER_UP, view, emitter);
        const pointerover = bubblesEvent(event_1.ChartEvent.POINTER_OVER, view, emitter);
        const pointerout = bubblesEvent(event_1.ChartEvent.POINTER_OUT, view, emitter);
        const pointermove = bubblesEvent(event_1.ChartEvent.POINTER_MOVE, view, emitter);
        const pointerenter = bubblesEvent(event_1.ChartEvent.POINTER_ENTER, view, emitter);
        const pointerleave = bubblesEvent(event_1.ChartEvent.POINTER_LEAVE, view, emitter);
        const pointerupoutside = bubblesEvent(event_1.ChartEvent.POINTER_UPOUTSIDE, view, emitter);
        // Drag and drop events.
        const dragstart = bubblesEvent(event_1.ChartEvent.DRAG_START, view, emitter);
        const drag = bubblesEvent(event_1.ChartEvent.DRAG, view, emitter);
        const dragend = bubblesEvent(event_1.ChartEvent.DRAG_END, view, emitter);
        const dragenter = bubblesEvent(event_1.ChartEvent.DRAG_ENTER, view, emitter);
        const dragleave = bubblesEvent(event_1.ChartEvent.DRAG_LEAVE, view, emitter);
        const dragover = bubblesEvent(event_1.ChartEvent.DRAG_OVER, view, emitter);
        const drop = bubblesEvent(event_1.ChartEvent.DROP, view, emitter);
        // For legacy usage.
        container.addEventListener('click', click);
        container.addEventListener('click', dblclick);
        // Recommend events.
        container.addEventListener('pointertap', pointertap);
        container.addEventListener('pointerdown', pointerdown);
        container.addEventListener('pointerup', pointerup);
        container.addEventListener('pointerover', pointerover);
        container.addEventListener('pointerout', pointerout);
        container.addEventListener('pointermove', pointermove);
        container.addEventListener('pointerenter', pointerenter);
        container.addEventListener('pointerleave', pointerleave);
        container.addEventListener('pointerupoutside', pointerupoutside);
        // Plugin events.
        container.addEventListener('dragstart', dragstart);
        container.addEventListener('drag', drag);
        container.addEventListener('dragend', dragend);
        container.addEventListener('dragenter', dragenter);
        container.addEventListener('dragleave', dragleave);
        container.addEventListener('dragover', dragover);
        container.addEventListener('drop', drop);
        return () => {
            container.removeEventListener('click', click);
            container.removeEventListener('click', dblclick);
            container.removeEventListener('pointertap', pointertap);
            container.removeEventListener('pointerdown', pointerdown);
            container.removeEventListener('pointerup', pointerup);
            container.removeEventListener('pointerover', pointerover);
            container.removeEventListener('pointerout', pointerout);
            container.removeEventListener('pointermove', pointermove);
            container.removeEventListener('pointerenter', pointerenter);
            container.removeEventListener('pointerleave', pointerleave);
            container.removeEventListener('pointerupoutside', pointerupoutside);
            container.removeEventListener('dragstart', dragstart);
            container.removeEventListener('drag', drag);
            container.removeEventListener('dragend', dragend);
            container.removeEventListener('dragenter', dragenter);
            container.removeEventListener('dragleave', dragleave);
            container.removeEventListener('dragover', dragover);
            container.removeEventListener('drop', drop);
        };
    };
}
exports.Event = Event;
Event.props = {
    reapplyWhenUpdate: true,
};
//# sourceMappingURL=event.js.map