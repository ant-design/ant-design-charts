var _this = this;
/**
 * 计算不同方向的 poptip 在目标盒子上的位置，配置 POPTIP_STYLE 达到需要的 样式效果
 * @param position PoptipPosition
 * @returns { x: number, y: number }
 */
export function getPositionXY(clientX, clientY, target, position, arrowPointAtCenter, follow) {
    if (arrowPointAtCenter === void 0) { arrowPointAtCenter = false; }
    if (follow === void 0) { follow = false; }
    if (follow)
        return [clientX, clientY];
    // @ts-ignore
    var _a = target.getBoundingClientRect(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    switch (position) {
        case 'top':
            return arrowPointAtCenter ? [x + width / 2, y] : [clientX, y];
        case 'left':
            return arrowPointAtCenter ? [x, y + height / 2] : [x, clientY];
        case 'bottom':
            return arrowPointAtCenter ? [x + width / 2, y + height] : [clientX, y + height];
        case 'right':
            return arrowPointAtCenter ? [x + width, y + height / 2] : [x + width, clientY];
        case 'top-right':
        case 'right-top':
            return [x + width, y];
        case 'left-bottom':
        case 'bottom-left':
            return [x, y + height];
        case 'right-bottom':
        case 'bottom-right':
            return [x + width, y + height];
        case 'top-left':
        case 'left-top':
        default:
            return [x, y];
    }
}
var getSingleTon = function (fn) {
    var instance;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!instance)
            instance = fn.apply(_this, args);
        return instance;
    };
};
function createElement(id) {
    var div = id && document.getElementById(id);
    if (!div) {
        div = document.createElement('div');
        div.setAttribute('id', id);
        document.body.appendChild(div);
    }
    return div;
}
/**
 * 获取全局唯一的 dom 元素
 */
export function getSingleTonElement(id) {
    var element = getSingleTon(createElement)(id);
    return element;
}
//# sourceMappingURL=utils.js.map