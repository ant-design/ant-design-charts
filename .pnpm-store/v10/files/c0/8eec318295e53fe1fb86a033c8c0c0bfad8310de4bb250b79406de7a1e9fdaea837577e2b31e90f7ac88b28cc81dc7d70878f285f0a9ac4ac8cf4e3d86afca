var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/commands/generators/component.ts
var component_exports = {};
__export(component_exports, {
  ComponentGenerator: () => ComponentGenerator,
  default: () => component_default
});
module.exports = __toCommonJS(component_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_constants = require("../../constants");
var import_utils2 = require("./utils");
var component_default = (api) => {
  api.describe({
    key: "generator:component"
  });
  api.registerGenerator({
    key: "component",
    name: "Generate Component",
    description: "Generate component boilerplate code",
    type: import_core.GeneratorType.generate,
    fn: async (options) => {
      const { args } = options;
      if (args.eject) {
        await (0, import_utils2.tryEject)(import_utils2.ETempDir.Component, api.paths.cwd);
        return;
      }
      const h = new import_utils2.GeneratorHelper(api);
      let componentNames = args._.slice(1);
      if (componentNames.length === 0) {
        let name = "";
        name = await h.ensureVariableWithQuestion(name, {
          type: "text",
          message: "Please input you component Name",
          hint: "foo",
          initial: "foo",
          format: (s) => (s == null ? void 0 : s.trim()) || ""
        });
        componentNames = [name];
      }
      for (const cn of componentNames) {
        await new ComponentGenerator({
          srcPath: api.paths.absSrcPath,
          appRoot: api.paths.cwd,
          componentName: cn,
          args
        }).run();
      }
    }
  });
};
var ComponentGenerator = class {
  constructor(opts) {
    this.opts = opts;
    const { name, dir } = (0, import_path.parse)(this.opts.componentName);
    this.name = name;
    this.dir = dir;
  }
  async run() {
    const { appRoot, args } = this.opts;
    const capitalizeName = import_utils.lodash.upperFirst(this.name);
    const base = (0, import_path.join)(
      this.opts.srcPath,
      "components",
      this.dir,
      capitalizeName
    );
    const { _, eject: _eject, fallback, ...restArgs } = args;
    await (0, import_utils2.processGenerateFiles)({
      filesMap: [
        {
          from: (0, import_path.join)(appRoot, USER_TEMPLATE_COMP_DIR),
          fromFallback: COMP_TEMPLATE_DIR,
          to: base
        }
      ],
      baseDir: appRoot,
      presetArgs: {
        fallback
      },
      templateVars: {
        compName: capitalizeName,
        ...restArgs
      }
    });
  }
};
var COMP_TEMPLATE_DIR = (0, import_path.join)(import_constants.TEMPLATES_DIR, "generate/component");
var USER_TEMPLATE_COMP_DIR = "templates/component";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ComponentGenerator
});
