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
exports.ZoomCanvas = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const point_1 = require("../utils/point");
const shortcut_1 = require("../utils/shortcut");
const base_behavior_1 = require("./base-behavior");
/**
 * <zh/> 缩放画布交互
 *
 * <en/> Zoom canvas behavior
 */
class ZoomCanvas extends base_behavior_1.BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, ZoomCanvas.defaultOptions, options));
        /**
         * <zh/> 缩放画布
         *
         * <en/> Zoom canvas
         * @param value - <zh/> 缩放值， > 0 放大， < 0 缩小 | <en/> Zoom value, > 0 zoom in, < 0 zoom out
         * @param event - <zh/> 事件对象 | <en/> Event object
         * @param animation - <zh/> 缩放动画配置 | <en/> Zoom animation configuration
         */
        this.zoom = (value, event, animation) => __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { graph } = this.context;
            let origin = this.options.origin;
            if (!origin && 'viewport' in event) {
                origin = (0, point_1.parsePoint)(event.viewport);
            }
            const { sensitivity, onFinish } = this.options;
            const ratio = 1 + ((0, util_1.clamp)(value, -50, 50) * sensitivity) / 100;
            const zoom = graph.getZoom();
            yield graph.zoomTo(zoom * ratio, animation, origin);
            onFinish === null || onFinish === void 0 ? void 0 : onFinish();
        });
        this.onReset = () => __awaiter(this, void 0, void 0, function* () {
            yield this.context.graph.zoomTo(1, this.options.animation);
        });
        this.preventDefault = (event) => {
            if (this.options.preventDefault)
                event.preventDefault();
        };
        this.shortcut = new shortcut_1.Shortcut(context.graph);
        this.bindEvents();
    }
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        super.update(options);
        this.bindEvents();
    }
    bindEvents() {
        const { trigger } = this.options;
        this.shortcut.unbindAll();
        if (Array.isArray(trigger)) {
            if (trigger.includes(constants_1.CommonEvent.PINCH)) {
                this.shortcut.bind([constants_1.CommonEvent.PINCH], (event) => {
                    this.zoom(event.scale, event, false);
                });
            }
            else {
                const container = this.context.canvas.getContainer();
                container === null || container === void 0 ? void 0 : container.addEventListener(constants_1.CommonEvent.WHEEL, this.preventDefault);
                this.shortcut.bind([...trigger, constants_1.CommonEvent.WHEEL], (event) => {
                    const { deltaX, deltaY } = event;
                    this.zoom(-(deltaY !== null && deltaY !== void 0 ? deltaY : deltaX), event, false);
                });
            }
        }
        if (typeof trigger === 'object') {
            const { zoomIn = [], zoomOut = [], reset = [], } = trigger;
            this.shortcut.bind(zoomIn, (event) => this.zoom(10, event, this.options.animation));
            this.shortcut.bind(zoomOut, (event) => this.zoom(-10, event, this.options.animation));
            this.shortcut.bind(reset, this.onReset);
        }
    }
    /**
     * <zh/> 验证是否可以缩放
     *
     * <en/> Verify whether it can be zoomed
     * @param event - <zh/> 事件对象 | <en/> Event object
     * @returns <zh/> 是否可以缩放 | <en/> Whether it can be zoomed
     * @internal
     */
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if ((0, util_1.isFunction)(enable))
            return enable(event);
        return !!enable;
    }
    /**
     * <zh/> 销毁缩放画布
     *
     * <en/> Destroy zoom canvas
     */
    destroy() {
        var _a;
        this.shortcut.destroy();
        (_a = this.context.canvas.getContainer()) === null || _a === void 0 ? void 0 : _a.removeEventListener(constants_1.CommonEvent.WHEEL, this.preventDefault);
        super.destroy();
    }
}
exports.ZoomCanvas = ZoomCanvas;
ZoomCanvas.defaultOptions = {
    animation: { duration: 200 },
    enable: true,
    sensitivity: 1,
    trigger: [],
    preventDefault: true,
};
//# sourceMappingURL=zoom-canvas.js.map