import { __assign, __extends, __read } from "tslib";
import { parseColor } from '@antv/g';
import { isFunction } from '@antv/util';
import { Component } from '../../../core';
import { classNames, select, subStyleProps } from '../../../util';
import { ifHorizontal } from '../utils';
import { getBlockColor } from './utils';
var CLASS_NAMES = classNames({
    trackGroup: 'background-group',
    track: 'background',
    selectionGroup: 'ribbon-group',
    selection: 'ribbon',
    clipPath: 'clip-path',
}, 'ribbon');
function getShape(attr) {
    var orientation = attr.orientation, size = attr.size, length = attr.length;
    return ifHorizontal(orientation, [length, size], [size, length]);
}
function getTrackPath(attr) {
    var type = attr.type;
    var _a = __read(getShape(attr), 2), cw = _a[0], ch = _a[1];
    if (type === 'size') {
        return [['M', 0, ch], ['L', 0 + cw, 0], ['L', 0 + cw, ch], ['Z']];
    }
    return [['M', 0, ch], ['L', 0, 0], ['L', 0 + cw, 0], ['L', 0 + cw, ch], ['Z']];
}
function getSelectionPath(attr) {
    return getTrackPath(attr);
}
function getColor(attr) {
    var orientation = attr.orientation, color = attr.color, block = attr.block, partition = attr.partition;
    var colors;
    if (isFunction(color)) {
        var len = 20;
        colors = new Array(len).fill(0).map(function (_, index, arr) { return color(index / (arr.length - 1)); });
    }
    else
        colors = color;
    var count = colors.length;
    var genericColor = colors.map(function (c) { return parseColor(c).toString(); });
    if (!count)
        return '';
    if (count === 1)
        return genericColor[0];
    if (block)
        return getBlockColor(partition, genericColor, orientation);
    return genericColor.reduce(function (r, c, idx) { return (r += " ".concat(idx / (count - 1), ":").concat(c)); }, "l(".concat(ifHorizontal(orientation, '0', '270'), ")"));
}
function getClipPath(attr) {
    var orientation = attr.orientation, range = attr.range;
    if (!range)
        return [];
    var _a = __read(getShape(attr), 2), width = _a[0], height = _a[1];
    var _b = __read(range, 2), st = _b[0], et = _b[1];
    var x = ifHorizontal(orientation, st * width, 0);
    var y = ifHorizontal(orientation, 0, st * height);
    var w = ifHorizontal(orientation, et * width, width);
    var h = ifHorizontal(orientation, height, et * height);
    return [['M', x, y], ['L', x, h], ['L', w, h], ['L', w, y], ['Z']];
}
function renderTrack(container, attr) {
    var style = subStyleProps(attr, 'track');
    container.maybeAppendByClassName(CLASS_NAMES.track, 'path').styles(__assign({ d: getTrackPath(attr) }, style));
}
function renderSelection(container, attr) {
    var style = subStyleProps(attr, 'selection');
    var fill = getColor(attr);
    var ribbon = container
        .maybeAppendByClassName(CLASS_NAMES.selection, 'path')
        .styles(__assign({ d: getSelectionPath(attr), fill: fill }, style));
    var clipPath = ribbon
        .maybeAppendByClassName(CLASS_NAMES.clipPath, 'path')
        .styles({ d: getClipPath(attr) })
        .node();
    ribbon.style('clipPath', clipPath);
}
var Ribbon = /** @class */ (function (_super) {
    __extends(Ribbon, _super);
    function Ribbon(options) {
        return _super.call(this, options, {
            type: 'color',
            orientation: 'horizontal',
            size: 30,
            range: [0, 1],
            length: 200,
            block: false,
            partition: [],
            color: ['#fff', '#000'],
            trackFill: '#e5e5e5',
        }) || this;
    }
    Ribbon.prototype.render = function (attribute, container) {
        var trackGroup = select(container).maybeAppendByClassName(CLASS_NAMES.trackGroup, 'g');
        renderTrack(trackGroup, attribute);
        /**
         * - ribbon group
         *  |- ribbon
         * - clip path
         */
        var ribbonGroup = select(container).maybeAppendByClassName(CLASS_NAMES.selectionGroup, 'g');
        renderSelection(ribbonGroup, attribute);
    };
    return Ribbon;
}(Component));
export { Ribbon };
//# sourceMappingURL=ribbon.js.map