import type { ComponentOptions, PrefixStyleProps } from '../../../core';
import { Component } from '../../../core';
import type { GroupStyleProps, PathStyleProps, RectStyleProps } from '../../../shapes';
import { Group } from '../../../shapes';
export type Interpolate<T = string> = (val: number) => T;
export type RibbonStyleProps = GroupStyleProps & PrefixStyleProps<PathStyleProps, 'selection'> & PrefixStyleProps<RectStyleProps, 'track'> & {
    block?: boolean;
    color: string[] | Interpolate;
    length: number;
    orientation?: 'horizontal' | 'vertical';
    /** partition of the block ,the length of it is the block count */
    partition?: number[];
    /** select area, 0~1 */
    range?: [number, number];
    size: number;
    type?: 'size' | 'color';
};
export type RibbonOptions = ComponentOptions<RibbonStyleProps>;
type RequiredRibbonStyleProps = Required<RibbonStyleProps>;
export declare class Ribbon extends Component<RibbonStyleProps> {
    constructor(options: RibbonOptions);
    render(attribute: RequiredRibbonStyleProps, container: Group): void;
}
export {};
