import { isBoolean } from '@antv/util';
import { GraphEvent } from '../constants';
import { add, mod, multiply } from '../utils/vector';
import { BasePlugin } from './base-plugin';
import { createPluginContainer } from './utils/dom';
/**
 * <zh/> 网格线
 *
 * <en/> Grid line
 * @remarks
 * <zh/> 网格线插件，多用于辅助绘图
 *
 * <en/> Grid line plugin, often used to auxiliary drawing
 */
export class GridLine extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, GridLine.defaultOptions, options));
        this.$element = createPluginContainer('grid-line', true);
        this.offset = [0, 0];
        this.currentScale = 1;
        this.followZoom = (event) => {
            const { data: { scale, origin }, } = event;
            if (!scale || (origin === undefined && this.context.viewport === undefined))
                return;
            const prevScale = this.currentScale;
            this.currentScale = scale;
            const deltaScale = scale / prevScale;
            const positionOffset = multiply(origin || this.context.graph.getCanvasCenter(), 1 - deltaScale);
            const scaledSize = this.baseSize * scale;
            const scaledOffset = multiply(this.offset, deltaScale);
            const modulatedOffset = mod(scaledOffset, scaledSize);
            const newOffset = add(modulatedOffset, positionOffset);
            this.$element.style.backgroundSize = `${scaledSize}px ${scaledSize}px`;
            this.$element.style.backgroundPosition = `${newOffset[0]}px ${newOffset[1]}px`;
            this.offset = mod(newOffset, scaledSize);
        };
        this.followTranslate = (event) => {
            if (!this.options.follow)
                return;
            const { data: { translate }, } = event;
            if (translate)
                this.updateOffset(translate);
        };
        this.onTransform = (event) => {
            const follow = this.parseFollow(this.options.follow);
            if (follow.zoom)
                this.followZoom(event);
            if (follow.translate)
                this.followTranslate(event);
        };
        const $container = this.context.canvas.getContainer();
        $container.prepend(this.$element);
        this.baseSize = this.options.size;
        this.updateStyle();
        this.bindEvents();
    }
    /**
     * <zh/> 更新网格线配置
     *
     * <en/> Update the configuration of the grid line
     * @param options - <zh/> 配置项 | <en/> options
     * @internal
     */
    update(options) {
        super.update(options);
        if (options.size !== undefined) {
            this.baseSize = options.size;
        }
        this.updateStyle();
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(GraphEvent.AFTER_TRANSFORM, this.onTransform);
    }
    updateStyle() {
        const { stroke, lineWidth, border, borderLineWidth, borderStroke, borderStyle } = this.options;
        const scaledSize = this.baseSize * this.currentScale;
        Object.assign(this.$element.style, {
            border: border ? `${borderLineWidth}px ${borderStyle} ${borderStroke}` : 'none',
            backgroundImage: `linear-gradient(${stroke} ${lineWidth}px, transparent ${lineWidth}px), linear-gradient(90deg, ${stroke} ${lineWidth}px, transparent ${lineWidth}px)`,
            backgroundSize: `${scaledSize}px ${scaledSize}px`,
            backgroundRepeat: 'repeat',
        });
    }
    updateOffset(delta) {
        const scaledSize = this.baseSize * this.currentScale;
        this.offset = mod(add(this.offset, delta), scaledSize);
        this.$element.style.backgroundPosition = `${this.offset[0]}px ${this.offset[1]}px`;
    }
    parseFollow(follow) {
        var _a, _b;
        return isBoolean(follow)
            ? { translate: follow, zoom: follow }
            : { translate: (_a = follow === null || follow === void 0 ? void 0 : follow.translate) !== null && _a !== void 0 ? _a : false, zoom: (_b = follow === null || follow === void 0 ? void 0 : follow.zoom) !== null && _b !== void 0 ? _b : false };
    }
    /**
     * <zh/> 销毁网格线
     *
     * <en/> Destroy the grid line
     * @internal
     */
    destroy() {
        this.context.graph.off(GraphEvent.AFTER_TRANSFORM, this.onTransform);
        this.$element.remove();
        super.destroy();
    }
}
GridLine.defaultOptions = {
    border: true,
    borderLineWidth: 1,
    borderStroke: '#eee',
    borderStyle: 'solid',
    lineWidth: 1,
    size: 20,
    stroke: '#eee',
};
//# sourceMappingURL=grid-line.js.map