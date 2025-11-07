import { __awaiter, __rest } from "tslib";
import EventEmitter from '@antv/event-emitter';
import { isFunction } from '@antv/util';
import * as Comlink from 'comlink';
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
        this.proxy = Comlink.wrap(
        // @ts-ignore
        new Worker(new URL('./worker.js', import.meta.url), { type: 'module' }));
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
            const noFunctionOptions = {};
            Object.keys(rest).forEach((name) => {
                if (!isFunction(rest[name]))
                    noFunctionOptions[name] = rest[name];
            });
            const payload = {
                layout: {
                    id: this.layout.id,
                    options: noFunctionOptions,
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
            const [positions] = yield this.proxy.calculateLayout(payload, [
                arraybufferWithNodesEdges,
            ]);
            return positions;
        });
    }
    stop() {
        this.running = false;
        // trigger `layout.stop()` if needed
        this.proxy.stopLayout();
        return this;
    }
    kill() {
        // allow the GC to collect wrapper port
        // @see https://github.com/GoogleChromeLabs/comlink#comlinkreleaseproxy
        this.proxy[Comlink.releaseProxy]();
        // TODO: unbind listeners on graph.
        // TODO: release attached memory
    }
    isRunning() {
        return this.running;
    }
}
//# sourceMappingURL=supervisor.js.map