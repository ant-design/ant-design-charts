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
import { isCollapsed } from '../utils/collapsibility';
import { isElement } from '../utils/element';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 展开/收起元素交互
 *
 * <en/> Collapse/Expand Element behavior
 * @remarks
 * <zh/> 通过操作展开/收起元素。
 *
 * <en/> Expand/collapse elements by operation.
 */
export class CollapseExpand extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, CollapseExpand.defaultOptions, options));
        this.onCollapseExpand = (event) => __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { target } = event;
            if (!isElement(target))
                return;
            const id = target.id;
            const { model, graph } = this.context;
            const data = model.getElementDataById(id);
            if (!data)
                return false;
            const { onCollapse, onExpand, animation, align } = this.options;
            if (isCollapsed(data)) {
                yield graph.expandElement(id, { animation, align });
                onExpand === null || onExpand === void 0 ? void 0 : onExpand(id);
            }
            else {
                yield graph.collapseElement(id, { animation, align });
                onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(id);
            }
        });
        this.bindEvents();
    }
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        const { trigger } = this.options;
        graph.on(`node:${trigger}`, this.onCollapseExpand);
        graph.on(`combo:${trigger}`, this.onCollapseExpand);
    }
    unbindEvents() {
        const { graph } = this.context;
        const { trigger } = this.options;
        graph.off(`node:${trigger}`, this.onCollapseExpand);
        graph.off(`combo:${trigger}`, this.onCollapseExpand);
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
CollapseExpand.defaultOptions = {
    enable: true,
    animation: true,
    trigger: CommonEvent.DBLCLICK,
    align: true,
};
//# sourceMappingURL=collapse-expand.js.map