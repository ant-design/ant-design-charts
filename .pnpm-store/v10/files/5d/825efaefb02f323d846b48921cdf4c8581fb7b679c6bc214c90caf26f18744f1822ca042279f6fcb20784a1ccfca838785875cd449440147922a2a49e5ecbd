const reflect = (f) => {
    return (x) => -f(-x);
};
export const logs = (base, shouldReflect) => {
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
export const pows = (base, shouldReflect) => {
    const pow = base === Math.E ? Math.exp : (x) => base ** x;
    return shouldReflect ? reflect(pow) : pow;
};
//# sourceMappingURL=log.js.map