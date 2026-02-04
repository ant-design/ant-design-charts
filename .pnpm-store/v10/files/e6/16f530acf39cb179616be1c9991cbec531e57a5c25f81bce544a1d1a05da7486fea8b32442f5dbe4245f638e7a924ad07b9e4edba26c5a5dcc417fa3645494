/* IMPORT */
/* MAIN */
const retryifySync = (fn, options) => {
    const { isRetriable } = options;
    return function retryified(options) {
        const { timeout } = options;
        const timestamp = Date.now() + timeout;
        return function attempt(...args) {
            while (true) {
                try {
                    return fn.apply(undefined, args);
                }
                catch (error) {
                    if (!isRetriable(error))
                        throw error;
                    if (Date.now() >= timestamp)
                        throw error;
                    continue;
                }
            }
        }; //TSC
    };
};
/* EXPORT */
export default retryifySync;
