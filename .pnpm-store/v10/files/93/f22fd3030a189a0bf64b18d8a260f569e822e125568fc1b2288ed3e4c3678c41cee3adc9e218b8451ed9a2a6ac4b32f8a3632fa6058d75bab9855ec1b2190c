"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUid = void 0;
const getUid = (alphabit, size) => () => {
    let result = "";
    for (let i = 0; i < size; i++) {
        result += alphabit[(Math.random() * alphabit.length) | 0];
    }
    return result;
};
exports.getUid = getUid;
