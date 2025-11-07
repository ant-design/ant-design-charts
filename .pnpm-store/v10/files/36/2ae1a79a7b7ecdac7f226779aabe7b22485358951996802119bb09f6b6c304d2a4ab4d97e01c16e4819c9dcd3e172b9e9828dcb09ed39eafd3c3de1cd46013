import { Component } from '../../../core';
import type { Group } from '../../../shapes';
import { DisplayObject } from '../../../shapes';
import type { TitleOptions, TitleStyleProps } from './types';
export type { TitleOptions, TitleStyleProps };
/**
 * calculate the actual bbox of the element with title
 * @example a legend with width x, height y, but the real bbox is x1 < x, y1 < y
 */
export declare function getBBox(title: Title, content: DisplayObject): DOMRect;
export declare class Title extends Component<TitleStyleProps> {
    private title;
    constructor(options: TitleOptions);
    getAvailableSpace(): DOMRect;
    getBBox(): DOMRect;
    render(attributes: Required<TitleStyleProps>, container: Group): void;
}
