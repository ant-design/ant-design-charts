/**
 * 链表中单个元素节点
 */
export declare class LinkedListNode {
    value: any;
    next: LinkedListNode;
    constructor(value: any, next?: LinkedListNode);
    toString(callback?: any): any;
}
export default class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;
    compare: Function;
    constructor(comparator?: (a: any, b: any) => boolean);
    /**
     * 将指定元素添加到链表头部
     * @param value
     */
    prepend(value: any): this;
    /**
     * 将指定元素添加到链表中
     * @param value
     */
    append(value: any): this;
    /**
     * 删除指定元素
     * @param value 要删除的元素
     */
    delete(value: any): LinkedListNode;
    /**
     * 查找指定的元素
     * @param param0
     */
    find({ value, callback }: {
        value?: any;
        callback?: any;
    }): LinkedListNode;
    /**
     * 删除尾部节点
     */
    deleteTail(): LinkedListNode;
    /**
     * 删除头部节点
     */
    deleteHead(): LinkedListNode;
    /**
     * 将一组元素转成链表中的节点
     * @param values 链表中的元素
     */
    fromArray(values: any): this;
    /**
     * 将链表中的节点转成数组元素
     */
    toArray(): any[];
    /**
     * 反转链表中的元素节点
     */
    reverse(): void;
    toString(callback?: any): string;
}
