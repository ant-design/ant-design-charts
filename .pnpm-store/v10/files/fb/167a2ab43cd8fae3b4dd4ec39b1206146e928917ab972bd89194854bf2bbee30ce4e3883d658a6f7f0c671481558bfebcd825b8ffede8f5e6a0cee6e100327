"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stageFile = exports.getUnstagedChangedFiles = exports.getChangedFiles = exports.getSinceRevision = exports.detect = exports.name = void 0;
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const execa_1 = (0, tslib_1.__importDefault)(require("execa"));
const find_up_1 = (0, tslib_1.__importDefault)(require("find-up"));
exports.name = 'git';
const detect = (directory) => {
    if (fs_1.default.existsSync(path_1.default.join(directory, '.git'))) {
        return directory;
    }
    const gitDirectory = find_up_1.default.sync('.git', {
        cwd: directory,
        type: 'directory',
    });
    const gitWorkTreeFile = find_up_1.default.sync('.git', {
        cwd: directory,
        type: 'file',
    });
    if (!gitDirectory && !gitWorkTreeFile) {
        return null;
    }
    if (gitDirectory && !gitWorkTreeFile) {
        return path_1.default.dirname(gitDirectory);
    }
    if (gitWorkTreeFile && !gitDirectory) {
        return path_1.default.dirname(gitWorkTreeFile);
    }
    const gitRepoDirectory = path_1.default.dirname(gitDirectory);
    const gitWorkTreeDirectory = path_1.default.dirname(gitWorkTreeFile);
    return gitRepoDirectory.length > gitWorkTreeDirectory.length
        ? gitRepoDirectory
        : gitWorkTreeDirectory;
};
exports.detect = detect;
const runGit = (directory, args) => execa_1.default.sync('git', args, {
    cwd: directory,
});
const getLines = (execaResult) => execaResult.stdout.split('\n');
const getSinceRevision = (directory, { staged, branch }) => {
    try {
        const revision = staged
            ? 'HEAD'
            : runGit(directory, [
                'merge-base',
                'HEAD',
                branch || 'master',
            ]).stdout.trim();
        return runGit(directory, ['rev-parse', '--short', revision]).stdout.trim();
    }
    catch (err) {
        const error = err;
        if (/HEAD/.test(error.message) ||
            (staged && /Needed a single revision/.test(error.message))) {
            return null;
        }
        throw error;
    }
};
exports.getSinceRevision = getSinceRevision;
const getChangedFiles = (directory, revision, staged) => [
    ...getLines(runGit(directory, [
        'diff',
        '--name-only',
        staged ? '--cached' : null,
        '--diff-filter=ACMRTUB',
        revision,
    ].filter(Boolean))),
    ...(staged
        ? []
        : getLines(runGit(directory, ['ls-files', '--others', '--exclude-standard']))),
].filter(Boolean);
exports.getChangedFiles = getChangedFiles;
const getUnstagedChangedFiles = (directory) => {
    return (0, exports.getChangedFiles)(directory, null, false);
};
exports.getUnstagedChangedFiles = getUnstagedChangedFiles;
const stageFile = (directory, file) => {
    runGit(directory, ['add', file]);
};
exports.stageFile = stageFile;
//# sourceMappingURL=git.js.map