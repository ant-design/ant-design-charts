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
Object.defineProperty(exports, "__esModule", { value: true });
exports.plot = plot;
exports.applyStyle = applyStyle;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const d3_format_1 = require("@antv/vendor/d3-format");
const array_1 = require("../utils/array");
const event_1 = require("../utils/event");
const helper_1 = require("../utils/helper");
const selection_1 = require("../utils/selection");
const component_1 = require("./component");
const constant_1 = require("./constant");
const coordinate_1 = require("./coordinate");
const layout_1 = require("./layout");
const library_1 = require("./library");
const mark_1 = require("./mark");
const scale_1 = require("./scale");
const transform_1 = require("./transform");
function plot(options, selection, context) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { library } = context;
        const [useComposition] = (0, library_1.useLibrary)('composition', library);
        const [useInteraction] = (0, library_1.useLibrary)('interaction', library);
        // Some helper functions.
        const marks = new Set(Object.keys(library)
            .map((d) => { var _a; return (_a = /mark\.(.*)/.exec(d)) === null || _a === void 0 ? void 0 : _a[1]; })
            .filter(helper_1.defined));
        const staticMarks = new Set(Object.keys(library)
            .map((d) => { var _a; return (_a = /component\.(.*)/.exec(d)) === null || _a === void 0 ? void 0 : _a[1]; })
            .filter(helper_1.defined));
        const typeOf = (node) => {
            const { type } = node;
            if (typeof type === 'function') {
                // @ts-ignore
                const { props = {} } = type;
                const { composite = true } = props;
                if (composite)
                    return 'mark';
            }
            if (typeof type !== 'string')
                return type;
            if (marks.has(type) || staticMarks.has(type))
                return 'mark';
            return type;
        };
        const isMark = (node) => typeOf(node) === 'mark';
        const isStandardView = (node) => typeOf(node) === 'standardView';
        const isStaticMark = (node) => {
            const { type } = node;
            if (typeof type !== 'string')
                return false;
            if (staticMarks.has(type))
                return true;
            return false;
        };
        const transform = (node) => {
            if (isStandardView(node))
                return [node];
            const type = typeOf(node);
            const composition = useComposition({ type, static: isStaticMark(node) });
            return composition(node);
        };
        // Some temporary variables help parse the view tree.
        const views = [];
        const viewNode = new Map();
        const nodeState = new Map();
        const discovered = [options];
        const nodeGenerators = [];
        while (discovered.length) {
            const node = discovered.shift();
            if (isStandardView(node)) {
                // Initialize view to get data to be visualized. If the marks
                // of the view have already been initialized (facet view),
                // initialize the view based on the initialized mark states,
                // otherwise initialize it from beginning.
                const state = nodeState.get(node);
                const [view, children] = state
                    ? initializeState(state, node, library)
                    : yield initializeView(node, context);
                viewNode.set(view, node);
                views.push(view);
                // Transform children, they will be transformed into
                // standardView if they are mark or view node.
                const transformedNodes = children
                    .flatMap(transform)
                    .map((d) => (0, coordinate_1.coordinate2Transform)(d, library));
                discovered.push(...transformedNodes);
                // Only StandardView can be treated as facet and it
                // should sync position scales among facets normally.
                if (transformedNodes.every(isStandardView)) {
                    const states = yield Promise.all(transformedNodes.map((d) => initializeMarks(d, context)));
                    // Note!!!
                    // This will mutate scales for marks.
                    (0, scale_1.syncFacetsScales)(states);
                    for (let i = 0; i < transformedNodes.length; i++) {
                        const nodeT = transformedNodes[i];
                        const state = states[i];
                        nodeState.set(nodeT, state);
                    }
                }
            }
            else {
                // Apply transform to get data in advance for non-mark composition
                // node, which makes sure that composition node can preprocess the
                // data to produce more nodes based on it.
                const n = isMark(node) ? node : yield applyTransform(node, context);
                const N = transform(n);
                if (Array.isArray(N))
                    discovered.push(...N);
                else if (typeof N === 'function')
                    nodeGenerators.push(N());
            }
        }
        context.emitter.emit(event_1.ChartEvent.BEFORE_PAINT);
        // Plot chart.
        const enterContainer = new Map();
        const updateContainer = new Map();
        const transitions = [];
        selection
            .selectAll(className(constant_1.VIEW_CLASS_NAME))
            .data(views, (d) => d.key)
            .join((enter) => enter
            .append('g')
            .attr('className', constant_1.VIEW_CLASS_NAME)
            .attr('id', (view) => view.key)
            .call(applyTranslate)
            .each(function (view, i, element) {
            plotView(view, (0, selection_1.select)(element), transitions, context);
            enterContainer.set(view, element);
        }), (update) => update.call(applyTranslate).each(function (view, i, element) {
            plotView(view, (0, selection_1.select)(element), transitions, context);
            updateContainer.set(view, element);
        }), (exit) => exit
            .each(function (d, i, element) {
            // Remove existed interactions.
            const interactions = element['nameInteraction'].values();
            for (const interaction of interactions) {
                interaction.destroy();
            }
        })
            .remove());
        // Apply interactions.
        const viewInstanceof = (viewContainer, updateInteractions, oldStore) => {
            return Array.from(viewContainer.entries()).map(([view, container]) => {
                // Index state by component or interaction name,
                // such as legend, scrollbar, brushFilter.
                // Each state transform options to another options.
                const store = oldStore || new Map();
                const setState = (key, reducer = (x) => x) => store.set(key, reducer);
                const options = viewNode.get(view);
                const update = createUpdateView((0, selection_1.select)(container), options, context);
                const target = {
                    view,
                    container,
                    options,
                    setState,
                    update: (from, updateTypes) => __awaiter(this, void 0, void 0, function* () {
                        // Apply all state functions to get new options.
                        const reducer = (0, helper_1.compose)(Array.from(store.values()));
                        const newOptions = reducer(options);
                        return yield update(newOptions, from, () => {
                            if ((0, util_1.isArray)(updateTypes)) {
                                updateInteractions(viewContainer, updateTypes, store);
                            }
                        });
                    }),
                };
                context.externals.update = target.update;
                context.externals.setState = setState;
                return target;
            });
        };
        const updateInteractions = (container = updateContainer, updateType, oldStore) => {
            var _a;
            // Interactions for update views.
            const updateViewInstances = viewInstanceof(container, updateInteractions, oldStore);
            for (const target of updateViewInstances) {
                const { options, container } = target;
                const nameInteraction = container['nameInteraction'];
                let typeOptions = inferInteraction(options);
                if (updateType) {
                    typeOptions = typeOptions.filter((v) => updateType.includes(v[0]));
                }
                for (const typeOption of typeOptions) {
                    const [type, option] = typeOption;
                    // Remove interaction for existed views.
                    const prevInteraction = nameInteraction.get(type);
                    if (prevInteraction)
                        (_a = prevInteraction.destroy) === null || _a === void 0 ? void 0 : _a.call(prevInteraction);
                    // Apply new interaction.
                    if (option) {
                        const interaction = useThemeInteraction(target.view, type, option, useInteraction);
                        const destroy = interaction(target, updateViewInstances, context.emitter);
                        nameInteraction.set(type, { destroy });
                    }
                }
            }
        };
        // Interactions for enter views.
        const enterViewInstances = viewInstanceof(enterContainer, updateInteractions);
        for (const target of enterViewInstances) {
            const { options } = target;
            // A Map index interaction by interaction name.
            const nameInteraction = new Map();
            target.container['nameInteraction'] = nameInteraction;
            // Apply interactions.
            for (const typeOption of inferInteraction(options)) {
                const [type, option] = typeOption;
                if (option) {
                    const interaction = useThemeInteraction(target.view, type, option, useInteraction);
                    const destroy = interaction(target, enterViewInstances, context.emitter);
                    nameInteraction.set(type, { destroy });
                }
            }
        }
        updateInteractions();
        // Author animations.
        const { width, height } = options;
        const keyframes = [];
        for (const nodeGenerator of nodeGenerators) {
            // Delay the rendering of animation keyframe. Different animation
            // created by different nodeGenerator will play in the same time.
            // eslint-disable-next-line no-async-promise-executor
            const keyframe = new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                for (const node of nodeGenerator) {
                    const sizedNode = Object.assign({ width, height }, node);
                    yield plot(sizedNode, selection, context);
                }
                resolve();
            }));
            keyframes.push(keyframe);
        }
        context.views = views;
        // Clear and update animation.
        (_a = context.animations) === null || _a === void 0 ? void 0 : _a.forEach((animation) => animation === null || animation === void 0 ? void 0 : animation.cancel());
        context.animations = transitions;
        context.emitter.emit(event_1.ChartEvent.AFTER_PAINT);
        // Note!!!
        // The returned promise will never resolved if one of nodeGenerator
        // never stop to yield node, which may created by a keyframe composition
        // with iteration count set to infinite.
        const finished = transitions
            .filter(helper_1.defined)
            .map(cancel)
            .map((d) => d.finished);
        return Promise.all([...finished, ...keyframes]);
    });
}
function applyTranslate(selection) {
    selection.style('transform', (d) => `translate(${d.layout.x}, ${d.layout.y})`);
}
function definedInteraction(library) {
    const [, createInteraction] = (0, library_1.useLibrary)('interaction', library);
    return (d) => {
        const [name, options] = d;
        try {
            return [name, createInteraction(name)];
        }
        catch (_a) {
            return [name, options.type];
        }
    };
}
function createUpdateView(selection, options, context) {
    const { library } = context;
    const createDefinedInteraction = definedInteraction(library);
    const filter = (d) => d[1] && d[1].props && d[1].props.reapplyWhenUpdate;
    const interactions = inferInteraction(options);
    const updates = interactions
        .map(createDefinedInteraction)
        .filter(filter)
        .map((d) => d[0]);
    return (newOptions, source, callback) => __awaiter(this, void 0, void 0, function* () {
        const transitions = [];
        const [newView, newChildren] = yield initializeView(newOptions, context);
        plotView(newView, selection, transitions, context);
        // Update interaction need to reapply when update.
        for (const name of updates.filter((d) => d !== source)) {
            updateInteraction(name, selection, newOptions, newView, context);
        }
        for (const child of newChildren) {
            plot(child, selection, context);
        }
        callback();
        return { options: newOptions, view: newView };
    });
}
function updateInteraction(name, selection, options, view, context) {
    var _a;
    const { library } = context;
    const [useInteraction] = (0, library_1.useLibrary)('interaction', library);
    // Instances for interaction.
    const container = selection.node();
    const nameInteraction = container['nameInteraction'];
    const interactionOptions = inferInteraction(options).find(([d]) => d === name);
    // Destroy older interaction.
    const interaction = nameInteraction.get(name);
    if (!interaction)
        return;
    (_a = interaction.destroy) === null || _a === void 0 ? void 0 : _a.call(interaction);
    if (!interactionOptions[1])
        return;
    // Apply new interaction.
    const applyInteraction = useThemeInteraction(view, name, interactionOptions[1], useInteraction);
    const target = {
        options,
        view,
        container: selection.node(),
        update: (options) => Promise.resolve(options),
    };
    const destroy = applyInteraction(target, [], context.emitter);
    nameInteraction.set(name, { destroy });
}
function initializeView(options, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { library } = context;
        const flattenOptions = yield transformMarks(options, context);
        const mergedOptions = bubbleOptions(flattenOptions);
        // @todo Remove this.
        // !!! NOTE: Mute original view options.
        // Update interaction and coordinate for this view.
        options.interaction = mergedOptions.interaction;
        options.coordinate = mergedOptions.coordinate;
        // @ts-ignore
        options.marks = [...mergedOptions.marks, ...mergedOptions.components];
        const transformedOptions = (0, coordinate_1.coordinate2Transform)(mergedOptions, library);
        const state = yield initializeMarks(transformedOptions, context);
        return initializeState(state, transformedOptions, library);
    });
}
function bubbleOptions(options) {
    const { coordinate: viewCoordinate = {}, interaction: viewInteraction = {}, style: viewStyle = {}, marks } = options, rest = __rest(options, ["coordinate", "interaction", "style", "marks"]);
    const markCoordinates = marks.map((d) => d.coordinate || {});
    const markInteractions = marks.map((d) => d.interaction || {});
    const markViewStyles = marks.map((d) => d.viewStyle || {});
    const newCoordinate = [...markCoordinates, viewCoordinate].reduceRight((prev, cur) => (0, util_1.deepMix)(prev, cur), {});
    const newInteraction = [viewInteraction, ...markInteractions].reduce((prev, cur) => (0, util_1.deepMix)(prev, cur), {});
    const newStyle = [...markViewStyles, viewStyle].reduce((prev, cur) => (0, util_1.deepMix)(prev, cur), {});
    return Object.assign(Object.assign({}, rest), { marks, coordinate: newCoordinate, interaction: newInteraction, style: newStyle });
}
function transformMarks(options, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { library } = context;
        const [useMark, createMark] = (0, library_1.useLibrary)('mark', library);
        const staticMarks = new Set(Object.keys(library)
            .map((d) => { var _a; return (_a = /component\.(.*)/.exec(d)) === null || _a === void 0 ? void 0 : _a[1]; })
            .filter(helper_1.defined));
        const { marks } = options;
        const flattenMarks = [];
        const components = [];
        const discovered = [...marks];
        const { width, height } = (0, layout_1.computeRoughPlotSize)(options);
        const markOptions = { options, width, height };
        // Pre order traversal.
        while (discovered.length) {
            const [node] = discovered.splice(0, 1);
            // Apply data transform to get data.
            const mark = (yield applyTransform(node, context));
            const { type = (0, helper_1.error)('G2Mark type is required.'), key } = mark;
            // For components.
            if (staticMarks.has(type))
                components.push(mark);
            else {
                const { props = {} } = createMark(type);
                const { composite = true } = props;
                if (!composite)
                    flattenMarks.push(mark);
                else {
                    // Unwrap data from { value: data } to data,
                    // then the composite mark can process the normalized data.
                    const { data } = mark;
                    const newMark = Object.assign(Object.assign({}, mark), { data: data ? (Array.isArray(data) ? data : data.value) : data });
                    // Convert composite mark to marks.
                    const marks = yield useMark(newMark, markOptions);
                    const M = Array.isArray(marks) ? marks : [marks];
                    discovered.unshift(...M.map((d, i) => (Object.assign(Object.assign({}, d), { key: `${key}-${i}` }))));
                }
            }
        }
        return Object.assign(Object.assign({}, options), { marks: flattenMarks, components });
    });
}
function initializeMarks(options, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { library } = context;
        const [useTheme] = (0, library_1.useLibrary)('theme', library);
        const [, createMark] = (0, library_1.useLibrary)('mark', library);
        const { theme: partialTheme, marks: partialMarks, coordinates = [], } = options;
        const theme = useTheme(inferTheme(partialTheme));
        const markState = new Map();
        // Initialize channels for marks.
        for (const markOptions of partialMarks) {
            const { type } = markOptions;
            const { props = {} } = createMark(type);
            const markAndState = yield (0, mark_1.initializeMark)(markOptions, props, context);
            if (markAndState) {
                const [initializedMark, state] = markAndState;
                markState.set(initializedMark, state);
            }
        }
        // Group channels by scale key, each group has scale.
        const scaleChannels = (0, d3_array_1.group)(Array.from(markState.values()).flatMap((d) => d.channels), ({ scaleKey }) => scaleKey);
        // Infer scale for each channel groups.
        for (const channels of scaleChannels.values()) {
            // Merge scale options for these channels.
            const scaleOptions = channels.reduce((total, { scale }) => (0, util_1.deepMix)(total, scale), {});
            const { scaleKey } = channels[0];
            // Use the fields of the first channel as the title.
            const { values: FV } = channels[0];
            const fields = Array.from(new Set(FV.map((d) => d.field).filter(helper_1.defined)));
            const options = (0, util_1.deepMix)({
                guide: { title: fields.length === 0 ? undefined : fields },
                field: fields[0],
            }, scaleOptions);
            // Use the name of the first channel as the scale name.
            const { name } = channels[0];
            const values = channels.flatMap(({ values }) => values.map((d) => d.value));
            const scale = Object.assign(Object.assign({}, (0, scale_1.inferScale)(name, values, options, coordinates, theme, library)), { uid: Symbol('scale'), key: scaleKey });
            channels.forEach((channel) => (channel.scale = scale));
        }
        return markState;
    });
}
function useThemeInteraction(view, type, option, useInteraction) {
    const theme = view.theme;
    const defaults = typeof type === 'string' ? theme[type] || {} : {};
    const interaction = useInteraction((0, util_1.deepMix)(defaults, Object.assign({ type }, option)));
    return interaction;
}
function initializeState(markState, options, library) {
    var _a;
    const [useMark] = (0, library_1.useLibrary)('mark', library);
    const [useTheme] = (0, library_1.useLibrary)('theme', library);
    const [useLabelTransform] = (0, library_1.useLibrary)('labelTransform', library);
    const { key, frame = false, theme: partialTheme, clip, style = {}, labelTransform = [], } = options;
    const theme = useTheme(inferTheme(partialTheme));
    // Infer components and compute layout.
    const states = Array.from(markState.values());
    const scales = (0, scale_1.collectScales)(states, options);
    const components = (0, component_1.normalizeComponents)((0, component_1.inferComponent)(inferComponentScales(Array.from(scales), states, markState), options, library));
    const layout = (0, layout_1.computeLayout)(components, options, theme, library);
    const coordinate = (0, coordinate_1.createCoordinate)(layout, options, library);
    const framedStyle = frame
        ? (0, util_1.deepMix)({ mainLineWidth: 1, mainStroke: '#000' }, style)
        : style;
    // Place components and mutate their bbox.
    (0, layout_1.placeComponents)((0, component_1.groupComponents)(components), coordinate, layout);
    // AxisZ need a copy of axisX and axisY to show grids in X-Z & Y-Z planes.
    (0, layout_1.processAxisZ)(components);
    // Index scale instance by uid.
    const uidScale = new Map(Array.from(markState.values()).flatMap((state) => {
        const { channels } = state;
        return channels.map(({ scale }) => [
            scale.uid,
            (0, scale_1.useRelationScale)(scale, library),
        ]);
    }));
    (0, scale_1.groupTransform)(markState, uidScale);
    // Scale from marks and components.
    const scaleInstance = {};
    // Initialize scale from components.
    for (const component of components) {
        const { scales: scaleDescriptors = [] } = component;
        const scales = [];
        for (const descriptor of scaleDescriptors) {
            const { name, uid } = descriptor;
            const scale = (_a = uidScale.get(uid)) !== null && _a !== void 0 ? _a : (0, scale_1.useRelationScale)(descriptor, library);
            scales.push(scale);
            // Delivery the scale of axisX to the AxisY,
            // in order to calculate the angle of axisY component when rendering radar chart.
            if (name === 'y') {
                scale.update(Object.assign(Object.assign({}, scale.getOptions()), { xScale: scaleInstance.x }));
            }
            (0, scale_1.assignScale)(scaleInstance, { [name]: scale });
        }
        component.scaleInstances = scales;
    }
    // Calc data to be rendered for each mark.
    // @todo More readable APIs for Container which stays
    // the same style with JS standard and lodash APIs.
    // @todo More proper way to index scale for different marks.
    const children = [];
    const dataMap = new Map();
    for (const [mark, state] of markState.entries()) {
        const { 
        // scale,
        // Callback to create children options based on this mark.
        children: createChildren, 
        // The total count of data (both show and hide)for this facet.
        // This is for unit visualization to sync data domain.
        dataDomain, modifier, key: markKey, data, } = mark;
        dataMap.set(markKey, data);
        const { index, channels, tooltip } = state;
        const scale = Object.fromEntries(channels.map(({ name, scale }) => [name, scale]));
        // Transform abstract value to visual value by scales.
        const markScaleInstance = (0, array_1.mapObject)(scale, ({ uid }) => uidScale.get(uid));
        (0, scale_1.assignScale)(scaleInstance, markScaleInstance);
        const value = (0, scale_1.applyScale)(channels, markScaleInstance);
        // Calc points and transformation for each data,
        // and then transform visual value to visual data.
        const calcPoints = useMark(mark);
        const [I, P, S] = filterValid(calcPoints(index, markScaleInstance, value, coordinate));
        const count = dataDomain || I.length;
        const T = modifier ? modifier(P, count, layout) : [];
        const titleOf = (i) => { var _a, _b; return (_b = (_a = tooltip.title) === null || _a === void 0 ? void 0 : _a[i]) === null || _b === void 0 ? void 0 : _b.value; };
        const itemsOf = (i) => tooltip.items.map((V) => V[i]);
        const visualData = I.map((d, i) => {
            const datum = Object.assign({ points: P[i], transform: T[i], index: d, markKey, viewKey: key, data: data[d] }, (tooltip && {
                title: titleOf(d),
                items: itemsOf(d),
            }));
            for (const [k, V] of Object.entries(value)) {
                datum[k] = V[d];
                if (S)
                    datum[`series${(0, util_1.upperFirst)(k)}`] = S[i].map((i) => V[i]);
            }
            if (S)
                datum['seriesIndex'] = S[i];
            if (S && tooltip) {
                datum['seriesItems'] = S[i].map((si) => itemsOf(si));
                datum['seriesTitle'] = S[i].map((si) => titleOf(si));
            }
            return datum;
        });
        state.data = visualData;
        state.index = I;
        // Create children options by children callback,
        // and then propagate data to each child.
        const markChildren = createChildren === null || createChildren === void 0 ? void 0 : createChildren(visualData, markScaleInstance, layout);
        children.push(...(markChildren || []));
    }
    const view = {
        layout,
        theme,
        coordinate,
        markState,
        key,
        clip,
        scale: scaleInstance,
        style: framedStyle,
        components,
        data: dataMap,
        options: options,
        labelTransform: (0, helper_1.compose)(labelTransform.map(useLabelTransform)),
    };
    return [view, children];
}
function plotView(view, selection, transitions, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { library } = context;
        const { components, theme, layout, markState, coordinate, key, style, clip, scale, } = view;
        // Render background for the different areas.
        const { x, y, width, height } = layout, rest = __rest(layout, ["x", "y", "width", "height"]);
        const areaKeys = ['view', 'plot', 'main', 'content'];
        const I = areaKeys.map((_, i) => i);
        const sizeKeys = ['a', 'margin', 'padding', 'inset'];
        const areaStyles = areaKeys.map((d) => (0, helper_1.maybeSubObject)(Object.assign({}, theme.view, style), d));
        const areaSizes = sizeKeys.map((d) => (0, helper_1.subObject)(rest, d));
        const styleArea = (selection) => selection
            .style('x', (i) => areaLayouts[i].x)
            .style('y', (i) => areaLayouts[i].y)
            .style('width', (i) => areaLayouts[i].width)
            .style('height', (i) => areaLayouts[i].height)
            .each(function (i, d, element) {
            applyStyle((0, selection_1.select)(element), areaStyles[i]);
        });
        let px = 0;
        let py = 0;
        let pw = width;
        let ph = height;
        const areaLayouts = I.map((i) => {
            const size = areaSizes[i];
            const { left = 0, top = 0, bottom = 0, right = 0 } = size;
            px += left;
            py += top;
            pw -= left + right;
            ph -= top + bottom;
            return {
                x: px,
                y: py,
                width: pw,
                height: ph,
            };
        });
        selection
            .selectAll(className(constant_1.AREA_CLASS_NAME))
            .data(
        // Only render area with defined style.
        I.filter((i) => (0, helper_1.defined)(areaStyles[i])), (i) => areaKeys[i])
            .join((enter) => enter
            .append('rect')
            .attr('className', constant_1.AREA_CLASS_NAME)
            .style('zIndex', -2)
            .call(styleArea), (update) => update.call(styleArea), (exit) => exit.remove());
        const animationExtent = computeAnimationExtent(markState);
        const componentAnimateOptions = animationExtent
            ? { duration: animationExtent[1] }
            : false;
        // Render components.
        // @todo renderComponent return ctor and options.
        // Key for each type of component.
        // Index them grouped by position.
        for (const [, C] of (0, d3_array_1.groups)(components, (d) => `${d.type}-${d.position}`)) {
            C.forEach((d, i) => (d.index = i));
        }
        const componentsTransitions = selection
            .selectAll(className(constant_1.COMPONENT_CLASS_NAME))
            .data(components, (d) => `${d.type}-${d.position}-${d.index}`)
            .join((enter) => enter
            .append('g')
            .style('zIndex', ({ zIndex }) => zIndex || -1)
            .attr('className', constant_1.COMPONENT_CLASS_NAME)
            .append((options) => (0, component_1.renderComponent)((0, util_1.deepMix)({ animate: componentAnimateOptions, scale }, options), coordinate, theme, library, markState)), (update) => update.transition(function (options, i, element) {
            const { preserve = false } = options;
            if (preserve)
                return;
            const newComponent = (0, component_1.renderComponent)((0, util_1.deepMix)({ animate: componentAnimateOptions, scale }, options), coordinate, theme, library, markState);
            const { attributes } = newComponent;
            const [node] = element.childNodes;
            return node.update(attributes, false);
        }))
            .transitions();
        transitions.push(...componentsTransitions.flat().filter(helper_1.defined));
        // Main layer is for showing the main visual representation such as marks. There
        // may be multiple main layers for a view, each main layer correspond to one of marks.
        // @todo Test DOM structure.
        const T = selection
            .selectAll(className(constant_1.PLOT_CLASS_NAME))
            .data([layout], () => key)
            .join((enter) => enter
            // Make this layer interactive, such as click and mousemove events.
            .append('rect')
            .style('zIndex', 0)
            .style('fill', 'transparent')
            .attr('className', constant_1.PLOT_CLASS_NAME)
            .call(updateBBox)
            .call(updateLayers, Array.from(markState.keys()))
            .call(applyClip, clip), (update) => update
            .call(updateLayers, Array.from(markState.keys()))
            .call(updateBBox)
            // .call((selection) => {
            //   return animationExtent
            //     ? animateBBox(selection, animationExtent)
            //     : updateBBox(selection);
            // })
            .call(applyClip, clip))
            .transitions();
        transitions.push(...T.flat());
        // Render marks with corresponding data.
        for (const [mark, state] of markState.entries()) {
            const { data } = state;
            const { key, class: cls, type } = mark;
            const viewNode = selection.select(`#${key}`);
            const shapeFunction = createMarkShapeFunction(mark, state, view, context);
            const enterFunction = createEnterFunction(mark, state, view, library);
            const updateFunction = createUpdateFunction(mark, state, view, library);
            const exitFunction = createExitFunction(mark, state, view, library);
            const facetElements = selectFacetElements(selection, viewNode, cls, 'element');
            const T = viewNode
                .selectAll(className(constant_1.ELEMENT_CLASS_NAME))
                .selectFacetAll(facetElements)
                .data(data, (d) => d.key, (d) => d.groupKey)
                .join((enter) => enter
                .append(shapeFunction)
                // Note!!! Only one className can be set.
                // Using attribute as alternative for other classNames.
                .attr('className', constant_1.ELEMENT_CLASS_NAME)
                .attr('markType', type)
                .transition(function (data, i, element) {
                return enterFunction(data, [element]);
            }), (update) => update.call((selection) => {
                const parent = selection.parent();
                const origin = (0, helper_1.useMemo)((node) => {
                    const [x, y] = node.getBounds().min;
                    return [x, y];
                });
                selection
                    .transition(function (data, index, element) {
                    maybeFacetElement(element, parent, origin);
                    const node = shapeFunction(data, index);
                    const animation = updateFunction(data, [element], [node]);
                    if (animation === null || animation === void 0 ? void 0 : animation.length)
                        return animation;
                    if (element.nodeName === node.nodeName &&
                        node.nodeName !== 'g') {
                        (0, helper_1.copyAttributes)(element, node);
                    }
                    else {
                        element.parentNode.replaceChild(node, element);
                        node.className = constant_1.ELEMENT_CLASS_NAME;
                        // @ts-ignore
                        node.markType = type;
                        // @ts-ignore
                        node.__data__ = element.__data__;
                    }
                    return animation;
                })
                    .each(function (d, i, element) {
                    if (element.__removed__) {
                        element.__removed__ = false;
                    }
                })
                    .attr('markType', type)
                    .attr('className', constant_1.ELEMENT_CLASS_NAME);
            }), (exit) => {
                return exit
                    .each(function (d, i, element) {
                    element.__removed__ = true;
                })
                    .transition(function (data, i, element) {
                    return exitFunction(data, [element]);
                })
                    .remove();
            }, (merge) => merge
                // Append elements to be merged.
                .append(shapeFunction)
                .attr('className', constant_1.ELEMENT_CLASS_NAME)
                .attr('markType', type)
                .transition(function (data, i, element) {
                // Remove merged elements after animation finishing.
                const { __fromElements__: fromElements } = element;
                const transition = updateFunction(data, fromElements, [element]);
                const exit = new selection_1.Selection(fromElements, null, element.parentNode);
                exit.transition(transition).remove();
                return transition;
            }), (split) => split
                .transition(function (data, i, element) {
                // Append splitted shapes.
                const enter = new selection_1.Selection([], element.__toData__, element.parentNode);
                const toElements = enter
                    .append(shapeFunction)
                    .attr('className', constant_1.ELEMENT_CLASS_NAME)
                    .attr('markType', type)
                    .nodes();
                return updateFunction(data, [element], toElements);
            })
                // Remove elements to be splitted after animation finishing.
                .remove())
                .transitions();
            transitions.push(...T.flat());
        }
        // Plot label for this view.
        plotLabel(view, selection, transitions, library, context);
        plotBreak(view, selection, library, context);
    });
}
/**
 * Auto hide labels be specify label layout.
 */
