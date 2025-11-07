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

// src/config/transformer/css.ts
var css_exports = {};
__export(css_exports, {
  default: () => css_default,
  getBrowserlist: () => getBrowserlist
});
module.exports = __toCommonJS(css_exports);
function getBrowserlist(targets) {
  return typeof targets.browsers === "string" ? targets.browser : Object.keys(targets).map(
    (key) => `${key} >= ${targets[key] === true ? "0" : targets[key]}`
  );
}
var css_default = function css(userConfig) {
  var _a, _b, _c, _d;
  const config = {
    css: { postcss: {}, preprocessorOptions: {} }
  };
  config.css.postcss = {
    // handle postcssLoader
    ...((_a = userConfig.postcssLoader) == null ? void 0 : _a.postcssOptions) || {},
    plugins: [
      ...((_c = (_b = userConfig.postcssLoader) == null ? void 0 : _b.postcssOptions) == null ? void 0 : _c.plugins) || [],
      require("postcss-preset-env")({
        // handle targets for css
        browsers: getBrowserlist(userConfig.targets || {}),
        // handle autoprefixer
        autoprefixer: {
          flexbox: "no-2009",
          ...userConfig.autoprefixer || {}
        },
        stage: 3
      }),
      // handle extraPostCSSPlugins
      ...userConfig.extraPostCSSPlugins || []
    ]
  };
  config.css.preprocessorOptions.less = {
    javascriptEnabled: true,
    // handle lessLoader
    ...((_d = userConfig.lessLoader) == null ? void 0 : _d.lessOptions) || {},
    // handle theme
    modifyVars: userConfig.theme || {}
  };
  return config;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBrowserlist
});
