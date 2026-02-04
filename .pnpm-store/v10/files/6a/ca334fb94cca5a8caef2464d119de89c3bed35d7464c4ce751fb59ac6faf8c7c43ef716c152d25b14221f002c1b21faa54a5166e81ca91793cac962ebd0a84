var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { CanvasEvent, Canvas as GCanvas } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as DragNDropPlugin } from '@antv/g-plugin-dragndrop';
import { createDOM } from '@antv/util';
import { getBBoxSize, getCombinedBBox } from '../utils/bbox';
import { parsePoint, toPointObject } from '../utils/point';
const SINGLE_LAYER_NAME = ['main'];
const MULTI_LAYER_NAME = ['background', 'main', 'label', 'transient'];
/**
 * <zh/> 获取主画布图层
 *
 * <en/> Get the main canvas layer
 * @param layers - <zh/> 画布图层 | <en/> Canvas layer
 * @returns <zh/> 主画布图层 | <en/> Main canvas layer
 */
function getMainLayerOf(layers) {
    return layers.main;
}
export class Canvas {
    getConfig() {
        return this.config;
    }
    getLayer(layer = 'main') {
        return this.extends.layers[layer] || getMainLayerOf(this.getLayers());
    }
    /**
     * <zh/> 获取所有图层
     *
     * <en/> Get all layers
     * @returns <zh/> 图层 <en/> Layer
     */
    getLayers() {
        return this.extends.layers;
    }
    /**
     * <zh/> 获取渲染器
     *
     * <en/> Get renderer
     * @param layer - <zh/> 图层 <en/> Layer
     * @returns <zh/> 渲染器 <en/> Renderer
     */
    getRenderer(layer) {
        return this.extends.renderers[layer];
    }
    /**
     * <zh/> 获取相机
     *
     * <en/> Get camera
     * @param layer - <zh/> 图层 <en/> Layer
     * @returns <zh/> 相机 <en/> Camera
     */
    getCamera(layer = 'main') {
        return this.getLayer(layer).getCamera();
    }
    getRoot(layer = 'main') {
        return this.getLayer(layer).getRoot();
    }
    getContextService(layer = 'main') {
        return this.getLayer(layer).getContextService();
    }
    setCursor(cursor) {
        this.config.cursor = cursor;
        this.getLayer().setCursor(cursor);
    }
    get document() {
        return this.getLayer().document;
    }
    get context() {
        return this.getLayer().context;
    }
    constructor(config) {
        this.config = {
            enableMultiLayer: true,
        };
        Object.assign(this.config, config);
        const _a = this.config, { renderer, background, cursor, enableMultiLayer } = _a, restConfig = __rest(_a, ["renderer", "background", "cursor", "enableMultiLayer"]);
        const layersName = enableMultiLayer ? MULTI_LAYER_NAME : SINGLE_LAYER_NAME;
        const renderers = createRenderers(renderer, layersName);
        const layers = Object.fromEntries(layersName.map((layer) => {
            const canvas = new GCanvas(Object.assign(Object.assign({}, restConfig), { supportsMutipleCanvasesInOneContainer: enableMultiLayer, renderer: renderers[layer], background: enableMultiLayer ? (layer === 'background' ? background : undefined) : background }));
            return [layer, canvas];
        }));
        configCanvasDom(layers);
        this.extends = {
            config: this.config,
            renderer,
            renderers,
            layers,
        };
    }
    get ready() {
        return Promise.all(Object.entries(this.getLayers()).map(([, canvas]) => canvas.ready));
    }
    resize(width, height) {
        Object.assign(this.extends.config, { width, height });
        Object.values(this.getLayers()).forEach((canvas) => {
            const camera = canvas.getCamera();
            const position = camera.getPosition();
            const focalPoint = camera.getFocalPoint();
            canvas.resize(width, height);
            camera.setPosition(position);
            camera.setFocalPoint(focalPoint);
        });
    }
    /**
     * <zh/> 获取画布边界
     *
     * <en/> Get canvas boundary
     * @param group
     * <zh/> 元素分组
     * - undefined: 获取整个画布边界
     * - 'elements': 仅获取元素边界
     * - 'plugins': 仅获取插件边界
     *
     * <en/> Element group
     * - undefined: Get the entire canvas boundary
     * - 'elements': Get only the element boundary
     * - 'plugins': Get only the plugin boundary
     * @returns <zh/> 边界 <en/> Boundary
     */
    getBounds(group) {
        return getCombinedBBox(Object.values(this.getLayers())
            .map((canvas) => {
            const g = group
                ? canvas
                    .getRoot()
                    .childNodes.find((node) => node.classList.includes(group))
                : canvas.getRoot();
            return g;
        })
            .filter((el) => (el === null || el === void 0 ? void 0 : el.childNodes.length) > 0)
            .map((el) => el.getBounds()));
    }
    getContainer() {
        const container = this.extends.config.container;
        return typeof container === 'string' ? document.getElementById(container) : container;
    }
    getSize() {
        return [this.extends.config.width || 0, this.extends.config.height || 0];
    }
    appendChild(child, index) {
        var _a;
        const layer = (((_a = child.style) === null || _a === void 0 ? void 0 : _a.$layer) || 'main');
        return this.getLayer(layer).appendChild(child, index);
    }
    setRenderer(renderer) {
        if (renderer === this.extends.renderer)
            return;
        const renderers = createRenderers(renderer, this.config.enableMultiLayer ? MULTI_LAYER_NAME : SINGLE_LAYER_NAME);
        this.extends.renderers = renderers;
        Object.entries(renderers).forEach(([layer, instance]) => this.getLayer(layer).setRenderer(instance));
        configCanvasDom(this.getLayers());
    }
    getCanvasByViewport(point) {
        return parsePoint(this.getLayer().viewport2Canvas(toPointObject(point)));
    }
    getViewportByCanvas(point) {
        return parsePoint(this.getLayer().canvas2Viewport(toPointObject(point)));
    }
    getViewportByClient(point) {
        return parsePoint(this.getLayer().client2Viewport(toPointObject(point)));
    }
    getClientByViewport(point) {
        return parsePoint(this.getLayer().viewport2Client(toPointObject(point)));
    }
    getClientByCanvas(point) {
        return this.getClientByViewport(this.getViewportByCanvas(point));
    }
    getCanvasByClient(point) {
        const main = this.getLayer();
        const viewportPoint = main.client2Viewport(toPointObject(point));
        return parsePoint(main.viewport2Canvas(viewportPoint));
    }
    toDataURL() {
        return __awaiter(this, arguments, void 0, function* (options = {}) {
            const devicePixelRatio = globalThis.devicePixelRatio || 1;
            const { mode = 'viewport' } = options, restOptions = __rest(options, ["mode"]);
            let [startX, startY, width, height] = [0, 0, 0, 0];
            if (mode === 'viewport') {
                [width, height] = this.getSize();
            }
            else if (mode === 'overall') {
                const bounds = this.getBounds();
                const size = getBBoxSize(bounds);
                [startX, startY] = bounds.min;
                [width, height] = size;
            }
            const container = createDOM('<div id="virtual-image"></div>');
            const offscreenCanvas = new GCanvas({
                width,
                height,
                renderer: new CanvasRenderer(),
                devicePixelRatio,
                container,
                background: this.extends.config.background,
            });
            yield offscreenCanvas.ready;
            offscreenCanvas.appendChild(this.getLayer('background').getRoot().cloneNode(true));
            offscreenCanvas.appendChild(this.getRoot().cloneNode(true));
            // Handle label canvas
            const label = this.getLayer('label').getRoot().cloneNode(true);
            const originCanvasPosition = offscreenCanvas.viewport2Canvas({ x: 0, y: 0 });
            const currentCanvasPosition = this.getCanvasByViewport([0, 0]);
            label.translate([
                currentCanvasPosition[0] - originCanvasPosition.x,
                currentCanvasPosition[1] - originCanvasPosition.y,
            ]);
            label.scale(1 / this.getCamera().getZoom());
            offscreenCanvas.appendChild(label);
            offscreenCanvas.appendChild(this.getLayer('transient').getRoot().cloneNode(true));
            const camera = this.getCamera();
            const offscreenCamera = offscreenCanvas.getCamera();
            if (mode === 'viewport') {
                offscreenCamera.setZoom(camera.getZoom());
                offscreenCamera.setPosition(camera.getPosition());
                offscreenCamera.setFocalPoint(camera.getFocalPoint());
            }
            else if (mode === 'overall') {
                const [x, y, z] = offscreenCamera.getPosition();
                const [fx, fy, fz] = offscreenCamera.getFocalPoint();
                offscreenCamera.setPosition([x + startX, y + startY, z]);
                offscreenCamera.setFocalPoint([fx + startX, fy + startY, fz]);
            }
            const contextService = offscreenCanvas.getContextService();
            return new Promise((resolve) => {
                offscreenCanvas.addEventListener(CanvasEvent.RERENDER, () => __awaiter(this, void 0, void 0, function* () {
                    // 等待图片渲染完成 / Wait for the image to render
                    yield new Promise((r) => setTimeout(r, 300));
                    const url = yield contextService.toDataURL(restOptions);
                    resolve(url);
                }));
            });
        });
    }
    destroy() {
        Object.values(this.getLayers()).forEach((canvas) => {
            const camera = canvas.getCamera();
            camera.cancelLandmarkAnimation();
            canvas.destroy();
        });
    }
}
/**
 * <zh/> 创建渲染器
 *
 * <en/> Create renderers
 * @param renderer - <zh/> 渲染器创建器 <en/> Renderer creator
 * @param layersName - <zh/> 图层名称 <en/> Layer name
 * @returns <zh/> 渲染器 <en/> Renderer
 */
