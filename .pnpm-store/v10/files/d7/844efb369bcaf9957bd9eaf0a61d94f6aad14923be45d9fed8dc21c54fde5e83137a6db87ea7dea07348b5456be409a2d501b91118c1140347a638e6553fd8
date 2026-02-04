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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/test.ts
var test_exports = {};
__export(test_exports, {
  configUmiAlias: () => configUmiAlias,
  getAliasPathWithKey: () => getAliasPathWithKey,
  getUmiAlias: () => getUmiAlias
});
module.exports = __toCommonJS(test_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_service = require("./service/service");
__reExport(test_exports, require("@umijs/test"), module.exports);
function getAliasPathWithKey(alias, key) {
  if (alias[key]) {
    return getAliasPathWithKey(alias, alias[key]);
  }
  const aliasKeys = Object.keys(alias);
  const keyStartedWith = aliasKeys.find(
    (k) => !k.endsWith("$") && key.startsWith(`${k}/`)
  );
  if (keyStartedWith) {
    const realPath = alias[keyStartedWith];
    const newKey = realPath + key.slice(keyStartedWith.length);
    return getAliasPathWithKey(alias, newKey);
  } else {
    return key;
  }
}
var service;
async function getUmiAlias() {
  if (!service) {
    service = new import_service.Service();
    await service.run2({
      name: "setup",
      args: { quiet: true }
    });
  }
  return service.config.alias;
}
async function configUmiAlias(config) {
  (0, import_utils.setNoDeprecation)();
  config.moduleNameMapper || (config.moduleNameMapper = {});
  const alias = await getUmiAlias();
  for (const key of Object.keys(alias)) {
    const aliasPath = getAliasPathWithKey(alias, key);
    if (key.endsWith("$")) {
      config.moduleNameMapper[`^${key}`] = aliasPath;
    } else if ((0, import_fs.existsSync)(aliasPath) && (0, import_fs.statSync)(aliasPath).isDirectory()) {
      config.moduleNameMapper[`^${key}/(.*)$`] = `${aliasPath}/$1`;
      config.moduleNameMapper[`^${key}$`] = aliasPath;
    } else {
      config.moduleNameMapper[`^${key}$`] = aliasPath;
    }
  }
  return config;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  configUmiAlias,
  getAliasPathWithKey,
  getUmiAlias,
  ...require("@umijs/test")
});
