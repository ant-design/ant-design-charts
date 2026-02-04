/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { type SpawnOptionsWithoutStdio } from 'child_process';
import type { Arg } from './types.js';
/**
 * Spawn child process and return stdout stream.
 * @param cmd
 * @param args
 * @param options
 * @yields Stdout chunks.
 */
export declare function stdoutSpawn(cmd: string, args: string[], options?: SpawnOptionsWithoutStdio): AsyncGenerator<Buffer, void, undefined>;
/**
 * Spawn child process.
 * @param cmd
 * @param args
 * @param options
 * @returns Process output.
 */
export declare function spawn(cmd: string, args: string[], options?: SpawnOptionsWithoutStdio): Promise<Buffer>;
/**
 * Split stream by separator.
 * @param stream
 * @param separator
 * @yields String chunks.
 */
export declare function splitStream(stream: AsyncIterable<string | Buffer>, separator: string): AsyncGenerator<string, void, undefined>;
/**
 * Format arguments.
 * @param args
 * @returns Formatted arguments.
 */
export declare function formatArgs(...args: Arg[]): string[];
//# sourceMappingURL=utils.d.ts.map