/**
 * Type definitions for @antv/hierarchy
 */
export type Direction = 'LR' | 'RL' | 'TB' | 'BT' | 'H' | 'V';
export interface HierarchyData {
    id?: string;
    name?: string;
    label?: string;
    collapsed?: boolean;
    children?: HierarchyData[];
    width?: number;
    height?: number;
    hgap?: number;
    vgap?: number;
    preH?: number;
    preV?: number;
    [key: string]: any;
}
export interface BoundingBox {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface HierarchyNode {
    data: HierarchyData;
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    depth: number;
    children: HierarchyNode[];
    parent?: HierarchyNode;
    hgap: number;
    vgap: number;
    preH: number;
    preV: number;
    side?: 'left' | 'right';
    startY?: number;
    totalHeight?: number;
    _subTreeSep?: number;
    isRoot(): boolean;
    isLeaf(): boolean;
    addGap(hgap: number, vgap: number): void;
    eachNode(callback: (node: HierarchyNode) => void): void;
    DFTraverse(callback: (node: HierarchyNode) => void): void;
    BFTraverse(callback: (node: HierarchyNode) => void): void;
    getBoundingBox(): BoundingBox;
    translate(tx: number, ty: number): void;
    right2left(): void;
    bottom2top(): void;
}
export interface HierarchyOptions {
    direction?: Direction;
    getId?(data: HierarchyData): string;
    getWidth?(data: HierarchyData): number;
    getHeight?(data: HierarchyData): number;
    getHGap?(data: HierarchyData): number;
    getVGap?(data: HierarchyData): number;
    getPreH?(data: HierarchyData): number;
    getPreV?(data: HierarchyData): number;
    getChildren?(data: HierarchyData): HierarchyData[] | undefined;
    getSubTreeSep?(data: HierarchyData): number;
    getSide?(child: HierarchyNode, index: number): 'left' | 'right';
    isHorizontal?: boolean;
    fixedRoot?: boolean;
    radial?: boolean;
}
export interface CompactBoxOptions extends HierarchyOptions {
    direction?: Direction;
}
export interface DendrogramOptions extends HierarchyOptions {
    isHorizontal?: boolean;
    nodeSep?: number;
    nodeSize?: number;
    rankSep?: number;
    subTreeSep?: number;
}
export interface IndentedOptions extends HierarchyOptions {
    direction?: 'LR' | 'RL' | 'H';
    indent?: number | ((node: HierarchyNode) => number);
    dropCap?: boolean;
    align?: 'center' | undefined;
}
export interface MindmapOptions extends HierarchyOptions {
    direction?: Direction;
}
export type LayoutFunction = (root: HierarchyNode, options?: HierarchyOptions) => HierarchyNode;
//# sourceMappingURL=types.d.ts.map