import type { ILintArgs, ILinterOpts } from '../types';
/**
 * base linter
 */
export default class BaseLinter {
    /**
     * linter package name
     */
    linter: string;
    /**
     * paths for linter
     */
    paths: Partial<ILinterOpts>;
    constructor({ cwd }: ILinterOpts);
    /**
     * get bin file path for current linter
     */
    getBinPath(): string;
    /**
     * get linter fork args
     */
    getRunArgs(args: ILintArgs): string[];
    /**
     * execute linter
     */
    run(args: ILintArgs): void;
}
