"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var tslib_1 = require("tslib");
var g_1 = require("@antv/g");
var offscreen_1 = require("../util/offscreen");
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text(_a) {
        if (_a === void 0) { _a = {}; }
        var style = _a.style, restOptions = tslib_1.__rest(_a, ["style"]);
        return _super.call(this, tslib_1.__assign({ style: tslib_1.__assign({ text: '', fill: 'black', fontFamily: 'sans-serif', fontSize: 16, fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', lineWidth: 1, textAlign: 'start', textBaseline: 'middle' }, style) }, restOptions)) || this;
    }
    Object.defineProperty(Text.prototype, "offscreenGroup", {
        get: function () {
            if (!this._offscreen)
                this._offscreen = (0, offscreen_1.createOffscreenGroup)(this);
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
}(g_1.Text));
exports.Text = Text;
//# sourceMappingURL=Text.js.map