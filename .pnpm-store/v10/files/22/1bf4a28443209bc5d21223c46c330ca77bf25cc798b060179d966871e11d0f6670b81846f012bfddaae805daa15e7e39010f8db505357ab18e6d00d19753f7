"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorController = void 0;
const constants_1 = require("../constants");
const extension_1 = require("../registry/extension");
const element_1 = require("../utils/element");
const event_1 = require("../utils/event");
class BehaviorController extends extension_1.ExtensionController {
    constructor(context) {
        super(context);
        /**
         * <zh/> 当前事件的目标
         *
         *  <en/> The current event target
         */
        this.currentTarget = null;
        this.currentTargetType = null;
        this.category = 'behavior';
        this.forwardCanvasEvents = (event) => {
            const { target: originalTarget } = event;
            const target = (0, event_1.eventTargetOf)(originalTarget);
            if (!target)
                return;
            const { graph, canvas } = this.context;
            const { type: targetType, element: targetElement } = target;
            // 即将销毁或已销毁的元素不再触发事件
            // Elements that are about to be destroyed or have been destroyed no longer trigger events
            if ('destroyed' in targetElement && ((0, element_1.isToBeDestroyed)(targetElement) || targetElement.destroyed))
                return;
            const { type, detail, button } = event;
            const stdEvent = Object.assign(Object.assign({}, event), { target: targetElement, targetType, originalTarget });
            if (type === constants_1.CommonEvent.POINTER_MOVE) {
                if (this.currentTarget !== targetElement) {
                    if (this.currentTarget) {
                        graph.emit(`${this.currentTargetType}:${constants_1.CommonEvent.POINTER_LEAVE}`, Object.assign(Object.assign({}, stdEvent), { type: constants_1.CommonEvent.POINTER_LEAVE, target: this.currentTarget, targetType: this.currentTargetType }));
                    }
                    if (targetElement) {
                        Object.assign(stdEvent, { type: constants_1.CommonEvent.POINTER_ENTER });
                        graph.emit(`${targetType}:${constants_1.CommonEvent.POINTER_ENTER}`, stdEvent);
                    }
                }
                this.currentTarget = targetElement;
                this.currentTargetType = targetType;
            }
            // 非右键点击事件 / Click event except right click
            if (!(type === constants_1.CommonEvent.CLICK && button === 2)) {
                graph.emit(`${targetType}:${type}`, stdEvent);
                graph.emit(type, stdEvent);
            }
            // 双击事件 / Double click event
            if (type === constants_1.CommonEvent.CLICK && detail === 2) {
                Object.assign(stdEvent, { type: constants_1.CommonEvent.DBLCLICK });
                graph.emit(`${targetType}:${constants_1.CommonEvent.DBLCLICK}`, stdEvent);
                graph.emit(constants_1.CommonEvent.DBLCLICK, stdEvent);
            }
            // 右键菜单 / Contextmenu
            if (type === constants_1.CommonEvent.POINTER_DOWN && button === 2) {
                Object.assign(stdEvent, {
                    type: constants_1.CommonEvent.CONTEXT_MENU,
                    preventDefault: () => {
                        var _a;
                        (_a = canvas.getContainer()) === null || _a === void 0 ? void 0 : _a.addEventListener(constants_1.CommonEvent.CONTEXT_MENU, (e) => e.preventDefault(), {
                            once: true,
                        });
                    },
                });
                graph.emit(`${targetType}:${constants_1.CommonEvent.CONTEXT_MENU}`, stdEvent);
                graph.emit(constants_1.CommonEvent.CONTEXT_MENU, stdEvent);
            }
        };
        this.forwardContainerEvents = (event) => {
            this.context.graph.emit(event.type, event);
        };
        this.forwardEvents();
        this.setBehaviors(this.context.options.behaviors || []);
    }
    setBehaviors(behaviors) {
        this.setExtensions(behaviors);
    }
    forwardEvents() {
        const container = this.context.canvas.getContainer();
        if (container) {
            [constants_1.ContainerEvent.KEY_DOWN, constants_1.ContainerEvent.KEY_UP].forEach((name) => {
                container.addEventListener(name, this.forwardContainerEvents);
            });
        }
        const canvas = this.context.canvas.document;
        if (canvas) {
            [
                constants_1.CommonEvent.CLICK,
                constants_1.CommonEvent.DBLCLICK,
                constants_1.CommonEvent.POINTER_OVER,
                constants_1.CommonEvent.POINTER_LEAVE,
                constants_1.CommonEvent.POINTER_ENTER,
                constants_1.CommonEvent.POINTER_MOVE,
                constants_1.CommonEvent.POINTER_OUT,
                constants_1.CommonEvent.POINTER_DOWN,
                constants_1.CommonEvent.POINTER_UP,
                constants_1.CommonEvent.CONTEXT_MENU,
                constants_1.CommonEvent.DRAG_START,
                constants_1.CommonEvent.DRAG,
                constants_1.CommonEvent.DRAG_END,
                constants_1.CommonEvent.DRAG_ENTER,
                constants_1.CommonEvent.DRAG_OVER,
                constants_1.CommonEvent.DRAG_LEAVE,
                constants_1.CommonEvent.DROP,
                constants_1.CommonEvent.WHEEL,
            ].forEach((name) => {
                canvas.addEventListener(name, this.forwardCanvasEvents);
            });
        }
    }
    destroy() {
        const container = this.context.canvas.getContainer();
        if (container) {
            [constants_1.ContainerEvent.KEY_DOWN, constants_1.ContainerEvent.KEY_UP].forEach((name) => {
                container.removeEventListener(name, this.forwardContainerEvents);
            });
        }
        this.context.canvas.document.removeAllEventListeners();
        super.destroy();
    }
}
exports.BehaviorController = BehaviorController;
//# sourceMappingURL=behavior.js.map