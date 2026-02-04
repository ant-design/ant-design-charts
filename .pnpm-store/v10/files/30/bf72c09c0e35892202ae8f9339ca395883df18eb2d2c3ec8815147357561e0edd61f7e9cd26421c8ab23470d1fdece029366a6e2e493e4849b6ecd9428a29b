import type { RequestHandler } from '@umijs/bundler-utils/compiled/express';
export interface IOpts {
    base: string;
    routes: Record<string, {
        path: string;
        file: string;
        id: string;
        parentId?: string;
    }>;
    links?: Record<string, string>[];
    metas?: Record<string, string>[];
    styles?: (Record<string, string> | string)[];
    favicons?: string[];
    title?: string;
    headScripts?: (Record<string, string> | string)[];
    scripts?: (Record<string, string> | string)[];
    mountElementId?: string;
    esmScript?: boolean;
    modifyHTML?: (html: string, args: {
        path?: string;
    }) => Promise<string>;
    historyType?: 'hash' | 'browser';
}
export declare function getMarkup(opts: Omit<IOpts, 'routes'> & {
    path?: string;
}): Promise<string>;
export declare function createRequestHandler(opts: IOpts): RequestHandler;
