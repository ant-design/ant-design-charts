import { spawn, stdoutSpawn, splitStream, formatArgs } from './utils.js';
const SCISSOR = '------------------------ >8 ------------------------';
/**
 * Wrapper around Git CLI.
 */
export class GitClient {
    cwd;
    debug;
    constructor(cwd, debug = false) {
        this.cwd = cwd;
        this.debug = debug;
    }
    formatArgs(...args) {
        const finalArgs = formatArgs(...args);
        if (this.debug) {
            this.debug(finalArgs);
        }
        return finalArgs;
    }
    /**
     * Get raw commits stream.
     * @param params
     * @param params.path - Read commits from specific path.
     * @param params.from - Start commits range.
     * @param params.to - End commits range.
     * @param params.format - Commits format.
     * @yields Raw commits data.
     */
    async *getRawCommits(params = {}) {
        const { path, from = '', to = 'HEAD', format = '%B', ignore, ...restParams } = params;
        const shouldNotIgnore = ignore
            ? (chunk) => !ignore.test(chunk)
            : () => true;
        const args = this.formatArgs('log', `--format=${format}%n${SCISSOR}`, [from, to].filter(Boolean).join('..'), restParams, path && ['--', path]);
        const stdout = stdoutSpawn('git', args, {
            cwd: this.cwd
        });
        const commitsStream = splitStream(stdout, `${SCISSOR}\n`);
        let chunk;
        for await (chunk of commitsStream) {
            if (shouldNotIgnore(chunk)) {
                yield chunk;
            }
        }
    }
    /**
     * Get tags stream.
     * @param params - Additional git params.
     * @yields Tags
     */
    async *getTags(params = {}) {
        const tagRegex = /tag:\s*(.+?)[,)]/gi;
        const args = this.formatArgs('log', '--decorate', '--no-color', '--date-order', params);
        const stdout = stdoutSpawn('git', args, {
            cwd: this.cwd
        });
        let chunk;
        let matches;
        let tag;
        for await (chunk of stdout) {
            matches = chunk.toString().trim().matchAll(tagRegex);
            for ([, tag] of matches) {
                yield tag;
            }
        }
    }
    /**
     * Get last tag.
     * @param params - Additional git params.
     * @returns Last tag, `null` if not found.
     */
    async getLastTag(params = {}) {
        return (await this.getTags(params).next()).value || null;
    }
    /**
     * Check file is ignored via .gitignore.
     * @param file - Path to target file.
     * @param params - Additional git params.
     * @returns Boolean value.
     */
    async checkIgnore(file, params = {}) {
        const args = this.formatArgs('check-ignore', file, params);
        try {
            await spawn('git', args, {
                cwd: this.cwd
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    /**
     * Add files to git index.
     * @param files - Files to stage.
     * @param params - Additional git params.
     */
    async add(files, params = {}) {
        const args = this.formatArgs('add', files, params);
        await spawn('git', args, {
            cwd: this.cwd
        });
    }
    /**
     * Commit changes.
     * @param params
     * @param params.verify
     * @param params.sign
     * @param params.files
     * @param params.message
     */
    async commit(params) {
        const { verify = true, sign = false, files = [], message, ...restParams } = params;
        const args = this.formatArgs('commit', !verify && '--no-verify', sign && '-S', files, '-m', message, restParams);
        await spawn('git', args, {
            cwd: this.cwd
        });
    }
    /**
     * Create a tag for the current commit.
     * @param params
     * @param params.sign
     * @param params.name
     * @param params.message
     */
    async tag(params) {
        let { sign = false, name, message, ...restParams } = params;
        if (sign) {
            message = '';
        }
        const args = this.formatArgs('tag', sign && '-s', message && '-a', name, message && ['-m', message], restParams);
        await spawn('git', args, {
            cwd: this.cwd
        });
    }
    /**
     * Get current branch name.
     * @param params - Additional git params.
     * @returns Current branch name.
     */
    async getCurrentBranch(params = {}) {
        const args = this.formatArgs('rev-parse', '--abbrev-ref', 'HEAD', params);
        const branch = (await spawn('git', args, {
            cwd: this.cwd
        })).toString().trim();
        return branch;
    }
    /**
     * Push changes to remote.
     * @param branch
     * @param params - Additional git params.
     */
    async push(branch, params = {}) {
        const args = this.formatArgs('push', '--follow-tags', 'origin', branch, params);
        await spawn('git', args, {
            cwd: this.cwd
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0dpdENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxXQUFXLEVBQ1gsVUFBVSxFQUNYLE1BQU0sWUFBWSxDQUFBO0FBU25CLE1BQU0sT0FBTyxHQUFHLHNEQUFzRCxDQUFBO0FBRXRFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFFVDtJQUNRO0lBRm5CLFlBQ1csR0FBVyxFQUNILFFBQTJDLEtBQUs7UUFEeEQsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNILFVBQUssR0FBTCxLQUFLLENBQTJDO0lBQ2hFLENBQUM7SUFFSSxVQUFVLENBQUMsR0FBRyxJQUFXO1FBQy9CLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO1FBRXJDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDdEI7UUFFRCxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxLQUFLLENBQUEsQ0FBRSxhQUFhLENBQUMsU0FBZ0MsRUFBRTtRQUNyRCxNQUFNLEVBQ0osSUFBSSxFQUNKLElBQUksR0FBRyxFQUFFLEVBQ1QsRUFBRSxHQUFHLE1BQU0sRUFDWCxNQUFNLEdBQUcsSUFBSSxFQUNiLE1BQU0sRUFDTixHQUFHLFVBQVUsRUFDZCxHQUFHLE1BQU0sQ0FBQTtRQUNWLE1BQU0sZUFBZSxHQUFHLE1BQU07WUFDNUIsQ0FBQyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUE7UUFDZCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUMxQixL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