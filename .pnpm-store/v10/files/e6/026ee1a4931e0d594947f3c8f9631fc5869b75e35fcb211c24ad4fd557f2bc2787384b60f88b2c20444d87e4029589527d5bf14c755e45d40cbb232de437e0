var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { Graph as Graphlib } from '@antv/graphlib';
import { Supervisor, isLayoutWithIterations } from '@antv/layout';
import { deepMix } from '@antv/util';
import { COMBO_KEY, GraphEvent, TREE_KEY } from '../constants';
import { BaseLayout } from '../layouts';
import { getExtension } from '../registry/get';
import { getAnimationOptions } from '../utils/animation';
import { isCollapsed } from '../utils/collapsibility';
import { isToBeDestroyed } from '../utils/element';
import { GraphLifeCycleEvent, emit } from '../utils/event';
import { createTreeStructure } from '../utils/graphlib';
import { idOf } from '../utils/id';
import { isTreeLayout, layoutAdapter, layoutMapping2GraphData } from '../utils/layout';
import { print } from '../utils/print';
import { dfs } from '../utils/traverse';
export class LayoutController {
    get presetOptions() {
        return {
            animation: !!getAnimationOptions(this.context.options, true),
        };
    }
    get options() {
        const { options } = this.context;
        return options.layout;
    }
    constructor(context) {
        this.instances = [];
        this.context = context;
    }
    getLayoutInstance() {
        return this.instances;
    }
    /**
     * <zh/> 前布局，即在绘制前执行布局
     *
     * <en/> Pre-layout, that is, perform layout before drawing
     * @param data - <zh/> 绘制数据 | <en/> Draw data
     * @remarks
     * <zh/> 前布局应该只在首次绘制前执行，后续更新不会触发
     *
     * <en/> Pre-layout should only be executed before the first drawing, and subsequent updates will not trigger
     */
    preLayout(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const { graph, model } = this.context;
            const { add } = data;
            emit(graph, new GraphLifeCycleEvent(GraphEvent.BEFORE_LAYOUT, { type: 'pre' }));
            const simulate = yield ((_a = this.context.layout) === null || _a === void 0 ? void 0 : _a.simulate());
            (_b = simulate === null || simulate === void 0 ? void 0 : simulate.nodes) === null || _b === void 0 ? void 0 : _b.forEach((l) => {
                const id = idOf(l);
                const node = add.nodes.get(id);
                model.syncNodeLikeDatum(l);
                if (node)
                    Object.assign(node.style, l.style);
            });
            (_c = simulate === null || simulate === void 0 ? void 0 : simulate.edges) === null || _c === void 0 ? void 0 : _c.forEach((l) => {
                const id = idOf(l);
                const edge = add.edges.get(id);
                model.syncEdgeDatum(l);
                if (edge)
                    Object.assign(edge.style, l.style);
            });
            (_d = simulate === null || simulate === void 0 ? void 0 : simulate.combos) === null || _d === void 0 ? void 0 : _d.forEach((l) => {
                const id = idOf(l);
                const combo = add.combos.get(id);
                model.syncNodeLikeDatum(l);
                if (combo)
                    Object.assign(combo.style, l.style);
            });
            emit(graph, new GraphLifeCycleEvent(GraphEvent.AFTER_LAYOUT, { type: 'pre' }));
            this.transformDataAfterLayout('pre', data);
        });
    }
    /**
     * <zh/> 后布局，即在完成绘制后执行布局
     *
     * <en/> Post layout, that is, perform layout after drawing
     * @param layoutOptions - <zh/> 布局配置项 | <en/> Layout options
     */
    postLayout() {
        return __awaiter(this, arguments, void 0, function* (layoutOptions = this.options) {
            if (!layoutOptions)
                return;
            const pipeline = Array.isArray(layoutOptions) ? layoutOptions : [layoutOptions];
            const { graph } = this.context;
            emit(graph, new GraphLifeCycleEvent(GraphEvent.BEFORE_LAYOUT, { type: 'post' }));
            for (let index = 0; index < pipeline.length; index++) {
                const options = pipeline[index];
                const data = this.getLayoutData(options);
                const opts = Object.assign(Object.assign({}, this.presetOptions), options);
                emit(graph, new GraphLifeCycleEvent(GraphEvent.BEFORE_STAGE_LAYOUT, { options: opts, index }));
                const result = yield this.stepLayout(data, opts, index);
                emit(graph, new GraphLifeCycleEvent(GraphEvent.AFTER_STAGE_LAYOUT, { options: opts, index }));
                if (!options.animation) {
                    this.updateElementPosition(result, false);
                }
            }
            emit(graph, new GraphLifeCycleEvent(GraphEvent.AFTER_LAYOUT, { type: 'post' }));
            this.transformDataAfterLayout('post');
        });
    }
    transformDataAfterLayout(type, data) {
        const transforms = this.context.transform.getTransformInstance();
        // @ts-expect-error skip type check
        Object.values(transforms).forEach((transform) => transform.afterLayout(type, data));
    }
    /**
     * <zh/> 模拟布局
     *
     * <en/> Simulate layout
     * @param options - <zh/> 布局配置项 | <en/> Layout options
     * @returns <zh/> 模拟布局结果 | <en/> Simulated layout result
     */
    simulate() {
        return __awaiter(this, arguments, void 0, function* (options = this.options) {
            if (!options)
                return {};
            const pipeline = Array.isArray(options) ? options : [options];
            let simulation = {};
            for (let index = 0; index < pipeline.length; index++) {
                const options = pipeline[index];
                const data = this.getLayoutData(options);
                const result = yield this.stepLayout(data, Object.assign(Object.assign(Object.assign({}, this.presetOptions), options), { animation: false }), index);
                simulation = result;
            }
            return simulation;
        });
    }
    stepLayout(data, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isTreeLayout(options))
                return yield this.treeLayout(data, options, index);
            return yield this.graphLayout(data, options, index);
        });
    }
    graphLayout(data, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            const { animation, enableWorker, iterations = 300 } = options;
            const layout = this.initGraphLayout(options);
            if (!layout)
                return {};
            this.instances[index] = layout;
            this.instance = layout;
            // 使用 web worker 执行布局 / Use web worker to execute layout
            if (enableWorker) {
                const rawLayout = layout;
                this.supervisor = new Supervisor(rawLayout.graphData2LayoutModel(data), rawLayout.instance, { iterations });
                return layoutMapping2GraphData(yield this.supervisor.execute());
            }
            if (isLayoutWithIterations(layout)) {
                // 有动画，基于布局迭代 tick 更新位置 / Update position based on layout iteration tick
                if (animation) {
                    return yield layout.execute(data, {
                        onTick: (tickData) => {
                            this.updateElementPosition(tickData, false);
                        },
                    });
                }
                // 无动画，直接返回终态位置 / No animation, return final position directly
                layout.execute(data);
                layout.stop();
                return layout.tick(iterations);
            }
            // 无迭代的布局，直接返回终态位置 / Layout without iteration, return final position directly
            const layoutResult = yield layout.execute(data);
            if (animation) {
                const animationResult = this.updateElementPosition(layoutResult, animation);
                yield (animationResult === null || animationResult === void 0 ? void 0 : animationResult.finished);
            }
            return layoutResult;
        });
    }
    treeLayout(data, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, animation } = options;
            // @ts-expect-error @antv/hierarchy 布局格式与 @antv/layout 不一致，其导出的是一个方法，而非 class
            // The layout format of @antv/hierarchy is inconsistent with @antv/layout, it exports a method instead of a class
            const layout = getExtension('layout', type);
            if (!layout)
                return {};
            const { nodes = [], edges = [] } = data;
            const model = new Graphlib({
                nodes: nodes.map((node) => ({ id: idOf(node), data: node.data || {} })),
                edges: edges.map((edge) => ({ id: idOf(edge), source: edge.source, target: edge.target, data: edge.data || {} })),
            });
            createTreeStructure(model);
            const layoutPreset = { nodes: [], edges: [] };
            const layoutResult = { nodes: [], edges: [] };
            const roots = model.getRoots(TREE_KEY);
            roots.forEach((root) => {
                dfs(root, (node) => {
                    node.children = model.getSuccessors(node.id);
                }, (node) => model.getSuccessors(node.id), 'TB');
                const result = layout(root, options);
                const { x: rx, y: ry, z: rz = 0 } = result;
                // 将布局结果转化为 LayoutMapping 格式 / Convert the layout result to LayoutMapping format
                dfs(result, (node) => {
                    const { id, x, y, z = 0 } = node;
                    layoutPreset.nodes.push({ id, style: { x: rx, y: ry, z: rz } });
                    layoutResult.nodes.push({ id, style: { x, y, z } });
                }, (node) => node.children, 'TB');
            });
            const offset = this.inferTreeLayoutOffset(layoutResult);
            applyTreeLayoutOffset(layoutResult, offset);
            if (animation) {
                // 先将所有节点移动到根节点位置 / Move all nodes to the root node position first
                applyTreeLayoutOffset(layoutPreset, offset);
                this.updateElementPosition(layoutPreset, false);
                const animationResult = this.updateElementPosition(layoutResult, animation);
                yield (animationResult === null || animationResult === void 0 ? void 0 : animationResult.finished);
            }
            return layoutResult;
        });
    }
    inferTreeLayoutOffset(data) {
        var _a;
        let [minX, maxX] = [Infinity, -Infinity];
        let [minY, maxY] = [Infinity, -Infinity];
        (_a = data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
            const { x = 0, y = 0 } = node.style || {};
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        });
        const { canvas } = this.context;
        const canvasSize = canvas.getSize();
        const [x1, y1] = canvas.getCanvasByViewport([0, 0]);
        const [x2, y2] = canvas.getCanvasByViewport(canvasSize);
        if (minX >= x1 && maxX <= x2 && minY >= y1 && maxY <= y2)
            return [0, 0];
        const cx = (x1 + x2) / 2;
        const cy = (y1 + y2) / 2;
        return [cx - (minX + maxX) / 2, cy - (minY + maxY) / 2];
    }
    stopLayout() {
        if (this.instance && isLayoutWithIterations(this.instance)) {
            this.instance.stop();
            this.instance = undefined;
        }
        if (this.supervisor) {
            this.supervisor.stop();
            this.supervisor = undefined;
        }
        if (this.animationResult) {
            this.animationResult.finish();
            this.animationResult = undefined;
        }
    }
    getLayoutData(options) {
        const { nodeFilter = () => true, comboFilter = () => true, preLayout = false, isLayoutInvisibleNodes = false, } = options;
        const { nodes, edges, combos } = this.context.model.getData();
        const { element, model } = this.context;
        const getElement = (id) => element.getElement(id);
        const filterFn = preLayout
            ? (node) => {
                var _a;
                if (!isLayoutInvisibleNodes) {
                    if (((_a = node.style) === null || _a === void 0 ? void 0 : _a.visibility) === 'hidden')
                        return false;
                    if (model.getAncestorsData(node.id, TREE_KEY).some(isCollapsed))
                        return false;
                    if (model.getAncestorsData(node.id, COMBO_KEY).some(isCollapsed))
                        return false;
                }
                return nodeFilter(node);
            }
            : (node) => {
                const id = idOf(node);
                const element = getElement(id);
                if (!element)
                    return false;
                if (isToBeDestroyed(element))
                    return false;
                return nodeFilter(node);
            };
        const nodesToLayout = nodes.filter(filterFn);
        const combosToLayout = combos.filter(comboFilter);
        const nodeLikeIdsMap = new Map(nodesToLayout.map((node) => [idOf(node), node]));
        combosToLayout.forEach((combo) => nodeLikeIdsMap.set(idOf(combo), combo));
        const edgesToLayout = edges.filter(({ source, target }) => {
            return nodeLikeIdsMap.has(source) && nodeLikeIdsMap.has(target);
        });
        return {
            nodes: nodesToLayout,
            edges: edgesToLayout,
            combos: combosToLayout,
        };
    }
    /**
     * <zh/> 创建布局实例
     *
     * <en/> Create layout instance
     * @param options - <zh/> 布局配置项 | <en/> Layout options
     * @returns <zh/> 布局对象 | <en/> Layout object
     */
    initGraphLayout(options) {
        var _a;
        const { element, viewport } = this.context;
        const { type, enableWorker, animation, iterations } = options, restOptions = __rest(options, ["type", "enableWorker", "animation", "iterations"]);
        const [width, height] = viewport.getCanvasSize();
        const center = [width / 2, height / 2];
        const nodeSize = (_a = options === null || options === void 0 ? void 0 : options.nodeSize) !== null && _a !== void 0 ? _a : ((node) => {
            const nodeElement = element === null || element === void 0 ? void 0 : element.getElement(node.id);
            if (nodeElement)
                return nodeElement.attributes.size;
            return element === null || element === void 0 ? void 0 : element.getElementComputedStyle('node', node).size;
        });
        const Ctor = getExtension('layout', type);
        if (!Ctor)
            return print.warn(`The layout of ${type} is not registered.`);
        const STDCtor = Object.getPrototypeOf(Ctor.prototype) === BaseLayout.prototype
            ? Ctor
            : layoutAdapter(Ctor, this.context);
        const layout = new STDCtor(this.context);
        const config = { nodeSize, width, height, center };
        switch (layout.id) {
            case 'd3-force':
            case 'd3-force-3d':
                Object.assign(config, {
                    center: { x: width / 2, y: height / 2, z: 0 },
                });
                break;
            default:
                break;
        }
        deepMix(layout.options, config, restOptions);
        return layout;
    }
    updateElementPosition(layoutResult, animation) {
        const { model, element } = this.context;
        if (!element)
            return null;
        model.updateData(layoutResult);
        return element.draw({ animation, silence: true });
    }
    destroy() {
        var _a;
        this.stopLayout();
        // @ts-expect-error force delete
        this.context = {};
        (_a = this.supervisor) === null || _a === void 0 ? void 0 : _a.kill();
        this.supervisor = undefined;
        this.instance = undefined;
        this.instances = [];
        this.animationResult = undefined;
    }
}
/**
 * <zh/> 对树形布局结果应用偏移
 *
 * <en/> Apply offset to tree layout result
 * @param data - <zh/> 布局数据 | <en/> Layout data
 * @param offset - <zh/> 偏移量 | <en/> Offset
 */
const applyTreeLayoutOffset = (data, offset) => {
    var _a;
    const [ox, oy] = offset;
    (_a = data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
        if (node.style) {
            const { x = 0, y = 0 } = node.style;
            node.style.x = x + ox;
            node.style.y = y + oy;
        }
        else {
            node.style = { x: ox, y: oy };
        }
    });
};
//# sourceMappingURL=layout.js.map