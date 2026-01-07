"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow = flow;
/**
 * 类似 lodash.flow 的方法
 * @param flows
 */
function flow(...flows) {
    return (param) => {
        return flows.reduce((result, f) => {
            return f(result);
        }, param);
    };
}
//# sourceMappingURL=flow.js.map