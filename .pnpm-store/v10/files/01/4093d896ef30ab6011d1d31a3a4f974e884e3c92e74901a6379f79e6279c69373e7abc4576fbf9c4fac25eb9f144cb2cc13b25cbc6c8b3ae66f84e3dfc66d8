import type { BaseLayoutOptions } from '../layouts/types';
import type { GraphData, NodeData } from '../spec';
import type { Size } from '../types';
import { BaseLayout } from './base-layout';
export interface FishboneLayoutOptions extends BaseLayoutOptions {
    /**
     * <zh/> 节点大小
     *
     * <en/> Node size
     */
    nodeSize?: Size | ((node: NodeData) => Size);
    /**
     * <zh/> 排布方向
     * - `'RL'` 从右到左，鱼头在右
     * - `'LR'` 从左到右，鱼头在左
     *
     * <en/> Layout direction
     * - `'RL'` From right to left, the fish head is on the right
     * - `'LR'` From left to right, the fish head is on the left
     * @defaultValue `'LR'`
     */
    direction?: 'RL' | 'LR';
    /**
     * <zh/> 获取水平间距
     *
     * <en/> Get horizontal spacing
     */
    hGap?: number;
    /**
     * <zh/> 获取垂直间距
     *
     * <en/> Get vertical spacing
     */
    vGap?: number;
    /**
     * <zh/> 获取鱼骨间距
     *
     * <en/> Get rib separation
     * @defaultValue () => 60
     */
    getRibSep?: (node: NodeData) => number;
    /**
     * <zh/> 布局宽度
     *
     * <en/> Layout width
     */
    width?: number;
    /**
     * <zh/> 布局高度
     *
     * <en/> Layout height
     */
    height?: number;
}
/**
 * <zh/> 鱼骨图布局
 *
 * <en/> Fishbone layout
 * @remarks
 * <zh/> [鱼骨图布局](https://en.wikipedia.org/wiki/Ishikawa_diagram)是一种专门用于表示层次结构数据的图形布局方式。它通过模拟鱼骨的形状，将数据节点按照层次结构排列，使得数据的层次关系更加清晰直观。鱼骨图布局特别适用于需要展示因果关系、层次结构或分类信息的数据集。
 *
 * <en/> [Fishbone layout](https://en.wikipedia.org/wiki/Ishikawa_diagram) is a graphical layout method specifically designed to represent hierarchical data. By simulating the shape of a fishbone, it arranges data nodes according to their hierarchical structure, making the hierarchical relationships of the data clearer and more intuitive. The fishbone diagram layout is particularly suitable for datasets that need to display causal relationships, hierarchical structures, or classification information.
 */
export declare class FishboneLayout extends BaseLayout {
    id: string;
    static defaultOptions: Partial<FishboneLayoutOptions>;
    private getRoot;
    private formatSize;
    private doLayout;
    private placeAlterative;
    private rightToLeft;
    execute(data: GraphData, propOptions: FishboneLayoutOptions): Promise<GraphData>;
}
