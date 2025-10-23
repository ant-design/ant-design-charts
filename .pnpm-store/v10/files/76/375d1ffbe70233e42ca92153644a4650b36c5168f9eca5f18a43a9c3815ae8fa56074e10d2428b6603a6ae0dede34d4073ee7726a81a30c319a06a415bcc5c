import { IApi } from '../../types';
export declare abstract class MFSUUtilBase {
    readonly api: IApi;
    protected mfsuCacheBase: string;
    protected cliName: string;
    constructor(api: IApi);
    abstract jsonFilePath(): string;
    abstract getCacheJSON(): string;
    abstract listDeps(): void;
    abstract build(force?: boolean): Promise<void>;
    prepare(): Promise<any>;
    removeCacheJSON(): void;
    clearAllCache(): void;
    printDeps(deps: any): void;
}
export declare class EagerUtil extends MFSUUtilBase {
    jsonFilePath(): string;
    getCacheJSON(): any;
    build(): Promise<void>;
    listDeps(): void;
}
export declare class NormalUtil extends MFSUUtilBase {
    jsonFilePath(): string;
    getCacheJSON(): any;
    listDeps(): void;
    build(force: boolean): Promise<void>;
    private normalBuild;
}
