"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustifyEnv = exports.processIssues = exports.ModuleBuildError = exports.isWellKnownError = exports.debounce = exports.createDefineEnv = void 0;
exports.blockStdout = blockStdout;
exports.getPackPath = getPackPath;
const path_1 = __importDefault(require("path"));
var pack_shared_1 = require("@utoo/pack-shared");
Object.defineProperty(exports, "createDefineEnv", { enumerable: true, get: function () { return pack_shared_1.createDefineEnv; } });
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return pack_shared_1.debounce; } });
Object.defineProperty(exports, "isWellKnownError", { enumerable: true, get: function () { return pack_shared_1.isWellKnownError; } });
Object.defineProperty(exports, "ModuleBuildError", { enumerable: true, get: function () { return pack_shared_1.ModuleBuildError; } });
Object.defineProperty(exports, "processIssues", { enumerable: true, get: function () { return pack_shared_1.processIssues; } });
Object.defineProperty(exports, "rustifyEnv", { enumerable: true, get: function () { return pack_shared_1.rustifyEnv; } });
// ref:
// https://github.com/vercel/next.js/pull/51883
function blockStdout() {
    // rust needs stdout to be blocking, otherwise it will throw an error (on macOS at least) when writing a lot of data (logs) to it
    // see https://github.com/napi-rs/napi-rs/issues/1630
    // and https://github.com/nodejs/node/blob/main/doc/api/process.md#a-note-on-process-io
    if (process.stdout._handle != null) {
        process.stdout._handle.setBlocking(true);
    }
    if (process.stderr._handle != null) {
        process.stderr._handle.setBlocking(true);
    }
}
function getPackPath() {
    return path_1.default.resolve(__dirname, "..");
}
