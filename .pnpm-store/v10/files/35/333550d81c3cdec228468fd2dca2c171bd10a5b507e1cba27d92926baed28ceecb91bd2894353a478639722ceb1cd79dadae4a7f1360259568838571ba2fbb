import { __awaiter } from "tslib";
import { Graph } from '@antv/graphlib';
// import { setupTransferableMethodsOnWorker } from "@naoak/workerize-transferable";
import { registry } from './registry';
import { isLayoutWithIterations } from './types';
// @see https://www.npmjs.com/package/@naoak/workerize-transferable
// setupTransferableMethodsOnWorker({
//   // The name of function which use some transferables.
//   calculateLayout: {
//     // Specify an instance of the function
//     fn: calculateLayout,
//     // Pick a transferable object from the result which is an instance of Float32Array
//     pickTransferablesFromResult: (result) => [result[1].buffer],
//   },
// });
let currentLayout;
export function stopLayout() {
    if (currentLayout === null || currentLayout === void 0 ? void 0 : currentLayout.stop) {
        currentLayout.stop();
    }
}
export function calculateLayout(payload, transferables) {
    return __awaiter(this, void 0, void 0, function* () {
        const { layout: { id, options, iterations }, nodes, edges, } = payload;
        // Sync graph on the worker side.
        // TODO: Use transferable objects like ArrayBuffer for nodes & edges,
        // in which case we don't need the whole graph.
        // @see https://github.com/graphology/graphology/blob/master/src/layout-noverlap/webworker.tpl.js#L32
        const graph = new Graph({
            nodes,
            edges,
        });
        /**
         * Create layout instance on the worker side.
         */
        const layoutCtor = registry[id];
        if (layoutCtor) {
            currentLayout = new layoutCtor(options);
        }
        else {
            throw new Error(`Unknown layout id: ${id}`);
        }
        let positions = yield currentLayout.execute(graph);
        if (isLayoutWithIterations(currentLayout)) {
            currentLayout.stop();
            positions = currentLayout.tick(iterations);
        }
        return [positions, transferables];
    });
}
//# sourceMappingURL=bundle-worker.js.map