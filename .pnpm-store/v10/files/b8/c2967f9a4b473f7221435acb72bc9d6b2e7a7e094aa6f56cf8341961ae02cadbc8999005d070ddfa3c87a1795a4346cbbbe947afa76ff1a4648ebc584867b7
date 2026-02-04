"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runtime = exports.G2_CHART_KEY = void 0;
const g_1 = require("@antv/g");
const g_canvas_1 = require("@antv/g-canvas");
const g_plugin_dragndrop_1 = require("@antv/g-plugin-dragndrop");
const util_1 = require("@antv/util");
const event_emitter_1 = __importDefault(require("@antv/event-emitter"));
const d3_array_1 = require("@antv/vendor/d3-array");
const runtime_1 = require("../runtime");
const event_1 = require("../utils/event");
const tooltip_1 = require("../interaction/tooltip");
const helper_1 = require("../utils/helper");
const utils_1 = require("../interaction/utils");
const utils_2 = require("./utils");
const composition_1 = require("./composition");
const define_1 = require("./define");
const mark_1 = require("./mark");
const library_1 = require("./library");
exports.G2_CHART_KEY = 'G2_CHART_KEY';
class Runtime extends composition_1.CompositionNode {
    constructor(options) {
        const { container, canvas, renderer, plugins, lib, createCanvas } = options, rest = __rest(options, ["container", "canvas", "renderer", "plugins", "lib", "createCanvas"]);
        super(rest, 'view');
        // Identifies whether bindAutoFit.
        this._hasBindAutoFit = false;
        this._rendering = false;
        this._trailingClear = null;
        this._trailing = false;
        this._trailingResolve = null;
        this._trailingReject = null;
        this._previousDefinedType = null;
        this._onResize = (0, util_1.debounce)(() => {
            this.forceFit();
        }, 300);
        this._renderer = renderer || new g_canvas_1.Renderer();
        this._plugins = plugins || [];
        this._container = (0, utils_2.normalizeContainer)(container);
        this._emitter = new event_emitter_1.default();
        this._context = {
            library: Object.assign(Object.assign({}, lib), library_1.library),
            emitter: this._emitter,
            canvas,
            createCanvas,
        };
        this._create();
    }
    render() {
        if (this._rendering)
            return this._addToTrailing();
        if (!this._context.canvas)
            this._createCanvas();
        this._bindAutoFit();
        this._rendering = true;
        // @fixme The cancel render is not marked, which will cause additional rendered event.
        // @ref src/runtime/render.ts
        const finished = new Promise((resolve, reject) => (0, runtime_1.render)(this._computedOptions(), this._context, this._createResolve(resolve), this._createReject(reject)));
        const [finished1, resolve, reject] = (0, utils_2.createEmptyPromise)();
        finished
            .then(resolve)
            .then(() => {
            // Resolve trailing clear.
            if (this._trailingClear) {
                const options = this.options();
                this._trailingClear();
                // If clear is called during trailing, recover options for next trailing render.
                if (this._trailing)
                    this.options(options);
            }
        })
            .catch(reject)
            .then(() => {
            this._trailingClear = null;
            this._renderTrailing();
        });
        return finished1;
    }
    /**
     * @overload
     * @param {G2ViewTree} [options]
     * @returns {Runtime|Spec}
     */
    options(options) {
        if (arguments.length === 0)
            return (0, utils_2.optionsOf)(this);
        const { type } = options;
        if (type)
            this._previousDefinedType = type;
        (0, utils_2.updateRoot)(this, options, this._previousDefinedType, this._marks, this._compositions);
        return this;
    }
    getContainer() {
        return this._container;
    }
    getContext() {
        return this._context;
    }
    on(event, callback, once) {
        this._emitter.on(event, callback, once);
        return this;
    }
    once(event, callback) {
        this._emitter.once(event, callback);
        return this;
    }
    emit(event, ...args) {
        this._emitter.emit(event, ...args);
        return this;
    }
    off(event, callback) {
        this._emitter.off(event, callback);
        return this;
    }
    clear(isClearEvents = true) {
        // Clear after render, otherwise render with destroyed context will return infinite promise, which will block trialing render.
        if (this._rendering) {
            this._trailingClear = () => {
                this.clear(isClearEvents);
            };
            // Only reset options, not destroy canvas.
            this._reset();
            return;
        }
        const options = this.options();
        this.emit(event_1.ChartEvent.BEFORE_CLEAR);
        this._reset();
        (0, runtime_1.destroy)(options, this._context, false, isClearEvents);
        this.emit(event_1.ChartEvent.AFTER_CLEAR);
    }
    destroy() {
        const options = this.options();
        this.emit(event_1.ChartEvent.BEFORE_DESTROY);
        this._unbindAutoFit();
        this._reset();
        (0, runtime_1.destroy)(options, this._context, true);
        if (this._container[utils_2.REMOVE_FLAG])
            (0, utils_2.removeContainer)(this._container);
        this.emit(event_1.ChartEvent.AFTER_DESTROY);
    }
    forceFit() {
        // Don't fit if size do not change.
        this.options['autoFit'] = true;
        const { width, height } = (0, utils_2.sizeOf)(this.options(), this._container);
        if (width === this._width && height === this._height) {
            return Promise.resolve(this);
        }
        // Don't call changeSize to prevent update width and height of options.
        this.emit(event_1.ChartEvent.BEFORE_CHANGE_SIZE);
        const finished = this.render();
        finished.then(() => {
            this.emit(event_1.ChartEvent.AFTER_CHANGE_SIZE);
        });
        return finished;
    }
    changeSize(width, height) {
        if (width === this._width && height === this._height) {
            return Promise.resolve(this);
        }
        this.emit(event_1.ChartEvent.BEFORE_CHANGE_SIZE);
        this.attr('width', width);
        this.attr('height', height);
        const finished = this.render();
        finished.then(() => {
            this.emit(event_1.ChartEvent.AFTER_CHANGE_SIZE);
        });
        return finished;
    }
    getDataByXY(point, options = {}) {
        const { shared = false, series, facet = false, startX = 0, startY = 0, } = options;
        const { canvas, views } = this._context;
        const { document } = canvas;
        const { x, y } = point;
        // Temporarily do not handle the multi - view situation.
        const { coordinate, scale, markState, data: dataMap, key } = views[0];
        const elements = document.getElementsByClassName(runtime_1.ELEMENT_CLASS_NAME);
        const groupKey = shared ? (element) => element.__data__.x : (d) => d;
        const keyGroup = (0, d3_array_1.group)(elements, groupKey);
        const container = document.getElementsByClassName(runtime_1.VIEW_CLASS_NAME)[0];
        const root = (0, utils_1.selectPlotArea)(container);
        const hasSeriesInteraction = (markState) => {
            return Array.from(markState.values()).some((d) => {
                var _a, _b;
                return ((_a = d.interaction) === null || _a === void 0 ? void 0 : _a['seriesTooltip']) ||
                    ((_b = d.channels) === null || _b === void 0 ? void 0 : _b.some((c) => c.name === 'series' && c.values !== undefined));
            });
        };
        const isSeries = (0, tooltip_1.maybeValue)(series, hasSeriesInteraction(markState));
        const getElementData = (el) => (0, util_1.get)(el, '__data__.data', null);
        const getElementsData = (els) => els.map(getElementData);
        try {
            // For non-facet and series chart.
            if (isSeries &&
                hasSeriesInteraction(markState) &&
                !facet) {
                const { selectedData } = (0, tooltip_1.findSeriesElement)({
                    root,
                    event: { offsetX: x, offsetY: y },
                    elements,
                    coordinate,
                    scale,
                    startX,
                    startY,
                });
                const viewData = dataMap.get(`${key}-0`);
                return selectedData.map(({ index }) => viewData[index]);
            }
            // For single chart.
            const element = (0, tooltip_1.findSingleElement)({
                root,
                event: { offsetX: x, offsetY: y },
                elements,
                coordinate,
                scale,
                shared,
            });
            if ((0, helper_1.isHeatmap)(element))
                return (0, helper_1.dataOf)(element, dataMap.get(key));
            const k = groupKey(element);
            const groupElements = keyGroup.get(k);
            return groupElements ? getElementsData(groupElements) : [];
        }
        catch (e) {
            const topMostElement = canvas.document.elementFromPointSync(x, y);
            return topMostElement ? getElementData(topMostElement) : [];
        }
    }
    _create() {
        const { library } = this._context;
        // @todo After refactor component as mark, remove this.
        const isMark = (key) => key.startsWith('mark.') ||
            key === 'component.axisX' ||
            key === 'component.axisY' ||
            key === 'component.legends';
        const marks = [
            'mark.mark', // chart.mark(composite)
            ...Object.keys(library).filter(isMark),
        ];
        // Create mark generators.
        this._marks = {};
        for (const key of marks) {
            const name = key.split('.').pop();
            class Mark extends mark_1.MarkNode {
                constructor() {
                    super({}, name);
                }
            }
            this._marks[name] = Mark;
            this[name] = function (composite) {
                const node = this.append(Mark);
                if (name === 'mark')
                    node.type = composite;
                return node;
            };
        }
        // Create composition generators.
        const compositions = [
            'composition.view', // chat.view()
            ...Object.keys(library).filter((key) => key.startsWith('composition.') && key !== 'composition.mark'),
        ];
        this._compositions = Object.fromEntries(compositions.map((key) => {
            const name = key.split('.').pop();
            let Composition = class Composition extends composition_1.CompositionNode {
                constructor() {
                    super({}, name);
                }
            };
            Composition = __decorate([
                (0, define_1.defineProps)((0, define_1.nodeProps)(this._marks))
            ], Composition);
            return [name, Composition];
        }));
        for (const Ctor of Object.values(this._compositions)) {
            (0, define_1.defineProps)((0, define_1.nodeProps)(this._compositions))(Ctor);
        }
        for (const key of compositions) {
            const name = key.split('.').pop();
            this[name] = function () {
                const Composition = this._compositions[name];
                this.type = null;
                return this.append(Composition);
            };
        }
    }
    _reset() {
        const KEYS = ['theme', 'type', 'width', 'height', 'autoFit'];
        this.type = 'view';
        this.value = Object.fromEntries(Object.entries(this.value).filter(([key]) => key.startsWith('margin') ||
            key.startsWith('padding') ||
            key.startsWith('inset') ||
            KEYS.includes(key)));
        this.children = [];
    }
    _renderTrailing() {
        if (!this._trailing)
            return;
        this._trailing = false;
        this.render()
            .then(() => {
            const trailingResolve = this._trailingResolve.bind(this);
            this._trailingResolve = null;
            trailingResolve(this);
        })
            .catch((error) => {
            const trailingReject = this._trailingReject.bind(this);
            this._trailingReject = null;
            trailingReject(error);
        });
    }
    _createResolve(resolve) {
        return () => {
            this._rendering = false;
            resolve(this);
        };
    }
    _createReject(reject) {
        return (error) => {
            this._rendering = false;
            reject(error);
        };
    }
    // Update actual size and key.
    _computedOptions() {
        const options = this.options();
        const { key = exports.G2_CHART_KEY } = options;
        const { width, height, depth } = (0, utils_2.sizeOf)(options, this._container);
        this._width = width;
        this._height = height;
        this._key = key;
        return Object.assign(Object.assign({ key: this._key }, options), { width, height, depth });
    }
    // Create canvas if it does not exist.
    // DragAndDropPlugin is for interaction.
    // It is OK to register more than one time, G will handle this.
    _createCanvas() {
        var _a, _b;
        const { width, height } = (0, utils_2.sizeOf)(this.options(), this._container);
        this._plugins.push(new g_plugin_dragndrop_1.Plugin());
        this._plugins.forEach((d) => this._renderer.registerPlugin(d));
        this._context.canvas = new g_1.Canvas({
            container: this._container,
            width,
            height,
            renderer: this._renderer,
        });
        const dom = (_b = (_a = this._context.canvas) === null || _a === void 0 ? void 0 : _a.getContextService()) === null || _b === void 0 ? void 0 : _b.getDomElement();
        if (dom)
            dom.style.display = 'block';
    }
    _addToTrailing() {
        var _a;
        // Resolve previous promise, and give up this task.
        (_a = this._trailingResolve) === null || _a === void 0 ? void 0 : _a.call(this, this);
        // Create new task.
        this._trailing = true;
        const promise = new Promise((resolve, reject) => {
            this._trailingResolve = resolve;
            this._trailingReject = reject;
        });
        return promise;
    }
    _bindAutoFit() {
        const options = this.options();
        const { autoFit } = options;
        if (this._hasBindAutoFit) {
            // If it was bind before, unbind it now.
            if (!autoFit)
                this._unbindAutoFit();
            return;
        }
        if (autoFit) {
            this._hasBindAutoFit = true;
            window.addEventListener('resize', this._onResize);
        }
    }
    _unbindAutoFit() {
        if (this._hasBindAutoFit) {
            this._hasBindAutoFit = false;
            window.removeEventListener('resize', this._onResize);
        }
    }
}
exports.Runtime = Runtime;
//# sourceMappingURL=runtime.js.map