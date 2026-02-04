var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ReactDOM from 'react-dom';
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
        ReactDOMClientPromise = import('react-dom/client').catch(() => null);
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
export function render(node, container) {
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
export function unmount(container) {
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