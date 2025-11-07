/* eslint-disable @typescript-eslint/no-misused-promises */
import { spawn as spawnChild } from 'child_process';
/**
 * Catch process error.
 * @param child
 * @returns Process error.
 */
function catchProcessError(child) {
    return new Promise((resolve) => {
        let stderr = '';
        let error = null;
        child.stderr.on('data', (chunk) => {
            stderr += chunk.toString();
        });
        child.on('error', (err) => {
            error = err;
        });
        child.on('close', () => {
            if (stderr) {
                error = new Error(stderr);
            }
            resolve(error);
        });
    });
}
/**
 * Spawn child process and return stdout stream.
 * @param cmd
 * @param args
 * @param options
 * @yields Stdout chunks.
 */
export async function* stdoutSpawn(cmd, args, options) {
    const child = spawnChild(cmd, args, options);
    const errorPromise = catchProcessError(child);
    yield* child.stdout;
    const error = await errorPromise;
    if (error) {
        throw error;
    }
}
/**
 * Spawn child process.
 * @param cmd
 * @param args
 * @param options
 * @returns Process output.
 */
export async function spawn(cmd, args, options) {
    const stdout = stdoutSpawn(cmd, args, options);
    let chunk;
    const output = [];
    for await (chunk of stdout) {
        output.push(chunk);
    }
    return Buffer.concat(output);
}
/**
 * Split stream by separator.
 * @param stream
 * @param separator
 * @yields String chunks.
 */
export async function* splitStream(stream, separator) {
    let chunk;
    let payload;
    let buffer = '';
    for await (chunk of stream) {
        buffer += chunk.toString();
        if (buffer.includes(separator)) {
            payload = buffer.split(separator);
            buffer = payload.pop() || '';
            yield* payload;
        }
    }
    if (buffer) {
        yield buffer;
    }
}
/**
 * Format key-value pair for cli arguments.
 * @param key
 * @param value
 * @returns Formatted key-value pair.
 */
function formatKeyValue(key, value) {
    return `${key.length === 1 ? '-' : '--'}${key.replace(/[A-Z]/g, '-$&').toLowerCase()}${value ? `=${value}` : ''}`;
}
/**
 * Format object params for cli arguments.
 * @param params
 * @returns Formatted params.
 */
function formatParams(params) {
    const args = [];
    let key;
    let value;
    let arrayValue;
    for (key in params) {
        value = params[key];
        if (value === true) {
            args.push(formatKeyValue(key));
        }
        else if (value === false) {
            args.push(formatKeyValue(`no-${key}`));
        }
        else if (Array.isArray(value)) {
            for (arrayValue of value) {
                args.push(formatKeyValue(key, arrayValue));
            }
        }
        else if (value) {
            args.push(formatKeyValue(key, value));
        }
    }
    return args;
}
/**
 * Format arguments.
 * @param args
 * @returns Formatted arguments.
 */
export function formatArgs(...args) {
    const finalArgs = [];
    for (const arg of args) {
        if (!arg) {
            continue;
        }
        if (Array.isArray(arg)) {
            finalArgs.push(...formatArgs(...arg));
        }
        else if (typeof arg === 'object' && !(arg instanceof RegExp)) {
            finalArgs.push(...formatParams(arg));
        }
        else {
            finalArgs.push(String(arg));
        }
    }
    return finalArgs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEO0FBQzNELE9BQU8sRUFHTCxLQUFLLElBQUksVUFBVSxFQUNwQixNQUFNLGVBQWUsQ0FBQTtBQVF0Qjs7OztHQUlHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxLQUFxQztJQUM5RCxPQUFPLElBQUksT0FBTyxDQUFlLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDM0MsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2YsSUFBSSxLQUFLLEdBQWlCLElBQUksQ0FBQTtRQUU5QixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUMvQixLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDckIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQzFCO1lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQVcsRUFBRSxJQUFjLEVBQUUsT0FBa0M7SUFDaEcsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDNUMs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