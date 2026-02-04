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

// src/config/transformer/alias.ts
var alias_exports = {};
__export(alias_exports, {
  default: () => alias_default
});
module.exports = __toCommonJS(alias_exports);
function hoistAlias(alias2) {
  function getFinalReplacement(oAlias, replacement, index) {
    const newAlias = oAlias.slice();
    newAlias.splice(index, 1);
    for (let i = 0; i < newAlias.length; i++) {
      if (newAlias[i].find.test(replacement)) {
        replacement = replacement.replace(
          newAlias[i].find,
          newAlias[i].replacement
        );
        return getFinalReplacement(newAlias, replacement, i);
      }
    }
    return replacement;
  }
  alias2.forEach((rule, index, alias3) => {
    rule.replacement = getFinalReplacement(alias3, rule.replacement, index);
  });
  return alias2;
}
var alias_default = function alias(userConfig) {
  const config = {
    resolve: {
      alias: [
        // to support less-loader ~ for local deps, refer: https://github.com/vitejs/vite/issues/2185
        { find: /^~/, replacement: "" }
      ]
    }
  };
  if (userConfig.alias) {
    const userAlias = Object.entries(userConfig.alias).map(
      ([name, target]) => ({
        // supports webpack suffix $ and less-loader prefix ~
        // example:
        //   - dep => ^~?dep(?=\/|$)
        //   - dep$ => ^~?dep$
        find: new RegExp(`^~?${name.replace(/(?<!\$)$/, "(?=/|$)")}`),
        replacement: target
      })
    );
    const wholeAlias = config.resolve.alias;
    wholeAlias.unshift(...userAlias);
    config.resolve.alias = hoistAlias(wholeAlias);
  }
  return config;
};
