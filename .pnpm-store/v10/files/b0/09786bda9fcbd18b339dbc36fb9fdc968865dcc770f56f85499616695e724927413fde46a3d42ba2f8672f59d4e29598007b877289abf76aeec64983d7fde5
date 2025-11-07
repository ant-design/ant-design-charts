"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeOf = sizeOf;
const util_1 = require("@antv/util");
const parseInt10 = (d) => (d ? parseInt(d) : 0);
/**
 * Get the container's bounding size.
 * @param container dom element.
 * @returns the container width and height
 */
function getContainerSize(container) {
    const style = getComputedStyle(container);
    const wrapperWidth = container.clientWidth || parseInt10(style.width);
    const wrapperHeight = container.clientHeight || parseInt10(style.height);
    const widthPadding = parseInt10(style.paddingLeft) + parseInt10(style.paddingRight);
    const heightPadding = parseInt10(style.paddingTop) + parseInt10(style.paddingBottom);
    return [wrapperWidth - widthPadding, wrapperHeight - heightPadding];
}
/**
 * Get the size of Graph.
 * @param container container of Graph
 * @returns Size of Graph
 */
function sizeOf(container) {
    if (!container)
        return [0, 0];
    let effectiveWidth = 640;
    let effectiveHeight = 480;
    const [containerWidth, containerHeight] = getContainerSize(container);
    effectiveWidth = containerWidth || effectiveWidth;
    effectiveHeight = containerHeight || effectiveHeight;
    /** Minimum width */
    const MIN_CHART_WIDTH = 1;
    /** Minimum height */
    const MIN_CHART_HEIGHT = 1;
    return [
        Math.max((0, util_1.isNumber)(effectiveWidth) ? effectiveWidth : MIN_CHART_WIDTH, MIN_CHART_WIDTH),
        Math.max((0, util_1.isNumber)(effectiveHeight) ? effectiveHeight : MIN_CHART_HEIGHT, MIN_CHART_HEIGHT),
    ];
}
//# sourceMappingURL=dom.js.map