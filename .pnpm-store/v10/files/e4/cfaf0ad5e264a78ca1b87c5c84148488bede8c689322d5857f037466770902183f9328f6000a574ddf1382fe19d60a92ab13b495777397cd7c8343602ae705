import type { IAnimation } from '@antv/g';
import type { AnimationType, GraphEvent } from '../../constants';
import type { ElementDatum, ElementType, IAnimateEvent, IElementLifeCycleEvent, IGraphLifeCycleEvent, IViewportEvent, TransformOptions } from '../../types';
export declare class BaseEvent {
    type: string;
    constructor(type: string);
}
export declare class GraphLifeCycleEvent extends BaseEvent implements IGraphLifeCycleEvent {
    data?: any | undefined;
    constructor(type: GraphEvent.BEFORE_RENDER | GraphEvent.AFTER_RENDER | GraphEvent.BEFORE_DRAW | GraphEvent.AFTER_DRAW | GraphEvent.BEFORE_LAYOUT | GraphEvent.AFTER_LAYOUT | GraphEvent.BEFORE_STAGE_LAYOUT | GraphEvent.AFTER_STAGE_LAYOUT | GraphEvent.BEFORE_SIZE_CHANGE | GraphEvent.AFTER_SIZE_CHANGE | GraphEvent.BATCH_START | GraphEvent.BATCH_END | GraphEvent.BEFORE_DESTROY | GraphEvent.AFTER_DESTROY, data?: any | undefined);
}
export declare class AnimateEvent extends BaseEvent implements IAnimateEvent {
    animationType: AnimationType;
    animation: IAnimation | null;
    data?: any | undefined;
    constructor(type: GraphEvent.BEFORE_ANIMATE | GraphEvent.AFTER_ANIMATE, animationType: AnimationType, animation: IAnimation | null, data?: any | undefined);
}
export declare class ElementLifeCycleEvent extends BaseEvent implements IElementLifeCycleEvent {
    elementType: ElementType;
    data: ElementDatum;
    constructor(type: GraphEvent.BEFORE_ELEMENT_CREATE | GraphEvent.AFTER_ELEMENT_CREATE | GraphEvent.BEFORE_ELEMENT_UPDATE | GraphEvent.AFTER_ELEMENT_UPDATE | GraphEvent.BEFORE_ELEMENT_DESTROY | GraphEvent.AFTER_ELEMENT_DESTROY, elementType: ElementType, data: ElementDatum);
}
export declare class ViewportEvent extends BaseEvent implements IViewportEvent {
    data: TransformOptions;
    constructor(type: GraphEvent.BEFORE_TRANSFORM | GraphEvent.AFTER_TRANSFORM, data: TransformOptions);
}
