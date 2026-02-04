import { CommonEvent, ContainerEvent } from '../constants';
import { ExtensionController } from '../registry/extension';
import { isToBeDestroyed } from '../utils/element';
import { eventTargetOf } from '../utils/event';
export class BehaviorController extends ExtensionController {
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
            const target = eventTargetOf(originalTarget);
            if (!target)
                return;
            const { graph, canvas } = this.context;
            const { type: targetType, element: targetElement } = target;
            // 即将销毁或已销毁的元素不再触发事件
            // Elements that are about to be destroyed or have been destroyed no longer trigger events
            if ('destroyed' in targetElement && (isToBeDestroyed(targetElement) || targetElement.destroyed))
                return;
            const { type, detail, button } = event;
            const stdEvent = Object.assign(Object.assign({}, event), { target: targetElement, targetType, originalTarget });
            if (type === CommonEvent.POINTER_MOVE) {
                if (this.currentTarget !== targetElement) {
                    if (this.currentTarget) {
                        graph.emit(`${this.currentTargetType}:${CommonEvent.POINTER_LEAVE}`, Object.assign(Object.assign({}, stdEvent), { type: CommonEvent.POINTER_LEAVE, target: this.currentTarget, targetType: this.currentTargetType }));
                    }
                    if (targetElement) {
                        Object.assign(stdEvent, { type: CommonEvent.POINTER_ENTER });
                        graph.emit(`${targetType}:${CommonEvent.POINTER_ENTER}`, stdEvent);
                    }
                }
                this.currentTarget = targetElement;
                this.currentTargetType = targetType;
            }
            // 非右键点击事件 / Click event except right click
            if (!(type === CommonEvent.CLICK && button === 2)) {
                graph.emit(`${targetType}:${type}`, stdEvent);
                graph.emit(type, stdEvent);
            }
            // 双击事件 / Double click event
            if (type === CommonEvent.CLICK && detail === 2) {
                Object.assign(stdEvent, { type: CommonEvent.DBLCLICK });
                graph.emit(`${targetType}:${CommonEvent.DBLCLICK}`, stdEvent);
                graph.emit(CommonEvent.DBLCLICK, stdEvent);
            }
            // 右键菜单 / Contextmenu
            if (type === CommonEvent.POINTER_DOWN && button === 2) {
                Object.assign(stdEvent, {
                    type: CommonEvent.CONTEXT_MENU,
                    preventDefault: () => {
                        var _a;
                        (_a = canvas.getContainer()) === null || _a === void 0 ? void 0 : _a.addEventListener(CommonEvent.CONTEXT_MENU, (e) => e.preventDefault(), {
                            once: true,
                        });
                    },
                });
                graph.emit(`${targetType}:${CommonEvent.CONTEXT_MENU}`, stdEvent);
                graph.emit(CommonEvent.CONTEXT_MENU, stdEvent);
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
            [ContainerEvent.KEY_DOWN, ContainerEvent.KEY_UP].forEach((name) => {
                container.addEventListener(name, this.forwardContainerEvents);
            });
        }
        const canvas = this.context.canvas.document;
        if (canvas) {
            [
                CommonEvent.CLICK,
                CommonEvent.DBLCLICK,
                CommonEvent.POINTER_OVER,
                CommonEvent.POINTER_LEAVE,
                CommonEvent.POINTER_ENTER,
                CommonEvent.POINTER_MOVE,
                CommonEvent.POINTER_OUT,
                CommonEvent.POINTER_DOWN,
                CommonEvent.POINTER_UP,
                CommonEvent.CONTEXT_MENU,
                CommonEvent.DRAG_START,
                CommonEvent.DRAG,
                CommonEvent.DRAG_END,
                CommonEvent.DRAG_ENTER,
                CommonEvent.DRAG_OVER,
                CommonEvent.DRAG_LEAVE,
                CommonEvent.DROP,
                CommonEvent.WHEEL,
            ].forEach((name) => {
                canvas.addEventListener(name, this.forwardCanvasEvents);
            });
        }
    }
    destroy() {
        const container = this.context.canvas.getContainer();
        if (container) {
            [ContainerEvent.KEY_DOWN, ContainerEvent.KEY_UP].forEach((name) => {
                container.removeEventListener(name, this.forwardContainerEvents);
            });
        }
        this.context.canvas.document.removeAllEventListeners();
        super.destroy();
    }
}
//# sourceMappingURL=behavior.js.map