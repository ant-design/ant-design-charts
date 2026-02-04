"use strict";
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

// src/browser/index.ts
var browser_exports = {};
__export(browser_exports, {
  createLogger: () => createLogger2,
  logger: () => logger
});
module.exports = __toCommonJS(browser_exports);

// src/browser/color.ts
var supportsSubstitutions = void 0;
var supportColor = () => {
  if (typeof supportsSubstitutions !== "undefined") {
    return supportsSubstitutions;
  }
  const originalConsoleLog = console.log;
  try {
    const testString = "color test";
    const css = "color: red;";
    supportsSubstitutions = false;
    console.log = (...args) => {
      if (args[0] === `%c${testString}` && args[1] === css) {
        supportsSubstitutions = true;
      }
    };
    console.log(`%c${testString}`, css);
  } catch (e) {
    supportsSubstitutions = false;
  } finally {
    console.log = originalConsoleLog;
  }
  return supportsSubstitutions;
};
var ansiToCss = {
  "bold": "font-weight: bold;",
  "red": "color: red;",
  "green": "color: green;",
  "orange": "color: orange;",
  "dodgerblue": "color: dodgerblue;",
  "magenta": "color: magenta;",
  "gray": "color: gray;"
};
var formatter = (key) => supportColor() ? (input) => {
  if (Array.isArray(input)) {
    const [label, style] = input;
    return [`%c${label.replace("%c", "")}`, style ? `${ansiToCss[key]}${style}` : `${ansiToCss[key] || ""}`];
  }
  return [`%c${String(input).replace("%c", "")}`, ansiToCss[key] || ""];
} : (input) => [String(input)];
var bold = formatter("bold");
var red = formatter("red");
var green = formatter("green");
var orange = formatter("orange");
var dodgerblue = formatter("dodgerblue");
var magenta = formatter("magenta");
var gray = formatter("gray");

// src/browser/utils.ts
function getLabel(type, logType, labels) {
  let label = [""];
  if ("label" in logType) {
    const labelText = type !== "log" ? labels[type] : void 0;
    label = [labelText || logType.label || ""];
    if (logType.color) {
      const colorResult = logType.color(label[0]);
      if (Array.isArray(colorResult) && colorResult.length === 2) {
        label = bold([colorResult[0], colorResult[1]]);
      } else {
        label = bold(colorResult[0] || "");
      }
    } else {
      label = bold(label[0]);
    }
  }
  label = label.filter(Boolean);
  return label;
}
function finalLog(label, text, args, message) {
  if (label.length) {
    if (Array.isArray(message)) {
      console.log(...label, ...message, ...args);
    } else {
      console.log(...label, text, ...args);
    }
  } else {
    Array.isArray(message) ? console.log(...message) : console.log(text, ...args);
  }
}

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

// src/browser/gradient.ts
var startColor = [189, 255, 243];
var endColor = [74, 194, 154];
var isWord = (char) => !/[\s\n]/.test(char);
function gradient(message) {
  if (!supportColor()) {
    return [message];
  }
  const chars = [...message];
  const words = chars.filter(isWord);
  const steps = words.length - 1;
  if (steps === 0) {
    console.log(`%c${message}`, `color: rgb(${startColor.join(",")}); font-weight: bold;`);
    return [message];
  }
  let output = "";
  let styles = [];
  chars.forEach((char) => {
    if (isWord(char)) {
      const progress = words.indexOf(char) / steps;
      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
      output += `%c${char}`;
      styles.push(`color: rgb(${r},${g},${b}); font-weight: bold;`);
    } else {
      output += char;
    }
  });
  return [output, ...styles];
}

// src/browser/constants.ts
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
    color: orange
  },
  // Level info
  info: {
    label: "info",
    level: "info",
    color: dodgerblue
  },
  start: {
    label: "start",
    level: "info",
    color: dodgerblue
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

// src/browser/createLogger.ts
function createLogger2(options = {}) {
  return createLogger(options, {
    handleError: (msg) => msg,
    getLabel,
    gradient,
    finalLog,
    LOG_TYPES,
    greet: (msg) => {
      return gradient(msg);
    }
  });
}

// src/browser/index.ts
var logger = createLogger2();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLogger,
  logger
});
