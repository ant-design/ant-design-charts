declare module "svgson" {
  export interface INode {
    name: string,
    type: string,
    value: string,
    attributes: Record<string, string>,
    children: INode[]
  }

  interface IParseOptions {
    transformNode?: (node: INode) => INode,
    camelcase?: boolean
  }

  type TEscape = (text?: string) => string;

  interface IStringifyOptions {
    transformAttr?: (key: string, value: string, escape: TEscape) => string;
    selfClose?: boolean;
  }

  function parse(input: string, options?: IParseOptions): Promise<INode>;

  function parseSync(input: string, options?: IParseOptions): INode;

  function stringify(ast: INode, options?: IStringifyOptions): string;
}
