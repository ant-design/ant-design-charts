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

// src/features/mock/getMockData.ts
var getMockData_exports = {};
__export(getMockData_exports, {
  getMockData: () => getMockData
});
module.exports = __toCommonJS(getMockData_exports);
var import_esbuild = __toESM(require("@umijs/bundler-utils/compiled/esbuild"));
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_path = require("path");
var import_constants = require("./constants");
function getMockData(opts) {
  import_utils.register.register({
    implementor: import_esbuild.default
  });
  import_utils.register.clearFiles();
  function normalizeMockFile(file) {
    const cwd = opts.cwd.endsWith("/") ? opts.cwd : `${opts.cwd}/`;
    return import_utils.chalk.yellow(file.replace(cwd, ""));
  }
  const ret = [import_constants.MOCK_FILE_GLOB, ...opts.mockConfig.include || []].reduce((memo, pattern) => {
    memo.push(
      ...import_utils.glob.sync(pattern, {
        cwd: opts.cwd,
        ignore: ["**/*.d.ts", ...opts.mockConfig.exclude || []]
      })
    );
    return memo;
  }, []).reduce((memo, file) => {
    const mockFile = (0, import_path.join)(opts.cwd, file);
    let m;
    try {
      delete require.cache[mockFile];
      m = require(mockFile);
    } catch (e) {
      throw new Error(
        `Mock file ${mockFile} parse failed.
${e.message}`,
        { cause: e }
      );
    }
    const obj = (m == null ? void 0 : m.default) || m || {};
    for (const key of Object.keys(obj)) {
      const mock = getMock({ key, obj });
      mock.file = mockFile;
      const id = `${mock.method} ${mock.path}`;
      (0, import_assert.default)(
        import_utils.lodash.isArray(mock.handler) || import_utils.lodash.isPlainObject(mock.handler) || typeof mock.handler === "function",
        `Mock handler must be function or array or object, but got ${typeof mock.handler} for ${mock.method} in ${mock.file}`
      );
      if (memo[id]) {
        import_utils.logger.warn(
          `${id} is duplicated in ${normalizeMockFile(
            mockFile
          )} and ${normalizeMockFile(memo[id].file)}`
        );
      }
      memo[id] = mock;
    }
    return memo;
  }, {});
  for (const file of import_utils.register.getFiles()) {
    delete require.cache[file];
  }
  import_utils.register.restore();
  return ret;
}
function getMock(opts) {
  const { method, path } = parseKey(opts.key);
  const handler = opts.obj[opts.key];
  return { method, path, handler };
}
function parseKey(key) {
  const spliced = key.split(/\s+/);
  const len = spliced.length;
  if (len === 1) {
    return { method: import_constants.DEFAULT_METHOD, path: key };
  } else {
    const [method, path] = spliced;
    const upperCaseMethod = method.toUpperCase();
    (0, import_assert.default)(
      import_constants.VALID_METHODS.includes(upperCaseMethod),
      `method ${method} is not supported`
    );
    (0, import_assert.default)(path, `${key}, path is undefined`);
    return { method: upperCaseMethod, path };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getMockData
});
