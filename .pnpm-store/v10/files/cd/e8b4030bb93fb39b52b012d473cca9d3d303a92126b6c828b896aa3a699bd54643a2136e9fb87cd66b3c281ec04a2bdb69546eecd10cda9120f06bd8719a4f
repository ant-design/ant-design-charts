import { DisplayObject } from '@antv/g';
import { G2MarkState, Scale } from '../runtime';
import { Mark as Spec } from '../spec';
import { Node } from './node';
import { markProps } from './props';
import { PropsOf } from './types';
export interface MarkNode extends PropsOf<typeof markProps, Spec, MarkNode> {
}
export declare class MarkNode extends Node<Spec & {
    [key: string]: any;
}> {
    changeData(data: any): Promise<import("./runtime").Runtime<import("../spec").G2Spec>>;
    /**
     * Get mark from chart views.
     */
    getMark(): G2MarkState;
    /**
     * Get all scales instance.
     */
    getScale(): Record<string, Scale>;
    /**
     * Get the scale instance by channel.
     */
    getScaleByChannel(channel: string): Scale;
    /**
     * Get canvas group.
     */
    getGroup(): DisplayObject;
}
