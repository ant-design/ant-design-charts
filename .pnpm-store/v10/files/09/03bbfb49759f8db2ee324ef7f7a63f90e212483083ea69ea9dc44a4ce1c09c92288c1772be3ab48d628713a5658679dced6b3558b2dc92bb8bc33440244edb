"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPluginCanvas = createPluginCanvas;
const g_1 = require("@antv/g");
const g_canvas_1 = require("@antv/g-canvas");
const placement_1 = require("../../utils/placement");
const dom_1 = require("./dom");
/**
 * <zh/> 创建插件画布
 *
 * <en/> Create a plugin canvas
 * @param options - <zh/> 配置项 | <en/> options
 * @returns <zh/> [容器, 画布] | <en/> [container, canvas]
 */
function createPluginCanvas(options) {
    const { width, height, renderer } = options;
    const $container = getContainer(options);
    const canvas = new g_1.Canvas({
        width,
        height,
        container: $container,
        renderer: renderer || new g_canvas_1.Renderer(),
    });
    return [$container, canvas];
}
/**
 * <zh/> 获取容器
 *
 * <en/> Get container
 * @param options - <zh/> 配置项 | <en/> options
 * @returns <zh/> 容器 | <en/> container
 */
function getContainer(options) {
    var _a;
    const { container, className, graphCanvas } = options;
    if (container) {
        return typeof container === 'string' ? document.getElementById(container) : container;
    }
    const $container = (0, dom_1.createPluginContainer)(className, false);
    const { width, height, containerStyle } = options;
    const [x, y] = computePosition(options);
    Object.assign($container.style, Object.assign({ position: 'absolute', left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px' }, containerStyle));
    (_a = graphCanvas.getContainer()) === null || _a === void 0 ? void 0 : _a.appendChild($container);
    return $container;
}
/**
 * <zh/> 计算容器位置
 *
 * <en/> Compute the position of the container
 * @param options - <zh/> 配置项 | <en/> options
 * @returns <zh/> 位置 | <en/> position
 */
function computePosition(options) {
    const { width, height, placement, graphCanvas } = options;
    const [W, H] = graphCanvas.getSize();
    const [xRatio, yRatio] = (0, placement_1.parsePlacement)(placement);
    return [xRatio * (W - width), yRatio * (H - height)];
}
//# sourceMappingURL=canvas.js.map