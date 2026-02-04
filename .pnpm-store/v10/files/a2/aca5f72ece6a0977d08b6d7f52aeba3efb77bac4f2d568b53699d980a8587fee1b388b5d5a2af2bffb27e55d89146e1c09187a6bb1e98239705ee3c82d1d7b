"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const ignore_1 = (0, tslib_1.__importDefault)(require("ignore"));
exports.default = (directory, filename = '.prettierignore') => {
    const file = path_1.default.join(directory, filename);
    if (fs_1.default.existsSync(file)) {
        const text = fs_1.default.readFileSync(file, 'utf8');
        const filter = (0, ignore_1.default)().add(text).createFilter();
        return (filepath) => filter(path_1.default.join(filepath));
    }
    return () => true;
};
//# sourceMappingURL=createIgnorer.js.map