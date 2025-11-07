/// <reference types="node" resolution-mode="require"/>
/**
 * Create a virtual file from a description.
 *
 * This is like `VFile`, but it accepts a file path instead of file cotnents.
 *
 * If `options` is a string, URL, or buffer, it’s used as the path.
 * Otherwise, if it’s a file, that’s returned instead.
 * Otherwise, the options are passed through to `new VFile()`.
 *
 * @param {Compatible | null | undefined} [description]
 *   Path to file, file options, or file itself.
 * @returns {VFile}
 *   Given file or new file.
 */
export function toVFile(description?: Compatible | null | undefined): VFile
export namespace toVFile {
  export {readSync}
  export {writeSync}
  export {read}
  export {write}
}
/**
 * Create a virtual file and read it in, synchronously.
 *
 * @param {Compatible} description
 *   Path to file, file options, or file itself.
 * @param {BufferEncoding | ReadOptions | null | undefined} [options]
 *   Encoding to use or Node.JS read options.
 * @returns {VFile}
 *   Given file or new file.
 */
export function readSync(
  description: Compatible,
  options?: BufferEncoding | ReadOptions | null | undefined
): VFile
/**
 * Create a virtual file and write it, synchronously.
 *
 * @param {Compatible} description
 *   Path to file, file options, or file itself.
 * @param {BufferEncoding | WriteOptions | null | undefined} [options]
 *   Encoding to use or Node.JS write options.
 * @returns {VFile}
 *   Given file or new file.
 */
export function writeSync(
  description: Compatible,
  options?: BufferEncoding | WriteOptions | null | undefined
): VFile
export function read(
  description: Compatible,
  options: BufferEncoding | ReadOptions | null | undefined,
  callback: Callback
): void
export function read(description: Compatible, callback: Callback): void
export function read(
  description: Compatible,
  options?: BufferEncoding | ReadOptions | null | undefined
): Promise<VFile>
export function write(
  description: Compatible,
  options: BufferEncoding | WriteOptions | null | undefined,
  callback: Callback
): void
export function write(description: Compatible, callback: Callback): void
export function write(
  description: Compatible,
  options?: BufferEncoding | WriteOptions | null | undefined
): Promise<VFile>
export type Value = import('vfile').VFileValue
export type Options = import('vfile').VFileOptions
/**
 * Encodings supported by the buffer class.
 *
 * This is a copy of the types from Node and `VFile`.
 */
export type BufferEncoding = import('vfile').BufferEncoding
/**
 * Configuration for `fs.readFile`.
 */
export type ReadOptions = {
  /**
   * Encoding to read file as, will turn `file.value` into a string if passed.
   */
  encoding?: BufferEncoding | null | undefined
  /**
   * File system flags to use.
   */
  flag?: string | undefined
}
/**
 * Configuration for `fs.writeFile`.
 */
export type WriteOptions = {
  /**
   * Encoding to write file as.
   */
  encoding?: BufferEncoding | null | undefined
  /**
   * File mode (permission and sticky bits) if the file was newly created.
   */
  mode?: number | string | undefined
  /**
   * File system flags to use.
   */
  flag?: string | undefined
}
/**
 * URL to file or path to file.
 *
 * > 👉 **Note**: `Value` is used here because it’s a smarter `Buffer`
 */
export type Path = URL | Value
/**
 * URL to file, path to file, options for file, or actual file.
 */
export type Compatible = Path | Options | VFile
/**
 * Callback called after reading or writing a file.
 */
export type Callback = (
  error: NodeJS.ErrnoException | null,
  file: VFile | null | undefined
) => any
import {VFile} from 'vfile'
import {URL} from 'url'
