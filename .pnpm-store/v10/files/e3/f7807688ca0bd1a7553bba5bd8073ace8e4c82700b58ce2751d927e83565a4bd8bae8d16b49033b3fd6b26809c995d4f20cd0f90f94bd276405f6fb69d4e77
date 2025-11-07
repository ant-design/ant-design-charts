import type { IBubbleSetOptions } from 'bubblesets-js';
import type { ContourStyleProps } from '../elements/shapes';
import type { RuntimeContext } from '../runtime/types';
import type { ID } from '../types';
import type { BasePluginOptions } from './base-plugin';
import { BasePlugin } from './base-plugin';
/**
 * <zh/> 气泡集配置项
 *
 * <en/> BubbleSets options
 */
export interface BubbleSetsOptions extends BasePluginOptions, IBubbleSetOptions, ContourStyleProps {
    /**
     * <zh/> 成员元素，包括节点和边
     *
     * <en/> Member elements, including nodes and edges
     */
    members: ID[];
    /**
     * <zh/> 需要避开的元素，在绘制轮廓时不会包含这些元素。目前支持设置节点
     *
     * <en/> Elements to avoid, these elements will not be included when drawing the contour, currently only nodes are supported
     */
    avoidMembers?: ID[];
}
/**
 * <zh/> 气泡集
 *
 * <en/> BubbleSets
 * @remarks
 * <zh/> BubbleSets 最初由 Christopher Collins 在 2009 年的论文 "Bubble Sets: Revealing Set Relations with Isocontours over Existing Visualizations" 中提出。
 *
 * <zh/> 实现原理是通过创建一种类似于气泡的形状来表示集合。每个集合都被表示为一个独特的 "气泡"，集合中的元素被包含在这个气泡内部。如果两个集合有交集，那么这两个气泡会有重叠的部分，这个重叠的部分就表示这两个集合的交集。
 *
 * <en/> BubbleSets was originally proposed by Christopher Collins in the 2009 paper "Bubble Sets: Revealing Set Relations with Isocontours over Existing Visualizations".
 *
 * <en/> The principle is to represent sets by creating a shape similar to a bubble. Each set is represented by a unique "bubble", and the elements in the set are contained within this bubble. If two sets have an intersection, then the two bubbles will have an overlapping part, which represents the intersection of the two sets.
 */
export declare class BubbleSets extends BasePlugin<BubbleSetsOptions> {
    private shape;
    private bubbleSets;
    private path;
    private members;
    private avoidMembers;
    private bubbleSetOptions;
    static defaultOptions: Partial<BubbleSetsOptions>;
    constructor(context: RuntimeContext, options: BubbleSetsOptions);
    private bindEvents;
    private init;
    private parseOptions;
    private drawBubbleSets;
    private updateBubbleSetsPath;
    private getPath;
    /**
     * <zh/> 添加成员元素
     *
     * <en/> Add member elements
     * @param members - <zh/> 单个或多个 | <en/> single or multiple
     */
    addMember(members: ID | ID[]): void;
    /**
     * <zh/> 移除成员元素
     *
     * <en/> Remove member elements
     * @param members - <zh/> 单个或多个 | <en/> single or multiple
     */
    removeMember(members: ID | ID[]): void;
    /**
     * <zh/> 更新成员元素
     *
     * <en/> Update member elements
     * @param members - <zh/> 值或者回调函数 | <en/> value or callback function
     */
    updateMember(members: ID[] | ((prev: ID[]) => ID[])): void;
    /**
     * <zh/> 获取成员元素
     *
     * <en/> Get member elements
     * @returns <zh/> 成员元素数组 | <en/> member elements array
     */
    getMember(): string[];
    /**
     * <zh/> 添加需要避开的元素
     *
     * <en/> Add elements to avoid
     * @param avoidMembers - <zh/> 单个或多个 | <en/> single or multiple
     */
    addAvoidMember(avoidMembers: ID | ID[]): void;
    /**
     * <zh/> 移除需要避开的元素
     *
     * <en/> Remove elements to avoid
     * @param avoidMembers - <zh/> 单个或多个 | <en/> single or multiple
     */
    removeAvoidMember(avoidMembers: ID | ID[]): void;
    /**
     * <zh/> 更新需要避开的元素
     *
     * <en/> Update elements to avoid
     * @param avoidMembers - <zh/> 单个或多个 | <en/> single or multiple
     */
    updateAvoidMember(avoidMembers: ID | ID[]): void;
    /**
     * <zh/> 获取需要避开的元素
     *
     * <en/> Get elements to avoid
     * @returns avoidMembers <zh/> 成员元素数组 | <en/> member elements array
     */
    getAvoidMember(): string[];
    /**
     * <zh/> 销毁
     *
     * <en/> Destroy
     * @internal
     */
    destroy(): void;
}
