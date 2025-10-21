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

// src/ssr.ts
var ssr_exports = {};
__export(ssr_exports, {
  createAppRootElement: () => createAppRootElement,
  createMarkupGenerator: () => createMarkupGenerator,
  createUmiHandler: () => createUmiHandler,
  createUmiServerLoader: () => createUmiServerLoader,
  default: () => createRequestHandler
});
module.exports = __toCommonJS(ssr_exports);
var import_semver = __toESM(require("@umijs/utils/compiled/semver"));
var import_react = __toESM(require("react"));
var ReactDomServer = __toESM(require("react-dom/server"));
var import_react_router_dom = require("react-router-dom");
var import_stream = require("stream");
var MetaLoaderResultKeys = /* @__PURE__ */ ((MetaLoaderResultKeys2) => {
  MetaLoaderResultKeys2["Title"] = "title";
  MetaLoaderResultKeys2["Description"] = "description";
  MetaLoaderResultKeys2["Keywords"] = "keywords";
  MetaLoaderResultKeys2["Lang"] = "lang";
  MetaLoaderResultKeys2["Metas"] = "metas";
  return MetaLoaderResultKeys2;
})(MetaLoaderResultKeys || {});
var createJSXProvider = (Provider) => {
  const serverInsertedHTMLCallbacks = /* @__PURE__ */ new Set();
  const JSXProvider = (props) => {
    const addInsertedHtml = import_react.default.useCallback(
      (handler) => {
        serverInsertedHTMLCallbacks.add(handler);
      },
      []
    );
    return import_react.default.createElement(Provider, {
      children: props.children,
      value: addInsertedHtml
    });
  };
  return [JSXProvider, serverInsertedHTMLCallbacks];
};
function createJSXGenerator(opts) {
  return async (url, serverLoaderArgs) => {
    const {
      routesWithServerLoader,
      pluginManager,
      getRoutes,
      createHistory,
      sourceDir,
      basename
    } = opts;
    createHistory({ type: "memory", initialEntries: [url], initialIndex: 1 });
    const { routes, routeComponents } = await getRoutes(pluginManager);
    pluginManager.applyPlugins({
      key: "patchRoutes",
      type: "event",
      args: {
        routes,
        routeComponents
      }
    });
    const matches = matchRoutesForSSR(url, routes, basename);
    if (matches.length === 0) {
      return;
    }
    const loaderData = {};
    await Promise.all(
      matches.filter((id) => routes[id].hasServerLoader).map(
        (id) => new Promise(async (resolve) => {
          loaderData[id] = await executeLoader({
            routeKey: id,
            routesWithServerLoader,
            serverLoaderArgs
          });
          if (routes[id].hasMetadataLoader) {
            const metadataLoaderData = await executeMetadataLoader({
              routesWithServerLoader,
              routeKey: id,
              serverLoaderArgs,
              serverLoaderData: loaderData[id]
            });
            metadataLoaderData && Object.entries(metadataLoaderData).forEach(([k, v]) => {
              if (Array.isArray(v)) {
                opts.htmlPageOpts[k] = (opts.htmlPageOpts[k] || []).concat(v);
              } else {
                opts.htmlPageOpts[k] = v;
              }
            });
          }
          resolve();
        })
      )
    );
    const manifest = typeof opts.manifest === "function" ? opts.manifest(sourceDir) : opts.manifest;
    const context = {
      routes,
      routeComponents,
      pluginManager,
      location: url,
      manifest,
      loaderData,
      htmlPageOpts: opts.htmlPageOpts,
      __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: opts.__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      mountElementId: opts.mountElementId,
      basename,
      useStream: opts.useStream
    };
    const element = await opts.getClientRootComponent(
      context
    );
    return {
      element,
      manifest
    };
  };
}
var SERVER_INSERTED_HTML = "umi-server-inserted-html";
var getGenerateStaticHTML = (serverInsertedHTMLCallbacks, opts) => {
  const children = import_react.default.createElement(import_react.default.Fragment, {
    children: Array.from(serverInsertedHTMLCallbacks || []).map(
      (callback) => callback()
    )
  });
  return ReactDomServer.renderToString(
    (opts == null ? void 0 : opts.wrapper) ? import_react.default.createElement(
      "div",
      { id: SERVER_INSERTED_HTML, hidden: true },
      children
    ) : children
  ) || "";
};
function createMarkupGenerator(opts) {
  const jsxGeneratorDeferrer = createJSXGenerator(opts);
  return async (url) => {
    const jsx = await jsxGeneratorDeferrer(url);
    if (jsx) {
      return new Promise(async (resolve, reject) => {
        const [JSXProvider, serverInsertedHTMLCallbacks] = createJSXProvider(
          opts.ServerInsertedHTMLContext.Provider
        );
        let chunks = [];
        const writable = new import_stream.Writable();
        writable._write = (chunk, _encoding, next) => {
          chunks.push(Buffer.from(chunk));
          next();
        };
        writable.on("finish", async () => {
          let html = Buffer.concat(chunks).toString("utf8");
          const serverHTML = getGenerateStaticHTML(serverInsertedHTMLCallbacks);
          if (serverHTML) {
            html = html.replace(/<\/head>/, `${serverHTML}</head>`);
          }
          if (opts.helmetContext) {
            html = html.replace(
              /(<\/head>)/,
              [
                opts.helmetContext.helmet.title.toString(),
                opts.helmetContext.helmet.priority.toString(),
                opts.helmetContext.helmet.meta.toString(),
                opts.helmetContext.helmet.link.toString(),
                opts.helmetContext.helmet.script.toString(),
                "$1"
              ].filter(Boolean).join("\n")
            );
          }
          resolve(html);
        });
        const stream = ReactDomServer.renderToPipeableStream(
          import_react.default.createElement(JSXProvider, { children: jsx.element }),
          {
            onShellReady() {
              stream.pipe(writable);
            },
            bootstrapScripts: [jsx.manifest.assets["umi.js"] || "/umi.js"],
            onError: reject
          }
        );
      });
    }
    return "";
  };
}
var normalizeRequest = (...args) => {
  var _a, _b;
  let request;
  let serverLoaderRequest;
  let serverLoaderArgs;
  if (process.env.SSR_BUILD_TARGET === "worker") {
    const [ev] = args;
    const { pathname, searchParams } = new URL(ev.request.url);
    request = {
      url: ev.request.url,
      pathname,
      headers: ev.request.headers,
      query: {
        route: searchParams.get("route"),
        url: searchParams.get("url")
      }
    };
  } else {
    const [req] = args;
    request = {
      url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
      pathname: req.url,
      headers: req.headers,
      query: {
        route: (_a = req.query.route) == null ? void 0 : _a.toString(),
        url: (_b = req.query.url) == null ? void 0 : _b.toString()
      }
    };
  }
  if (request.pathname.startsWith("/__serverLoader") && request.query.route && request.query.url) {
    serverLoaderRequest = new Request(request.query.url, {
      headers: request.headers
    });
    serverLoaderArgs = {
      request: serverLoaderRequest
    };
  }
  return {
    request,
    serverLoaderArgs
  };
};
function createRequestHandler(opts) {
  const jsxGeneratorDeferrer = createJSXGenerator(opts);
  const normalizeHandlerArgs = (...args) => {
    let ret;
    const { request } = normalizeRequest(...args);
    const replaceServerHTMLScript = `<script>!function(){var e=document.getElementById("${SERVER_INSERTED_HTML}");e&&(Array.from(e.children).forEach(e=>{document.head.appendChild(e)}),e.remove())}();</script>`;
    if (process.env.SSR_BUILD_TARGET === "worker") {
      const [ev, workerOpts] = args;
      let asyncRespondWith;
      ev.respondWith(new Promise((r) => asyncRespondWith = r));
      ret = {
        req: request,
        async sendServerLoader(data) {
          let res = new Response(JSON.stringify(data), {
            headers: {
              "content-type": "application/json; charset=utf-8"
            },
            status: 200
          });
          if (workerOpts == null ? void 0 : workerOpts.modifyResponse) {
            res = await workerOpts.modifyResponse(res);
          }
          asyncRespondWith(res);
        },
        async sendPage(jsx) {
          const [JSXProvider, serverInsertedHTMLCallbacks] = createJSXProvider(
            opts.ServerInsertedHTMLContext.Provider
          );
          const stream = await ReactDomServer.renderToReadableStream(
            import_react.default.createElement(JSXProvider, void 0, jsx.element),
            {
              // why not bootstrap umi.js
              // ER will auto inject
              // bootstrapScripts: [jsx.manifest.assets['umi.js'] || '/umi.js'],
              onError(x) {
                console.error(x);
              }
            }
          );
          const transformStream = new TransformStream({
            flush(controller) {
              if (serverInsertedHTMLCallbacks.size) {
                const serverHTML = getGenerateStaticHTML(
                  serverInsertedHTMLCallbacks,
                  { wrapper: true }
                );
                controller.enqueue(serverHTML);
                controller.enqueue(replaceServerHTMLScript);
              }
            }
          });
          let res = new Response(stream.pipeThrough(transformStream), {
            headers: {
              "content-type": "text/html; charset=utf-8"
            },
            status: 200
          });
          if (workerOpts == null ? void 0 : workerOpts.modifyResponse) {
            res = await workerOpts.modifyResponse(res);
          }
          asyncRespondWith(res);
        },
        otherwise() {
          throw new Error("no page resource");
        }
      };
    } else {
      const [_, res, next] = args;
      ret = {
        req: request,
        sendServerLoader(data) {
          res.status(200).json(data);
        },
        async sendPage(jsx) {
          const [JSXProvider, serverInsertedHTMLCallbacks] = createJSXProvider(
            opts.ServerInsertedHTMLContext.Provider
          );
          const writable = new import_stream.Writable();
          res.type("html");
          writable._write = (chunk, _encoding, cb) => {
            res.write(chunk);
            cb();
          };
          writable.on("finish", async () => {
            if (serverInsertedHTMLCallbacks.size) {
              res.write(
                getGenerateStaticHTML(serverInsertedHTMLCallbacks, {
                  wrapper: true
                })
              );
              res.write(replaceServerHTMLScript);
            }
            res.end();
          });
          const canUseCrossOriginInBootstrap = import_semver.default.gte(
            opts.reactVersion,
            "19.0.0-rc"
          );
          const umiPath = jsx.manifest.assets["umi.js"] || "/umi.js";
          const stream = ReactDomServer.renderToPipeableStream(
            import_react.default.createElement(JSXProvider, void 0, jsx.element),
            {
              // @ts-ignore
              bootstrapScripts: canUseCrossOriginInBootstrap ? [
                {
                  src: umiPath,
                  crossOrigin: "anonymous"
                }
              ] : [umiPath],
              onShellReady() {
                stream.pipe(writable);
              },
              onError(x) {
                console.error(x);
              }
            }
          );
        },
        otherwise: next
      };
    }
    return ret;
  };
  return async function unifiedRequestHandler(...args) {
    const { req, sendServerLoader, sendPage, otherwise } = normalizeHandlerArgs(
      ...args
    );
    if (req.pathname.startsWith("/__serverLoader") && req.query.route && req.query.url) {
      const { serverLoaderArgs } = normalizeRequest(...args);
      const data = await executeLoader({
        routeKey: req.query.route,
        routesWithServerLoader: opts.routesWithServerLoader,
        serverLoaderArgs
      });
      await sendServerLoader(data);
    } else {
      const render = opts.pluginManager.applyPlugins({
        key: "render",
        type: "compose",
        initialValue: () => jsxGeneratorDeferrer(req.pathname, {
          request: new Request(req.url, {
            headers: req.headers
          })
        })
      });
      const jsx = await render();
      if (jsx) {
        await sendPage(jsx);
      } else {
        await otherwise();
      }
    }
  };
}
function createUmiHandler(opts) {
  let isWarned = false;
  return async function(req, params) {
    if (!isWarned) {
      console.warn(
        "[umi] `renderRoot` is deprecated, please use `requestHandler` instead"
      );
      isWarned = true;
    }
    const jsxGeneratorDeferrer = createJSXGenerator({
      ...opts,
      ...params
    });
    const loaderArgs = {
      request: req
    };
    const jsx = await jsxGeneratorDeferrer(
      new URL(req.url).pathname,
      loaderArgs
    );
    if (!jsx) {
      throw new Error("no page resource");
    }
    return ReactDomServer.renderToNodeStream(jsx.element);
  };
}
function createUmiServerLoader(opts) {
  let isWarned = false;
  return async function(req) {
    if (!isWarned) {
      console.warn(
        "[umi] `serverLoader` is deprecated, please use `requestHandler` instead"
      );
      isWarned = true;
    }
    const query = Object.fromEntries(new URL(req.url).searchParams);
    const serverLoaderRequest = new Request(query.url, {
      headers: req.headers
    });
    return await executeLoader({
      routeKey: query.route,
      routesWithServerLoader: opts.routesWithServerLoader,
      serverLoaderArgs: { request: serverLoaderRequest }
    });
  };
}
function createAppRootElement(opts) {
  return async (...args) => {
    const jsxGeneratorDeferrer = createJSXGenerator(opts);
    const { request, serverLoaderArgs } = normalizeRequest(...args);
    const jsx = await jsxGeneratorDeferrer(request.pathname, serverLoaderArgs);
    return () => jsx == null ? void 0 : jsx.element;
  };
}
function matchRoutesForSSR(reqUrl, routesById, basename) {
  var _a;
  const _basename = (basename == null ? void 0 : basename.endsWith("/")) ? basename.slice(0, -1) : basename;
  return ((_a = (0, import_react_router_dom.matchRoutes)(createClientRoutes({ routesById }), reqUrl, _basename)) == null ? void 0 : _a.map(
    (route) => route.route.id
  )) || [];
}
function createClientRoutes(opts) {
  const { routesById, parentId } = opts;
  return Object.keys(routesById).filter((id) => routesById[id].parentId === parentId).map((id) => {
    const route = createClientRoute(routesById[id]);
    const children = createClientRoutes({
      routesById,
      parentId: route.id
    });
    if (children.length > 0) {
      route.children = children;
    }
    return route;
  });
}
function createClientRoute(route) {
  const { id, path, index } = route;
  return {
    id,
    path,
    index
  };
}
async function executeLoader(params) {
  const { routeKey, routesWithServerLoader, serverLoaderArgs } = params;
  const mod = await routesWithServerLoader[routeKey]();
  if (!mod.serverLoader || typeof mod.serverLoader !== "function") {
    return;
  }
  return mod.serverLoader(serverLoaderArgs);
}
async function executeMetadataLoader(params) {
  const { routesWithServerLoader, routeKey, serverLoaderData } = params;
  const mod = await routesWithServerLoader[routeKey]();
  if (!mod.serverLoader || typeof mod.serverLoader !== "function") {
    return;
  }
  const loaderDatas = mod.metadataLoader(
    serverLoaderData
  );
  const result = {};
  Object.values(MetaLoaderResultKeys).forEach((key) => {
    if (loaderDatas == null ? void 0 : loaderDatas[key])
      result[key] = loaderDatas[key];
  });
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAppRootElement,
  createMarkupGenerator,
  createUmiHandler,
  createUmiServerLoader
});