function plotLabel(view, selection, transitions, library, context) {
    const [useLabelTransform] = (0, library_1.useLibrary)('labelTransform', library);
    const { markState, labelTransform } = view;
    const labelLayer = selection.select(className(constant_1.LABEL_LAYER_CLASS_NAME)).node();
    // A Map index shapeFunction by label.
    const labelShapeFunction = new Map();
    // A Map index options by label.
    const labelDescriptor = new Map();
    // Get all labels for this view.
    const labels = Array.from(markState.entries()).flatMap(([mark, state]) => {
        const { labels: labelOptions = [], key } = mark;
        const shapeFunction = createLabelShapeFunction(mark, state, view, library, context);
        const elements = selection
            .select(`#${key}`)
            .selectAll(className(constant_1.ELEMENT_CLASS_NAME))
            .nodes()
            // Only select the valid element.
            .filter((n) => {
            var _a;
            if (n.__removed__)
                return false;
            // Filter out elements that are hidden (e.g., by slider filtering)
            // Check if element or its children have visibility: hidden
            const isHidden = ((_a = n.style) === null || _a === void 0 ? void 0 : _a.visibility) === 'hidden' ||
                (n.children &&
                    n.children.some((child) => { var _a; return ((_a = child.style) === null || _a === void 0 ? void 0 : _a.visibility) === 'hidden'; }));
            return !isHidden;
        });
        return labelOptions.flatMap((labelOption, i) => {
            const { transform = [] } = labelOption, options = __rest(labelOption, ["transform"]);
            return elements.flatMap((e) => {
                const L = getLabels(options, i, e);
                L.forEach((l) => {
                    labelShapeFunction.set(l, (data) => shapeFunction(Object.assign(Object.assign({}, data), { element: e })));
                    labelDescriptor.set(l, labelOption);
                });
                return L;
            });
        });
    });
    // Render all labels.
    const labelShapes = (0, selection_1.select)(labelLayer)
        .selectAll(className(constant_1.LABEL_CLASS_NAME))
        .data(labels, (d) => d.key)
        .join((enter) => enter
        .append((d) => labelShapeFunction.get(d)(d))
        .attr('className', constant_1.LABEL_CLASS_NAME), (update) => update.each(function (d, i, element) {
        // @todo Handle Label with different type.
        const shapeFunction = labelShapeFunction.get(d);
        const node = shapeFunction(d);
        (0, helper_1.copyAttributes)(element, node);
    }), (exit) => exit.remove())
        .nodes();
    // Apply group-level transforms.
    const labelGroups = (0, d3_array_1.group)(labelShapes, (d) => labelDescriptor.get(d.__data__));
    const { coordinate, layout } = view;
    const labelTransformContext = {
        canvas: context.canvas,
        coordinate,
        layout,
    };
    for (const [label, shapes] of labelGroups) {
        const { transform = [] } = label;
        const transformFunction = (0, helper_1.compose)(transform.map(useLabelTransform));
        transformFunction(shapes, labelTransformContext);
    }
    // Apply view-level transform.
    if (labelTransform) {
        labelTransform(labelShapes, labelTransformContext);
    }
}
function getLabels(label, labelIndex, element) {
    const { seriesIndex: SI, seriesKey, points, key, index } = element.__data__;
    const bounds = getLocalBounds(element);
    if (!SI) {
        return [
            Object.assign(Object.assign({}, label), { key: `${key}-${labelIndex}`, bounds,
                index,
                points, dependentElement: element }),
        ];
    }
    const selector = normalizeLabelSelector(label);
    const F = SI.map((index, i) => (Object.assign(Object.assign({}, label), { key: `${seriesKey[i]}-${labelIndex}`, bounds: [points[i]], index,
        points, dependentElement: element })));
    // @ts-ignore
    return selector ? selector(F) : F;
}
/**
 * Plot break shapes.
 */
