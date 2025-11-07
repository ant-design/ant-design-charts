"use strict";
const tslib_1 = require("tslib");
const createIgnorer_1 = (0, tslib_1.__importDefault)(require("./createIgnorer"));
const createMatcher_1 = (0, tslib_1.__importDefault)(require("./createMatcher"));
const isSupportedExtension_1 = (0, tslib_1.__importDefault)(require("./isSupportedExtension"));
const processFiles_1 = (0, tslib_1.__importDefault)(require("./processFiles"));
const scms_1 = (0, tslib_1.__importDefault)(require("./scms"));
module.exports = (currentDirectory, { config, since, staged, pattern, restage = true, branch, bail, check, ignorePath, verbose, onFoundSinceRevision, onFoundChangedFiles, onPartiallyStagedFile, onExamineFile, onCheckFile, onWriteFile, resolveConfig = true, } = {}) => {
    const scm = (0, scms_1.default)(currentDirectory);
    if (!scm) {
        throw new Error('Unable to detect a source control manager.');
    }
    const directory = scm.rootDirectory;
    const revision = since || scm.getSinceRevision(directory, { staged, branch });
    onFoundSinceRevision === null || onFoundSinceRevision === void 0 ? void 0 : onFoundSinceRevision(scm.name, revision);
    const rootIgnorer = (0, createIgnorer_1.default)(directory, ignorePath);
    const cwdIgnorer = currentDirectory === directory
        ? () => true
        : (0, createIgnorer_1.default)(currentDirectory, ignorePath);
    const changedFiles = scm
        .getChangedFiles(directory, revision, staged)
        .filter((0, createMatcher_1.default)(pattern))
        .filter(rootIgnorer)
        .filter(cwdIgnorer)
        .filter((0, isSupportedExtension_1.default)(resolveConfig));
    const unstagedFiles = staged
        ? scm
            .getUnstagedChangedFiles(directory, revision)
            .filter((0, isSupportedExtension_1.default)(resolveConfig))
            .filter((0, createMatcher_1.default)(pattern))
            .filter(rootIgnorer)
            .filter(cwdIgnorer)
        : [];
    const wasFullyStaged = (f) => !unstagedFiles.includes(f);
    onFoundChangedFiles === null || onFoundChangedFiles === void 0 ? void 0 : onFoundChangedFiles(changedFiles);
    const failReasons = new Set();
    (0, processFiles_1.default)(directory, changedFiles, {
        check,
        config,
        onWriteFile(file) {
            onWriteFile === null || onWriteFile === void 0 ? void 0 : onWriteFile(file);
            if (bail) {
                failReasons.add('BAIL_ON_WRITE');
            }
            if (staged && restage) {
                if (wasFullyStaged(file)) {
                    scm.stageFile(directory, file);
                }
                else {
                    onPartiallyStagedFile === null || onPartiallyStagedFile === void 0 ? void 0 : onPartiallyStagedFile(file);
                    failReasons.add('PARTIALLY_STAGED_FILE');
                }
            }
        },
        onCheckFile: (file, isFormatted) => {
            onCheckFile === null || onCheckFile === void 0 ? void 0 : onCheckFile(file, isFormatted);
            if (!isFormatted) {
                failReasons.add('CHECK_FAILED');
            }
        },
        onExamineFile: verbose ? onExamineFile : undefined,
    });
    return {
        success: failReasons.size === 0,
        errors: [...failReasons],
    };
};
//# sourceMappingURL=index.js.map