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
const { version } = ReactDOM;
/**
 * <zh/> 获取 React 主版本号
 *
 * <en/> Get React major version
 * @returns <zh/> 主版本号 | <en/> Major version
 */
function getReactMajorVersion() {
    return Number((version || '').split('.')[0]);
}
const getRenderer = (() => {
    let rendererPromise;
    return () => {
        if (!rendererPromise) {
            const majorVersion = getReactMajorVersion();
            if (majorVersion >= 18) {
                rendererPromise = Promise.resolve().then(() => __importStar(require('./render18')));
            }
            else {
                rendererPromise = Promise.resolve().then(() => __importStar(require('./render16')));
            }
        }
        return rendererPromise;
    };
})();
/**
 * <zh/> 渲染 React 节点(兼容 React 16 ~ 19)
 *
 * <en/> Render React node(Compatible with React 16 ~ 19)
 * @param node - <zh/> React 节点 | <en/> React node
 * @param container - <zh/> 容器 | <en/> Container
 * @returns <zh/> Promise | <en/> Promise
 */
function render(node, container) {
    return __awaiter(this, void 0, void 0, function* () {
        const { render } = yield getRenderer();
        return render(node, container);
    });
}
/**
 * <zh/> 卸载 React 节点(兼容 React 16 ~ 19)
 *
 * <en/> Unmount React node(Compatible with React 16 ~ 19)
 * @param container - <zh/> 容器 | <en/> Container
 * @returns <zh/> Promise | <en/> Promise
 */
function unmount(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const { unmount } = yield getRenderer();
        return unmount(container);
    });
}
//# sourceMappingURL=render.js.map