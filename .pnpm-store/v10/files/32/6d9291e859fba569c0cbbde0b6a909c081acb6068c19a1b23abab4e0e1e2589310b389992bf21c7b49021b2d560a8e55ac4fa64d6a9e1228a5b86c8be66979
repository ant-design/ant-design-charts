"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runLoaderWorkerPool = runLoaderWorkerPool;
const worker_threads_1 = require("worker_threads");
const loaderWorkers = {};
function getPoolId(cwd, filename) {
    return `${cwd}:${filename}`;
}
let workerSchedulerRegistered = false;
async function runLoaderWorkerPool(binding, bindingPath) {
    if (workerSchedulerRegistered) {
        return;
    }
    binding.registerWorkerScheduler((creation) => {
        const { options: { filename, cwd }, } = creation;
        let poolId = getPoolId(cwd, filename);
        const worker = new worker_threads_1.Worker(filename, {
            workerData: {
                bindingPath,
                cwd,
            },
        });
        worker.unref();
        const workers = loaderWorkers[poolId] || (loaderWorkers[poolId] = new Map());
        workers.set(worker.threadId, worker);
    }, (termination) => {
        var _a;
        const { options: { filename, cwd }, workerId, } = termination;
        let poolId = getPoolId(cwd, filename);
        const workers = loaderWorkers[poolId];
        (_a = workers.get(workerId)) === null || _a === void 0 ? void 0 : _a.terminate();
        workers.delete(workerId);
    });
    workerSchedulerRegistered = true;
}
