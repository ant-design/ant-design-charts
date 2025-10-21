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

// src/features/polyfill/polyfill.ts
var polyfill_exports = {};
__export(polyfill_exports, {
  default: () => polyfill_default
});
module.exports = __toCommonJS(polyfill_exports);
var import_constants = require("@umijs/bundler-webpack/dist/constants");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var polyfill_default = (api) => {
  const babelCore = (0, import_utils.importLazy)(require.resolve("@umijs/bundler-utils/compiled/babel/core"));
  api.describe({
    key: "polyfill",
    config: {
      schema({ zod }) {
        return zod.object({
          imports: zod.array(zod.string()).optional()
        });
      }
    },
    enableBy: () => {
      return process.env.BABEL_POLYFILL !== "none";
    }
  });
  api.onGenerateFiles(() => {
    var _a, _b;
    const coreJsImports = ((_a = api.config.polyfill) == null ? void 0 : _a.imports) ? (_b = api.config.polyfill) == null ? void 0 : _b.imports.map((item) => `import '${item}';`).join("\n") : `import 'core-js';`;
    const { transform } = babelCore;
    const { code } = transform(
      `
${coreJsImports}
import '${(0, import_utils.winPath)(require.resolve("regenerator-runtime/runtime"))}';
export {};
`,
      {
        filename: "polyfill.ts",
        presets: [
          [
            require.resolve("@umijs/bundler-utils/compiled/babel/preset-env"),
            {
              useBuiltIns: "entry",
              corejs: (0, import_utils.getCorejsVersion)(
                (0, import_path.join)(__dirname, "../../../package.json")
              ),
              modules: false,
              targets: api.config.targets,
              ignoreBrowserslistConfig: true
            }
          ]
        ],
        plugins: [
          require.resolve("@umijs/babel-preset-umi/dist/plugins/lockCoreJS")
        ],
        babelrc: false,
        configFile: false,
        browserslistConfigFile: false
      }
    );
    api.writeTmpFile({
      path: "core/polyfill.ts",
      noPluginDir: true,
      content: excludeMathPolyfillInQiankun(code)
    });
  });
  api.addPolyfillImports(() => [{ source: `./core/polyfill` }]);
  api.modifyConfig((memo) => {
    memo.targets || (memo.targets = import_constants.DEFAULT_BROWSER_TARGETS);
    memo.alias["regenerator-runtime"] = (0, import_path.dirname)(
      require.resolve("regenerator-runtime/package")
    );
    return memo;
  });
  function excludeMathPolyfillInQiankun(code) {
    if (!api.config.qiankun) {
      return code;
    }
    const EXCLUDE_POLYFILLS = [
      "esnext.math.deg-per-rad",
      "esnext.math.rad-per-deg"
    ];
    const lines = code.split("\n");
    return lines.filter((line) => {
      return !EXCLUDE_POLYFILLS.some((i) => line.includes(i));
    }).join("\n");
  }
};
