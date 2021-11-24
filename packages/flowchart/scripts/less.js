#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const fse = require('fs-extra');
const cp = require('child_process');

const cwd = process.cwd();
const es = path.join(cwd, 'es');
const lib = path.join(cwd, 'lib');
const dist = path.join(cwd, 'dist');
const src = path.join(cwd, 'src');
const styleEntry = path.join(cwd, 'src/style');

function compile(source, target) {
  try {
    let cmd = '../../node_modules/.bin/lessc';
    if (os.type() === 'Windows_NT') {
      cmd = path.join(cwd, '../../node_modules/.bin/lessc.cmd');
    }

    cp.execFileSync(cmd, [
      // lessc cli: https://lesscss.org/usage/#plugins
      // https://www.npmjs.com/package/less-plugin-npm-import
      '--npm-import=prefix=~',
      //https://lesscss.org/usage/#command-line-usage-relative-urls
      '--rewrite-urls=all',
      // enable javascriptEnabled
      '--js',
      source,
      target,
    ]);
  } catch (error) {
    console.log(error, source, target);
  }
}

let lessFiles = [];

// Copy less files
function readdir(dir) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const sub = path.join(dir, file);
      const stat = fs.statSync(sub);
      if (stat && stat.isDirectory()) {
        readdir(sub);
      } else {
        const ext = path.extname(file);
        if (ext === '.less' || ext === '.css') {
          console.log('find less file, compiling', file);
          const less = path.relative(src, sub);
          lessFiles.push({
            file: file,
            absolutePath: sub,
            relativePath: path.relative(styleEntry, sub),
          });
          const name = less.substr(0, less.length - ext.length);
          // copy less
          fse.copySync(sub, path.join(es, less));
          fse.copySync(sub, path.join(lib, less));
          // compile less to css and compile
          compile(sub, path.join(es, `${name}.css`));
          compile(sub, path.join(lib, `${name}.css`));
        }
      }
    });
  }
}

// create dist for styles
function ensureDistIsCreated() {
  const dirs = [es, lib];
  dirs.forEach((dir) => {
    const dirPath = path.join(dir, 'style');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
      console.log('dir is created:', dirPath);
    }
  });
}

// Build components in one file: lib/style/components.less
function rollup(files) {
  console.log('Generate "style/components.less"');
  let content = '';
  files.forEach((file) => {
    if (fs.existsSync(file.absolutePath)) {
      content += `@import "${file.relativePath}";\n`;
    }
  });
  const source = path.join(es, 'style', 'components.less');
  fs.writeFileSync(source, content);
  fs.writeFileSync(path.join(lib, 'style', 'components.less'), content);
  compile(source, path.join(es, 'style', 'components.css'));
  compile(source, path.join(lib, 'style', 'components.css'));
  compile(source, path.join(dist, 'index.css'));
}

fs.readdir(src, (err, files) => {
  lessFiles = [];
  files.forEach((file) => {
    const dirPath = path.join(src, file);
    const stat = fs.statSync(dirPath);
    if (stat.isDirectory()) {
      readdir(path.join(src, file));
    }
  });
  // create dist for styles
  ensureDistIsCreated();
  // Build components in one file: lib/style/components.less
  rollup(lessFiles);
});
