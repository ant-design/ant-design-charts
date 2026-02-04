use napi::anyhow::{anyhow, Context};
use napi::bindgen_prelude::*;
use std::ffi::OsStr;
use std::path::Path;
use swc_common::errors::{ColorConfig, Handler};
use swc_common::input::StringInput;
use swc_common::sync::Lrc;
use swc_common::{FileName, SourceMap};
use swc_ecma_ast::Module;
use swc_ecma_parser::lexer::Lexer;
use swc_ecma_parser::{EsConfig, Parser, Syntax, TsConfig};

pub fn parse_file_to_module(file_path: &String) -> Result<Module> {
  let cm: Lrc<SourceMap> = Default::default();
  let handler = Handler::with_tty_emitter(ColorConfig::Auto, true, false, Some(cm.clone()));
  let path = Path::new(file_path.as_str());

  let fm = cm
    .load_file(path)
    .context(format!("Cant load file: {}", file_path))?;

  let lexer = Lexer::new(
    path_to_syntax(path),
    Default::default(),
    StringInput::from(&*fm),
    None,
  );

  let mut parser = Parser::new_from(lexer);

  for e in parser.take_errors() {
    e.into_diagnostic(&handler).emit();
  }

  let module = parser.parse_module().map_err(|e| {
    // Unrecoverable fatal error occurred
    e.into_diagnostic(&handler).emit();
    anyhow!("parse module script file failed: {}", file_path)
  })?;

  Ok(module)
}

pub fn parse_code_to_module(code: String, file_name: Option<String>) -> Result<Module> {
  let cm: Lrc<SourceMap> = Default::default();
  let handler = Handler::with_tty_emitter(ColorConfig::Auto, true, false, Some(cm.clone()));

  let default_file_name = "_.tsx".to_string();

  let file_name: String = if let Some(path) = file_name {
    path
  } else {
    default_file_name.clone()
  };

  let fm = cm.new_source_file(FileName::Custom(default_file_name), code);
  let lexer = Lexer::new(
    path_to_syntax(Path::new(&file_name)),
    Default::default(),
    StringInput::from(&*fm),
    None,
  );

  let mut parser = Parser::new_from(lexer);

  for e in parser.take_errors() {
    e.into_diagnostic(&handler).emit();
  }

  let m = parser.parse_module().map_err(|e| {
    e.into_diagnostic(&handler).emit();
    anyhow!("parse module script code failed")
  })?;

  Ok(m)
}

fn path_to_syntax(p: &Path) -> Syntax {
  let default_syntax = Syntax::Typescript(TsConfig {
    tsx: true,
    decorators: true,
    ..Default::default()
  });

  if let Some(ext) = p.extension().and_then(OsStr::to_str) {
    match ext {
      "js" | "jsx" | "mjs" => Syntax::Es(EsConfig {
        decorators: true,
        decorators_before_export: true,
        jsx: true,
        export_default_from: true,
        ..Default::default()
      }),
      "ts" => Syntax::Typescript(TsConfig {
        tsx: false,
        decorators: true,
        ..Default::default()
      }),
      "tsx" => Syntax::Typescript(TsConfig {
        tsx: true,
        decorators: true,
        ..Default::default()
      }),
      _ => default_syntax,
    }
  } else {
    default_syntax
  }
}
