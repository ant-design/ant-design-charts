"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Application_1;
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const FS = require("fs");
const typescript = require("typescript");
const index_1 = require("./converter/index");
const renderer_1 = require("./output/renderer");
const serialization_1 = require("./serialization");
const index_2 = require("./models/index");
const index_3 = require("./utils/index");
const paths_1 = require("./utils/paths");
const component_1 = require("./utils/component");
const utils_1 = require("./utils");
let Application = Application_1 = class Application extends component_1.ChildableComponent {
    constructor() {
        super(component_1.DUMMY_APPLICATION_OWNER);
        this.logger = new index_3.ConsoleLogger();
        this.options = new utils_1.Options(this.logger);
        this.options.addDefaultDeclarations();
        this.serializer = new serialization_1.Serializer();
        this.converter = this.addComponent('converter', index_1.Converter);
        this.renderer = this.addComponent('renderer', renderer_1.Renderer);
        this.plugins = this.addComponent('plugins', index_3.PluginHost);
    }
    bootstrap(options = {}) {
        for (const [key, val] of Object.entries(options)) {
            try {
                this.options.setValue(key, val);
            }
            catch (_a) {
            }
        }
        this.options.read(new index_3.Logger());
        const logger = this.loggerType;
        if (typeof logger === 'function') {
            this.logger = new index_3.CallbackLogger(logger);
            this.options.setLogger(this.logger);
        }
        else if (logger === 'none') {
            this.logger = new index_3.Logger();
            this.options.setLogger(this.logger);
        }
        this.plugins.load();
        this.options.reset();
        for (const [key, val] of Object.entries(options)) {
            try {
                this.options.setValue(key, val);
            }
            catch (error) {
                this.logger.error(error.message);
            }
        }
        this.options.read(this.logger);
        return {
            hasErrors: this.logger.hasErrors(),
            inputFiles: this.inputFiles
        };
    }
    get application() {
        return this;
    }
    getTypeScriptPath() {
        return Path.dirname(require.resolve('typescript'));
    }
    getTypeScriptVersion() {
        const tsPath = this.getTypeScriptPath();
        const json = JSON.parse(index_3.readFile(Path.join(tsPath, '..', 'package.json')));
        return json.version;
    }
    convert(src) {
        this.logger.writeln('Using TypeScript %s from %s', this.getTypeScriptVersion(), this.getTypeScriptPath());
        const result = this.converter.convert(src);
        if (result.errors && result.errors.length) {
            this.logger.diagnostics(result.errors);
            if (this.ignoreCompilerErrors) {
                this.logger.resetErrors();
                return result.project;
            }
            else {
                return;
            }
        }
        else {
            return result.project;
        }
    }
    generateDocs(input, out) {
        const project = input instanceof index_2.ProjectReflection ? input : this.convert(input);
        if (!project) {
            return false;
        }
        out = Path.resolve(out);
        this.renderer.render(project, out);
        if (this.logger.hasErrors()) {
            this.logger.error('Documentation could not be generated due to the errors above.');
        }
        else {
            this.logger.success('Documentation generated at %s', out);
        }
        return true;
    }
    generateJson(input, out) {
        const project = input instanceof index_2.ProjectReflection ? input : this.convert(input);
        if (!project) {
            return false;
        }
        out = Path.resolve(out);
        const eventData = { outputDirectory: Path.dirname(out), outputFile: Path.basename(out) };
        const ser = this.serializer.projectToObject(project, { begin: eventData, end: eventData });
        index_3.writeFile(out, JSON.stringify(ser, null, '\t'), false);
        this.logger.success('JSON written to %s', out);
        return true;
    }
    expandInputFiles(inputFiles = []) {
        const files = [];
        const exclude = this.exclude ? paths_1.createMinimatch(this.exclude) : [];
        function isExcluded(fileName) {
            return exclude.some(mm => mm.match(fileName));
        }
        const includeJson = this.options.getCompilerOptions().resolveJsonModule;
        const supportedFileRegex = this.options.getCompilerOptions().allowJs ? /\.[tj]sx?$/ : /\.tsx?$/;
        function add(file, entryPoint) {
            let stats;
            try {
                stats = FS.statSync(file);
            }
            catch (_a) {
                return;
            }
            const fileIsDir = stats.isDirectory();
            if (fileIsDir && !file.endsWith('/')) {
                file = `${file}/`;
            }
            if ((!fileIsDir || !entryPoint) && isExcluded(file.replace(/\\/g, '/'))) {
                return;
            }
            if (fileIsDir) {
                FS.readdirSync(file).forEach(next => {
                    add(Path.join(file, next), false);
                });
            }
            else if (supportedFileRegex.test(file)) {
                files.push(file);
            }
            else if (includeJson && file.endsWith('.json')) {
                files.push(file);
            }
        }
        inputFiles.forEach(file => {
            add(Path.resolve(file), true);
        });
        return files;
    }
    toString() {
        return [
            '',
            `TypeDoc ${Application_1.VERSION}`,
            `Using TypeScript ${this.getTypeScriptVersion()} from ${this.getTypeScriptPath()}`,
            ''
        ].join(typescript.sys.newLine);
    }
};
Application.VERSION = '0.17.8';
__decorate([
    utils_1.BindOption('logger')
], Application.prototype, "loggerType", void 0);
__decorate([
    utils_1.BindOption('ignoreCompilerErrors')
], Application.prototype, "ignoreCompilerErrors", void 0);
__decorate([
    utils_1.BindOption('exclude')
], Application.prototype, "exclude", void 0);
__decorate([
    utils_1.BindOption('inputFiles')
], Application.prototype, "inputFiles", void 0);
__decorate([
    utils_1.BindOption('options')
], Application.prototype, "optionsFile", void 0);
__decorate([
    utils_1.BindOption('tsconfig')
], Application.prototype, "project", void 0);
Application = Application_1 = __decorate([
    component_1.Component({ name: 'application', internal: true })
], Application);
exports.Application = Application;
//# sourceMappingURL=application.js.map