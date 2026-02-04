"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonState = exports.READY = void 0;
exports.isTransferable = isTransferable;
exports.isMovable = isMovable;
exports.markMovable = markMovable;
exports.createHistogramSummary = createHistogramSummary;
exports.toHistogramIntegerNano = toHistogramIntegerNano;
exports.maybeFileURLToPath = maybeFileURLToPath;
exports.getAvailableParallelism = getAvailableParallelism;
const node_url_1 = require("node:url");
const node_os_1 = require("node:os");
const symbols_1 = require("./symbols");
// States wether the worker is ready to receive tasks
exports.READY = '_WORKER_READY';
/**
 * True if the object implements the Transferable interface
 *
 * @export
 * @param {unknown} value
 * @return {*}  {boolean}
 */
function isTransferable(value) {
    return (value != null &&
        typeof value === 'object' &&
        symbols_1.kTransferable in value &&
        symbols_1.kValue in value);
}
/**
 * True if object implements Transferable and has been returned
 * by the Piscina.move() function
 *
 * TODO: narrow down the type of value
 * @export
 * @param {(unknown & PiscinaMovable)} value
 * @return {*}  {boolean}
 */
function isMovable(value) {
    return isTransferable(value) && value[symbols_1.kMovable] === true;
}
function markMovable(value) {
    Object.defineProperty(value, symbols_1.kMovable, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: true
    });
}
// State of Piscina pool
exports.commonState = {
    isWorkerThread: false,
    workerData: undefined
};
function createHistogramSummary(histogram) {
    const { mean, stddev, min, max } = histogram;
    return {
        average: mean / 1000,
        mean: mean / 1000,
        stddev,
        min: min / 1000,
        max: max / 1000,
        p0_001: histogram.percentile(0.001) / 1000,
        p0_01: histogram.percentile(0.01) / 1000,
        p0_1: histogram.percentile(0.1) / 1000,
        p1: histogram.percentile(1) / 1000,
        p2_5: histogram.percentile(2.5) / 1000,
        p10: histogram.percentile(10) / 1000,
        p25: histogram.percentile(25) / 1000,
        p50: histogram.percentile(50) / 1000,
        p75: histogram.percentile(75) / 1000,
        p90: histogram.percentile(90) / 1000,
        p97_5: histogram.percentile(97.5) / 1000,
        p99: histogram.percentile(99) / 1000,
        p99_9: histogram.percentile(99.9) / 1000,
        p99_99: histogram.percentile(99.99) / 1000,
        p99_999: histogram.percentile(99.999) / 1000
    };
}
function toHistogramIntegerNano(milliseconds) {
    return Math.max(1, Math.trunc(milliseconds * 1000));
}
function maybeFileURLToPath(filename) {
    return filename.startsWith('file:')
        ? (0, node_url_1.fileURLToPath)(new node_url_1.URL(filename))
        : filename;
}
// TODO: drop on v5
function getAvailableParallelism() {
    if (typeof node_os_1.availableParallelism === 'function') {
        return (0, node_os_1.availableParallelism)();
    }
    try {
        return (0, node_os_1.cpus)().length;
    }
    catch {
        return 1;
    }
}
//# sourceMappingURL=common.js.map