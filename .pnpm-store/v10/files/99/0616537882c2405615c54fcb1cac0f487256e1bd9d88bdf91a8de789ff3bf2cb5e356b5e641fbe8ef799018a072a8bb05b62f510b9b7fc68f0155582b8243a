"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = exports.build = void 0;
const build_1 = require("./build");
Object.defineProperty(exports, "build", { enumerable: true, get: function () { return build_1.build; } });
const dev_1 = require("./dev");
Object.defineProperty(exports, "serve", { enumerable: true, get: function () { return dev_1.serve; } });
const utoopack = { build: build_1.build, serve: dev_1.serve };
exports.default = utoopack;
__exportStar(require("./find-root"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./webpackCompat"), exports);
