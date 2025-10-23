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

// src/features/terminal/terminal.ts
var terminal_exports = {};
__export(terminal_exports, {
  default: () => terminal_default
});
module.exports = __toCommonJS(terminal_exports);
var import_utils = require("@umijs/utils");
var terminal_default = (api) => {
  api.describe({
    key: "terminal",
    config: {
      schema({ zod }) {
        return zod.object({});
      }
    }
  });
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: "core/terminal.ts",
      noPluginDir: true,
      content: `
let count = 0;
let groupLevel = 0;
function send(type: string, message?: string) {
  if(process.env.NODE_ENV==='production'){
    return;
  }else{
    const encodedMessage = message ? \`&m=\${encodeURI(message)}\` : '';
    fetch(\`/__umi/api/terminal?type=\${type}&t=\${Date.now()}&c=\${count++}&g=\${groupLevel}\${encodedMessage}\`, { mode: 'no-cors' })
  }
}
function prettyPrint(obj: any) {
  return JSON.stringify(obj, null, 2);
}
function stringifyObjs(objs: any[]) {
  const obj = objs.length > 1 ? objs.map(stringify).join(' ') : objs[0];
  return typeof obj === 'object' ? \`\${prettyPrint(obj)}\` : obj.toString();
}
function stringify(obj: any) {
  return typeof obj === 'object' ? \`\${JSON.stringify(obj)}\` : obj.toString();
}
const terminal = {
  log(...objs: any[]) { send('log', stringifyObjs(objs)) },
  info(...objs: any[]) { send('info', stringifyObjs(objs)) },
  warn(...objs: any[]) { send('warn', stringifyObjs(objs)) },
  error(...objs: any[]) { send('error', stringifyObjs(objs)) },
  group() { groupLevel++ },
  groupCollapsed() { groupLevel++ },
  groupEnd() { groupLevel && --groupLevel },
  clear() { send('clear') },
  trace(...args: any[]) { console.trace(...args) },
  profile(...args: any[]) { console.profile(...args) },
  profileEnd(...args: any[]) { console.profileEnd(...args) },
};
export { terminal };
      `.trimStart()
    });
  });
  api.addBeforeMiddlewares(() => {
    const colors = {
      log: import_utils.chalk.magentaBright,
      info: import_utils.chalk.gray,
      warn: import_utils.chalk.yellowBright,
      error: import_utils.chalk.red
    };
    return (req, res, next) => {
      if (req.path === "/__umi/api/terminal") {
        const { type, t, c, g, m } = req.query;
        t;
        c;
        g;
        console[type](colors[type](`» ${m}`));
        res.end();
      } else {
        return next();
      }
    };
  });
};
