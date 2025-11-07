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

// src/config/eslint/index.ts
var import_recommended = __toESM(require("./rules/recommended"));
var import_setup = require("./setup");
module.exports = {
  parser: require.resolve("@babel/eslint-parser"),
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true
  },
  rules: import_recommended.default,
  overrides: [
    {
      parser: require.resolve("@typescript-eslint/parser"),
      plugins: ["@typescript-eslint/eslint-plugin"],
      files: ["**/*.{ts,tsx}"],
      rules: import_recommended.typescript
    },
    {
      settings: {
        jest: {
          version: detectJestVersion()
        }
      },
      files: ["**/*.{test,spec,unit,e2e}.{ts,tsx,js,jsx}"],
      plugins: ["jest"],
      rules: import_recommended.jest
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
function detectJestVersion() {
  try {
    const pkg = require.resolve("jest/package.json", {
      paths: [process.cwd()]
    });
    return require(pkg).version;
  } catch {
    return 29;
  }
}
