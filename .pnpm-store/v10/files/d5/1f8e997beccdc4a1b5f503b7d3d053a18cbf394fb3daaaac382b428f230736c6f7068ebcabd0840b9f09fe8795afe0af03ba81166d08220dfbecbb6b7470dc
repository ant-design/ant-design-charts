import { CreateType } from '../create/type.mjs';
import { Kind } from '../symbols/index.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsOptional } from '../guard/kind.mjs';
/** Creates a RequiredArray derived from the given TProperties value. */
function RequiredArray(properties) {
    return globalThis.Object.keys(properties).filter((key) => !IsOptional(properties[key]));
}
/** `[Json]` Creates an Object type */
function _Object(properties, options) {
    const required = RequiredArray(properties);
    const schema = required.length > 0 ? { [Kind]: 'Object', type: 'object', required, properties } : { [Kind]: 'Object', type: 'object', properties };
    return CreateType(schema, options);
}
/** `[Json]` Creates an Object type */
export var Object = _Object;
