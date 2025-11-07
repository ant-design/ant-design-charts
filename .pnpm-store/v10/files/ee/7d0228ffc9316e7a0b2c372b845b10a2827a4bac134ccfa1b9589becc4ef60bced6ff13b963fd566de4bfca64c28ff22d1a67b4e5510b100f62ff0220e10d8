import { Node } from './node';
export type NodePropertyDescriptor = {
    type: 'object' | 'value' | 'array' | 'node' | 'container' | 'mix';
    key?: string;
    ctor?: new (...args: any[]) => any;
};
type NodeClass = new (props: any, type?: string) => Node;
/**
 * A decorator to define different type of attribute setter or
 * getter for current node.
 */
export declare function defineProps(descriptors: Record<string, NodePropertyDescriptor>): (Node: NodeClass) => any;
export declare function nodeProps(node: Record<string, new (...args: any[]) => any>): Record<string, NodePropertyDescriptor>;
export {};
