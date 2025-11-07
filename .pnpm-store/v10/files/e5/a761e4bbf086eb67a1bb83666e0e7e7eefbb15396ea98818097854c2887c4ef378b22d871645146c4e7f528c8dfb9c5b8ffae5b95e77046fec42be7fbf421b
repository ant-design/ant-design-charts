import { Canvas as GCanvas, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as DragAndDropPlugin } from '@antv/g-plugin-dragndrop';
import { deepMix } from '@antv/util';
import EventEmitter from '@antv/event-emitter';
import { select } from '../utils/selection';
import { ChartEvent } from '../utils/event';
import { error } from '../utils/helper';
import { parseOptionsExpr } from '../utils/expr';
import { plot } from './plot';
import { VIEW_CLASS_NAME } from './constant';
import { preprocessOption } from './option-preprocess';
/**
 * Infer key for each node of view tree.
 * Each key should be unique in the entire view tree.
 * The key is for incremental render when view tree is changed.
 * @todo Fix custom key equals to inferred key.
 */
function inferKeys(options) {
    const root = deepMix({}, options);
    const nodeParent = new Map([[root, null]]);
    const nodeIndex = new Map([[null, -1]]);
    const discovered = [root];
    while (discovered.length) {
        const node = discovered.shift();
        // If key of node is not specified, using parentKey and the index for it
        // in parent.children as its key.
        // e.g. The key of node named 'a' will be 'a', and the key of node named
        // 'b' will be 'parent-1' in the following view tree specification.
        // { key: 'parent', children: [{ name: 'a', key: 'a' }, { name: 'b' }] }
        if (node.key === undefined) {
            const parent = nodeParent.get(node);
            const index = nodeIndex.get(node);
            const key = parent === null ? `${0}` : `${parent.key}-${index}`;
            node.key = key;
        }
        const { children = [] } = node;
        if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++) {
                // Clone node as well.
                const child = deepMix({}, children[i]);
                children[i] = child;
                nodeParent.set(child, node);
                nodeIndex.set(child, i);
                discovered.push(child);
            }
        }
    }
    return root;
}
function Canvas(width, height) {
    const renderer = new CanvasRenderer();
    // DragAndDropPlugin is for interaction.
    renderer.registerPlugin(new DragAndDropPlugin());
    return new GCanvas({
        width,
        height,
        container: document.createElement('div'),
        renderer: renderer,
    });
}
export function render(options, context = {}, resolve = () => { }, reject = (e) => {
    throw e;
}) {
    const afterParsedOptions = parseOptionsExpr(options);
    // Initialize the context if it is not provided.
    const { width = 640, height = 480, depth = 0 } = afterParsedOptions;
    // Preprocessing here, such as syntactic sugar.
    const preprocessedOption = preprocessOption(afterParsedOptions);
    const keyed = inferKeys(preprocessedOption);
    const { canvas = Canvas(width, height), emitter = new EventEmitter(), library, } = context;
    context.canvas = canvas;
    context.emitter = emitter;
    context.externals = {};
    const { width: prevWidth, height: prevHeight } = canvas.getConfig();
    if (prevWidth !== width || prevHeight !== height) {
        canvas.resize(width, height);
    }
    emitter.emit(ChartEvent.BEFORE_RENDER);
    // Plot the chart and mutate context.
    // Make sure that plot chart after container is ready for every time.
    const selection = select(canvas.document.documentElement);
    canvas.ready
        .then(() => plot(Object.assign(Object.assign({}, keyed), { width, height, depth }), selection, context))
        .then(() => {
        // Place the center of whole scene at z axis' origin.
        if (depth) {
            const [x, y] = canvas.document.documentElement.getPosition();
            // Since `render` method can be called for multiple times, use setPosition instead of translate here.
            canvas.document.documentElement.setPosition(x, y, -depth / 2);
        }
        // Wait for the next tick.
        // FIXME: Use `rendered?` event instead of `requestAnimationFrame`.
        canvas.requestAnimationFrame(() => {
            canvas.requestAnimationFrame(() => {
                emitter.emit(ChartEvent.AFTER_RENDER);
                resolve === null || resolve === void 0 ? void 0 : resolve();
            });
        });
    })
        .catch((e) => {
        reject === null || reject === void 0 ? void 0 : reject(e);
    });
    // Return the container HTML element wraps the canvas or svg element.
    return normalizeContainer(canvas.getConfig().container);
}
export function renderToMountedElement(options, context = {}, resolve = () => { }, reject = (e) => {
    throw e;
}) {
    var _a;
    // Initialize the context if it is not provided.
    const { width = 640, height = 480 } = options;
    const keyed = inferKeys(options);
    const { group = new Group(), emitter = new EventEmitter(), library, } = context;
    if (!(group === null || group === void 0 ? void 0 : group.parentElement)) {
        error(`renderToMountedElement can't render chart to unmounted group.`);
    }
    const selection = select(group);
    context.group = group;
    context.emitter = emitter;
    context.externals = {};
    context.canvas =
        context.canvas || ((_a = group === null || group === void 0 ? void 0 : group.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView);
    emitter.emit(ChartEvent.BEFORE_RENDER);
    // Plot the chart and mutate context.
    // Make sure that plot chart after container is ready for every time.
    plot(Object.assign(Object.assign({}, keyed), { width, height }), selection, context)
        .then(() => {
        var _a;
        (_a = context.canvas) === null || _a === void 0 ? void 0 : _a.requestAnimationFrame(() => {
            emitter.emit(ChartEvent.AFTER_RENDER);
            resolve === null || resolve === void 0 ? void 0 : resolve();
        });
    })
        .catch((e) => {
        reject === null || reject === void 0 ? void 0 : reject(e);
    });
    // Return the Group wraps the canvas or svg element.
    return group;
}
export function destroy(options, context = {}, isDestroyCanvas = false, isClearEvents = true) {
    const { canvas, emitter } = context;
    if (canvas) {
        destroyAllInteractions(canvas);
        isDestroyCanvas ? canvas.destroy() : canvas.destroyChildren();
    }
    if (isClearEvents) {
        emitter.off();
    }
}
/**
 * Destroy all interactions mounted on the canvas.
 */
function destroyAllInteractions(canvas) {
    const viewGroups = canvas.getRoot().querySelectorAll(`.${VIEW_CLASS_NAME}`);
    viewGroups === null || viewGroups === void 0 ? void 0 : viewGroups.forEach((group) => {
        const { nameInteraction = new Map() } = group;
        if ((nameInteraction === null || nameInteraction === void 0 ? void 0 : nameInteraction.size) > 0) {
            Array.from(nameInteraction === null || nameInteraction === void 0 ? void 0 : nameInteraction.values()).forEach((value) => {
                value === null || value === void 0 ? void 0 : value.destroy();
            });
        }
    });
}
function normalizeContainer(container) {
    return typeof container === 'string'
        ? document.getElementById(container)
        : container;
}
//# sourceMappingURL=render.js.map