/**
 * Create an extension for `micromark` to support directives when serializing
 * to HTML.
 *
 * @param {HtmlOptions | null | undefined} [options]
 *   Configuration.
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support directives when serializing to HTML.
 */
export function directiveHtml(
  options?: HtmlOptions | null | undefined
): HtmlExtension
export type CompileContext = import('micromark-util-types').CompileContext
export type _Handle = import('micromark-util-types').Handle
export type HtmlExtension = import('micromark-util-types').HtmlExtension
/**
 * Internal tuple representing an attribute.
 */
export type Attribute = [string, string]
/**
 * Configuration.
 *
 * > 👉 **Note**: the special field `'*'` can be used to specify a fallback
 * > handle to handle all otherwise unhandled directives.
 */
export type HtmlOptions = Record<string, Handle>
/**
 * Handle a directive.
 */
export type Handle = (
  this: CompileContext,
  directive: Directive
) => boolean | void
/**
 * Structure representing a directive.
 */
export type Directive = {
  /**
   *   Kind.
   */
  type: DirectiveType
  /**
   *   Name of directive.
   */
  name: string
  /**
   * Compiled HTML content that was in `[brackets]`.
   */
  label?: string | undefined
  /**
   * Object w/ HTML attributes.
   */
  attributes?: Record<string, string> | undefined
  /**
   * Compiled HTML content inside container directive.
   */
  content?: string | undefined
  /**
   * Private :)
   */
  _fenceCount?: number | undefined
}
/**
 * Kind.
 */
export type DirectiveType =
  | 'containerDirective'
  | 'leafDirective'
  | 'textDirective'
