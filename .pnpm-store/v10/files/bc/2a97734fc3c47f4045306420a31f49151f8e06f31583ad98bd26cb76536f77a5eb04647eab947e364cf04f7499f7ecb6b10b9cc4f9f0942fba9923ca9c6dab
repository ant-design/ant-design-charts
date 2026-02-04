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

// src/server.ts
var server_exports = {};
__export(server_exports, {
  createRequestHandler: () => createRequestHandler,
  getMarkup: () => getMarkup
});
module.exports = __toCommonJS(server_exports);
var import_react = __toESM(require("react"));
var import_server = __toESM(require("react-dom/server"));
var import_scripts = require("./scripts");
var import_styles = require("./styles");
async function getMarkup(opts) {
  let markup = import_server.default.renderToString(
    import_react.default.createElement("div", { id: opts.mountElementId || "root" })
  );
  function propsToString(opts2) {
    return Object.keys(opts2.props).filter((key) => {
      const isValidBoolean = opts2.props[key] !== false;
      return !(opts2.filters || []).includes(key) && isValidBoolean;
    }).map((key) => {
      const value = opts2.props[key];
      if (value === true) {
        return `${key}`;
      }
      return `${key}=${JSON.stringify(value)}`;
    }).join(" ");
  }
  function getScriptContent(script) {
    const attrs = propsToString({
      props: script,
      filters: ["src", "content"]
    });
    const isEsmScript = opts.esmScript && !("type" in script);
    return script.src ? `<script${isEsmScript ? ' type="module"' : ""} ${attrs} src="${script.src}"></script>` : `<script${isEsmScript ? ' type="module"' : ""} ${attrs}>${script.content}</script>`;
  }
  function getStyleContent(style) {
    const attrs = propsToString({
      props: style,
      filters: ["src", "content"]
    });
    return style.src ? `<link rel="stylesheet" ${attrs} href="${style.src}" />` : `<style ${attrs}>${style.content}</style>`;
  }
  function getTagContent(opts2) {
    const attrs = propsToString({
      props: opts2.attrs
    });
    return `<${opts2.tagName} ${attrs} />`;
  }
  function withDefaultMetas(metas2 = []) {
    const hasAttr = (key, value) => metas2.some((m) => {
      var _a;
      return value ? ((_a = m[key]) == null ? void 0 : _a.toLowerCase()) === value.toLowerCase() : m[key];
    });
    return [
      !hasAttr("charset") && { charset: "utf-8" },
      !hasAttr("name", "viewport") && {
        name: "viewport",
        content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      },
      !hasAttr("http-equiv", "X-UA-Compatible") && {
        "http-equiv": "X-UA-Compatible",
        content: "ie=edge"
      },
      ...metas2
    ].filter(Boolean);
  }
  const favicons = [];
  if (Array.isArray(opts.favicons)) {
    opts.favicons.forEach((e) => {
      favicons.push(`<link rel="shortcut icon" href="${e}">`);
    });
  }
  const title = opts.title ? `<title>${opts.title}</title>` : "";
  const metas = withDefaultMetas(opts.metas).map(
    (meta) => getTagContent({ attrs: meta, tagName: "meta" })
  );
  const links = (opts.links || []).map(
    (link) => getTagContent({ attrs: link, tagName: "link" })
  );
  const styles = (0, import_styles.normalizeStyles)(opts.styles || []).map(getStyleContent);
  const headScripts = (0, import_scripts.normalizeScripts)(opts.headScripts || []).map(
    getScriptContent
  );
  const scripts = (0, import_scripts.normalizeScripts)(opts.scripts || []).map(getScriptContent);
  markup = [
    `<!DOCTYPE html>
<html>
<head>`,
    metas.join("\n"),
    favicons.join("\n"),
    title,
    links.join("\n"),
    styles.join("\n"),
    headScripts.join("\n"),
    `</head>
<body>`,
    markup,
    scripts.join("\n"),
    `</body>
</html>`
  ].filter(Boolean).join("\n");
  if (opts.modifyHTML) {
    markup = await opts.modifyHTML(markup, { path: opts.path });
  }
  return markup;
}
function createRequestHandler(opts) {
  return async (req, res, next) => {
    var _a;
    if (opts.historyType === "browser" && opts.base !== "/" && req.path === "/" && process.env.DEV_SERVER_REDIRECT !== "none") {
      res.redirect(opts.base);
    } else if (((_a = req.headers.accept) == null ? void 0 : _a.includes("text/html")) || req.headers.accept === "*/*" || req.path === opts.base) {
      res.set("Content-Type", "text/html");
      const markup = await getMarkup({ ...opts, path: req.path });
      res.end(markup);
    } else {
      next();
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRequestHandler,
  getMarkup
});
