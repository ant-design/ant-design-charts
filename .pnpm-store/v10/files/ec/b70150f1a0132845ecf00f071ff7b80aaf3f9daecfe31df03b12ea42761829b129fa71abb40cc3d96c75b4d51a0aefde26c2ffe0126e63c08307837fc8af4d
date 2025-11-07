"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverActivate = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const element_1 = require("../constants/element");
const element_2 = require("../utils/element");
const id_1 = require("../utils/id");
const relation_1 = require("../utils/relation");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 悬浮元素交互
 *
 * <en/> Hover element behavior
 * @remarks
 * <zh/> 当鼠标悬停在元素上时，可以激活元素的状态，例如高亮节点或边。
 *
 * <en/> When the mouse hovers over an element, you can activate the state of the element, such as highlighting nodes or edges.
 */
class HoverActivate extends base_behavior_1.BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, HoverActivate.defaultOptions, options));
        this.isFrozen = false;
        this.toggleFrozen = (e) => {
            this.isFrozen = e.type === 'dragstart';
        };
        this.hoverElement = (event) => {
            if (!this.validate(event))
                return;
            const isEnter = event.type === constants_1.CommonEvent.POINTER_ENTER;
            this.updateElementsState(event, isEnter);
            const { onHover, onHoverEnd } = this.options;
            if (isEnter)
                onHover === null || onHover === void 0 ? void 0 : onHover(event);
            else
                onHoverEnd === null || onHoverEnd === void 0 ? void 0 : onHoverEnd(event);
        };
        this.updateElementsState = (event, add) => {
            if (!this.options.state && !this.options.inactiveState)
                return;
            const { graph } = this.context;
            const { state, animation, inactiveState } = this.options;
            const activeIds = this.getActiveIds(event);
            const states = {};
            if (state) {
                Object.assign(states, this.getElementsState(activeIds, state, add));
            }
            if (inactiveState) {
                const inactiveIds = (0, id_1.idsOf)(graph.getData(), true).filter((id) => !activeIds.includes(id));
                Object.assign(states, this.getElementsState(inactiveIds, inactiveState, add));
            }
            graph.setElementState(states, animation);
        };
        this.getElementsState = (ids, state, add) => {
            const { graph } = this.context;
            const states = {};
            ids.forEach((id) => {
                const currentState = graph.getElementState(id);
                if (add) {
                    states[id] = currentState.includes(state) ? currentState : [...currentState, state];
                }
                else {
                    states[id] = currentState.filter((s) => s !== state);
                }
            });
            return states;
        };
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        this.unbindEvents();
        element_1.ELEMENT_TYPES.forEach((type) => {
            graph.on(`${type}:${constants_1.CommonEvent.POINTER_ENTER}`, this.hoverElement);
            graph.on(`${type}:${constants_1.CommonEvent.POINTER_LEAVE}`, this.hoverElement);
        });
        const canvas = this.context.canvas.document;
        canvas.addEventListener(`${constants_1.CommonEvent.DRAG_START}`, this.toggleFrozen);
        canvas.addEventListener(`${constants_1.CommonEvent.DRAG_END}`, this.toggleFrozen);
    }
    getActiveIds(event) {
        const { graph } = this.context;
        const { degree, direction } = this.options;
        const elementId = event.target.id;
        return degree
            ? (0, relation_1.getElementNthDegreeIds)(graph, event.targetType, elementId, typeof degree === 'function' ? degree(event) : degree, direction)
            : [elementId];
    }
    validate(event) {
        if (this.destroyed ||
            this.isFrozen ||
            (0, element_2.isToBeDestroyed)(event.target) ||
            // @ts-expect-error private property
            // 避免动画冲突，在combo/node折叠展开过程中不触发
            this.context.graph.isCollapsingExpanding)
            return false;
        const { enable } = this.options;
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    unbindEvents() {
        const { graph } = this.context;
        element_1.ELEMENT_TYPES.forEach((type) => {
            graph.off(`${type}:${constants_1.CommonEvent.POINTER_ENTER}`, this.hoverElement);
            graph.off(`${type}:${constants_1.CommonEvent.POINTER_LEAVE}`, this.hoverElement);
        });
        const canvas = this.context.canvas.document;
        canvas.removeEventListener(`${constants_1.CommonEvent.DRAG_START}`, this.toggleFrozen);
        canvas.removeEventListener(`${constants_1.CommonEvent.DRAG_END}`, this.toggleFrozen);
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
exports.HoverActivate = HoverActivate;
HoverActivate.defaultOptions = {
    animation: false,
    enable: true,
    degree: 0,
    direction: 'both',
    state: 'active',
    inactiveState: undefined,
};
//# sourceMappingURL=hover-activate.js.map