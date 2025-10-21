import { Graph as GraphLib } from '@antv/graphlib';
import type { ComboData, EdgeData, GraphData, NodeData } from '../spec';
import type { DataChange, DataID, ElementDatum, HierarchyKey, ID, NodeLikeData, PartialEdgeData, PartialGraphData, PartialNodeLikeData, Point, State } from '../types';
import type { EdgeDirection } from '../types/edge';
import type { ElementType } from '../types/element';
export declare class DataController {
    model: GraphLib<NodeLikeData, EdgeData>;
    /**
     * <zh/> 最近一次删除的 combo 的 id
     *
     * <en/> The ids of the last deleted combos
     * @remarks
     * <zh/> 当删除 combo 后，会将其 id 从 comboIds 中移除，此时根据 Graphlib 的 changes 事件获取到的 NodeRemoved 无法区分是 combo 还是 node。
     * 因此需要记录最近一次删除的 combo 的 id，并用于 isCombo 的判断
     *
     * <en/> When the combo is deleted, its id will be removed from comboIds. At this time, the NodeRemoved obtained according to the changes event of Graphlib cannot distinguish whether it is a combo or a node.
     * Therefore, it is necessary to record the id of the last deleted combo and use it to judge isCombo
     */
    protected latestRemovedComboIds: Set<string>;
    protected comboIds: Set<string>;
    /**
     * <zh/> 获取详细数据变更
     *
     * <en/> Get detailed data changes
     */
    private changes;
    /**
     * <zh/> 批处理计数器
     *
     * <en/> Batch processing counter
     */
    private batchCount;
    /**
     * <zh/> 是否处于无痕模式
     *
     * <en/> Whether it is in traceless mode
     */
    private isTraceless;
    constructor();
    private pushChange;
    getChanges(): DataChange[];
    clearChanges(): void;
    batch(callback: () => void): void;
    protected isBatching(): boolean;
    /**
     * <zh/> 执行操作而不会留下记录
     *
     * <en/> Perform operations without leaving records
     * @param callback - <zh/> 回调函数 | <en/> callback function
     * @remarks
     * <zh/> 通常用于运行时调整元素并同步数据，避免触发数据变更导致重绘
     *
     * <en/> Usually used to adjust elements at runtime and synchronize data to avoid triggering data changes and causing redraws
     */
    silence(callback: () => void): void;
    isCombo(id: ID): boolean;
    getData(): {
        nodes: NodeData[];
        edges: EdgeData[];
        combos: ComboData[];
    };
    getNodeData(ids?: ID[]): NodeData[];
    getEdgeDatum(id: ID): EdgeData;
    getEdgeData(ids?: ID[]): EdgeData[];
    getComboData(ids?: ID[]): ComboData[];
    getRootsData(hierarchyKey?: HierarchyKey): NodeLikeData[];
    getAncestorsData(id: ID, hierarchyKey: HierarchyKey): NodeLikeData[];
    getDescendantsData(id: ID): NodeLikeData[];
    getParentData(id: ID, hierarchyKey: HierarchyKey): NodeLikeData | undefined;
    getChildrenData(id: ID): NodeLikeData[];
    /**
     * <zh/> 获取指定类型元素的数据
     *
     * <en/> Get the data of the specified type of element
     * @param elementType - <zh/> 元素类型 | <en/> element type
     * @returns <zh/> 元素数据 | <en/> element data
     */
    getElementsDataByType(elementType: ElementType): NodeData[] | EdgeData[] | ComboData[];
    /**
     * <zh/> 根据 ID 获取元素的数据，不用关心元素的类型
     *
     * <en/> Get the data of the element by ID, no need to care about the type of the element
     * @param id - <zh/> 元素 ID 数组 | <en/> element ID array
     * @returns <zh/> 元素数据 | <en/> data of the element
     */
    getElementDataById(id: ID): ElementDatum;
    /**
     * <zh/> 获取节点的数据
     *
     * <en/> Get node data
     * @param id - <zh/> 节点 ID | <en/> node ID
     * @returns <zh/> 节点数据 | <en/> node data
     */
    getNodeLikeDatum(id: ID): NodeLikeData;
    /**
     * <zh/> 获取所有节点和 combo 的数据
     *
     * <en/> Get all node and combo data
     * @param ids - <zh/> 节点和 combo ID 数组 | <en/> node and combo ID array
     * @returns <zh/> 节点和 combo 的数据 | <en/> node and combo data
     */
    getNodeLikeData(ids?: ID[]): NodeLikeData[];
    getElementDataByState(elementType: ElementType, state: string): (NodeData | EdgeData | ComboData)[];
    getElementState(id: ID): State[];
    hasNode(id: ID): boolean;
    hasEdge(id: ID): boolean;
    hasCombo(id: ID): boolean;
    getRelatedEdgesData(id: ID, direction?: EdgeDirection): EdgeData[];
    getNeighborNodesData(id: ID): NodeLikeData[];
    setData(data: GraphData): void;
    addData(data: GraphData): void;
    addNodeData(nodes?: NodeData[]): void;
    addEdgeData(edges?: EdgeData[]): void;
    addComboData(combos?: ComboData[]): void;
    addChildrenData(parentId: ID, childrenData: NodeData[]): void;
    /**
     * <zh/> 计算 zIndex
     *
     * <en/> Calculate zIndex
     * @param data - <zh/> 新增的数据 | <en/> newly added data
     * @param type - <zh/> 操作类型 | <en/> operation type
     * @param force - <zh/> 忽略批处理 | <en/> ignore batch processing
     * @remarks
     * <zh/> 调用该函数的情况：
     * - 新增元素
     * - 更新节点/组合的 combo
     * - 更新节点的 children
     *
     * <en/> The situation of calling this function:
     * - Add element
     * - Update the combo of the node/combo
     * - Update the children of the node
     */
    protected computeZIndex(data: PartialGraphData, type: 'add' | 'update', force?: boolean): void;
    /**
     * <zh/> 计算元素置顶后的 zIndex
     *
     * <en/> Calculate the zIndex after the element is placed on top
     * @param id - <zh/> 元素 ID | <en/> ID of the element
     * @returns <zh/> zIndex | <en/> zIndex
     */
    getFrontZIndex(id: ID): number;
    protected updateNodeLikeHierarchy(data: NodeLikeData[]): void;
    private enableUpdateNodeLikeHierarchy;
    /**
     * <zh/> 执行变更时不要更新节点层次结构
     *
     * <en/> Do not update the node hierarchy when executing changes
     * @param callback - <zh/> 变更函数 | <en/> change function
     */
    preventUpdateNodeLikeHierarchy(callback: () => void): void;
    updateData(data: PartialGraphData): void;
    updateNodeData(nodes?: PartialNodeLikeData<NodeData>[]): void;
    /**
     * <zh/> 将所有数据提交到变更记录中以进行重绘
     *
     * <en/> Submit all data to the change record for redrawing
     */
    refreshData(): void;
    syncNodeLikeDatum(datum: PartialNodeLikeData<NodeData>): void;
    syncEdgeDatum(datum: PartialEdgeData<EdgeData>): void;
    updateEdgeData(edges?: PartialEdgeData<EdgeData>[]): void;
    updateComboData(combos?: PartialNodeLikeData<ComboData>[]): void;
    /**
     * <zh/> 设置节点的父节点
     *
     * <en/> Set the parent node of the node
     * @param id - <zh/> 节点 ID | <en/> node ID
     * @param parent - <zh/> 父节点 ID | <en/> parent node ID
     * @param hierarchyKey - <zh/> 层次结构类型 | <en/> hierarchy type
     * @param update - <zh/> 添加新/旧父节点数据更新记录 | <en/> add new/old parent node data update record
     */
    setParent(id: ID, parent: ID | undefined | null, hierarchyKey: HierarchyKey, update?: boolean): void;
    /**
     * <zh/> 刷新 combo 数据
     *
     * <en/> Refresh combo data
     * @param id - <zh/> combo ID | <en/> combo ID
     * @remarks
     * <zh/> 不会更改数据，但会触发数据变更事件
     *
     * <en/> Will not change the data, but will trigger data change events
     */
    refreshComboData(id: ID): void;
    getElementPosition(id: ID): Point;
    translateNodeLikeBy(id: ID, offset: Point): void;
    translateNodeLikeTo(id: ID, position: Point): void;
    translateNodeBy(id: ID, offset: Point): void;
    translateNodeTo(id: ID, position: Point): void;
    translateComboBy(id: ID, offset: Point): void;
    translateComboTo(id: ID, position: Point): void;
    removeData(data: DataID): void;
    removeNodeData(ids?: ID[]): void;
    removeEdgeData(ids?: ID[]): void;
    removeComboData(ids?: ID[]): void;
    /**
     * <zh/> 移除节点层次结构，将其子节点移动到父节点的 children 列表中
     *
     * <en/> Remove the node hierarchy and move its child nodes to the parent node's children list
     * @param id - <zh/> 待处理的节点 | <en/> node to be processed
     */
    protected removeNodeLikeHierarchy(id: ID): void;
    /**
     * <zh/> 获取元素的类型
     *
     * <en/> Get the type of the element
     * @param id - <zh/> 元素 ID | <en/> ID of the element
     * @returns <zh/> 元素类型 | <en/> type of the element
     */
    getElementType(id: ID): ElementType;
    destroy(): void;
}
