"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayTaskQueue = void 0;
const node_assert_1 = __importDefault(require("node:assert"));
class ArrayTaskQueue {
    constructor() {
        this.tasks = [];
    }
    get size() {
        return this.tasks.length;
    }
    shift() {
        var _a;
        return (_a = this.tasks.shift()) !== null && _a !== void 0 ? _a : null;
    }
    push(task) {
        this.tasks.push(task);
    }
    remove(task) {
        const index = this.tasks.indexOf(task);
        node_assert_1.default.notStrictEqual(index, -1);
        this.tasks.splice(index, 1);
    }
}
exports.ArrayTaskQueue = ArrayTaskQueue;
//# sourceMappingURL=array_queue.js.map