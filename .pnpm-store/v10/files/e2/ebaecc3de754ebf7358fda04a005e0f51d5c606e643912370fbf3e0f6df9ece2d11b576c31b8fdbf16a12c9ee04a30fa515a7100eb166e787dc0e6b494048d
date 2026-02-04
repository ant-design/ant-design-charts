import type { IParsedBlockAsset } from "../../../assetParsers/block";
import type { ILocalesConfig, IRouteMeta } from "../../../client/theme-api/types";
import type { IApi, IDumiConfig, IDumiTechStack } from "../../../types";
import { type ResolveOptions } from 'enhanced-resolve';
import type { IRoute } from 'umi';
import type { Data } from 'vfile';
declare module 'hast' {
    interface Element {
        JSXAttributes?: Array<{
            type: 'JSXAttribute';
            name: string;
            value: string;
        } | {
            type: 'JSXSpreadAttribute';
            argument: string;
        }>;
    }
}
declare module 'vfile' {
    interface DataMap {
        demos: ({
            id: string;
            component: string;
            asset: IParsedBlockAsset['asset'];
            resolveMap: IParsedBlockAsset['resolveMap'];
            renderOpts: {
                type?: string;
                rendererPath?: string;
                preflightPath?: string;
                compilePath?: string;
            };
        } | {
            id: string;
            component: string;
            renderOpts: {
                type?: string;
                rendererPath?: string;
                preflightPath?: string;
                compilePath?: string;
            };
        })[];
        texts: IRouteMeta['texts'];
        frontmatter: IRouteMeta['frontmatter'];
        toc: IRouteMeta['toc'];
        embeds: string[];
    }
}
export interface IMdTransformerOptions {
    cwd: string;
    fileAbsPath: string;
    alias: ResolveOptions['alias'];
    parentAbsPath?: string;
    techStacks: IDumiTechStack[];
    resolve: IDumiConfig['resolve'];
    extraRemarkPlugins?: IDumiConfig['extraRemarkPlugins'];
    extraRehypePlugins?: IDumiConfig['extraRehypePlugins'];
    routes: Record<string, IRoute>;
    locales: ILocalesConfig;
    pkg: IApi['pkg'];
}
export interface IMdTransformerResult {
    content: string;
    meta: Data;
}
declare const _default: (raw: string, opts: IMdTransformerOptions) => Promise<{
    content: string;
    meta: Data;
}>;
export default _default;
