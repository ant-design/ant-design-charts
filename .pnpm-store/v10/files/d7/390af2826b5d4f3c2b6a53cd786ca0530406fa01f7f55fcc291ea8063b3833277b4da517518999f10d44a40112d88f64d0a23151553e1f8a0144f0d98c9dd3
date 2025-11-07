"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusElement = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const element_1 = require("../constants/element");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 聚焦元素交互行为
 *
 * <en/> Focus element behavior
 * @remarks
 * <zh/> 点击元素时，将元素聚焦到视图中心。
 *
 * <en/> When an element is clicked, the element is focused to the center of the view.
 */
class FocusElement extends base_behavior_1.BaseBehavior {
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
        element_1.ELEMENT_TYPES.forEach((type) => {
            graph.on(`${type}:${constants_1.CommonEvent.CLICK}`, this.focus);
        });
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    unbindEvents() {
        const { graph } = this.context;
        element_1.ELEMENT_TYPES.forEach((type) => {
            graph.off(`${type}:${constants_1.CommonEvent.CLICK}`, this.focus);
        });
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
exports.FocusElement = FocusElement;
FocusElement.defaultOptions = {
    animation: {
        easing: 'ease-in',
        duration: 500,
    },
    enable: true,
};
//# sourceMappingURL=focus-element.js.map