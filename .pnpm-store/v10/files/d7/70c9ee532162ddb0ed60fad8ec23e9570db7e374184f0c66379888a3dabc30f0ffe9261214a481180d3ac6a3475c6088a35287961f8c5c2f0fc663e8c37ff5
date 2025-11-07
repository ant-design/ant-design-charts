/* IMPORT */
/* MAIN */
const attemptifyAsync = (fn, options) => {
    const { onError } = options;
    return function attemptified(...args) {
        return fn.apply(undefined, args).catch(onError);
    }; //TSC
};
/* EXPORT */
export default attemptifyAsync;
