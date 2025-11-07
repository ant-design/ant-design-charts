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
exports.ElementController = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const element_1 = require("../constants/element");
const get_1 = require("../registry/get");
const cache_1 = require("../utils/cache");
const change_1 = require("../utils/change");
const collapsibility_1 = require("../utils/collapsibility");
const element_2 = require("../utils/element");
const event_1 = require("../utils/event");
const id_1 = require("../utils/id");
const palette_1 = require("../utils/palette");
const position_1 = require("../utils/position");
const print_1 = require("../utils/print");
const style_1 = require("../utils/style");
const theme_1 = require("../utils/theme");
const vector_1 = require("../utils/vector");
const visibility_1 = require("../utils/visibility");
class ElementController {
    constructor(context) {
        this.elementMap = {};
        this.shapeTypeMap = {};
        this.paletteStyle = {};
        this.defaultStyle = {};
        this.stateStyle = {};
        this.visibilityCache = new WeakMap();
        this.context = context;
    }
    init() {
        this.initContainer();
    }
    initContainer() {
        if (!this.container || this.container.destroyed) {
            const { canvas } = this.context;
            this.container = canvas.appendChild(new g_1.Group({ className: 'elements' }));
        }
    }
    emit(event, context) {
        if (context.silence)
            return;
        (0, event_1.emit)(this.context.graph, event);
    }
    forEachElementData(callback) {
        element_1.ELEMENT_TYPES.forEach((elementType) => {
            const elementData = this.context.model.getElementsDataByType(elementType);
            callback(elementType, elementData);
        });
    }
    getElementType(elementType, datum) {
        var _a;
        const { options, graph } = this.context;
        const userDefinedType = ((_a = options[elementType]) === null || _a === void 0 ? void 0 : _a.type) || datum.type;
        if (!userDefinedType) {
            if (elementType === 'edge')
                return 'line';
            // node / combo
            else
                return 'circle';
        }
        if (typeof userDefinedType === 'string')
            return userDefinedType;
        // @ts-expect-error skip type check
        return userDefinedType.call(graph, datum);
    }
    getTheme(elementType) {
        return (0, theme_1.themeOf)(this.context.options)[elementType] || {};
    }
    getThemeStyle(elementType) {
        return this.getTheme(elementType).style || {};
    }
    getThemeStateStyle(elementType, states) {
        const { state = {} } = this.getTheme(elementType);
        return Object.assign({}, ...states.map((name) => state[name] || {}));
    }
    computePaletteStyle() {
        const { options } = this.context;
        this.paletteStyle = {};
        this.forEachElementData((elementType, elementData) => {
            var _a, _b;
            const palette = Object.assign({}, (0, palette_1.parsePalette)((_a = this.getTheme(elementType)) === null || _a === void 0 ? void 0 : _a.palette), (0, palette_1.parsePalette)((_b = options[elementType]) === null || _b === void 0 ? void 0 : _b.palette));
            if (palette === null || palette === void 0 ? void 0 : palette.field) {
                Object.assign(this.paletteStyle, (0, palette_1.assignColorByPalette)(elementData, palette));
            }
        });
    }
    getPaletteStyle(elementType, id) {
        const color = this.paletteStyle[id];
        if (!color)
            return {};
        if (elementType === 'edge')
            return { stroke: color };
        return { fill: color };
    }
    /**
     * <zh/> 计算单个元素的默认样式
     *
     * <en/> compute default style of single element
     */
    computeElementDefaultStyle(elementType, context) {
        var _a;
        const { options } = this.context;
        const defaultStyle = ((_a = options[elementType]) === null || _a === void 0 ? void 0 : _a.style) || {};
        if ('transform' in defaultStyle && Array.isArray(defaultStyle.transform)) {
            defaultStyle.transform = [...defaultStyle.transform];
        }
        this.defaultStyle[(0, id_1.idOf)(context.datum)] = (0, style_1.computeElementCallbackStyle)(defaultStyle, context);
    }
    computeElementsDefaultStyle(ids) {
        const { graph } = this.context;
        this.forEachElementData((elementType, elementData) => {
            const length = elementData.length;
            for (let i = 0; i < length; i++) {
                const datum = elementData[i];
                if (ids === undefined || ids.includes((0, id_1.idOf)(datum))) {
                    this.computeElementDefaultStyle(elementType, { datum, graph });
                }
            }
        });
    }
    getDefaultStyle(id) {
        return this.defaultStyle[id] || {};
    }
    getElementState(id) {
        try {
            const { model } = this.context;
            return model.getElementState(id);
        }
        catch (_a) {
            return [];
        }
    }
    /**
     * <zh/> 获取单个元素的单个状态的样式
     *
     * <en/> get single state style of single element
     */
    getElementStateStyle(elementType, state, context) {
        var _a, _b;
        const { options } = this.context;
        const stateStyle = ((_b = (_a = options[elementType]) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b[state]) || {};
        return (0, style_1.computeElementCallbackStyle)(stateStyle, context);
    }
    /**
     * <zh/> 计算单个元素的合并状态样式
     *
     * <en/> compute merged state style of single element
     */
    computeElementStatesStyle(elementType, states, context) {
        this.stateStyle[(0, id_1.idOf)(context.datum)] = Object.assign({}, ...states.map((state) => this.getElementStateStyle(elementType, state, context)));
    }
    /**
     * <zh/> 计算全部元素的状态样式
     *
     * <en/> compute state style of all elements
     * @param ids - <zh/> 计算指定元素的状态样式 | <en/> compute state style of specified elements
     */
    computeElementsStatesStyle(ids) {
        const { graph } = this.context;
        this.forEachElementData((elementType, elementData) => {
            const length = elementData.length;
            for (let i = 0; i < length; i++) {
                const datum = elementData[i];
                if (ids === undefined || ids.includes((0, id_1.idOf)(datum))) {
                    const states = this.getElementState((0, id_1.idOf)(datum));
                    this.computeElementStatesStyle(elementType, states, { datum, graph });
                }
            }
        });
    }
    getStateStyle(id) {
        return this.stateStyle[id] || {};
    }
    computeStyle(stage, ids) {
        const skip = ['translate', 'zIndex'];
        if (stage && skip.includes(stage))
            return;
        this.computePaletteStyle();
        this.computeElementsDefaultStyle(ids);
        this.computeElementsStatesStyle(ids);
    }
    getElement(id) {
        return this.elementMap[id];
    }
    getNodes() {
        return this.context.model.getNodeData().map(({ id }) => this.elementMap[id]);
    }
    getEdges() {
        return this.context.model.getEdgeData().map((edge) => this.elementMap[(0, id_1.idOf)(edge)]);
    }
    getCombos() {
        return this.context.model.getComboData().map(({ id }) => this.elementMap[id]);
    }
    getElementComputedStyle(elementType, datum) {
        const id = (0, id_1.idOf)(datum);
        // 优先级(从低到高) Priority (from low to high):
        const themeStyle = this.getThemeStyle(elementType);
        const paletteStyle = this.getPaletteStyle(elementType, id);
        const dataStyle = datum.style || {};
        const defaultStyle = this.getDefaultStyle(id);
        const themeStateStyle = this.getThemeStateStyle(elementType, this.getElementState(id));
        const stateStyle = this.getStateStyle(id);
        const style = Object.assign({}, themeStyle, paletteStyle, dataStyle, defaultStyle, themeStateStyle, stateStyle);
        if (elementType === 'combo') {
            const childrenData = this.context.model.getChildrenData(id);
            const isCollapsed = !!style.collapsed;
            const childrenNode = isCollapsed ? [] : childrenData.map(id_1.idOf).filter((id) => this.getElement(id));
            Object.assign(style, { childrenNode, childrenData });
        }
        return style;
    }
    getDrawData(context) {
        this.init();
        const data = this.computeChangesAndDrawData(context);
        if (!data)
            return null;
        const { type = 'draw', stage = type } = context;
        this.markDestroyElement(data.drawData);
        // 计算样式 / Calculate style
        this.computeStyle(stage);
        return { type, stage, data };
    }
    /**
     * <zh/> 开始绘制流程
     *
     * <en/> start render process
     */
    draw(context = { animation: true }) {
        const drawData = this.getDrawData(context);
        if (!drawData)
            return;
        const { data: { drawData: { add, update, remove }, }, } = drawData;
        this.destroyElements(remove, context);
        this.createElements(add, context);
        this.updateElements(update, context);
        return this.setAnimationTask(context, drawData);
    }
    preLayoutDraw() {
        return __awaiter(this, arguments, void 0, function* (context = { animation: true }) {
            var _a, _b;
            const preResult = this.getDrawData(context);
            if (!preResult)
                return;
            const { data: { drawData }, } = preResult;
            yield ((_b = (_a = this.context.layout) === null || _a === void 0 ? void 0 : _a.preLayout) === null || _b === void 0 ? void 0 : _b.call(_a, drawData));
            const { add, update, remove } = drawData;
            this.destroyElements(remove, context);
            this.createElements(add, context);
            this.updateElements(update, context);
            return this.setAnimationTask(context, preResult);
        });
    }
    setAnimationTask(context, data) {
        const { animation, silence } = context;
        const { data: { dataChanges, drawData }, stage, type, } = data;
        return this.context.animation.animate(animation, silence
            ? {}
            : {
                before: () => this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BEFORE_DRAW, {
                    dataChanges,
                    animation,
                    stage,
                    render: type === 'render',
                }), context),
                beforeAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.BEFORE_ANIMATE, constants_1.AnimationType.DRAW, animation, drawData), context),
                afterAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.AFTER_ANIMATE, constants_1.AnimationType.DRAW, animation, drawData), context),
                after: () => this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.AFTER_DRAW, {
                    dataChanges,
                    animation,
                    stage,
                    render: type === 'render',
                    firstRender: this.context.graph.rendered === false,
                }), context),
            });
    }
    computeChangesAndDrawData(context) {
        const { model } = this.context;
        const dataChanges = model.getChanges();
        const tasks = (0, change_1.reduceDataChanges)(dataChanges);
        if (tasks.length === 0)
            return null;
        const { NodeAdded = [], NodeUpdated = [], NodeRemoved = [], EdgeAdded = [], EdgeUpdated = [], EdgeRemoved = [], ComboAdded = [], ComboUpdated = [], ComboRemoved = [], } = (0, util_1.groupBy)(tasks, (change) => change.type);
        const dataOf = (data) => new Map(data.map((datum) => {
            const data = datum.value;
            return [(0, id_1.idOf)(data), data];
        }));
        const input = {
            add: {
                nodes: dataOf(NodeAdded),
                edges: dataOf(EdgeAdded),
                combos: dataOf(ComboAdded),
            },
            update: {
                nodes: dataOf(NodeUpdated),
                edges: dataOf(EdgeUpdated),
                combos: dataOf(ComboUpdated),
            },
            remove: {
                nodes: dataOf(NodeRemoved),
                edges: dataOf(EdgeRemoved),
                combos: dataOf(ComboRemoved),
            },
        };
        const drawData = this.transformData(input, context);
        // 清空变更 / Clear changes
        model.clearChanges();
        return { dataChanges, drawData };
    }
    transformData(input, context) {
        const transforms = this.context.transform.getTransformInstance();
        return Object.values(transforms).reduce((data, transform) => transform.beforeDraw(data, context), input);
    }
    createElement(elementType, datum, context) {
        var _a;
        const id = (0, id_1.idOf)(datum);
        const currentElement = this.getElement(id);
        if (currentElement)
            return;
        const type = this.getElementType(elementType, datum);
        const style = this.getElementComputedStyle(elementType, datum);
        // get shape constructor
        const Ctor = (0, get_1.getExtension)(elementType, type);
        if (!Ctor)
            return print_1.print.warn(`The element ${type} of ${elementType} is not registered.`);
        this.emit(new event_1.ElementLifeCycleEvent(constants_1.GraphEvent.BEFORE_ELEMENT_CREATE, elementType, datum), context);
        const element = this.container.appendChild(new Ctor({
            id,
            context: this.context,
            style,
        }));
        this.shapeTypeMap[id] = type;
        this.elementMap[id] = element;
        const { stage = 'enter' } = context;
        (_a = this.context.animation) === null || _a === void 0 ? void 0 : _a.add({
            element,
            elementType,
            stage,
            originalStyle: Object.assign({}, element.attributes),
            updatedStyle: style,
        }, {
            after: () => {
                var _a;
                this.emit(new event_1.ElementLifeCycleEvent(constants_1.GraphEvent.AFTER_ELEMENT_CREATE, elementType, datum), context);
                (_a = element.onCreate) === null || _a === void 0 ? void 0 : _a.call(element);
            },
        });
    }
    createElements(data, context) {
        const { nodes, edges, combos } = data;
        const iteration = [
            ['node', nodes],
            ['combo', combos],
            ['edge', edges],
        ];
        iteration.forEach(([elementType, elementData]) => {
            elementData.forEach((datum) => this.createElement(elementType, datum, context));
        });
    }
    getUpdateStageStyle(elementType, datum, context) {
        const { stage = 'update' } = context;
        // 优化 translate 阶段，直接返回 x, y, z，避免计算样式
        // Optimize the translate stage, return x, y, z directly to avoid calculating style
        if (stage === 'translate') {
            if (elementType === 'node' || elementType === 'combo') {
                const { style: { x = 0, y = 0, z = 0 } = {} } = datum;
                return { x, y, z };
            }
            else
                return {};
        }
        return this.getElementComputedStyle(elementType, datum);
    }
    updateElement(elementType, datum, context) {
        var _a;
        const id = (0, id_1.idOf)(datum);
        const { stage = 'update' } = context;
        const element = this.getElement(id);
        if (!element)
            return () => null;
        this.emit(new event_1.ElementLifeCycleEvent(constants_1.GraphEvent.BEFORE_ELEMENT_UPDATE, elementType, datum), context);
        const type = this.getElementType(elementType, datum);
        const style = this.getUpdateStageStyle(elementType, datum, context);
        // 如果类型不同，需要先销毁原有元素，再创建新元素
        // If the type is different, you need to destroy the original element first, and then create a new element
        if (this.shapeTypeMap[id] !== type) {
            element.destroy();
            delete this.shapeTypeMap[id];
            delete this.elementMap[id];
            this.createElement(elementType, datum, { animation: false, silence: true });
        }
        const exactStage = stage !== 'visibility' ? stage : style.visibility === 'hidden' ? 'hide' : 'show';
        // 避免立即将 visibility 设置为 hidden，导致元素不可见，而是在 after 阶段再设置
        // Avoid setting visibility to hidden immediately, causing the element to be invisible, but set it in the after phase
        if (exactStage === 'hide')
            delete style['visibility'];
        (_a = this.context.animation) === null || _a === void 0 ? void 0 : _a.add({
            element,
            elementType,
            stage: exactStage,
            originalStyle: Object.assign({}, element.attributes),
            updatedStyle: style,
        }, {
            before: () => {
                // 通过 elementMap[id] 访问最新的 element，防止 type 不同导致的 element 丢失
                // Access the latest element through elementMap[id] to prevent the loss of element caused by different types
                const element = this.elementMap[id];
                if (stage !== 'collapse')
                    (0, element_2.updateStyle)(element, style);
                if (stage === 'visibility') {
                    // 缓存原始透明度 / Cache original opacity
                    // 会在 animation controller 中访问该缓存值 / The cached value will be accessed in the animation controller
                    if (!(0, cache_1.hasCachedStyle)(element, 'opacity'))
                        (0, cache_1.cacheStyle)(element, 'opacity');
                    this.visibilityCache.set(element, exactStage === 'show' ? 'visible' : 'hidden');
                    if (exactStage === 'show')
                        (0, visibility_1.setVisibility)(element, 'visible');
                }
            },
            after: () => {
                var _a;
                const element = this.elementMap[id];
                if (stage === 'collapse')
                    (0, element_2.updateStyle)(element, style);
                if (exactStage === 'hide')
                    (0, visibility_1.setVisibility)(element, this.visibilityCache.get(element));
                this.emit(new event_1.ElementLifeCycleEvent(constants_1.GraphEvent.AFTER_ELEMENT_UPDATE, elementType, datum), context);
                (_a = element.onUpdate) === null || _a === void 0 ? void 0 : _a.call(element);
            },
        });
    }
    updateElements(data, context) {
        const { nodes, edges, combos } = data;
        const iteration = [
            ['node', nodes],
            ['combo', combos],
            ['edge', edges],
        ];
        iteration.forEach(([elementType, elementData]) => {
            elementData.forEach((datum) => this.updateElement(elementType, datum, context));
        });
    }
    /**
     * <zh/> 标记销毁元素
     *
     * <en/> mark destroy element
     * @param data - <zh/> 绘制数据 | <en/> draw data
     */
    markDestroyElement(data) {
        Object.values(data.remove).forEach((elementData) => {
            elementData.forEach((datum) => {
                const id = (0, id_1.idOf)(datum);
                const element = this.getElement(id);
                if (element)
                    (0, element_2.markToBeDestroyed)(element);
            });
        });
    }
    destroyElement(elementType, datum, context) {
        var _a;
        const { stage = 'exit' } = context;
        const id = (0, id_1.idOf)(datum);
        const element = this.elementMap[id];
        if (!element)
            return () => null;
        this.emit(new event_1.ElementLifeCycleEvent(constants_1.GraphEvent.BEFORE_ELEMENT_DESTROY, elementType, datum), context);
        (_a = this.context.animation) === null || _a === void 0 ? void 0 : _a.add({
            element,
            elementType,
            stage,
            originalStyle: Object.assign({}, element.attributes),
            updatedStyle: {},
        }, {
            after: () => {
                var _a;
                this.clearElement(id);
                element.destroy();
                (_a = element.onDestroy) === null || _a === void 0 ? void 0 : _a.call(element);
                this.emit(new event_1.ElementLifeCycleEvent(constants_1.GraphEvent.AFTER_ELEMENT_DESTROY, elementType, datum), context);
            },
        });
    }
    destroyElements(data, context) {
        const { nodes, edges, combos } = data;
        const iteration = [
            ['combo', combos],
            ['edge', edges],
            ['node', nodes],
        ];
        iteration.forEach(([elementType, elementData]) => {
            elementData.forEach((datum) => this.destroyElement(elementType, datum, context));
        });
        // TODO 重新计算色板样式，如果是分组色板，则不需要重新计算
    }
    clearElement(id) {
        delete this.paletteStyle[id];
        delete this.defaultStyle[id];
        delete this.stateStyle[id];
        delete this.elementMap[id];
        delete this.shapeTypeMap[id];
    }
    /**
     * <zh/> 将布局结果对齐到元素，避免视图偏移。会修改布局结果
     *
     * <en/> Align the layout result to the element to avoid view offset. Will modify the layout result
     * @param layoutResult - <zh/> 布局结果 | <en/> layout result
     * @param id - <zh/> 元素 ID | <en/> element ID
     */
    alignLayoutResultToElement(layoutResult, id) {
        var _a, _b;
        const target = (_a = layoutResult.nodes) === null || _a === void 0 ? void 0 : _a.find((node) => (0, id_1.idOf)(node) === id);
        if (target) {
            const originalPosition = (0, position_1.positionOf)(this.context.model.getNodeLikeDatum(id));
            const modifiedPosition = (0, position_1.positionOf)(target);
            const delta = (0, vector_1.subtract)(originalPosition, modifiedPosition);
            (_b = layoutResult.nodes) === null || _b === void 0 ? void 0 : _b.forEach((node) => {
                var _a, _b, _c;
                if ((_a = node.style) === null || _a === void 0 ? void 0 : _a.x)
                    node.style.x += delta[0];
                if ((_b = node.style) === null || _b === void 0 ? void 0 : _b.y)
                    node.style.y += delta[1];
                if ((_c = node.style) === null || _c === void 0 ? void 0 : _c.z)
                    node.style.z += delta[2] || 0;
            });
        }
    }
    /**
     * <zh/> 收起节点
     *
     * <en/> collapse node
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param options - <zh/> 选项 | <en/> options
     */
    collapseNode(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { animation } = options;
            const { model } = this.context;
            // 重新计算数据 / Recalculate data
            const data = this.computeChangesAndDrawData({ stage: 'collapse', animation });
            if (!data)
                return;
            const { drawData } = data;
            const { add, remove, update } = drawData;
            this.markDestroyElement(drawData);
            const context = { animation, stage: 'collapse', data: drawData };
            this.destroyElements(remove, context);
            this.createElements(add, context);
            this.updateElements(update, context);
            yield ((_a = this.context.animation.animate(animation, {
                beforeAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.BEFORE_ANIMATE, constants_1.AnimationType.COLLAPSE, animation, drawData), context),
                afterAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.AFTER_ANIMATE, constants_1.AnimationType.COLLAPSE, animation, drawData), context),
            }, {
                collapse: {
                    target: id,
                    descendants: Array.from(remove.nodes).map(([, node]) => (0, id_1.idOf)(node)),
                    position: (0, position_1.positionOf)(update.nodes.get(id)),
                },
            })) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    /**
     * <zh/> 展开节点
     *
     * <en/> expand node
     * @param id - <zh/> 元素 ID | <en/> element ID
     * @param animation - <zh/> 是否使用动画，默认为 true | <en/> Whether to use animation, default is true
     */
    expandNode(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { model, layout } = this.context;
            const { animation, align } = options;
            const position = (0, position_1.positionOf)(model.getNodeData([id])[0]);
            // 重新计算数据 / Recalculate data
            const data = this.computeChangesAndDrawData({ stage: 'expand', animation });
            this.createElements(data.drawData.add, { animation: false, stage: 'expand', target: id });
            // 重置动画 / Reset animation
            this.context.animation.clear();
            this.computeStyle('expand');
            if (!data)
                return;
            const { drawData } = data;
            const { update, add } = drawData;
            const context = { animation, stage: 'expand', data: drawData };
            // 将新增节点/边添加到更新列表 / Add new nodes/edges to the update list
            add.edges.forEach((edge) => update.edges.set((0, id_1.idOf)(edge), edge));
            add.nodes.forEach((node) => update.nodes.set((0, id_1.idOf)(node), node));
            this.updateElements(update, context);
            yield ((_a = this.context.animation.animate(animation, {
                beforeAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.BEFORE_ANIMATE, constants_1.AnimationType.EXPAND, animation, drawData), context),
                afterAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.AFTER_ANIMATE, constants_1.AnimationType.EXPAND, animation, drawData), context),
            }, {
                expand: {
                    target: id,
                    descendants: Array.from(add.nodes).map(([, node]) => (0, id_1.idOf)(node)),
                    position,
                },
            })) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    collapseCombo(id, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { model, element } = this.context;
            if (model.getAncestorsData(id, constants_1.COMBO_KEY).some((datum) => (0, collapsibility_1.isCollapsed)(datum)))
                return;
            const combo = element.getElement(id);
            const position = combo.getComboPosition(Object.assign(Object.assign({}, combo.attributes), { collapsed: true }));
            const data = this.computeChangesAndDrawData({ stage: 'collapse', animation });
            if (!data)
                return;
            const { dataChanges, drawData } = data;
            this.markDestroyElement(drawData);
            const { update, remove } = drawData;
            const context = { animation, stage: 'collapse', data: drawData };
            this.destroyElements(remove, context);
            this.updateElements(update, context);
            const idsOf = (data) => Array.from(data).map(([, node]) => (0, id_1.idOf)(node));
            yield ((_a = this.context.animation.animate(animation, {
                before: () => this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BEFORE_DRAW, { dataChanges, animation }), context),
                beforeAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.BEFORE_ANIMATE, constants_1.AnimationType.COLLAPSE, animation, drawData), context),
                afterAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.AFTER_ANIMATE, constants_1.AnimationType.COLLAPSE, animation, drawData), context),
                after: () => this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.AFTER_DRAW, { dataChanges, animation }), context),
            }, {
                collapse: {
                    target: id,
                    descendants: [...idsOf(remove.nodes), ...idsOf(remove.combos)],
                    position,
                },
            })) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    expandCombo(id, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { model } = this.context;
            const position = (0, position_1.positionOf)(model.getComboData([id])[0]);
            // 重新计算数据 / Recalculate data
            this.computeStyle('expand');
            const data = this.computeChangesAndDrawData({ stage: 'expand', animation });
            if (!data)
                return;
            const { dataChanges, drawData } = data;
            const { add, update } = drawData;
            const context = { animation, stage: 'expand', data: drawData, target: id };
            this.createElements(add, context);
            this.updateElements(update, context);
            const idsOf = (data) => Array.from(data).map(([, node]) => (0, id_1.idOf)(node));
            yield ((_a = this.context.animation.animate(animation, {
                before: () => this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BEFORE_DRAW, { dataChanges, animation }), context),
                beforeAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.BEFORE_ANIMATE, constants_1.AnimationType.EXPAND, animation, drawData), context),
                afterAnimate: (animation) => this.emit(new event_1.AnimateEvent(constants_1.GraphEvent.AFTER_ANIMATE, constants_1.AnimationType.EXPAND, animation, drawData), context),
                after: () => this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.AFTER_DRAW, { dataChanges, animation }), context),
            }, {
                expand: {
                    target: id,
                    descendants: [...idsOf(add.nodes), ...idsOf(add.combos)],
                    position,
                },
            })) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    /**
     * <zh/> 清空所有元素
     *
     * <en/> clear all elements
     */
    clear() {
        this.container.destroy();
        this.initContainer();
        this.elementMap = {};
        this.shapeTypeMap = {};
        this.defaultStyle = {};
        this.stateStyle = {};
        this.paletteStyle = {};
    }
    destroy() {
        this.clear();
        this.container.destroy();
        // @ts-expect-error force delete
        this.context = {};
    }
}
exports.ElementController = ElementController;
//# sourceMappingURL=element.js.map