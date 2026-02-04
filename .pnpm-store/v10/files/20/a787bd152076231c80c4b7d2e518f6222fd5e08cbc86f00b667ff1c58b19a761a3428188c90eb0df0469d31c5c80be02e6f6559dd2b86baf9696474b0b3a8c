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
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/esbuildHelperChecker/esbuildHelperChecker.ts
var esbuildHelperChecker_exports = {};
__export(esbuildHelperChecker_exports, {
  default: () => esbuildHelperChecker_default,
  getGlobalVars: () => getGlobalVars
});
module.exports = __toCommonJS(esbuildHelperChecker_exports);
var parser = __toESM(require("@umijs/bundler-utils/compiled/babel/parser"));
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
async function checkDir(opts) {
  import_utils.logger.info(
    `[esbuildHelperChecker] Checking esbuild helpers from your dist files...`
  );
  const jsFiles = import_fs.default.readdirSync(opts.dir).filter((file) => file.endsWith(".js"));
  const varMap = {};
  for (const jsFile of jsFiles) {
    const vars = await getGlobalVars({
      content: import_fs.default.readFileSync(import_path.default.join(opts.dir, jsFile), "utf-8"),
      fileName: jsFile
    });
    for (const v of vars) {
      varMap[v] = varMap[v] || [];
      varMap[v].push(jsFile);
    }
  }
  const conflicts = Object.keys(varMap).filter((v) => varMap[v].length > 1).map((v) => `${v} (${varMap[v].join(", ")})`);
  if (conflicts.length) {
    import_utils.logger.fatal(
      import_utils.chalk.yellow(
        `Found conflicts in esbuild helpers: ${conflicts.join(", ")}`
      )
    );
    import_utils.logger.info(
      `please set ${import_utils.chalk.blue("esbuildMinifyIIFE: true")} in your config file`
    );
    throw new Error(`Found conflicts in esbuild helpers.`);
  }
  import_utils.logger.info(`[esbuildHelperChecker] No conflicts found.`);
}
async function getGlobalVars(opts) {
  const vars = [];
  try {
    const ast = parser.parse(opts.content, {
      sourceType: "module",
      sourceFilename: "foo.js",
      plugins: []
    });
    ast.program.body.forEach((node) => {
      if (t.isVariableDeclaration(node)) {
        node.declarations.forEach((declaration) => {
          if (t.isVariableDeclarator(declaration)) {
            if (t.isIdentifier(declaration.id)) {
              vars.push(declaration.id.name);
            }
          }
        });
      }
    });
  } catch (error) {
    import_utils.logger.error(
      `[esbuildHelperChecker] Failed to parse ${opts.fileName}, ${error.message}`
    );
  }
  return vars;
}
var esbuildHelperChecker_default = (api) => {
  api.registerCommand({
    name: "esbuildHelperChecker",
    description: "check esbuild helper conflicts",
    configResolveMode: "loose",
    async fn({ args }) {
      const targetDir = args._[0];
      (0, import_assert.default)(targetDir, "target directory is required");
      await checkDir({
        dir: import_path.default.resolve(process.cwd(), targetDir)
      });
    }
  });
  api.onBuildComplete(async ({ err }) => {
    if (api.config.vite || api.config.mako || api.config.utoopack) return;
    if (err) return;
    const jsMinifier = api.config.jsMinifier || "esbuild";
    if (jsMinifier !== "esbuild") return;
    if (api.config.esbuildMinifyIIFE) return;
    if (process.env.COMPRESS === "none") return;
    try {
      await checkDir({
        dir: api.paths.absOutputPath
      });
    } catch (e) {
      import_utils.logger.fatal(import_utils.chalk.red(`[esbuildHelperChecker] ${e.message}`));
      process.exit(1);
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getGlobalVars
});
