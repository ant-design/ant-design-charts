#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mri_1 = (0, tslib_1.__importDefault)(require("mri"));
const picocolors_1 = (0, tslib_1.__importDefault)(require("picocolors"));
const _1 = (0, tslib_1.__importDefault)(require("."));
const args = (0, mri_1.default)(process.argv.slice(2), {
    alias: {
        'resolve-config': 'resolveConfig',
        'ignore-path': 'ignorePath',
    },
});
const prettyQuickResult = (0, _1.default)(process.cwd(), Object.assign(Object.assign({}, args), { onFoundSinceRevision: (scm, revision) => {
        console.log(`🔍  Finding changed files since ${picocolors_1.default.bold(scm)} revision ${picocolors_1.default.bold(revision)}.`);
    }, onFoundChangedFiles: changedFiles => {
        console.log(`🎯  Found ${picocolors_1.default.bold(changedFiles.length)} changed ${changedFiles.length === 1 ? 'file' : 'files'}.`);
    }, onPartiallyStagedFile: file => {
        console.log(`✗ Found ${picocolors_1.default.bold('partially')} staged file ${file}.`);
    }, onWriteFile: file => {
        console.log(`✍️  Fixing up ${picocolors_1.default.bold(file)}.`);
    }, onCheckFile: (file, isFormatted) => {
        if (!isFormatted) {
            console.log(`⛔️  Check failed: ${picocolors_1.default.bold(file)}`);
        }
    }, onExamineFile: file => {
        console.log(`🔍  Examining ${picocolors_1.default.bold(file)}.`);
    } }));
if (prettyQuickResult.success) {
    console.log('✅  Everything is awesome!');
}
else {
    if (prettyQuickResult.errors.includes('PARTIALLY_STAGED_FILE')) {
        console.log('✗ Partially staged files were fixed up.' +
            ` ${picocolors_1.default.bold('Please update stage before committing')}.`);
    }
    if (prettyQuickResult.errors.includes('BAIL_ON_WRITE')) {
        console.log('✗ File had to be prettified and prettyQuick was set to bail mode.');
    }
    if (prettyQuickResult.errors.includes('CHECK_FAILED')) {
        console.log('✗ Code style issues found in the above file(s). Forgot to run Prettier?');
    }
    process.exit(1);
}
//# sourceMappingURL=cli.js.map