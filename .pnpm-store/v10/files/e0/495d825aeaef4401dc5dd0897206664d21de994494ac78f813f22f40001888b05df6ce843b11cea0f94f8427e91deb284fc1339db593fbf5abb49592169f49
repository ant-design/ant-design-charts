var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError('Cannot ' + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, 'read from private field');
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError('Cannot add the same private member more than once');
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, 'write to private field');
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/forkTSChecker/tsChecker.ts
var tsChecker_exports = {};
__export(tsChecker_exports, {
  TypeChecker: () => TypeChecker,
});
module.exports = __toCommonJS(tsChecker_exports);
var import_fs = require('fs');
var import_path = __toESM(require('path'));
var import_typescript = __toESM(require('typescript'));
var _projectRoot;
var TypeChecker = class {
  constructor(projectRoot) {
    __privateAdd(this, _projectRoot, void 0);
    __privateSet(this, _projectRoot, projectRoot);
  }
  async check() {
    try {
      const configPath = import_typescript.default.findConfigFile(
        __privateGet(this, _projectRoot),
        import_typescript.default.sys.fileExists,
        'tsconfig.json',
      );
      if (!configPath) {
        console.error(
          'Could not find a valid "tsconfig.json" file in the project root:',
          __privateGet(this, _projectRoot),
        );
        return;
      }
      let configFileText = '';
      try {
        configFileText = await import_fs.promises.readFile(configPath, 'utf8');
      } catch (readError) {
        console.error(
          `Error reading the "tsconfig.json" file at ${configPath}:`,
          readError,
        );
        return;
      }
      const configFile = import_typescript.default.parseConfigFileTextToJson(
        configPath,
        configFileText,
      );
      if (configFile.error) {
        console.error('Error parsing "tsconfig.json" file:', configFile.error);
        return;
      }
      let parsedCommandLine;
      try {
        parsedCommandLine =
          import_typescript.default.parseJsonConfigFileContent(
            configFile.config,
            import_typescript.default.sys,
            import_path.default.dirname(configPath),
          );
      } catch (parseError) {
        console.error(
          'Error parsing the configuration from "tsconfig.json":',
          parseError,
        );
        return;
      }
      let program;
      try {
        program = import_typescript.default.createProgram({
          rootNames: parsedCommandLine.fileNames,
          options: { ...parsedCommandLine.options, noEmit: true },
        });
      } catch (programError) {
        console.error('Error creating the TypeScript program:', programError);
        return;
      }
      const diagnostics =
        import_typescript.default.getPreEmitDiagnostics(program);
      if (diagnostics.length > 0) {
        diagnostics.forEach((diagnostic) => {
          const message =
            import_typescript.default.flattenDiagnosticMessageText(
              diagnostic.messageText,
              '\n',
            );
          if (diagnostic.file && typeof diagnostic.start === 'number') {
            const { line, character } =
              diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
            console.error(
              `${diagnostic.file.fileName} (${line + 1}, ${character + 1}): ${message}`,
            );
          } else {
            console.error(message);
          }
        });
      } else {
        console.log('No type errors found.');
      }
    } catch (error) {
      console.error(
        'An unexpected error occurred during type checking:',
        error,
      );
    }
  }
};
_projectRoot = new WeakMap();
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    TypeChecker,
  });
