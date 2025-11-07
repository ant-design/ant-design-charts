"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stageFile = exports.getUnstagedChangedFiles = exports.getChangedFiles = exports.getSinceRevision = exports.detect = exports.name = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const execa_1 = (0, tslib_1.__importDefault)(require("execa"));
const find_up_1 = (0, tslib_1.__importDefault)(require("find-up"));
exports.name = 'hg';
const detect = (directory) => {
    const hgDirectory = find_up_1.default.sync('.hg', {
        cwd: directory,
        type: 'directory',
    });
    if (hgDirectory) {
        return path_1.default.dirname(hgDirectory);
    }
};
exports.detect = detect;
const runHg = (directory, args) => execa_1.default.sync('hg', args, {
    cwd: directory,
});
const getLines = (execaResult) => execaResult.stdout.split('\n');
const getSinceRevision = (directory, { branch }) => {
    const revision = runHg(directory, [
        'debugancestor',
        'tip',
        branch || 'default',
    ]).stdout.trim();
    return runHg(directory, ['id', '-i', '-r', revision]).stdout.trim();
};
exports.getSinceRevision = getSinceRevision;
const getChangedFiles = (directory, revision, _staged) => [
    ...getLines(runHg(directory, [
        'status',
        '-n',
        '-a',
        '-m',
        ...(revision ? ['--rev', revision] : []),
    ])),
].filter(Boolean);
exports.getChangedFiles = getChangedFiles;
const getUnstagedChangedFiles = () => [];
exports.getUnstagedChangedFiles = getUnstagedChangedFiles;
const stageFile = (directory, file) => {
    runHg(directory, ['add', file]);
};
exports.stageFile = stageFile;
//# sourceMappingURL=hg.js.map