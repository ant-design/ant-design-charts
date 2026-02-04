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

// src/features/mock/mock.ts
var mock_exports = {};
__export(mock_exports, {
  default: () => mock_default
});
module.exports = __toCommonJS(mock_exports);
var import_utils = require("@umijs/utils");
var import_path = __toESM(require("path"));
var import_watch = require("../../commands/dev/watch");
var import_createMockMiddleware = require("./createMockMiddleware");
var import_getMockData = require("./getMockData");
function mock_default(api) {
  api.describe({
    key: "mock",
    config: {
      schema({ zod }) {
        return zod.object({
          exclude: zod.array(zod.string()).describe("exclude files not parse mock"),
          include: zod.array(zod.string())
        }).deepPartial();
      }
    },
    enableBy() {
      if (api.name !== "dev") {
        return false;
      }
      return process.env.MOCK !== "none";
    }
  });
  const context = {
    mockData: null
  };
  function updateMockData(onSuccess) {
    try {
      context.mockData = (0, import_getMockData.getMockData)({
        cwd: api.cwd,
        mockConfig: api.config.mock || {}
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (e) {
      import_utils.logger.error(e);
    }
  }
  api.onStart(() => {
    const mockConfig = api.config.mock || {};
    const { include = [] } = mockConfig;
    (0, import_watch.watch)({
      path: ["mock", ...include].map(
        (pattern) => import_path.default.resolve(api.cwd, pattern)
      ),
      addToUnWatches: true,
      onChange: () => {
        updateMockData(() => {
          import_utils.logger.info("Mock file update successful");
        });
      }
    });
  });
  api.addBeforeMiddlewares(async () => {
    updateMockData();
    return [
      (0, import_createMockMiddleware.createMockMiddleware)({
        context
      })
    ];
  });
}
