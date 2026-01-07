import { groupBy, isFunction, throttle } from '@antv/util';
import { GraphEvent } from '../constants';
import { getExpandedBBox } from '../utils/bbox';
import { getNodeCentralities } from '../utils/centrality';
import { arrayDiff } from '../utils/diff';
import { setVisibility } from '../utils/visibility';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 标签自适应显示
 *
 * <en/> Auto Adapt Label
 * @remarks
 * <zh/> 标签自适应显示是一种动态标签管理策略，旨在根据当前可视范围的空间分配、节点重要性等因素，智能调整哪些标签应显示或隐藏。通过对可视区域的实时分析，确保用户在不同的交互场景下获得最相关最清晰的信息展示，同时避免视觉过载和信息冗余。
 *
 * <en/ >Label Adaptive Display is a dynamic label management strategy designed to intelligently adjust which labels should be shown or hidden based on factors such as the spatial allocation of the current viewport and node importance. By analyzing the visible area in real-time, it ensures that users receive the most relevant and clear information display in various interactive scenarios, while avoiding visual overload and information redundancy.
 */
export class AutoAdaptLabel extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, AutoAdaptLabel.defaultOptions, options));
        /**
         * <zh/> 检查当前包围盒是否有足够的空间进行展示；如果与已经展示的包围盒有重叠，则不会展示
         *
         * <en/> Check whether the current bounding box has enough space to display; if it overlaps with the displayed bounding box, it will not be displayed
         * @param bbox - bbox
         * @param bboxes - occupied bboxes which are already shown
         * @returns whether the bbox is overlapping with the bboxes or outside the viewpointBounds
         */
        this.isOverlapping = (bbox, bboxes) => {
            return bboxes.some((b) => bbox.intersects(b));
        };
        this.occupiedBounds = [];
        this.detectLabelCollision = (elements) => {
            const viewport = this.context.viewport;
            const res = { show: [], hide: [] };
            this.occupiedBounds = [];
            elements.forEach((element) => {
                const labelBounds = element.getShape('label').getRenderBounds();
                if (viewport.isInViewport(labelBounds, true) && !this.isOverlapping(labelBounds, this.occupiedBounds)) {
                    res.show.push(element);
                    this.occupiedBounds.push(getExpandedBBox(labelBounds, this.options.padding));
                }
                else {
                    res.hide.push(element);
                }
            });
            return res;
        };
        this.hideLabelIfExceedViewport = (prevElementsInView, currentElementsInView) => {
            const { exit } = arrayDiff(prevElementsInView, currentElementsInView, (d) => d.id);
            exit === null || exit === void 0 ? void 0 : exit.forEach(this.hideLabel);
        };
        this.nodeCentralities = new Map();
        this.sortNodesByCentrality = (nodes, centrality) => {
            const { model } = this.context;
            const graphData = model.getData();
            const getRelatedEdgesData = model.getRelatedEdgesData.bind(model);
            const nodesWithCentrality = nodes.map((node) => {
                if (!this.nodeCentralities.has(node.id)) {
                    this.nodeCentralities = getNodeCentralities(graphData, getRelatedEdgesData, centrality);
                }
                return { node, centrality: this.nodeCentralities.get(node.id) };
            });
            return nodesWithCentrality.sort((a, b) => b.centrality - a.centrality).map((item) => item.node);
        };
        this.sortLabelElementsInView = (labelElements) => {
            const { sort, sortNode, sortCombo, sortEdge } = this.options;
            const { model } = this.context;
            if (isFunction(sort))
                return labelElements.sort((a, b) => sort(model.getElementDataById(a.id), model.getElementDataById(b.id)));
            const { node: nodes = [], edge: edges = [], combo: combos = [] } = groupBy(labelElements, (el) => el.type);
            const sortedCombos = isFunction(sortCombo)
                ? combos.sort((a, b) => sortCombo(...model.getComboData([a.id, b.id])))
                : combos;
            const sortedNodes = isFunction(sortNode)
                ? nodes.sort((a, b) => sortNode(...model.getNodeData([a.id, b.id])))
                : this.sortNodesByCentrality(nodes, sortNode);
            const sortedEdges = isFunction(sortEdge)
                ? edges.sort((a, b) => sortEdge(...model.getEdgeData([a.id, b.id])))
                : edges;
            return [...sortedCombos, ...sortedNodes, ...sortedEdges];
        };
        this.labelElementsInView = [];
        this.isFirstRender = true;
        this.onToggleVisibility = (event) => {
            var _a;
            // @ts-expect-error missing type
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.stage) === 'zIndex')
                return;
            if (!this.validate(event)) {
                if (this.hiddenElements.size > 0) {
                    this.hiddenElements.forEach(this.showLabel);
                    this.hiddenElements.clear();
                }
                return;
            }
            const labelElementsInView = this.isFirstRender ? this.getLabelElements() : this.getLabelElementsInView();
            this.hideLabelIfExceedViewport(this.labelElementsInView, labelElementsInView);
            this.labelElementsInView = labelElementsInView;
            // 根据元素的重要性从高到低排序，重要性越高的元素其标签显示优先级越高；通常 combo > node > edge
            // Sort elements by their importance in descending order; elements with higher importance have higher label display priority; usually combo > node > edge
            const sortedElements = this.sortLabelElementsInView(this.labelElementsInView);
            const { show, hide } = this.detectLabelCollision(sortedElements);
            for (let i = show.length - 1; i >= 0; i--) {
                this.showLabel(show[i]);
            }
            hide.forEach(this.hideLabel);
        };
        this.hiddenElements = new Map();
        this.hideLabel = (element) => {
            const label = element.getShape('label');
            if (label)
                setVisibility(label, 'hidden');
            this.hiddenElements.set(element.id, element);
        };
        this.showLabel = (element) => {
            const label = element.getShape('label');
            if (label)
                setVisibility(label, 'visible');
            element.toFront();
            this.hiddenElements.delete(element.id);
        };
        this.onTransform = throttle(this.onToggleVisibility, this.options.throttle, { leading: true });
        this.enableToggle = true;
        this.toggle = (event) => {
            if (!this.enableToggle)
                return;
            this.onToggleVisibility(event);
        };
        this.onBeforeRender = () => {
            this.enableToggle = false;
        };
        this.onAfterRender = (event) => {
            this.onToggleVisibility(event);
            this.enableToggle = true;
        };
        this.bindEvents();
    }
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
        this.onToggleVisibility({});
    }
    getLabelElements() {
        // @ts-expect-error access private property
        const { elementMap } = this.context.element;
        const elements = [];
        for (const key in elementMap) {
            const element = elementMap[key];
            if (element.isVisible() && element.getShape('label')) {
                elements.push(element);
            }
        }
        return elements;
    }
    getLabelElementsInView() {
        const viewport = this.context.viewport;
        return this.getLabelElements().filter((node) => viewport.isInViewport(node.getShape('key').getRenderBounds()));
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(GraphEvent.BEFORE_RENDER, this.onBeforeRender);
        graph.on(GraphEvent.AFTER_RENDER, this.onAfterRender);
        graph.on(GraphEvent.AFTER_DRAW, this.toggle);
        graph.on(GraphEvent.AFTER_LAYOUT, this.toggle);
        graph.on(GraphEvent.AFTER_TRANSFORM, this.onTransform);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(GraphEvent.BEFORE_RENDER, this.onBeforeRender);
        graph.off(GraphEvent.AFTER_RENDER, this.onAfterRender);
        graph.off(GraphEvent.AFTER_DRAW, this.toggle);
        graph.off(GraphEvent.AFTER_LAYOUT, this.toggle);
        graph.off(GraphEvent.AFTER_TRANSFORM, this.onTransform);
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
AutoAdaptLabel.defaultOptions = {
    enable: true,
    throttle: 100,
    padding: 0,
    sortNode: { type: 'degree' },
};
//# sourceMappingURL=auto-adapt-label.js.map