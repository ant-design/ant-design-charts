var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/config/eslint/legacy.ts
var import_fabric = __toESM(require("./rules/fabric"));
var import_setup = require("./setup");
module.exports = {
  extends: ["prettier", "plugin:react/recommended"],
  parser: require.resolve("@babel/eslint-parser"),
  plugins: ["react", "react-hooks"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  rules: import_fabric.default,
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      parser: require.resolve("@typescript-eslint/parser"),
      rules: import_fabric.typescript,
      extends: ["prettier", "plugin:@typescript-eslint/recommended"]
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
      presets: [require.resolve("@umijs/babel-preset-umi")]
    },
    requireConfigFile: false,
    warnOnUnsupportedTypeScriptVersion: false
  }
};
