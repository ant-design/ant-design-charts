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
import { deepMix, isNumber } from '@antv/util';
import { COMBO_KEY } from '../constants';
import { BaseLayout } from '../layouts/base-layout';
import { idOf } from './id';
import { parsePoint } from './point';
/**
 * <zh/> 判断是否是 combo 布局
 *
 * <en/> Determine if it is a combo layout
 * @param options - <zh/> 布局配置项 | <en/> Layout options
 * @returns <zh/> 是否是 combo 布局 | <en/> Whether it is a combo layout
 */
export function isComboLayout(options) {
    const { type } = options;
    if (['comboCombined', 'comboForce'].includes(type))
        return true;
    if (type === 'antv-dagre' && options.sortByCombo)
        return true;
    return false;
}
/**
 * <zh/> 判断是否是树图布局
 *
 * <en/> Determine if it is a tree layout
 * @param options - <zh/> 布局配置项 | <en/> Layout options
 * @returns <zh/> 是否是树图布局 | <en/> Whether it is a tree layout
 */
export function isTreeLayout(options) {
    const { type } = options;
    return ['compact-box', 'mindmap', 'dendrogram', 'indented'].includes(type);
}
/**
 * <zh/> 数据中是否指定了位置
 *
 * <en/> Is the position specified in the data
 * @param data - <zh/> 数据 | <en/> Data
 * @returns <zh/> 是否指定了位置 | <en/> Is the position specified
 */
export function isPositionSpecified(data) {
    return isNumber(data.x) && isNumber(data.y);
}
/**
 * <zh/> 是否是前布局
 *
 * <en/> Is pre-layout
 * @remarks
 * <zh/> 前布局是指在初始化元素前计算布局，适用于一些布局需要提前计算位置的场景。
 *
 * <en/> Pre-layout refers to calculating the layout before initializing the elements, which is suitable for some layouts that need to calculate the position in advance.
 * @param options - <zh/> 布局配置项 | <en/> Layout options
 * @returns <zh/> 是否是前布局 | <en/> Is it a pre-layout
 */
export function isPreLayout(options) {
    return !Array.isArray(options) && (options === null || options === void 0 ? void 0 : options.preLayout);
}
/**
 * <zh/> 将图布局结果转换为 G6 数据
 *
 * <en/> Convert the layout result to G6 data
 * @param layoutMapping - <zh/> 布局映射 | <en/> Layout mapping
 * @returns <zh/> G6 数据 | <en/> G6 data
 */
export function layoutMapping2GraphData(layoutMapping) {
    const { nodes, edges } = layoutMapping;
    const data = { nodes: [], edges: [], combos: [] };
    nodes.forEach((nodeLike) => {
        const target = nodeLike.data._isCombo ? data.combos : data.nodes;
        const { x, y, z = 0 } = nodeLike.data;
        target === null || target === void 0 ? void 0 : target.push({
            id: nodeLike.id,
            style: { x, y, z },
        });
    });
    edges.forEach((edge) => {
        const { id, source, target, data: { points = [], controlPoints = points.slice(1, points.length - 1) }, } = edge;
        data.edges.push({
            id: id,
            source: source,
            target: target,
            style: Object.assign({}, ((controlPoints === null || controlPoints === void 0 ? void 0 : controlPoints.length) ? { controlPoints: controlPoints.map(parsePoint) } : {})),
        });
    });
    return data;
}
/**
 * <zh/> 将 @antv/layout 布局适配为 G6 布局
 *
 * <en/> Adapt @antv/layout layout to G6 layout
 * @param Ctor - <zh/> 布局类 | <en/> Layout class
 * @param context - <zh/> 运行时上下文 | <en/> Runtime context
 * @returns <zh/> G6 布局类 | <en/> G6 layout class
 */
