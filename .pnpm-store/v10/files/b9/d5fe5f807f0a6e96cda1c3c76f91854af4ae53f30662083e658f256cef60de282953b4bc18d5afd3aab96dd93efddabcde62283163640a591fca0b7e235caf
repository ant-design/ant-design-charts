"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports._r = _r;
exports.render = render;
exports._u = _u;
exports.unmount = unmount;
var ReactDOM = __importStar(require("react-dom"));
// Let compiler not to search module usage
var fullClone = __assign({}, ReactDOM);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
    var mainVersion = Number((version || '').split('.')[0]);
    if (mainVersion >= 18) {
        (createRoot = fullClone.createRoot);
    }
}
catch (e) {
    // Do nothing;
}
function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
        typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object') {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    }
}
var MARK = '__rc_react_root__';
function modernRender(node, container) {
    toggleWarning(true);
    var root = container[MARK] || createRoot(container);
    toggleWarning(false);
    root.render(node);
    container[MARK] = root;
}
function legacyRender(node, container) {
    reactRender(node, container);
}
/** @private Test usage. Not work in prod */
function _r(node, container) {
    if (process.env.NODE_ENV !== 'production') {
        return legacyRender(node, container);
    }
}
function render(node, container) {
    if (createRoot) {
        modernRender(node, container);
        return;
    }
    legacyRender(node, container);
}
// ========================= Unmount ==========================
function modernUnmount(container) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Delay to unmount to avoid React 18 sync warning
            return [2 /*return*/, Promise.resolve().then(function () {
                    var _a;
                    (_a = container[MARK]) === null || _a === void 0 ? void 0 : _a.unmount();
                    delete container[MARK];
                })];
        });
    });
}
function legacyUnmount(container) {
    unmountComponentAtNode(container);
}
/** @private Test usage. Not work in prod */
function _u(container) {
    if (process.env.NODE_ENV !== 'production') {
        return legacyUnmount(container);
    }
}
function unmount(container) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (createRoot !== undefined) {
                // Delay to unmount to avoid React 18 sync warning
                return [2 /*return*/, modernUnmount(container)];
            }
            legacyUnmount(container);
            return [2 /*return*/];
        });
    });
}
