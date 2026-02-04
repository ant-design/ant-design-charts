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
                rendererPromise = import('./render18');
            }
            else {
                rendererPromise = import('./render16');
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
export function render(node, container) {
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
export function unmount(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const { unmount } = yield getRenderer();
        return unmount(container);
    });
}
//# sourceMappingURL=render.js.map