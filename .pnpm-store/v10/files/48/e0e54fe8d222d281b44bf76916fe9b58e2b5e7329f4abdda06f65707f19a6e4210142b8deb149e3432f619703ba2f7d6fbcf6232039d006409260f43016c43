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

// src/commands/generators/page.ts
var page_exports = {};
__export(page_exports, {
  PageGenerator: () => PageGenerator,
  default: () => page_default
});
module.exports = __toCommonJS(page_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_constants = require("../../constants");
var import_utils2 = require("./utils");
var page_default = (api) => {
  api.describe({
    key: "generator:page"
  });
  api.registerGenerator({
    key: "page",
    name: "Create Pages",
    description: "Create a umi page by page name",
    type: import_core.GeneratorType.generate,
    fn: async (options) => {
      const { args } = options;
      if (args.eject) {
        await (0, import_utils2.tryEject)(import_utils2.ETempDir.Page, api.paths.cwd);
        return;
      }
      return new PageGenerator({
        args,
        absPagesPath: api.paths.absPagesPath,
        appCwd: api.paths.cwd,
        importSource: api.appData.umi.importSource,
        useStyledComponents: !!api.userConfig.styledComponents
      }).run();
    }
  });
};
var PAGE_TEMPLATE_DIR = (0, import_path.join)(import_constants.TEMPLATES_DIR, "generate/page/");
var DEFAULT_PAGE_NAME = "unTitledPage";
var USER_TEMPLATE_PAGE_DIR = "templates/page";
var PageGenerator = class {
  constructor(options) {
    this.options = options;
    this.isDirMode = false;
    this.dir = "";
    this.name = "";
    this.importSource = "";
    this.needEnsureDirMode = false;
    this.prompts = import_utils2.promptsExitWhenCancel;
    this.paths = [];
    this.isDirMode = !!options.args.dir;
    this.importSource = options.importSource || "umi";
    const [_, ...inputPaths] = options.args._;
    if (inputPaths.length > 0) {
      this.paths = inputPaths;
    } else {
      this.needEnsureDirMode = true;
    }
  }
  async run() {
    if (this.paths.length === 0) {
      await this.runInteractiveMode();
    } else {
      for (const p of this.paths) {
        this.setPath(p);
        if (this.isDirMode) {
          await this.dirModeRun();
        } else {
          await this.fileModeRun();
        }
      }
    }
  }
  async runInteractiveMode() {
    await this.ensureName();
    await this.ensureDirMode();
    if (this.isDirMode) {
      await this.dirModeRun();
    } else {
      await this.fileModeRun();
    }
  }
  setPrompter(p) {
    this.prompts = p;
  }
  getDirMode() {
    return this.isDirMode;
  }
  setPath(np) {
    const { dir, name } = (0, import_path.parse)(np);
    this.name = name;
    this.dir = dir;
  }
  async ensureName() {
    if (this.name) {
      return;
    }
    const response = await this.prompts({
      type: "text",
      name: "name",
      message: "What is the name of page?",
      initial: DEFAULT_PAGE_NAME
    });
    const { name: rawInput = "" } = response;
    const pageName = rawInput.trim();
    if (pageName) {
      this.setPath(pageName);
    } else {
      this.setPath(DEFAULT_PAGE_NAME);
    }
    this.isDirMode = false;
  }
  async ensureDirMode() {
    if (!this.needEnsureDirMode)
      return;
    const response = await this.prompts({
      type: "select",
      name: "mode",
      message: "How dou you want page files to be created?",
      choices: [
        { title: this.dirModeFileExample(), value: "dir" },
        { title: this.fileModeFileExample(), value: "file" }
      ],
      initial: 0
    });
    this.isDirMode = response.mode === "dir";
  }
  fileModeFileExample() {
    const base = (0, import_path.join)(this.dir, this.name);
    return `${base}.{tsx,less}`;
  }
  dirModeFileExample() {
    const base = (0, import_path.join)(this.dir, this.name, "index");
    return `${base}.{tsx,less}`;
  }
  async fileModeRun() {
    const { absPagesPath, args, appCwd, useStyledComponents } = this.options;
    const { _, dir: _dir, eject: _eject, fallback, ...restVars } = args;
    const filesMap = [
      {
        from: (0, import_path.join)(appCwd, USER_TEMPLATE_PAGE_DIR, "index"),
        fromFallback: (0, import_path.join)(
          PAGE_TEMPLATE_DIR,
          useStyledComponents ? "index.styled-components.tsx.tpl" : "index.tsx.tpl"
        ),
        to: (0, import_path.join)(absPagesPath, this.dir, `${this.name}.tsx`),
        exts: [".tsx.tpl", ".tsx"]
      }
    ];
    if (!useStyledComponents) {
      filesMap.push({
        from: (0, import_path.join)(appCwd, USER_TEMPLATE_PAGE_DIR, "index"),
        fromFallback: (0, import_path.join)(PAGE_TEMPLATE_DIR, "index.less.tpl"),
        to: (0, import_path.join)(absPagesPath, this.dir, `${this.name}.less`),
        exts: [".less.tpl", ".less"]
      });
    }
    await (0, import_utils2.processGenerateFiles)({
      filesMap,
      baseDir: this.options.appCwd,
      presetArgs: {
        fallback
      },
      templateVars: {
        color: (0, import_utils.randomColor)(),
        name: this.name,
        cssExt: ".less",
        importSource: this.importSource,
        ...restVars
      }
    });
  }
  async dirModeRun() {
    const { absPagesPath, args, appCwd } = this.options;
    const { _, dir: _dir, eject: _eject, fallback, ...restVars } = args;
    await (0, import_utils2.processGenerateFiles)({
      filesMap: [
        {
          from: (0, import_path.join)(appCwd, USER_TEMPLATE_PAGE_DIR),
          fromFallback: PAGE_TEMPLATE_DIR,
          to: (0, import_path.join)(absPagesPath, this.dir, this.name)
        }
      ],
      baseDir: appCwd,
      presetArgs: {
        fallback
      },
      templateVars: {
        importSource: this.importSource,
        color: (0, import_utils.randomColor)(),
        name: "index",
        cssExt: ".less",
        ...restVars
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PageGenerator
});
