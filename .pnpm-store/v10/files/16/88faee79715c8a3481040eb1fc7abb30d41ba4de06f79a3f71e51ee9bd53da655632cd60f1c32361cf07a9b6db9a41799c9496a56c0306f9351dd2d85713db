/**
 * Create a report from an error, one file, or multiple files.
 *
 * @param {Error | VFile | Array<VFile> | null | undefined} [files]
 *   Files or error to report.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Report.
 */
export function reporter(
  files?: Error | VFile | Array<VFile> | null | undefined,
  options?: Options | null | undefined
): string
export type VFile = import('vfile').VFile
export type VFileMessage = import('vfile-message').VFileMessage
export type Statistics = import('vfile-statistics').Statistics
/**
 * Configuration (optional).
 */
export type Options = {
  /**
   * Use ANSI colors in report.
   * The default behavior in Node.js is the check if color is supported.
   */
  color?: boolean | null | undefined
  /**
   * Show message `note`s.
   * Notes are optional, additional, long descriptions.
   */
  verbose?: boolean | null | undefined
  /**
   * Do not show files without messages.
   */
  quiet?: boolean | null | undefined
  /**
   * Show errors only, this hides info and warning messages, and sets
   * `quiet: true`.
   */
  silent?: boolean | null | undefined
  /**
   * Label to use for files without file path.
   * If one file and no `defaultName` is given, no name will show up in the
   * report.
   */
  defaultName?: string | null | undefined
}
/**
 * Message.
 */
export type MessageRow = {
  /**
   *   Serialized positional info.
   */
  place: string
  /**
   *   Kind of message.
   */
  label: string
  /**
   *   Reason.
   */
  reason: string
  /**
   *   Rule.
   */
  ruleId: string
  /**
   *   Source.
   */
  source: string
}
export type MessageColumn = keyof MessageRow
/**
 * File header row.
 */
export type FileRow = {
  /**
   *  Kind.
   */
  type: 'file'
  /**
   *  Virtual file.
   */
  file: VFile
  /**
   *  Statistics.
   */
  stats: Statistics
}
/**
 * Sizes for message columns.
 */
export type Sizes = Record<MessageColumn, number>
/**
 * Result.
 */
export type Info = {
  /**
   *  Rows.
   */
  rows: Array<FileRow | MessageRow>
  /**
   *  Total statistics.
   */
  stats: Statistics
  /**
   *  Sizes for message columns.
   */
  sizes: Sizes
}
