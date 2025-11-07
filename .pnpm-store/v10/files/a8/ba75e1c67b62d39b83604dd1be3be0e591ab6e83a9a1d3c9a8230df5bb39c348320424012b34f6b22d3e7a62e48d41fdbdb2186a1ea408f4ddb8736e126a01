"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const picomatch_1 = (0, tslib_1.__importDefault)(require("picomatch"));
exports.default = (pattern) => {
    if (typeof pattern !== 'string' && !Array.isArray(pattern)) {
        return () => true;
    }
    const patterns = Array.isArray(pattern) ? pattern : [pattern];
    const isMatch = (0, picomatch_1.default)(patterns, { dot: true });
    return (file) => isMatch(path_1.default.normalize(file));
};
//# sourceMappingURL=createMatcher.js.map