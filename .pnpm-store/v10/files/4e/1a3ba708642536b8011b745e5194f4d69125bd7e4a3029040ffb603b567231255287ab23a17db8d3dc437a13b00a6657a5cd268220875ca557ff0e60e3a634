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

// src/commands/deadcode.ts
var deadcode_exports = {};
__export(deadcode_exports, {
  default: () => deadcode_default
});
module.exports = __toCommonJS(deadcode_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var { getFileCreateInfo, getFileLastModifyInfo, isGitRepo } = import_utils.git;
var response = (res) => res.status === "fulfilled";
var outputUnusedFiles = async (unusedFiles, fileName, option) => {
  if (!(unusedFiles == null ? void 0 : unusedFiles.length)) {
    return;
  }
  const { gitInfo, cwd } = option;
  if (gitInfo) {
    const isInGit = await isGitRepo();
    if (!isInGit) {
      throw new Error(`当前目录 ${cwd} 不是 git 仓库，请确认！`);
    }
    const records = {};
    await Promise.allSettled(
      unusedFiles.map(async ({ filePath }) => {
        return Promise.allSettled([
          getFileCreateInfo(filePath),
          getFileLastModifyInfo(filePath)
        ]).then((infos) => {
          const [createInfo, modifyInfo] = infos;
          records[filePath] = {
            ...response(createInfo) ? createInfo.value : void 0,
            ...response(modifyInfo) ? modifyInfo.value : void 0
          };
        });
      })
    );
    import_utils.fsExtra.writeFileSync(fileName, JSON.stringify(records), "utf8");
  } else {
    import_utils.fsExtra.writeFileSync(
      fileName,
      `[
        ${unusedFiles.reduce((res, { filePath }, index) => {
        return `${res}"${filePath}" ${index !== unusedFiles.length - 1 ? "," : ""}`;
      }, "")}
      ]`,
      "utf8"
    );
  }
};
var deadcode_default = (api) => {
  api.registerCommand({
    name: "deadcode",
    description: "check dead code",
    async fn() {
      var _a, _b;
      const pkg = api.pkg;
      const userDeps = {
        ...pkg == null ? void 0 : pkg.dependencies,
        ...pkg == null ? void 0 : pkg.devDependencies
      };
      const MADGE_NAME = "madge";
      const MADGE_VERSION = "6.0.0";
      const isInstalled = Object.keys(userDeps).includes(MADGE_NAME);
      if (!isInstalled) {
        pkg.devDependencies || (pkg.devDependencies = {});
        pkg.devDependencies[MADGE_NAME] = MADGE_VERSION;
        import_utils.fsExtra.writeFileSync(
          api.pkgPath,
          `${JSON.stringify(pkg, null, 2)}
`,
          "utf-8"
        );
        import_utils.logger.info(
          `Installing ${import_utils.chalk.blue(MADGE_NAME)} (required by deadcode) ...`
        );
        (0, import_utils.installWithNpmClient)({
          cwd: api.cwd,
          npmClient: api.appData.npmClient
        });
      }
      import_utils.rimraf.sync(api.paths.absTmpPath);
      await api.applyPlugins({
        key: "onGenerateFiles",
        args: {
          files: null,
          isFirstTime: true
        }
      });
      import_utils.logger.info("begin check deadCode");
      const cwd = api.cwd;
      const tsconfig = await import_utils.tsconfigPaths.loadConfig(cwd);
      const args = api.args;
      const { out, gitInfo } = args;
      const exclude = [/node_modules/, /\.d\.ts$/, /\.umi/];
      const isExclude = (path) => {
        return exclude.some((reg) => reg.test(path));
      };
      const userAlias = api.config.alias;
      const parsedAlias = import_utils.aliasUtils.parseCircleAlias({
        alias: userAlias
      });
      const filteredAlias = Object.keys(parsedAlias).reduce(
        (acc, key) => {
          var _a2, _b2;
          const value = parsedAlias[key];
          if (isExclude(value)) {
            return acc;
          }
          if ((_a2 = tsconfig.paths) == null ? void 0 : _a2[key]) {
            return acc;
          }
          const tsconfigValue = [(0, import_path.join)((0, import_path.relative)(cwd, value), "/*")];
          const tsconfigKey = `${key}/*`;
          if ((_b2 = tsconfig.paths) == null ? void 0 : _b2[tsconfigKey]) {
            return acc;
          }
          acc[tsconfigKey] = tsconfigValue;
          return acc;
        },
        {}
      );
      if (!api.appData.hasSrcDir) {
        throw new Error(`Only supports projects containing "src" folders.`);
      }
      const devTmpDir = (0, import_path.join)(api.paths.absSrcPath, ".umi");
      const entryFile = (0, import_path.join)(devTmpDir, "umi.ts");
      const exportsFile = (0, import_path.join)(devTmpDir, "exports.ts");
      const madgePkg = (0, import_path.dirname)(
        import_utils.resolve.sync(`${MADGE_NAME}/package.json`, {
          basedir: cwd
        })
      );
      const madge = require(madgePkg);
      const res = await madge(entryFile, {
        tsConfig: {
          compilerOptions: {
            baseUrl: tsconfig.baseUrl,
            paths: {
              ...filteredAlias,
              ...tsconfig.paths,
              umi: [exportsFile],
              "@umijs/max": [exportsFile],
              // 适配 bigfish
              ...((_b = (_a = api.appData) == null ? void 0 : _a.umi) == null ? void 0 : _b.importSource) ? {
                [api.appData.umi.importSource]: [exportsFile]
              } : {}
            },
            target: "esnext",
            module: "esnext",
            moduleResolution: "node",
            importHelpers: true,
            jsx: "react-jsx",
            esModuleInterop: true,
            strict: true,
            resolveJsonModule: true,
            allowSyntheticDefaultImports: true
          }
        },
        fileExtensions: ["ts", "tsx", "js", "jsx"],
        excludeRegExp: exclude,
        baseDir: cwd
      });
      const treeMap = res.tree;
      const dependenceMap = Object.keys(treeMap).reduce(
        (acc, key) => {
          const path = (0, import_utils.winPath)((0, import_path.join)(api.paths.cwd, key));
          acc[path] = true;
          return acc;
        },
        {}
      );
      const unusedFiles = (0, import_utils.readDirFiles)({
        dir: api.paths.absSrcPath,
        exclude
      }).filter(({ filePath }) => !dependenceMap[filePath]);
      if (!unusedFiles.length) {
        console.log(`🎉 ${import_utils.chalk.green("Good job, no unusedFiles.")}`);
        return;
      }
      import_utils.logger.warn(`🚨 ${import_utils.chalk.red("Unused Files found:")}`);
      unusedFiles.forEach((fileItem) => {
        import_utils.logger.warn(
          ` · ${import_utils.chalk.yellow(fileItem.filePath, import_utils.chalk.gray(" -> "))}`
        );
      });
      if (out) {
        const recordJson = `DeadCodeList-${Date.now()}.json`;
        const recordJsonPath = (0, import_utils.winPath)(
          (0, import_path.join)(cwd, typeof out === "string" ? out : recordJson)
        );
        if (gitInfo)
          import_utils.logger.wait("generating file...");
        await outputUnusedFiles(unusedFiles, recordJsonPath, {
          gitInfo,
          cwd
        });
        import_utils.logger.warn(
          `👀 ${unusedFiles.length} unused files, write content to file ${import_utils.chalk.cyan(recordJsonPath)}`
        );
      } else {
        import_utils.logger.warn(`${unusedFiles.length} unused files`);
      }
      import_utils.logger.info(
        `check dead code end, please be careful if you want to remove them (¬º-°)¬`
      );
    }
  });
};
