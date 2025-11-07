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
exports.TsconfigPathsPlugin = void 0;
var chalk = require("chalk");
var TsconfigPaths = require("tsconfig-paths");
var path = require("path");
var Options = require("./options");
var Logger = require("./logger");
// eslint-disable-next-line no-redeclare
var getInnerRequest = require("enhanced-resolve/lib/getInnerRequest");
var TsconfigPathsPlugin = /** @class */ (function () {
    function TsconfigPathsPlugin(rawOptions) {
        if (rawOptions === void 0) { rawOptions = {}; }
        var _this = this;
        this.source = "described-resolve";
        this.target = "resolve";
        var options = Options.getOptions(rawOptions);
        this.extensions = options.extensions;
        this.referenceMatchMap = {};
        // const colors = new chalk.constructor({ enabled: options.colors });
        this.log = Logger.makeLogger(options, new chalk.Instance({ level: options.colors ? undefined : 0 }));
        var context = options.context || process.cwd();
        var loadFrom = options.configFile || context;
        var loadResult = loadConfig(loadFrom, this.log);
        if (loadResult.resultType === "success") {
            this.baseUrl = options.baseUrl || loadResult.baseUrl;
            this.absoluteBaseUrl = options.baseUrl
                ? path.resolve(options.baseUrl)
                : loadResult.absoluteBaseUrl;
            this.matchPath = TsconfigPaths.createMatchPathAsync(this.absoluteBaseUrl, loadResult.paths, options.mainFields);
            if (options.references) {
                options.references.reduce(function (pathMap, reference) {
                    if (reference) {
                        var referenceResult = loadConfig(reference, _this.log);
                        if (referenceResult.resultType === "success") {
                            var paths = referenceResult.paths, absoluteBaseUrl = referenceResult.absoluteBaseUrl;
                            pathMap[absoluteBaseUrl] = TsconfigPaths.createMatchPathAsync(absoluteBaseUrl, paths, options.mainFields);
                        }
                    }
                    return pathMap;
                }, this.referenceMatchMap);
            }
        }
    }
    TsconfigPathsPlugin.prototype.apply = function (resolver) {
        if (!resolver) {
            this.log.logWarning("tsconfig-paths-webpack-plugin: Found no resolver, not applying tsconfig-paths-webpack-plugin");
            return;
        }
        // The file system only exists when the plugin is in the resolve context. This means it's also properly placed in the resolve.plugins array.
        // If not, we should warn the user that this plugin should be placed in resolve.plugins and not the plugins array of the root config for example.
        // This should hopefully prevent issues like: https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/9
        if (!("fileSystem" in resolver)) {
            this.log.logWarning("tsconfig-paths-webpack-plugin: No file system found on resolver." +
                " Please make sure you've placed the plugin in the correct part of the configuration." +
                " This plugin is a resolver plugin and should be placed in the resolve part of the Webpack configuration.");
            return;
        }
        // getHook will only exist in Webpack 4 & 5, if so we should comply to the Webpack 4 plugin system.
        if ("getHook" in resolver && typeof resolver.getHook === "function") {
            resolver
                .getHook(this.source)
                .tapAsync({ name: "TsconfigPathsPlugin" }, createPluginCallback(this.referenceMatchMap, this.matchPath, resolver, this.absoluteBaseUrl, resolver.getHook(this.target), this.extensions));
        }
        else if ("plugin" in resolver) {
            // This is the legacy (Webpack < 4.0.0) way of using the plugin system.
            var legacyResolver = resolver;
            legacyResolver.plugin(this.source, createPluginLegacy(this.matchPath, resolver, this.absoluteBaseUrl, this.target, this.extensions));
        }
    };
    return TsconfigPathsPlugin;
}());
exports.TsconfigPathsPlugin = TsconfigPathsPlugin;
function loadConfig(configPath, logger) {
    var loadResult = TsconfigPaths.loadConfig(configPath);
    if (loadResult.resultType === "failed") {
        logger.logError("Failed to load ".concat(configPath, ": ").concat(loadResult.message));
    }
    else {
        logger.logInfo("tsconfig-paths-webpack-plugin: Using config file at ".concat(loadResult.configFileAbsolutePath));
    }
    return loadResult;
}
function createPluginCallback(referenceMatchMap, baseMatchPath, resolver, baseAbsoluteBaseUrl, hook, extensions) {
    var fileExistAsync = createFileExistAsync(resolver.fileSystem);
    var readJsonAsync = createReadJsonAsync(resolver.fileSystem);
    return function (request, resolveContext, callback) {
        var _a, _b;
        var innerRequest = getInnerRequest(resolver, request);
        if (!innerRequest ||
            ((_a = request === null || request === void 0 ? void 0 : request.request) === null || _a === void 0 ? void 0 : _a.startsWith(".")) ||
            ((_b = request === null || request === void 0 ? void 0 : request.request) === null || _b === void 0 ? void 0 : _b.startsWith(".."))) {
            return callback();
        }
        // Find the base URL and matchPath instance
        // Quickly check if the request path is a known baseUrl
        // Then check if the path is a child of a reference baseUrl
        var absoluteBaseUrl = baseAbsoluteBaseUrl;
        if (typeof request.path === "string" &&
            request.path !== baseAbsoluteBaseUrl) {
            if (referenceMatchMap[request.path]) {
                absoluteBaseUrl = request.path;
            }
            else {
                var referenceUrl = Object.keys(referenceMatchMap).find(function (refBaseUrl) {
                    var relative = path.relative(refBaseUrl, request.path || "");
                    return (relative &&
                        !relative.startsWith("..") &&
                        !path.isAbsolute(relative));
                });
                if (referenceUrl) {
                    absoluteBaseUrl = referenceUrl;
                }
            }
        }
        var matchPath = referenceMatchMap[absoluteBaseUrl] || baseMatchPath;
        matchPath(innerRequest, readJsonAsync, fileExistAsync, extensions, function (err, foundMatch) {
            if (err) {
                return callback(err);
            }
            if (!foundMatch) {
                return callback();
            }
            var newRequest = __assign(__assign({}, request), { request: foundMatch, path: absoluteBaseUrl });
            // Only at this point we are sure we are dealing with the latest Webpack version (>= 4.0.0)
            // So only now can we require the createInnerContext function.
            // (It doesn't exist in legacy versions)
            var createInnerContext = require("enhanced-resolve/lib/createInnerContext");
            return resolver.doResolve(hook, newRequest, "Resolved request '".concat(innerRequest, "' to '").concat(foundMatch, "' using tsconfig.json paths mapping"), 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            createInnerContext(__assign({}, resolveContext)), function (err2, result2) {
                // Pattern taken from:
                // https://github.com/webpack/enhanced-resolve/blob/42ff594140582c3f8f86811f95dea7bf6774a1c8/lib/AliasPlugin.js#L44
                if (err2) {
                    return callback(err2);
                }
                // Don't allow other aliasing or raw request
                if (result2 === undefined) {
                    return callback(undefined, undefined);
                }
                callback(undefined, result2);
            });
        });
    };
}
function createPluginLegacy(matchPath, resolver, absoluteBaseUrl, target, extensions) {
    var fileExistAsync = createFileExistAsync(resolver.fileSystem);
    var readJsonAsync = createReadJsonAsync(resolver.fileSystem);
    return function (request, callback) {
        var innerRequest = getInnerRequest(resolver, request);
        if (!innerRequest ||
            innerRequest.startsWith(".") ||
            innerRequest.startsWith("..")) {
            return callback();
        }
        matchPath(innerRequest, readJsonAsync, fileExistAsync, extensions, function (err, foundMatch) {
            if (err) {
                return callback(err);
            }
            if (!foundMatch) {
                return callback();
            }
            var newRequest = __assign(__assign({}, request), { request: foundMatch, path: absoluteBaseUrl });
            // Only at this point we are sure we are dealing with a legacy Webpack version (< 4.0.0)
            // So only now can we require the createInnerCallback function.
            // (It's already deprecated and might be removed down the line).
            var createInnerCallback = require("enhanced-resolve/lib/createInnerCallback");
            return resolver.doResolve(target, newRequest, "Resolved request '".concat(innerRequest, "' to '").concat(foundMatch, "' using tsconfig.json paths mapping"), createInnerCallback(function (err2, result2) {
                // Note:
                //  *NOT* using an arrow function here because arguments.length implies we have "this"
                //  That means "this" has to be in the current function scope, and not the scope above.
                //  Pattern taken from:
                //  https://github.com/s-panferov/awesome-typescript-loader/blob/10653beff85f555f1f3b5d4bfd7d21513d0e54a4/src/paths-plugin.ts#L169
                if (arguments.length > 0) {
                    return callback(err2, result2);
                }
                // don't allow other aliasing or raw request
                callback(undefined, undefined);
            }, callback));
        });
    };
}
function readJson(fileSystem, path2, callback) {
    if ("readJson" in fileSystem && fileSystem.readJson) {
        return fileSystem.readJson(path2, callback);
    }
    fileSystem.readFile(path2, function (err, buf) {
        if (err) {
            return callback(err);
        }
        var data;
        try {
            // @ts-ignore  This will crash if buf is undefined, which I guess it can be...
            data = JSON.parse(buf.toString("utf-8"));
        }
        catch (e) {
            return callback(e);
        }
        return callback(undefined, data);
    });
}
function createReadJsonAsync(filesystem) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (path2, callback2) {
        readJson(filesystem, path2, function (err, json) {
            // If error assume file does not exist
            if (err || !json) {
                callback2();
                return;
            }
            callback2(undefined, json);
        });
    };
}
function createFileExistAsync(filesystem) {
    return function (path2, callback2) {
        filesystem.stat(path2, function (err, stats) {
            // If error assume file does not exist
            if (err) {
                callback2(undefined, false);
                return;
            }
            callback2(undefined, stats ? stats.isFile() : false);
        });
    };
}
//# sourceMappingURL=plugin.js.map