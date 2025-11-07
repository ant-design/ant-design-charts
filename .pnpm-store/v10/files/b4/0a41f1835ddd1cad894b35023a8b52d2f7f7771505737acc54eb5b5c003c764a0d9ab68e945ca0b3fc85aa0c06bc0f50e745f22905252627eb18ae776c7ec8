"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashExists = exports.hash = void 0;
const libs_1 = require("./libs");
const hash = (algorithm, ...values) => {
    if (libs_1.R.pipe(compact, libs_1.R.isEmpty)(values))
        return undefined;
    const resultHash = libs_1.crypto.createHash(algorithm);
    const addValue = (value) => resultHash.update(value);
    const addValues = libs_1.R.forEach(addValue);
    libs_1.R.pipe(toStringArray, addValues)(values);
    return resultHash.digest('hex');
};
exports.hash = hash;
const hashExists = (algorithm) => {
    return libs_1.crypto.getHashes().includes(algorithm);
};
exports.hashExists = hashExists;
