"use strict";
// Invoked on the commit-msg git hook by yorkie.
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var osLocale = require('os-locale');
var msgPath = process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS;
var msg = require('fs').readFileSync(msgPath, 'utf-8').trim();
var commitRE = /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|fix|docs|UI|refactor|perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)(\(.+\))?: .{1,50}/;
if (!commitRE.test(msg)) {
    console.log();
    osLocale().then(function (locale) {
        if (locale === 'zh-CN') {
            console.error("  ".concat(chalk.bgRed.white(' ERROR '), " ").concat(chalk.red("\u63D0\u4EA4\u65E5\u5FD7\u4E0D\u7B26\u5408\u89C4\u8303"), "\n\n").concat(chalk.red("  \u5408\u6CD5\u7684\u63D0\u4EA4\u65E5\u5FD7\u683C\u5F0F\u5982\u4E0B(emoji \u548C \u6A21\u5757\u53EF\u9009\u586B)\uFF1A\n\n"), "    \n        ").concat(chalk.green("[<emoji>] [revert: ?]<type>[(scope)?]: <message>\n"), "\n        ").concat(chalk.green("\uD83D\uDCA5 feat(\u6A21\u5757): \u6DFB\u52A0\u4E86\u4E2A\u5F88\u68D2\u7684\u529F\u80FD"), "\n        ").concat(chalk.green("\uD83D\uDC1B fix(\u6A21\u5757): \u4FEE\u590D\u4E86\u4E00\u4E9B bug"), "\n        ").concat(chalk.green("\uD83D\uDCDD docs(\u6A21\u5757): \u66F4\u65B0\u4E86\u4E00\u4E0B\u6587\u6863"), "\n        ").concat(chalk.green("\uD83C\uDF37 UI(\u6A21\u5757): \u4FEE\u6539\u4E86\u4E00\u4E0B\u6837\u5F0F"), "\n        ").concat(chalk.green("\uD83C\uDFF0 chore(\u6A21\u5757): \u5BF9\u811A\u624B\u67B6\u505A\u4E86\u4E9B\u66F4\u6539"), "\n        ").concat(chalk.green("\uD83C\uDF10 locale(\u6A21\u5757): \u4E3A\u56FD\u9645\u5316\u505A\u4E86\u5FAE\u5C0F\u7684\u8D21\u732E\n"), "\n        ").concat(chalk.green("\u5176\u4ED6\u63D0\u4EA4\u7C7B\u578B: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep\n"), "\n        ").concat(chalk.red("See https://github.com/vuejs/core/blob/main/.github/commit-convention.md\n")));
        }
        else {
            console.error("  ".concat(chalk.bgRed.white(' ERROR '), " ").concat(chalk.red("invalid commit message format."), "\n\n").concat(chalk.red("  Proper commit message format is required for automated changelog generation. Examples:\n\n"), "    \n        ").concat(chalk.green("[<emoji>] [revert: ?]<type>[(scope)?]: <message>\n"), "\n        ").concat(chalk.green("\uD83D\uDCA5 feat(compiler): add 'comments' option"), "\n        ").concat(chalk.green("\uD83D\uDC1B fix(compiler): fix some bug"), "\n        ").concat(chalk.green("\uD83D\uDCDD docs(compiler): add some docs"), "\n        ").concat(chalk.green("\uD83C\uDF37 UI(compiler): better styles"), "\n        ").concat(chalk.green("\uD83C\uDFF0 chore(compiler): Made some changes to the scaffolding"), "\n        ").concat(chalk.green("\uD83C\uDF10 locale(compiler): Made a small contribution to internationalization\n"), "\n        ").concat(chalk.green("Other commit types: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep\n"), "\n        ").concat(chalk.red("See https://github.com/vuejs/core/blob/main/.github/commit-convention.md\n")));
        }
        process.exit(1);
    });
}
exports.default = (function () { });
