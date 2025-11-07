"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptionsExpr = exports.EXPR_WHITE_LIST = void 0;
const expr_1 = require("@antv/expr");
const util_1 = require("@antv/util");
const lru_1 = require("./lru");
// Whitelist of properties that can contain expressions.
exports.EXPR_WHITE_LIST = ['style', 'encode', 'labels', 'children'];
/**
 * Compiles an expression string into a function.
 * @param expr Expression string to compile.
 * @returns Compiled function or original string if empty.
 */
const compileExpression = (0, lru_1.lru)((expr) => {
    const evaluator = (0, expr_1.compile)(expr);
    return (...args) => {
        const paramNames = Array.from({ length: args.length }, (_, i) => String.fromCharCode(97 + i));
        const namedParams = Object.fromEntries(args.map((value, index) => [paramNames[index], value]));
        // global is used to overview what can i get in props.
        return evaluator(Object.assign(Object.assign({}, namedParams), { global: Object.assign({}, namedParams) }));
    };
}, (expr) => expr, 128);
/**
 * Processes options object to convert expressions to functions.
 * @param options Options object to process.
 * @param isSpecRoot Whether the options is the root of the spec.
 * @returns Processed options object with expressions converted to functions.
 */
function parseOptionsExpr(options, isSpecRoot = true) {
    if (Array.isArray(options)) {
        return options.map((_, i) => parseOptionsExpr(options[i], isSpecRoot));
    }
    if (typeof options === 'object' && options) {
        return (0, util_1.mapValues)(options, (value, key) => {
            // if options is root and the key is in the white list, parse the expression.
            if (isSpecRoot && exports.EXPR_WHITE_LIST.includes(key)) {
                return parseOptionsExpr(value, key === 'children');
            }
            if (!isSpecRoot) {
                return parseOptionsExpr(value, false);
            }
            return value;
        });
    }
    // if options is a string and is a valid expression.
    if (typeof options === 'string') {
        const trimmed = options.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            return compileExpression(trimmed.slice(1, -1));
        }
    }
    return options;
}
exports.parseOptionsExpr = parseOptionsExpr;
//# sourceMappingURL=expr.js.map