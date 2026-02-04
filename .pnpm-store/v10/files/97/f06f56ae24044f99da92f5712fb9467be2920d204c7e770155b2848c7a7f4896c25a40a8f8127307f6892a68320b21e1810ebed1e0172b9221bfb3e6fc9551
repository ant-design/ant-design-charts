/* IMPORT */
import fs from 'node:fs';
import { promisify } from 'node:util';
import { attemptifyAsync, attemptifySync } from 'stubborn-utils';
import { retryifyAsync, retryifySync } from 'stubborn-utils';
import { ATTEMPTIFY_CHANGE_ERROR_OPTIONS, ATTEMPTIFY_NOOP_OPTIONS, RETRYIFY_OPTIONS } from './constants.js';
/* MAIN */
const FS = {
    attempt: {
        /* ASYNC */
        chmod: attemptifyAsync(promisify(fs.chmod), ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
        chown: attemptifyAsync(promisify(fs.chown), ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
        close: attemptifyAsync(promisify(fs.close), ATTEMPTIFY_NOOP_OPTIONS),
        fsync: attemptifyAsync(promisify(fs.fsync), ATTEMPTIFY_NOOP_OPTIONS),
        mkdir: attemptifyAsync(promisify(fs.mkdir), ATTEMPTIFY_NOOP_OPTIONS),
        realpath: attemptifyAsync(promisify(fs.realpath), ATTEMPTIFY_NOOP_OPTIONS),
        stat: attemptifyAsync(promisify(fs.stat), ATTEMPTIFY_NOOP_OPTIONS),
        unlink: attemptifyAsync(promisify(fs.unlink), ATTEMPTIFY_NOOP_OPTIONS),
        /* SYNC */
        chmodSync: attemptifySync(fs.chmodSync, ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
        chownSync: attemptifySync(fs.chownSync, ATTEMPTIFY_CHANGE_ERROR_OPTIONS),
        closeSync: attemptifySync(fs.closeSync, ATTEMPTIFY_NOOP_OPTIONS),
        existsSync: attemptifySync(fs.existsSync, ATTEMPTIFY_NOOP_OPTIONS),
        fsyncSync: attemptifySync(fs.fsync, ATTEMPTIFY_NOOP_OPTIONS),
        mkdirSync: attemptifySync(fs.mkdirSync, ATTEMPTIFY_NOOP_OPTIONS),
        realpathSync: attemptifySync(fs.realpathSync, ATTEMPTIFY_NOOP_OPTIONS),
        statSync: attemptifySync(fs.statSync, ATTEMPTIFY_NOOP_OPTIONS),
        unlinkSync: attemptifySync(fs.unlinkSync, ATTEMPTIFY_NOOP_OPTIONS)
    },
    retry: {
        /* ASYNC */
        close: retryifyAsync(promisify(fs.close), RETRYIFY_OPTIONS),
        fsync: retryifyAsync(promisify(fs.fsync), RETRYIFY_OPTIONS),
        open: retryifyAsync(promisify(fs.open), RETRYIFY_OPTIONS),
        readFile: retryifyAsync(promisify(fs.readFile), RETRYIFY_OPTIONS),
        rename: retryifyAsync(promisify(fs.rename), RETRYIFY_OPTIONS),
        stat: retryifyAsync(promisify(fs.stat), RETRYIFY_OPTIONS),
        write: retryifyAsync(promisify(fs.write), RETRYIFY_OPTIONS),
        writeFile: retryifyAsync(promisify(fs.writeFile), RETRYIFY_OPTIONS),
        /* SYNC */
        closeSync: retryifySync(fs.closeSync, RETRYIFY_OPTIONS),
        fsyncSync: retryifySync(fs.fsyncSync, RETRYIFY_OPTIONS),
        openSync: retryifySync(fs.openSync, RETRYIFY_OPTIONS),
        readFileSync: retryifySync(fs.readFileSync, RETRYIFY_OPTIONS),
        renameSync: retryifySync(fs.renameSync, RETRYIFY_OPTIONS),
        statSync: retryifySync(fs.statSync, RETRYIFY_OPTIONS),
        writeSync: retryifySync(fs.writeSync, RETRYIFY_OPTIONS),
        writeFileSync: retryifySync(fs.writeFileSync, RETRYIFY_OPTIONS)
    }
};
/* EXPORT */
export default FS;
