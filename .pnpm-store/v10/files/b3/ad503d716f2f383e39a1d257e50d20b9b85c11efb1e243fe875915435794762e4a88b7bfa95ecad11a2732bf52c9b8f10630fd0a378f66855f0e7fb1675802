import { __assign, __extends, __rest } from "tslib";
import { Text as GText } from '@antv/g';
import { createOffscreenGroup } from '../util/offscreen';
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(_a) {
        if (_a === void 0) { _a = {}; }
        var style = _a.style, restOptions = __rest(_a, ["style"]);
        return _super.call(this, __assign({ style: __assign({ text: '', fill: 'black', fontFamily: 'sans-serif', fontSize: 16, fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', lineWidth: 1, textAlign: 'start', textBaseline: 'middle' }, style) }, restOptions)) || this;
    }
    Object.defineProperty(Text.prototype, "offscreenGroup", {
        get: function () {
            if (!this._offscreen)
                this._offscreen = createOffscreenGroup(this);
            return this._offscreen;
        },
        enumerable: false,
        configurable: true
    });
    Text.prototype.disconnectedCallback = function () {
        var _a;
        (_a = this._offscreen) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    return Text;
}(GText));
export { Text };
//# sourceMappingURL=Text.js.map