function plotBreak(view, selection, library, context) {
    const scale = view.scale;
    const breaks = (0, util_1.get)(scale, 'y.options.breaks', []);
    const { document } = context.canvas;
    [constant_1.BREAK_CLASS_NAME, constant_1.BREAK_GROUP_CLASS_NAME].forEach((d) => {
        document.getElementsByClassName(d).forEach((e) => {
            e.remove();
        });
    });
    if (!breaks.length) {
        return;
    }
    const breakLayer = selection.select(className(constant_1.PLOT_CLASS_NAME)).node();
    const [useShape] = (0, library_1.useLibrary)('shape', library);
    const breaksShapeFunction = new Map();
    breaks.forEach((breakConfig, index) => {
        breaksShapeFunction.set(breakConfig, useShape({
            type: 'break',
        }, {
            view,
            selection,
            context,
        }));
    });
    // Render all breaks.
    (0, selection_1.select)(breakLayer)
        .selectAll(className(constant_1.BREAK_CLASS_NAME))
        .data(breaks, (d) => d.key)
        .join((enter) => enter
        .append((d, index) => breaksShapeFunction.get(d)(d, index))
        .attr('className', constant_1.BREAK_CLASS_NAME), (update) => update.each(function (d, i, element) {
        const shapeFunction = breaksShapeFunction.get(d);
        const node = shapeFunction(d, i);
        (0, helper_1.copyAttributes)(element, node);
    }), (exit) => exit.remove())
        .nodes();
}
function filterValid([I, P, S]) {
    if (S)
        return [I, P, S];
    const definedIndex = [];
    const definedPoints = [];
    for (let i = 0; i < I.length; i++) {
        const d = I[i];
        const p = P[i];
        if (p.every(([x, y]) => (0, helper_1.defined)(x) && (0, helper_1.defined)(y))) {
            definedIndex.push(d);
            definedPoints.push(p);
        }
    }
    return [definedIndex, definedPoints];
}
function normalizeLabelSelector(label) {
    const { selector } = label;
    if (!selector)
        return null;
    if (typeof selector === 'function')
        return selector;
    if (selector === 'first')
        return (I) => [I[0]];
    if (selector === 'last')
        return (I) => [I[I.length - 1]];
    throw new Error(`Unknown selector: ${selector}`);
}
/**
 * Avoid getting error bounds caused by element animations.
 * @todo Remove this temporary handle method, if runtime supports
 * correct process: drawElement, do label layout and then do
 * transitions together.
 */