function createRenderers(renderer, layersName) {
    return Object.fromEntries(layersName.map((layer) => {
        const instance = (renderer === null || renderer === void 0 ? void 0 : renderer(layer)) || new CanvasRenderer();
        if (instance instanceof CanvasRenderer) {
            instance.setConfig({ enableDirtyRectangleRendering: false });
        }
        if (layer === 'main') {
            instance.registerPlugin(new DragNDropPlugin({
                isDocumentDraggable: true,
                isDocumentDroppable: true,
                dragstartDistanceThreshold: 10,
                dragstartTimeThreshold: 100,
            }));
        }
        else {
            instance.unregisterPlugin(instance.getPlugin('dom-interaction'));
        }
        return [layer, instance];
    }));
}
/**
 * <zh/> 配置画布 DOM
 *
 * <en/> Configure canvas DOM
 * @param layers - <zh/> 画布 <en/> Canvas
 */
function configCanvasDom(layers) {
    Object.entries(layers).forEach(([layer, canvas]) => {
        const domElement = canvas.getContextService().getDomElement();
        // 浏览器环境下，设置画布样式
        // Set canvas style in browser environment
        if (domElement === null || domElement === void 0 ? void 0 : domElement.style) {
            domElement.style.gridArea = '1 / 1 / 2 / 2';
            domElement.style.outline = 'none';
            domElement.tabIndex = 1;
            if (layer !== 'main')
                domElement.style.pointerEvents = 'none';
        }
        if (domElement === null || domElement === void 0 ? void 0 : domElement.parentElement) {
            domElement.parentElement.style.display = 'grid';
            // 给父元素设置独立的层叠上下文，避免外部元素影响内部的层叠逻辑
            domElement.parentElement.style.isolation = 'isolate';
        }
    });
}
//# sourceMappingURL=canvas.js.map