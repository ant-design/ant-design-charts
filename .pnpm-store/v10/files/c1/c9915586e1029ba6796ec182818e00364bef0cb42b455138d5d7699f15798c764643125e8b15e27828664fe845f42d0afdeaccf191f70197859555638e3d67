var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isFunction, isObject } from '@antv/util';
import { CommonEvent } from '../constants';
import { getExpandedBBox, getPointBBox, isPointInBBox } from '../utils/bbox';
import { parsePadding } from '../utils/padding';
import { Shortcut } from '../utils/shortcut';
import { multiply, subtract } from '../utils/vector';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 滚动画布交互
 *
 * <en/> Scroll canvas behavior
 */
export class ScrollCanvas extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, ScrollCanvas.defaultOptions, options));
        this.onWheel = (event) => __awaiter(this, void 0, void 0, function* () {
            if (this.options.preventDefault)
                event.preventDefault();
            const diffX = event.deltaX;
            const diffY = event.deltaY;
            yield this.scroll([-diffX, -diffY], event);
        });
        this.shortcut = new Shortcut(context.graph);
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
        var _a, _b;
        const { trigger } = this.options;
        this.shortcut.unbindAll();
        if (isObject(trigger)) {
            (_a = this.graphDom) === null || _a === void 0 ? void 0 : _a.removeEventListener(CommonEvent.WHEEL, this.onWheel);
            const { up = [], down = [], left = [], right = [] } = trigger;
            this.shortcut.bind(up, (event) => this.scroll([0, -10], event));
            this.shortcut.bind(down, (event) => this.scroll([0, 10], event));
            this.shortcut.bind(left, (event) => this.scroll([-10, 0], event));
            this.shortcut.bind(right, (event) => this.scroll([10, 0], event));
        }
        else {
            /**
             * 这里必需在原生canvas上绑定wheel事件，参考：
             * https://g.antv.antgroup.com/api/event/faq#%E5%9C%A8-chrome-%E4%B8%AD%E7%A6%81%E6%AD%A2%E9%A1%B5%E9%9D%A2%E9%BB%98%E8%AE%A4%E6%BB%9A%E5%8A%A8%E8%A1%8C%E4%B8%BA
             */
            (_b = this.graphDom) === null || _b === void 0 ? void 0 : _b.addEventListener(CommonEvent.WHEEL, this.onWheel, { passive: false });
        }
    }
    get graphDom() {
        return this.context.graph.getCanvas().getContextService().getDomElement();
    }
    formatDisplacement(d) {
        const { sensitivity } = this.options;
        d = multiply(d, sensitivity);
        d = this.clampByDirection(d);
        d = this.clampByRange(d);
        return d;
    }
    clampByDirection([dx, dy]) {
        const { direction } = this.options;
        if (direction === 'x') {
            dy = 0;
        }
        else if (direction === 'y') {
            dx = 0;
        }
        return [dx, dy];
    }
    clampByRange([dx, dy]) {
        const { viewport, canvas } = this.context;
        const [canvasWidth, canvasHeight] = canvas.getSize();
        const [top, right, bottom, left] = parsePadding(this.options.range);
        const range = [canvasHeight * top, canvasWidth * right, canvasHeight * bottom, canvasWidth * left];
        const scrollableArea = getExpandedBBox(getPointBBox(viewport.getCanvasCenter()), range);
        const nextViewportCenter = subtract(viewport.getViewportCenter(), [dx, dy, 0]);
        if (!isPointInBBox(nextViewportCenter, scrollableArea)) {
            const { min: [minX, minY], max: [maxX, maxY], } = scrollableArea;
            if ((nextViewportCenter[0] < minX && dx > 0) || (nextViewportCenter[0] > maxX && dx < 0)) {
                dx = 0;
            }
            if ((nextViewportCenter[1] < minY && dy > 0) || (nextViewportCenter[1] > maxY && dy < 0)) {
                dy = 0;
            }
        }
        return [dx, dy];
    }
    scroll(value, event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { onFinish } = this.options;
            const graph = this.context.graph;
            const formattedValue = this.formatDisplacement(value);
            yield graph.translateBy(formattedValue, false);
            onFinish === null || onFinish === void 0 ? void 0 : onFinish();
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
    /**
     * <zh/> 销毁画布滚动
     *
     * <en/> Destroy the canvas scrolling
     */
    destroy() {
        var _a;
        this.shortcut.destroy();
        (_a = this.graphDom) === null || _a === void 0 ? void 0 : _a.removeEventListener(CommonEvent.WHEEL, this.onWheel);
        super.destroy();
    }
}
ScrollCanvas.defaultOptions = {
    enable: true,
    sensitivity: 1,
    preventDefault: true,
    range: Infinity,
};
//# sourceMappingURL=scroll-canvas.js.map