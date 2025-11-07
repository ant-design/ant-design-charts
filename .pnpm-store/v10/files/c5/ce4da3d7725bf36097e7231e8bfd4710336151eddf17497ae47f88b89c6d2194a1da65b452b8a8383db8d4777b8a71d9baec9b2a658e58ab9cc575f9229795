import { __assign, __extends, __rest } from "tslib";
import { deepMix } from '@antv/util';
import { DisplayObject, Group } from '../../shapes';
import { deepAssign, select } from '../../util';
var Lines = /** @class */ (function (_super) {
    __extends(Lines, _super);
    function Lines(_a) {
        var _this = this;
        var style = _a.style, rest = __rest(_a, ["style"]);
        _this = _super.call(this, deepMix({}, { type: 'lines' }, __assign({ style: style }, rest))) || this;
        _this.linesGroup = _this.appendChild(new Group());
        _this.areasGroup = _this.appendChild(new Group());
        _this.render();
        return _this;
    }
    Lines.prototype.render = function () {
        var _a = this.attributes, lines = _a.lines, areas = _a.areas, x = _a.x, y = _a.y;
        this.style.transform = "translate(".concat(x, ", ").concat(y, ")");
        if (lines)
            this.renderLines(lines);
        if (areas)
            this.renderAreas(areas);
    };
    Lines.prototype.clear = function () {
        this.linesGroup.removeChildren();
        this.areasGroup.removeChildren();
    };
    Lines.prototype.update = function (attr) {
        this.attr(deepAssign({}, this.attributes, attr));
        this.render();
    };
    Lines.prototype.renderLines = function (lines) {
        select(this.linesGroup)
            .selectAll('.line')
            .data(lines)
            .join(function (enter) {
            return enter
                .append('path')
                .attr('className', 'line')
                .each(function (style) {
                this.attr(style);
            });
        }, function (update) {
            return update.each(function (style) {
                this.attr(style);
            });
        }, function (exit) { return exit.remove(); });
    };
    Lines.prototype.renderAreas = function (areas) {
        select(this.linesGroup)
            .selectAll('.area')
            .data(areas)
            .join(function (enter) {
            return enter
                .append('path')
                .attr('className', 'area')
                .each(function (style) {
                this.attr(style);
            });
        }, function (update) {
            return update.each(function (style) {
                this.style(style);
            });
        }, function (exit) { return exit.remove(); });
    };
    return Lines;
}(DisplayObject));
export { Lines };
//# sourceMappingURL=lines.js.map