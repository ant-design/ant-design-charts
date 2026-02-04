"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = void 0;
var validOptions = [
    "configFile",
    "extensions",
    "baseUrl",
    "silent",
    "logLevel",
    "logInfoToStdOut",
    "context",
    "mainFields",
    "references",
];
/**
 * Takes raw options from the webpack config,
 * validates them and adds defaults for missing options
 */
function getOptions(rawOptions) {
    validateOptions(rawOptions);
    var options = makeOptions(rawOptions);
    return options;
}
exports.getOptions = getOptions;
/**
 * Validate the supplied loader options.
 * At present this validates the option names only; in future we may look at validating the values too
 *
 * @param rawOptions
 */
function validateOptions(rawOptions) {
    var loaderOptionKeys = Object.keys(rawOptions);
    for (var i = 0; i < loaderOptionKeys.length; i++) {
        var option = loaderOptionKeys[i];
        var isUnexpectedOption = validOptions.indexOf(option) === -1;
        if (isUnexpectedOption) {
            throw new Error("tsconfig-paths-webpack-plugin was supplied with an unexpected loader option: ".concat(option, "\nPlease take a look at the options you are supplying; the following are valid options:\n").concat(validOptions.join(" / "), "\n"));
        }
    }
}
function makeOptions(rawOptions) {
    var options = __assign(__assign({}, {
        configFile: "tsconfig.json",
        extensions: [".ts", ".tsx"],
        baseUrl: undefined,
        silent: false,
        logLevel: "WARN",
        logInfoToStdOut: false,
        context: undefined,
        colors: true,
        mainFields: ["main"],
        references: undefined,
    }), rawOptions);
    var options2 = __assign(__assign({}, options), { logLevel: options.logLevel.toUpperCase() });
    return options2;
}
//# sourceMappingURL=options.js.map