function getLocalBounds(element) {
    const cloneElement = element.cloneNode(true);
    const animations = element.getAnimations();
    cloneElement.style.visibility = 'hidden';
    animations.forEach((animation) => {
        const keyframes = animation.effect.getKeyframes();
        cloneElement.attr(keyframes[keyframes.length - 1]);
    });
    element.parentNode.appendChild(cloneElement);
    const bounds = cloneElement.getLocalBounds();
    cloneElement.destroy();
    const { min, max } = bounds;
    return [min, max];
}
function createLabelShapeFunction(mark, state, view, library, context) {
    const [useShape] = (0, library_1.useLibrary)('shape', library);
    const { data: abstractData, encode } = mark;
    const { data: visualData, defaultLabelShape } = state;
    const point2d = visualData.map((d) => d.points);
    const channel = (0, array_1.mapObject)(encode, (d) => d.value);
    // Assemble Context.
    const { theme, coordinate } = view;
    const shapeContext = Object.assign(Object.assign({}, context), { document: (0, library_1.documentOf)(context), theme,
        coordinate });
    return (options) => {
        // Computed values from data and styles.
        const { index, points } = options;
        const datum = abstractData[index];
        const { formatter = (d) => `${d}`, transform, style: abstractStyle, render, selector, element } = options, abstractOptions = __rest(options, ["formatter", "transform", "style", "render", "selector", "element"]);
        const visualOptions = (0, array_1.mapObject)(Object.assign(Object.assign({}, abstractOptions), abstractStyle), (d) => valueOf(d, datum, index, abstractData, {
            channel,
            element,
        }));
        const { shape = defaultLabelShape, text } = visualOptions, style = __rest(visualOptions, ["shape", "text"]);
        const f = typeof formatter === 'string' ? (0, d3_format_1.format)(formatter) : formatter;
        const value = Object.assign(Object.assign({}, style), { text: f(text, datum, index, abstractData), datum });
        // Params for create shape.
        const shapeOptions = Object.assign({ type: `label.${shape}`, render }, style);
        const shapeFunction = useShape(shapeOptions, shapeContext);
        const defaults = getDefaultsStyle(theme, 'label', shape, 'label');
        return shapeFunction(points, value, defaults, point2d);
    };
}
function valueOf(value, datum, i, data, options) {
    if (typeof value === 'function')
        return value(datum, i, data, options);
    if (typeof value !== 'string')
        return value;
    if ((0, helper_1.isStrictObject)(datum) && datum[value] !== undefined)
        return datum[value];
    return value;
}
/**
 * Compute max duration for this frame.
 */
