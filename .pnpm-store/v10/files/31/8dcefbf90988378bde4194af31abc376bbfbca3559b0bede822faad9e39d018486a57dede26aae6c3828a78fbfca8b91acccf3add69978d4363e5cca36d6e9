"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventPos = getEventPos;
exports.getEventViewportPos = getEventViewportPos;
/**
 * 获得触发事件的坐标
 */
function getEventPos(e) {
    var canvas = e.canvas, touches = e.touches, offsetX = e.offsetX, offsetY = e.offsetY;
    if (canvas) {
        var x = canvas.x, y = canvas.y;
        return [x, y];
    }
    if (touches) {
        var _a = touches[0], clientX = _a.clientX, clientY = _a.clientY;
        return [clientX, clientY];
    }
    if (offsetX && offsetY)
        return [offsetX, offsetY];
    return [0, 0];
}
/**
 * 获得触发事件相对于页面 viewport 的坐标
 */
function getEventViewportPos(e) {
    var nativeEvent = e.nativeEvent, touches = e.touches, clientX = e.clientX, clientY = e.clientY;
    if (nativeEvent) {
        return [nativeEvent.clientX, nativeEvent.clientY];
    }
    if (touches) {
        var _a = touches[0], clientX_1 = _a.clientX, clientY_1 = _a.clientY;
        return [clientX_1, clientY_1];
    }
    if (typeof clientX === 'number' && typeof clientY === 'number')
        return [clientX, clientY];
    return [0, 0];
}
//# sourceMappingURL=event.js.map