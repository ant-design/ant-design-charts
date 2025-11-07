/**
 * <zh/> 解析尺寸配置
 *
 * <en/> Parse size configuration
 * @param size - <zh/> 尺寸配置 | <en/> size configuration
 * @returns <zh/> 标准尺寸格式 | <en/> standard size format
 */
export function parseSize(size = 0) {
    if (typeof size === 'number')
        return [size, size, size];
    const [x, y = x, z = x] = size;
    return [x, y, z];
}
//# sourceMappingURL=size.js.map