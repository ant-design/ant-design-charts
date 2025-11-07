"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Morphing = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const utils_1 = require("./utils");
function localBBoxOf(shape) {
    const { min, max } = shape.getLocalBounds();
    const [x0, y0] = min;
    const [x1, y1] = max;
    const height = y1 - y0;
    const width = x1 - x0;
    return [x0, y0, width, height];
}
function d(bbox) {
    const [x, y, width, height] = bbox;
    return `
    M ${x} ${y}
    L ${x + width} ${y}
    L ${x + width} ${y + height}
    L ${x} ${y + height}
    Z
  `;
}
function pack(shape, count) {
    const [x0, y0, width, height] = localBBoxOf(shape);
    const aspect = height / width;
    const col = Math.ceil(Math.sqrt(count / aspect));
    const row = Math.ceil(count / col);
    const B = [];
    const h = height / row;
    let j = 0;
    let n = count;
    while (n > 0) {
        const c = Math.min(n, col);
        const w = width / c;
        for (let i = 0; i < c; i++) {
            const x = x0 + i * w;
            const y = y0 + j * h;
            B.push(d([x, y, w, h]));
        }
        n -= c;
        j += 1;
    }
    return B;
}
function normalizeSplit(split = 'pack') {
    if (typeof split == 'function')
        return split;
    return pack;
}
/**
 * Use attributes relative to geometry to do shape to shape animation.
 *
 * For example, the x, y, width, height of `Rect`, the cx, cy, r of `Circle`.
 * And for `Group`, it will use the bbox of the group.
 */
function shapeToShape(from, to, timeEffect) {
    let { transform: fromTransform } = from.style;
    const { transform: toTransform } = to.style;
    // Replace first to get right bbox after mounting.
    replaceChild(to, from);
    let keys = utils_1.attributeKeys;
    if (from.nodeName === g_1.Shape.GROUP) {
        // Apply translate and scale transform.
        const [x0, y0, w0, h0] = localBBoxOf(from);
        const [x1, y1, w1, h1] = localBBoxOf(to);
        const dx = x0 - x1;
        const dy = y0 - y1;
        const sx = w0 / w1;
        const sy = h0 / h1;
        fromTransform = `translate(${dx}, ${dy}) scale(${sx}, ${sy})`;
    }
    else {
        keys = keys.concat(utils_1.GEOMETRY_ATTRIBUTES[from.nodeName] || []);
    }
    const keyframes = [
        Object.assign({ transform: fromTransform !== null && fromTransform !== void 0 ? fromTransform : 'none' }, (0, utils_1.attributeOf)(from, keys, true)),
        Object.assign({ transform: toTransform !== null && toTransform !== void 0 ? toTransform : 'none' }, (0, utils_1.attributeOf)(to, keys, true)),
    ];
    const animation = to.animate(keyframes, timeEffect);
    return animation;
}
/**
 * Replace object and copy className and __data__
 */
function replaceChild(newChild, oldChild) {
    newChild['__data__'] = oldChild['__data__'];
    newChild.className = oldChild.className;
    // @ts-ignore
    newChild.markType = oldChild.markType;
    oldChild.parentNode.replaceChild(newChild, oldChild);
}
/**
 * Replace element with a path shape.
 */
