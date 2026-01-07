"use strict";
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

// src/node/index.ts
var node_exports = {};
__export(node_exports, {
  createLogger: () => createLogger2,
  logger: () => logger
});
module.exports = __toCommonJS(node_exports);

// src/constants.ts
var LOG_LEVEL = {
  error: 0,
  warn: 1,
  info: 2,
  log: 3,
  verbose: 4
};

// src/utils.ts
var errorStackRegExp = /at\s.*:\d+:\d+[\s\)]*$/;
var anonymousErrorStackRegExp = /at\s.*\(<anonymous>\)$/;
var isErrorStackMessage = (message) => errorStackRegExp.test(message) || anonymousErrorStackRegExp.test(message);

// src/createLogger.ts
function validateOptions(options) {
  const validatedOptions = { ...options };
  if (options.labels && typeof options.labels !== "object") {
    throw new Error("Labels must be an object");
  }
  if (options.level && typeof options.level !== "string") {
    throw new Error("Level must be a string");
  }
  return validatedOptions;
}
var createLogger = (options = {}, { getLabel: getLabel2, handleError, finalLog: finalLog2, greet, LOG_TYPES: LOG_TYPES2 }) => {
  const validatedOptions = validateOptions(options);
  let maxLevel = validatedOptions.level || "log";
  let customLabels = validatedOptions.labels || {};
  let log = (type, message, ...args) => {
    if (LOG_LEVEL[LOG_TYPES2[type].level] > LOG_LEVEL[maxLevel]) {
      return;
    }
    if (message === void 0 || message === null) {
      return console.log();
    }
    let logType = LOG_TYPES2[type];
    let text = "";
    const label = getLabel2(type, logType, customLabels);
    if (message instanceof Error) {
      if (message.stack) {
        let [name, ...rest] = message.stack.split("\n");
        if (name.startsWith("Error: ")) {
          name = name.slice(7);
        }
        text = `${name}
${handleError(rest.join("\n"))}`;
      } else {
        text = message.message;
      }
    } else if (logType.level === "error" && typeof message === "string") {
      let lines = message.split("\n");
      text = lines.map((line) => isErrorStackMessage(line) ? handleError(line) : line).join("\n");
    } else {
      text = `${message}`;
    }
    finalLog2(label, text, args, message);
  };
  let logger2 = {
    // greet
    greet: (message) => log("log", greet(message))
  };
  Object.keys(LOG_TYPES2).forEach((key) => {
    logger2[key] = (...args) => log(key, ...args);
  });
  Object.defineProperty(logger2, "level", {
    get: () => maxLevel,
    set(val) {
      maxLevel = val;
    }
  });
  Object.defineProperty(logger2, "labels", {
    get: () => customLabels,
    set(val) {
      customLabels = val;
    }
  });
  logger2.override = (customLogger) => {
    Object.assign(logger2, customLogger);
  };
  return logger2;
};

// node_modules/.pnpm/supports-color@9.4.0/node_modules/supports-color/index.js
var import_node_process = __toESM(require("process"));
var import_node_os = __toESM(require("os"));
var import_node_tty = __toESM(require("tty"));
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = import_node_process.default;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (import_node_process.default.platform === "win32") {
    const osRelease = import_node_os.default.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
  stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
};
var supports_color_default = supportsColor;

// src/node/utils.ts
var colorLevel = supports_color_default.stdout ? supports_color_default.stdout.level : 0;
function getLabel(type, logType, labels) {
  let label = "";
  if ("label" in logType) {
    const labelText = type !== "log" ? labels[type] : void 0;
    label = (labelText || logType.label || "").padEnd(7);
    label = bold(logType.color ? logType.color(label)[0] : label)[0];
  }
  return [label];
}
function finalLog(label, text, args, message) {
  const labelStr = label[0];
  if (text && Array.isArray(message) && !(message instanceof Error)) {
    console.log(`${labelStr} ${message[0]}`);
  } else {
    console.log(labelStr.length ? `${labelStr} ${text}` : text, ...args);
  }
}

// src/node/color.ts
var formatter = (open, close, replace = open) => colorLevel >= 2 ? (input) => {
  let string = "" + input;
  let index = string.indexOf(close, open.length);
  return ~index ? [open + replaceClose(string, close, replace, index) + close] : [open + string + close];
} : (input) => {
  return [String(input)];
};
var replaceClose = (string, close, replace, index) => {
  let start = string.substring(0, index) + replace;
  let end = string.substring(index + close.length);
  let nextIndex = end.indexOf(close);
  return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
var bold = formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
var red = formatter("\x1B[31m", "\x1B[39m");
var green = formatter("\x1B[32m", "\x1B[39m");
var yellow = formatter("\x1B[33m", "\x1B[39m");
var magenta = formatter("\x1B[35m", "\x1B[39m");
var cyan = formatter("\x1B[36m", "\x1B[39m");
var gray = formatter("\x1B[90m", "\x1B[39m");

// src/node/gradient.ts
var startColor = [189, 255, 243];
var endColor = [74, 194, 154];
var isWord = (char) => !/[\s\n]/.test(char);
var gradient = (message) => {
  if (colorLevel < 3) {
    return colorLevel === 2 ? bold(cyan(message)[0]) : [message];
  }
  let chars = [...message];
  let steps = chars.filter(isWord).length;
  let r = startColor[0];
  let g = startColor[1];
  let b = startColor[2];
  let rStep = (endColor[0] - r) / steps;
  let gStep = (endColor[1] - g) / steps;
  let bStep = (endColor[2] - b) / steps;
  let output = "";
  for (let char of chars) {
    if (isWord(char)) {
      r += rStep;
      g += gStep;
      b += bStep;
    }
    output += `\x1B[38;2;${Math.round(r)};${Math.round(g)};${Math.round(
      b
    )}m${char}\x1B[39m`;
  }
  return bold(output);
};

// src/node/constants.ts
var LOG_TYPES = {
  // Level error
  error: {
    label: "error",
    level: "error",
    color: red
  },
  // Level warn
  warn: {
    label: "warn",
    level: "warn",
    color: yellow
  },
  // Level info
  info: {
    label: "info",
    level: "info",
    color: cyan
  },
  start: {
    label: "start",
    level: "info",
    color: cyan
  },
  ready: {
    label: "ready",
    level: "info",
    color: green
  },
  success: {
    label: "success",
    level: "info",
    color: green
  },
  // Level log
  log: {
    level: "log"
  },
  // Level debug
  debug: {
    label: "debug",
    level: "verbose",
    color: magenta
  }
};

// src/node/createLogger.ts
function createLogger2(options = {}) {
  return createLogger(options, {
    handleError: (msg) => {
      const res = gray(msg);
      return Array.isArray(res) ? `${res[0]}` : `${res}`;
    },
    getLabel,
    gradient,
    finalLog,
    LOG_TYPES,
    greet: (msg) => {
      return gradient(msg)[0];
    }
  });
}

// src/node/index.ts
var logger = createLogger2();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLogger,
  logger
});
