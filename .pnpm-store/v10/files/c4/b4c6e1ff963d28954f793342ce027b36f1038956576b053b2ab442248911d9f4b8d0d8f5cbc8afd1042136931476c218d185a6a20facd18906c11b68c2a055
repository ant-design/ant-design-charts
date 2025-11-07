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
var webpack = require("webpack");
var path = require("path");
var plugin_1 = require("../plugin");
describe("TsconfigPathsPlugin", function () {
    var SETTINGS = {
        mode: "development",
        context: path.resolve(__dirname, "src"),
        entry: "".concat(__dirname, "/../../examples/example/src/index.ts"),
        output: {
            path: path.join(__dirname, "../../temp"),
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\\.tsx?$/,
                    exclude: /^node_modules/,
                    loader: "ts-loader",
                    options: {
                        configFile: "./example/tsconfig.json",
                    },
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
    };
    it("Can initialize the plugin", function (done) {
        var testPlugin = new plugin_1.TsconfigPathsPlugin({
            configFile: "".concat(__dirname, "/../../examples/example/tsconfig.json"),
            logLevel: "INFO",
            extensions: [".ts", ".tsx"],
            mainFields: ["browser", "main"],
        });
        expect(testPlugin).toBeInstanceOf(plugin_1.TsconfigPathsPlugin);
        var testSettings = __assign(__assign({}, SETTINGS), { resolve: {
                extensions: [".ts", ".tsx", ".js"],
                plugins: [testPlugin],
            } });
        var compiler = webpack(testSettings);
        compiler.run(function (err, stats) {
            if (err) {
                done(err);
                return;
            }
            expect(stats).toBeDefined();
            var details = stats === null || stats === void 0 ? void 0 : stats.toJson();
            expect(details === null || details === void 0 ? void 0 : details.errorsCount).toEqual(0);
            // TODO There should probably be a test that verifies the stats match what is expected
            done();
        });
    });
    it("Test to ensure Apply exists and is working", function (done) {
        var _a, _b, _c;
        var webpackSettings = {
            entry: "".concat(__dirname, "/../../examples/example/src/index.ts"),
            target: "web",
            output: {
                path: path.join(__dirname, "../../temp"),
                filename: "[name].js",
            },
            mode: "development",
            resolve: {
                extensions: [
                    ".ts",
                    ".tsx",
                    ".js",
                    ".jsx",
                    "ttf",
                    "eot",
                    "otf",
                    "svg",
                    "png",
                    "woff",
                    "woff2",
                ],
                plugins: [
                    new plugin_1.TsconfigPathsPlugin({
                        configFile: "".concat(__dirname, "/../../examples/example/tsconfig.json"),
                    }),
                ],
            },
            module: {
                rules: [],
            },
        };
        // Build compiler
        var compiler = webpack(webpackSettings);
        var pluginInstance = (_c = (_b = (_a = compiler === null || compiler === void 0 ? void 0 : compiler.options) === null || _a === void 0 ? void 0 : _a.resolve) === null || _b === void 0 ? void 0 : _b.plugins) === null || _c === void 0 ? void 0 : _c.find(function (plugin) { return plugin instanceof plugin_1.TsconfigPathsPlugin; });
        if (!pluginInstance) {
            return done("TsconfigPathsPlugin not loaded in webpack settings");
        }
        expect(pluginInstance instanceof plugin_1.TsconfigPathsPlugin).toBeTruthy();
        expect(pluginInstance.apply).toBeDefined();
        // Run compiler
        compiler.run(function (err, stats) {
            if (err) {
                done(err);
                return;
            }
            expect(stats).toBeDefined();
            var details = stats === null || stats === void 0 ? void 0 : stats.toJson();
            expect(details === null || details === void 0 ? void 0 : details.errorsCount).toEqual(0);
            done();
        });
    });
    it("Resolves project references", function (done) {
        var testPlugin = new plugin_1.TsconfigPathsPlugin({
            configFile: "".concat(__dirname, "/../../examples/referenceExample/tsconfig.json"),
            logLevel: "INFO",
            extensions: [".ts", ".tsx"],
            mainFields: ["browser", "main"],
            references: ["".concat(__dirname, "/../../examples/example/tsconfig.json")],
        });
        expect(testPlugin).toBeInstanceOf(plugin_1.TsconfigPathsPlugin);
        var testSettings = __assign(__assign({}, SETTINGS), { resolve: {
                extensions: [".ts", ".tsx", ".js"],
                plugins: [testPlugin],
            } });
        var compiler = webpack(testSettings);
        compiler.run(function (err, stats) {
            if (err) {
                done(err);
                return;
            }
            expect(stats).toBeDefined();
            var details = stats === null || stats === void 0 ? void 0 : stats.toJson();
            expect(details === null || details === void 0 ? void 0 : details.errorsCount).toEqual(0);
            // TODO There should probably be a test that verifies the stats match what is expected
            done();
        });
    });
});
//# sourceMappingURL=plugins.test.js.map