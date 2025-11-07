"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer = timer;
/**
 * 计时装饰器
 */
function timer(label) {
    var debug = localStorage.getItem('__debug__');
    return function (target, propertyKey, descriptor) {
        var timerLabel = "[".concat(propertyKey, "] ").concat(label);
        var func = descriptor.value;
        if (typeof func === 'function') {
            // eslint-disable-next-line
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                debug && console.time(timerLabel);
                func.apply(this, args);
                debug && console.timeEnd(timerLabel);
            };
        }
    };
}
//# sourceMappingURL=timer.js.map