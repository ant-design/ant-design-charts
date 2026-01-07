import { prompts } from '@umijs/utils';
import { IApi } from '../../types';
import { type IArgsPage } from './utils';
declare const _default: (api: IApi) => void;
export default _default;
export declare class PageGenerator {
    readonly options: {
        args: IArgsPage;
        absPagesPath: string;
        appCwd: string;
        importSource?: string;
        useStyledComponents?: boolean;
    };
    private isDirMode;
    private dir;
    private name;
    private importSource;
    private needEnsureDirMode;
    private prompts;
    private paths;
    constructor(options: {
        args: IArgsPage;
        absPagesPath: string;
        appCwd: string;
        importSource?: string;
        useStyledComponents?: boolean;
    });
    run(): Promise<void>;
    runInteractiveMode(): Promise<void>;
    setPrompter(p: typeof prompts): void;
    getDirMode(): boolean;
    private setPath;
    private ensureName;
    private ensureDirMode;
    private fileModeFileExample;
    private dirModeFileExample;
    private fileModeRun;
    private dirModeRun;
}
