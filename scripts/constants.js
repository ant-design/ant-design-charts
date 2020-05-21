// 过滤文件
const filterFileFolder = [
  '.umi',
  'base',
  'context',
  'errorBoundary',
  'hooks',
  'util',
  'interface',
  'loading',
  'theme',
];

const filterTitle = ['基础', '分组', '堆叠', '密度'];
const exampleBaseUrl = 'https://antv-g2plot.gitee.io';
const chartNames = {
  Line: '折线图',
  Bar: '条形图',
  Area: '面积图',
  Column: '柱状图',
  Pie: '饼图',
  Rose: '玫瑰图',
  Bubble: '气泡图',
  Calendar: '日历图',
  ColumnLine: '混合图',
  DensityHeatmap: '密度热力图',
  Donut: '环图',
  DualLine: '双折线混合图表',
  FanGauge: '仪表盘',
  Funnel: '漏斗图',
  Bullet: '子弹图',
  Gauge: '仪表盘',
  GroupedBar: '分组条形图',
  GroupedColumn: '分组柱状图',
  GroupedColumnLine: '分组柱+折线线混合图表',
  GroupedRose: '分组玫瑰图',
  Heatmap: '热力图',
  Histogram: '直方图',
  Liquid: '水波图',
  MeterGauge: '仪表盘',
  PercentStackedArea: '百分比堆叠面积图',
  PercentStackedBar: '百分比堆叠条形图',
  PercentStackedColumn: '百分比堆叠柱状图',
  Progress: '迷你图',
  Radar: '雷达图',
  RangeBar: '分组条形图',
  RangeColumn: '区间柱状图',
  RingProgress: '环形进度条',
  Scatter: '散点图',
  StackedArea: '堆叠面积图',
  StackedBar: '堆叠条形图',
  StackedColumn: '堆叠柱状图',
  StackedColumnLine: '折线图',
  StackedRose: '玫瑰图',
  StepLine: '基础阶梯图',
  TinyArea: '迷你图',
  TinyColumn: '迷你图',
  TinyLine: '迷你图',
  Treemap: '树图',
  Waterfall: '瀑布图',
  WordCloud: '词云图',
  Sparkline: '迷你图',
  Combo: '混合图',
  Advanced: '高级用法',
  General: '图表通用配置',
};

const dataUrl = [
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/%24KjfUOgRYa/GDP.json',
    fileName: 'GDP.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json',
    fileName: 'IMDB.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/EMHYwMXxar/average_across_years.json',
    fileName: 'average_across_years.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/vIirZPDIu%26/contributions.json',
    fileName: 'contributions.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/oSZa1qh9tB/emissions.json',
    fileName: 'emissions.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json',
    fileName: 'fireworks-sales.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/xS1FM7kNuj/global-temp.json',
    fileName: 'global-temp.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/9BQqVeIBPH/heatmap.json',
    fileName: 'heatmap.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/EuuT6Kl6qb/income.json',
    fileName: 'income.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/025J4QwaAP/jobpaying.json',
    fileName: 'jobpaying.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/t3t9L%26nZ5p/life-expectancy.json',
    fileName: 'life-expectancy.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/A%26Bp9uKRb2/oil.json',
    fileName: 'oil.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/71YajFg3XZ/revenue.json',
    fileName: 'revenue.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/P%242UXb08CS/roma.json',
    fileName: 'roma.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json',
    fileName: 'sales.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/XMCQ4qsuPa/smoking-rate.json',
    fileName: 'smoking-rate.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/NXH9bWd4MU/subsales.json',
    fileName: 'subsales.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/HVFdmAaR67/weather.json',
    fileName: 'weather.json',
  },
  {
    filePath: 'https://gw.alipayobjects.com/os/antfincdn/fLPUlSQCRI/word-cloud.json',
    fileName: 'word-cloud.json',
  },
];

module.exports = { filterFileFolder, filterTitle, exampleBaseUrl, chartNames, dataUrl };
