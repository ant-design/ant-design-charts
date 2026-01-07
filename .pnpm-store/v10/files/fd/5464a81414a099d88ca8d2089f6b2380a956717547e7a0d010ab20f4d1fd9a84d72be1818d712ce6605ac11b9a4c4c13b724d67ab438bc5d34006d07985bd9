"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var shapes_1 = require("../../shapes");
var util_2 = require("../../util");
var Columns = /** @class */ (function (_super) {
    tslib_1.__extends(Columns, _super);
    function Columns(_a) {
        var _this = this;
        var style = _a.style, rest = tslib_1.__rest(_a, ["style"]);
        _this = _super.call(this, (0, util_1.deepMix)({}, { type: 'column' }, tslib_1.__assign({ style: style }, rest))) || this;
        _this.columnsGroup = new shapes_1.Group({ name: 'columns' });
        _this.appendChild(_this.columnsGroup);
        _this.render();
        return _this;
    }
    Columns.prototype.render = function () {
        var _a = this.attributes, columns = _a.columns, x = _a.x, y = _a.y;
        this.columnsGroup.style.transform = "translate(".concat(x, ", ").concat(y, ")");
        (0, util_2.select)(this.columnsGroup)
            .selectAll('.column')
            .data(columns.flat())
            .join(function (enter) {
            return enter
                .append('rect')
                .attr('className', 'column')
                .each(function (style) {
                this.attr(style);
            });
        }, function (update) {
            return update.each(function (style) {
                this.attr(style);
            });
        }, function (exit) { return exit.remove(); });
    };
    Columns.prototype.update = function (attr) {
        this.attr((0, util_2.deepAssign)({}, this.attributes, attr));
        this.render();
    };
    Columns.prototype.clear = function () {
        this.removeChildren();
    };
    return Columns;
}(shapes_1.DisplayObject));
exports.Columns = Columns;
//# sourceMappingURL=columns.js.map