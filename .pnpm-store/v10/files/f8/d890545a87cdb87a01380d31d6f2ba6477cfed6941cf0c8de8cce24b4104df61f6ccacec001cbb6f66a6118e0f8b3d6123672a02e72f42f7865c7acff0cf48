"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doDFS = exports.doBFS = void 0;
function doBFS(queue, visited, fn, navigator) {
    while (queue.length) {
        const node = queue.shift();
        const abort = fn(node);
        if (abort) {
            return true;
        }
        visited.add(node.id);
        navigator(node.id).forEach((n) => {
            if (!visited.has(n.id)) {
                visited.add(n.id);
                queue.push(n);
            }
        });
    }
    return false;
}
exports.doBFS = doBFS;
function doDFS(node, visited, fn, navigator) {
    const abort = fn(node);
    if (abort) {
        return true;
    }
    visited.add(node.id);
    for (const n of navigator(node.id)) {
        if (!visited.has(n.id)) {
            if (doDFS(n, visited, fn, navigator)) {
                return true;
            }
        }
    }
    return false;
}
exports.doDFS = doDFS;
//# sourceMappingURL=traverse.js.map