"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../logger");
var chalk = require("chalk");
var jest_mock_process_1 = require("jest-mock-process");
// jest.mock("Console", () => {
//   return jest.fn();
// });
describe("Logger", function () {
    var mockStdout = (0, jest_mock_process_1.mockProcessStdout)();
    var mockStderr = (0, jest_mock_process_1.mockProcessStderr)();
    beforeEach(function () {
        jest.clearAllMocks();
    });
    test("Can create a logger instance to process.stdout", function () {
        var result = (0, logger_1.makeLogger)({
            baseUrl: undefined,
            colors: false,
            configFile: "",
            context: undefined,
            extensions: [],
            logInfoToStdOut: true,
            logLevel: "INFO",
            mainFields: [],
            silent: false,
            references: undefined,
        }, new chalk.Instance());
        expect(result).toBeDefined();
        result.logInfo("Test logInfo");
        result.logWarning("Test logWarning");
        result.logError("Test logError");
        result.log("Test external logger");
        expect(mockStdout).toHaveBeenCalledTimes(2);
        expect(mockStderr).toHaveBeenCalledTimes(2);
    });
    test("Can create a logger instance to process.stderr", function () {
        var result = (0, logger_1.makeLogger)({
            baseUrl: undefined,
            colors: false,
            configFile: "",
            context: undefined,
            extensions: [],
            logInfoToStdOut: false,
            logLevel: "INFO",
            mainFields: [],
            silent: false,
            references: undefined,
        }, new chalk.Instance());
        expect(result).toBeDefined();
        result.log("Test external logger");
        expect(mockStderr).toHaveBeenCalledTimes(1);
        expect(mockStdout).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=logger.test.js.map