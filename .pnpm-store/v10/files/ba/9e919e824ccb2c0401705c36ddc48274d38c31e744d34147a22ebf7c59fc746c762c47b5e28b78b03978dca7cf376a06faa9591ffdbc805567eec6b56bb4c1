"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filePathsP = exports.readFileSync = exports.isFileSync = exports.toAbsolutePath = void 0;
const libs_1 = require("./libs");
function toAbsolutePath(path) {
    return path.startsWith('.') ? libs_1.fsPath.resolve(path) : path;
}
exports.toAbsolutePath = toAbsolutePath;
function isFileSync(path) {
    return libs_1.fs.existsSync(path) ? libs_1.fs.lstatSync(path).isFile() : false;
}
exports.isFileSync = isFileSync;
function readFileSync(path) {
    return libs_1.fs.existsSync(path) ? libs_1.fs.readFileSync(path).toString() : undefined;
}
exports.readFileSync = readFileSync;
function filePathsP(basePath, ns) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield libs_1.fs.pathExists(basePath)))
            return [];
        return (yield libs_1.fs.readdir(basePath))
            .filter(Boolean)
            .filter((name) => (ns ? name.startsWith(ns) : true))
            .filter((name) => (!ns ? !name.includes('-') : true))
            .map((name) => `${basePath}/${name}`);
    });
}
exports.filePathsP = filePathsP;
