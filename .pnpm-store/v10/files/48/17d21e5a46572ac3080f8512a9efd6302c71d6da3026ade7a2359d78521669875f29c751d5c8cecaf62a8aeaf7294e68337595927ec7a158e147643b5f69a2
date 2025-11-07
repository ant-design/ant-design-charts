"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const declaration_1 = require("./declaration");
const array_1 = require("../array");
const sources_1 = require("./sources");
class Options {
    constructor(logger) {
        this._readers = [];
        this._declarations = new Map();
        this._values = {};
        this._compilerOptions = {};
        this._logger = logger;
    }
    setLogger(logger) {
        this._logger = logger;
    }
    addDefaultDeclarations() {
        sources_1.addTSOptions(this);
        sources_1.addTypeDocOptions(this);
    }
    reset() {
        for (const declaration of this._declarations.values()) {
            this.setOptionValueToDefault(declaration);
        }
        this._compilerOptions = {};
    }
    addReader(reader) {
        array_1.insertPrioritySorted(this._readers, reader);
    }
    removeReaderByName(name) {
        this._readers = this._readers.filter(reader => reader.name !== name);
    }
    read(logger) {
        for (const reader of this._readers) {
            reader.read(this, logger);
        }
    }
    addDeclaration(declaration) {
        const names = [declaration.name];
        if (declaration.short) {
            names.push(declaration.short);
        }
        for (const name of names) {
            const decl = this.getDeclaration(name);
            if (decl && decl !== declaration) {
                this._logger.error(`The option ${name} has already been registered`);
            }
            else {
                this._declarations.set(name.toLowerCase(), declaration);
            }
        }
        this.setOptionValueToDefault(declaration);
    }
    addDeclarations(declarations) {
        for (const decl of declarations) {
            this.addDeclaration(decl);
        }
    }
    removeDeclarationByName(name) {
        const declaration = this.getDeclaration(name);
        if (declaration) {
            this._declarations.delete(declaration.name.toLowerCase());
            if (declaration.short) {
                this._declarations.delete(declaration.short.toLowerCase());
            }
            delete this._values[declaration.name];
        }
    }
    getDeclaration(name) {
        return this._declarations.get(name.toLowerCase());
    }
    getDeclarationsByScope(scope) {
        return _.uniq(Array.from(this._declarations.values()))
            .filter(declaration => { var _a; return ((_a = declaration.scope) !== null && _a !== void 0 ? _a : declaration_1.ParameterScope.TypeDoc) === scope; });
    }
    isDefault(name) {
        return this.getValue(name) === this.getDeclaration(name).defaultValue;
    }
    getRawValues() {
        return _.cloneDeep(this._values);
    }
    getValue(name) {
        const declaration = this.getDeclaration(name);
        if (!declaration) {
            throw new Error(`Unknown option '${name}'`);
        }
        if (declaration.scope === declaration_1.ParameterScope.TypeScript) {
            throw new Error('TypeScript options must be fetched with getCompilerOptions.');
        }
        return this._values[declaration.name];
    }
    getCompilerOptions() {
        return _.cloneDeep(this._compilerOptions);
    }
    setValue(name, value) {
        const declaration = this.getDeclaration(name);
        if (!declaration) {
            throw new Error(`Tried to set an option (${name}) that was not declared.`);
        }
        const converted = declaration_1.convert(value, declaration);
        const bag = declaration.scope === declaration_1.ParameterScope.TypeScript
            ? this._compilerOptions
            : this._values;
        bag[declaration.name] = converted;
    }
    setValues(obj) {
        this._logger.warn('Options.setValues is deprecated and will be removed in 0.19.');
        for (const [name, value] of Object.entries(obj)) {
            this.setValue(name, value);
        }
    }
    setOptionValueToDefault(declaration) {
        if (declaration.scope !== declaration_1.ParameterScope.TypeScript) {
            if (declaration.type === declaration_1.ParameterType.Map) {
                this._values[declaration.name] = declaration.defaultValue;
            }
            else if (declaration.type === declaration_1.ParameterType.Number) {
                this._values[declaration.name] = declaration.defaultValue || 0;
            }
            else {
                this._values[declaration.name] = declaration_1.convert(declaration.defaultValue, declaration);
            }
        }
    }
}
exports.Options = Options;
function BindOption(name) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                if ('options' in this) {
                    return this.options.getValue(name);
                }
                else {
                    return this.application.options.getValue(name);
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.BindOption = BindOption;
//# sourceMappingURL=options.js.map