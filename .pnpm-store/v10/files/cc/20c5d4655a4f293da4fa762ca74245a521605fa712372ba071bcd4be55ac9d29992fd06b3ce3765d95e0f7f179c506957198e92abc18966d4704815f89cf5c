/**
 * @typedef {import('vfile').VFileValue} Value
 * @typedef {import('vfile').VFileOptions} Options
 * @typedef {import('vfile').BufferEncoding} BufferEncoding
 *   Encodings supported by the buffer class.
 *
 *   This is a copy of the types from Node and `VFile`.
 *
 * @typedef ReadOptions
 *   Configuration for `fs.readFile`.
 * @property {BufferEncoding | null | undefined} [encoding]
 *   Encoding to read file as, will turn `file.value` into a string if passed.
 * @property {string | undefined} [flag]
 *   File system flags to use.
 *
 * @typedef WriteOptions
 *   Configuration for `fs.writeFile`.
 * @property {BufferEncoding | null | undefined} [encoding]
 *   Encoding to write file as.
 * @property {number | string | undefined} [mode]
 *   File mode (permission and sticky bits) if the file was newly created.
 * @property {string | undefined} [flag]
 *   File system flags to use.
 *
 * @typedef {URL | Value} Path
 *   URL to file or path to file.
 *
 *   > 👉 **Note**: `Value` is used here because it’s a smarter `Buffer`
 * @typedef {Path | Options | VFile} Compatible
 *   URL to file, path to file, options for file, or actual file.
 */

/**
 * @callback Callback
 *   Callback called after reading or writing a file.
 * @param {NodeJS.ErrnoException | null} error
 *   Error when reading or writing was not successful.
 * @param {VFile | null | undefined} file
 *   File when reading or writing was successful.
 */

import fs from 'fs'
import path from 'path'
import {URL} from 'url'
import buffer from 'is-buffer'
import {VFile} from 'vfile'

// To do: next major: use `node:` prefix.
// To do: next major: use `URL` from global.
// To do: next major: Only pass `undefined`.

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
export function toVFile(description) {
  if (typeof description === 'string' || description instanceof URL) {
    description = {path: description}
  } else if (buffer(description)) {
    description = {path: String(description)}
  }

  return looksLikeAVFile(description)
    ? description
    : // To do: remove when `VFile` allows explicit `null`.
      new VFile(description || undefined)
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
export function readSync(description, options) {
  const file = toVFile(description)
  file.value = fs.readFileSync(path.resolve(file.cwd, file.path), options)
  return file
}

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
export function writeSync(description, options) {
  const file = toVFile(description)
  fs.writeFileSync(path.resolve(file.cwd, file.path), file.value || '', options)
  return file
}

/**
 * Create a virtual file and read it in, async.
 *
 * @param description
 *   Path to file, file options, or file itself.
 * @param options
 *   Encoding to use or Node.JS read options.
 * @param callback
 *   Callback called when done.
 * @returns
 *   Nothing when a callback is given, otherwise promise that resolves to given
 *   file or new file.
 */
export const read =
  /**
   * @type {{
   *   (description: Compatible, options: BufferEncoding | ReadOptions | null | undefined, callback: Callback): void
   *   (description: Compatible, callback: Callback): void
   *   (description: Compatible, options?: BufferEncoding | ReadOptions | null | undefined): Promise<VFile>
   * }}
   */
  (
    /**
     * @param {Compatible} description
     * @param {BufferEncoding | ReadOptions | null | undefined} [options]
     * @param {Callback | null | undefined} [callback]
     */
    function (description, options, callback) {
      const file = toVFile(description)

      if (!callback && typeof options === 'function') {
        callback = options
        options = null
      }

      if (!callback) {
        return new Promise(executor)
      }

      executor(resolve, callback)

      /**
       * @param {VFile} result
       */
      function resolve(result) {
        // @ts-expect-error: `callback` always defined.
        callback(null, result)
      }

      /**
       * @param {(error: VFile) => void} resolve
       * @param {(error: NodeJS.ErrnoException, file?: VFile | undefined) => void} reject
       */
      function executor(resolve, reject) {
        /** @type {string} */
        let fp

        try {
          fp = path.resolve(file.cwd, file.path)
        } catch (error) {
          const exception = /** @type {NodeJS.ErrnoException} */ (error)
          return reject(exception)
        }

        fs.readFile(fp, options, done)

        /**
         * @param {NodeJS.ErrnoException | null} error
         * @param {Value} result
         */
        function done(error, result) {
          if (error) {
            reject(error)
          } else {
            file.value = result
            resolve(file)
          }
        }
      }
    }
  )

/**
 * Create a virtual file and write it, async.
 *
 * @param description
 *   Path to file, file options, or file itself.
 * @param options
 *   Encoding to use or Node.JS write options.
 * @param callback
 *   Callback called when done.
 * @returns
 *   Nothing when a callback is given, otherwise promise that resolves to given
 *   file or new file.
 */
export const write =
  /**
   * @type {{
   *   (description: Compatible, options: BufferEncoding | WriteOptions | null | undefined, callback: Callback): void
   *   (description: Compatible, callback: Callback): void
   *   (description: Compatible, options?: BufferEncoding | WriteOptions | null | undefined): Promise<VFile>
   * }}
   */
  (
    /**
     * @param {Compatible} description
     * @param {BufferEncoding | WriteOptions | null | undefined} [options]
     * @param {Callback | null | undefined} [callback]
     */
    function (description, options, callback) {
      const file = toVFile(description)

      // Weird, right? Otherwise `fs` doesn’t accept it.
      if (!callback && typeof options === 'function') {
        callback = options
        options = undefined
      }

      if (!callback) {
        return new Promise(executor)
      }

      executor(resolve, callback)

      /**
       * @param {VFile} result
       */
      function resolve(result) {
        // @ts-expect-error: `callback` always defined.
        callback(null, result)
      }

      /**
       * @param {(error: VFile) => void} resolve
       * @param {(error: NodeJS.ErrnoException, file: VFile | null) => void} reject
       */
      function executor(resolve, reject) {
        /** @type {string} */
        let fp

        try {
          fp = path.resolve(file.cwd, file.path)
        } catch (error) {
          const exception = /** @type {NodeJS.ErrnoException} */ (error)
          return reject(exception, null)
        }

        fs.writeFile(fp, file.value || '', options || null, done)

        /**
         * @param {NodeJS.ErrnoException | null} error
         */
        function done(error) {
          if (error) {
            reject(error, null)
          } else {
            resolve(file)
          }
        }
      }
    }
  )

/**
 * Check if something looks like a vfile.
 *
 * @param {Compatible | null | undefined} value
 *   Value.
 * @returns {value is VFile}
 *   Whether `value` looks like a `VFile`.
 */
function looksLikeAVFile(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'message' in value &&
      'messages' in value
  )
}

// To do: next major: remove?
toVFile.readSync = readSync
toVFile.writeSync = writeSync
toVFile.read = read
toVFile.write = write
