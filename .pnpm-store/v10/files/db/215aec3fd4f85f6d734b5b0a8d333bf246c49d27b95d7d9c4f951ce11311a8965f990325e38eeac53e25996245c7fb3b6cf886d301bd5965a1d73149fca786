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

// src/features/apiRoute/response.ts
var response_exports = {};
__export(response_exports, {
  default: () => response_default
});
module.exports = __toCommonJS(response_exports);
var UmiApiResponse = class {
  constructor(res) {
    this._res = res;
  }
  status(statusCode) {
    this._res.statusCode = statusCode;
    return this;
  }
  header(key, value) {
    this._res.setHeader(key, value);
    return this;
  }
  setCookie(key, value) {
    this._res.setHeader("Set-Cookie", `${key}=${value}; path=/`);
    return this;
  }
  end(data) {
    this._res.end(data);
    return this;
  }
  text(data) {
    this._res.setHeader("Content-Type", "text/plain; charset=utf-8");
    this._res.end(data);
    return this;
  }
  html(data) {
    this._res.setHeader("Content-Type", "text/html; charset=utf-8");
    this._res.end(data);
    return this;
  }
  json(data) {
    this._res.setHeader("Content-Type", "application/json");
    this._res.end(JSON.stringify(data));
    return this;
  }
};
var response_default = UmiApiResponse;
