"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const FS = require("fs");
const components_1 = require("../components");
const converter_1 = require("../converter");
const utils_1 = require("../../utils");
let PackagePlugin = class PackagePlugin extends components_1.ConverterComponent {
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_BEGIN]: this.onBegin,
            [converter_1.Converter.EVENT_FILE_BEGIN]: this.onBeginDocument,
            [converter_1.Converter.EVENT_RESOLVE_BEGIN]: this.onBeginResolve
        });
    }
    onBegin(context) {
        this.readmeFile = undefined;
        this.packageFile = undefined;
        this.visited = [];
        let readme = this.readme;
        this.noReadmeFile = (readme === 'none');
        if (!this.noReadmeFile && readme) {
            readme = Path.resolve(readme);
            if (FS.existsSync(readme)) {
                this.readmeFile = readme;
            }
        }
    }
    onBeginDocument(context, reflection, node) {
        const packageAndReadmeFound = () => (this.noReadmeFile || this.readmeFile) && this.packageFile;
        const reachedTopDirectory = dirName => dirName === Path.resolve(Path.join(dirName, '..'));
        const visitedDirBefore = dirName => this.visited.includes(dirName);
        if (!node) {
            return;
        }
        const fileName = node.fileName;
        let dirName = Path.resolve(Path.dirname(fileName));
        while (!packageAndReadmeFound() && !reachedTopDirectory(dirName) && !visitedDirBefore(dirName)) {
            FS.readdirSync(dirName).forEach((file) => {
                const lowercaseFileName = file.toLowerCase();
                if (!this.noReadmeFile && !this.readmeFile && lowercaseFileName === 'readme.md') {
                    this.readmeFile = Path.join(dirName, file);
                }
                if (!this.packageFile && lowercaseFileName === 'package.json') {
                    this.packageFile = Path.join(dirName, file);
                }
            });
            this.visited.push(dirName);
            dirName = Path.resolve(Path.join(dirName, '..'));
        }
    }
    onBeginResolve(context) {
        const project = context.project;
        if (this.readmeFile) {
            project.readme = utils_1.readFile(this.readmeFile);
        }
        if (this.packageFile) {
            project.packageInfo = JSON.parse(utils_1.readFile(this.packageFile));
            if (!project.name) {
                project.name = String(project.packageInfo.name);
            }
            if (this.includeVersion) {
                project.name = `${project.name} - v${project.packageInfo.version}`;
            }
        }
    }
};
__decorate([
    utils_1.BindOption('readme')
], PackagePlugin.prototype, "readme", void 0);
__decorate([
    utils_1.BindOption('includeVersion')
], PackagePlugin.prototype, "includeVersion", void 0);
PackagePlugin = __decorate([
    components_1.Component({ name: 'package' })
], PackagePlugin);
exports.PackagePlugin = PackagePlugin;
//# sourceMappingURL=PackagePlugin.js.map