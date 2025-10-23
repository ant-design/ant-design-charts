"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle = void 0;
var tslib_1 = require("tslib");
var core_1 = require("../../core");
var util_1 = require("../../util");
var constant_1 = require("./constant");
var CLASS_NAMES = (0, util_1.classNames)({
    labelGroup: 'label-group',
    label: 'label',
    iconGroup: 'icon-group',
    icon: 'icon',
    iconRect: 'icon-rect',
    iconLine: 'icon-line',
}, 'handle');
var HandleIcon = /** @class */ (function (_super) {
    tslib_1.__extends(HandleIcon, _super);
    function HandleIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandleIcon.prototype.render = function (attributes, container) {
        var x = attributes.x, y = attributes.y, _a = attributes.size, size = _a === void 0 ? 10 : _a, _b = attributes.radius, radius = _b === void 0 ? size / 4 : _b, orientation = attributes.orientation, iconStyle = tslib_1.__rest(attributes, ["x", "y", "size", "radius", "orientation"]);
        // 默认手柄
        var width = size;
        var height = width * 2.4;
        var rect = (0, util_1.select)(container)
            .maybeAppendByClassName(CLASS_NAMES.iconRect, 'rect')
            .styles(tslib_1.__assign(tslib_1.__assign({}, iconStyle), { width: width, height: height, radius: radius, x: x - width / 2, y: y - height / 2, transformOrigin: 'center' }));
        var x1 = x + (1 / 3) * width - width / 2;
        var x2 = x + (2 / 3) * width - width / 2;
        var y1 = y + (1 / 4) * height - height / 2;
        var y2 = y + (3 / 4) * height - height / 2;
        rect.maybeAppendByClassName("".concat(CLASS_NAMES.iconLine, "-1"), 'line').styles(tslib_1.__assign({ x1: x1, x2: x1, y1: y1, y2: y2 }, iconStyle));
        rect.maybeAppendByClassName("".concat(CLASS_NAMES.iconLine, "-2"), 'line').styles(tslib_1.__assign({ x1: x2, x2: x2, y1: y1, y2: y2 }, iconStyle));
        if (orientation === 'vertical')
            rect.node().style.transform = 'rotate(90)';
    };
    return HandleIcon;
}(core_1.Component));
var Handle = /** @class */ (function (_super) {
    tslib_1.__extends(Handle, _super);
    function Handle(options) {
        return _super.call(this, options, constant_1.HANDLE_DEFAULT_CFG) || this;
    }
    Handle.prototype.renderLabel = function (container) {
        var _this = this;
        var _a = this.attributes, x = _a.x, y = _a.y, showLabel = _a.showLabel;
        var _b = (0, util_1.subStyleProps)(this.attributes, 'label'), _c = _b.x, labelX = _c === void 0 ? 0 : _c, _d = _b.y, labelY = _d === void 0 ? 0 : _d, transform = _b.transform, transformOrigin = _b.transformOrigin, style = tslib_1.__rest(_b, ["x", "y", "transform", "transformOrigin"]);
        var _e = tslib_1.__read((0, util_1.splitStyle)(style, []), 2), labelStyle = _e[0], groupStyle = _e[1];
        var labelGroup = (0, util_1.select)(container).maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g').styles(groupStyle);
        // @ts-ignore
        var _f = tslib_1.__assign(tslib_1.__assign({}, constant_1.HANDLE_LABEL_DEFAULT_CFG), labelStyle), text = _f.text, rest = tslib_1.__rest(_f, ["text"]);
        (0, util_1.ifShow)(!!showLabel, labelGroup, function (group) {
            _this.label = group.maybeAppendByClassName(CLASS_NAMES.label, 'text').styles(tslib_1.__assign(tslib_1.__assign({}, rest), { x: x + labelX, y: y + labelY, transform: transform, transformOrigin: transformOrigin, text: "".concat(text) }));
            /** avoid trigger event on label */
            _this.label.on('mousedown', function (e) {
                e.stopPropagation();
            });
            _this.label.on('touchstart', function (e) {
                e.stopPropagation();
            });
        });
    };
    Handle.prototype.renderIcon = function (container) {
        var _a = this.attributes, x = _a.x, y = _a.y, orientation = _a.orientation, type = _a.type;
        var iconStyle = tslib_1.__assign(tslib_1.__assign({ x: x, y: y, orientation: orientation }, constant_1.HANDLE_ICON_DEFAULT_CFG), (0, util_1.subStyleProps)(this.attributes, 'icon'));
        var _b = this.attributes.iconShape, iconShape = _b === void 0 ? function () { return new HandleIcon({ style: iconStyle }); } : _b;
        var iconGroup = (0, util_1.select)(container).maybeAppendByClassName(CLASS_NAMES.iconGroup, 'g');
        iconGroup
            .selectAll(CLASS_NAMES.icon.class)
            .data([iconShape])
            .join(function (enter) {
            return enter
                .append(typeof iconShape === 'string' ? iconShape : function () { return iconShape(type); })
                .attr('className', CLASS_NAMES.icon.name);
        }, function (update) { return update.update(iconStyle); }, function (exit) { return exit.remove(); });
    };
    Handle.prototype.render = function (attributes, container) {
        this.renderIcon(container);
        this.renderLabel(container);
    };
    return Handle;
}(core_1.Component));
exports.Handle = Handle;
//# sourceMappingURL=handle.js.map