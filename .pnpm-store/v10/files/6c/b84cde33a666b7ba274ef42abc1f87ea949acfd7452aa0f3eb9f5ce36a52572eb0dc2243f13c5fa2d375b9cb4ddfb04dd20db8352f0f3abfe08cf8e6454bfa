import { CompositeMarkComponent } from '../runtime';
import { BaseMark, ChannelTypes, PartitionNode } from '../spec';
export type PartitionMark = BaseMark<'rect', 'value' | ChannelTypes>;
export interface PartitionDataNode {
    data: PartitionNode;
    depth: number;
    parent: PartitionDataNode | null;
    children: PartitionDataNode[];
    x0: number;
    x1: number;
    value: number;
}
export interface LayoutOptions {
    valueField?: string;
    sort?: (a: PartitionNode, b: PartitionNode) => number;
    fillParent?: boolean;
    nameField?: string;
}
/**
 * Partition layout algorithm.
 * Child nodes start layout from the parent's starting position to show parent-child relationships.
 *
 * @param data Hierarchical data
 * @param options Configuration options
 */
export declare function partitionLayout(data: PartitionNode[], options?: LayoutOptions): Record<string, any>[];
export type PartitionData = PartitionNode[];
export type PartitionOptions = Omit<PartitionMark, 'type'> & {
    fillParent?: boolean;
};
export declare const PARTITION_TYPE = "partition";
export declare const PARTITION_TYPE_FIELD = "markType";
export declare const PARTITION_PATH_FIELD = "path";
export declare const PARTITION_ANCESTOR_FIELD = "ancestor-node";
export declare const CHILD_NODE_COUNT = "childNodeCount";
export declare function transformData(options: Pick<PartitionOptions, 'data' | 'encode'> & {
    fillParent?: boolean;
    sort?: (a: PartitionNode, b: PartitionNode) => number;
}): {
    [x: string]: any;
}[];
export declare const Partition: CompositeMarkComponent<PartitionOptions>;
