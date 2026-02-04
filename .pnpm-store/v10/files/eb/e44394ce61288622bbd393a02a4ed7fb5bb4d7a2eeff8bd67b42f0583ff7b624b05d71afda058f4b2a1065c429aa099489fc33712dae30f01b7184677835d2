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

// src/commands/generators/jest.ts
var jest_exports = {};
__export(jest_exports, {
  default: () => jest_default
});
module.exports = __toCommonJS(jest_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_utils2 = require("./utils");
var jest_default = (api) => {
  api.describe({
    key: "generator:jest"
  });
  api.registerGenerator({
    key: "jest",
    name: "Enable Jest",
    description: "Setup Jest Configuration",
    type: import_core.GeneratorType.enable,
    checkEnable: () => {
      return !(0, import_fs.existsSync)((0, import_path.join)(api.paths.cwd, "jest.config.ts")) && !(0, import_fs.existsSync)((0, import_path.join)(api.paths.cwd, "jest.config.js"));
    },
    disabledDescription: "jest has already enabled. You can remove jest.config.{ts,js}, then run this again to re-setup.",
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      const res = await (0, import_utils2.promptsExitWhenCancel)({
        type: "confirm",
        name: "willUseTLR",
        message: "Will you use @testing-library/react for UI testing?!",
        initial: true
      });
      const hasSrc = api.paths.absSrcPath.endsWith("src");
      const importSource = api.appData.umi.importSource;
      const jestMajorVersion = `^${getJestVersion()}`;
      const basicDeps = {
        jest: jestMajorVersion,
        "@types/jest": jestMajorVersion,
        // we use `jest.config.ts` so jest needs ts and ts-node
        typescript: "^5",
        "ts-node": "^10",
        "cross-env": "^7"
      };
      const reactTestingDeps = {
        // `jest-environment-jsdom` is no longer included in jest >= 28
        "jest-environment-jsdom": jestMajorVersion,
        // RTL
        "@testing-library/jest-dom": "^5",
        "@testing-library/react": "^14"
      };
      const packageToInstall = res.willUseTLR ? {
        ...basicDeps,
        ...reactTestingDeps,
        "@types/testing-library__jest-dom": "^5.14.5"
      } : basicDeps;
      h.addDevDeps(packageToInstall);
      h.addScript(
        "test",
        "cross-env TS_NODE_TRANSPILE_ONLY=yes jest --passWithNoTests"
      );
      const setupImports = res.willUseTLR ? [
        `import '@testing-library/jest-dom';`,
        `import '${api.appData.umi.importSource}/test-setup'`
      ] : [`import '${api.appData.umi.importSource}/test-setup'`];
      (0, import_fs.writeFileSync)((0, import_path.join)(api.cwd, "jest-setup.ts"), setupImports.join("\n"));
      import_utils.logger.info("Write jest-setup.ts");
      const collectCoverageFrom = hasSrc ? [
        "src/**/*.{ts,js,tsx,jsx}",
        "!src/.umi/**",
        "!src/.umi-test/**",
        "!src/.umi-production/**"
      ] : [
        "**/*.{ts,tsx,js,jsx}",
        "!.umi/**",
        "!.umi-test/**",
        "!.umi-production/**",
        "!.umirc.{js,ts}",
        "!.umirc.*.{js,ts}",
        "!jest.config.{js,ts}",
        "!coverage/**",
        "!dist/**",
        "!config/**",
        "!mock/**"
      ];
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "jest.config.ts"),
        `
import { Config, configUmiAlias, createConfig } from '${importSource}/test';

export default async () => {
  try{
    return (await configUmiAlias({
      ...createConfig({
        target: 'browser',
        jsTransformer: 'esbuild',
        // config opts for esbuild , it will pass to esbuild directly
        jsTransformerOpts: { jsx: 'automatic' },
      }),

      ${res.willUseTLR ? `setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],` : ""}
      collectCoverageFrom: [
${collectCoverageFrom.map((v) => `        '${v}'`).join(",\n")}
      ],
      // if you require some es-module npm package, please uncomment below line and insert your package name
      // transformIgnorePatterns: ['node_modules/(?!.*(lodash-es|your-es-pkg-name)/)']
    })) as Config.InitialOptions;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
`.trimStart()
      );
      import_utils.logger.info("Write jest.config.ts");
      h.installDeps();
    }
  });
};
function getJestVersion() {
  try {
    const umiPkg = require.resolve("umi/package.json", {
      paths: [process.cwd()]
    });
    const testPkg = require.resolve("@umijs/test/package.json", {
      paths: [umiPkg]
    });
    const version = require(testPkg).devDependencies.jest;
    return import_utils.semver.minVersion(version).version.split(".")[0];
  } catch {
    return 29;
  }
}
