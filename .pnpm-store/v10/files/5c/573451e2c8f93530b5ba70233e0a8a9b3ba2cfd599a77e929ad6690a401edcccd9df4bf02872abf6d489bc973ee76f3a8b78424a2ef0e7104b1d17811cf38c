import mix from './mix';
import isFunction from './is-function';
var augment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var c = args[0];
    for (var i = 1; i < args.length; i++) {
        var obj = args[i];
        if (isFunction(obj)) {
            obj = obj.prototype;
        }
        mix(c.prototype, obj);
    }
};
export default augment;
//# sourceMappingURL=augment.js.map