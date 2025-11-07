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

// src/features/overrides/compileLess.testScript.ts
var import_fs = __toESM(require("fs"));
var import_path = require("path");
var import_compileLess = require("./compileLess");
var fixturesDir = (0, import_path.join)(__dirname, "../../../fixtures");
var run = async () => {
  const filePath = (0, import_path.join)(fixturesDir, "overrides/less/index.less");
  const targetPath = (0, import_path.join)(fixturesDir, "overrides/less/output/index.css");
  const modifyVars = {
    "primary-color": "#1DA57A"
  };
  const alias = {
    barbar: (0, import_path.join)(filePath, "../node_modules/bar")
  };
  const content = import_fs.default.readFileSync(filePath, "utf-8");
  const result = await (0, import_compileLess.compileLess)({
    lessContent: content,
    filePath,
    modifyVars,
    alias,
    targetPath
  });
  const expectContained = `
.bar {
  color: red;
}
.foo {
  color: red;
}
.img {
  background: url('../assets/img.png');
}
.a {
  aaa: green;
  bbb: #1DA57A;
}
.img {
  border-image: url('../assets/img.png');
}
`.trim();
  if (!result.includes(expectContained)) {
    throw new Error(
      `result not contains the expect content, result: ${result}`
    );
  }
};
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
