import { __assign, __extends, __read, __rest } from "tslib";
import { Circle, } from '@antv/g';
import { isUndefined } from '@antv/util';
import { Marker } from '../../marker';
import { Component } from '../../../core';
import { classNames, copyAttributes, ellipsisIt, ifShow, parseSeriesAttr, renderExtDo, scaleToPixel, select, subStyleProps, deepAssign, } from '../../../util';
import { Poptip } from '../../poptip';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../constant';
var CLASS_NAMES = classNames({
    layout: 'flex',
    markerGroup: 'marker-group',
    marker: 'marker',
    labelGroup: 'label-group',
    label: 'label',
    valueGroup: 'value-group',
    focusGroup: 'focus-group',
    focus: 'focus',
    value: 'value',
    backgroundGroup: 'background-group',
    background: 'background',
}, 'legend-category-item');
var DEFAULT_POPTIP_PROPS = {
    offset: [0, 20],
    domStyles: {
        '.component-poptip': {
            opacity: '1',
            padding: '8px 12px',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        },
        '.component-poptip-arrow': {
            display: 'none',
        },
        '.component-poptip-text': {
            color: '#000',
            lineHeight: '20px',
        },
    },
};
function styleOfMarker(group) {
    var marker = group.querySelector(CLASS_NAMES.marker.class);
    if (marker)
        return marker.style;
    return {};
}
var CategoryItem = /** @class */ (function (_super) {
    __extends(CategoryItem, _super);
    function CategoryItem(options, keyFields) {
        var _this = _super.call(this, options, {
            span: [1, 1],
            marker: function () { return new Circle({ style: { r: 6 } }); },
            markerSize: 10,
            labelFill: '#646464',
            valueFill: '#646464',
            labelFontSize: 12,
            valueFontSize: 12,
            labelTextBaseline: 'middle',
            valueTextBaseline: 'middle',
        }) || this;
        // Key fields, used to pass extra info like id, index for poptip rendering
        _this.keyFields = {};
        _this.keyFields = keyFields || {};
        return _this;
    }
    Object.defineProperty(CategoryItem.prototype, "showValue", {
        get: function () {
            var valueText = this.attributes.valueText;
            if (!valueText)
                return false;
            if (typeof valueText === 'string' || typeof valueText === 'number')
                return valueText !== '';
            if (typeof valueText === 'function')
                return true;
            return valueText.attr('text') !== '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItem.prototype, "actualSpace", {
        get: function () {
            var label = this.labelGroup;
            var value = this.valueGroup;
            var _a = this.attributes, markerSize = _a.markerSize, focus = _a.focus, focusMarkerSize = _a.focusMarkerSize;
            var _b = label.node().getBBox(), labelWidth = _b.width, labelHeight = _b.height;
            var _c = value.node().getBBox(), valueWidth = _c.width, valueHeight = _c.height;
            var focusWidth = focus ? focusMarkerSize !== null && focusMarkerSize !== void 0 ? focusMarkerSize : 12 : 0;
            return {
                markerWidth: markerSize,
                labelWidth: labelWidth,
                valueWidth: valueWidth,
                focusWidth: focusWidth,
                height: Math.max(markerSize, labelHeight, valueHeight),
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItem.prototype, "span", {
        get: function () {
            var span = this.attributes.span;
            if (!span)
                return [1, 1];
            var _a = __read(parseSeriesAttr(span), 2), span1 = _a[0], innerSpan = _a[1];
            var span2 = this.showValue ? innerSpan : 0;
            var basis = span1 + span2;
            return [span1 / basis, span2 / basis];
        },
        enumerable: false,
        configurable: true
    });
    CategoryItem.prototype.setAttribute = function (n, v) {
        _super.prototype.setAttribute.call(this, n, v);
    };
    Object.defineProperty(CategoryItem.prototype, "shape", {
        get: function () {
            var _a;
            var _b = this.attributes, markerSize = _b.markerSize, fullWidth = _b.width;
            var actualSpace = this.actualSpace;
            var markerWidth = actualSpace.markerWidth, focusWidth = actualSpace.focusWidth, height = actualSpace.height;
            var _c = this.actualSpace, labelWidth = _c.labelWidth, valueWidth = _c.valueWidth;
            var _d = __read(this.spacing, 3), spacing1 = _d[0], spacing2 = _d[1], spacing3 = _d[2];
            if (fullWidth) {
                var width_1 = fullWidth - markerSize - spacing1 - spacing2 - focusWidth - spacing3;
                var _e = __read(this.span, 2), span1 = _e[0], span2 = _e[1];
                _a = __read([span1 * width_1, span2 * width_1], 2), labelWidth = _a[0], valueWidth = _a[1];
            }
            var width = markerWidth + labelWidth + valueWidth + spacing1 + spacing2 + focusWidth + spacing3;
            return { width: width, height: height, markerWidth: markerWidth, labelWidth: labelWidth, valueWidth: valueWidth, focusWidth: focusWidth };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItem.prototype, "spacing", {
        get: function () {
            var _a = this.attributes, spacing = _a.spacing, focus = _a.focus;
            if (!spacing)
                return [0, 0, 0];
            var _b = __read(parseSeriesAttr(spacing), 3), spacing1 = _b[0], spacing2 = _b[1], spacing3 = _b[2];
            return [spacing1, this.showValue ? spacing2 : 0, focus ? spacing3 : 0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItem.prototype, "layout", {
        get: function () {
            var _a = this.shape, markerWidth = _a.markerWidth, labelWidth = _a.labelWidth, valueWidth = _a.valueWidth, focusWidth = _a.focusWidth, width = _a.width, height = _a.height;
            var _b = __read(this.spacing, 3), spacing1 = _b[0], spacing2 = _b[1], spacing3 = _b[2];
            return {
                height: height,
                width: width,
                markerWidth: markerWidth,
                labelWidth: labelWidth,
                valueWidth: valueWidth,
                focusWidth: focusWidth,
                position: [
                    markerWidth / 2,
                    markerWidth + spacing1,
                    markerWidth + labelWidth + spacing1 + spacing2,
                    markerWidth + labelWidth + valueWidth + spacing1 + spacing2 + spacing3 + focusWidth / 2,
                ],
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryItem.prototype, "scaleSize", {
        get: function () {
            var markerShapeStyle = styleOfMarker(this.markerGroup.node());
            var _a = this.attributes, markerSize = _a.markerSize, _b = _a.markerStrokeWidth, markerStrokeWidth = _b === void 0 ? markerShapeStyle.strokeWidth : _b, _c = _a.markerLineWidth, markerLineWidth = _c === void 0 ? markerShapeStyle.lineWidth : _c, _d = _a.markerStroke, markerStroke = _d === void 0 ? markerShapeStyle.stroke : _d;
            // empirical value
            var strokeWidth = +(markerStrokeWidth || markerLineWidth || (markerStroke ? 1 : 0)) * Math.sqrt(2);
            var _e = this.markerGroup.node().getBBox(), width = _e.width, height = _e.height;
            return (1 - strokeWidth / Math.max(width, height)) * markerSize;
        },
        enumerable: false,
        configurable: true
    });
    CategoryItem.prototype.renderMarker = function (container) {
        var _this = this;
        var _a = this.attributes, marker = _a.marker, classNamePrefix = _a.classNamePrefix;
        var style = subStyleProps(this.attributes, 'marker');
        this.markerGroup = container.maybeAppendByClassName(CLASS_NAMES.markerGroup, 'g').style('zIndex', 0);
        ifShow(!!marker, this.markerGroup, function () {
            var _a;
            var parent = _this.markerGroup.node();
            var oldMarker = (_a = parent.childNodes) === null || _a === void 0 ? void 0 : _a[0];
            var markerClassName = getLegendClassName(CLASS_NAMES.marker.name, CLASSNAME_SUFFIX_MAP.marker, classNamePrefix);
            var newMarker = typeof marker === 'string' ? new Marker({ style: { symbol: marker }, className: markerClassName }) : marker();
            if (!oldMarker) {
                if (!(newMarker instanceof Marker)) {
                    var markerClassName_1 = getLegendClassName(CLASS_NAMES.marker.name, CLASSNAME_SUFFIX_MAP.marker, classNamePrefix);
                    newMarker.className = markerClassName_1;
                    select(newMarker).styles(style);
                }
                parent.appendChild(newMarker);
            }
            else if (newMarker.nodeName === oldMarker.nodeName) {
                if (oldMarker instanceof Marker)
                    oldMarker.update(__assign(__assign({}, style), { symbol: marker }));
                else {
                    copyAttributes(oldMarker, newMarker);
                    select(oldMarker).styles(style);
                }
            }
            else {
                oldMarker.remove();
                if (!(newMarker instanceof Marker)) {
                    var markerClassName_2 = getLegendClassName(CLASS_NAMES.marker.name, CLASSNAME_SUFFIX_MAP.marker, classNamePrefix);
                    newMarker.className = markerClassName_2;
                }
                select(newMarker).styles(style);
                parent.appendChild(newMarker);
            }
            // record the scale of marker
            _this.markerGroup.node().scale(1 / _this.markerGroup.node().getScale()[0]);
            var scale = scaleToPixel(_this.markerGroup.node(), _this.scaleSize, true);
            _this.markerGroup.node().style._transform = "scale(".concat(scale, ")");
        });
    };
    CategoryItem.prototype.renderLabel = function (container) {
        var _a = subStyleProps(this.attributes, 'label'), label = _a.text, style = __rest(_a, ["text"]);
        var classNamePrefix = this.attributes.classNamePrefix;
        this.labelGroup = container.maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g').style('zIndex', 0);
        var labelClassName = getLegendClassName(CLASS_NAMES.label.name, CLASSNAME_SUFFIX_MAP.label, classNamePrefix);
        var labelElement = this.labelGroup.maybeAppendByClassName(CLASS_NAMES.label, function () { return renderExtDo(label); });
        labelElement.node().setAttribute('class', labelClassName);
        labelElement.styles(style);
    };
    CategoryItem.prototype.renderValue = function (container) {
        var _this = this;
        var _a = subStyleProps(this.attributes, 'value'), value = _a.text, style = __rest(_a, ["text"]);
        var classNamePrefix = this.attributes.classNamePrefix;
        this.valueGroup = container.maybeAppendByClassName(CLASS_NAMES.valueGroup, 'g').style('zIndex', 0);
        ifShow(this.showValue, this.valueGroup, function () {
            var valueClassName = getLegendClassName(CLASS_NAMES.value.name, CLASSNAME_SUFFIX_MAP.value, classNamePrefix);
            var valueElement = _this.valueGroup.maybeAppendByClassName(CLASS_NAMES.value, function () { return renderExtDo(value); });
            valueElement.node().setAttribute('class', valueClassName);
            valueElement.styles(style);
        });
    };
    CategoryItem.prototype.createPoptip = function () {
        var poptip = this.attributes.poptip;
        var _a = poptip || {}, render = _a.render, poptipStyle = __rest(_a, ["render"]);
        var poptipGroup = new Poptip({ style: deepAssign(DEFAULT_POPTIP_PROPS, poptipStyle) });
        this.poptipGroup = poptipGroup;
        return poptipGroup;
    };
    CategoryItem.prototype.bindPoptip = function (node) {
        var _this = this;
        var poptip = this.attributes.poptip;
        if (!poptip)
            return;
        var poptipGroup = this.poptipGroup || this.createPoptip();
        poptipGroup.bind(node, function () {
            var _a = _this.attributes, labelText = _a.labelText, valueText = _a.valueText, markerFill = _a.markerFill;
            var label = typeof labelText === 'string' ? labelText : labelText === null || labelText === void 0 ? void 0 : labelText.attr('text');
            var value = typeof valueText === 'string' ? valueText : valueText === null || valueText === void 0 ? void 0 : valueText.attr('text');
            if (typeof poptip.render === 'function') {
                return { html: poptip.render(__assign(__assign({}, _this.keyFields), { label: label, value: value, color: markerFill })) };
            }
            var html = '';
            if (typeof label === 'string' || typeof label === 'number') {
                html += "<div class=\"component-poptip-label\">".concat(label, "</div>");
            }
            if (typeof value === 'string' || typeof value === 'number') {
                html += "<div class=\"component-poptip-value\">".concat(value, "</div>");
            }
            return { html: html };
        });
    };
    CategoryItem.prototype.renderFocus = function (ctn) {
        var _this = this;
        var _a = this.attributes, focus = _a.focus, focusMarkerSize = _a.focusMarkerSize, classNamePrefix = _a.classNamePrefix;
        var defaultOptions = {
            x: 0,
            y: 0,
            size: focusMarkerSize,
            opacity: 0.6,
            symbol: 'focus',
            stroke: '#aaaaaa',
            lineWidth: 1,
        };
        if (isUndefined(focus))
            return;
        this.focusGroup = ctn.maybeAppendByClassName(CLASS_NAMES.focusGroup, 'g').style('zIndex', 0);
        ifShow(focus, this.focusGroup, function () {
            var focusClassName = getLegendClassName(CLASS_NAMES.focus.name, CLASSNAME_SUFFIX_MAP.focusIcon, classNamePrefix);
            var marker = new Marker({
                style: __assign(__assign({}, defaultOptions), { symbol: 'focus' }),
                className: focusClassName,
            });
            var interactiveCircle = new Circle({
                style: {
                    r: defaultOptions.size / 2,
                    fill: 'transparent',
                },
            });
            var container = _this.focusGroup.node();
            container.appendChild(interactiveCircle);
            container.appendChild(marker);
            marker.update({ opacity: 0 });
            ctn.node().addEventListener('pointerenter', function () {
                marker.update({ opacity: 1 });
            });
            ctn.node().addEventListener('pointerleave', function () {
                marker.update({ opacity: 0 });
            });
        });
    };
    CategoryItem.prototype.renderPoptip = function (ctn) {
        var _this = this;
        var poptip = this.attributes.poptip;
        if (!poptip)
            return;
        var valueNode = ctn.maybeAppendByClassName(CLASS_NAMES.value, 'g').node();
        var labelNode = ctn.maybeAppendByClassName(CLASS_NAMES.label, 'g').node();
        [valueNode, labelNode].forEach(function (node) {
            if (node) {
                _this.bindPoptip(node);
            }
        });
    };
    CategoryItem.prototype.renderBackground = function (container) {
        var _a = this.shape, width = _a.width, height = _a.height;
        var style = subStyleProps(this.attributes, 'background');
        this.background = container.maybeAppendByClassName(CLASS_NAMES.backgroundGroup, 'g').style('zIndex', -1);
        var backgroundElement = this.background.maybeAppendByClassName(CLASS_NAMES.background, 'rect');
        backgroundElement.styles(__assign({ width: width, height: height }, style));
        var _b = this.attributes.classNamePrefix, classNamePrefix = _b === void 0 ? '' : _b;
        if (classNamePrefix) {
            var backgroundClassName = getLegendClassName(CLASS_NAMES.background.name, CLASSNAME_SUFFIX_MAP.background, classNamePrefix);
            backgroundElement.node().setAttribute('class', backgroundClassName);
        }
    };
    CategoryItem.prototype.adjustLayout = function () {
        var _a = this.layout, labelWidth = _a.labelWidth, valueWidth = _a.valueWidth, height = _a.height, _b = __read(_a.position, 4), markerX = _b[0], labelX = _b[1], valueX = _b[2], focusX = _b[3];
        var halfHeight = height / 2;
        // console.log(this.markerGroup.node().style._transform);
        this.markerGroup.styles({
            transform: "translate(".concat(markerX, ", ").concat(halfHeight, ")").concat(this.markerGroup.node().style._transform),
        });
        this.labelGroup.styles({ transform: "translate(".concat(labelX, ", ").concat(halfHeight, ")") });
        if (this.focusGroup)
            this.focusGroup.styles({ transform: "translate(".concat(focusX, ", ").concat(halfHeight, ")") });
        ellipsisIt(this.labelGroup.select(CLASS_NAMES.label.class).node(), Math.ceil(labelWidth));
        if (this.showValue) {
            this.valueGroup.styles({ transform: "translate(".concat(valueX, ", ").concat(halfHeight, ")") });
            ellipsisIt(this.valueGroup.select(CLASS_NAMES.value.class).node(), Math.ceil(valueWidth));
        }
    };
    CategoryItem.prototype.render = function (attributes, container) {
        var ctn = select(container);
        var _a = attributes.x, x = _a === void 0 ? 0 : _a, _b = attributes.y, y = _b === void 0 ? 0 : _b;
        ctn.styles({ transform: "translate(".concat(x, ", ").concat(y, ")") });
        this.renderMarker(ctn);
        this.renderLabel(ctn);
        this.renderValue(ctn);
        this.renderBackground(ctn);
        this.renderPoptip(ctn);
        this.renderFocus(ctn);
        this.adjustLayout();
    };
    return CategoryItem;
}(Component));
export { CategoryItem };
//# sourceMappingURL=item.js.map