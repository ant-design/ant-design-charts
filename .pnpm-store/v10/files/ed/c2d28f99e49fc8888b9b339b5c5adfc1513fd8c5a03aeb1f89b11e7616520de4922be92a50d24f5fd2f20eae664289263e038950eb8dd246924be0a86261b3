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

// src/features/mock/createMockMiddleware.ts
var createMockMiddleware_exports = {};
__export(createMockMiddleware_exports, {
  createMockMiddleware: () => createMockMiddleware
});
module.exports = __toCommonJS(createMockMiddleware_exports);
var import_path_to_regexp = __toESM(require("path-to-regexp"));
var import_body_parser = __toESM(require("../../../compiled/body-parser"));
var import_multer = __toESM(require("../../../compiled/multer"));
function createMockMiddleware(opts) {
  return (req, res, next) => {
    const method = req.method.toUpperCase();
    for (const key of Object.keys(opts.context.mockData)) {
      const mock = opts.context.mockData[key];
      if (mock.method !== method)
        continue;
      const { keys, re } = getPathReAndKeys(mock.path);
      const m = re.exec(req.path);
      if (m) {
        if (typeof mock.handler === "function") {
          const params = {};
          for (let i = 1; i < m.length; i += 1) {
            const key2 = keys[i - 1];
            const prop = key2.name;
            const val = decodeParam(m[i]);
            if (val !== void 0) {
              params[prop] = val;
            }
          }
          req.params = params;
          if (method === "GET") {
            mock.handler(req, res, next);
          } else {
            const jsonOpts = { limit: "5mb", strict: false };
            const urlEncodedOpts = { limit: "5mb", extended: true };
            import_body_parser.default.json(jsonOpts)(req, res, () => {
              import_body_parser.default.urlencoded(urlEncodedOpts)(req, res, () => {
                (0, import_multer.default)().any()(req, res, () => {
                  mock.handler(req, res, next);
                });
              });
            });
          }
        } else {
          res.status(200).json(mock.handler);
        }
        return;
      }
    }
    next();
  };
}
function getPathReAndKeys(path) {
  const keys = [];
  const re = (0, import_path_to_regexp.default)(path, keys);
  return { re, keys };
}
function decodeParam(val) {
  if (typeof val !== "string" || val.length === 0) {
    return val;
  }
  try {
    return decodeURIComponent(val);
  } catch (err) {
    if (err instanceof URIError) {
      err.message = `Failed to decode param ' ${val} '`;
      err.status = 400;
      err.statusCode = 400;
    }
    throw err;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMockMiddleware
});