function maybePath(node, d) {
    const { nodeName } = node;
    if (nodeName === 'path')
        return node;
    const path = new g_1.Path({
        style: Object.assign(Object.assign({}, (0, utils_1.attributeOf)(node, utils_1.attributeKeys)), { d }),
    });
    replaceChild(path, node);
    return path;
}
function hasUniqueString(search, pattern) {
    const first = search.indexOf(pattern);
    const last = search.lastIndexOf(pattern);
    return first === last;
}
// Path definition with multiple m and M command has sub path.
// eg. 'M10,10...M20,20', 'm10,10...m20,20'
function hasSubPath(path) {
    return !hasUniqueString(path, 'm') || !hasUniqueString(path, 'M');
}
function shape2path(shape) {
    const path = (0, g_1.convertToPath)(shape);
    if (!path)
        return;
    // Path definition with sub path can't do path morphing animation,
    // so skip this kind of path.
    if (hasSubPath(path))
        return;
    return path;
}
// Check if the path has a markerEnd | markerStart
function hasMarker(shape) {
    const { nodeName } = shape;
    if (nodeName === 'path') {
        const attributes = (0, util_1.get)(shape, 'attributes');
        return attributes.markerEnd || attributes.markerStart;
    }
    return false;
}
function oneToOne(shape, from, to, timeEffect) {
    // If the nodeTypes of from and to are equal,
    // or non of them can convert to path,
    // the apply shape to shape animation.
    const { nodeName: fromName } = from;
    const { nodeName: toName } = to;
    const fromPath = shape2path(from);
    const toPath = shape2path(to);
    const { opacity: fromOpacity = 1, strokeOpacity: fromStrokeOpacity = 1, fillOpacity: fromFillOpacity = 1, } = from.style;
    const { opacity: toOpacity = 1, strokeOpacity: toStrokeOpacity = 1, fillOpacity: toFillOpacity = 1, } = to.style;
    const isSameNodes = fromName === toName && fromName !== 'path';
    const hasNonPathNode = fromPath === undefined || toPath === undefined;
    // Path with mark can not use animate like ordinary path.
    const isPathWithMarker = hasMarker(from) || hasMarker(to);
    if (isSameNodes || hasNonPathNode || isPathWithMarker)
        return shapeToShape(from, to, timeEffect);
    const pathShape = maybePath(shape, fromPath);
    // Convert Path will take transform, anchor, etc into account,
    // so there is no need to specify these attributes in keyframes.
    const fromKeyframes = Object.assign(Object.assign({}, (0, utils_1.attributeOf)(from, utils_1.attributeKeys)), { opacity: fromOpacity, strokeOpacity: fromStrokeOpacity, fillOpacity: fromFillOpacity });
    const toKeyframes = Object.assign(Object.assign({}, (0, utils_1.attributeOf)(to, utils_1.attributeKeys)), { opacity: toOpacity, strokeOpacity: toStrokeOpacity, fillOpacity: toFillOpacity });
    const keyframes = [fromKeyframes, toKeyframes];
    if (fromPath !== toPath) {
        keyframes[0].d = fromPath;
        keyframes[1].d = toPath;
        const animation = pathShape.animate(keyframes, timeEffect);
        animation.onfinish = () => {
            // Should keep the original path definition.
            (0, helper_1.copyAttributes)(pathShape, to);
            pathShape.style.d = toPath;
            pathShape.style.transform = 'none';
        };
        // Remove transform because it already applied in path
        // converted by convertToPath.
        pathShape.style.transform = 'none';
        return animation;
    }
    // If fromKeyframes and toKeyframes are not equal, apply animation.
    if (!(0, util_1.isEqual)(fromKeyframes, toKeyframes)) {
        return pathShape.animate(keyframes, timeEffect);
    }
    // No need to apply animation since fromKeyframes equals toKeyframes.
    return null;
}
function oneToMultiple(from, to, timeEffect, split) {
    // Hide the shape to be split before being removing.
    from.style.visibility = 'hidden';
    const D = split(from, to.length);
    return to.map((shape, i) => {
        const path = new g_1.Path({
            style: Object.assign({ d: D[i] }, (0, utils_1.attributeOf)(from, utils_1.attributeKeys)),
        });
        return oneToOne(shape, path, shape, timeEffect);
    });
}
function multipleToOne(from, to, timeEffect, split) {
    const D = split(to, from.length);
    const { fillOpacity = 1, strokeOpacity = 1, opacity = 1 } = to.style;
    const keyframes = [
        { fillOpacity: 0, strokeOpacity: 0, opacity: 0 },
        { fillOpacity: 0, strokeOpacity: 0, opacity: 0, offset: 0.99 },
        {
            fillOpacity,
            strokeOpacity,
            opacity,
        },
    ];
    const animation = to.animate(keyframes, timeEffect);
    const animations = from.map((shape, i) => {
        const path = new g_1.Path({
            style: {
                d: D[i],
                fill: to.style.fill,
            },
        });
        return oneToOne(shape, shape, path, timeEffect);
    });
    return [...animations, animation];
}
/**
 * Morphing animations.
 * @todo Support more split function.
 */
const Morphing = (options) => {
    return (from, to, defaults) => {
        const split = normalizeSplit(options.split);
        const timeEffect = Object.assign(Object.assign({}, defaults), options);
        const { length: fl } = from;
        const { length: tl } = to;
        if ((fl === 1 && tl === 1) || (fl > 1 && tl > 1)) {
            const [f] = from;
            const [t] = to;
            return oneToOne(f, f, t, timeEffect);
        }
        if (fl === 1 && tl > 1) {
            const [f] = from;
            return oneToMultiple(f, to, timeEffect, split);
        }
        if (fl > 1 && tl === 1) {
            const [t] = to;
            return multipleToOne(from, t, timeEffect, split);
        }
        return null;
    };
};
exports.Morphing = Morphing;
exports.Morphing.props = {};
//# sourceMappingURL=morphing.js.map