"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimizeViewportTransform = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const visibility_1 = require("../utils/visibility");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 操作画布过程中隐藏元素
 *
 * <en/> Hide elements during canvas operations (dragging, zooming, scrolling)
 */
class OptimizeViewportTransform extends base_behavior_1.BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, OptimizeViewportTransform.defaultOptions, options));
        this.hiddenShapes = [];
        this.isVisible = true;
        this.setElementsVisibility = (elements, visibility, filter) => {
            elements.filter(Boolean).forEach((element) => {
                if (visibility === 'hidden' && !element.isVisible()) {
                    this.hiddenShapes.push(element);
                }
                else if (visibility === 'visible' && this.hiddenShapes.includes(element)) {
                    this.hiddenShapes.splice(this.hiddenShapes.indexOf(element), 1);
                }
                else {
                    (0, visibility_1.setVisibility)(element, visibility, filter);
                }
            });
        };
        this.filterShapes = (type, filter) => {
            if ((0, util_1.isFunction)(filter))
                return (shape) => !filter(type, shape);
            const includesClassnames = filter === null || filter === void 0 ? void 0 : filter[type];
            return (shape) => {
                if (!shape.className)
                    return true;
                return !(includesClassnames === null || includesClassnames === void 0 ? void 0 : includesClassnames.includes(shape.className));
            };
        };
        this.hideShapes = (event) => {
            if (!this.validate(event) || !this.isVisible)
                return;
            const { element } = this.context;
            const { shapes = {} } = this.options;
            this.setElementsVisibility(element.getNodes(), 'hidden', this.filterShapes('node', shapes));
            this.setElementsVisibility(element.getEdges(), 'hidden', this.filterShapes('edge', shapes));
            this.setElementsVisibility(element.getCombos(), 'hidden', this.filterShapes('combo', shapes));
            this.isVisible = false;
        };
        this.showShapes = (0, util_1.debounce)((event) => {
            if (!this.validate(event) || this.isVisible)
                return;
            const { element } = this.context;
            this.setElementsVisibility(element.getNodes(), 'visible');
            this.setElementsVisibility(element.getEdges(), 'visible');
            this.setElementsVisibility(element.getCombos(), 'visible');
            this.isVisible = true;
        }, this.options.debounce);
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(constants_1.GraphEvent.BEFORE_TRANSFORM, this.hideShapes);
        graph.on(constants_1.GraphEvent.AFTER_TRANSFORM, this.showShapes);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(constants_1.GraphEvent.BEFORE_TRANSFORM, this.hideShapes);
        graph.off(constants_1.GraphEvent.AFTER_TRANSFORM, this.showShapes);
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
exports.OptimizeViewportTransform = OptimizeViewportTransform;
OptimizeViewportTransform.defaultOptions = {
    enable: true,
    debounce: 200,
    shapes: (type) => type === 'node',
};
//# sourceMappingURL=optimize-viewport-transform.js.map