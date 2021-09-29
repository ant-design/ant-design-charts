/**
 * 一键同步 G2Plot v2 API 文档
 * 默认路径为 G2Plot/examples 下的一级目录
 * eg:
 * -全量同步：`node scripts/api.js en`
 * -单一同步：`node scripts/api.js zh Bar`
 */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { lowerCase, upperCase, toHump, toLine } = require('./util.js');
const { ChartsLevel } = require('./constants');
const { mdprima } = require('./mdprima.js');
const api_path = '../docs/.g2plot-plot-api';
const excludeFiles = ['gallery', 'dynamic-plots', 'case', 'general']; // 不处理的路径
const arg = process.argv.splice(2);
const extralPath = ChartsLevel[arg[1]] ? `${ChartsLevel[arg[1]]}` : '';
const fp =
  arg.length > 1
    ? path.resolve('../', `G2Plot/examples${extralPath}/${toLine(lowerCase(arg[1]))}`)
    : path.resolve('../', `G2Plot/examples`);

const apiGenerator = (filePath, chartName) => {
  // 文件路径，上层自动扫描
  const res = remark()
    .use(mdprima)
    .processSync(
      fs.readFileSync(filePath, {
        encoding: 'utf-8',
      }),
    );
  // 替换文档路径
  const reWriteContents = res.contents
    .replace(/\/zh\/docs\/api\/options\/meta/g, '/zh-CN/guide/common#meta')
    .replace(/\/en\/docs\/api\/options\/meta/g, '/guide/common#meta')
    .replace(/\/zh\/docs\/api\/graphic\-style/g, '/zh-CN/guide/graphic-style')
    .replace(/\/en\/docs\/api\/graphic\-style/g, '/guide/graphic-style')
    .replace(/\/zh\/docs\/api\/shape\/shape\-attrs/g, '/zh-CN/guide/graphic-style')
    .replace(/\/en\/docs\/api\/shape\/shape\-attrs/g, '/guide/graphic-style')
    .replace(/\*('?[a-zA-Z]+\*\s+\|\s+\*){1,20}([a-zA-Z]+\*)/g, (_) => {
      /**
       * 将 | 转为 、
       * 匹配子串：
       *  eg1: *null* | *boolean* | *LabelLineCfg*
       */
      return _.split('|').join('、');
    })
    .replace(/\*('?[a-zA-Z]+\\?\[?\]?'?\s+\|\s+){1,20}('?[a-zA-Z]+'?\\?\[?\]?\*)/g, (_) => {
      /**
       * 将 | 转为 、
       * 匹配子串：
       *  eg1: *string | IGroup | IShape | GeometryLabelContentCallback*
       *  eg2: *'overlap' | 'fixedOverlap' | 'limitInShape'*
       *  eg3: *number | number\[]*
       */
      return _.split('|').join('、');
    });
  const language = arg[0] === 'zh' ? '.zh-CN' : '';

  // 删除文档二级标题
  const contents = reWriteContents.replace(/##\s+title:(\s+\S+){1,4}\s+\d+/gi, '');
  // replace 去掉 title
  fs.writeFileSync(path.resolve(__dirname, api_path, `${chartName}${language}.md`), contents);
};

/**
 * 文件扫描，获取所有 API.zh.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanFiles = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      const director = path.join(foldPath + '/', fileName);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${fileName}` : fileName);
      }
      const language = arg[0] === 'en' ? 'API.en.md' : 'API.zh.md';
      if (stats.isFile() && fileName === language) {
        const chartName = dir.split('.')[0];
        if (!excludeFiles.includes(chartName)) {
          const apiPath = path.resolve(
            __dirname,
            `../../G2Plot/examples${extralPath}`,
            dir.split('.').join('/'),
            fileName,
          );
          if (ChartsLevel[toHump(upperCase(dir.split('.')[1]))]) {
            apiGenerator(apiPath, dir.split('.')[1]);
          } else {
            apiGenerator(apiPath, chartName);
          }
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp, toLine(lowerCase(arg[1])));
