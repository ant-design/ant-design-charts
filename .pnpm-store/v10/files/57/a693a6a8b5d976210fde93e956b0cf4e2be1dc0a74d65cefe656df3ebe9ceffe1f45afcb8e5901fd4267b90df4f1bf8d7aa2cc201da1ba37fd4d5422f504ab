use crate::types::{DeclareType, DynamicImportDeclaration};
use swc_ecma_ast::{CallExpr, Expr, Lit};
use swc_ecma_visit::{Visit, VisitWith};

pub struct DynamicImportVisitor<'a> {
  pub hashset: &'a mut Vec<DeclareType>,
}

impl Visit for DynamicImportVisitor<'_> {
  fn visit_call_expr(&mut self, node: &CallExpr) {
    if node.callee.is_import() {
      let arg = node.args.get(0);

      if let Some(eos) = arg {
        let expr = *eos.expr.clone();
        if let Expr::Lit(Lit::Str(import_arg)) = expr {
          self
            .hashset
            .push(DeclareType::DynamicImport(DynamicImportDeclaration {
              source: import_arg.value.to_string(),
              start: import_arg.span.lo.0 as u32,
              end: import_arg.span.hi.0 as u32,
            }));
        }
      }
      node.visit_children_with(self);
    };
  }
}
