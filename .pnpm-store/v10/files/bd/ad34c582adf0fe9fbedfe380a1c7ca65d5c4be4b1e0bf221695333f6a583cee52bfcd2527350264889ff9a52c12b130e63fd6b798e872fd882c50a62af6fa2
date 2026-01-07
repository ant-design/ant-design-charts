var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isFunction } from '@antv/util';
import { CommonEvent } from '../constants';
import { ELEMENT_TYPES } from '../constants/element';
import { Shortcut } from '../utils/shortcut';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 聚焦元素交互行为
 *
 * <en/> Focus element behavior
 * @remarks
 * <zh/> 点击元素时，将元素聚焦到视图中心。
 *
 * <en/> When an element is clicked, the element is focused to the center of the view.
 */
export class FocusElement extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, FocusElement.defaultOptions, options));
        this.focus = (event) => __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { graph } = this.context;
            yield graph.focusElement(event.target.id, this.options.animation);
        });
        this.shortcut = new Shortcut(context.graph);
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        this.unbindEvents();
        ELEMENT_TYPES.forEach((type) => {
            graph.on(`${type}:${CommonEvent.CLICK}`, this.focus);
        });
    }
    validate(event) {
        if (this.destroyed || !this.isKeydown())
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    /**
     * <zh/> 当前按键是否和 trigger 配置一致
     *
     * <en/> Is the current key consistent with the trigger configuration
     * @returns <zh/> 是否一致 | <en/> Is consistent
     * @internal
     */
    isKeydown() {
        const { trigger } = this.options;
        if (!(trigger === null || trigger === void 0 ? void 0 : trigger.length))
            return true;
        return this.shortcut.match(trigger);
    }
    unbindEvents() {
        const { graph } = this.context;
        ELEMENT_TYPES.forEach((type) => {
            graph.off(`${type}:${CommonEvent.CLICK}`, this.focus);
        });
    }
    destroy() {
        this.unbindEvents();
        this.shortcut.destroy();
        super.destroy();
    }
}
FocusElement.defaultOptions = {
    animation: {
        easing: 'ease-in',
        duration: 500,
    },
    enable: true,
    trigger: [],
};
//# sourceMappingURL=focus-element.js.map