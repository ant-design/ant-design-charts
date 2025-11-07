"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.request = exports.sendReadableData = void 0;
var stream_1 = require("stream");
var adapter_utils_1 = require("@leancloud/adapter-utils");
var superagent = require("superagent");
function convertResponse(res) {
    return {
        ok: res.ok,
        status: res.status,
        headers: res.header,
        data: res.body,
    };
}
function sendReadableData(req, data) {
    return new Promise(function (resolve, reject) {
        req.on("response", resolve);
        req.on("error", reject);
        data.pipe(req);
    });
}
exports.sendReadableData = sendReadableData;
var request = function (url, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, method, data, headers, onprogress, signal, req, aborted, onAbort, res, _b, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = options.method, method = _a === void 0 ? "GET" : _a, data = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
                    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    req = superagent(method, url).ok(function () { return true; });
                    if (headers) {
                        req.set(headers);
                    }
                    if (onprogress) {
                        req.on("progress", onprogress);
                    }
                    aborted = false;
                    onAbort = function () {
                        aborted = true;
                        req.abort();
                    };
                    signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!(data instanceof stream_1.Readable)) return [3 /*break*/, 3];
                    return [4 /*yield*/, sendReadableData(req, data)];
                case 2:
                    _b = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, req.send(data)];
                case 4:
                    _b = _c.sent();
                    _c.label = 5;
                case 5:
                    res = _b;
                    return [2 /*return*/, convertResponse(res)];
                case 6:
                    error_1 = _c.sent();
                    if (aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    throw error_1;
                case 7:
                    signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    });
};
exports.request = request;
var upload = function (url, file, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, method, data, headers, onprogress, signal, req, aborted, onAbort, res, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = options.method, method = _a === void 0 ? "POST" : _a, data = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
                    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    req = superagent(method, url)
                        .ok(function () { return true; })
                        .attach(file.field, file.data, file.name);
                    if (data) {
                        req.field(data);
                    }
                    if (headers) {
                        req.set(headers);
                    }
                    if (onprogress) {
                        req.on("progress", onprogress);
                    }
                    aborted = false;
                    onAbort = function () {
                        aborted = true;
                        req.abort();
                    };
                    signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, req];
                case 2:
                    res = _b.sent();
                    return [2 /*return*/, convertResponse(res)];
                case 3:
                    error_2 = _b.sent();
                    if (aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    throw error_2;
                case 4:
                    signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.upload = upload;
//# sourceMappingURL=adapters-superagent.js.map