"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureString = exports.compact = exports.isString = exports.isNothing = exports.toStringArray = void 0;
const libs_1 = require("./libs");
exports.toStringArray = libs_1.R.pipe(compact, libs_1.R.map(libs_1.R.toString));
const isNothing = (value) => libs_1.R.isNil(value) || libs_1.R.isEmpty(value);
exports.isNothing = isNothing;
exports.isString = libs_1.R.is(String);
function compact(input) {
    const flat = [].concat(...input);
    return flat.filter((value) => !libs_1.R.isNil(value));
}
exports.compact = compact;
function ensureString(defaultValue, text) {
    return typeof text === 'string' ? text : defaultValue;
}
exports.ensureString = ensureString;
