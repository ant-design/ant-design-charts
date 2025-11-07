#![deny(clippy::all)]

mod dynamic_import_visitor;
mod extract_imports;
mod module_utils;
mod types;

use crate::extract_imports::extract_module_imports;
use crate::module_utils::{parse_code_to_module, parse_file_to_module};
use crate::types::DeclareType;
use napi::anyhow::anyhow;
use napi::Result;
use napi_derive::napi;
use rayon::prelude::*;
use serde_json::Value;
use std::collections::HashMap;

#[napi]
fn parse_code(code: String, file_name: Option<String>) -> Result<Value> {
  let import_map = extract_from_code(code, file_name)?;

  let value =
    serde_json::to_value(&import_map).map_err(|_| anyhow!("serialize import declares error"))?;

  Ok(value)
}

#[napi]
async fn parse_files(files: Vec<String>) -> Result<Value> {
  let file_imports = parse_files_in_paralle(&files)?;

  let val = serde_json::to_value(&file_imports)?;
  Ok(val)
}

#[napi]
fn parse_files_sync(files: Vec<String>) -> Result<Value> {
  let file_imports = parse_files_in_paralle(&files)?;

  let val = serde_json::to_value(&file_imports)?;
  Ok(val)
}

fn parse_files_in_paralle(files: &Vec<String>) -> Result<HashMap<String, Vec<DeclareType>>> {
  let mut file_imports: HashMap<String, Vec<DeclareType>> = HashMap::new();

  let mut results: Vec<(&String, Result<Vec<DeclareType>>)> = Vec::new();

  files
    .par_iter()
    .map(|file| {
      let result = extract_from_file(&file);
      (file, result)
    })
    .collect_into_vec(&mut results);

  for (file, result) in results {
    match result {
      Ok(res) => {
        file_imports.insert(file.to_owned(), res);
      }
      Err(e) => {
        return Err(e);
      }
    };
  }

  Ok(file_imports)
}

fn extract_from_code(code: String, file_name: Option<String>) -> Result<Vec<DeclareType>> {
  let mut module = parse_code_to_module(code, file_name)?;
  Ok(extract_module_imports(&mut module))
}

fn extract_from_file(file_name: &String) -> Result<Vec<DeclareType>> {
  let mut module = parse_file_to_module(file_name)?;
  let imports = extract_module_imports(&mut module);
  Ok(imports)
}
