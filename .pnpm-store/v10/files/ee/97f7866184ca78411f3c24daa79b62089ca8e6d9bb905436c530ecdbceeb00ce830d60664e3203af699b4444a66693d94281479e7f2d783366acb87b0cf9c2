import isNil from './is-nil';
import isArraylike from './is-array-like';
export default function size(o) {
    if (isNil(o)) {
        return 0;
    }
    if (isArraylike(o)) {
        return o.length;
    }
    return Object.keys(o).length;
}
//# sourceMappingURL=size.js.map