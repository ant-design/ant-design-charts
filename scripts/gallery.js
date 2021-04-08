/**
 * 同一目录文件扫描
 * 扫描g2plot examples下所有meta.json，自动生成gallery.md
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { chartNames, filterTitle } = require('./constants');
const { toHump, upperCase } = require('./util.js');

const fp = path.resolve('../', 'G2Plot/examples');
const DOC_PATH = path.join(__dirname, '../docs');
const templateGalleryPath = path.join(__dirname, '../template/doc/gallery.ejs');
const templateNavPath = path.join(__dirname, '../template/doc/nav.ejs');
const filePath = `${DOC_PATH}/demos/global.zh-CN.md`;

// 存储所有的meta文件
let result = [];

/**
 * 根据order排序并合并相同类型的charts
 */
const sortAndCombineCharts = () => {
  // 排序
  result = result.sort((pre, next) => {
    return pre.order - next.order;
  });
  // 去重
  for (let i = 0; i < result.length; i += 1) {
    if (result[i].compared) {
      continue;
    }
    for (j = i + 1; j < result.length; j += 1) {
      const { compared } = result[j];
      if (compared) {
        continue;
      }
      if (result[i].chart === result[j].chart) {
        result[i].demos = result[i].demos.concat(result[j].demos);
        result[j].compared = true;
      }
    }
  }
};

/**
 * 文件扫描，获取所有meta.json
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
      if (stats.isFile() && fileName === 'meta.json') {
        const file = fs.readFileSync(director, 'utf-8');
        const obj = JSON.parse(file);
        const fileInfo = dir.split('.');
        const chart = upperCase(toHump(fileInfo[0]));
        const order = Object.keys(chartNames).findIndex((item) => item === chart);
        let chartName = obj.demos[0].title.zh;
        fileInfo.splice(fileInfo.length - 1, 1);
        obj.chart = chart;
        obj.compared = false;
        obj.order = order >= 0 ? order : 99;
        obj.path = fileInfo.join('#');
        filterTitle.forEach((item) => {
          chartName = chartName.replace(item, '');
        });
        obj.chartName = chartName;
        result.push(obj);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/**
 * 添加导航信息
 */
const writeNav = () => {
  return new Promise((resolve, reject) => {
    try {
      ejs.renderFile(
        templateNavPath,
        {
          menuTitle: '所有图表',
          navTitle: '图表示例',
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
  await writeNav();
  result.forEach((item) => {
    if (!item.compared) {
      // 生成文件
      ejs.renderFile(
        templateGalleryPath,
        {
          info: item,
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
    }
  });
  console.log('global.md 追加完成');
};

const start = () => {
  scanFiles(fp);
  sortAndCombineCharts();
  writeFile();
};

start();
