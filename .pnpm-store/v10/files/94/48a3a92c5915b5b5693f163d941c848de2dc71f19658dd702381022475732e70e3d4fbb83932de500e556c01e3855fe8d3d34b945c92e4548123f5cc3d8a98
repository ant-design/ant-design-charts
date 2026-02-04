import { type CSSRuleSelectorTransformer } from './index';
interface Options {
    ignore?: string[];
    remove?: string[];
}
type SelectorBasedStrategy<ExtraOptions = unknown> = (selectors: string | string[], options?: Options & ExtraOptions) => CSSRuleSelectorTransformer;
/**
 * Isolates the TailwindCSS preflight styles inside of the container (assuming all the TailwindCSS is inside of this container)
 *
 * @param containerSelectors
 * @param options
 * @param options.ignore - list of preflight CSS selectors to ignore (don't isolate) - these will not be affected by the transformation
 * @param options.remove - list of preflight CSS selectors to remove from the final CSS - use it if you have any specific conflicts and really want to remove some preflight rules
 * @param options.rootStyles - 'move to container' (default) - moves the root styles to the container styles (by simply replacing the selector), 'add :where' - adds ` :where` to the root selector so styles are still in roots, but only matching items would be affected
 *
 * @link https://www.npmjs.com/package/tailwindcss-scoped-preflight#isolate-inside-of-container (example)
 */
export declare const isolateInsideOfContainer: SelectorBasedStrategy<{
    except?: string;
    rootStyles?: 'move to container' | 'add :where';
}>;
/**
 * Isolates the TailwindCSS preflight styles outside of the container (assuming no TailwindCSS inside of it)
 * @param containerSelectors
 * @param options
 * @param options.ignore - list of preflight CSS selectors to ignore (don't isolate) - these will not be affected by the transformation
 * @param options.remove - list of preflight CSS selectors to remove from the final CSS - use it if you have any specific conflicts and really want to remove some preflight rules
 *
 * @link https://www.npmjs.com/package/tailwindcss-scoped-preflight#isolate-outside-of-container (example)
 */
export declare const isolateOutsideOfContainer: SelectorBasedStrategy<{
    plus?: string;
}>;
/**
 * @deprecated Use `isolateInsideOfContainer` with rootStyles option set to 'add :where'
 * @description Isolates the TailwindCSS preflight styles within the component selector (not inside of the container, but immediately)
 * @param componentSelectors
 * @param options
 * @param options.ignore - list of preflight CSS selectors to ignore (don't isolate) - these will not be affected by the transformation
 * @param options.remove - list of preflight CSS selectors to remove from the final CSS - use it if you have any specific conflicts and really want to remove some preflight rules
 *
 * @link https://www.npmjs.com/package/tailwindcss-scoped-preflight#update-your-tailwind-css-configuration (example)
 */
export declare const isolateForComponents: SelectorBasedStrategy;
export {};
