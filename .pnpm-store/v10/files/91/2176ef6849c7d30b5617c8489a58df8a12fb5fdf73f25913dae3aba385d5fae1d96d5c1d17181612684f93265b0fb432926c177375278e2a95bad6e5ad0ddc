"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = throttle;
/**
 * 节流修饰器
 * @param delay 节流时间
 */
function throttle(delay, rightNow) {
    if (delay === void 0) { delay = 0; }
    if (rightNow === void 0) { rightNow = false; }
    return function (target, propertyKey, descriptor) {
        var func = descriptor.value;
        var timeout;
        if (typeof func === 'function') {
            // eslint-disable-next-line
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (timeout)
                    return;
                var context = this;
                if (rightNow)
                    func.apply(context, args);
                timeout = window.setTimeout(function () {
                    func.apply(context, args);
                    timeout = null;
                }, delay);
            };
        }
    };
}
//# sourceMappingURL=throttle.js.map