export function layoutAdapter(Ctor, context) {
    class AdaptLayout extends BaseLayout {
        constructor(context, options) {
            super(context, options);
            this.instance = new Ctor({});
            this.id = this.instance.id;
            if ('stop' in this.instance && 'tick' in this.instance) {
                const instance = this.instance;
                this.stop = instance.stop.bind(instance);
                this.tick = (iterations) => {
                    const tickResult = instance.tick(iterations);
                    return layoutMapping2GraphData(tickResult);
                };
            }
        }
        execute(model, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return layoutMapping2GraphData(yield this.instance.execute(this.graphData2LayoutModel(model), this.transformOptions(deepMix({}, this.options, options))));
            });
        }
        transformOptions(options) {
            if (!('onTick' in options))
                return options;
            const onTick = options.onTick;
            options.onTick = (data) => onTick(layoutMapping2GraphData(data));
            return options;
        }
        graphData2LayoutModel(data) {
            const { nodes = [], edges = [], combos = [] } = data;
            const nodesToLayout = nodes.map((datum) => {
                const id = idOf(datum);
                const { data, style, combo } = datum, rest = __rest(datum, ["data", "style", "combo"]);
                const result = {
                    id,
                    data: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, data), { data }), (combo ? { parentId: combo } : {})), { style }), rest),
                };
                // 一些布局会从 data 中读取位置信息
                if (style === null || style === void 0 ? void 0 : style.x)
                    Object.assign(result.data, { x: style.x });
                if (style === null || style === void 0 ? void 0 : style.y)
                    Object.assign(result.data, { y: style.y });
                if (style === null || style === void 0 ? void 0 : style.z)
                    Object.assign(result.data, { z: style.z });
                return result;
            });
            const nodesIdMap = new Map(nodesToLayout.map((node) => [node.id, node]));
            const edgesToLayout = edges
                .filter((edge) => {
                const { source, target } = edge;
                return nodesIdMap.has(source) && nodesIdMap.has(target);
            })
                .map((edge) => {
                const { source, target, data, style } = edge;
                return { id: idOf(edge), source, target, data: Object.assign({}, data), style: Object.assign({}, style) };
            });
            const combosToLayout = combos.map((combo) => {
                return { id: idOf(combo), data: Object.assign({ _isCombo: true }, combo.data), style: Object.assign({}, combo.style) };
            });
            const layoutModel = new Graphlib({
                nodes: [...nodesToLayout, ...combosToLayout],
                edges: edgesToLayout,
            });
            if (context.model.model.hasTreeStructure(COMBO_KEY)) {
                layoutModel.attachTreeStructure(COMBO_KEY);
                // 同步层级关系 / Synchronize hierarchical relationships
                nodesToLayout.forEach((node) => {
                    const parent = context.model.model.getParent(node.id, COMBO_KEY);
                    if (parent && layoutModel.hasNode(parent.id)) {
                        layoutModel.setParent(node.id, parent.id, COMBO_KEY);
                    }
                });
            }
            return layoutModel;
        }
    }
    return AdaptLayout;
}
/**
 * <zh/> 调用布局成员方法
 *
 * <en/> Call layout member methods
 * @remarks
 * <zh/> 提供一种通用的调用方式来调用 G6 布局和 \@antv/layout 布局上的方法
 *
 * <en/> Provide a common way to call methods on G6 layout and \@antv/layout layout
 * @param layout - <zh/> 布局实例 | <en/> Layout instance
 * @param method - <zh/> 方法名 | <en/> Method name
 * @param args - <zh/> 参数 | <en/> Arguments
 * @returns <zh/> 返回值 | <en/> Return value
 */
export function invokeLayoutMethod(layout, method, ...args) {
    if (method in layout) {
        return layout[method](...args);
    }
    // invoke AdaptLayout method
    if ('instance' in layout) {
        const instance = layout.instance;
        if (method in instance)
            return instance[method](...args);
    }
    return null;
}
/**
 * <zh/> 获取布局成员属性
 *
 * <en/> Get layout member properties
 * @param layout - <zh/> 布局实例 | <en/> Layout instance
 * @param name - <zh/> 属性名 | <en/> Property name
 * @returns <zh/> 返回值 | <en/> Return value
 */
export function getLayoutProperty(layout, name) {
    if (name in layout)
        return layout[name];
    if ('instance' in layout) {
        const instance = layout.instance;
        if (name in instance)
            return instance[name];
    }
    return null;
}
//# sourceMappingURL=layout.js.map