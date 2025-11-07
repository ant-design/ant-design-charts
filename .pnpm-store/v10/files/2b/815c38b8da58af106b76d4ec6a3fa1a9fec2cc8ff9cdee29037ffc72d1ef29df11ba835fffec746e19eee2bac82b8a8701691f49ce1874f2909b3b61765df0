"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wrapLabels;
var tslib_1 = require("tslib");
var util_1 = require("../../../util");
var line_1 = require("../guides/line");
var test_1 = require("../utils/test");
function inferTextBaseline(attr) {
    var type = attr.type, labelDirection = attr.labelDirection;
    if (type === 'linear' && (0, line_1.isAxisHorizontal)(attr)) {
        return labelDirection === 'negative' ? 'bottom' : 'top';
    }
    return 'middle';
}
function wrapLabels(labels, overlapCfg, attr, utils, main) {
    var _a;
    var _b = overlapCfg.maxLines, maxLines = _b === void 0 ? 3 : _b, _c = overlapCfg.recoverWhenFailed, recoverWhenFailed = _c === void 0 ? true : _c, _d = overlapCfg.margin, margin = _d === void 0 ? [0, 0, 0, 0] : _d;
    var wordWrapWidth = (0, util_1.getCallbackValue)((_a = overlapCfg.wordWrapWidth) !== null && _a !== void 0 ? _a : 50, [main]);
    var defaultLines = labels.map(function (label) { return label.attr('maxLines') || 1; });
    var minLines = Math.min.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(defaultLines), false));
    var runAndPassed = function () { return (0, test_1.boundTest)(labels, attr, margin).length < 1; };
    var textBaseline = inferTextBaseline(attr);
    var setLabelsWrap = function (lines) {
        return labels.forEach(function (label, index) {
            var maxLines = Array.isArray(lines) ? lines[index] : lines;
            utils.wrap(label, wordWrapWidth, maxLines, textBaseline);
        });
    };
    if (minLines > maxLines)
        return;
    if (attr.type === 'linear' && (0, line_1.isAxisHorizontal)(attr)) {
        setLabelsWrap(maxLines);
        if (runAndPassed()) {
            return;
        }
    }
    else {
        for (var lines = minLines; lines <= maxLines; lines++) {
            setLabelsWrap(lines);
            if (runAndPassed())
                return;
        }
    }
    if (recoverWhenFailed) {
        setLabelsWrap(defaultLines);
    }
}
//# sourceMappingURL=autoWrap.js.map