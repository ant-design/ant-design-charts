import type { GitLogParams, GitCommitParams, GitTagParams, Params } from './types.js';
/**
 * Wrapper around Git CLI.
 */
export declare class GitClient {
    readonly cwd: string;
    private readonly debug;
    constructor(cwd: string, debug?: ((log: string[]) => void) | false);
    private formatArgs;
    /**
     * Get raw commits stream.
     * @param params
     * @param params.path - Read commits from specific path.
     * @param params.from - Start commits range.
     * @param params.to - End commits range.
     * @param params.format - Commits format.
     * @yields Raw commits data.
     */
    getRawCommits(params?: GitLogParams & Params): AsyncGenerator<string, void, unknown>;
    /**
     * Get tags stream.
     * @param params - Additional git params.
     * @yields Tags
     */
    getTags(params?: Params): AsyncGenerator<string, void, unknown>;
    /**
     * Get last tag.
     * @param params - Additional git params.
     * @returns Last tag, `null` if not found.
     */
    getLastTag(params?: Params): Promise<string | null>;
    /**
     * Check file is ignored via .gitignore.
     * @param file - Path to target file.
     * @param params - Additional git params.
     * @returns Boolean value.
     */
    checkIgnore(file: string, params?: Params): Promise<boolean>;
    /**
     * Add files to git index.
     * @param files - Files to stage.
     * @param params - Additional git params.
     */
    add(files: string | string[], params?: Params): Promise<void>;
    /**
     * Commit changes.
     * @param params
     * @param params.verify
     * @param params.sign
     * @param params.files
     * @param params.message
     */
    commit(params: GitCommitParams & Params): Promise<void>;
    /**
     * Create a tag for the current commit.
     * @param params
     * @param params.sign
     * @param params.name
     * @param params.message
     */
    tag(params: GitTagParams & Params): Promise<void>;
    /**
     * Get current branch name.
     * @param params - Additional git params.
     * @returns Current branch name.
     */
    getCurrentBranch(params?: Params): Promise<string>;
    /**
     * Push changes to remote.
     * @param branch
     * @param params - Additional git params.
     */
    push(branch: string, params?: Params): Promise<void>;
}
//# sourceMappingURL=GitClient.d.ts.map