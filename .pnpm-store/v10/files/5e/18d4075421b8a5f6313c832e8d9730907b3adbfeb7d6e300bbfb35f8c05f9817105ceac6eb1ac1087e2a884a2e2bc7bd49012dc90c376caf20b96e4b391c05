import isArray from './is-array';
import isObject from './is-object';
function each(elements, func) {
    if (!elements) {
        return;
    }
    var rst;
    if (isArray(elements)) {
        for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(elements[i], i);
            if (rst === false) {
                break;
            }
        }
    }
    else if (isObject(elements)) {
        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                rst = func(elements[k], k);
                if (rst === false) {
                    break;
                }
            }
        }
    }
}
export default each;
//# sourceMappingURL=each.js.map