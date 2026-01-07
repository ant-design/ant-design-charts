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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const event_emitter_1 = __importDefault(require("@antv/event-emitter"));
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const collapsibility_1 = require("../utils/collapsibility");
const dom_1 = require("../utils/dom");
const edge_1 = require("../utils/edge");
const event_1 = require("../utils/event");
const id_1 = require("../utils/id");
const layout_1 = require("../utils/layout");
const print_1 = require("../utils/print");
const vector_1 = require("../utils/vector");
const z_index_1 = require("../utils/z-index");
const animation_1 = require("./animation");
const batch_1 = require("./batch");
const behavior_1 = require("./behavior");
const canvas_1 = require("./canvas");
const data_1 = require("./data");
const element_1 = require("./element");
const layout_2 = require("./layout");
const options_1 = require("./options");
const plugin_1 = require("./plugin");
const transform_1 = require("./transform");
const viewport_1 = require("./viewport");
class Graph extends event_emitter_1.default {
    constructor(options) {
        var _a;
        super();
        this.options = {};
        /**
         * <zh/> 当前图实例是否已经渲染
         *
         * <en/> Whether the current graph instance has been rendered
         */
        this.rendered = false;
        /**
         * <zh/> 当前图实例是否已经被销毁
         *
         * <en/> Whether the current graph instance has been destroyed
         */
        this.destroyed = false;
        // @ts-expect-error will be initialized in createRuntime
        this.context = {
            model: new data_1.DataController(),
        };
        this.isCollapsingExpanding = false;
        this.onResize = (0, util_1.debounce)(() => {
            this.resize();
        }, 300);
        this._setOptions(Object.assign({}, Graph.defaultOptions, options), true);
        this.context.graph = this;
        // Listening resize to autoResize.
        this.options.autoResize && ((_a = globalThis.addEventListener) === null || _a === void 0 ? void 0 : _a.call(globalThis, 'resize', this.onResize));
    }
    /**
     * <zh/> 获取配置项
     *
     * <en/> Get options
     * @returns <zh/> 配置项 | <en/> options
     * @apiCategory option
     */
    getOptions() {
        return this.options;
    }
    /**
     * <zh/> 设置配置项
     *
     * <en/> Set options
     * @param options - <zh/> 配置项 | <en/> options
     * @remarks
     * <zh/> 要更新 devicePixelRatio、container 属性请销毁后重新创建实例
     *
     * <en/> To update devicePixelRatio and container properties, please destroy and recreate the instance
     * @apiCategory option
     */
    setOptions(options) {
        this._setOptions(options, false);
    }
    _setOptions(options, isInit) {
        this.updateCanvas(options);
        Object.assign(this.options, (0, options_1.inferOptions)(options));
        if (isInit) {
            const { data } = options;
            if (data)
                this.addData(data);
            return;
        }
        const { behaviors, combo, data, edge, layout, node, plugins, theme, transforms } = options;
        if (behaviors)
            this.setBehaviors(behaviors);
        if (data)
            this.setData(data);
        if (node)
            this.setNode(node);
        if (edge)
            this.setEdge(edge);
        if (combo)
            this.setCombo(combo);
        if (layout)
            this.setLayout(layout);
        if (theme)
            this.setTheme(theme);
        if (plugins)
            this.setPlugins(plugins);
        if (transforms)
            this.setTransforms(transforms);
    }
    /**
     * <zh/> 获取当前画布容器的尺寸
     *
     * <en/> Get the size of the current canvas container
     * @returns <zh/> 画布尺寸 | <en/> canvas size
     * @apiCategory canvas
     */
    getSize() {
        if (this.context.canvas)
            return this.context.canvas.getSize();
        return [this.options.width || 0, this.options.height || 0];
    }
    /**
     * <zh/> 设置当前画布容器的尺寸
     *
     * <en/> Set the size of the current canvas container
     * @param width - <zh/> 画布宽度 | <en/> canvas width
     * @param height - <zh/> 画布高度 | <en/> canvas height
     * @apiCategory canvas
     */
    setSize(width, height) {
        if (width)
            this.options.width = width;
        if (height)
            this.options.height = height;
        this.resize(width, height);
    }
    /**
     * <zh/> 设置当前图的缩放区间
     *
     * <en/> Get the zoom range of the current graph
     * @param zoomRange - <zh/> 缩放区间 | <en/> zoom range
     * @apiCategory viewport
     */
    setZoomRange(zoomRange) {
        this.options.zoomRange = zoomRange;
    }
    /**
     * <zh/> 获取当前图的缩放区间
     *
     * <en/> Get the zoom range of the current graph
     * @returns <zh/> 缩放区间 | <en/> zoom range
     * @apiCategory viewport
     */
    getZoomRange() {
        return this.options.zoomRange;
    }
    /**
     * <zh/> 设置节点样式映射
     *
     * <en/> Set node mapper
     * @param node - <zh/> 节点配置 | <en/> node options
     * @remarks
     * <zh/> 即 `options.node` 的值
     *
     * <en/> The value of `options.node`
     * @apiCategory element
     */
    setNode(node) {
        this.options.node = node;
        this.context.model.refreshData();
    }
    /**
     * <zh/> 设置边样式映射
     *
     * <en/> Set edge mapper
     * @param edge - <zh/> 边配置 | <en/> edge options
     * @remarks
     * <zh/> 即 `options.edge` 的值
     *
     * <en/> The value of `options.edge`
     * @apiCategory element
     */
    setEdge(edge) {
        this.options.edge = edge;
        this.context.model.refreshData();
    }
    /**
     * <zh/> 设置组合样式映射
     *
     * <en/> Set combo mapper
     * @param combo - <zh/> 组合配置 | <en/> combo options
     * @remarks
     * <zh/> 即 `options.combo` 的值
     *
     * <en/> The value of `options.combo`
     * @apiCategory element
     */
    setCombo(combo) {
        this.options.combo = combo;
        this.context.model.refreshData();
    }
    /**
     * <zh/> 获取主题
     *
     * <en/> Get theme
     * @returns <zh/> 当前主题 | <en/> current theme
     * @apiCategory theme
     */
    getTheme() {
        return this.options.theme;
    }
    /**
     * <zh/> 设置主题
     *
     * <en/> Set theme
     * @param theme - <zh/> 主题名 | <en/> theme name
     * @example
     * ```ts
     * graph.setTheme('dark');
     * ```
     * @apiCategory theme
     */
    setTheme(theme) {
        this.options.theme = (0, util_1.isFunction)(theme) ? theme(this.getTheme()) : theme;
    }
    /**
     * <zh/> 设置布局
     *
     * <en/> Set layout
     * @param layout - <zh/> 布局配置 | <en/> layout options
     * @example
     * ```ts
     * graph.setLayout({
     *  type: 'dagre',
     * })
     * ```
     * @apiCategory layout
     */
    setLayout(layout) {
        this.options.layout = (0, util_1.isFunction)(layout) ? layout(this.getLayout()) : layout;
    }
    /**
     * <zh/> 获取布局配置
     *
     * <en/> Get layout options
     * @returns <zh/> 布局配置 | <en/> layout options
     * @apiCategory layout
     */
    getLayout() {
        return this.options.layout;
    }
    /**
     * <zh/> 设置交互
     *
     * <en/> Set behaviors
     * @param behaviors - <zh/> 交互配置 | <en/> behavior options
     * @remarks
     * <zh/> 设置的交互会全量替换原有的交互，如果需要新增交互可以使用如下方式：
     *
     * <en/> The set behavior will completely replace the original behavior. If you need to add behavior, you can use the following method:
     *
     * ```ts
     * graph.setBehaviors((behaviors) => [...behaviors, { type: 'zoom-canvas' }])
     * ```
     * @apiCategory behavior
     */
    setBehaviors(behaviors) {
        var _a;
        this.options.behaviors = (0, util_1.isFunction)(behaviors) ? behaviors(this.getBehaviors()) : behaviors;
        (_a = this.context.behavior) === null || _a === void 0 ? void 0 : _a.setBehaviors(this.options.behaviors);
    }
    /**
     * <zh/> 更新指定的交互配置
     *
     * <en/> Update specified behavior options
     * @param behavior - <zh/> 交互配置 | <en/> behavior options
     * @remarks
     * <zh/> 如果要更新一个交互，那么必须在交互配置中指定 key 字段，例如：
     *
     * <en/> If you want to update a behavior, you must specify the key field in the behavior options, for example:
     * ```ts
     * {
     *   behaviors: [{ type: 'zoom-canvas', key: 'zoom-canvas' }]
     * }
     *
     * graph.updateBehavior({ key: 'zoom-canvas', enable: false })
     * ```
     * @apiCategory behavior
     */
    updateBehavior(behavior) {
        this.setBehaviors((behaviors) => behaviors.map((_behavior) => {
            if (typeof _behavior === 'object' && _behavior.key === behavior.key) {
                return Object.assign(Object.assign({}, _behavior), behavior);
            }
            return _behavior;
        }));
    }
    /**
     * <zh/> 获取交互配置
     *
     * <en/> Get behaviors options
     * @returns <zh/> 交互配置 | <en/> behavior options
     * @apiCategory behavior
     */
    getBehaviors() {
        return this.options.behaviors || [];
    }
    /**
     * <zh/> 设置插件配置
     *
     * <en/> Set plugins options
     * @param plugins - <zh/> 插件配置 | <en/> plugin options
     * @remarks
     * <zh/> 设置的插件会全量替换原有的插件配置，如果需要新增插件可以使用如下方式：
     *
     * <en/> The set plugin will completely replace the original plugin configuration. If you need to add a plugin, you can use the following method:
     * ```ts
     * graph.setPlugins((plugins) => [...plugins, { key: 'grid-line' }])
     * ```
     * @apiCategory plugin
     */
    setPlugins(plugins) {
        var _a;
        this.options.plugins = (0, util_1.isFunction)(plugins) ? plugins(this.getPlugins()) : plugins;
        (_a = this.context.plugin) === null || _a === void 0 ? void 0 : _a.setPlugins(this.options.plugins);
    }
    /**
     * <zh/> 更新插件配置
     *
     * <en/> Update plugin options
     * @param plugin - <zh/> 插件配置 | <en/> plugin options
     * @remarks
     * <zh/> 如果要更新一个插件，那么必须在插件配置中指定 key 字段，例如：
     *
     * <en/> If you want to update a plugin, you must specify the key field in the plugin options, for example:
     * ```ts
     * {
     *   plugins: [{ key: 'grid-line' }]
     * }
     *
     * graph.updatePlugin({ key: 'grid-line', follow: true })
     * ```
     * @apiCategory plugin
     */
    updatePlugin(plugin) {
        this.setPlugins((plugins) => plugins.map((_plugin) => {
            if (typeof _plugin === 'object' && _plugin.key === plugin.key) {
                return Object.assign(Object.assign({}, _plugin), plugin);
            }
            return _plugin;
        }));
    }
    /**
     * <zh/> 获取插件配置
     *
     * <en/> Get plugins options
     * @returns <zh/> 插件配置 | <en/> plugin options
     * @apiCategory plugin
     */
    getPlugins() {
        return this.options.plugins || [];
    }
    /**
     * <zh/> 获取插件实例
     *
     * <en/> Get plugin instance
     * @param key - <zh/> 插件 key（在配置 plugin 时需要手动传入指定） | <en/> plugin key(need to be specified manually when configuring plugin)
     * @returns <zh/> 插件实例 | <en/> plugin instance
     * @remarks
     * <zh/> 一些插件提供了 API 方法可供调用，例如全屏插件可以调用 `request` 和 `exit` 方法来请求和退出全屏
     *
     * <en/> Some plugins provide API methods for calling, such as the full-screen plugin can call the `request` and `exit` methods to request and exit full-screen
     * ```ts
     * const fullscreen = graph.getPluginInstance('fullscreen');
     *
     * fullscreen.request();
     *
     * fullscreen.exit();
     * ```
     * @apiCategory plugin
     */
    getPluginInstance(key) {
        return this.context.plugin.getPluginInstance(key);
    }
    /**
     * <zh/> 设置数据转换器
     *
     * <en/> Set data transforms
     * @param transforms - <zh/> 数据转换配置 | <en/> data transform options
     * @remarks
     * <zh/> 数据转换器能够在图渲染过程中执行数据转换，目前支持在渲染前对绘制数据进行转化。
     *
     * <en/> Data transforms can perform data transformation during the rendering process of the graph. Currently, it supports transforming the drawing data before rendering.
     * @apiCategory transform
     */
    setTransforms(transforms) {
        var _a;
        this.options.transforms = (0, util_1.isFunction)(transforms) ? transforms(this.getTransforms()) : transforms;
        (_a = this.context.transform) === null || _a === void 0 ? void 0 : _a.setTransforms(this.options.transforms);
    }
    /**
     * <zh/> 更新数据转换器
     *
     * <en/> Update data transform
     * @param transform - <zh/> 数据转换器配置 | <en/> data transform options
     * @apiCategory transform
     */
    updateTransform(transform) {
        this.setTransforms((transforms) => transforms.map((_transform) => {
            if (typeof _transform === 'object' && _transform.key === transform.key) {
                return Object.assign(Object.assign({}, _transform), transform);
            }
            return _transform;
        }));
        this.context.model.refreshData();
    }
    /**
     * <zh/> 获取数据转换器配置
     *
     * <en/> Get data transforms options
     * @returns <zh/> 数据转换配置 | <en/> data transform options
     * @apiCategory transform
     */
    getTransforms() {
        return this.options.transforms || [];
    }
    /**
     * <zh/> 获取图数据
     *
     * <en/> Get graph data
     * @returns <zh/> 图数据 | <en/> Graph data
     * <zh/> 获取当前图的数据，包括节点、边、组合数据
     *
     * <en/> Get the data of the current graph, including node, edge, and combo data
     * @apiCategory data
     */
    getData() {
        return this.context.model.getData();
    }
    /**
     * <zh/> 判断图中是否存在指定节点
     * <en/> Determine whether a specified node exists in the graph
     * @param {ID} id
     * @returns {boolean}
     * @remarks <zh/> 判断图中是否存在指定节点,避免在不存在的节点上进行操作
     * <en/> Determine whether a specified node exists in the graph and avoid operating on non-existent nodes
     */
    hasNode(id) {
        return this.context.model.hasNode(id);
    }
    /**
     * <zh/> 判断图中是否存在指定边
     * <en/> Determine whether a specified edge exists in the graph
     * @param {ID} id
     * @returns  {boolean}
     * @remarks <zh/> 判断图中是否存在指定边,避免在不存在的边上进行操作
     * <en/> Determine whether a specified edge exists in the graph and avoid operating on non-existent edges
     */
    hasEdge(id) {
        return this.context.model.hasEdge(id);
    }
    /**
     * <zh/> 判断图中是否存在指定组合
     * <en/> Determine whether a specified combo exists in the graph
     * @param {ID} id
     * @returns  {boolean}
     * @remarks <zh/> 判断图中是否存在指定组合,避免在不存在的组合上进行操作
     * <en/> Determine whether a specified combo exists in the graph and avoid operating on non-existent combos
     */
    hasCombo(id) {
        return this.context.model.hasCombo(id);
    }
    getElementData(ids) {
        if (Array.isArray(ids))
            return ids.map((id) => this.context.model.getElementDataById(id));
        return this.context.model.getElementDataById(ids);
    }
    getNodeData(id) {
        if (id === undefined)
            return this.context.model.getNodeData();
        if (Array.isArray(id))
            return this.context.model.getNodeData(id);
        return this.context.model.getNodeLikeDatum(id);
    }
    getEdgeData(id) {
        if (id === undefined)
            return this.context.model.getEdgeData();
        if (Array.isArray(id))
            return this.context.model.getEdgeData(id);
        return this.context.model.getEdgeDatum(id);
    }
    getComboData(id) {
        if (id === undefined)
            return this.context.model.getComboData();
        if (Array.isArray(id))
            return this.context.model.getComboData(id);
        return this.context.model.getNodeLikeDatum(id);
    }
    /**
     * <zh/> 设置全量数据
     *
     * <en/> Set full data
     * @param data - <zh/> 数据 | <en/> data
     * @remarks
     * <zh/> 设置全量数据会替换当前图中的所有数据，G6 会自动进行数据差异计算
     *
     * <en/> Setting full data will replace all data in the current graph, and G6 will automatically calculate the data difference
     * @apiCategory data
     */
    setData(data) {
        this.context.model.setData((0, util_1.isFunction)(data) ? data(this.getData()) : data);
    }
    /**
     * <zh/> 新增元素数据
     *
     * <en/> Add element data
     * @param data - <zh/> 元素数据 | <en/> element data
     * @example
     * ```ts
     * graph.addData({
     *  nodes: [{ id: 'node-1' }, { id: 'node-2' }],
     *  edges: [{ source: 'node-1', target: 'node-2' }],
     * });
     * ```
     * @apiCategory data
     */
    addData(data) {
        this.context.model.addData((0, util_1.isFunction)(data) ? data(this.getData()) : data);
    }
    /**
     * <zh/> 新增节点数据
     *
     * <en/> Add node data
     * @param data - <zh/> 节点数据 | <en/> node data
     * @example
     * ```ts
     * graph.addNodeData([{ id: 'node-1' }, { id: 'node-2' }]);
     * ```
     * @apiCategory data
     */
    addNodeData(data) {
        this.context.model.addNodeData((0, util_1.isFunction)(data) ? data(this.getNodeData()) : data);
    }
    /**
     * <zh/> 新增边数据
     *
     * <en/> Add edge data
     * @param data - <zh/> 边数据 | <en/> edge data
     * @example
     * ```ts
     * graph.addEdgeData([{ source: 'node-1', target: 'node-2' }]);
     * ```
     * @apiCategory data
     */
    addEdgeData(data) {
        this.context.model.addEdgeData((0, util_1.isFunction)(data) ? data(this.getEdgeData()) : data);
    }
    /**
     * <zh/> 新增组合数据
     *
     * <en/> Add combo data
     * @param data - <zh/> 组合数据 | <en/> combo data
     * @example
     * ```ts
     * graph.addComboData([{ id: 'combo-1' }]);
     * ```
     * @apiCategory data
     */
    addComboData(data) {
        this.context.model.addComboData((0, util_1.isFunction)(data) ? data(this.getComboData()) : data);
    }
    /**
     * <zh/> 为树图节点添加子节点数据
     *
     * <en/> Add child node data to the tree node
     * @param parentId - <zh/> 父节点 ID | <en/> parent node ID
     * @param childrenData - <zh/> 子节点数据 | <en/> child node data
     * @remarks
     * <zh/> 为组合添加子节点使用 addNodeData / addComboData 方法
     *
     * <en/> Use addNodeData / addComboData method to add child nodes to the combo
     * @apiCategory data
     */
    addChildrenData(parentId, childrenData) {
        this.context.model.addChildrenData(parentId, childrenData);
    }
    /**
     * <zh/> 更新元素数据
     *
     * <en/> Update element data
     * @param data - <zh/> 元素数据 | <en/> element data
     * @remarks
     * <zh/> 只需要传入需要更新的数据即可，不必传入完整的数据
     *
     * <en/> Just pass in the data that needs to be updated, no need to pass in the complete data
     * @example
     * ```ts
     * graph.updateData({
     *   nodes: [{ id: 'node-1', style: { x: 100, y: 100 } }],
     *   edges: [{ id: 'edge-1', style: { lineWidth: 2 } }]
     * });
     * ```
     * @apiCategory data
     */
    updateData(data) {
        this.context.model.updateData((0, util_1.isFunction)(data) ? data(this.getData()) : data);
    }
    /**
     * <zh/> 更新节点数据
     *
     * <en/> Update node data
     * @param data - <zh/> 节点数据 | <en/> node data
     * @remarks
     * <zh/> 只需要传入需要更新的数据即可，不必传入完整的数据
     *
     * <en/> Just pass in the data that needs to be updated, no need to pass in the complete data
     * @example
     * ```ts
     * graph.updateNodeData([{ id: 'node-1', style: { x: 100, y: 100 } }]);
     * ```
     * @apiCategory data
     */
    updateNodeData(data) {
        this.context.model.updateNodeData((0, util_1.isFunction)(data) ? data(this.getNodeData()) : data);
    }
    /**
     * <zh/> 更新边数据
     *
     * <en/> Update edge data
     * @param data - <zh/> 边数据 | <en/> edge data
     * @remarks
     * <zh/> 只需要传入需要更新的数据即可，不必传入完整的数据
     *
     * <en/> Just pass in the data that needs to be updated, no need to pass in the complete data
     * @example
     * ```ts
     * graph.updateEdgeData([{ id: 'edge-1', style: { lineWidth: 2 } }]);
     * ```
     * @apiCategory data
     */
    updateEdgeData(data) {
        this.context.model.updateEdgeData((0, util_1.isFunction)(data) ? data(this.getEdgeData()) : data);
    }
    /**
     * <zh/> 更新组合数据
     *
     * <en/> Update combo data
     * @param data - <zh/> 组合数据 | <en/> combo data
     * @remarks
     * <zh/> 只需要传入需要更新的数据即可，不必传入完整的数据
     *
     * <en/> Just pass in the data that needs to be updated, no need to pass in the complete data
     * @example
     * ```ts
     * graph.updateComboData([{ id: 'combo-1', style: { x: 100, y: 100 } }]);
     * ```
     * @apiCategory data
     */
    updateComboData(data) {
        this.context.model.updateComboData((0, util_1.isFunction)(data) ? data(this.getComboData()) : data);
    }
    /**
     * <zh/> 删除元素数据
     *
     * <en/> Remove element data
     * @param ids - <zh/> 元素 ID 数组 | <en/> element ID array
     * @example
     * ```ts
     * graph.removeData({
     *   nodes: ['node-1', 'node-2'],
     *   edges: ['edge-1'],
     * });
     * ```
     * @apiCategory data
     */
    removeData(ids) {
        this.context.model.removeData((0, util_1.isFunction)(ids) ? ids(this.getData()) : ids);
    }
    /**
     * <zh/> 删除节点数据
     *
     * <en/> Remove node data
     * @param ids - <zh/> 节点 ID 数组 | <en/> node ID array
     * @example
     * ```ts
     * graph.removeNodeData(['node-1', 'node-2']);
     * ```
     * @apiCategory data
     */
    removeNodeData(ids) {
        this.context.model.removeNodeData((0, util_1.isFunction)(ids) ? ids(this.getNodeData()) : ids);
    }
    /**
     * <zh/> 删除边数据
     *
     * <en/> Remove edge data
     * @param ids - <zh/> 边 ID 数组 | <en/> edge ID array
     * @remarks
     * <zh/> 如果传入边数据时仅提供了 source 和 target，那么需要通过 `idOf` 方法获取边的实际 ID
     *
     * <en/> If only the source and target are provided when passing in the edge data, you need to get the actual ID of the edge through the `idOf` method
     * @example
     * ```ts
     * graph.removeEdgeData(['edge-1']);
     * ```
     * @apiCategory data
     */
    removeEdgeData(ids) {
        this.context.model.removeEdgeData((0, util_1.isFunction)(ids) ? ids(this.getEdgeData()) : ids);
    }
    /**
     * <zh/> 删除组合数据
     *
     * <en/> Remove combo data
     * @param ids - <zh/> 组合 ID 数组 | <en/> 组合 ID array
     * @example
     * ```ts
     * graph.removeComboData(['combo-1']);
     * ```
     * @apiCategory data
     */
    removeComboData(ids) {
        this.context.model.removeComboData((0, util_1.isFunction)(ids) ? ids(this.getComboData()) : ids);
    }
    /**
     * <zh/> 获取元素类型
     *
     * <en/> Get element type
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素类型 | <en/> element type
     * @apiCategory element
     */
    getElementType(id) {
        return this.context.model.getElementType(id);
    }
    /**
     * <zh/> 获取节点或组合关联边的数据
     *
     * <en/> Get edge data related to the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @param direction - <zh/> 边的方向 | <en/> edge direction
     * @returns <zh/> 边数据 | <en/> edge data
     * @apiCategory data
     */
    getRelatedEdgesData(id, direction = 'both') {
        return this.context.model.getRelatedEdgesData(id, direction);
    }
    /**
     * <zh/> 获取节点或组合的一跳邻居节点数据
     *
     * <en/> Get the one-hop neighbor node data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @returns <zh/> 邻居节点数据 | <en/> neighbor node data
     * @apiCategory data
     */
    getNeighborNodesData(id) {
        return this.context.model.getNeighborNodesData(id);
    }
    /**
     * <zh/> 获取节点或组合的祖先元素数据
     *
     * <en/> Get the ancestor element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @param hierarchy - <zh/> 指定树图层级关系还是组合层级关系 | <en/> specify tree or combo hierarchy relationship
     * @returns <zh/> 祖先元素数据 | <en/> ancestor element data
     * @remarks
     * <zh/> 数组中的顺序是从父节点到祖先节点
     *
     * <en/> The order in the array is from the parent node to the ancestor node
     * @apiCategory data
     */
    getAncestorsData(id, hierarchy) {
        return this.context.model.getAncestorsData(id, hierarchy);
    }
    /**
     * <zh/> 获取节点或组合的父元素数据
     *
     * <en/> Get the parent element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @param hierarchy - <zh/> 指定树图层级关系还是组合层级关系 | <en/> specify tree or combo hierarchy relationship
     * @returns <zh/> 父元素数据 | <en/> parent element data
     * @apiCategory data
     */
    getParentData(id, hierarchy) {
        return this.context.model.getParentData(id, hierarchy);
    }
    /**
     * <zh/> 获取节点或组合的子元素数据
     *
     * <en/> Get the child element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @returns <zh/> 子元素数据 | <en/> child element data
     * @apiCategory data
     */
    getChildrenData(id) {
        return this.context.model.getChildrenData(id);
    }
    /**
     * <zh/> 获取节点或组合的后代元素数据
     *
     * <en/> Get the descendant element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @returns <zh/> 后代元素数据 | <en/> descendant element data
     * @apiCategory data
     */
    getDescendantsData(id) {
        return this.context.model.getDescendantsData(id);
    }
    getElementDataByState(elementType, state) {
        return this.context.model.getElementDataByState(elementType, state);
    }
    initCanvas() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (this.context.canvas)
                return yield this.context.canvas.ready;
            const { container = 'container', width, height, renderer, cursor, background, canvas: canvasOptions, devicePixelRatio = (_a = globalThis.devicePixelRatio) !== null && _a !== void 0 ? _a : 1, } = this.options;
            if (container instanceof canvas_1.Canvas) {
                this.context.canvas = container;
                if (cursor)
                    container.setCursor(cursor);
                if (renderer)
                    container.setRenderer(renderer);
                yield container.ready;
            }
            else {
                const $container = (0, util_1.isString)(container) ? document.getElementById(container) : container;
                const containerSize = (0, dom_1.sizeOf)($container);
                this.emit(constants_1.GraphEvent.BEFORE_CANVAS_INIT, { container: $container, width, height });
                const options = Object.assign(Object.assign({}, canvasOptions), { container: $container, width: width || containerSize[0], height: height || containerSize[1], background,
                    renderer,
                    cursor,
                    devicePixelRatio });
                const canvas = new canvas_1.Canvas(options);
                this.context.canvas = canvas;
                yield canvas.ready;
                this.emit(constants_1.GraphEvent.AFTER_CANVAS_INIT, { canvas });
            }
        });
    }
    updateCanvas(options) {
        var _a, _b;
        const { renderer, cursor, height, width } = options;
        const canvas = this.context.canvas;
        if (!canvas)
            return;
        if (renderer) {
            this.emit(constants_1.GraphEvent.BEFORE_RENDERER_CHANGE, { renderer: this.options.renderer });
            canvas.setRenderer(renderer);
            this.emit(constants_1.GraphEvent.AFTER_RENDERER_CHANGE, { renderer });
        }
        if (cursor)
            canvas.setCursor(cursor);
        if ((0, util_1.isNumber)(width) || (0, util_1.isNumber)(height))
            this.setSize((_a = width !== null && width !== void 0 ? width : this.options.width) !== null && _a !== void 0 ? _a : 0, (_b = height !== null && height !== void 0 ? height : this.options.height) !== null && _b !== void 0 ? _b : 0);
    }
    initRuntime() {
        this.context.options = this.options;
        if (!this.context.batch)
            this.context.batch = new batch_1.BatchController(this.context);
        if (!this.context.plugin)
            this.context.plugin = new plugin_1.PluginController(this.context);
        if (!this.context.viewport)
            this.context.viewport = new viewport_1.ViewportController(this.context);
        if (!this.context.transform)
            this.context.transform = new transform_1.TransformController(this.context);
        if (!this.context.element)
            this.context.element = new element_1.ElementController(this.context);
        if (!this.context.animation)
            this.context.animation = new animation_1.Animation(this.context);
        if (!this.context.layout)
            this.context.layout = new layout_2.LayoutController(this.context);
        if (!this.context.behavior)
            this.context.behavior = new behavior_1.BehaviorController(this.context);
    }
    prepare() {
        return __awaiter(this, void 0, void 0, function* () {
            // 等待同步任务执行完成，避免 render 后立即调用 destroy 导致的问题
            // Wait for synchronous tasks to complete, to avoid problems caused by calling destroy immediately after render
            yield Promise.resolve();
            if (this.destroyed) {
                // 如果图实例已经被销毁，则不再执行任何操作
                // If the graph instance has been destroyed, no further operations will be performed
                // eslint-disable-next-line no-console
                console.error((0, print_1.format)('The graph instance has been destroyed'));
                return;
            }
            yield this.initCanvas();
            this.initRuntime();
        });
    }
    /**
     * <zh/> 执行渲染
     *
     * <en/> Render
     * @remarks
     * <zh/> 此过程会执行数据更新、绘制元素、执行布局
     *
     * > ⚠️ render 为异步方法，如果需要在 render 后执行一些操作，可以使用 `await graph.render()` 或者监听 GraphEvent.AFTER_RENDER 事件
     *
     * <en/> This process will execute data update, element rendering, and layout execution
     *
     * > ⚠️ render is an asynchronous method. If you need to perform some operations after render, you can use `await graph.render()` or listen to the GraphEvent.AFTER_RENDER event
     * @apiCategory render
     */
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prepare();
            (0, event_1.emit)(this, new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BEFORE_RENDER));
            if (!this.options.layout) {
                const animation = this.context.element.draw({ type: 'render' });
                yield Promise.all([animation === null || animation === void 0 ? void 0 : animation.finished, this.autoFit()]);
            }
            else if (!this.rendered && (0, layout_1.isPreLayout)(this.options.layout)) {
                const animation = yield this.context.element.preLayoutDraw({ type: 'render' });
                yield Promise.all([animation === null || animation === void 0 ? void 0 : animation.finished, this.autoFit()]);
            }
            else {
                const animation = this.context.element.draw({ type: 'render' });
                yield Promise.all([animation === null || animation === void 0 ? void 0 : animation.finished, this.context.layout.postLayout()]);
                yield this.autoFit();
            }
            this.rendered = true;
            (0, event_1.emit)(this, new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.AFTER_RENDER));
        });
    }
    /**
     * <zh/> 绘制元素
     *
     * <en/> Draw elements
     * @returns <zh/> 渲染结果 | <en/> draw result
     * @remarks
     * <zh/> 仅执行元素绘制，不会重新布局
     *
     * <zh/> ⚠️ draw 为异步方法，如果需要在 draw 后执行一些操作，可以使用 `await graph.draw()` 或者监听 GraphEvent.AFTER_DRAW 事件
     *
     * <en/> Only execute element drawing, no re-layout
     *
     * <en/> ⚠️ draw is an asynchronous method. If you need to perform some operations after draw, you can use `await graph.draw()` or listen to the GraphEvent.AFTER_DRAW event
     * @apiCategory render
     */
    draw() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield this.prepare();
            yield ((_a = this.context.element.draw()) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    /**
     * <zh/> 执行布局
     *
     * <en/> Execute layout
     * @param layoutOptions - <zh/> 布局配置项 | <en/> Layout options
     * @apiCategory layout
     */
    layout(layoutOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.layout.postLayout(layoutOptions);
        });
    }
    /**
     * <zh/> 停止布局
     *
     * <en/> Stop layout
     * @remarks
     * <zh/> 适用于带有迭代动画的布局，目前有 `force` 属于此类布局，即停止力导布局的迭代，一般用于布局迭代时间过长情况下的手动停止迭代动画，例如在点击画布/节点的监听中调用
     *
     * <en/> Suitable for layouts with iterative animations. Currently, `force` belongs to this type of layout, that is, stop the iteration of the force-directed layout. It is generally used to manually stop the iteration animation when the layout iteration time is too long, such as calling in the click canvas/node listener
     * @apiCategory layout
     */
    stopLayout() {
        this.context.layout.stopLayout();
    }
    /**
     * <zh/> 清空画布元素
     *
     * <en/> Clear canvas elements
     * @apiCategory canvas
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            const { model, element } = this.context;
            model.setData({});
            model.clearChanges();
            element === null || element === void 0 ? void 0 : element.clear();
        });
    }
    /**
     * <zh/> 销毁当前图实例
     *
     * <en/> Destroy the current graph instance
     * @remarks
     * <zh/> 销毁后无法进行任何操作，如果需要重新使用，需要重新创建一个新的图实例
     *
     * <en/> After destruction, no operations can be performed. If you need to reuse it, you need to create a new graph instance
     * @apiCategory instance
     */
    destroy() {
        var _a;
        (0, event_1.emit)(this, new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BEFORE_DESTROY));
        const { layout, animation, element, model, canvas, behavior, plugin } = this.context;
        plugin === null || plugin === void 0 ? void 0 : plugin.destroy();
        behavior === null || behavior === void 0 ? void 0 : behavior.destroy();
        layout === null || layout === void 0 ? void 0 : layout.destroy();
        animation === null || animation === void 0 ? void 0 : animation.destroy();
        element === null || element === void 0 ? void 0 : element.destroy();
        model.destroy();
        canvas === null || canvas === void 0 ? void 0 : canvas.destroy();
        this.options = {};
        // @ts-expect-error force delete
        this.context = {};
        this.off();
        (_a = globalThis.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(globalThis, 'resize', this.onResize);
        this.destroyed = true;
        (0, event_1.emit)(this, new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.AFTER_DESTROY));
    }
    /**
     * <zh/> 获取画布实例
     *
     * <en/> Get canvas instance
     * @returns - <zh/> 画布实例 | <en/> canvas instance
     * @apiCategory canvas
     */
    getCanvas() {
        return this.context.canvas;
    }
    resize(width, height) {
        var _a;
        const containerSize = (0, dom_1.sizeOf)((_a = this.context.canvas) === null || _a === void 0 ? void 0 : _a.getContainer());
        const specificSize = [width || containerSize[0], height || containerSize[1]];
        if (!this.context.canvas)
            return;
        const canvasSize = this.context.canvas.getSize();
        if ((0, util_1.isEqual)(specificSize, canvasSize))
            return;
        (0, event_1.emit)(this, new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BEFORE_SIZE_CHANGE, { size: specificSize }));
        this.context.canvas.resize(...specificSize);
        (0, event_1.emit)(this, new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.AFTER_SIZE_CHANGE, { size: specificSize }));
    }
    /**
     * <zh/> 将图缩放至合适大小并平移至视口中心
     *
     * <en/> Zoom the graph to fit the viewport and move it to the center of the viewport
     * @param options - <zh/> 适配配置 | <en/> fit options
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    fitView(options, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield ((_a = this.context.viewport) === null || _a === void 0 ? void 0 : _a.fitView(options, animation));
        });
    }
    /**
     * <zh/> 将图平移至视口中心
     *
     * <en/> Move the graph to the center of the viewport
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    fitCenter(animation) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield ((_a = this.context.viewport) === null || _a === void 0 ? void 0 : _a.fitCenter({ animation }));
        });
    }
    autoFit() {
        return __awaiter(this, void 0, void 0, function* () {
            const { autoFit } = this.context.options;
            if (!autoFit)
                return;
            if ((0, util_1.isString)(autoFit)) {
                if (autoFit === 'view')
                    yield this.fitView();
                else if (autoFit === 'center')
                    yield this.fitCenter();
            }
            else {
                const { type, animation } = autoFit;
                if (type === 'view')
                    yield this.fitView(autoFit.options, animation);
                else if (type === 'center')
                    yield this.fitCenter(animation);
            }
        });
    }
    /**
     * <zh/> 聚焦元素
     *
     * <en/> Focus on element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @remarks
     * <zh/> 移动图，使得元素对齐到视口中心
     *
     * <en/> Move the graph so that the element is aligned to the center of the viewport
     * @apiCategory viewport
     */
    focusElement(id, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield ((_a = this.context.viewport) === null || _a === void 0 ? void 0 : _a.focusElements(Array.isArray(id) ? id : [id], { animation }));
        });
    }
    /**
     * <zh/> 基于当前缩放比例进行缩放（相对缩放）
     *
     * <en/> Zoom based on the current zoom ratio (relative zoom)
     * @param ratio - <zh/> 缩放比例 | <en/> zoom ratio
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @param origin - <zh/> 缩放中心(视口坐标) | <en/> zoom center(viewport coordinates)
     * @remarks
     * <zh/>
     * - ratio > 1 放大
     * - ratio < 1 缩小
     *
     * <en/>
     * - ratio > 1 zoom in
     * - ratio < 1 zoom out
     * @apiCategory viewport
     */
    zoomBy(ratio, animation, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.viewport.transform({ mode: 'relative', scale: ratio, origin }, animation);
        });
    }
    /**
     * <zh/> 缩放画布至指定比例（绝对缩放）
     *
     * <en/> Zoom the canvas to the specified ratio (absolute zoom)
     * @param zoom - <zh/> 指定缩放比例 | <en/> specified zoom ratio
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @param origin - <zh/> 缩放中心(视口坐标) | <en/> zoom center(viewport coordinates)
     * @remarks
     * <zh/>
     * - zoom = 1 默认大小
     * - zoom > 1 放大
     * - zoom < 1 缩小
     *
     * <en/>
     * - zoom = 1 default size
     * - zoom > 1 zoom in
     * - zoom < 1 zoom out
     * @apiCategory viewport
     */
    zoomTo(zoom, animation, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.viewport.transform({ mode: 'absolute', scale: zoom, origin }, animation);
        });
    }
    /**
     * <zh/> 获取当前缩放比例
     *
     * <en/> Get the current zoom ratio
     * @returns <zh/> 缩放比例 | <en/> zoom ratio
     * @apiCategory viewport
     */
    getZoom() {
        return this.context.viewport.getZoom();
    }
    /**
     * <zh/> 基于当前旋转角度进行旋转（相对旋转）
     *
     * <en/> Rotate based on the current rotation angle (relative rotation)
     * @param angle - <zh/> 旋转角度 | <en/> rotation angle
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @param origin - <zh/> 旋转中心(视口坐标) | <en/> rotation center(viewport coordinates)
     * @apiCategory viewport
     */
    rotateBy(angle, animation, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.viewport.transform({ mode: 'relative', rotate: angle, origin }, animation);
        });
    }
    /**
     * <zh/> 旋转画布至指定角度 (绝对旋转)
     *
     * <en/> Rotate the canvas to the specified angle (absolute rotation)
     * @param angle - <zh/> 目标角度 | <en/> target angle
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @param origin - <zh/> 旋转中心(视口坐标) | <en/> rotation center(viewport coordinates)
     * @apiCategory viewport
     */
    rotateTo(angle, animation, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.viewport.transform({ mode: 'absolute', rotate: angle, origin }, animation);
        });
    }
    /**
     * <zh/> 获取当前旋转角度
     *
     * <en/> Get the current rotation angle
     * @returns <zh/> 旋转角度 | <en/> rotation angle
     * @apiCategory viewport
     */
    getRotation() {
        return this.context.viewport.getRotation();
    }
    /**
     * <zh/> 将图平移指定距离 (相对平移)
     *
     * <en/> Translate the graph by the specified distance (relative translation)
     * @param offset - <zh/> 偏移量 | <en/> offset
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    translateBy(offset, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.viewport.transform({ mode: 'relative', translate: offset }, animation);
        });
    }
    /**
     * <zh/> 将图平移至指定位置 (绝对平移)
     *
     * <en/> Translate the graph to the specified position (absolute translation)
     * @param position - <zh/> 指定位置 | <en/> specified position
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    translateTo(position, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.context.viewport.transform({ mode: 'absolute', translate: position }, animation);
        });
    }
    /**
     * <zh/> 获取图的位置
     *
     * <en/> Get the position of the graph
     * @returns <zh/> 图的位置 | <en/> position of the graph
     * @remarks
     * <zh/> 即画布原点在视口坐标系下的位置。默认状态下，图的位置为 [0, 0]
     *
     * <en/> That is, the position of the canvas origin in the viewport coordinate system. By default, the position of the graph is [0, 0]
     * @apiCategory viewport
     */
    getPosition() {
        return (0, vector_1.subtract)([0, 0], this.getCanvasByViewport([0, 0]));
    }
    translateElementBy(args1_1, args2_1) {
        return __awaiter(this, arguments, void 0, function* (args1, args2, args3 = true) {
            var _a, _b;
            const [config, animation] = (0, util_1.isObject)(args1)
                ? [args1, (_a = args2) !== null && _a !== void 0 ? _a : true]
                : [{ [args1]: args2 }, args3];
            Object.entries(config).forEach(([id, offset]) => this.context.model.translateNodeLikeBy(id, offset));
            yield ((_b = this.context.element.draw({ animation, stage: 'translate' })) === null || _b === void 0 ? void 0 : _b.finished);
        });
    }
    translateElementTo(args1_1, args2_1) {
        return __awaiter(this, arguments, void 0, function* (args1, args2, args3 = true) {
            var _a, _b;
            const [config, animation] = (0, util_1.isObject)(args1)
                ? [args1, (_a = args2) !== null && _a !== void 0 ? _a : true]
                : [{ [args1]: args2 }, args3];
            Object.entries(config).forEach(([id, position]) => this.context.model.translateNodeLikeTo(id, position));
            yield ((_b = this.context.element.draw({ animation, stage: 'translate' })) === null || _b === void 0 ? void 0 : _b.finished);
        });
    }
    /**
     * <zh/> 获取元素位置
     *
     * <en/> Get element position
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素位置 | <en/> element position
     * @apiCategory element
     */
    getElementPosition(id) {
        return this.context.model.getElementPosition(id);
    }
    /**
     * <zh/> 获取元素渲染样式
     *
     * <en/> Get element rendering style
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素渲染样式 | <en/> element rendering style
     * @apiCategory element
     */
    getElementRenderStyle(id) {
        return (0, util_1.omit)(this.context.element.getElement(id).attributes, ['context']);
    }
    setElementVisibility(args1_1, args2_1) {
        return __awaiter(this, arguments, void 0, function* (args1, args2, args3 = true) {
            var _a, _b;
            const [config, animation] = (0, util_1.isObject)(args1)
                ? [args1, (_a = args2) !== null && _a !== void 0 ? _a : true]
                : [{ [args1]: args2 }, args3];
            const dataToUpdate = { nodes: [], edges: [], combos: [] };
            Object.entries(config).forEach(([id, value]) => {
                const elementType = this.getElementType(id);
                dataToUpdate[`${elementType}s`].push({ id, style: { visibility: value } });
            });
            const { model, element } = this.context;
            model.preventUpdateNodeLikeHierarchy(() => {
                model.updateData(dataToUpdate);
            });
            yield ((_b = element.draw({ animation, stage: 'visibility' })) === null || _b === void 0 ? void 0 : _b.finished);
        });
    }
    /**
     * <zh/> 显示元素
     *
     * <en/> Show element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    showElement(id, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = Array.isArray(id) ? id : [id];
            yield this.setElementVisibility(Object.fromEntries(ids.map((_id) => [_id, 'visible'])), animation);
        });
    }
    /**
     * <zh/> 隐藏元素
     *
     * <en/> Hide element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    hideElement(id, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = Array.isArray(id) ? id : [id];
            yield this.setElementVisibility(Object.fromEntries(ids.map((_id) => [_id, 'hidden'])), animation);
        });
    }
    /**
     * <zh/> 获取元素可见性
     *
     * <en/> Get element visibility
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素可见性 | <en/> element visibility
     * @apiCategory element
     */
    getElementVisibility(id) {
        var _a, _b;
        const element = this.context.element.getElement(id);
        return (_b = (_a = element === null || element === void 0 ? void 0 : element.style) === null || _a === void 0 ? void 0 : _a.visibility) !== null && _b !== void 0 ? _b : 'visible';
    }
    setElementZIndex(args1, args2) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const dataToUpdate = { nodes: [], edges: [], combos: [] };
            const config = (0, util_1.isObject)(args1) ? args1 : { [args1]: args2 };
            Object.entries(config).forEach(([id, value]) => {
                const elementType = this.getElementType(id);
                dataToUpdate[`${elementType}s`].push({ id, style: { zIndex: value } });
            });
            const { model, element } = this.context;
            model.preventUpdateNodeLikeHierarchy(() => model.updateData(dataToUpdate));
            yield ((_a = element.draw({ animation: false, stage: 'zIndex' })) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    /**
     * <zh/> 将元素置于最顶层
     *
     * <en/> Bring the element to the front
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @apiCategory element
     */
    frontElement(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = Array.isArray(id) ? id : [id];
            const { model } = this.context;
            const zIndexes = {};
            ids.map((_id) => {
                const zIndex = model.getFrontZIndex(_id);
                const elementType = model.getElementType(_id);
                if (elementType === 'combo') {
                    const ancestor = model.getAncestorsData(_id, constants_1.COMBO_KEY).at(-1) || this.getComboData(_id);
                    const descendants = [ancestor, ...model.getDescendantsData((0, id_1.idOf)(ancestor))];
                    const delta = zIndex - (0, z_index_1.getZIndexOf)(ancestor);
                    descendants.forEach((combo) => {
                        zIndexes[(0, id_1.idOf)(combo)] = this.getElementZIndex((0, id_1.idOf)(combo)) + delta;
                    });
                    const { internal } = (0, edge_1.getSubgraphRelatedEdges)(descendants.map(id_1.idOf), (id) => model.getRelatedEdgesData(id));
                    internal.forEach((edge) => {
                        const edgeId = (0, id_1.idOf)(edge);
                        zIndexes[edgeId] = this.getElementZIndex(edgeId) + delta;
                    });
                }
                else
                    zIndexes[_id] = zIndex;
            });
            yield this.setElementZIndex(zIndexes);
        });
    }
    /**
     * <zh/> 获取元素层级
     *
     * <en/> Get element z-index
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素层级 | <en/> element z-index
     * @apiCategory element
     */
    getElementZIndex(id) {
        return (0, z_index_1.getZIndexOf)(this.context.model.getElementDataById(id));
    }
    setElementState(args1_1, args2_1) {
        return __awaiter(this, arguments, void 0, function* (args1, args2, args3 = true) {
            var _a, _b;
            const [config, animation] = (0, util_1.isObject)(args1)
                ? [args1, (_a = args2) !== null && _a !== void 0 ? _a : true]
                : [{ [args1]: args2 }, args3];
            const parseState = (state) => {
                if (!state)
                    return [];
                return Array.isArray(state) ? state : [state];
            };
            const dataToUpdate = { nodes: [], edges: [], combos: [] };
            Object.entries(config).forEach(([id, value]) => {
                const elementType = this.getElementType(id);
                dataToUpdate[`${elementType}s`].push({ id, states: parseState(value) });
            });
            this.updateData(dataToUpdate);
            yield ((_b = this.context.element.draw({ animation, stage: 'state' })) === null || _b === void 0 ? void 0 : _b.finished);
        });
    }
    /**
     * <zh/> 获取元素状态
     *
     * <en/> Get element state
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素状态 | <en/> element state
     * @apiCategory element
     */
    getElementState(id) {
        return this.context.model.getElementState(id);
    }
    /**
     * <zh/> 获取元素自身以及子节点在世界坐标系下的渲染包围盒
     *
     * <en/> Get the rendering bounding box of the element itself and its child nodes in the world coordinate system
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 渲染包围盒 | <en/> render bounding box
     * @apiCategory element
     */
    getElementRenderBounds(id) {
        return this.context.element.getElement(id).getRenderBounds();
    }
    /**
     * <zh/> 收起元素
     *
     * <en/> Collapse element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param options - <zh/> 是否启用动画或者配置收起节点的配置项 | <en/> whether to enable animation or the options of collapsing node
     * @apiCategory element
     */
    collapseElement(id_2) {
        return __awaiter(this, arguments, void 0, function* (id, options = true) {
            const { model, element } = this.context;
            if ((0, collapsibility_1.isCollapsed)(model.getNodeLikeData([id])[0]))
                return;
            if (this.isCollapsingExpanding)
                return;
            if (typeof options === 'boolean')
                options = { animation: options, align: false };
            const elementType = model.getElementType(id);
            yield this.frontElement(id);
            this.isCollapsingExpanding = true;
            // 更新折叠状态 / Update collapse style
            model.updateData(elementType === 'node'
                ? {
                    nodes: [{ id, style: { collapsed: true } }],
                }
                : {
                    combos: [{ id, style: { collapsed: true } }],
                });
            if (elementType === 'node')
                yield element.collapseNode(id, options);
            else if (elementType === 'combo')
                yield element.collapseCombo(id, !!options.animation);
            this.isCollapsingExpanding = false;
        });
    }
    /**
     * <zh/> 展开元素
     *
     * <en/> Expand Element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否启用动画或者配置收起节点的配置项 | <en/> whether to enable animation or the options of collapsing node
     * @param options
     * @apiCategory element
     */
    expandElement(id_2) {
        return __awaiter(this, arguments, void 0, function* (id, options = true) {
            const { model, element } = this.context;
            if (!(0, collapsibility_1.isCollapsed)(model.getNodeLikeData([id])[0]))
                return;
            if (this.isCollapsingExpanding)
                return;
            if (typeof options === 'boolean')
                options = { animation: options, align: false };
            const elementType = model.getElementType(id);
            this.isCollapsingExpanding = true;
            // 更新折叠状态 / Update collapse style
            model.updateData(elementType === 'node'
                ? {
                    nodes: [{ id, style: { collapsed: false } }],
                }
                : {
                    combos: [{ id, style: { collapsed: false } }],
                });
            if (elementType === 'node')
                yield element.expandNode(id, options);
            else if (elementType === 'combo')
                yield element.expandCombo(id, !!options.animation);
            this.isCollapsingExpanding = false;
        });
    }
    setElementCollapsibility(id, collapsed) {
        const elementType = this.getElementType(id);
        if (elementType === 'node')
            this.updateNodeData([{ id, style: { collapsed } }]);
        else if (elementType === 'combo')
            this.updateComboData([{ id, style: { collapsed } }]);
    }
    /**
     * <zh/> 导出画布内容为 DataURL
     *
     * <en/> Export canvas content as DataURL
     * @param options - <zh/> 导出配置 | <en/> export options
     * @returns <zh/> DataURL | <en/> DataURL
     * @apiCategory exportImage
     */
    toDataURL() {
        return __awaiter(this, arguments, void 0, function* (options = {}) {
            return this.context.canvas.toDataURL(options);
        });
    }
    /**
     * <zh/> 给定的视窗 DOM 坐标，转换为画布上的绘制坐标
     *
     * <en/> Convert the given viewport DOM coordinates to the drawing coordinates on the canvas
     * @param point - <zh/> 视窗坐标 | <en/> viewport coordinates
     * @returns <zh/> 画布上的绘制坐标 | <en/> drawing coordinates on the canvas
     * @apiCategory viewport
     */
    getCanvasByViewport(point) {
        return this.context.canvas.getCanvasByViewport(point);
    }
    /**
     * <zh/> 给定画布上的绘制坐标，转换为视窗 DOM 的坐标
     *
     * <en/> Convert the given drawing coordinates on the canvas to the coordinates of the viewport DOM
     * @param point - <zh/> 画布坐标 | <en/> canvas coordinates
     * @returns <zh/> 视窗 DOM 的坐标 | <en/> coordinates of the viewport DOM
     * @apiCategory viewport
     */
    getViewportByCanvas(point) {
        return this.context.canvas.getViewportByCanvas(point);
    }
    /**
     * <zh/> 给定画布上的绘制坐标，转换为浏览器坐标
     *
     * <en/> Convert the given drawing coordinates on the canvas to browser coordinates
     * @param point - <zh/> 画布坐标 | <en/> canvas coordinates
     * @returns <zh/> 浏览器坐标 | <en/> browser coordinates
     * @apiCategory viewport
     */
    getClientByCanvas(point) {
        return this.context.canvas.getClientByCanvas(point);
    }
    /**
     * <zh/> 给定的浏览器坐标，转换为画布上的绘制坐标
     *
     * <en/> Convert the given browser coordinates to drawing coordinates on the canvas
     * @param point - <zh/> 浏览器坐标 | <en/> browser coordinates
     * @returns <zh/> 画布上的绘制坐标 | <en/> drawing coordinates on the canvas
     * @apiCategory viewport
     */
    getCanvasByClient(point) {
        return this.context.canvas.getCanvasByClient(point);
    }
    /**
     * <zh/> 获取视口中心的画布坐标
     *
     * <en/> Get the canvas coordinates of the viewport center
     * @returns <zh/> 视口中心的画布坐标 | <en/> Canvas coordinates of the viewport center
     * @apiCategory viewport
     */
    getViewportCenter() {
        return this.context.viewport.getViewportCenter();
    }
    /**
     * <zh/> 获取视口中心的视口坐标
     *
     * <en/> Get the viewport coordinates of the viewport center
     * @returns <zh/> 视口中心的视口坐标 | <en/> Viewport coordinates of the viewport center
     * @apiCategory viewport
     */
    getCanvasCenter() {
        return this.context.viewport.getCanvasCenter();
    }
    /**
     * <zh/> 监听事件
     *
     * <en/> Listen to events
     * @param eventName - <zh/> 事件名称 | <en/> event name
     * @param callback - <zh/> 回调函数 | <en/> callback function
     * @param once - <zh/> 是否只监听一次 | <en/> whether to listen only once
     * @returns <zh/> Graph 实例 | <en/> Graph instance
     * @apiCategory event
     */
    on(eventName, callback, once) {
        return super.on(eventName, callback, once);
    }
    /**
     * <zh/> 一次性监听事件
     *
     * <en/> Listen to events once
     * @param eventName - <zh/> 事件名称 | <en/> event name
     * @param callback - <zh/> 回调函数 | <en/> callback function
     * @returns <zh/> Graph 实例 | <en/> Graph instance
     * @apiCategory event
     */
    once(eventName, callback) {
        return super.once(eventName, callback);
    }
    off(eventName, callback) {
        return super.off(eventName, callback);
    }
}
exports.Graph = Graph;
/**
 * @internal
 */
Graph.defaultOptions = {
    autoResize: false,
    theme: 'light',
    rotation: 0,
    zoom: 1,
    zoomRange: [0.01, 10],
};
//# sourceMappingURL=graph.js.map