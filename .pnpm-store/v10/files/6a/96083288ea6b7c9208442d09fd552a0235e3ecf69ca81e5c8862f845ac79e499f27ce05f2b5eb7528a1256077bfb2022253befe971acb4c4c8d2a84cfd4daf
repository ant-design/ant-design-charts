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
exports.CollapseExpand = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const collapsibility_1 = require("../utils/collapsibility");
const element_1 = require("../utils/element");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 展开/收起元素交互
 *
 * <en/> Collapse/Expand Element behavior
 * @remarks
 * <zh/> 通过操作展开/收起元素。
 *
 * <en/> Expand/collapse elements by operation.
 */
class CollapseExpand extends base_behavior_1.BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, CollapseExpand.defaultOptions, options));
        this.onCollapseExpand = (event) => __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { target } = event;
            if (!(0, element_1.isElement)(target))
                return;
            const id = target.id;
            const { model, graph } = this.context;
            const data = model.getElementDataById(id);
            if (!data)
                return false;
            const { onCollapse, onExpand, animation, align } = this.options;
            if ((0, collapsibility_1.isCollapsed)(data)) {
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
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
exports.CollapseExpand = CollapseExpand;
CollapseExpand.defaultOptions = {
    enable: true,
    animation: true,
    trigger: constants_1.CommonEvent.DBLCLICK,
    align: true,
};
//# sourceMappingURL=collapse-expand.js.map