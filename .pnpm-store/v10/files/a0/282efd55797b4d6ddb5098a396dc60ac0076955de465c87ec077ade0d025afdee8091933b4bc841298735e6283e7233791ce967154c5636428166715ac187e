"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript = require("typescript");
const application_1 = require("./application");
const options_1 = require("./utils/options");
const help_1 = require("./utils/options/help");
const readers_1 = require("./utils/options/readers");
const tsconfig_1 = require("./utils/options/readers/tsconfig");
var ExitCode;
(function (ExitCode) {
    ExitCode[ExitCode["OptionError"] = 1] = "OptionError";
    ExitCode[ExitCode["NoInputFiles"] = 2] = "NoInputFiles";
    ExitCode[ExitCode["NoOutput"] = 3] = "NoOutput";
    ExitCode[ExitCode["CompileError"] = 4] = "CompileError";
    ExitCode[ExitCode["OutputError"] = 5] = "OutputError";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
class CliApplication extends application_1.Application {
    bootstrap(options) {
        this.options.addReader(new readers_1.ArgumentsReader(0));
        this.options.addReader(new readers_1.TypeDocReader());
        this.options.addReader(new tsconfig_1.TSConfigReader());
        this.options.addReader(new readers_1.ArgumentsReader(300));
        const result = super.bootstrap(options);
        if (result.hasErrors) {
            return process.exit(1);
        }
        if (this.version) {
            typescript.sys.write(this.toString());
        }
        else if (this.help) {
            typescript.sys.write(help_1.getOptionsHelp(this.options));
        }
        else if (result.inputFiles.length === 0) {
            typescript.sys.write(help_1.getOptionsHelp(this.options));
            process.exit(2);
        }
        else {
            const src = this.expandInputFiles(result.inputFiles);
            const project = this.convert(src);
            if (project) {
                if (this.out) {
                    this.generateDocs(project, this.out);
                }
                if (this.json) {
                    this.generateJson(project, this.json);
                }
                if (!this.out && !this.json) {
                    this.logger.log("No 'out' or 'json' option has been set");
                    this.logger.log("The './docs' directory has be set as the output location by default");
                    this.generateDocs(project, './docs');
                }
                if (this.logger.hasErrors()) {
                    process.exit(5);
                }
            }
            else {
                process.exit(4);
            }
        }
        return result;
    }
}
__decorate([
    options_1.BindOption('out')
], CliApplication.prototype, "out", void 0);
__decorate([
    options_1.BindOption('json')
], CliApplication.prototype, "json", void 0);
__decorate([
    options_1.BindOption('version')
], CliApplication.prototype, "version", void 0);
__decorate([
    options_1.BindOption('help')
], CliApplication.prototype, "help", void 0);
exports.CliApplication = CliApplication;
//# sourceMappingURL=cli.js.map