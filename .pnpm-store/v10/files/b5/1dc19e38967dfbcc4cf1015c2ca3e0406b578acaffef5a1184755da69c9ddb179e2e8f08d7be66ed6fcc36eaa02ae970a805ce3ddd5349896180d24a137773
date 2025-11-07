import type { INode } from '@antv/g';
import { Group } from '../../shapes';
import { BBox } from '../../util';
import type { SeriesAttr } from '../../util/series';
import type { LayoutOptions, LayoutStyleProps } from './types';
export type { LayoutOptions, LayoutStyleProps };
export declare class Layout extends Group {
    private layoutEvents;
    private $margin;
    private $padding;
    set margin(value: SeriesAttr);
    get margin(): SeriesAttr;
    set padding(value: SeriesAttr);
    get padding(): SeriesAttr;
    getBBox(): BBox;
    appendChild<T extends INode>(child: T, index?: number): T;
    getAvailableSpace(): BBox;
    constructor(options: LayoutOptions);
    layout(): void;
    bindEvents(): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
}
