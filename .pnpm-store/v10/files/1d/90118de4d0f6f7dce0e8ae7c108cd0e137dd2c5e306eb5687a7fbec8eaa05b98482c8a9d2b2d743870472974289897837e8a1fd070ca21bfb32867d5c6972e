import fs from 'fs';
import path from 'path';
import ignore from 'ignore';
import picomatch from 'picomatch';
import * as prettier from 'prettier';
import prettier__default from 'prettier';
import execa from 'execa';
import findUp from 'find-up';

var createIgnorer = (directory, filename = ".prettierignore") => {
  const file = path.join(directory, filename);
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, "utf8");
    const filter = ignore().add(text).createFilter();
    return (filepath) => filter(path.join(filepath));
  }
  return () => true;
};

var createMatcher = (pattern) => {
  if (typeof pattern !== "string" && !Array.isArray(pattern)) {
    return () => true;
  }
  const patterns = Array.isArray(pattern) ? pattern : [pattern];
  const isMatch = picomatch(patterns, { dot: true });
  return (file) => isMatch(path.normalize(file));
};

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var isSupportedExtension = (resolveConfig) => (file) => {
  const config = prettier.resolveConfig.sync(file, {
    editorconfig: true
  });
  const fileInfo = prettier.getFileInfo.sync(file, __spreadValues$2({
    resolveConfig
  }, config));
  return !!fileInfo.inferredParser;
};

var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var processFiles = (directory, files, {
  check,
  config,
  onExamineFile,
  onCheckFile,
  onWriteFile
} = {}) => {
  for (const relative of files) {
    onExamineFile == null ? void 0 : onExamineFile(relative);
    const file = path.join(directory, relative);
    const options = __spreadProps(__spreadValues$1({}, prettier__default.resolveConfig.sync(file, {
      config,
      editorconfig: true
    })), {
      filepath: file
    });
    const input = fs.readFileSync(file, "utf8");
    if (check) {
      const isFormatted = prettier__default.check(input, options);
      onCheckFile == null ? void 0 : onCheckFile(relative, isFormatted);
      continue;
    }
    const output = prettier__default.format(input, options);
    if (output !== input) {
      fs.writeFileSync(file, output);
      onWriteFile == null ? void 0 : onWriteFile(relative);
    }
  }
};

const name$1 = "git";
const detect$1 = (directory) => {
  if (fs.existsSync(path.join(directory, ".git"))) {
    return directory;
  }
  const gitDirectory = findUp.sync(".git", {
    cwd: directory,
    type: "directory"
  });
  const gitWorkTreeFile = findUp.sync(".git", {
    cwd: directory,
    type: "file"
  });
  if (!gitDirectory && !gitWorkTreeFile) {
    return null;
  }
  if (gitDirectory && !gitWorkTreeFile) {
    return path.dirname(gitDirectory);
  }
  if (gitWorkTreeFile && !gitDirectory) {
    return path.dirname(gitWorkTreeFile);
  }
  const gitRepoDirectory = path.dirname(gitDirectory);
  const gitWorkTreeDirectory = path.dirname(gitWorkTreeFile);
  return gitRepoDirectory.length > gitWorkTreeDirectory.length ? gitRepoDirectory : gitWorkTreeDirectory;
};
const runGit = (directory, args) => execa.sync("git", args, {
  cwd: directory
});
const getLines$1 = (execaResult) => execaResult.stdout.split("\n");
const getSinceRevision$1 = (directory, { staged, branch }) => {
  try {
    const revision = staged ? "HEAD" : runGit(directory, [
      "merge-base",
      "HEAD",
      branch || "master"
    ]).stdout.trim();
    return runGit(directory, ["rev-parse", "--short", revision]).stdout.trim();
  } catch (err) {
    const error = err;
    if (/HEAD/.test(error.message) || staged && /Needed a single revision/.test(error.message)) {
      return null;
    }
    throw error;
  }
};
const getChangedFiles$1 = (directory, revision, staged) => [
  ...getLines$1(
    runGit(
      directory,
      [
        "diff",
        "--name-only",
        staged ? "--cached" : null,
        "--diff-filter=ACMRTUB",
        revision
      ].filter(Boolean)
    )
  ),
  ...staged ? [] : getLines$1(
    runGit(directory, ["ls-files", "--others", "--exclude-standard"])
  )
].filter(Boolean);
const getUnstagedChangedFiles$1 = (directory) => {
  return getChangedFiles$1(directory, null, false);
};
const stageFile$1 = (directory, file) => {
  runGit(directory, ["add", file]);
};

