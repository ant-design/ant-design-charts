import { Coordinate } from '@antv/coord';
import { DisplayObject } from '@antv/g';
import { Scale, G2Theme, G2ViewDescriptor } from '../runtime';
import { Composition as Spec } from '../spec';
import { Node } from './node';
import { compositionProps } from './props';
import { PropsOf } from './types';
export interface CompositionNode<T = any> extends PropsOf<typeof compositionProps, any, // todo Remove this when update types of Spec.
// todo Remove this when update types of Spec.
CompositionNode & T> {
}
export declare class CompositionNode extends Node<Spec & {
    [key: string]: any;
}> {
    protected _key: string;
    /**
     * Change current node data and its children data.
     */
    changeData(data: any): Promise<import("./runtime").Runtime<import("../spec").G2Spec>>;
    /**
     * Get view instance by key.
     */
    getView(): G2ViewDescriptor;
    getScale(): Record<string, Scale>;
    getScaleByChannel(channel: string): Scale;
    getCoordinate(): Coordinate;
    getTheme(): G2Theme;
    getGroup(): DisplayObject;
    /**
     * Show the view.
     */
    show(): void;
    /**
     * Hide the view.
     */
    hide(): void;
}
