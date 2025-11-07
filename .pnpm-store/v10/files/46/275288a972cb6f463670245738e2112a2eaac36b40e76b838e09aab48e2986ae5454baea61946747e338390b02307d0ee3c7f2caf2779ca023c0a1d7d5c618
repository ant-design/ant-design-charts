"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewportEvent = exports.ElementLifeCycleEvent = exports.AnimateEvent = exports.GraphLifeCycleEvent = exports.BaseEvent = void 0;
class BaseEvent {
    constructor(type) {
        this.type = type;
    }
}
exports.BaseEvent = BaseEvent;
class GraphLifeCycleEvent extends BaseEvent {
    constructor(type, data) {
        super(type);
        this.data = data;
    }
}
exports.GraphLifeCycleEvent = GraphLifeCycleEvent;
class AnimateEvent extends BaseEvent {
    constructor(type, animationType, animation, data) {
        super(type);
        this.animationType = animationType;
        this.animation = animation;
        this.data = data;
    }
}
exports.AnimateEvent = AnimateEvent;
class ElementLifeCycleEvent extends BaseEvent {
    constructor(type, elementType, data) {
        super(type);
        this.elementType = elementType;
        this.data = data;
    }
}
exports.ElementLifeCycleEvent = ElementLifeCycleEvent;
class ViewportEvent extends BaseEvent {
    constructor(type, data) {
        super(type);
        this.data = data;
    }
}
exports.ViewportEvent = ViewportEvent;
//# sourceMappingURL=events.js.map