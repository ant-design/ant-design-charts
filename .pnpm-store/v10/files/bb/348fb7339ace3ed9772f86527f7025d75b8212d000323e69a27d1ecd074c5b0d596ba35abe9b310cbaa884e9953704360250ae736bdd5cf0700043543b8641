export interface IThemeComponent {
    specifier: string;
    source: string;
}
export interface IThemeLoadResult {
    /**
     * theme package name
     */
    name: string;
    /**
     * theme package path
     */
    path: string;
    /**
     * locale text data
     */
    locales: {
        [key: string]: Record<string, string>;
    };
    /**
     * builtin components
     */
    builtins: {
        [key: string]: IThemeComponent;
    };
    /**
     * slots components
     */
    slots: {
        [key: string]: IThemeComponent;
    };
    /**
     * layout components
     */
    layouts: {
        /**
         * apply for all routes
         */
        GlobalLayout?: IThemeComponent;
        /**
         * apply for doc routes
         */
        DocLayout?: IThemeComponent;
        /**
         * apply for demo routes /~demos/:id
         */
        DemoLayout?: IThemeComponent;
    } & Record<string, IThemeComponent>;
    /**
     * theme plugin path
     */
    plugin?: string;
}
declare const _default: (dir: string) => IThemeLoadResult;
export default _default;
