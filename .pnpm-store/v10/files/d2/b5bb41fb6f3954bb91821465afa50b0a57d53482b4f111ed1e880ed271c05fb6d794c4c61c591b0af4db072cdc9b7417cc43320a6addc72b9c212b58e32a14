"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const prettier_1 = (0, tslib_1.__importDefault)(require("prettier"));
exports.default = (directory, files, { check, config, onExamineFile, onCheckFile, onWriteFile, } = {}) => {
    for (const relative of files) {
        onExamineFile === null || onExamineFile === void 0 ? void 0 : onExamineFile(relative);
        const file = path_1.default.join(directory, relative);
        const options = Object.assign(Object.assign({}, prettier_1.default.resolveConfig.sync(file, {
            config,
            editorconfig: true,
        })), { filepath: file });
        const input = fs_1.default.readFileSync(file, 'utf8');
        if (check) {
            const isFormatted = prettier_1.default.check(input, options);
            onCheckFile === null || onCheckFile === void 0 ? void 0 : onCheckFile(relative, isFormatted);
            continue;
        }
        const output = prettier_1.default.format(input, options);
        if (output !== input) {
            fs_1.default.writeFileSync(file, output);
            onWriteFile === null || onWriteFile === void 0 ? void 0 : onWriteFile(relative);
        }
    }
};
//# sourceMappingURL=processFiles.js.map