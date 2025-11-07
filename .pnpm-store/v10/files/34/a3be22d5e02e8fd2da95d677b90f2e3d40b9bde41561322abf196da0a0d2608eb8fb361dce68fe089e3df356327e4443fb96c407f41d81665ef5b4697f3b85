import type { ContourStyleProps } from '../../elements/shapes';
import type { RuntimeContext } from '../../runtime/types';
import type { ID } from '../../types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> Hull 配置项
 *
 * <en/> Hull options
 */
export interface HullOptions extends BasePluginOptions, ContourStyleProps {
    /**
     * <zh/> Hull 内的元素
     *
     * <en/> Elements in Hull
     */
    members?: ID[];
    /**
     * <zh/> 凹度，数值越大凹度越小；默认为 Infinity 代表为 Convex Hull
     *
     * <en/> Concavity. Default is Infinity, which means Convex Hull
     * @defaultValue Infinity
     */
    concavity?: number;
    /**
     * <zh/> 内边距
     *
     * <en/> Padding
     * @defaultValue 10
     */
    padding?: number;
    /**
     * <zh/> 拐角类型
     *
     * <en/> Corner type
     * @defaultValue 'rounded'
     */
    corner?: 'rounded' | 'smooth' | 'sharp';
}
/**
 * <zh/> 轮廓
 *
 * <en/> Hull
 * @remarks
 * <zh/> 轮廓包围（Hull）用于处理和表示一组点的凸多边形包围盒。轮廓包围分为两种形态：凸包和凹包。
 *
 * <zh/> 凸包（Convex Hull）：这是一个凸多边形，它包含所有的点，并且没有任何凹陷。你可以将其想象为一组点的最小包围盒，没有任何点在这个多边形的外部。
 *
 * <zh/> 凹包（Concave Hull）：这是一个凹多边形，它同样包含所有的点，但是可能会有凹陷。凹包的凹陷程度由 concavity 参数控制。concavity 越大，凹陷越小。当 concavity 为 Infinity 时，凹包就变成了凸包。
 *
 * <en/> Hull is used to process and represent the convex polygon bounding box of a set of points. Hull has two forms: convex hull and concave hull.
 *
 * <en/>  Convex Hull: This is a convex polygon that contains all points and has no concave. You can think of it as the smallest bounding box of a set of points, with no points outside the polygon.
 *
 *  <en/>  Concave Hull: This is a concave polygon that also contains all points, but may have concave. The concavity of the concave hull is controlled by the concavity parameter. The larger the concavity, the smaller the concave. When concavity is Infinity, the concave hull becomes a convex hull.
 */
export declare class Hull extends BasePlugin<HullOptions> {
    private shape;
    /**
     * <zh/> 在 Hull 上的元素
     *
     * <en/> Element Ids on Hull
     */
    private hullMemberIds;
    /**
     * <zh/> Hull 绘制路径
     *
     * <en/> Hull path
     */
    private path;
    private optionsCache;
    static defaultOptions: Partial<HullOptions>;
    constructor(context: RuntimeContext, options: HullOptions);
    private bindEvents;
    private unbindEvents;
    private getHullStyle;
    private drawHull;
    private updateHullPath;
    private getHullPath;
    private getPadding;
    /**
     * <zh/> 添加 Hull 成员
     *
     * <en/> Add Hull member
     * @param members - <zh/> 元素 Ids | <en/> Element Ids
     */
    addMember(members: ID | ID[]): void;
    /**
     * <zh/> 移除 Hull 成员
     *
     * <en/> Remove Hull member
     * @param members - <zh/> 元素 Ids | <en/> Element Ids
     */
    removeMember(members: ID | ID[]): void;
    /**
     * <zh/> 更新 Hull 成员
     *
     * <en/> Update Hull member
     * @param members - <zh/> 元素 Ids | <en/> Element Ids
     */
    updateMember(members: ID[] | ((prev: ID[]) => ID[])): void;
    /**
     * <zh/> 获取 Hull 成员
     *
     * <en/> Get Hull member
     * @returns <zh/> 元素 Ids | <en/> Element Ids
     */
    getMember(): string[];
    /**
     * <zh/> 销毁 Hull
     *
     * <en/> Destroy Hull
     * @internal
     */
    destroy(): void;
}
