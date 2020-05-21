/**
 * 扫描指定目录下的所有demo文件，生成demo文档
 * eg: node scripts/singledemo.js Bar 条形图
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { groupBy } = require('loadsh');
const { chartOrder } = require('./constants');
const { toHump, upperCase, lowerCase, toLine } = require('./util.js');
const parseFile = require('./parse.js');

const arg = process.argv.splice(2);
if (!arg.length) {
  console.log('请指定扫描目录，例如: "node scripts/singledemo.js Bar 条形图" ');
  return;
}
const lowerCaseFileName = lowerCase(arg[0]);
const toLineName = toLine(lowerCaseFileName);
const fp = path.resolve('../', `G2plot/examples/${toLineName}`);
const DOC_PATH = path.join(__dirname, '../docs');
const templateDemoPath = path.join(__dirname, '../template/doc/demo.ejs');
const templateTitlePath = path.join(__dirname, '../template/doc/title.ejs');
const filePath = `${DOC_PATH}/testDemos/${lowerCaseFileName}.md`;

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
      if (stats.isFile() && /.js$/.test(fileName) && dir.indexOf('demo') !== -1) {
        const fileInfo = dir.split('.');
        let chartName = arg[0];
        if (fileInfo[0] !== 'basic') {
          chartName = toHump(upperCase(fileInfo[0] + arg[0]));
        }
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
      let order = chartOrder.findIndex((item) => item === arg[0]);
      if (order < 0) {
        console.warn(`${arg[0]} 图表不在scripts/constants chartOrder中，请先配置`);
      }
      ejs.renderFile(
        templateTitlePath,
        {
          chartTitle: arg[1] || '无标题',
          order: chartOrder.length - order,
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
  console.log(result);
  result.forEach((group) => {
    fs.appendFileSync(filePath, `## ${group[0].chartName}\n`);
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
  console.info('记得更新同级目录的G2plot噢');
  console.info('文档扫描中....');
  scanFiles(fp);
  console.info('文档组合中....');
  sortAndCombineCharts();
  console.info('文档生成中....');
  writeFile();
};

start();
