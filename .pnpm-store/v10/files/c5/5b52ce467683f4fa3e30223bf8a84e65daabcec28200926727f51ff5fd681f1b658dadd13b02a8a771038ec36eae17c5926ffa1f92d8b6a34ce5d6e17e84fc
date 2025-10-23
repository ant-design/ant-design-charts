import { __assign, __extends, __rest } from "tslib";
import { deepMix } from '@antv/util';
import { DisplayObject, Group } from '../../shapes';
import { deepAssign, select } from '../../util';
var Columns = /** @class */ (function (_super) {
    __extends(Columns, _super);
    function Columns(_a) {
        var _this = this;
        var style = _a.style, rest = __rest(_a, ["style"]);
        _this = _super.call(this, deepMix({}, { type: 'column' }, __assign({ style: style }, rest))) || this;
        _this.columnsGroup = new Group({ name: 'columns' });
        _this.appendChild(_this.columnsGroup);
        _this.render();
        return _this;
    }
    Columns.prototype.render = function () {
        var _a = this.attributes, columns = _a.columns, x = _a.x, y = _a.y;
        this.columnsGroup.style.transform = "translate(".concat(x, ", ").concat(y, ")");
        select(this.columnsGroup)
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
        this.attr(deepAssign({}, this.attributes, attr));
        this.render();
    };
    Columns.prototype.clear = function () {
        this.removeChildren();
    };
    return Columns;
}(DisplayObject));
export { Columns };
//# sourceMappingURL=columns.js.map