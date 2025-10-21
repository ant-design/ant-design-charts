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

// src/utils/serializeAppData.ts
var serializeAppData_exports = {};
__export(serializeAppData_exports, {
  serializeAppData: () => serializeAppData
});
module.exports = __toCommonJS(serializeAppData_exports);
function serializeAppData(data) {
  const cache = /* @__PURE__ */ new WeakSet();
  return JSON.stringify(
    data,
    (_, value) => {
      if (value && typeof value === "object") {
        if (cache.has(value))
          return;
        cache.add(value);
      }
      return value;
    },
    2
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serializeAppData
});
