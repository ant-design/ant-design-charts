import { Rect } from '@antv/g';
import { deepMix, isFunction } from '@antv/util';
import { CanvasEvent, CommonEvent } from '../constants';
import { idOf } from '../utils/id';
import { getBoundingPoints, isPointInPolygon } from '../utils/point';
import { Shortcut } from '../utils/shortcut';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 框选一组元素
 *
 * <en/> Brush select elements
 */
export class BrushSelect extends BaseBehavior {
    constructor(context, options) {
        super(context, deepMix({}, BrushSelect.defaultOptions, options));
        this.shortcut = new Shortcut(context.graph);
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
        this.clearStates = this.clearStates.bind(this);
        this.bindEvents();
    }
    /**
     * Triggered when the pointer is pressed
     * @param event - Pointer event
     * @internal
     */
    onPointerDown(event) {
        if (!this.validate(event) || !this.isKeydown() || this.startPoint)
            return;
        const { canvas, graph } = this.context;
        const style = Object.assign({}, this.options.style);
        // 根据缩放比例调整 lineWidth
        // Adjust lineWidth according to the zoom ratio
        if (this.options.style.lineWidth) {
            style.lineWidth = +this.options.style.lineWidth / graph.getZoom();
        }
        this.rectShape = new Rect({ id: 'g6-brush-select', style });
        canvas.appendChild(this.rectShape);
        this.startPoint = [event.canvas.x, event.canvas.y];
    }
    /**
     * Triggered when the pointer is moved
     * @param event - Pointer event
     * @internal
     */
    onPointerMove(event) {
        var _a;
        if (!this.startPoint)
            return;
        const { immediately, mode } = this.options;
        this.endPoint = getCursorPoint(event, this.context.graph);
        (_a = this.rectShape) === null || _a === void 0 ? void 0 : _a.attr({
            x: Math.min(this.endPoint[0], this.startPoint[0]),
            y: Math.min(this.endPoint[1], this.startPoint[1]),
            width: Math.abs(this.endPoint[0] - this.startPoint[0]),
            height: Math.abs(this.endPoint[1] - this.startPoint[1]),
        });
        if (immediately && mode === 'default')
            this.updateElementsStates(getBoundingPoints(this.startPoint, this.endPoint));
    }
    /**
     * Triggered when the pointer is released
     * @param event - Pointer event
     * @internal
     */
    onPointerUp(event) {
        if (!this.startPoint)
            return;
        if (!this.endPoint) {
            this.clearBrush();
            return;
        }
        this.endPoint = getCursorPoint(event, this.context.graph);
        this.updateElementsStates(getBoundingPoints(this.startPoint, this.endPoint));
        this.clearBrush();
    }
    /**
     * <zh/> 清除状态
     *
     * <en/> Clear state
     * @internal
     */
    clearStates() {
        if (this.endPoint)
            return;
        this.clearElementsStates();
    }
    /**
     * <zh/> 清除画布上所有元素的状态
     *
     * <en/> Clear the state of all elements on the canvas
     * @internal
     */
    clearElementsStates() {
        const { graph } = this.context;
        const states = Object.values(graph.getData()).reduce((acc, data) => {
            return Object.assign({}, acc, data.reduce((acc, datum) => {
                var _a;
                const restStates = (_a = (datum.states || [])) === null || _a === void 0 ? void 0 : _a.filter((state) => state !== this.options.state);
                acc[idOf(datum)] = restStates;
                return acc;
            }, {}));
        }, {});
        graph.setElementState(states, this.options.animation);
    }
    /**
     * <zh/> 更新选中的元素状态
     *
     * <en/> Update the state of the selected elements
     * @param points - <zh/> 框选区域的顶点 | <en/> The vertex of the selection area
     * @internal
     */
    updateElementsStates(points) {
        const { graph } = this.context;
        const { enableElements, state, mode, onSelect } = this.options;
        const selectedIds = this.selector(graph, points, enableElements);
        const states = {};
        switch (mode) {
            case 'union':
                selectedIds.forEach((id) => {
                    states[id] = [...graph.getElementState(id), state];
                });
                break;
            case 'diff':
                selectedIds.forEach((id) => {
                    const prevStates = graph.getElementState(id);
                    states[id] = prevStates.includes(state) ? prevStates.filter((s) => s !== state) : [...prevStates, state];
                });
                break;
            case 'intersect':
                selectedIds.forEach((id) => {
                    const prevStates = graph.getElementState(id);
                    states[id] = prevStates.includes(state) ? [state] : [];
                });
                break;
            case 'default':
            default:
                selectedIds.forEach((id) => {
                    states[id] = [state];
                });
                break;
        }
        if (isFunction(onSelect))
            onSelect(states);
        graph.setElementState(states, this.options.animation);
    }
    /**
     * <zh/> 查找画布上在指定区域内显示的元素。当节点的包围盒中心在矩形内时，节点被选中；当边的两端节点在矩形内时，边被选中；当 combo 的包围盒中心在矩形内时，combo 被选中。
     *
     * <en/> Find the elements displayed in the specified area on the canvas. A node is selected if the center of its bbox is inside the rect; An edge is selected if both end nodes are inside the rect ;A combo is selected if the center of its bbox is inside the rect.
     * @param graph - <zh/> 图实例 | <en/> Graph instance
     * @param points - <zh/> 框选区域的顶点 | <en/> The vertex of the selection area
     * @param itemTypes - <zh/> 元素类型 | <en/> Element type
     * @returns <zh/> 选中的元素 ID 数组 | <en/> Selected element ID array
     * @internal
     */
    selector(graph, points, itemTypes) {
        if (!itemTypes || itemTypes.length === 0)
            return [];
        const elements = [];
        const graphData = graph.getData();
        itemTypes.forEach((itemType) => {
            graphData[`${itemType}s`].forEach((datum) => {
                const id = idOf(datum);
                if (graph.getElementVisibility(id) !== 'hidden' && isPointInPolygon(graph.getElementPosition(id), points)) {
                    elements.push(id);
                }
            });
        });
        // 如果边的两端节点都在框选范围内，则边也被选中 | If source node and target node are within the selection range, that edge is also selected
        if (itemTypes.includes('edge')) {
            const edges = graphData.edges;
            edges === null || edges === void 0 ? void 0 : edges.forEach((edge) => {
                const { source, target } = edge;
                if (elements.includes(source) && elements.includes(target)) {
                    elements.push(idOf(edge));
                }
            });
        }
        return elements;
    }
    clearBrush() {
        var _a;
        (_a = this.rectShape) === null || _a === void 0 ? void 0 : _a.remove();
        this.rectShape = undefined;
        this.startPoint = undefined;
        this.endPoint = undefined;
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
        const keys = (Array.isArray(trigger) ? trigger : [trigger]);
        return this.shortcut.match(keys.filter((key) => key !== 'drag'));
    }
    /**
     * <zh/> 验证是否启用框选
     *
     * <en/> Verify whether brush select is enabled
     * @param event - <zh/> 事件 | <en/> Event
     * @returns <zh/> 是否启用 | <en/> Whether to enable
     * @internal
     */
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(CommonEvent.POINTER_DOWN, this.onPointerDown);
        graph.on(CommonEvent.POINTER_MOVE, this.onPointerMove);
        graph.on(CommonEvent.POINTER_UP, this.onPointerUp);
        graph.on(CanvasEvent.CLICK, this.clearStates);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(CommonEvent.POINTER_DOWN, this.onPointerDown);
        graph.off(CommonEvent.POINTER_MOVE, this.onPointerMove);
        graph.off(CommonEvent.POINTER_UP, this.onPointerUp);
        graph.off(CanvasEvent.CLICK, this.clearStates);
    }
    /**
     * <zh/> 更新配置项
     *
     * <en/> Update configuration
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        this.unbindEvents();
        this.options = deepMix(this.options, options);
        this.bindEvents();
    }
    /**
     * <zh/> 销毁
     *
     * <en/> Destroy
     * @internal
     */
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
BrushSelect.defaultOptions = {
    animation: false,
    enable: true,
    enableElements: ['node', 'combo', 'edge'],
    immediately: false,
    mode: 'default',
    state: 'selected',
    trigger: ['shift'],
    style: {
        width: 0,
        height: 0,
        lineWidth: 1,
        fill: '#1677FF',
        stroke: '#1677FF',
        fillOpacity: 0.1,
        zIndex: 2,
        pointerEvents: 'none',
    },
};
export const getCursorPoint = (event, graph) => {
    // Fixed #7182: 判断 html 类型节点，并把 html 节点的浏览器坐标转换为 canvas 坐标。
    // 没有直接判断的方式，nativeEvent.target 非 canvas 则表示 html 节点触发的。
    // Fixed #7182: Handles brush selection on HTML nodes by converting client coordinates to canvas coordinates.
    // An HTML node is identified if the event's targetType is 'node' but the nativeEvent.target is not the canvas element.
    if ((event.targetType === 'node' || event.targetType === 'combo') &&
        !(event.nativeEvent.target instanceof HTMLCanvasElement)) {
        const [x, y] = graph.getCanvasByClient([event.client.x, event.client.y]);
        return [x, y];
    }
    return [event.canvas.x, event.canvas.y];
};
//# sourceMappingURL=brush-select.js.map