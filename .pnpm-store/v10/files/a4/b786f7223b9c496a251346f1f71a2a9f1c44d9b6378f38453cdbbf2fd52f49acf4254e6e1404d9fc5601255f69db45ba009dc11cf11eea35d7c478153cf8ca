import { MESSAGE_TYPE_RPC_TRANSFERABLE } from './message-types.js';
import { getGlobalThis } from './util.js';
/**
 * Setup worker methods which return transferables. This function should be executed on the worker thread.
 * @param methods an object whose key is method name and whose value is options how to pick transferables from method result
 */
export function setupTransferableMethodsOnWorker(methods) {
    const globals = getGlobalThis();
    globals.addEventListener('message', e => {
        const { type, method, id, params } = e.data;
        let opts;
        let p;
        if (type === MESSAGE_TYPE_RPC_TRANSFERABLE && method) {
            if ((opts = methods[method])) {
                p = Promise.resolve().then(() => opts.fn(...params));
            }
            else {
                p = Promise.reject('No such method');
            }
            p.then(result => {
                globals.postMessage({ type: MESSAGE_TYPE_RPC_TRANSFERABLE, id, result }, opts.pickTransferablesFromResult ? opts.pickTransferablesFromResult(result) : []);
            }).catch(e => {
                let message;
                try {
                    message = e.message.toString();
                }
                catch (ex) {
                    message = null;
                }
                const error = { message };
                if (e.stack) {
                    error.stack = e.stack;
                    error.name = e.name;
                }
                if (e.status) {
                    error.status = e.status;
                    error.responseJson = e.responseJson;
                }
                globals.postMessage({
                    type: MESSAGE_TYPE_RPC_TRANSFERABLE,
                    id,
                    error
                });
            });
        }
    });
}
//# sourceMappingURL=on-worker.js.map