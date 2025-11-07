import type { IApi } from '../types';
/**
 * import/export/await-import/require match regular expression
 *
 * WHY: REGEXP
 * ref: https://github.com/umijs/umi-next/pull/230
 *
 * TODO: more choices
 * 1. fork es-module-lexer, support jsx
 * 2. use sourcemap of esbuild
 */
export declare const IEAR_REG_EXP: RegExp;
/**
 * transform absolute import/export/await-import/require path
 * @note  use to vite can deps:
 *        transform to relative path for .umi dir imports
 *        prefix `@fs` for node_modules imports
 */
export default function transformIEAR({ content, path }: {
    content: string;
    path: string;
}, api: IApi): string;
