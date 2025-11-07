"use strict";
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = render;
exports.unmount = unmount;
const ReactDOM = __importStar(require("react-dom"));
const MARK = '__rc_react_root__';
let ReactDOMClientPromise = null;
/**
 * <zh/> 初始化 React 18+ 的 createRoot
 *
 * <en/> Initialize React 18+ createRoot
 * @returns ReactDOMClient
 */
function initReactDOMClient() {
    if (ReactDOMClientPromise === null) {
        ReactDOMClientPromise = Promise.resolve().then(() => __importStar(require('react-dom/client'))).catch(() => null);
    }
    return ReactDOMClientPromise;
}
/**
 * <zh/> 切换警告
 *
 * <en/> Toggle warning
 * @param skip <zh/> 是否跳过警告 | <en/> Whether to skip the warning
 */
function toggleWarning(skip) {
    try {
        const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = ReactDOM;
        if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
            typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object') {
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
        }
    }
    catch (_a) {
        // Silent error
    }
}
/**
 * <zh/> 渲染 React 节点(React 18/19)
 *
 * <en/> Render React node(React 18/19)
 * @param node - <zh/> React 节点 | <en/> React node
 * @param container - <zh/> 容器 | <en/> Container
 */
function render(node, container) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield initReactDOMClient();
        if (!(client === null || client === void 0 ? void 0 : client.createRoot)) {
            throw new Error('React 18+ createRoot not available');
        }
        toggleWarning(true);
        const root = container[MARK] || client.createRoot(container);
        toggleWarning(false);
        root.render(node);
        container[MARK] = root;
    });
}
/**
 * <zh/> 卸载 React 节点(React 18/19)
 *
 * <en/> Unmount React node(React 18/19)
 * @param container - <zh/> 容器 | <en/> Container
 * @returns <zh/> Promise | <en/> Promise
 */
function unmount(container) {
    return __awaiter(this, void 0, void 0, function* () {
        // Delay to unmount to avoid React 18 sync warning
        return Promise.resolve().then(() => {
            var _a;
            (_a = container[MARK]) === null || _a === void 0 ? void 0 : _a.unmount();
            delete container[MARK];
        });
    });
}
//# sourceMappingURL=render18.js.map