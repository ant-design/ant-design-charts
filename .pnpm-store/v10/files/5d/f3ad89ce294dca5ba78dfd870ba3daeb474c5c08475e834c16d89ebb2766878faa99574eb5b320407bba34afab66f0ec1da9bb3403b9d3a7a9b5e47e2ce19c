"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const helper_1 = require("../utils/helper");
/**
 * Map transform by function.
 */
const Map = (options) => {
    const { callback = helper_1.identity } = options;
    return (data) => (Array.isArray(data) ? data.map(callback) : data);
};
exports.Map = Map;
exports.Map.props = {};
//# sourceMappingURL=map.js.map