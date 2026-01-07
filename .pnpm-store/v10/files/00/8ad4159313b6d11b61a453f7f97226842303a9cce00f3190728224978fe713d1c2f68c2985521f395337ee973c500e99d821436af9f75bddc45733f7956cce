declare enum ImportType {
    import = "import",
    dynamicImport = "dynamicImport",
    export = "export"
}
interface Dep {
    url: string;
    importType: ImportType;
    specifiers?: 'namespace' | string[];
}
export declare function scanContent(opts: {
    content: string;
    needDepSpecifier?: boolean;
}): Promise<{
    deps: Dep[];
}>;
export declare function getContent(path: string): Promise<string>;
export declare function createResolver(opts: {
    alias: any;
}): {
    resolve: (context: string, path: string) => Promise<string>;
};
export declare function scan(opts: {
    entry: string;
    externals: any;
    resolver: any;
}): Promise<Record<string, {
    version: string;
    matches: string[];
    subpaths: string[];
    external?: boolean | undefined;
}>>;
export {};
