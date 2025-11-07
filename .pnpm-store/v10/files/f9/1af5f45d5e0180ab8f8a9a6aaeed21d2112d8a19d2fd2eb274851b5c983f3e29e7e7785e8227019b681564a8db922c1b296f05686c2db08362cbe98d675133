import { __read } from "tslib";
export var classNames = function (cls, prefix) {
    var PREFIX = function (str) { return "".concat(prefix, "-").concat(str); };
    var obj = Object.fromEntries(Object.entries(cls).map(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
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
//# sourceMappingURL=classnames.js.map