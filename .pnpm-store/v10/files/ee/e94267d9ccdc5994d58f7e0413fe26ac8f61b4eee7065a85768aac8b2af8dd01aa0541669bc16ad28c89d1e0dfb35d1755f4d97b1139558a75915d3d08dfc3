export type DeclareKind = 'value' | 'type';
export type Declaration = {
  type: 'ImportDeclaration';
  source: string;
  specifiers: Array<SimpleImportSpecifier>;
  importKind: DeclareKind;
  start: number;
  end: number;
} | {
  type: 'DynamicImport';
  source: string;
  start: number;
  end: number;
} | {
  type: 'ExportNamedDeclaration';
  source: string;
  specifiers: Array<SimpleExportSpecifier>;
  exportKind: DeclareKind;
  start: number;
  end: number;
} | {
  type: 'ExportAllDeclaration';
  source: string;
  start: number;
  end: number;
};
type SimpleImportSpecifier = {
  type: 'ImportDefaultSpecifier';
  local: string;
} | {
  type: 'ImportNamespaceSpecifier';
  local: string;
  imported: string;
} | {
  type: 'ImportNamespaceSpecifier';
  local?: string;
};
type SimpleExportSpecifier = {
  type: 'ExportDefaultSpecifier';
  exported: string;
} | {
  type: 'ExportNamespaceSpecifier';
  exported?: string;
} | {
  type: 'ExportSpecifier';
  exported: string;
  local: string;
};

export declare function parseCode(code: string, fileName?: string | undefined | null): Declaration[];

export declare function parseFiles(files: string[]): Promise<Record<string, Declaration[]>>;

export declare function parseFilesSync(files: string[]): Record<string, Declaration[]>;

export {};
