/**
 * 类似 lodash.flow 的方法
 * @param flows
 */
export function flow(...flows) {
    return (param) => {
        return flows.reduce((result, f) => {
            return f(result);
        }, param);
    };
}
//# sourceMappingURL=flow.js.map