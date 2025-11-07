import { identity } from '@antv/util';
export function compose(fn) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return fn ? rest.reduce(function (total, current) { return function (x) { return current(total(x)); }; }, fn) : identity;
}
//# sourceMappingURL=compose.js.map