function computeAnimationExtent(markState) {
    let maxDuration = -Infinity;
    let minDelay = Infinity;
    for (const [mark, state] of markState) {
        const { animate = {} } = mark;
        const { data } = state;
        const { enter = {}, update = {}, exit = {} } = animate;
        const { type: defaultUpdateType, duration: defaultUpdateDuration = 300, delay: defaultUpdateDelay = 0, } = update;
        const { type: defaultEnterType, duration: defaultEnterDuration = 300, delay: defaultEnterDelay = 0, } = enter;
        const { type: defaultExitType, duration: defaultExitDuration = 300, delay: defaultExitDelay = 0, } = exit;
        for (const d of data) {
            const { updateType = defaultUpdateType, updateDuration = defaultUpdateDuration, updateDelay = defaultUpdateDelay, enterType = defaultEnterType, enterDuration = defaultEnterDuration, enterDelay = defaultEnterDelay, exitDuration = defaultExitDuration, exitDelay = defaultExitDelay, exitType = defaultExitType, } = d;
            if (updateType === undefined || updateType) {
                maxDuration = Math.max(maxDuration, updateDuration + updateDelay);
                minDelay = Math.min(minDelay, updateDelay);
            }
            if (exitType === undefined || exitType) {
                maxDuration = Math.max(maxDuration, exitDuration + exitDelay);
                minDelay = Math.min(minDelay, exitDelay);
            }
            if (enterType === undefined || enterType) {
                maxDuration = Math.max(maxDuration, enterDuration + enterDelay);
                minDelay = Math.min(minDelay, enterDelay);
            }
        }
    }
    if (maxDuration === -Infinity)
        return null;
    return [minDelay, maxDuration - minDelay];
}
function selectFacetElements(selection, current, facetClassName, elementClassName) {
    const group = selection.node().parentElement;
    if (!group || typeof group.findAll !== 'function')
        return [];
    return group
        .findAll((node) => node.style.facet !== undefined &&
        node.style.facet === facetClassName &&
        node !== current.node())
        .flatMap((node) => node.getElementsByClassName(elementClassName));
}
/**
 * Update the parent of element and apply transform to make it
 * stay in original position.
 */
