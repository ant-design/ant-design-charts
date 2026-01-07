"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Object = void 0;
const type_1 = require("../create/type");
const index_1 = require("../symbols/index");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
/** Creates a RequiredArray derived from the given TProperties value. */
function RequiredArray(properties) {
    return globalThis.Object.keys(properties).filter((key) => !(0, kind_1.IsOptional)(properties[key]));
}
/** `[Json]` Creates an Object type */
function _Object(properties, options) {
    const required = RequiredArray(properties);
    const schema = required.length > 0 ? { [index_1.Kind]: 'Object', type: 'object', required, properties } : { [index_1.Kind]: 'Object', type: 'object', properties };
    return (0, type_1.CreateType)(schema, options);
}
/** `[Json]` Creates an Object type */
exports.Object = _Object;
