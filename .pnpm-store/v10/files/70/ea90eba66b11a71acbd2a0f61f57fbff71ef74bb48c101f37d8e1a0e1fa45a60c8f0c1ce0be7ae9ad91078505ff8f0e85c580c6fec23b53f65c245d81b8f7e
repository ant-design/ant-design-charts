use crate::dynamic_import_visitor::DynamicImportVisitor;
use crate::types::{
  DeclareKind, DeclareType, ExportAllDeclaration, ExportDefaultName, ExportNamedDeclaration,
  ExportNamespaceSpecifier, ImportDefaultName, NamedImportName, NamespaceName,
  SimpleExportSpecifier, SimpleImportDeclaration, SimpleImportSpecifier,
};
use swc_common::Span;
use swc_ecma_ast::{
  ExportSpecifier, ImportDecl, ImportSpecifier, Module, ModuleDecl, ModuleExportName, ModuleItem,
  NamedExport,
};
use swc_ecma_visit::VisitWith;

pub fn extract_module_imports(module: &mut Module) -> Vec<DeclareType> {
  let mut declarations: Vec<DeclareType> = Vec::new();

  let mut v = DynamicImportVisitor {
    hashset: &mut declarations,
  };
  module.visit_with(&mut v);

  fn handle_module_import_decl(import_decl: &ImportDecl, decls: &mut Vec<DeclareType>) {
    let mut my_specifiers: Vec<SimpleImportSpecifier> = Vec::new();

    import_decl.specifiers.iter().for_each(|specifier| {
      match specifier {
        ImportSpecifier::Named(named_specifier) => {
          match &named_specifier.imported {
            // imported 存在, eg: import { foo as bar } from 'baz'
            Some(module_export_name) => match module_export_name {
              ModuleExportName::Str(str) => {
                my_specifiers.push(SimpleImportSpecifier::NamedImport(NamedImportName {
                  local: named_specifier.local.sym.to_string(),
                  imported: str.value.to_string(),
                }));
              }
              ModuleExportName::Ident(id) => {
                my_specifiers.push(SimpleImportSpecifier::NamedImport(NamedImportName {
                  local: named_specifier.local.sym.to_string(),
                  imported: id.sym.to_string(),
                }));
              }
            },
            // imported 不存在, eg: import { foo } from 'baz'
            None => {
              my_specifiers.push(SimpleImportSpecifier::NamedImport(NamedImportName {
                local: named_specifier.local.sym.to_string(),
                imported: named_specifier.local.sym.to_string(),
              }));
            }
          }
        }
        // import x from 'y'
        ImportSpecifier::Default(default_specifier) => {
          my_specifiers.push(SimpleImportSpecifier::DefaultImport(ImportDefaultName {
            local: Some(default_specifier.local.sym.to_string()),
          }));
        }
        // import * as b from 'a'
        ImportSpecifier::Namespace(namespace_specifier) => {
          my_specifiers.push(SimpleImportSpecifier::NamespaceImport(NamespaceName {
            local: Some(namespace_specifier.local.sym.to_string()),
          }));
        }
      }
    });

    decls.push(DeclareType::Import(SimpleImportDeclaration {
      import_kind: if import_decl.type_only {
        DeclareKind::Type
      } else {
        DeclareKind::Value
      },
      source: import_decl.src.value.to_string(),
      specifiers: my_specifiers,
      start: start_of(&import_decl.span),
      end: end_of(&import_decl.span),
    }));
  }

  fn handle_module_export_with_name(export_name_decl: &NamedExport, all: &mut Vec<DeclareType>) {
    if let Some(str) = &export_name_decl.src {
      let mut specifiers: Vec<SimpleExportSpecifier> = Vec::new();

      export_name_decl.specifiers.iter().for_each(|specifier| {
        match specifier {
          ExportSpecifier::Named(named_specifier) => {
            if let Some(exported) = &named_specifier.exported {
              specifiers.push(SimpleExportSpecifier::NamedExport(
                crate::types::NamedExportNameSpecifier {
                  exported: specifier_name(exported).to_string(),
                  local: specifier_name(&named_specifier.orig).to_string(),
                },
              ));
              return;
            }

            specifiers.push(SimpleExportSpecifier::NamedExport(
              crate::types::NamedExportNameSpecifier {
                local: specifier_name(&named_specifier.orig).to_string(),
                exported: specifier_name(&named_specifier.orig).to_string(),
              },
            ));
          }
          ExportSpecifier::Default(default_specifier) => {
            //todo: swc does not support export x from 'xx'
            specifiers.push(SimpleExportSpecifier::DefaultExport(ExportDefaultName {
              exported: default_specifier.exported.sym.to_string(),
            }));
          }
          // eg export * as foo from 'bar'
          ExportSpecifier::Namespace(namespace_specifier) => {
            specifiers.push(SimpleExportSpecifier::NamespaceExport(
              ExportNamespaceSpecifier {
                exported: specifier_name(&namespace_specifier.name),
              },
            ));
          }
        }
      });

      all.push(DeclareType::NamedExport(ExportNamedDeclaration {
        export_kind: if export_name_decl.type_only {
          DeclareKind::Type
        } else {
          DeclareKind::Value
        },
        source: str.value.to_string(),
        specifiers,
        start: start_of(&export_name_decl.span),
        end: end_of(&export_name_decl.span),
      }))
    }
  }

  for node in &module.body {
    match node {
      ModuleItem::ModuleDecl(ModuleDecl::Import(import_decl)) => {
        handle_module_import_decl(import_decl, &mut declarations);
      }

      ModuleItem::ModuleDecl(ModuleDecl::ExportNamed(export_name_decl)) => {
        // export {x,y} from "z" ; the otherwise case export { x };
        handle_module_export_with_name(export_name_decl, &mut declarations);
      }
      ModuleItem::ModuleDecl(ModuleDecl::ExportAll(export_all_ecl)) => {
        declarations.push(DeclareType::AllExport(ExportAllDeclaration {
          source: export_all_ecl.src.value.to_string(),
          start: start_of(&export_all_ecl.span),
          end: end_of(&export_all_ecl.span),
        }));
      }
      _ => {}
    }
  }

  declarations
}

fn specifier_name(export_specifier: &ModuleExportName) -> String {
  match export_specifier {
    ModuleExportName::Ident(ident) => ident.sym.to_string(),
    ModuleExportName::Str(str) => str.value.to_string(),
  }
}

fn start_of(span: &Span) -> u32 {
  span.lo.0 as u32
}
fn end_of(span: &Span) -> u32 {
  span.hi.0 as u32
}
