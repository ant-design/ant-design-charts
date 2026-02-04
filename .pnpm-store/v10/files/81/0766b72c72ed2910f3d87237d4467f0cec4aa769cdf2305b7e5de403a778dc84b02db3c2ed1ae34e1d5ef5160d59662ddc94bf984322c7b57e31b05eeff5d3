import { Runtime } from './runtime';
/**
 * Hierarchy container.
 */
export declare class Node<Value extends Record<string, any> = Record<string, any>, ParentValue extends Record<string, any> = Record<string, any>, ChildValue extends Record<string, any> = Record<string, any>> {
    parentNode: Node<ParentValue, Record<string, any>, Value>;
    children: Node<ChildValue, Value, Record<string, any>>[];
    index: number;
    value: Partial<Value>;
    type: string;
    constructor(value?: Partial<Value>, type?: string);
    /**
     * Apply specified transform to current value. Mount the node
     * to replace the original one in the tree and then return it.
     */
    map(transform?: (x: Value) => Value): this;
    /**
     * Set or get the specified attribute. It the value is specified, update
     * the attribute of current value and return the node. Otherwise
     * return the the attribute of current value.
     */
    attr<T extends Value[keyof Value]>(key: keyof Value, value?: T): T extends undefined ? T : this;
    /**
     * Create a new node and append to children nodes.
     */
    append(Ctor: new (value: Record<string, any>) => Node<ChildValue, Value>): Node<ChildValue, Value>;
    push(node: Node<ChildValue, Value>): this;
    /**
     * Remove current node from parentNode.
     */
    remove(): Node;
    getNodeByKey(key: string): Node;
    getNodesByType(type: string): Node[];
    getNodeByType(type: string): Node;
    /**
     * Apply specified callback to the node value.
     */
    call(callback: (node: this, ...params: any[]) => any, ...params: any[]): this;
    getRoot(): Runtime;
}
