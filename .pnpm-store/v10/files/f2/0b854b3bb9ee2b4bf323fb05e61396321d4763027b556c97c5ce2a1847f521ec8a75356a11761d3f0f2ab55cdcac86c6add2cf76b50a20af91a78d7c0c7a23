"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
var tslib_1 = require("tslib");
var classNames = function (cls, prefix) {
    var PREFIX = function (str) { return "".concat(prefix, "-").concat(str); };
    var obj = Object.fromEntries(Object.entries(cls).map(function (_a) {
        var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
        var name = PREFIX(v);
        return [
            k,
            {
                name: name,
                class: ".".concat(name),
                id: "#".concat(name),
                toString: function () {
                    return name;
                },
            },
        ];
    }));
    Object.assign(obj, { prefix: PREFIX });
    return obj;
};
exports.classNames = classNames;
//# sourceMappingURL=classnames.js.map