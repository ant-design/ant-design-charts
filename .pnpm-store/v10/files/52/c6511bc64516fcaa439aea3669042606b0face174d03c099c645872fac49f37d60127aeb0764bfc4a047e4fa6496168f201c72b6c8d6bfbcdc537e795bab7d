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

// src/plugin.ts
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_package = __toESM(require("../package.json"));
var import_terminal_link = __toESM(require("../compiled/terminal-link"));
var MAX_RESET_COUNT = 5;
var RECORD_FILE = "did-you-know.json";
var plugin_default = (api) => {
  const recordJSONPath = import_path.default.join(
    api.paths.absNodeModulesPath,
    ".cache",
    RECORD_FILE
  );
  let records = import_fs.default.existsSync(recordJSONPath) ? JSON.parse(import_fs.default.readFileSync(recordJSONPath, "utf-8")) : {};
  api.onStart(() => {
    const isUmi3 = !!api.utils;
    let logger = console;
    let chalk;
    let framework = "umi" /* umi */;
    let frameworkName = "Umi";
    let frameworkCliName = "umi";
    let majorVersion = "3";
    if (isUmi3) {
      logger = api.logger;
      chalk = api.utils.chalk;
    } else {
      try {
        logger = require("umi/plugin-utils").logger;
        chalk = require("umi/plugin-utils").chalk;
      } catch (error) {
        console.error("error");
      }
      frameworkName = api.appData.umi.name;
      framework = api.appData.umi.importSource;
      frameworkCliName = api.appData.umi.cliName;
      majorVersion = api.appData.umi.version.split(".")[0];
    }
    if (process.env.BIGFISH_INFO) {
      frameworkName = "Bigfish";
      framework = "@alipay/bigfish" /* bigfish */;
    }
    const item = getDidYouKnow(import_package.default.didYouKnow, framework, majorVersion);
    if (!item)
      return;
    const { text, url } = item;
    const info = [
      `[你知道吗？] `,
      text.replace(/%%frameworkName%%/g, frameworkName).replace(/%%frameworkCliName%%/g, frameworkCliName),
      url ? formatLink(url) : "。"
    ];
    logger.info(chalk.yellow(info.join("")));
    const cacheDir = import_path.default.join(api.paths.absNodeModulesPath, ".cache");
    if (!import_fs.default.existsSync(cacheDir)) {
      import_fs.default.mkdirSync(cacheDir, { recursive: true });
    }
    import_fs.default.writeFileSync(recordJSONPath, JSON.stringify(records), "utf-8");
  });
  function getDidYouKnow(items = [], framework, majorVersion) {
    const matched = items.filter((item) => {
      return (!item.framework || item.framework.includes(framework)) && (!item.majorVersion || majorVersion === `${item.majorVersion}`);
    });
    if (matched.length) {
      const available = matched.filter(({ text }) => {
        const record = records[encodeURI(text)];
        return !record || record.count < MAX_RESET_COUNT;
      });
      if (available.length === 1) {
        const tip = available[0];
        records = {
          [encodeURI(tip.text)]: {
            lastTime: Date.now(),
            count: 1
          }
        };
        return tip;
      }
      for (const tip of available) {
        const recordKey2 = encodeURI(tip.text);
        if (!records[recordKey2]) {
          records = {
            ...records,
            [recordKey2]: {
              count: 1,
              lastTime: Date.now()
            }
          };
          return tip;
        }
      }
      available.sort(
        (l, r) => records[encodeURI(l.text)].lastTime - records[encodeURI(r.text)].lastTime
      );
      const rIndex = Math.floor(Math.random() * (available.length - 1));
      const luckTip = available[rIndex];
      const recordKey = encodeURI(luckTip.text);
      records[recordKey] = {
        lastTime: Date.now(),
        count: records[recordKey].count + 1
      };
      return luckTip;
    }
    return null;
  }
};
function formatLink(url) {
  if (import_terminal_link.default.isSupported) {
    return `：${(0, import_terminal_link.default)("点我查看", url)}`;
  } else {
    return `，详见 ${url}`;
  }
}
