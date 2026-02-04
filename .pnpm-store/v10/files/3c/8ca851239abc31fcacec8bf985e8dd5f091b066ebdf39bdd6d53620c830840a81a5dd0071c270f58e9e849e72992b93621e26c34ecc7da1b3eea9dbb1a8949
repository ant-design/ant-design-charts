export default function rehypeStringify(
  this:
    | import('unified').Processor<
        void,
        import('hast').Root,
        import('hast').Root,
        string
      >
    | import('unified').Processor<
        void,
        import('hast').Comment,
        import('hast').Comment,
        string
      >
    | import('unified').Processor<
        void,
        import('hast').DocType,
        import('hast').DocType,
        string
      >
    | import('unified').Processor<
        void,
        import('hast').Element,
        import('hast').Element,
        string
      >
    | import('unified').Processor<
        void,
        import('hast').Text,
        import('hast').Text,
        string
      >
    | import('unified').Processor<
        void,
        import('hast-util-raw/complex-types.js').Raw,
        import('hast-util-raw/complex-types.js').Raw,
        string
      >,
  ...settings:
    | [(import('hast-util-to-html/lib/types.js').Options | undefined)?]
    | void[]
): void
export type Root = import('hast').Root
export type Node = Root | Root['children'][number]
export type Options = import('hast-util-to-html').Options
