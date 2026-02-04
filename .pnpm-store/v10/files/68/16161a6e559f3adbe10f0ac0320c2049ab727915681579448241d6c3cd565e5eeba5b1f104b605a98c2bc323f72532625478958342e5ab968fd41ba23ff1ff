/* IMPORT */
/* MAIN */
const attemptifySync = (fn, options) => {
    const { onError } = options;
    return function attemptified(...args) {
        try {
            return fn.apply(undefined, args);
        }
        catch (error) {
            return onError(error);
        }
    }; //TSC
};
/* EXPORT */
export default attemptifySync;
