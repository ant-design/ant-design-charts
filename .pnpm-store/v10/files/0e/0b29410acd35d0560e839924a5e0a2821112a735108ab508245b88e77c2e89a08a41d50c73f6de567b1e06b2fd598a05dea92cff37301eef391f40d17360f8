"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.library = void 0;
const marker_1 = require("../utils/marker");
exports.library = {};
// @todo Warn if override existing key.
function register(key, component) {
    if (key.startsWith('symbol.'))
        (0, marker_1.registerSymbol)(key.split('.').pop(), component);
    else
        Object.assign(exports.library, { [key]: component });
}
exports.register = register;
//# sourceMappingURL=library.js.map