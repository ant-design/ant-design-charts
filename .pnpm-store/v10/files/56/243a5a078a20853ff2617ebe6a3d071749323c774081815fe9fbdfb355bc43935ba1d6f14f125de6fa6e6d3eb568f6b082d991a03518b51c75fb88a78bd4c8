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
exports.DragElement = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const bbox_1 = require("../utils/bbox");
const element_1 = require("../utils/element");
const id_1 = require("../utils/id");
const prefix_1 = require("../utils/prefix");
const shortcut_1 = require("../utils/shortcut");
const vector_1 = require("../utils/vector");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 拖拽元素交互
 *
 * <en/> Drag element behavior
 */
class DragElement extends base_behavior_1.BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, DragElement.defaultOptions, options));
        this.enable = false;
        this.enableElements = ['node', 'combo'];
        this.target = [];
        this.shadowOrigin = [0, 0];
        this.hiddenEdges = [];
        this.isDragging = false;
        /**
         * <zh/> 拖拽放下的回调
         *
         * <en/> Callback when dragging is released
         * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
         */
        this.onDrop = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (this.options.dropEffect !== 'link')
                return;
            const { model, element } = this.context;
            const modifiedParentId = event.target.id;
            this.target.forEach((id) => {
                const originalParent = model.getParentData(id, constants_1.COMBO_KEY);
                // 如果是在原父 combo 内部拖拽，需要刷新 combo 数据
                // If it is a drag and drop within the original parent combo, you need to refresh the combo data
                if (originalParent && (0, id_1.idOf)(originalParent) === modifiedParentId) {
                    model.refreshComboData(modifiedParentId);
                }
                model.setParent(id, modifiedParentId, constants_1.COMBO_KEY);
            });
            yield ((_a = element === null || element === void 0 ? void 0 : element.draw({ animation: true })) === null || _a === void 0 ? void 0 : _a.finished);
        });
        this.setCursor = (event) => {
            if (this.isDragging)
                return;
            const { type } = event;
            const { canvas } = this.context;
            const { cursor } = this.options;
            if (type === constants_1.CommonEvent.POINTER_ENTER)
                canvas.setCursor((cursor === null || cursor === void 0 ? void 0 : cursor.grab) || 'grab');
            else
                canvas.setCursor((cursor === null || cursor === void 0 ? void 0 : cursor.default) || 'default');
        };
        this.shortcut = new shortcut_1.Shortcut(context.graph);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.bindEvents();
    }
    /**
     * <zh/> 更新元素拖拽配置
     *
     * <en/> Update the element dragging configuration
     * @param options - <zh/> 配置项 | <en/> options
     * @internal
     */
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
    }
    bindEvents() {
        const { graph, canvas } = this.context;
        // @ts-expect-error internal property
        const $canvas = canvas.getLayer().getContextService().$canvas;
        if ($canvas) {
            $canvas.addEventListener('blur', this.onDragEnd);
            $canvas.addEventListener('contextmenu', this.onDragEnd);
        }
        this.enableElements.forEach((type) => {
            graph.on(`${type}:${constants_1.CommonEvent.DRAG_START}`, this.onDragStart);
            graph.on(`${type}:${constants_1.CommonEvent.DRAG}`, this.onDrag);
            graph.on(`${type}:${constants_1.CommonEvent.DRAG_END}`, this.onDragEnd);
            graph.on(`${type}:${constants_1.CommonEvent.POINTER_ENTER}`, this.setCursor);
            graph.on(`${type}:${constants_1.CommonEvent.POINTER_LEAVE}`, this.setCursor);
        });
        if (['link'].includes(this.options.dropEffect)) {
            graph.on(constants_1.ComboEvent.DROP, this.onDrop);
            graph.on(constants_1.CanvasEvent.DROP, this.onDrop);
        }
    }
    /**
     * <zh/> 获取当前选中的节点 id 集合
     *
     * <en/> Get the id collection of the currently selected node
     * @param currTarget - <zh/> 当前拖拽目标元素 id 集合 | <en/> The id collection of the current drag target element
     * @returns <zh/> 当前选中的节点 id 集合 | <en/> The id collection of the currently selected node
     * @internal
     */
    getSelectedNodeIDs(currTarget) {
        return Array.from(new Set(this.context.graph
            .getElementDataByState('node', this.options.state)
            .map((node) => node.id)
            .concat(currTarget)));
    }
    /**
     * Get the delta of the drag
     * @param event - drag event object
     * @returns delta
     * @internal
     */
    getDelta(event) {
        const zoom = this.context.graph.getZoom();
        return (0, vector_1.divide)([event.dx, event.dy], zoom);
    }
    /**
     * <zh/> 拖拽开始时的回调
     *
     * <en/> Callback when dragging starts
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     * @internal
     */
    onDragStart(event) {
        var _a;
        this.enable = this.validate(event);
        if (!this.enable)
            return;
        const { batch, canvas, graph } = this.context;
        canvas.setCursor(((_a = this.options.cursor) === null || _a === void 0 ? void 0 : _a.grabbing) || 'grabbing');
        this.isDragging = true;
        batch.startBatch();
        // 如果当前节点是选中状态，则查询出画布中所有选中的节点，否则只拖拽当前节点
        // If the current node is selected, query all selected nodes in the canvas, otherwise only drag the current node
        const id = event.target.id;
        const states = graph.getElementState(id);
        if (states.includes(this.options.state))
            this.target = this.getSelectedNodeIDs([id]);
        else
            this.target = [id];
        this.hideEdge();
        this.context.graph.frontElement(this.target);
        if (this.options.shadow)
            this.createShadow(this.target);
    }
    /**
     * <zh/> 拖拽过程中的回调
     *
     * <en/> Callback when dragging
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     * @internal
     */
    onDrag(event) {
        if (!this.enable)
            return;
        const delta = this.getDelta(event);
        if (this.options.shadow)
            this.moveShadow(delta);
        else
            this.moveElement(this.target, delta);
    }
    /**
     * <zh/> 元素拖拽结束的回调
     *
     * <en/> Callback when dragging ends
     * @internal
     */
    onDragEnd() {
        var _a, _b, _c;
        if (!this.enable)
            return; // It can be called multiple times
        this.enable = false;
        if (this.options.shadow) {
            if (!this.shadow)
                return;
            this.shadow.style.visibility = 'hidden';
            const { x = 0, y = 0 } = this.shadow.attributes;
            const [dx, dy] = (0, vector_1.subtract)([+x, +y], this.shadowOrigin);
            this.moveElement(this.target, [dx, dy]);
        }
        this.showEdges();
        (_b = (_a = this.options).onFinish) === null || _b === void 0 ? void 0 : _b.call(_a, this.target);
        const { batch, canvas } = this.context;
        batch.endBatch();
        canvas.setCursor(((_c = this.options.cursor) === null || _c === void 0 ? void 0 : _c.grab) || 'grab');
        this.isDragging = false;
        this.target = [];
    }
    /**
     * <zh/> 当前按键是否和 trigger 配置一致
     *
     * <en/> Is the current key consistent with the trigger configuration
     * @returns <zh/> 是否一致 | <en/> Is consistent
     * @internal
     */
    isKeydown() {
        const { trigger } = this.options;
        if (!(trigger === null || trigger === void 0 ? void 0 : trigger.length))
            return true;
        return this.shortcut.match(trigger);
    }
    /**
     * <zh/> 验证元素是否允许拖拽
     *
     * <en/> Verify if the element is allowed to be dragged
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     * @returns <zh/> 是否允许拖拽 | <en/> Whether to allow dragging
     * @internal
     */
    validate(event) {
        if (this.destroyed ||
            (0, element_1.isToBeDestroyed)(event.target) ||
            // @ts-expect-error private property
            // 避免动画冲突，在combo/node折叠展开过程中不触发
            this.context.graph.isCollapsingExpanding ||
            !this.isKeydown())
            return false;
        const { enable } = this.options;
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    clampByRotation([dx, dy]) {
        const rotation = this.context.graph.getRotation();
        return (0, vector_1.rotate)([dx, dy], rotation);
    }
    /**
     * <zh/> 移动元素
     *
     * <en/> Move the element
     * @param ids - <zh/> 元素 id 集合 | <en/> element id collection
     * @param offset <zh/> 偏移量 | <en/> offset
     * @internal
     */
    moveElement(ids, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const { graph, model } = this.context;
            const { dropEffect } = this.options;
            if (dropEffect === 'move')
                ids.forEach((id) => model.refreshComboData(id));
            graph.translateElementBy(Object.fromEntries(ids.map((id) => [id, this.clampByRotation(offset)])), false);
        });
    }
    moveShadow(offset) {
        if (!this.shadow)
            return;
        const { x = 0, y = 0 } = this.shadow.attributes;
        const [dx, dy] = offset;
        this.shadow.attr({ x: +x + dx, y: +y + dy });
    }
    createShadow(target) {
        const shadowStyle = (0, prefix_1.subStyleProps)(this.options, 'shadow');
        const bbox = (0, bbox_1.getCombinedBBox)(target.map((id) => this.context.element.getElement(id).getBounds()));
        const [x, y] = bbox.min;
        this.shadowOrigin = [x, y];
        const [width, height] = (0, bbox_1.getBBoxSize)(bbox);
        const positionStyle = { width, height, x, y };
        if (this.shadow) {
            this.shadow.attr(Object.assign(Object.assign(Object.assign({}, shadowStyle), positionStyle), { visibility: 'visible' }));
        }
        else {
            this.shadow = new g_1.Rect({
                style: Object.assign(Object.assign(Object.assign({ 
                    // @ts-ignore $layer is not in the type definition
                    $layer: 'transient' }, shadowStyle), positionStyle), { pointerEvents: 'none' }),
            });
            this.context.canvas.appendChild(this.shadow);
        }
    }
    showEdges() {
        if (this.options.shadow || this.hiddenEdges.length === 0)
            return;
        this.context.graph.showElement(this.hiddenEdges);
        this.hiddenEdges = [];
    }
    /**
     * Hide the edge
     * @internal
     */
    hideEdge() {
        const { hideEdge, shadow } = this.options;
        if (hideEdge === 'none' || shadow)
            return;
        const { graph } = this.context;
        if (hideEdge === 'all')
            this.hiddenEdges = graph.getEdgeData().map(id_1.idOf);
        else {
            this.hiddenEdges = Array.from(new Set(this.target.map((id) => graph.getRelatedEdgesData(id, hideEdge).map(id_1.idOf)).flat()));
        }
        graph.hideElement(this.hiddenEdges);
    }
    unbindEvents() {
        const { graph, canvas } = this.context;
        // @ts-expect-error internal property
        const $canvas = canvas.getLayer().getContextService().$canvas;
        if ($canvas) {
            $canvas.removeEventListener('blur', this.onDragEnd);
            $canvas.removeEventListener('contextmenu', this.onDragEnd);
        }
        this.enableElements.forEach((type) => {
            graph.off(`${type}:${constants_1.CommonEvent.DRAG_START}`, this.onDragStart);
            graph.off(`${type}:${constants_1.CommonEvent.DRAG}`, this.onDrag);
            graph.off(`${type}:${constants_1.CommonEvent.DRAG_END}`, this.onDragEnd);
            graph.off(`${type}:${constants_1.CommonEvent.POINTER_ENTER}`, this.setCursor);
            graph.off(`${type}:${constants_1.CommonEvent.POINTER_LEAVE}`, this.setCursor);
        });
        graph.off(`combo:${constants_1.CommonEvent.DROP}`, this.onDrop);
        graph.off(`canvas:${constants_1.CommonEvent.DROP}`, this.onDrop);
    }
    destroy() {
        var _a;
        this.unbindEvents();
        (_a = this.shadow) === null || _a === void 0 ? void 0 : _a.destroy();
        super.destroy();
    }
}
exports.DragElement = DragElement;
DragElement.defaultOptions = {
    animation: true,
    enable: (event) => ['node', 'combo'].includes(event.targetType),
    trigger: [],
    dropEffect: 'move',
    state: 'selected',
    hideEdge: 'none',
    shadow: false,
    shadowZIndex: 100,
    shadowFill: '#F3F9FF',
    shadowFillOpacity: 0.5,
    shadowStroke: '#1890FF',
    shadowStrokeOpacity: 0.9,
    shadowLineDash: [5, 5],
    cursor: {
        default: 'default',
        grab: 'grab',
        grabbing: 'grabbing',
    },
};
//# sourceMappingURL=drag-element.js.map