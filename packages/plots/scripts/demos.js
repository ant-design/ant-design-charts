/**
 * 扫描所有demo文件，生成demo文档
 * eg:
 *  - `node scripts/demos.js`
 *  - `node scripts/demos.js en`
 */
const shelljs = require('shelljs');
const readline = require('readline');
const arg = process.argv.splice(2);

// 该操作比较危险，不建议直接扫描
const demos = [
  {
    name: '折线图',
    chart: 'Line',
  },
  {
    name: '柱状图',
    chart: 'Column',
  },
  {
    name: '条形图',
    chart: 'Bar',
  },
  {
    name: '漏斗图',
    chart: 'Funnel',
  },
  {
    name: '子弹图',
    chart: 'Bullet',
  },
  {
    name: '进度环图',
    chart: 'RingProgress',
  },
  {
    name: '进度条图',
    chart: 'Progress',
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
    name: '仪表盘',
    chart: 'Gauge',
  },
  {
    name: '箱线图',
    chart: 'Box',
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
    name: '热力图',
    chart: 'Heatmap',
  },
  {
    name: '面积图',
    chart: 'Area',
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
  {
    name: '股票图',
    chart: 'Stock',
  },
  {
    name: '饼图',
    chart: 'Pie',
  },
  {
    name: '混合图',
    chart: 'DualAxes',
  },
  {
    name: '对称条形图',
    chart: 'BidirectionalBar',
  },
  {
    name: '雷达图',
    chart: 'Radar',
  },
  {
    name: '矩阵树图',
    chart: 'Treemap',
  },
  {
    name: '旭日图',
    chart: 'Sunburst',
  },
  {
    name: '小提琴图',
    chart: 'Violin',
  },
  {
    name: '分面图',
    chart: 'Facet',
  },
  {
    name: '瀑布图',
    chart: 'Waterfall',
  },
  {
    name: '玉珏图',
    chart: 'RadialBar',
  },
  {
    name: '弦图',
    chart: 'Chord',
  },
];

const start = () => {
  console.info('文档生成中....');
  demos.forEach((item) => {
    // shelljs.exec(`node scripts/singledemo.js ${item.chart} ${arg?.[0]}`);
    shelljs.exec(`node scripts/singledemo.js ${item.chart}`);
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
