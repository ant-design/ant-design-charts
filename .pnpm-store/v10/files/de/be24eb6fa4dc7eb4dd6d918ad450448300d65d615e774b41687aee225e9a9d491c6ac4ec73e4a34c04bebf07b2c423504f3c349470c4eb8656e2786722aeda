export interface IMock {
    method: string;
    path: string;
    handler: Function;
    file?: string;
}
export declare function getMockData(opts: {
    cwd: string;
    mockConfig: {
        exclude?: string[];
        include?: string[];
    };
}): Record<string, IMock>;
