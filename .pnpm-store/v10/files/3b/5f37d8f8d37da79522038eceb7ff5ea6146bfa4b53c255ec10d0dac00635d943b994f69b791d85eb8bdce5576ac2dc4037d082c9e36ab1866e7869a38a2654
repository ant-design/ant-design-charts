/**
 * Serialize markdown as HTML.
 *
 * ###### Notes
 *
 * Passing `sanitize: false` is dangerous.
 * It allows arbitrary HTML and does not sanitize elements.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
export default function remarkHtml(options?: Readonly<Options> | null | undefined): undefined;
export default class remarkHtml {
    /**
     * Serialize markdown as HTML.
     *
     * ###### Notes
     *
     * Passing `sanitize: false` is dangerous.
     * It allows arbitrary HTML and does not sanitize elements.
     *
     * @param {Readonly<Options> | null | undefined} [options]
     *   Configuration (optional).
     * @returns {undefined}
     *   Nothing.
     */
    constructor(options?: Readonly<Options> | null | undefined);
    compiler: (tree: import("mdast").Root, file: import("vfile").VFile) => string;
}
export type Schema = import('hast-util-sanitize').Schema;
export type ToHtmlOptions = import('hast-util-to-html').Options;
export type Root = import('mdast').Root;
export type Handlers = import('mdast-util-to-hast').Handlers;
export type Compiler = import('unified').Compiler<Root, string>;
export type Processor = import('unified').Processor<undefined, undefined, undefined, Root, string>;
/**
 * Extra fields.
 */
export type ExtraOptionsFields = {
    /**
     * How to turn mdast nodes into hast nodes (optional);
     * passed to `mdast-util-to-hast`.
     */
    handlers?: Readonly<Handlers> | null | undefined;
    /**
     * Sanitize the output, and how (default: `true`).
     */
    sanitize?: Readonly<Schema> | boolean | null | undefined;
};
/**
 * Configuration.
 */
export type Options = ToHtmlOptions & ExtraOptionsFields;
