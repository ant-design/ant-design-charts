import type { DisplayObjectConfig } from '@antv/g';
import type { PathArray } from '@antv/util';
import type { BaseEdgeStyleProps } from './base-edge';
import { BaseEdge } from './base-edge';
/**
 * <zh/> 直线样式配置项
 *
 * <en/> Line style properties
 */
export interface LineStyleProps extends BaseEdgeStyleProps {
}
type ParsedLineStyleProps = Required<LineStyleProps>;
/**
 * <zh/> 直线
 *
 * <en/> Line
 */
export declare class Line extends BaseEdge {
    static defaultStyleProps: Partial<LineStyleProps>;
    constructor(options: DisplayObjectConfig<LineStyleProps>);
    protected getKeyPath(attributes: ParsedLineStyleProps): PathArray;
}
export {};
