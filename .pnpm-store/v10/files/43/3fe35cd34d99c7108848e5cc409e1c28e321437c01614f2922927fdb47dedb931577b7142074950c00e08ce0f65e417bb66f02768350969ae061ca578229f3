import { __assign, __extends, __read, __rest } from "tslib";
import { Component } from '../../../core';
import { classNames, ifShow, select, subStyleProps } from '../../../util';
import { Marker } from '../../marker';
import { ifHorizontal } from '../utils';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../classname-map';
var CLASS_NAMES = classNames({
    markerGroup: 'marker-group',
    marker: 'marker',
    labelGroup: 'label-group',
    label: 'label',
}, 'handle');
// todo @xiaoiver, 配置 TEXT_INHERITABLE_PROPS 后文本包围盒依旧不准确
export var DEFAULT_HANDLE_CFG = {
    showLabel: true,
    formatter: function (val) { return val.toString(); },
    markerSize: 25,
    markerStroke: '#c5c5c5',
    markerFill: '#fff',
    markerLineWidth: 1,
    labelFontSize: 12,
    labelFill: '#c5c5c5',
    labelText: '',
    orientation: 'vertical',
    spacing: 0,
};
var Handle = /** @class */ (function (_super) {
    __extends(Handle, _super);
    function Handle(options) {
        return _super.call(this, options, DEFAULT_HANDLE_CFG) || this;
    }
    Handle.prototype.render = function (attributes, container) {
        var markerGroup = select(container).maybeAppendByClassName(CLASS_NAMES.markerGroup, 'g');
        this.renderMarker(markerGroup);
        var labelGroup = select(container).maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g');
        this.renderLabel(labelGroup);
    };
    Handle.prototype.renderMarker = function (container) {
        var _this = this;
        var _a = this.attributes, orientation = _a.orientation, classNamePrefix = _a.classNamePrefix, _b = _a.markerSymbol, markerSymbol = _b === void 0 ? ifHorizontal(orientation, 'horizontalHandle', 'verticalHandle') : _b;
        ifShow(!!markerSymbol, container, function (group) {
            var handleStyle = subStyleProps(_this.attributes, 'marker');
            var markerStyle = __assign({ symbol: markerSymbol }, handleStyle);
            var markerClassName = getLegendClassName(CLASS_NAMES.marker.name, CLASSNAME_SUFFIX_MAP.handleMarker, classNamePrefix);
            _this.marker = group
                .maybeAppendByClassName(CLASS_NAMES.marker, function () {
                return new Marker({
                    style: markerStyle,
                    className: markerClassName,
                });
            })
                .update(markerStyle);
            // Update Marker's child element className (Marker component overrides className internally)
            if (classNamePrefix) {
                var markerElement = _this.marker.node().querySelector('.marker');
                if (markerElement) {
                    var currentClass = markerElement.getAttribute('class') || '';
                    var baseClass = currentClass.split(' ')[0]; // e.g., 'marker'
                    var legendClassName = getLegendClassName(baseClass, CLASSNAME_SUFFIX_MAP.handleMarker, classNamePrefix);
                    markerElement.setAttribute('class', legendClassName);
                }
            }
        });
    };
    Handle.prototype.renderLabel = function (container) {
        var _this = this;
        var _a = this.attributes, showLabel = _a.showLabel, orientation = _a.orientation, _b = _a.spacing, spacing = _b === void 0 ? 0 : _b, formatter = _a.formatter, classNamePrefix = _a.classNamePrefix;
        ifShow(showLabel, container, function (group) {
            var _a;
            var _b = subStyleProps(_this.attributes, 'label'), text = _b.text, labelStyle = __rest(_b, ["text"]);
            // adjust layout
            var _c = ((_a = group.select(CLASS_NAMES.marker.class)) === null || _a === void 0 ? void 0 : _a.node().getBBox()) || {}, _d = _c.width, width = _d === void 0 ? 0 : _d, _e = _c.height, height = _e === void 0 ? 0 : _e;
            var _f = __read(ifHorizontal(orientation, [0, height + spacing, 'center', 'top'], [width + spacing, 0, 'start', 'middle']), 4), x = _f[0], y = _f[1], textAlign = _f[2], textBaseline = _f[3];
            var labelClassName = getLegendClassName(CLASS_NAMES.label.name, CLASSNAME_SUFFIX_MAP.handleLabel, classNamePrefix);
            group
                .maybeAppendByClassName(CLASS_NAMES.label, 'text')
                .attr('className', labelClassName)
                .styles(__assign(__assign({}, labelStyle), { x: x, y: y, text: formatter(text).toString(), textAlign: textAlign, textBaseline: textBaseline }));
        });
    };
    return Handle;
}(Component));
export { Handle };
//# sourceMappingURL=handle.js.map