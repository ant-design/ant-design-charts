"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rotateLabels;
var tslib_1 = require("tslib");
var test_1 = require("../utils/test");
function rotateLabels(labels, overlapCfg, attr, utils) {
    var e_1, _a;
    var _b = overlapCfg.optionalAngles, optionalAngles = _b === void 0 ? [0, 45, 90] : _b, margin = overlapCfg.margin, _c = overlapCfg.recoverWhenFailed, recoverWhenFailed = _c === void 0 ? true : _c;
    var defaultAngles = labels.map(function (label) { return label.getLocalEulerAngles(); });
    var runAndPassed = function () { return (0, test_1.boundTest)(labels, attr, margin).length < 1; };
    var setLabelsRotate = function (angle) {
        return labels.forEach(function (label, index) {
            var rotate = Array.isArray(angle) ? angle[index] : angle;
            utils.rotate(label, +rotate);
        });
    };
    try {
        for (var optionalAngles_1 = tslib_1.__values(optionalAngles), optionalAngles_1_1 = optionalAngles_1.next(); !optionalAngles_1_1.done; optionalAngles_1_1 = optionalAngles_1.next()) {
            var angle = optionalAngles_1_1.value;
            setLabelsRotate(angle);
            if (runAndPassed())
                return;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (optionalAngles_1_1 && !optionalAngles_1_1.done && (_a = optionalAngles_1.return)) _a.call(optionalAngles_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (recoverWhenFailed) {
        setLabelsRotate(defaultAngles);
    }
}
//# sourceMappingURL=autoRotate.js.map