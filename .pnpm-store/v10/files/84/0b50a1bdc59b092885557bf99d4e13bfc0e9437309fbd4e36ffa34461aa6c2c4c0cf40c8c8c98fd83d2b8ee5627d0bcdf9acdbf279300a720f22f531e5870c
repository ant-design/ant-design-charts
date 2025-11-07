interface PropsFilterInput {
    selectorSet: Set<string>;
    property: string;
    value: any;
}
export type CSSRuleSelectorTransformer = (info: {
    ruleSelector: string;
}) => string;
type ModifyResult = string | null | undefined;
type ModifyStylesHook = (input: PropsFilterInput) => ModifyResult;
interface PluginOptions {
    isolationStrategy: CSSRuleSelectorTransformer;
    /** @deprecated prefer using modifyPreflightStyles */
    propsFilter?: (input: PropsFilterInput) => boolean | undefined;
    modifyPreflightStyles?: Record<string, Record<string, ModifyResult>> | ModifyStylesHook;
}
/**
 * TailwindCSS plugin to scope the preflight styles
 * @param isolationStrategy - function to transform the preflight CSS selectors,
 *  import {@link https://www.npmjs.com/package/tailwindcss-scoped-preflight#isolate-inside-of-container isolateInsideOfContainer},
 *  {@link https://www.npmjs.com/package/tailwindcss-scoped-preflight#isolate-outside-of-container isolateOutsideOfContainer},
 *  {@link https://www.npmjs.com/package/tailwindcss-scoped-preflight#update-your-tailwind-css-configuration isolateForComponents} or write {@link https://www.npmjs.com/package/tailwindcss-scoped-preflight#your-owncustom-isolation-strategy your own}
 * @param propsFilter - function to filter the preflight CSS properties and values, return false to remove the property. Any other value (including true and undefined) will leave the prop intact
 * @param modifyPreflightStyles - function to modify the preflight CSS properties and their values, return null to remove the property. Any other returned value will be used as a new value for the property. If you don't want to change it - return the old value (provided in argument object as `value`).
 * @link https://www.npmjs.com/package/tailwindcss-scoped-preflight (documentation)
 */
export declare const scopedPreflightStyles: {
    (options: PluginOptions): {
        handler: import("tailwindcss/types/config.js").PluginCreator;
        config?: Partial<import("tailwindcss/types/config.js").Config>;
    };
    __isOptionsFunction: true;
};
export * from './strategies';
