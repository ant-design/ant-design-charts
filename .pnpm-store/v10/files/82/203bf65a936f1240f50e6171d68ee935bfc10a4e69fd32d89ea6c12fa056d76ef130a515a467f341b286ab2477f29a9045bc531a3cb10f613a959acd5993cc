"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pows = exports.logs = void 0;
const reflect = (f) => {
    return (x) => -f(-x);
};
const logs = (base, shouldReflect) => {
    const baseCache = Math.log(base);
    const log = base === Math.E
        ? Math.log
        : base === 10
            ? Math.log10
            : base === 2
                ? Math.log2
                : (x) => Math.log(x) / baseCache;
    return shouldReflect ? reflect(log) : log;
};
exports.logs = logs;
const pows = (base, shouldReflect) => {
    const pow = base === Math.E ? Math.exp : (x) => base ** x;
    return shouldReflect ? reflect(pow) : pow;
};
exports.pows = pows;
//# sourceMappingURL=log.js.map