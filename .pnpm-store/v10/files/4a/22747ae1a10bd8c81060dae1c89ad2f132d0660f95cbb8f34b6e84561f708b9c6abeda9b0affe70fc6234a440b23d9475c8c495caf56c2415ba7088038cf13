import { identity } from '../utils/helper';
/**
 * Map transform by function.
 */
export const Map = (options) => {
    const { callback = identity } = options;
    return (data) => (Array.isArray(data) ? data.map(callback) : data);
};
Map.props = {};
//# sourceMappingURL=map.js.map