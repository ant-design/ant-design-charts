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

// src/cli/fork.ts
var fork_exports = {};
__export(fork_exports, {
  default: () => start
});
module.exports = __toCommonJS(fork_exports);
var import_child_process = require("child_process");
var import_utils = require("@umijs/utils");
var usedPorts = [];
function start({ scriptPath }) {
  const execArgv = process.execArgv.slice(0);
  const inspectArgvIndex = execArgv.findIndex(
    (argv) => argv.includes("--inspect-brk")
  );
  if (inspectArgvIndex > -1) {
    const inspectArgv = execArgv[inspectArgvIndex];
    execArgv.splice(
      inspectArgvIndex,
      1,
      inspectArgv.replace(/--inspect-brk=(.*)/, (_match, s1) => {
        let port;
        try {
          port = parseInt(s1) + 1;
        } catch (e) {
          port = 9230;
        }
        if (usedPorts.includes(port)) {
          port += 1;
        }
        usedPorts.push(port);
        return `--inspect-brk=${port}`;
      })
    );
  }
  const child = (0, import_child_process.fork)(scriptPath, process.argv.slice(2), { execArgv });
  child.on("message", (data) => {
    var _a;
    const { type, payload } = data || {};
    if (type === "RESTART") {
      child.kill();
      if (payload == null ? void 0 : payload.port) {
        utilPortValid(payload.port, 20, () => {
          process.env.PORT = payload.port;
          start({ scriptPath });
        });
      } else {
        start({ scriptPath });
      }
    }
    (_a = process.send) == null ? void 0 : _a.call(process, data);
  });
  return child;
}
function utilPortValid(port, totalTry, callback) {
  import_utils.portfinder.getPort({ startPort: port }, (err, findPort) => {
    if (err)
      callback(err);
    else {
      if (findPort === port) {
        callback();
      } else {
        if (totalTry > 0) {
          setTimeout(() => {
            utilPortValid(port, totalTry - 1, callback);
          }, 100);
        } else {
          callback(new Error(`Port ${port} is occupied`));
        }
      }
    }
  });
}
