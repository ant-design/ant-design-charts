import { GraphEvent } from '../constants';
import { GraphLifeCycleEvent } from '../utils/event';
export class BatchController {
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
            this.emit(new GraphLifeCycleEvent(GraphEvent.BATCH_START, { initiate }));
    }
    endBatch() {
        this.batchCount--;
        if (this.batchCount === 0)
            this.emit(new GraphLifeCycleEvent(GraphEvent.BATCH_END));
    }
    get isBatching() {
        return this.batchCount > 0;
    }
    destroy() {
        // @ts-ignore
        this.context = null;
    }
}
//# sourceMappingURL=batch.js.map