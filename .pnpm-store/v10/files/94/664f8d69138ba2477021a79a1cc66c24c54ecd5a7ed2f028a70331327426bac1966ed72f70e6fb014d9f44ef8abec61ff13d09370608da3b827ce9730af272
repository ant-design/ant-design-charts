"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flex_1 = require("./flex");
var grid_1 = require("./grid");
exports.default = (function (container, children, config) {
    if (children.length === 0)
        return [];
    var callers = { flex: flex_1.flex, grid: grid_1.grid };
    var caller = config.display in callers ? callers[config.display] : null;
    // @ts-ignore
    return (caller === null || caller === void 0 ? void 0 : caller.call(null, container, children, config)) || [];
});
//# sourceMappingURL=executer.js.map