"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gitScm = (0, tslib_1.__importStar)(require("./git"));
const hgScm = (0, tslib_1.__importStar)(require("./hg"));
const scms = [gitScm, hgScm];
exports.default = (directory) => {
    for (const scm of scms) {
        const rootDirectory = scm.detect(directory);
        if (rootDirectory) {
            return Object.assign({ rootDirectory }, scm);
        }
    }
};
//# sourceMappingURL=index.js.map