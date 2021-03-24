/**
 * 扫描指定目录下的所有demo文件，生成demo文档
 * eg: `node scripts/singledemo.js Bar 条形图`
 * 指定路径：`node scripts/singledemo.js Funnel 漏斗图 /more-plots`
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { groupBy } = require('loadsh');
const { chartNames } = require('./constants');
const { lowerCase, toLine } = require('./util.js');
const parseFile = require('./parse.js');

const tniyPath = ['RingProgress', 'Progress', 'TinyArea', 'TinyColumn', 'TinyLine'];
const arg = process.argv.splice(2);
if (!arg.length) {
  console.log('请指定扫描目录，例如: "node scripts/singledemo.js Bar 条形图" ');
  return;
}
const lowerCaseFileName = lowerCase(arg[0]);
const toLineName = toLine(lowerCaseFileName);
const tiny = tniyPath.includes(arg[0]) ? '/tiny' : '';
// const fp = path.resolve('../', `G2Plot/examples${tiny}/${toLineName}`);
// G2Plot 修改导航层级，后续走输入逻辑的逻辑，待完善。  `node scripts/singledemo.js Funnel 漏斗图 /more-plots`
const chartPath = arg[2];
const fp = path.resolve('../', `G2Plot/examples${chartPath}/${toLineName}`);
// const fp = path.resolve('./test.ts');
const DOC_PATH = path.join(__dirname, '../docs');
const templateDemoPath = path.join(__dirname, '../template/doc/demo.ejs');
const templateTitlePath = path.join(__dirname, '../template/doc/title.ejs');
const filePath = `${DOC_PATH}/demos/${toLineName}.md`;

// 存储所有的meta文件
let result = [];

/**
 * 根据length排序
 */
const sortAndCombineCharts = () => {
  // 类聚
  const group = groupBy(result, 'chartName');
  // 排序
  const keys = Object.keys(group).sort((pre, next) => {
    return pre.length - next.length;
  });
  result = keys.map((key) => group[key]);
};

/**
 * 文件扫描，获取所有.js文件路径
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
      if (stats.isFile() && /.ts$/.test(fileName) && dir.indexOf('demo') !== -1) {
        const chartName = arg[0];
        console.log(director);
        result.push({
          path: director,
          chartName,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/**
 * 添加导航信息
 */
const writeTitle = () => {
  return new Promise((resolve, reject) => {
    try {
      // let order = chartOrder.findIndex((item) => item === arg[0]);
      let order = Object.keys(chartNames).findIndex((item) => item === arg[0]);
      if (order < 0) {
        console.warn(`${arg[0]} 图表不在scripts/constants chartOrder中，请先配置`);
      }
      ejs.renderFile(
        templateTitlePath,
        {
          chartTitle: arg[1] || '无标题',
          order: order + 1,
        }, // 渲染的数据key: 对应到了ejs中的index
        (err, data) => {
          if (err) {
            console.log('模版文件读取失败： ', err);
            return;
          }
          // 生成文件内容
          fs.writeFile(filePath, data, (err) => {
            if (err) {
              console.log(err);
              reject(err);
            }
            resolve();
          });
        },
      );
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * 追加文件
 */
const writeFile = async () => {
  await writeTitle();
  console.log('扫描结果:', result);
  result.forEach((group) => {
    group.forEach((item) => {
      const chartContent = parseFile(item.path);
      // 生成文件
      ejs.renderFile(
        templateDemoPath,
        {
          chartName: item.chartName,
          chartTitle: chartContent.title,
          chartContent: chartContent.code,
        }, // 渲染的数据key: 对应到了ejs中的index
        (err, data) => {
          if (err) {
            console.log('模版文件读取失败： ', err);
            return;
          }
          // 生成文件内容
          fs.appendFileSync(filePath, data);
        },
      );
    });
  });
  console.log(`${filePath} 生成完成`);
};

const start = async () => {
  scanFiles(fp);
  sortAndCombineCharts();
  writeFile();
};

start();
