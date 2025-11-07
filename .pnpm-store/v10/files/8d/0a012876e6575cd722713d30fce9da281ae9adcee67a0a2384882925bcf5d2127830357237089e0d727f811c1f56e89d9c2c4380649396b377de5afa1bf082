"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickSelect = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const element_1 = require("../constants/element");
const id_1 = require("../utils/id");
const relation_1 = require("../utils/relation");
const shortcut_1 = require("../utils/shortcut");
const state_1 = require("../utils/state");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 点击元素
 *
 * <en/> Click Element
 * @remarks
 * <zh/> 当鼠标点击元素时，可以激活元素的状态，例如选中节点或边。当 degree 设置为 `1` 时，点击节点会高亮当前节点及其直接相邻的节点和边。
 *
 * <en/> When the mouse clicks on an element, you can activate the state of the element, such as selecting nodes or edges. When the degree is 1, clicking on a node will highlight the current node and its directly adjacent nodes and edges.
 */
class ClickSelect extends base_behavior_1.BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, ClickSelect.defaultOptions, options));
        this.onClickSelect = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.validate(event))
                return;
            yield this.updateState(event);
            (_b = (_a = this.options).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        });
        this.onClickCanvas = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.validate(event))
                return;
            yield this.clearState();
            (_b = (_a = this.options).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        });
        this.shortcut = new shortcut_1.Shortcut(context.graph);
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        this.unbindEvents();
        element_1.ELEMENT_TYPES.forEach((type) => {
            graph.on(`${type}:${constants_1.CommonEvent.CLICK}`, this.onClickSelect);
        });
        graph.on(constants_1.CanvasEvent.CLICK, this.onClickCanvas);
    }
    get isMultipleSelect() {
        const { multiple, trigger } = this.options;
        return multiple && this.shortcut.match(trigger);
    }
    getNeighborIds(event) {
        const { target, targetType } = event;
        const { graph } = this.context;
        const { degree } = this.options;
        return (0, relation_1.getElementNthDegreeIds)(graph, targetType, target.id, typeof degree === 'function' ? degree(event) : degree).filter((id) => id !== target.id);
    }
    updateState(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const { state: selectState, unselectedState, neighborState, animation } = this.options;
            if (!selectState && !neighborState && !unselectedState)
                return;
            const { target } = event;
            const { graph } = this.context;
            const datum = graph.getElementData(target.id);
            const type = (0, state_1.statesOf)(datum).includes(selectState) ? 'unselect' : 'select';
            const states = {};
            const isMultipleSelect = this.isMultipleSelect;
            const click = [target.id];
            const neighbor = this.getNeighborIds(event);
            if (!isMultipleSelect) {
                if (type === 'select') {
                    Object.assign(states, this.getClearStates(!!unselectedState));
                    const addState = (list, state) => {
                        list.forEach((id) => {
                            if (!states[id])
                                states[id] = graph.getElementState(id);
                            states[id].push(state);
                        });
                    };
                    addState(click, selectState);
                    addState(neighbor, neighborState);
                    if (unselectedState) {
                        Object.keys(states).forEach((id) => {
                            if (!click.includes(id) && !neighbor.includes(id))
                                states[id].push(unselectedState);
                        });
                    }
                }
                else
                    Object.assign(states, this.getClearStates());
            }
            else {
                Object.assign(states, this.getDataStates());
                if (type === 'select') {
                    const addState = (list, state) => {
                        list.forEach((id) => {
                            const dataStatesSet = new Set(graph.getElementState(id));
                            dataStatesSet.add(state);
                            dataStatesSet.delete(unselectedState);
                            states[id] = Array.from(dataStatesSet);
                        });
                    };
                    addState(click, selectState);
                    addState(neighbor, neighborState);
                    if (unselectedState) {
                        Object.keys(states).forEach((id) => {
                            const _states = states[id];
                            if (!_states.includes(selectState) &&
                                !_states.includes(neighborState) &&
                                !_states.includes(unselectedState)) {
                                states[id].push(unselectedState);
                            }
                        });
                    }
                }
                else {
                    const targetState = states[target.id];
                    states[target.id] = targetState.filter((s) => s !== selectState && s !== neighborState);
                    if (!targetState.includes(unselectedState))
                        states[target.id].push(unselectedState);
                    neighbor.forEach((id) => {
                        states[id] = states[id].filter((s) => s !== neighborState);
                        if (!states[id].includes(selectState))
                            states[id].push(unselectedState);
                    });
                }
            }
            yield graph.setElementState(states, animation);
        });
    }
    getDataStates() {
        const { graph } = this.context;
        const { nodes, edges, combos } = graph.getData();
        const states = {};
        [...nodes, ...edges, ...combos].forEach((data) => {
            states[(0, id_1.idOf)(data)] = (0, state_1.statesOf)(data);
        });
        return states;
    }
    /**
     * <zh/> 获取需要清除的状态
     *
     * <en/> Get the states that need to be cleared
     * @param complete - <zh/> 是否返回所有状态 | <en/> Whether to return all states
     * @returns - <zh/> 需要清除的状态 | <en/> States that need to be cleared
     */
    getClearStates(complete = false) {
        const { graph } = this.context;
        const { state, unselectedState, neighborState } = this.options;
        const statesToClear = new Set([state, unselectedState, neighborState]);
        const { nodes, edges, combos } = graph.getData();
        const states = {};
        [...nodes, ...edges, ...combos].forEach((data) => {
            const datumStates = (0, state_1.statesOf)(data);
            const newStates = datumStates.filter((s) => !statesToClear.has(s));
            if (complete)
                states[(0, id_1.idOf)(data)] = newStates;
            else if (newStates.length !== datumStates.length)
                states[(0, id_1.idOf)(data)] = newStates;
        });
        return states;
    }
    clearState() {
        return __awaiter(this, void 0, void 0, function* () {
            const { graph } = this.context;
            yield graph.setElementState(this.getClearStates(), this.options.animation);
        });
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    unbindEvents() {
        const { graph } = this.context;
        element_1.ELEMENT_TYPES.forEach((type) => {
            graph.off(`${type}:${constants_1.CommonEvent.CLICK}`, this.onClickSelect);
        });
        graph.off(constants_1.CanvasEvent.CLICK, this.onClickCanvas);
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
exports.ClickSelect = ClickSelect;
ClickSelect.defaultOptions = {
    animation: true,
    enable: true,
    multiple: false,
    trigger: ['shift'],
    state: 'selected',
    neighborState: 'selected',
    unselectedState: undefined,
    degree: 0,
};
//# sourceMappingURL=click-select.js.map