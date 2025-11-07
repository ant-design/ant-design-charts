import { isNumber } from '@antv/util';
export function parseSize(size) {
    if (!size)
        return [0, 0, 0];
    if (isNumber(size))
        return [size, size, size];
    else if (size.length === 0)
        return [0, 0, 0];
    const [x, y = x, z = x] = size;
    return [x, y, z];
}
//# sourceMappingURL=size.js.map