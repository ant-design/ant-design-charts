/**
 * 扫描所有demo文件，生成demo文档
 * eg: node scripts/demo.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const ejs = require('ejs');
const { groupBy } = require('loadsh');
const { chartNames } = require('./constants');
const { toHump, upperCase, lowerCase, toLine } = require('./util.js');
const parseFile = require('./parse.js');

const fp = path.resolve('../', `G2plot/examples`);
const DOC_PATH = path.join(__dirname, '../docs');
const templateDemoPath = path.join(__dirname, '../template/doc/demo.ejs');
const templateTitlePath = path.join(__dirname, '../template/doc/title.ejs');

// 存储所有的meta文件
let result = [];

/**
 * 类聚
 */
const combineCharts = () => {
  const group = groupBy(result, 'parent');
  result = Object.keys(group).map((key) => group[key]);
};

/**
 * 类聚、排序
 */
const sortAndCombineCharts = (data) => {
  // 类聚
  const group = groupBy(data, 'chartName');
  // 排序
  const keys = Object.keys(group).sort((pre, next) => {
    return pre.length - next.length;
  });
  const res = keys.map((key) => group[key]);
  return res;
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
        let chartName = fileInfo[0];
        if (fileInfo[1] !== 'basic' && fileInfo[0] !== fileInfo[1]) {
          chartName = fileInfo[1] + upperCase(fileInfo[0]);
        }
        result.push({
          parent: toHump(upperCase(fileInfo[0])),
          path: director,
          chartName: toHump(upperCase(chartName)),
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
const writeTitle = (name) => {
  return new Promise((resolve, reject) => {
    try {
      let order = Object.keys(chartNames).findIndex((item) => item === name);
      if (order < 0) {
        console.warn(`${name} 图表不在scripts/constants chartNames中，请先配置`);
      }
      ejs.renderFile(
        templateTitlePath,
        {
          chartTitle: chartNames[name],
          order: order,
        }, // 渲染的数据key: 对应到了ejs中的index
        (err, data) => {
          if (err) {
            console.log('模版文件读取失败： ', err);
            return;
          }
          // 生成文件内容
          fs.writeFile(`${DOC_PATH}/testDemos/${toHump(lowerCase(name))}.md`, data, (err) => {
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
const writeFile = () => {
  result.forEach(async (group) => {
    await writeTitle(group[0].parent);
    const res = sortAndCombineCharts(group);
    res.forEach((childrenGroup) => {
      fs.appendFileSync(
        `${DOC_PATH}/testDemos/${toHump(lowerCase(group[0].parent))}.md`,
        `## ${childrenGroup[0].chartName}\n`,
      );

      childrenGroup.forEach((item) => {
        const chartContent = parseFile(item.path);
        let apiPath = '';
        const paths = toLine(lowerCase(item.chartName)).split('-');
        if (paths.length < 2) {
          paths.push('basic');
        }
        paths.forEach((a) => {
          apiPath += `/${a}`;
        });
        // 生成文件
        ejs.renderFile(
          templateDemoPath,
          {
            chartName: item.chartName,
            chartTitle: chartContent.title,
            chartContent: chartContent.code,
            apiPath,
          }, // 渲染的数据key: 对应到了ejs中的index
          (err, data) => {
            if (err) {
              console.log('模版文件读取失败： ', err);
              return;
            }
            // 生成文件内容
            fs.appendFileSync(
              `${DOC_PATH}/testDemos/${toHump(lowerCase(group[0].parent))}.md`,
              data,
            );
          },
        );
      });
    });
  });
  console.log(`${DOC_PATH}/testDemos/${toHump(lowerCase(group[0].parent))}.md 生成完成`);
};

const start = async () => {
  console.info('记得更新同级目录的G2plot噢');
  console.info('文档扫描中....');
  scanFiles(fp);
  console.info('文档组合中....');
  combineCharts();
  console.info('文档生成中....');
  writeFile();
};

readSyncByRl = (tips) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(tips, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
};
readSyncByRl('该操作比较危险，继续(Y/N)?').then((res) => {
  if (res.toLowerCase() === 'y') {
    start();
  } else {
    process.exit();
  }
});
