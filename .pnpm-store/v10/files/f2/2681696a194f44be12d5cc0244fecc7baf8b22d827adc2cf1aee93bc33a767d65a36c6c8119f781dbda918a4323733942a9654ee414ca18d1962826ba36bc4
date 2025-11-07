"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLogger = void 0;
var console_1 = require("console");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
var stderrConsole = new console_1.Console(process.stderr);
var stdoutConsole = new console_1.Console(process.stdout);
var doNothingLogger = function (_message) {
    /* Do nothing */
};
var makeLoggerFunc = function (options) {
    return options.silent
        ? function (_whereToLog, _message) {
            /* Do nothing */
        }
        : function (whereToLog, message) { return whereToLog.log(message); };
};
var makeExternalLogger = function (loaderOptions, logger) { return function (message) {
    return logger(loaderOptions.logInfoToStdOut ? stdoutConsole : stderrConsole, message);
}; };
var makeLogInfo = function (options, logger, green) {
    return LogLevel[options.logLevel] <= LogLevel.INFO
        ? function (message) {
            return logger(options.logInfoToStdOut ? stdoutConsole : stderrConsole, green(message));
        }
        : doNothingLogger;
};
var makeLogError = function (options, logger, red) {
    return LogLevel[options.logLevel] <= LogLevel.ERROR
        ? function (message) { return logger(stderrConsole, red(message)); }
        : doNothingLogger;
};
var makeLogWarning = function (options, logger, yellow) {
    return LogLevel[options.logLevel] <= LogLevel.WARN
        ? function (message) { return logger(stderrConsole, yellow(message)); }
        : doNothingLogger;
};
function makeLogger(options, colors) {
    var logger = makeLoggerFunc(options);
    return {
        log: makeExternalLogger(options, logger),
        logInfo: makeLogInfo(options, logger, colors.green),
        logWarning: makeLogWarning(options, logger, colors.yellow),
        logError: makeLogError(options, logger, colors.red),
    };
}
exports.makeLogger = makeLogger;
//# sourceMappingURL=logger.js.map