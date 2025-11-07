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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var fs = __importStar(require("fs"));
var crypto = __importStar(require("crypto"));
var path = __importStar(require("path"));
var process = __importStar(require("process"));
var create_cache_key_function_1 = __importDefault(require("@jest/create-cache-key-function"));
var jsonc_parser_1 = require("jsonc-parser");
var core_1 = require("@swc/core");
var package_json_1 = require("./package.json");
function createTransformer(swcTransformOpts) {
    var _a, _b;
    var computedSwcOptions = buildSwcTransformOpts(swcTransformOpts);
    var cacheKeyFunction = (0, create_cache_key_function_1.default)([], [core_1.version, package_json_1.version, JSON.stringify(computedSwcOptions)]);
    var _c = (_b = (_a = swcTransformOpts === null || swcTransformOpts === void 0 ? void 0 : swcTransformOpts.experimental) === null || _a === void 0 ? void 0 : _a.customCoverageInstrumentation) !== null && _b !== void 0 ? _b : {}, canInstrument = _c.enabled, instrumentOptions = __rest(_c, ["enabled"]);
    return {
        canInstrument: !!canInstrument, // Tell jest we'll instrument by our own
        process: function (src, filename, jestOptions) {
            // Determine if we actually instrument codes if jest runs with --coverage
            var swcOptionsForProcess = insertInstrumentationOptions(jestOptions, !!canInstrument, computedSwcOptions, instrumentOptions);
            return (0, core_1.transformSync)(src, __assign(__assign({}, swcOptionsForProcess), { module: __assign(__assign({}, swcOptionsForProcess.module), { type: jestOptions.supportsStaticESM
                        ? "es6"
                        : "commonjs" }), filename: filename }));
        },
        processAsync: function (src, filename, jestOptions) {
            var swcOptionsForProcess = insertInstrumentationOptions(jestOptions, !!canInstrument, computedSwcOptions, instrumentOptions);
            return (0, core_1.transform)(src, __assign(__assign({}, swcOptionsForProcess), { module: __assign(__assign({}, swcOptionsForProcess.module), { 
                    // async transform is always ESM
                    type: "es6" }), filename: filename }));
        },
        getCacheKey: function (src, filename) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var baseCacheKey = cacheKeyFunction.apply(void 0, __spreadArray([src, filename], rest, false));
            var options = typeof rest[0] === "string" ? rest[1] : rest[0];
            return crypto
                .createHash("sha1")
                .update(baseCacheKey)
                .update("\0", "utf8")
                .update(JSON.stringify({
                supportsStaticESM: options.supportsStaticESM,
            }))
                .digest("hex");
        },
    };
}
function getOptionsFromSwrc() {
    var swcrc = path.join(process.cwd(), ".swcrc");
    if (fs.existsSync(swcrc)) {
        var errors = [];
        var options = (0, jsonc_parser_1.parse)(fs.readFileSync(swcrc, "utf-8"), errors);
        if (errors.length > 0) {
            throw new Error("Error parsing ".concat(swcrc, ": ").concat(errors.join(", ")));
        }
        return options;
    }
    return {};
}
function buildSwcTransformOpts(swcOptions) {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _c = swcOptions && Object.keys(swcOptions).length > 0
        ? swcOptions
        : getOptionsFromSwrc(), experimental = _c.experimental, computedSwcOptions = __rest(_c, ["experimental"]);
    if (!computedSwcOptions.env && !((_a = computedSwcOptions.jsc) === null || _a === void 0 ? void 0 : _a.target)) {
        set(computedSwcOptions, "jsc.target", nodeTarget());
    }
    set(computedSwcOptions, "jsc.transform.hidden.jest", true);
    if (!computedSwcOptions.sourceMaps) {
        set(computedSwcOptions, "sourceMaps", "inline");
    }
    if ((_b = computedSwcOptions.jsc) === null || _b === void 0 ? void 0 : _b.baseUrl) {
        set(computedSwcOptions, "jsc.baseUrl", path.resolve(computedSwcOptions.jsc.baseUrl));
    }
    return computedSwcOptions;
}
// Ordered list of which target a node version should use.
// Each entry is the lowest version that can use that target.
var nodeTargetDefaults = [
    [18, "es2023"],
    [17, "es2022"],
    [15, "es2021"],
    [14, "es2020"],
    [13, "es2019"],
];
function nodeTarget() {
    var _a;
    var match = process.version.match(/v(\d+)/);
    if (match == null)
        throw Error("Could not parse major version from ".concat(process.version));
    var majorVersion = parseInt(match[1]);
    return (((_a = nodeTargetDefaults.find(function (_a) {
        var minVersion = _a[0];
        return majorVersion >= minVersion;
    })) === null || _a === void 0 ? void 0 : _a[1]) || "es2018");
}
function insertInstrumentationOptions(jestOptions, canInstrument, swcTransformOpts, instrumentOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var shouldInstrument = jestOptions.instrument && canInstrument;
    if (!shouldInstrument) {
        return swcTransformOpts;
    }
    if ((_c = (_b = (_a = swcTransformOpts === null || swcTransformOpts === void 0 ? void 0 : swcTransformOpts.jsc) === null || _a === void 0 ? void 0 : _a.experimental) === null || _b === void 0 ? void 0 : _b.plugins) === null || _c === void 0 ? void 0 : _c.some(function (x) { return x[0] === "swc-plugin-coverage-instrument"; })) {
        return swcTransformOpts;
    }
    return __assign(__assign({}, swcTransformOpts), { jsc: __assign(__assign({}, ((_d = swcTransformOpts === null || swcTransformOpts === void 0 ? void 0 : swcTransformOpts.jsc) !== null && _d !== void 0 ? _d : {})), { experimental: __assign(__assign({}, ((_f = (_e = swcTransformOpts === null || swcTransformOpts === void 0 ? void 0 : swcTransformOpts.jsc) === null || _e === void 0 ? void 0 : _e.experimental) !== null && _f !== void 0 ? _f : {})), { plugins: __spreadArray(__spreadArray([], ((_j = (_h = (_g = swcTransformOpts === null || swcTransformOpts === void 0 ? void 0 : swcTransformOpts.jsc) === null || _g === void 0 ? void 0 : _g.experimental) === null || _h === void 0 ? void 0 : _h.plugins) !== null && _j !== void 0 ? _j : []), true), [
                    ["swc-plugin-coverage-instrument", instrumentOptions !== null && instrumentOptions !== void 0 ? instrumentOptions : {}],
                ], false) }) }) });
}
function set(obj, path, value) {
    var o = obj;
    var parents = path.split(".");
    var key = parents.pop();
    for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
        var prop = parents_1[_i];
        if (o[prop] == null)
            o[prop] = {};
        o = o[prop];
    }
    o[key] = value;
}
module.exports = { createTransformer: createTransformer };
