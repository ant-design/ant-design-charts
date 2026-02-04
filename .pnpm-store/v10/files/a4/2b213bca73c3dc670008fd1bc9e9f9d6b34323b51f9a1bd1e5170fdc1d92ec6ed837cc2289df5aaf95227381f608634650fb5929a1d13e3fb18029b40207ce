import { __awaiter } from "tslib";
import { Graph } from "@antv/graphlib";
import * as Comlink from "comlink";
import { registry } from "./registry";
import { isLayoutWithIterations } from "./types";
let currentLayout;
const obj = {
    stopLayout() {
        if (currentLayout === null || currentLayout === void 0 ? void 0 : currentLayout.stop) {
            currentLayout.stop();
        }
    },
    calculateLayout(payload, transferables) {
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
    },
};
Comlink.expose(obj);
//# sourceMappingURL=worker.js.map