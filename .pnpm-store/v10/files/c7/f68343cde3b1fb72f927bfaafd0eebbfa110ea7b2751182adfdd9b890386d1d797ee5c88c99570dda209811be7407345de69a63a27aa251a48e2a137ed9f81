"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated The dumpLineNumbers option is deprecated. Use sourcemaps instead.
 * This will be removed in a future version.
 *
 * @param {Object} ctx - Context object with debugInfo
 * @returns {string} Debug info as CSS comment
 */
function asComment(ctx) {
    return "/* line ".concat(ctx.debugInfo.lineNumber, ", ").concat(ctx.debugInfo.fileName, " */\n");
}
/**
 * @deprecated The dumpLineNumbers option is deprecated. Use sourcemaps instead.
 * This function generates Sass-compatible debug info using @media -sass-debug-info syntax.
 * This format had short-lived usage and is no longer recommended.
 * This will be removed in a future version.
 *
 * @param {Object} ctx - Context object with debugInfo
 * @returns {string} Sass-compatible debug info as @media query
 */
function asMediaQuery(ctx) {
    var filenameWithProtocol = ctx.debugInfo.fileName;
    if (!/^[a-z]+:\/\//i.test(filenameWithProtocol)) {
        filenameWithProtocol = "file://".concat(filenameWithProtocol);
    }
    return "@media -sass-debug-info{filename{font-family:".concat(filenameWithProtocol.replace(/([.:/\\])/g, function (a) {
        if (a == '\\') {
            a = '/';
        }
        return "\\".concat(a);
    }), "}line{font-family:\\00003").concat(ctx.debugInfo.lineNumber, "}}\n");
}
/**
 * Generates debug information (line numbers) for CSS output.
 *
 * @param {Object} context - Context object with dumpLineNumbers option
 * @param {Object} ctx - Context object with debugInfo
 * @param {string} [lineSeparator] - Separator between comment and media query (for 'all' mode)
 * @returns {string} Debug info string
 *
 * @deprecated The dumpLineNumbers option is deprecated. Use sourcemaps instead.
 * All modes ('comments', 'mediaquery', 'all') are deprecated and will be removed in a future version.
 * The 'mediaquery' and 'all' modes generate Sass-compatible @media -sass-debug-info output
 * which had short-lived usage and is no longer recommended.
 */
function debugInfo(context, ctx, lineSeparator) {
    var result = '';
    if (context.dumpLineNumbers && !context.compress) {
        switch (context.dumpLineNumbers) {
            case 'comments':
                result = asComment(ctx);
                break;
            case 'mediaquery':
                result = asMediaQuery(ctx);
                break;
            case 'all':
                result = asComment(ctx) + (lineSeparator || '') + asMediaQuery(ctx);
                break;
        }
    }
    return result;
}
exports.default = debugInfo;
//# sourceMappingURL=debug-info.js.map