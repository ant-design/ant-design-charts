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

// src/commands/config/list.ts
var list_exports = {};
__export(list_exports, {
  list: () => list
});
module.exports = __toCommonJS(list_exports);
var import_utils = require("@umijs/utils");
function list(config, name) {
  const getValue = (value) => {
    if (typeof value !== "function") {
      return value;
    }
    return import_utils.chalk.yellow("The value data type does not support the view");
  };
  const print = (key) => {
    console.log(` - ${import_utils.chalk.blue(`[key: ${key}]`)}`, getValue(config[key]));
    console.log();
  };
  console.log();
  console.log(`  Configs:`);
  console.log();
  if (name) {
    if (!config[name]) {
      throw new Error(`key ${name} not found`);
    }
    print(name);
  } else {
    Object.keys(config).forEach((key) => {
      print(key);
    });
  }
  console.log();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  list
});
