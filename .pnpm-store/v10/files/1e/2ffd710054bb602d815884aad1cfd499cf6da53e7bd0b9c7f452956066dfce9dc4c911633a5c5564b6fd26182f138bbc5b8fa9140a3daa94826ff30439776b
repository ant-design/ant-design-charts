"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchController = void 0;
const constants_1 = require("../constants");
const event_1 = require("../utils/event");
class BatchController {
    constructor(context) {
        this.batchCount = 0;
        this.context = context;
    }
    emit(event) {
        const { graph } = this.context;
        graph.emit(event.type, event);
    }
    startBatch(initiate = true) {
        this.batchCount++;
        if (this.batchCount === 1)
            this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BATCH_START, { initiate }));
    }
    endBatch() {
        this.batchCount--;
        if (this.batchCount === 0)
            this.emit(new event_1.GraphLifeCycleEvent(constants_1.GraphEvent.BATCH_END));
    }
    get isBatching() {
        return this.batchCount > 0;
    }
    destroy() {
        // @ts-ignore
        this.context = null;
    }
}
exports.BatchController = BatchController;
//# sourceMappingURL=batch.js.map