import type { BaseBehavior } from '../behaviors/base-behavior';
import { ExtensionController } from '../registry/extension';
import type { BehaviorOptions, CustomBehaviorOption } from '../spec/behavior';
import type { RuntimeContext } from './types';
export declare class BehaviorController extends ExtensionController<BaseBehavior<CustomBehaviorOption>> {
    /**
     * <zh/> 当前事件的目标
     *
     *  <en/> The current event target
     */
    private currentTarget;
    private currentTargetType;
    category: "behavior";
    constructor(context: RuntimeContext);
    setBehaviors(behaviors: BehaviorOptions): void;
    private forwardEvents;
    private forwardCanvasEvents;
    private forwardContainerEvents;
    destroy(): void;
}
