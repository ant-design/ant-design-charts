import type EventEmitter from '@antv/event-emitter';
import type { DisplayObject } from '@antv/g';
import { Document } from '@antv/g';
import { Target } from '../../types';
import type { BaseEvent } from './events';
export * from './events';
/**
 * <zh/> 基于 Event 对象触发事件
 *
 * <en/> Trigger event based on Event object
 * @param emitter - <zh/> 事件目标 | <en/> event target
 * @param event - <zh/> 事件对象 | <en/> event object
 */
export declare function emit(emitter: EventEmitter, event: BaseEvent): void;
/**
 * <zh/> 获取事件目标元素
 *
 * <en/> Get the event target element
 * @param shape - <zh/> 事件图形 | <en/> event shape
 * @returns <zh/> 目标元素 | <en/> target element
 * @remarks
 * <zh/> 事件响应大多数情况会命中元素的内部图形，通过该方法可以获取到其所属元素
 *
 * <en/> Most of the event responses will hit the internal graphics of the element, and this method can be used to get the element to which it belongs
 */
export declare function eventTargetOf(shape?: DisplayObject | Document): {
    type: string;
    element: Target;
} | null;
