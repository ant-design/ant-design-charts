/**
 * 获得触发事件的坐标
 */
export function getEventPos(e) {
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
//# sourceMappingURL=event.js.map