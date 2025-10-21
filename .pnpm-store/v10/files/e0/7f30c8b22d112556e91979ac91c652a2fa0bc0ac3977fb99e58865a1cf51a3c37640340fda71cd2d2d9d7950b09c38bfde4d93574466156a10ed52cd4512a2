import { registerSymbol } from '../utils/marker';
export const library = {};
// @todo Warn if override existing key.
export function register(key, component) {
    if (key.startsWith('symbol.'))
        registerSymbol(key.split('.').pop(), component);
    else
        Object.assign(library, { [key]: component });
}
//# sourceMappingURL=library.js.map