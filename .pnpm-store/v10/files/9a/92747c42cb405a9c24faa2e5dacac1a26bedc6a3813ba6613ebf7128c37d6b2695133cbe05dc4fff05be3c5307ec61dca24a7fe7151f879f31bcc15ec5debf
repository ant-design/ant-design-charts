import each from './each';
import isPlainObject from './is-plain-object';
var hasOwnProperty = Object.prototype.hasOwnProperty;
export default (function (object, keys) {
    if (object === null || !isPlainObject(object)) {
        return {};
    }
    var result = {};
    each(keys, function (key) {
        if (hasOwnProperty.call(object, key)) {
            result[key] = object[key];
        }
    });
    return result;
});
//# sourceMappingURL=pick.js.map