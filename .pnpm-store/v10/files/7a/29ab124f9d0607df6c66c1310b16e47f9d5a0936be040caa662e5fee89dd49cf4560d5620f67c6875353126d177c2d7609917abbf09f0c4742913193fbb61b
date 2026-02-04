import esbuild, { PartialMessage } from '@umijs/bundler-utils/compiled/esbuild';
export declare const lessLoader: (opts: {
    cwd: string;
    lessOptions?: Less.Options;
}) => esbuild.Plugin;
/** Recursively get .less/.css imports from file */
export declare const getLessImports: (filePath: string) => string[];
/** Convert less error into esbuild error */
export declare const convertLessError: (error: Less.RenderError) => PartialMessage;