function maybeFacetElement(element, parent, originOf) {
    if (!element.__facet__)
        return;
    // element -> g#main -> rect#plot
    const prePlot = element.parentNode.parentNode;
    // g#main -> rect#plot
    const newPlot = parent.parentNode;
    const [px, py] = originOf(prePlot);
    const [x, y] = originOf(newPlot);
    const translate = `translate(${px - x}, ${py - y})`;
    (0, helper_1.appendTransform)(element, translate);
    parent.append(element);
}
function createMarkShapeFunction(mark, state, view, context) {
    const { library } = context;
    const [useShape] = (0, library_1.useLibrary)('shape', library);
    const { data: abstractData, encode } = mark;
    const { defaultShape, data, shape: shapeLibrary } = state;
    const channel = (0, array_1.mapObject)(encode, (d) => d.value);
    const point2d = data.map((d) => d.points);
    const { theme, coordinate } = view;
    const { type: markType, style = {} } = mark;
    const shapeContext = Object.assign(Object.assign({}, context), { document: (0, library_1.documentOf)(context), coordinate,
        theme });
    return (data) => {
        const { shape: styleShape = defaultShape } = style;
        const { shape = styleShape, points, seriesIndex, index: i } = data, v = __rest(data, ["shape", "points", "seriesIndex", "index"]);
        const value = Object.assign(Object.assign({}, v), { index: i });
        // Get data-driven style.
        // If it is a series shape, such as area and line,
        // provides the series of abstract data and indices
        // for this shape, otherwise the single datum and
        // index.
        const abstractDatum = seriesIndex
            ? seriesIndex.map((i) => abstractData[i])
            : abstractData[i];
        const I = seriesIndex ? seriesIndex : i;
        const visualStyle = (0, array_1.mapObject)(style, (d) => valueOf(d, abstractDatum, I, abstractData, { channel }));
        // Try get shape from mark first, then from library.
        const shapeFunction = shapeLibrary[shape]
            ? shapeLibrary[shape](visualStyle, shapeContext)
            : useShape(Object.assign(Object.assign({}, visualStyle), { type: shapeName(mark, shape) }), shapeContext);
        const defaults = getDefaultsStyle(theme, markType, shape, defaultShape);
        return shapeFunction(points, value, defaults, point2d);
    };
}
function getDefaultsStyle(theme, mark, shape, defaultShape) {
    if (typeof mark !== 'string')
        return;
    const { color } = theme;
    const markTheme = theme[mark] || {};
    const shapeTheme = markTheme[shape] || markTheme[defaultShape];
    return Object.assign({ color }, shapeTheme);
}
function createAnimationFunction(type, mark, state, view, library) {
    var _a, _b;
    const [, createShape] = (0, library_1.useLibrary)('shape', library);
    const [useAnimation] = (0, library_1.useLibrary)('animation', library);
    const { defaultShape, shape: shapeLibrary } = state;
    const { theme, coordinate } = view;
    const upperType = (0, util_1.upperFirst)(type);
    const key = `default${upperType}Animation`;
    // Get shape from mark first, then from library.
    const { [key]: defaultAnimation } = ((_a = shapeLibrary[defaultShape]) === null || _a === void 0 ? void 0 : _a.props) ||
        createShape(shapeName(mark, defaultShape)).props;
    const { [type]: defaultEffectTiming = {} } = theme;
    const animate = ((_b = mark.animate) === null || _b === void 0 ? void 0 : _b[type]) || {};
    const context = { coordinate };
    return (data, from, to) => {
        const { [`${type}Type`]: animation, [`${type}Delay`]: delay, [`${type}Duration`]: duration, [`${type}Easing`]: easing, } = data;
        const options = Object.assign({ type: animation || defaultAnimation }, animate);
        if (!options.type)
            return null;
        const animateFunction = useAnimation(options, context);
        const value = { delay, duration, easing };
        const A = animateFunction(from, to, (0, util_1.deepMix)(defaultEffectTiming, value));
        let an = [];
        if (!Array.isArray(A)) {
            an = [A];
        }
        else {
            an = A;
        }
        return an.filter(Boolean);
    };
}
function createEnterFunction(mark, state, view, library) {
    return createAnimationFunction('enter', mark, state, view, library);
}
/**
 * Animation will not cancel automatically, it should be canceled
 * manually. This is very important for performance.
 */
