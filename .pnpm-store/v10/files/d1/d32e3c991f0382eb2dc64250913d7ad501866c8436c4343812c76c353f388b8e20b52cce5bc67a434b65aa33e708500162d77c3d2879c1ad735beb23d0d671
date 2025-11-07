import type { GraphData, NodeData } from '../spec';
import type { Padding, Size } from '../types';
import { BaseLayout } from './base-layout';
import type { BaseLayoutOptions } from './types';
export interface SnakeLayoutOptions extends BaseLayoutOptions {
    /**
     * <zh/> 节点尺寸
     *
     * <en/> Node size
     */
    nodeSize?: Size | ((node: NodeData) => Size);
    /**
     * <zh/> 内边距，即布局区域与画布边界的距离
     *
     * <en/> Padding, the distance between the layout area and the canvas boundary
     * @defaultValue 0
     */
    padding?: Padding;
    /**
     * <zh/> 节点排序方法。默认按照在图中的路径顺序进行展示
     *
     * <en/> Node sorting method
     */
    sortBy?: (nodeA: NodeData, nodeB: NodeData) => -1 | 0 | 1;
    /**
     * <zh/> 节点列数
     *
     * <en/> Number of node columns
     * @defaultValue 5
     */
    cols?: number;
    /**
     * <zh/> 节点行之间的间隙大小。默认将根据画布高度和节点总行数自动计算
     *
     * <en/> The size of the gap between a node's rows
     */
    rowGap?: number;
    /**
     * <zh/> 节点列之间的间隙大小。默认将根据画布宽度和节点总列数自动计算
     *
     * <en/> The size of the gap between a node's columns
     */
    colGap?: number;
    /**
     * <zh/> 节点排布方向是否顺时针
     *
     * <en/> Whether the node arrangement direction is clockwise
     * @defaultValue true
     * @remarks
     * <zh/> 在顺时针排布时，节点从左上角开始，第一行从左到右排列，第二行从右到左排列，依次类推，形成 S 型路径。在逆时针排布时，节点从右上角开始，第一行从右到左排列，第二行从左到右排列，依次类推，形成反向 S 型路径。
     *
     * <en/> When arranged clockwise, the nodes start from the upper left corner, the first row is arranged from left to right, the second row is arranged from right to left, and so on, forming an S-shaped path. When arranged counterclockwise, the nodes start from the upper right corner, the first row is arranged from right to left, the second row is arranged from left to right, and so on, forming a reverse S-shaped path.
     */
    clockwise?: boolean;
}
/**
 * <zh/> 蛇形布局
 *
 * <en/> Snake layout
 * @remarks
 * <zh/> 蛇形布局（Snake Layout）是一种特殊的图形布局方式，能够在较小的空间内更有效地展示长链结构。需要注意的是，其图数据需要确保节点按照从源节点到汇节点的顺序进行线性排列，形成一条明确的路径。
 *
 * <zh/> 节点按 S 字型排列，第一个节点位于第一行的起始位置，接下来的节点在第一行向右排列，直到行末尾。到达行末尾后，下一行的节点从右向左反向排列。这个过程重复进行，直到所有节点排列完毕。
 *
 * <en/> The Snake layout is a special way of graph layout that can more effectively display long chain structures in a smaller space. Note that the graph data needs to ensure that the nodes are linearly arranged in the order from the source node to the sink node to form a clear path.
 *
 * <en/> The nodes are arranged in an S-shaped pattern, with the first node at the beginning of the first row, and the following nodes arranged to the right until the end of the row. After reaching the end of the row, the nodes in the next row are arranged in reverse from right to left. This process is repeated until all nodes are arranged.
 */
export declare class SnakeLayout extends BaseLayout {
    id: string;
    static defaultOptions: Partial<SnakeLayoutOptions>;
    private formatSize;
    /**
     * Validates the graph data to ensure it meets the requirements for linear arrangement.
     * @param data - Graph data
     * @returns false if the graph is not connected, has more than one source or sink node, or contains cycles.
     */
    private validate;
    execute(model: GraphData, options?: SnakeLayoutOptions): Promise<GraphData>;
}
