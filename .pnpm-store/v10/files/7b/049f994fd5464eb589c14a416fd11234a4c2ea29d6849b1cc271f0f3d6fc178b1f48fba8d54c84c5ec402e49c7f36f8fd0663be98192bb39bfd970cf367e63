import path from 'path';
/**
 * Trying to add 'conventional-changelog-' prefix to preset name if it is a shorthand.
 * @param preset - Absolute path, package name or shorthand preset name.
 * @returns Variants of preset names.
 */
function resolvePresetNameVariants(preset) {
    if (path.isAbsolute(preset)) {
        return [preset];
    }
    let scope = '';
    let name = preset.toLocaleLowerCase();
    if (preset.startsWith('@')) {
        const parts = preset.split('/');
        scope = `${parts.shift()}/`;
        if (scope === '@conventional-changelog/') {
            return [preset];
        }
        name = parts.join('/');
    }
    if (!name.startsWith('conventional-changelog-')) {
        name = `conventional-changelog-${name}`;
    }
    const altPreset = `${scope}${name}`;
    if (altPreset !== preset) {
        return [altPreset, preset];
    }
    return [preset];
}
/**
 * Gets default export from CommonJS or ES module.
 * @param module
 * @returns Default export.
 */
function getModuleDefaultExport(module) {
    if (('__esModule' in module || Object.getPrototypeOf(module) === null) && 'default' in module) {
        return module.default;
    }
    return module;
}
/**
 * Loads module with fallbacks.
 * @param moduleLoader - Function that loads module.
 * @param variants - Variants of module name to try.
 * @returns Loaded module.
 */
async function loadWithFallbacks(moduleLoader, variants) {
    let error = null;
    for (const variant of variants) {
        try {
            return getModuleDefaultExport(await moduleLoader(variant));
        }
        catch (err) {
            if (!error) {
                error = err;
            }
        }
    }
    throw error;
}
/**
 * Creates preset loader.
 * @param moduleLoader - Function that loads module.
 * @returns Function that loads preset.
 */
export function createPresetLoader(moduleLoader) {
    return async function loadPreset(presetOrParams) {
        let preset = '';
        let params = null;
        if (typeof presetOrParams === 'string') {
            preset = presetOrParams;
        }
        else if (typeof presetOrParams === 'object' && typeof presetOrParams.name === 'string') {
            preset = presetOrParams.name;
            params = presetOrParams;
        }
        else {
            throw Error('Preset must be string or object with property `name`');
        }
        const presetNameVariants = resolvePresetNameVariants(preset);
        let createPreset = null;
        try {
            createPreset = await loadWithFallbacks(moduleLoader, presetNameVariants);
        }
        catch (err) {
            throw new Error(`Unable to load the "${preset}" preset. Please make sure it's installed.`, {
                cause: err
            });
        }
        if (typeof createPreset !== 'function') {
            throw new Error(`The "${preset}" preset does not export a function. Maybe you are using an old version of the preset. Please upgrade.`);
        }
        return params
            ? await createPreset(params)
            : await createPreset();
    };
}
/**
 * Load and create preset.
 */
export const loadPreset = createPresetLoader(preset => import(preset));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3ByZXNldExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFXdkI7Ozs7R0FJRztBQUNILFNBQVMseUJBQXlCLENBQUMsTUFBYztJQUMvQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ2hCO0lBRUQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO0lBQ2QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFFckMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFL0IsS0FBSyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUE7UUFFM0IsSUFBSSxLQUFLLEtBQUssMEJBQTBCLEVBQUU7WUFDeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2hCO1FBRUQsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDdkI7SUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1FBQy9DLElBQUksR0FBRywwQkFBMEIsSUFBSSxFQUFFLENBQUE7S0FDeEM7SUFFRCxNQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQTtJQUVuQyxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDeEIsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUMzQjtJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNqQixDQUFDO0FBRUQ7Ozs7R0FJ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