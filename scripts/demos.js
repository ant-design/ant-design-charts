/**
 * 扫描所有demo文件，生成demo文档
 */

const shelljs = require('shelljs');
const readline = require('readline');

// 改操作比较危险，不建议直接扫描
const demos = [
  {
    name: '漏斗图',
    chart: 'Funnel',
  },
  {
    name: '子弹图',
    chart: 'Bullet',
  },
  {
    name: '直方图',
    chart: 'Histogram',
  },
  {
    name: '水波图',
    chart: 'Liquid',
  },
  {
    name: '雷达图',
    chart: 'Radar',
  },
  {
    name: '散点图',
    chart: 'Scatter',
  },
  {
    name: '玫瑰图',
    chart: 'Rose',
  },
  {
    name: '迷你面积图',
    chart: 'TinyArea',
  },
  {
    name: '迷你柱状图',
    chart: 'TinyColumn',
  },
  {
    name: '迷你折线图',
    chart: 'TinyLine',
  },
  {
    name: '词云图',
    chart: 'WordCloud',
  },
];

const start = () => {
  console.info('文档s生成中....');
  demos.forEach((item) => {
    shelljs.exec(`node scripts/singledemo.js ${item.chart} ${item.name}`);
  });
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
readSyncByRl(`即将生成的文档包含：${demos.map((item) => item.chart).join(',')};\n是否继续？`).then(
  (res) => {
    if (res.toLowerCase() === 'y') {
      start();
    } else {
      process.exit();
    }
  },
);
