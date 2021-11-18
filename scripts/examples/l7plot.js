/**
 * 扫描 L7Plot 所有 demo 文件，生成 demo 文档
 * eg:
 *  - `node scripts/examples/l7plot.js`
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const chalk = require('chalk');
const { checkDirExist } = require('../util');
const parseFile = require('../ast/parse');
const demoWriteBasePath = '../../packages/site/examples';
const templateDemoPath = path.join(__dirname, '../../template/doc/demo.ejs');
const arg = process.argv.splice(2);
const demoPath = 'website/examples';
const plot = arg[0] || 'L7Plot';
const fp = path.resolve('../', `${plot}/${demoPath}`);

const examples = [];
// 特殊路径不处理
const excludePath = ['administrative-switch.tsx', 'component', 'advanced-plot', 'gallery', 'line'];

const hasSameEl = (source, target) => {
  return new Set(source.concat(target)).size !== source.length + target.length;
};

const checkDir = (filePath, filename) => {
  let writePath = path.join(__dirname, demoWriteBasePath, filePath.split(demoPath)[1]);
  // 统一加上 map 前缀
  writePath = writePath.replace(/examples\//, 'examples/map-');
  checkDirExist(writePath.split(filename)[0]);
  return writePath;
};

// md
const apiGenerator = (filePath, filename) => {
  const writePath = checkDir(filePath, filename);
  // example 目录下不会有示例代码，不需要解析
  let content = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  if (content) {
    content = content.replace(/markdown:docs\//g, 'markdown:docs/map-');
  }
  fs.writeFileSync(writePath, content);
};

// 非 ts | js 直接 copy
const copyGenerator = (filePath, filename) => {
  const writePath = checkDir(filePath, filename);
  let content = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  if (filename === 'meta.json') {
    content = content.replace(/\.ts/g, '.js');
  }
  fs.writeFileSync(writePath, content);
};

// ts | js
const demoGenerator = (filePath, filename) => {
  const chartContent = parseFile(filePath);
  const { chartName, plotName, utilName, dataSet, code, errPath } = chartContent;
  if (!errPath) {
    // 生成文件
    ejs.renderFile(
      templateDemoPath,
      {
        plotName: chartName, // 没有多余依赖，先使用 chartName
        utilName,
        chartName,
        dataSet,
        chartContent: code,
      }, // 渲染的数据key: 对应到了ejs中的index
      (err, data) => {
        if (err) {
          console.log(chalk.red(`模版文件读取失败： ${err}`));
          return;
        }
        const writePath = checkDir(filePath, filename);
        // 生成文件内容
        fs.writeFileSync(writePath.replace(/\.ts/, '.js'), data);
      },
    );
  }
};

/**
 * 文件扫描，获取所有 *.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanDir = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((filename) => {
      const director = path.join(foldPath + '/', filename);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanDir(director, dir ? `${dir}.${filename}` : filename);
      }
      if (stats.isFile()) {
        const filePath = path.resolve(__dirname, `../../../${plot}/${demoPath}`, dir.split('.').join('/'), filename);
        if (!hasSameEl(excludePath, dir.split('.').concat(filename))) {
          examples.push({
            filePath,
            filename,
          });
        }
      }
    });
  } catch (err) {
    console.info(chalk.red(err));
  }
};

const writeFiles = () => {
  console.info(chalk.green('示例生成中....'));
  examples.forEach((item) => {
    const { filePath, filename } = item;
    if (filename.endsWith('.md')) {
      apiGenerator(filePath, filename);
    } else if (filename.endsWith('.ts') || filename.endsWith('.js')) {
      demoGenerator(filePath, filename);
    } else {
      copyGenerator(filePath, filename);
    }
  });
};

scanDir(fp);
writeFiles();