function cancel(animation) {
    animation.finished.then(() => {
        animation.cancel();
    });
    return animation;
}
function createUpdateFunction(mark, state, view, library) {
    return createAnimationFunction('update', mark, state, view, library);
}
function createExitFunction(mark, state, view, library) {
    return createAnimationFunction('exit', mark, state, view, library);
}
function inferTheme(theme = {}) {
    if (typeof theme === 'string')
        return { type: theme };
    const { type = 'light' } = theme, rest = __rest(theme, ["type"]);
    return Object.assign(Object.assign({}, rest), { type });
}
/**
 * @todo Infer builtin tooltips.
 */
function inferInteraction(view) {
    const defaults = {
        event: true,
        tooltip: true,
        // @todo Inferred by slider self.
        sliderFilter: true,
        legendFilter: true,
        scrollbarFilter: true,
    };
    const { interaction = {} } = view;
    return Object.entries((0, util_1.deepMix)(defaults, interaction)).reverse();
}
function applyTransform(node, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = node, rest = __rest(node, ["data"]);
        if (data == undefined)
            return node;
        const [, { data: newData }] = yield (0, transform_1.applyDataTransform)([], { data }, context);
        return Object.assign({ data: newData }, rest);
    });
}
function updateBBox(selection) {
    selection
        .style('transform', (d) => `translate(${d.paddingLeft + d.marginLeft}, ${d.paddingTop + d.marginTop})`)
        .style('width', (d) => d.innerWidth)
        .style('height', (d) => d.innerHeight);
}
function animateBBox(selection, extent) {
    const [delay, duration] = extent;
    selection.transition(function (data, i, element) {
        const { transform, width, height } = element.style;
        const { paddingLeft, paddingTop, innerWidth, innerHeight, marginLeft, marginTop, } = data;
        const keyframes = [
            {
                transform,
                width,
                height,
            },
            {
                transform: `translate(${paddingLeft + marginLeft}, ${paddingTop + marginTop})`,
                width: innerWidth,
                height: innerHeight,
            },
        ];
        return element.animate(keyframes, { delay, duration, fill: 'both' });
    });
}
function shapeName(mark, name) {
    const { type } = mark;
    if (typeof name === 'string')
        return `${type}.${name}`;
    return name;
}
/**
 * Create and update layer for each mark.
 * All the layers created here are treated as main layers.
 */
