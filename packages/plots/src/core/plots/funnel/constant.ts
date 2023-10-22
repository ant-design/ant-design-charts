// 漏斗占比: data[n][yField] / data[0][yField]
export const FUNNEL_PERCENT = '__percentage__';
// 漏斗映射值
export const FUNNEL_MAPPING_VALUE = '__mappingValue__';
// 漏斗转化率: data[n][yField] / data[n-1][yField];
export const FUNNEL_CONVERSATION = '__conversion__';
// 漏斗单项占总体和的百分比，用于动态漏斗图计算高度：
// data[n][yField] / sum(data[0-n][yField])
export const FUNNEL_TOTAL_PERCENT = '__totalPercentage__';

// 动态高度漏斗多边形 x 坐标
export const POLYGON_X = '__x__';
// 动态高度漏斗多边形 y 坐标
export const POLYGON_Y = '__y__';

export const CUSTOM_COMVERSION_TAG_CONFIG = '__conversionTag__';
