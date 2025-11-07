"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRootLockFile = findRootLockFile;
exports.findPackageJson = findPackageJson;
exports.findWorkspacesRoot = findWorkspacesRoot;
exports.findRootDir = findRootDir;
const find_up_1 = __importDefault(require("find-up"));
const fs_1 = require("fs");
const path_1 = require("path");
function findRootLockFile(cwd) {
    return find_up_1.default.sync([
        "pnpm-lock.yaml",
        "package-lock.json",
        "yarn.lock",
        "bun.lock",
        "bun.lockb",
    ], {
        cwd,
    });
}
// compatible with tnpm
function findPackageJson(cwd) {
    return find_up_1.default.sync(["package.json"], {
        cwd,
    });
}
function isWorkspaceRoot(pkgPath) {
    const pkgJson = (0, fs_1.readFileSync)(pkgPath, "utf-8");
    const pkgJsonContent = JSON.parse(pkgJson);
    return Boolean(pkgJsonContent.workspaces);
}
// refer from: https://github.com/umijs/mako/blob/next/crates/pm/src/helper/workspace.rs#L153
// TODO: 这块逻辑后续跟 utoo-pkg 使用一套方法
function findWorkspacesRoot(cwd) {
    const pkgJson = findPackageJson(cwd);
    if (!pkgJson)
        return cwd;
    const pkgJsonFiles = [pkgJson];
    while (true) {
        const lastPkgJson = pkgJsonFiles[pkgJsonFiles.length - 1];
        const currentDir = (0, path_1.dirname)(lastPkgJson);
        const parentDir = (0, path_1.dirname)(currentDir);
        if (parentDir === currentDir)
            break;
        if (isWorkspaceRoot(lastPkgJson))
            break;
        const newPkgJson = findPackageJson(parentDir);
        if (!newPkgJson)
            break;
        pkgJsonFiles.push(newPkgJson);
    }
    return (0, path_1.dirname)(pkgJsonFiles[pkgJsonFiles.length - 1]);
}
function findRootDir(cwd) {
    const lockFile = findRootLockFile(cwd);
    if (!lockFile)
        return findWorkspacesRoot(cwd);
    const lockFiles = [lockFile];
    while (true) {
        const lastLockFile = lockFiles[lockFiles.length - 1];
        const currentDir = (0, path_1.dirname)(lastLockFile);
        const parentDir = (0, path_1.dirname)(currentDir);
        // dirname('/')==='/' so if we happen to reach the FS root (as might happen in a container we need to quit to avoid looping forever
        if (parentDir === currentDir)
            break;
        const newLockFile = findRootLockFile(parentDir);
        if (!newLockFile)
            break;
        lockFiles.push(newLockFile);
    }
    return (0, path_1.dirname)(lockFiles[lockFiles.length - 1]);
}
