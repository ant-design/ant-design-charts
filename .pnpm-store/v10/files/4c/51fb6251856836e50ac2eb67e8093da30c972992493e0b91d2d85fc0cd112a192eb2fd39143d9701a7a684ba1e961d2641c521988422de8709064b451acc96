/* IMPORT */
import { RETRY_INTERVAL } from './constants.js';
/* MAIN */
const retryifyAsync = (fn, options) => {
    const { isRetriable } = options;
    return function retryified(options) {
        const { timeout } = options;
        const interval = options.interval ?? RETRY_INTERVAL;
        const timestamp = Date.now() + timeout;
        return function attempt(...args) {
            return fn.apply(undefined, args).catch((error) => {
                if (!isRetriable(error))
                    throw error;
                if (Date.now() >= timestamp)
                    throw error;
                const delay = Math.round(interval * Math.random());
                if (delay > 0) {
                    const delayPromise = new Promise(resolve => setTimeout(resolve, delay));
                    return delayPromise.then(() => attempt.apply(undefined, args));
                }
                else {
                    return attempt.apply(undefined, args);
                }
            });
        }; //TSC
    };
};
/* EXPORT */
export default retryifyAsync;
