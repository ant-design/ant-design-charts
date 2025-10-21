import type { OpenFileOption, ProjectDependencies, ProjectFiles, UiThemeOption, UiViewOption } from './interfaces';
export interface FsDiff {
    create: {
        [path: string]: string;
    };
    destroy: string[];
}
export declare class VM {
    private _rdc;
    constructor(port: MessagePort, config: {
        previewOrigin?: string;
    });
    /**
     * Apply batch updates to the project files in one call.
     */
    applyFsDiff(diff: FsDiff): Promise<null>;
    /**
     * Get the project’s defined dependencies.
     *
     * In EngineBlock projects, version numbers represent the resolved dependency versions.
     * In WebContainers-based projects, returns data from the project’s `package.json` without resolving installed version numbers.
     */
    getDependencies(): Promise<ProjectDependencies | null>;
    /**
     * Get a snapshot of the project files and their content.
     */
    getFsSnapshot(): Promise<ProjectFiles | null>;
    editor: {
        /**
         * Open one of several files in tabs and/or split panes.
         *
         * @since 1.7.0 Added support for opening multiple files
         */
        openFile: (path: OpenFileOption) => Promise<null>;
        /**
         * Set a project file as the currently selected file.
         *
         * - This may update the highlighted file in the file explorer,
         *   and the currently open and/or focused editor tab.
         * - It will _not_ open a new editor tab if the provided path does not
         *   match a currently open tab. See `vm.editor.openFile` to open files.
         *
         * @since 1.7.0
         * @experimental
         */
        setCurrentFile: (path: string) => Promise<null>;
        /**
         * Change the color theme
         *
         * @since 1.7.0
         */
        setTheme: (theme: UiThemeOption) => Promise<null>;
        /**
         * Change the display mode of the project:
         *
         * - `default`: show the editor and preview pane
         * - `editor`: show the editor pane only
         * - `preview`: show the preview pane only
         *
         * @since 1.7.0
         */
        setView: (view: UiViewOption) => Promise<null>;
        /**
         * Change the display mode of the sidebar:
         *
         * - `true`: show the sidebar
         * - `false`: hide the sidebar
         *
         * @since 1.7.0
         */
        showSidebar: (visible?: boolean) => Promise<null>;
    };
    preview: {
        /**
         * The origin (protocol and domain) of the preview iframe.
         *
         * In WebContainers-based projects, the origin will always be `null`;
         * try using `vm.preview.getUrl` instead.
         *
         * @see https://developer.stackblitz.com/guides/user-guide/available-environments
         */
        origin: string | null;
        /**
         * Get the current preview URL.
         *
         * In both and EngineBlock and WebContainers-based projects, the preview URL
         * may not reflect the exact path of the current page, after user navigation.
         *
         * In WebContainers-based projects, the preview URL will be `null` initially,
         * and until the project starts a web server.
         *
         * @since 1.7.0
         * @experimental
         */
        getUrl: () => Promise<string | null>;
        /**
         * Change the path of the preview URL.
         *
         * In WebContainers-based projects, this will be ignored if there is no
         * currently running web server.
         *
         * @since 1.7.0
         * @experimental
         */
        setUrl: (path?: string) => Promise<null>;
    };
}
