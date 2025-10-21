"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertPrioritySorted(arr, item) {
    const index = binaryFindPartition(arr, v => v.priority >= item.priority);
    arr.splice(index === -1 ? arr.length : index, 0, item);
    return arr;
}
exports.insertPrioritySorted = insertPrioritySorted;
function binaryFindPartition(arr, partition) {
    if (arr.length === 0) {
        return -1;
    }
    let low = 0, high = arr.length - 1;
    while (high > low) {
        let mid = low + Math.floor((high - low) / 2);
        if (partition(arr[mid])) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return partition(arr[low]) ? low : -1;
}
exports.binaryFindPartition = binaryFindPartition;
function removeIfPresent(arr, item) {
    if (!arr) {
        return;
    }
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
exports.removeIfPresent = removeIfPresent;
//# sourceMappingURL=array.js.map