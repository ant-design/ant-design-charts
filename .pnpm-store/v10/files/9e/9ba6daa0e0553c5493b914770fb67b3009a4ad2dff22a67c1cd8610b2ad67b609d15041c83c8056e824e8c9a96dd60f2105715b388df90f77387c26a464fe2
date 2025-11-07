import { __awaiter, __rest } from "tslib";
import EventEmitter from '@antv/event-emitter';
// @ts-ignore
// Inline the worker as a Blob. @see https://github.com/developit/workerize-loader#inline
import worker from 'workerize-loader?inline!./bundle-worker';
/**
 * @example
 * const graph = new Graph();
 * const layout = new CircularLayout();
 *
 * const supervisor = new Supervisor(graph, layout, { iterations: 1000 });
 * const positions = await supervisor.execute();
 * supervisor.stop();
 * supervisor.kill();
 */
export class Supervisor extends EventEmitter {
    constructor(graph, layout, options) {
        super();
        this.graph = graph;
        this.layout = layout;
        this.options = options;
        this.spawnWorker();
    }
    spawnWorker() {
        if (this.worker) {
            this.worker.terminate();
        }
        /**
         * Worker function
         */
        // this.worker = this.createWorker(workerFunctionString);
        // this.worker.addEventListener('message', this.handleWorkerMessage);
        // Use workerize-loader to create WebWorker.
        // @see https://github.com/developit/workerize-loader
        this.worker = worker();
        if (this.running) {
            this.running = false;
            this.execute();
        }
    }
    execute() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.running)
                return this;
            this.running = true;
            // Payload should include nodes & edges(if needed).
            const _b = this.layout.options, { onTick } = _b, rest = __rest(_b, ["onTick"]);
            const payload = {
                layout: {
                    id: this.layout.id,
                    options: rest,
                    iterations: (_a = this.options) === null || _a === void 0 ? void 0 : _a.iterations,
                },
                nodes: this.graph.getAllNodes(),
                edges: this.graph.getAllEdges(),
            };
            /**
             * TODO: Convert graph object to linear memory(e.g. csr, adjacency matrix), then transfer the ownership to worker.
             * @example
             * const arraybufferWithNodesEdges = graphToByteArrays(this.graph); // Float32Array
             */
            const arraybufferWithNodesEdges = new Float32Array([0]);
            // TODO: Support transferables.
            // @see https://www.npmjs.com/package/@naoak/workerize-transferable
            // setupTransferableMethodsOnMain(this.worker, {
            //   calculateLayout: {
            //     // pick a transferable object from the method parameters
            //     pickTransferablesFromParams: (params) => [params[1].buffer],
            //   },
            // });
            const [positions] = yield this.worker.calculateLayout(payload, [
                arraybufferWithNodesEdges,
            ]);
            return positions;
        });
    }
    stop() {
        this.running = false;
        // trigger `layout.stop()` if needed
        this.worker.stopLayout();
        return this;
    }
    kill() {
        if (this.worker) {
            this.worker.terminate();
        }
        // TODO: unbind listeners on graph.
        // TODO: release attached memory
    }
    isRunning() {
        return this.running;
    }
}
//# sourceMappingURL=bundle-supervisor.js.map