var gitScm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  detect: detect$1,
  getChangedFiles: getChangedFiles$1,
  getSinceRevision: getSinceRevision$1,
  getUnstagedChangedFiles: getUnstagedChangedFiles$1,
  name: name$1,
  stageFile: stageFile$1
});

const name = "hg";
const detect = (directory) => {
  const hgDirectory = findUp.sync(".hg", {
    cwd: directory,
    type: "directory"
  });
  if (hgDirectory) {
    return path.dirname(hgDirectory);
  }
};
const runHg = (directory, args) => execa.sync("hg", args, {
  cwd: directory
});
const getLines = (execaResult) => execaResult.stdout.split("\n");
const getSinceRevision = (directory, { branch }) => {
  const revision = runHg(directory, [
    "debugancestor",
    "tip",
    branch || "default"
  ]).stdout.trim();
  return runHg(directory, ["id", "-i", "-r", revision]).stdout.trim();
};
const getChangedFiles = (directory, revision, _staged) => [
  ...getLines(
    runHg(directory, [
      "status",
      "-n",
      "-a",
      "-m",
      ...revision ? ["--rev", revision] : []
    ])
  )
].filter(Boolean);
const getUnstagedChangedFiles = () => [];
const stageFile = (directory, file) => {
  runHg(directory, ["add", file]);
};

var hgScm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  detect: detect,
  getChangedFiles: getChangedFiles,
  getSinceRevision: getSinceRevision,
  getUnstagedChangedFiles: getUnstagedChangedFiles,
  name: name,
  stageFile: stageFile
});

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const scms = [gitScm, hgScm];
var scms$1 = (directory) => {
  for (const scm of scms) {
    const rootDirectory = scm.detect(directory);
    if (rootDirectory) {
      return __spreadValues({
        rootDirectory
      }, scm);
    }
  }
};

module.exports = (currentDirectory, {
  config,
  since,
  staged,
  pattern,
  restage = true,
  branch,
  bail,
  check,
  ignorePath,
  verbose,
  onFoundSinceRevision,
  onFoundChangedFiles,
  onPartiallyStagedFile,
  onExamineFile,
  onCheckFile,
  onWriteFile,
  resolveConfig = true
} = {}) => {
  const scm = scms$1(currentDirectory);
  if (!scm) {
    throw new Error("Unable to detect a source control manager.");
  }
  const directory = scm.rootDirectory;
  const revision = since || scm.getSinceRevision(directory, { staged, branch });
  onFoundSinceRevision == null ? void 0 : onFoundSinceRevision(scm.name, revision);
  const rootIgnorer = createIgnorer(directory, ignorePath);
  const cwdIgnorer = currentDirectory === directory ? () => true : createIgnorer(currentDirectory, ignorePath);
  const changedFiles = scm.getChangedFiles(directory, revision, staged).filter(createMatcher(pattern)).filter(rootIgnorer).filter(cwdIgnorer).filter(isSupportedExtension(resolveConfig));
  const unstagedFiles = staged ? scm.getUnstagedChangedFiles(
    directory,
    // @ts-expect-error -- TODO: check
    revision
  ).filter(isSupportedExtension(resolveConfig)).filter(createMatcher(pattern)).filter(rootIgnorer).filter(cwdIgnorer) : [];
  const wasFullyStaged = (f) => !unstagedFiles.includes(f);
  onFoundChangedFiles == null ? void 0 : onFoundChangedFiles(changedFiles);
  const failReasons = /* @__PURE__ */ new Set();
  processFiles(directory, changedFiles, {
    check,
    config,
    onWriteFile(file) {
      onWriteFile == null ? void 0 : onWriteFile(file);
      if (bail) {
        failReasons.add("BAIL_ON_WRITE");
      }
      if (staged && restage) {
        if (wasFullyStaged(file)) {
          scm.stageFile(directory, file);
        } else {
          onPartiallyStagedFile == null ? void 0 : onPartiallyStagedFile(file);
          failReasons.add("PARTIALLY_STAGED_FILE");
        }
      }
    },
    onCheckFile: (file, isFormatted) => {
      onCheckFile == null ? void 0 : onCheckFile(file, isFormatted);
      if (!isFormatted) {
        failReasons.add("CHECK_FAILED");
      }
    },
    onExamineFile: verbose ? onExamineFile : void 0
  });
  return {
    success: failReasons.size === 0,
    errors: [...failReasons]
  };
};
