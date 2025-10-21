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

// src/features/apiRoute/request.ts
var request_exports = {};
__export(request_exports, {
  default: () => request_default,
  parseMultipart: () => parseMultipart,
  parseUrlEncoded: () => parseUrlEncoded
});
module.exports = __toCommonJS(request_exports);
var import_utils = require("./utils");
var UmiApiRequest = class {
  constructor(req, apiRoutes) {
    this._params = {};
    this._body = null;
    this._req = req;
    const m = (0, import_utils.matchApiRoute)(apiRoutes, this.pathName || "");
    if (m)
      this._params = m.params;
  }
  get params() {
    return this._params;
  }
  get body() {
    return this._body;
  }
  get headers() {
    return this._req.headers;
  }
  get method() {
    return this._req.method;
  }
  get query() {
    var _a, _b;
    return ((_b = (_a = this._req.url) == null ? void 0 : _a.split("?")[1]) == null ? void 0 : _b.split("&").reduce((acc, cur) => {
      const [key, value] = cur.split("=");
      const k = acc[key];
      if (k) {
        if (k instanceof Array) {
          k.push(value);
        } else {
          acc[key] = [k, value];
        }
      } else {
        acc[key] = value;
      }
      return acc;
    }, {})) || {};
  }
  get cookies() {
    var _a;
    return (_a = this._req.headers.cookie) == null ? void 0 : _a.split(";").reduce((acc, cur) => {
      const [key, value] = cur.split("=");
      acc[key.trim()] = value;
      return acc;
    }, {});
  }
  get url() {
    return this._req.url;
  }
  get pathName() {
    var _a;
    return (_a = this._req.url) == null ? void 0 : _a.split("?")[0];
  }
  readBody() {
    if (this._req.headers["content-length"] === "0") {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      let body = [];
      this._req.on("data", (chunk) => {
        body.push(chunk);
      });
      this._req.on("end", () => {
        var _a, _b;
        const bodyBuffer = Buffer.concat(body);
        switch ((_a = this._req.headers["content-type"]) == null ? void 0 : _a.split(";")[0]) {
          case "application/json":
            try {
              this._body = JSON.parse(bodyBuffer.toString());
            } catch (e) {
              this._body = body;
            }
            break;
          case "multipart/form-data":
            const boundary = (_b = this.headers["content-type"]) == null ? void 0 : _b.split("boundary=")[1];
            if (!boundary) {
              this._body = body;
              break;
            }
            this._body = parseMultipart(bodyBuffer, boundary);
            break;
          case "application/x-www-form-urlencoded":
            this._body = parseUrlEncoded(bodyBuffer.toString());
            break;
          default:
            this._body = body;
            break;
        }
        resolve();
      });
      this._req.on("error", reject);
    });
  }
};
function parseMultipart(body, boundary) {
  const hexBoundary = Buffer.from(`--${boundary}`, "utf-8").toString("hex");
  return body.toString("hex").split(hexBoundary).reduce((acc, cur) => {
    var _a, _b;
    const [hexMeta, hexValue] = cur.split(
      Buffer.from("\r\n\r\n").toString("hex")
    );
    const meta = Buffer.from(hexMeta, "hex").toString("utf-8");
    const name = (_a = meta.split('name="')[1]) == null ? void 0 : _a.split('"')[0];
    if (!name)
      return acc;
    const fileName = (_b = meta.split('filename="')[1]) == null ? void 0 : _b.split('"')[0];
    if (fileName) {
      const fileBufferBeforeTrim = Buffer.from(hexValue, "hex");
      const fileBuffer = fileBufferBeforeTrim.slice(
        0,
        fileBufferBeforeTrim.byteLength - 2
      );
      const contentType = meta.split("Content-Type: ")[1];
      acc[name] = {
        fileName,
        data: fileBuffer,
        contentType
      };
      return acc;
    }
    const valueBufferBeforeTrim = Buffer.from(hexValue, "hex");
    const valueBuffer = valueBufferBeforeTrim.slice(
      0,
      valueBufferBeforeTrim.byteLength - 2
    );
    acc[name] = valueBuffer.toString("utf-8");
    return acc;
  }, {});
}
function parseUrlEncoded(body) {
  return body.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
}
var request_default = UmiApiRequest;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  parseMultipart,
  parseUrlEncoded
});
