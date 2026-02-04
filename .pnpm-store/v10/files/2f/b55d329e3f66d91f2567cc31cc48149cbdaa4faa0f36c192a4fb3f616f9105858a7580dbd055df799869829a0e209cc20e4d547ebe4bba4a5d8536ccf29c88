import type { DisplayObjectConfig, Group } from '@antv/g';
import { BaseShape } from './base-shape';
import type { LabelStyleProps } from './label';
/**
 * <zh/> 徽标样式
 *
 * <en/> Badge style
 */
export interface BadgeStyleProps extends LabelStyleProps {
}
/**
 * <zh/> 徽标
 *
 * <en/> Badge
 * @remarks
 * <zh/> 徽标是一种特殊的标签，通常用于展示数量或状态信息。
 *
 * <en/> Badge is a special label, usually used to display quantity or status information.
 */
export declare class Badge extends BaseShape<BadgeStyleProps> {
    static defaultStyleProps: Partial<BadgeStyleProps>;
    constructor(options: DisplayObjectConfig<BadgeStyleProps>);
    protected getBadgeStyle(attributes: Required<BadgeStyleProps>): Omit<Required<BadgeStyleProps>, "x" | "y" | "z" | "class" | "transform" | "transformOrigin" | "visibility" | "zIndex" | "className">;
    render(attributes?: Required<BadgeStyleProps>, container?: Group): void;
    getGeometryBounds(): import("@antv/g").AABB;
}
