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
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    unbindEvents() {
        const { graph } = this.context;
        ELEMENT_TYPES.forEach((type) => {
            graph.off(`${type}:${CommonEvent.CLICK}`, this.focus);
        });
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
FocusElement.defaultOptions = {
    animation: {
        easing: 'ease-in',
        duration: 500,
    },
    enable: true,
};
//# sourceMappingURL=focus-element.js.map