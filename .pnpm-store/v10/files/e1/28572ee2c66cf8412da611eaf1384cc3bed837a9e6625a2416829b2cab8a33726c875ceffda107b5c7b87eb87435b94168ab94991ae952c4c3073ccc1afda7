import EventEmitter from '@antv/event-emitter';
import type { AABB, BaseStyleProps } from '@antv/g';
import type { Plugin } from '../plugins/types';
import type { BehaviorOptions, ComboData, ComboOptions, EdgeData, EdgeOptions, GraphData, GraphOptions, LayoutOptions, NodeData, NodeOptions, PluginOptions, ThemeOptions, TransformOptions } from '../spec';
import type { UpdateBehaviorOption } from '../spec/behavior';
import type { UpdatePluginOption } from '../spec/plugin';
import type { UpdateTransformOption } from '../spec/transform';
import type { DataID, EdgeDirection, ElementDatum, ElementType, FitViewOptions, HierarchyKey, ID, IEvent, NodeLikeData, PartialEdgeData, PartialGraphData, PartialNodeLikeData, Point, State, ViewportAnimationEffectTiming } from '../types';
import type { DataURLOptions } from './canvas';
import { Canvas } from './canvas';
import type { CollapseExpandNodeOptions } from './element';
export declare class Graph extends EventEmitter {
    private options;
    /**
     * @internal
     */
    static defaultOptions: GraphOptions;
    /**
     * <zh/> 当前图实例是否已经渲染
     *
     * <en/> Whether the current graph instance has been rendered
     */
    rendered: boolean;
    /**
     * <zh/> 当前图实例是否已经被销毁
     *
     * <en/> Whether the current graph instance has been destroyed
     */
    destroyed: boolean;
    private context;
    constructor(options: GraphOptions);
    /**
     * <zh/> 获取配置项
     *
     * <en/> Get options
     * @returns <zh/> 配置项 | <en/> options
     * @apiCategory option
     */
    getOptions(): GraphOptions;
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
    setOptions(options: GraphOptions): void;
    private _setOptions;
    /**
     * <zh/> 获取当前画布容器的尺寸
     *
     * <en/> Get the size of the current canvas container
     * @returns <zh/> 画布尺寸 | <en/> canvas size
     * @apiCategory canvas
     */
    getSize(): [number, number];
    /**
     * <zh/> 设置当前画布容器的尺寸
     *
     * <en/> Set the size of the current canvas container
     * @param width - <zh/> 画布宽度 | <en/> canvas width
     * @param height - <zh/> 画布高度 | <en/> canvas height
     * @apiCategory canvas
     */
    setSize(width: number, height: number): void;
    /**
     * <zh/> 设置当前图的缩放区间
     *
     * <en/> Get the zoom range of the current graph
     * @param zoomRange - <zh/> 缩放区间 | <en/> zoom range
     * @apiCategory viewport
     */
    setZoomRange(zoomRange: GraphOptions['zoomRange']): void;
    /**
     * <zh/> 获取当前图的缩放区间
     *
     * <en/> Get the zoom range of the current graph
     * @returns <zh/> 缩放区间 | <en/> zoom range
     * @apiCategory viewport
     */
    getZoomRange(): GraphOptions['zoomRange'];
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
    setNode(node: NodeOptions): void;
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
    setEdge(edge: EdgeOptions): void;
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
    setCombo(combo: ComboOptions): void;
    /**
     * <zh/> 获取主题
     *
     * <en/> Get theme
     * @returns <zh/> 当前主题 | <en/> current theme
     * @apiCategory theme
     */
    getTheme(): ThemeOptions;
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
    setTheme(theme: ThemeOptions | ((prev: ThemeOptions) => ThemeOptions)): void;
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
    setLayout(layout: LayoutOptions | ((prev: LayoutOptions) => LayoutOptions)): void;
    /**
     * <zh/> 获取布局配置
     *
     * <en/> Get layout options
     * @returns <zh/> 布局配置 | <en/> layout options
     * @apiCategory layout
     */
    getLayout(): LayoutOptions;
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
    setBehaviors(behaviors: BehaviorOptions | ((prev: BehaviorOptions) => BehaviorOptions)): void;
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
    updateBehavior(behavior: UpdateBehaviorOption): void;
    /**
     * <zh/> 获取交互配置
     *
     * <en/> Get behaviors options
     * @returns <zh/> 交互配置 | <en/> behavior options
     * @apiCategory behavior
     */
    getBehaviors(): BehaviorOptions;
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
    setPlugins(plugins: PluginOptions | ((prev: PluginOptions) => PluginOptions)): void;
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
    updatePlugin(plugin: UpdatePluginOption): void;
    /**
     * <zh/> 获取插件配置
     *
     * <en/> Get plugins options
     * @returns <zh/> 插件配置 | <en/> plugin options
     * @apiCategory plugin
     */
    getPlugins(): PluginOptions;
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
    getPluginInstance<T extends Plugin>(key: string): T;
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
    setTransforms(transforms: TransformOptions | ((prev: TransformOptions) => TransformOptions)): void;
    /**
     * <zh/> 更新数据转换器
     *
     * <en/> Update data transform
     * @param transform - <zh/> 数据转换器配置 | <en/> data transform options
     * @apiCategory transform
     */
    updateTransform(transform: UpdateTransformOption): void;
    /**
     * <zh/> 获取数据转换器配置
     *
     * <en/> Get data transforms options
     * @returns <zh/> 数据转换配置 | <en/> data transform options
     * @apiCategory transform
     */
    getTransforms(): TransformOptions;
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
    getData(): Required<GraphData>;
    /**
     * <zh/> 判断图中是否存在指定节点
     * <en/> Determine whether a specified node exists in the graph
     * @param {ID} id
     * @returns {boolean}
     * @remarks <zh/> 判断图中是否存在指定节点,避免在不存在的节点上进行操作
     * <en/> Determine whether a specified node exists in the graph and avoid operating on non-existent nodes
     */
    hasNode(id: ID): boolean;
    /**
     * <zh/> 判断图中是否存在指定边
     * <en/> Determine whether a specified edge exists in the graph
     * @param {ID} id
     * @returns  {boolean}
     * @remarks <zh/> 判断图中是否存在指定边,避免在不存在的边上进行操作
     * <en/> Determine whether a specified edge exists in the graph and avoid operating on non-existent edges
     */
    hasEdge(id: ID): boolean;
    /**
     * <zh/> 判断图中是否存在指定组合
     * <en/> Determine whether a specified combo exists in the graph
     * @param {ID} id
     * @returns  {boolean}
     * @remarks <zh/> 判断图中是否存在指定组合,避免在不存在的组合上进行操作
     * <en/> Determine whether a specified combo exists in the graph and avoid operating on non-existent combos
     */
    hasCombo(id: ID): boolean;
    /**
     * <zh/> 获取单个元素数据
     *
     * <en/> Get element data by ID
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素数据 | <en/> element data
     * @remarks
     * <zh/> 直接获取元素的数据而不必考虑元素类型
     *
     * <en/> Get element data directly without considering the element type
     * @apiCategory data
     */
    getElementData(id: ID): ElementDatum;
    /**
     * <zh/> 批量获取多个元素数据
     *
     * <en/> Get multiple element data in batch
     * @param ids - <zh/> 元素 ID 数组 | <en/> element ID array
     * @remarks
     * <zh/> 直接获取元素的数据而不必考虑元素类型
     *
     * <en/> Get element data directly without considering the element type
     * @apiCategory data
     */
    getElementData(ids: ID[]): ElementDatum[];
    /**
     * <zh/> 获取所有节点数据
     *
     * <en/> Get all node data
     * @returns <zh/> 节点数据 | <en/> node data
     * @apiCategory data
     */
    getNodeData(): NodeData[];
    /**
     * <zh/> 获取单个节点数据
     *
     * <en/> Get single node data
     * @param id - <zh/> 节点 ID | <en/> node ID
     * @returns <zh/> 节点数据 | <en/> node data
     * @example
     * ```ts
     * const node1 = graph.getNodeData('node-1');
     * ```
     * @apiCategory data
     * @remarks
     * <zh/> 节点 id 必须存在，否则会抛出异常
     *
     * <en/> Node id must exist, otherwise an exception will be thrown
     */
    getNodeData(id: ID): NodeData;
    /**
     * <zh/> 批量获取多个节点数据
     *
     * <en/> Get multiple node data in batch
     * @param ids - <zh/> 节点 ID 数组 | <en/> node ID array
     * @returns <zh/> 节点数据 | <en/> node data
     * @example
     * ```ts
     * const [node1, node2] = graph.getNodeData(['node-1', 'node-2']);
     * ```
     * @apiCategory data
     * @remarks
     * <zh/> 数组中的每个节点 id 必须存在，否则将抛出异常
     *
     * <en/> Each node id in the array must exist, otherwise an exception will be thrown
     */
    getNodeData(ids: ID[]): NodeData[];
    /**
     * <zh/> 获取所有边数据
     *
     * <en/> Get all edge data
     * @returns <zh/> 边数据 | <en/> edge data
     * @apiCategory data
     */
    getEdgeData(): EdgeData[];
    /**
     * <zh/> 获取单条边数据
     *
     * <en/> Get single edge data
     * @param id - <zh/> 边 ID | <en/> edge ID
     * @returns <zh/> 边数据 | <en/> edge data
     * @example
     * ```ts
     * const edge1 = graph.getEdgeData('edge-1');
     * ```
     * @apiCategory data
     * @remarks
     * <zh/> 边 id 必须存在，否则会抛出异常
     *
     * <en/> Edge id must exist, otherwise an exception will be thrown
     */
    getEdgeData(id: ID): EdgeData;
    /**
     * <zh/> 批量获取多条边数据
     *
     * <en/> Get multiple edge data in batch
     * @param ids - <zh/> 边 ID 数组 | <en/> edge ID array
     * @returns <zh/> 边数据 | <en/> edge data
     * @example
     * ```ts
     * const [edge1, edge2] = graph.getEdgeData(['edge-1', 'edge-2']);
     * ```
     * @apiCategory data
     * @remarks
     * <zh/> 数组中的每个边 id 必须存在，否则将抛出异常
     *
     * <en/> Each edge id in the array must exist, otherwise an exception will be thrown
     */
    getEdgeData(ids: ID[]): EdgeData[];
    /**
     * <zh/> 获取所有组合数据
     *
     * <en/> Get all combo data
     * @returns <zh/> 组合数据 | <en/> combo data
     * @apiCategory data
     */
    getComboData(): ComboData[];
    /**
     * <zh/> 获取单个组合数据
     *
     * <en/> Get single combo data
     * @param id - <zh/> 组合ID | <en/> combo ID
     * @returns <zh/> 组合数据 | <en/> combo data
     * @example
     * ```ts
     * const combo1 = graph.getComboData('combo-1');
     * ```
     * @apiCategory data
     * @remarks
     * <zh/> 组合 id 必须存在，否则会抛出异常
     *
     * <en/> Combo id must exist, otherwise an exception will be thrown
     */
    getComboData(id: ID): ComboData;
    /**
     * <zh/> 批量获取多个组合数据
     *
     * <en/> Get multiple combo data in batch
     * @param ids - <zh/> 组合ID 数组 | <en/> combo ID array
     * @returns <zh/> 组合数据 | <en/> combo data
     * @example
     * ```ts
     * const [combo1, combo2] = graph.getComboData(['combo-1', 'combo-2']);
     * ```
     * @apiCategory data
     * @remarks
     * <zh/> 数组中的每个组合 id 必须存在，否则将抛出异常
     *
     * <en/> Each combo id in the array must exist, otherwise an exception will be thrown
     */
    getComboData(ids: ID[]): ComboData[];
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
    setData(data: GraphData | ((prev: GraphData) => GraphData)): void;
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
    addData(data: GraphData | ((prev: GraphData) => GraphData)): void;
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
    addNodeData(data: NodeData[] | ((prev: NodeData[]) => NodeData[])): void;
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
    addEdgeData(data: EdgeData[] | ((prev: EdgeData[]) => EdgeData[])): void;
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
    addComboData(data: ComboData[] | ((prev: ComboData[]) => ComboData[])): void;
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
    addChildrenData(parentId: ID, childrenData: NodeData[]): void;
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
    updateData(data: PartialGraphData | ((prev: GraphData) => PartialGraphData)): void;
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
    updateNodeData(data: PartialNodeLikeData<NodeData>[] | ((prev: NodeData[]) => PartialNodeLikeData<NodeData>[])): void;
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
    updateEdgeData(data: PartialEdgeData<EdgeData>[] | ((prev: EdgeData[]) => PartialEdgeData<EdgeData>[])): void;
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
    updateComboData(data: PartialNodeLikeData<ComboData>[] | ((prev: ComboData[]) => PartialNodeLikeData<ComboData>[])): void;
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
    removeData(ids: DataID | ((data: GraphData) => DataID)): void;
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
    removeNodeData(ids: ID[] | ((data: NodeData[]) => ID[])): void;
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
    removeEdgeData(ids: ID[] | ((data: EdgeData[]) => ID[])): void;
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
    removeComboData(ids: ID[] | ((data: ComboData[]) => ID[])): void;
    /**
     * <zh/> 获取元素类型
     *
     * <en/> Get element type
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素类型 | <en/> element type
     * @apiCategory element
     */
    getElementType(id: ID): ElementType;
    /**
     * <zh/> 获取节点或组合关联边的数据
     *
     * <en/> Get edge data related to the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @param direction - <zh/> 边的方向 | <en/> edge direction
     * @returns <zh/> 边数据 | <en/> edge data
     * @apiCategory data
     */
    getRelatedEdgesData(id: ID, direction?: EdgeDirection): EdgeData[];
    /**
     * <zh/> 获取节点或组合的一跳邻居节点数据
     *
     * <en/> Get the one-hop neighbor node data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @returns <zh/> 邻居节点数据 | <en/> neighbor node data
     * @apiCategory data
     */
    getNeighborNodesData(id: ID): NodeData[];
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
    getAncestorsData(id: ID, hierarchy: HierarchyKey): NodeLikeData[];
    /**
     * <zh/> 获取节点或组合的父元素数据
     *
     * <en/> Get the parent element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @param hierarchy - <zh/> 指定树图层级关系还是组合层级关系 | <en/> specify tree or combo hierarchy relationship
     * @returns <zh/> 父元素数据 | <en/> parent element data
     * @apiCategory data
     */
    getParentData(id: ID, hierarchy: HierarchyKey): NodeLikeData | undefined;
    /**
     * <zh/> 获取节点或组合的子元素数据
     *
     * <en/> Get the child element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @returns <zh/> 子元素数据 | <en/> child element data
     * @apiCategory data
     */
    getChildrenData(id: ID): NodeLikeData[];
    /**
     * <zh/> 获取节点或组合的后代元素数据
     *
     * <en/> Get the descendant element data of the node or combo
     * @param id - <zh/> 节点或组合ID | <en/> node or combo ID
     * @returns <zh/> 后代元素数据 | <en/> descendant element data
     * @apiCategory data
     */
    getDescendantsData(id: ID): NodeLikeData[];
    /**
     * <zh/> 获取指定状态下的节点数据
     *
     * <en/> Get node data in a specific state
     * @param state - <zh/> 状态 | <en/> state
     * @returns <zh/> 节点数据 | <en/> node data
     * @example
     * ```ts
     * const nodes = graph.getElementDataByState('node', 'selected');
     * ```
     * @apiCategory data
     */
    getElementDataByState(elementType: 'node', state: State): NodeData[];
    /**
     * <zh/> 获取指定状态下的边数据
     *
     * <en/> Get edge data in a specific state
     * @param state - <zh/> 状态 | <en/> state
     * @returns <zh/> 边数据 | <en/> edge data
     * @example
     * ```ts
     * const nodes = graph.getElementDataByState('edge', 'selected');
     * ```
     * @apiCategory data
     */
    getElementDataByState(elementType: 'edge', state: State): EdgeData[];
    /**
     * <zh/> 获取指定状态下的组合数据
     *
     * <en/> Get combo data in a specific state
     * @param state - <zh/> 状态 | <en/> state
     * @returns <zh/> 组合数据 | <en/> combo data
     * @example
     * ```ts
     * const nodes = graph.getElementDataByState('node', 'selected');
     * ```
     * @apiCategory data
     */
    getElementDataByState(elementType: 'combo', state: State): ComboData[];
    private initCanvas;
    private updateCanvas;
    private initRuntime;
    private prepare;
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
    render(): Promise<void>;
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
    draw(): Promise<void>;
    /**
     * <zh/> 执行布局
     *
     * <en/> Execute layout
     * @param layoutOptions - <zh/> 布局配置项 | <en/> Layout options
     * @apiCategory layout
     */
    layout(layoutOptions?: LayoutOptions): Promise<void>;
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
    stopLayout(): void;
    /**
     * <zh/> 清空画布元素
     *
     * <en/> Clear canvas elements
     * @apiCategory canvas
     */
    clear(): Promise<void>;
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
    destroy(): void;
    /**
     * <zh/> 获取画布实例
     *
     * <en/> Get canvas instance
     * @returns - <zh/> 画布实例 | <en/> canvas instance
     * @apiCategory canvas
     */
    getCanvas(): Canvas;
    /**
     * <zh/> 调整画布大小为图容器大小
     *
     * <en/> Resize the canvas to the size of the graph container
     * @apiCategory viewport
     */
    resize(): void;
    /**
     * <zh/> 调整画布大小为指定宽高
     *
     * <en/> Resize the canvas to the specified width and height
     * @param width - <zh/> 宽度 | <en/> width
     * @param height - <zh/> 高度 | <en/> height
     * @apiCategory viewport
     */
    resize(width: number, height: number): void;
    /**
     * <zh/> 将图缩放至合适大小并平移至视口中心
     *
     * <en/> Zoom the graph to fit the viewport and move it to the center of the viewport
     * @param options - <zh/> 适配配置 | <en/> fit options
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    fitView(options?: FitViewOptions, animation?: ViewportAnimationEffectTiming): Promise<void>;
    /**
     * <zh/> 将图平移至视口中心
     *
     * <en/> Move the graph to the center of the viewport
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    fitCenter(animation?: ViewportAnimationEffectTiming): Promise<void>;
    private autoFit;
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
    focusElement(id: ID | ID[], animation?: ViewportAnimationEffectTiming): Promise<void>;
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
    zoomBy(ratio: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;
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
    zoomTo(zoom: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;
    /**
     * <zh/> 获取当前缩放比例
     *
     * <en/> Get the current zoom ratio
     * @returns <zh/> 缩放比例 | <en/> zoom ratio
     * @apiCategory viewport
     */
    getZoom(): number;
    /**
     * <zh/> 基于当前旋转角度进行旋转（相对旋转）
     *
     * <en/> Rotate based on the current rotation angle (relative rotation)
     * @param angle - <zh/> 旋转角度 | <en/> rotation angle
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @param origin - <zh/> 旋转中心(视口坐标) | <en/> rotation center(viewport coordinates)
     * @apiCategory viewport
     */
    rotateBy(angle: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;
    /**
     * <zh/> 旋转画布至指定角度 (绝对旋转)
     *
     * <en/> Rotate the canvas to the specified angle (absolute rotation)
     * @param angle - <zh/> 目标角度 | <en/> target angle
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @param origin - <zh/> 旋转中心(视口坐标) | <en/> rotation center(viewport coordinates)
     * @apiCategory viewport
     */
    rotateTo(angle: number, animation?: ViewportAnimationEffectTiming, origin?: Point): Promise<void>;
    /**
     * <zh/> 获取当前旋转角度
     *
     * <en/> Get the current rotation angle
     * @returns <zh/> 旋转角度 | <en/> rotation angle
     * @apiCategory viewport
     */
    getRotation(): number;
    /**
     * <zh/> 将图平移指定距离 (相对平移)
     *
     * <en/> Translate the graph by the specified distance (relative translation)
     * @param offset - <zh/> 偏移量 | <en/> offset
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    translateBy(offset: Point, animation?: ViewportAnimationEffectTiming): Promise<void>;
    /**
     * <zh/> 将图平移至指定位置 (绝对平移)
     *
     * <en/> Translate the graph to the specified position (absolute translation)
     * @param position - <zh/> 指定位置 | <en/> specified position
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory viewport
     */
    translateTo(position: Point, animation?: ViewportAnimationEffectTiming): Promise<void>;
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
    getPosition(): Point;
    /**
     * <zh/> 将元素平移指定距离 (相对平移)
     *
     * <en/> Translate the element by the specified distance (relative translation)
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param offset - <zh/> 偏移量 | <en/> offset
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    translateElementBy(id: ID, offset: Point, animation?: boolean): Promise<void>;
    /**
     * <zh/> 批量将元素平移指定距离 (相对平移)
     *
     * <en/> Batch translate elements by the specified distance (relative translation)
     * @param offsets - <zh/> 偏移量配置 | <en/> offset options
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    translateElementBy(offsets: Record<ID, Point>, animation?: boolean): Promise<void>;
    /**
     * <zh/> 将元素平移至指定位置 (绝对平移)
     *
     * <en/> Translate the element to the specified position (absolute translation)
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param position - <zh/> 指定位置 | <en/> specified position
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    translateElementTo(id: ID, position: Point, animation?: boolean): Promise<void>;
    /**
     * <zh/> 批量将元素平移至指定位置 (绝对平移)
     *
     * <en/> Batch translate elements to the specified position (absolute translation)
     * @param positions - <zh/> 位置配置 | <en/> position options
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    translateElementTo(positions: Record<ID, Point>, animation?: boolean): Promise<void>;
    /**
     * <zh/> 获取元素位置
     *
     * <en/> Get element position
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素位置 | <en/> element position
     * @apiCategory element
     */
    getElementPosition(id: ID): Point;
    /**
     * <zh/> 获取元素渲染样式
     *
     * <en/> Get element rendering style
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素渲染样式 | <en/> element rendering style
     * @apiCategory element
     */
    getElementRenderStyle(id: ID): Record<string, any>;
    /**
     * <zh/> 设置元素可见性
     *
     * <en/> Set element visibility
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param visibility - <zh/> 可见性 | <en/> visibility
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @remarks
     * <zh/> 可见性配置包括 `visible` 和 `hidden` 两种状态
     *
     * <en/> Visibility configuration includes two states: `visible` and `hidden`
     * @apiCategory element
     */
    setElementVisibility(id: ID, visibility: BaseStyleProps['visibility'], animation?: boolean): Promise<void>;
    /**
     * <zh/> 批量设置元素可见性
     *
     * <en/> Batch set element visibility
     * @param visibility - <zh/> 可见性配置 | <en/> visibility options
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory element
     */
    setElementVisibility(visibility: Record<ID, BaseStyleProps['visibility']>, animation?: boolean): Promise<void>;
    /**
     * <zh/> 显示元素
     *
     * <en/> Show element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    showElement(id: ID | ID[], animation?: boolean): Promise<void>;
    /**
     * <zh/> 隐藏元素
     *
     * <en/> Hide element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否启用动画 | <en/> whether to enable animation
     * @apiCategory element
     */
    hideElement(id: ID | ID[], animation?: boolean): Promise<void>;
    /**
     * <zh/> 获取元素可见性
     *
     * <en/> Get element visibility
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素可见性 | <en/> element visibility
     * @apiCategory element
     */
    getElementVisibility(id: ID): BaseStyleProps['visibility'];
    /**
     * <zh/> 设置元素层级
     *
     * <en/> Set element z-index
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param zIndex - <zh/> 层级 | <en/> z-index
     * @apiCategory element
     */
    setElementZIndex(id: ID, zIndex: number): Promise<void>;
    /**
     * <zh/> 批量设置元素层级
     *
     * <en/> Batch set element z-index
     * @param zIndex - <zh/> 层级配置 | <en/> z-index options
     * @apiCategory element
     */
    setElementZIndex(zIndex: Record<ID, number>): Promise<void>;
    /**
     * <zh/> 将元素置于最顶层
     *
     * <en/> Bring the element to the front
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @apiCategory element
     */
    frontElement(id: ID | ID[]): Promise<void>;
    /**
     * <zh/> 获取元素层级
     *
     * <en/> Get element z-index
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素层级 | <en/> element z-index
     * @apiCategory element
     */
    getElementZIndex(id: ID): number;
    /**
     * <zh/> 设置元素状态
     *
     * <en/> Set element state
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param state - <zh/> 状态 | <en/> state
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory element
     */
    setElementState(id: ID, state: State | State[], animation?: boolean): Promise<void>;
    /**
     * <zh/> 批量设置元素状态
     *
     * <en/> Batch set element state
     * @param state - <zh/> 状态配置 | <en/> state options
     * @param animation - <zh/> 动画配置 | <en/> animation options
     * @apiCategory element
     */
    setElementState(state: Record<ID, State | State[]>, animation?: boolean): Promise<void>;
    /**
     * <zh/> 获取元素状态
     *
     * <en/> Get element state
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 元素状态 | <en/> element state
     * @apiCategory element
     */
    getElementState(id: ID): State[];
    /**
     * <zh/> 获取元素自身以及子节点在世界坐标系下的渲染包围盒
     *
     * <en/> Get the rendering bounding box of the element itself and its child nodes in the world coordinate system
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @returns <zh/> 渲染包围盒 | <en/> render bounding box
     * @apiCategory element
     */
    getElementRenderBounds(id: ID): AABB;
    private isCollapsingExpanding;
    /**
     * <zh/> 收起元素
     *
     * <en/> Collapse element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param options - <zh/> 是否启用动画或者配置收起节点的配置项 | <en/> whether to enable animation or the options of collapsing node
     * @apiCategory element
     */
    collapseElement(id: ID, options?: boolean | CollapseExpandNodeOptions): Promise<void>;
    /**
     * <zh/> 展开元素
     *
     * <en/> Expand Element
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否启用动画或者配置收起节点的配置项 | <en/> whether to enable animation or the options of collapsing node
     * @param options
     * @apiCategory element
     */
    expandElement(id: ID, options?: boolean | CollapseExpandNodeOptions): Promise<void>;
    private setElementCollapsibility;
    /**
     * <zh/> 导出画布内容为 DataURL
     *
     * <en/> Export canvas content as DataURL
     * @param options - <zh/> 导出配置 | <en/> export options
     * @returns <zh/> DataURL | <en/> DataURL
     * @apiCategory exportImage
     */
    toDataURL(options?: Partial<DataURLOptions>): Promise<string>;
    /**
     * <zh/> 给定的视窗 DOM 坐标，转换为画布上的绘制坐标
     *
     * <en/> Convert the given viewport DOM coordinates to the drawing coordinates on the canvas
     * @param point - <zh/> 视窗坐标 | <en/> viewport coordinates
     * @returns <zh/> 画布上的绘制坐标 | <en/> drawing coordinates on the canvas
     * @apiCategory viewport
     */
    getCanvasByViewport(point: Point): Point;
    /**
     * <zh/> 给定画布上的绘制坐标，转换为视窗 DOM 的坐标
     *
     * <en/> Convert the given drawing coordinates on the canvas to the coordinates of the viewport DOM
     * @param point - <zh/> 画布坐标 | <en/> canvas coordinates
     * @returns <zh/> 视窗 DOM 的坐标 | <en/> coordinates of the viewport DOM
     * @apiCategory viewport
     */
    getViewportByCanvas(point: Point): Point;
    /**
     * <zh/> 给定画布上的绘制坐标，转换为浏览器坐标
     *
     * <en/> Convert the given drawing coordinates on the canvas to browser coordinates
     * @param point - <zh/> 画布坐标 | <en/> canvas coordinates
     * @returns <zh/> 浏览器坐标 | <en/> browser coordinates
     * @apiCategory viewport
     */
    getClientByCanvas(point: Point): Point;
    /**
     * <zh/> 给定的浏览器坐标，转换为画布上的绘制坐标
     *
     * <en/> Convert the given browser coordinates to drawing coordinates on the canvas
     * @param point - <zh/> 浏览器坐标 | <en/> browser coordinates
     * @returns <zh/> 画布上的绘制坐标 | <en/> drawing coordinates on the canvas
     * @apiCategory viewport
     */
    getCanvasByClient(point: Point): Point;
    /**
     * <zh/> 获取视口中心的画布坐标
     *
     * <en/> Get the canvas coordinates of the viewport center
     * @returns <zh/> 视口中心的画布坐标 | <en/> Canvas coordinates of the viewport center
     * @apiCategory viewport
     */
    getViewportCenter(): Point;
    /**
     * <zh/> 获取视口中心的视口坐标
     *
     * <en/> Get the viewport coordinates of the viewport center
     * @returns <zh/> 视口中心的视口坐标 | <en/> Viewport coordinates of the viewport center
     * @apiCategory viewport
     */
    getCanvasCenter(): Point;
    private onResize;
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
    on<T extends IEvent = IEvent>(eventName: string, callback: (event: T) => void, once?: boolean): this;
    /**
     * <zh/> 一次性监听事件
     *
     * <en/> Listen to events once
     * @param eventName - <zh/> 事件名称 | <en/> event name
     * @param callback - <zh/> 回调函数 | <en/> callback function
     * @returns <zh/> Graph 实例 | <en/> Graph instance
     * @apiCategory event
     */
    once<T extends IEvent = IEvent>(eventName: string, callback: (event: T) => void): this;
    /**
     * <zh/> 移除全部事件监听
     *
     * <en/> Remove all event listeners
     * @returns <zh/> Graph 实例 | <en/> Graph instance
     * @apiCategory event
     */
    off(): this;
    /**
     * <zh/> 移除指定事件的全部监听
     *
     * <en/> Remove all listeners for the specified event
     * @param eventName - <zh/> 事件名称 | <en/> event name
     * @returns <zh/> Graph 实例 | <en/> Graph instance
     * @apiCategory event
     */
    off(eventName: string): this;
    /**
     * <zh/> 移除事件监听
     *
     * <en/> Remove event listener
     * @param eventName - <zh/> 事件名称 | <en/> event name
     * @param callback - <zh/> 回调函数 | <en/> callback function
     * @returns <zh/> Graph 实例 | <en/> Graph instance
     * @apiCategory event
     */
    off(eventName: string, callback: (...args: any[]) => void): this;
}
