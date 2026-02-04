/* IMPORT */
import process from 'node:process';
import Handlers from './handlers.js';
/* MAIN */
const ATTEMPTIFY_CHANGE_ERROR_OPTIONS = {
    onError: Handlers.onChangeError
};
const ATTEMPTIFY_NOOP_OPTIONS = {
    onError: () => undefined
};
const IS_USER_ROOT = (process.getuid ? !process.getuid() : false);
const RETRYIFY_OPTIONS = {
    isRetriable: Handlers.isRetriableError
};
/* EXPORT */
export { ATTEMPTIFY_CHANGE_ERROR_OPTIONS, ATTEMPTIFY_NOOP_OPTIONS, IS_USER_ROOT, RETRYIFY_OPTIONS };
