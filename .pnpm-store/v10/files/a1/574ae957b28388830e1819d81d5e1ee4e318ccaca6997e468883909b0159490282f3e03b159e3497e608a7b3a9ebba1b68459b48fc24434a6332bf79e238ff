import { flex } from './flex';
import { grid } from './grid';
export default (function (container, children, config) {
    if (children.length === 0)
        return [];
    var callers = { flex: flex, grid: grid };
    var caller = config.display in callers ? callers[config.display] : null;
    // @ts-ignore
    return (caller === null || caller === void 0 ? void 0 : caller.call(null, container, children, config)) || [];
});
//# sourceMappingURL=executer.js.map