function updateLayers(selection, marks) {
    const facet = (d) => (d.class !== undefined ? `${d.class}` : '');
    // Skip for empty selection, it can't append nodes.
    const nodes = selection.nodes();
    if (nodes.length === 0)
        return;
    selection
        .selectAll(className(constant_1.MAIN_LAYER_CLASS_NAME))
        .data(marks, (d) => d.key)
        .join((enter) => enter
        .append('g')
        .attr('className', constant_1.MAIN_LAYER_CLASS_NAME)
        .attr('id', (d) => d.key)
        .style('facet', facet)
        .style('fill', 'transparent')
        .style('zIndex', (d) => { var _a; return (_a = d.zIndex) !== null && _a !== void 0 ? _a : 0; }), (update) => update
        .style('facet', facet)
        .style('fill', 'transparent')
        .style('zIndex', (d) => { var _a; return (_a = d.zIndex) !== null && _a !== void 0 ? _a : 0; }), (exit) => exit.remove());
    const labelLayer = selection.select(className(constant_1.LABEL_LAYER_CLASS_NAME)).node();
    if (labelLayer)
        return;
    selection
        .append('g')
        .attr('className', constant_1.LABEL_LAYER_CLASS_NAME)
        .style('zIndex', 0);
}
function className(...names) {
    return names.map((d) => `.${d}`).join('');
}
function applyClip(selection, clip) {
    if (!selection.node())
        return;
    selection.style('clipPath', (data) => {
        if (!clip)
            return null;
        const { paddingTop: y, paddingLeft: x, marginLeft: x1, marginTop: y1, innerWidth: width, innerHeight: height, } = data;
        return new g_1.Rect({ style: { x: x + x1, y: y + y1, width, height } });
    });
}
function inferComponentScales(scales, states, markState) {
    // add shape scale to state.
    var _a;
    // for cell, omit shape scale.
    // @todo support shape scale for cell.
    for (const [key] of markState.entries()) {
        if (key.type === 'cell') {
            return scales.filter((scale) => scale.name !== 'shape');
        }
    }
    // can't infer shape scale if there are multiple states.
    if (states.length !== 1 || scales.some((scale) => scale.name === 'shape')) {
        return scales;
    }
    const { defaultShape: shape } = states[0];
    const acceptMarkTypes = ['point', 'line', 'rect', 'hollow'];
    if (!acceptMarkTypes.includes(shape))
        return scales;
    const shapeMap = {
        point: 'point',
        line: 'hyphen',
        rect: 'square',
        hollow: 'hollow',
    };
    // create shape scale
    const field = ((_a = scales.find((scale) => scale.name === 'color')) === null || _a === void 0 ? void 0 : _a.field) || null;
    const shapeScale = {
        field,
        name: 'shape',
        type: 'constant',
        domain: [],
        range: [shapeMap[shape]],
    };
    return [...scales, shapeScale];
}
function applyStyle(selection, style) {
    for (const [key, value] of Object.entries(style)) {
        selection.style(key, value);
    }
}
//# sourceMappingURL=plot.js.map