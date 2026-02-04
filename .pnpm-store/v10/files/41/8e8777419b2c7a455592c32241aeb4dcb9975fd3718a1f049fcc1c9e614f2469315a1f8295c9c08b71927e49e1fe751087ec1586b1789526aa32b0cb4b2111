use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum DeclareType {
  #[serde(rename = "ImportDeclaration")]
  Import(SimpleImportDeclaration),

  #[serde(rename = "DynamicImport")]
  DynamicImport(DynamicImportDeclaration),

  #[serde(rename = "ExportNamedDeclaration")]
  NamedExport(ExportNamedDeclaration),
  #[serde(rename = "ExportAllDeclaration")]
  AllExport(ExportAllDeclaration),
}

#[derive(Serialize, Deserialize)]
pub struct SimpleImportDeclaration {
  pub source: String,
  pub specifiers: Vec<SimpleImportSpecifier>,
  #[serde(rename = "importKind")]
  pub import_kind: DeclareKind,
  pub start: u32,
  pub end: u32,
}

#[derive(Serialize, Deserialize)]
pub struct DynamicImportDeclaration {
  pub source: String,
  pub start: u32,
  pub end: u32,
}

#[derive(Serialize, Deserialize)]
pub struct ExportNamedDeclaration {
  pub source: String,
  pub specifiers: Vec<SimpleExportSpecifier>,
  #[serde(rename = "exportKind")]
  pub export_kind: DeclareKind,
  pub start: u32,
  pub end: u32,
}

#[derive(Serialize, Deserialize)]
pub struct ExportAllDeclaration {
  pub source: String,
  pub start: u32,
  pub end: u32,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "type")]
pub enum SimpleImportSpecifier {
  #[serde(rename = "ImportDefaultSpecifier")]
  DefaultImport(ImportDefaultName),

  #[serde(rename = "ImportSpecifier")]
  NamedImport(NamedImportName),

  #[serde(rename = "ImportNamespaceSpecifier")]
  NamespaceImport(NamespaceName),
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(tag = "type")]
pub enum SimpleExportSpecifier {
  #[serde(rename = "ExportDefaultSpecifier")]
  DefaultExport(ExportDefaultName),

  #[serde(rename = "ExportNamespaceSpecifier")]
  NamespaceExport(ExportNamespaceSpecifier),

  #[serde(rename = "ExportSpecifier")]
  NamedExport(NamedExportNameSpecifier),
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NamedExportNameSpecifier {
  pub exported: String,
  pub local: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ExportNamespaceSpecifier {
  pub exported: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NamespaceName {
  pub local: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DynamicName {}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ImportDefaultName {
  pub local: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ExportDefaultName {
  pub exported: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NamedImportName {
  pub local: String,
  pub imported: String,
}

#[derive(Serialize, Deserialize)]
pub enum DeclareKind {
  #[serde(rename = "value")]
  Value,
  #[serde(rename = "type")]
  Type,
}
