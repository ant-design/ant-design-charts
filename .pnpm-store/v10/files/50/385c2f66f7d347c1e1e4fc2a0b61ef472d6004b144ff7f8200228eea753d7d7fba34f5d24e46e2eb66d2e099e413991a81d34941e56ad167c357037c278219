import React from 'react';
import type { CardProps } from '../../typing';
import Divider from '../Divider';
import Operation from '../Operation';
import type { StatisticProps } from '../Statistic';
import Statistic from '../Statistic';
import 'antd/lib/divider/style';
import 'antd/lib/statistic/style';
export type StatisticCardProps = {
    /** 图表配置 */
    chart?: React.ReactNode;
    /** 数值统计配置 */
    statistic?: StatisticProps;
    /** Chart 相对于 statistic 的位置 */
    chartPlacement?: 'right' | 'bottom' | 'left';
    /** 底部额外展示区域 */
    footer?: React.ReactNode;
} & CardProps;
/** @deprecated */
export type StatisticsCardProps = StatisticCardProps;
declare const StatisticCard: React.FC<StatisticCardProps> & {
    Statistic: typeof Statistic;
    Divider: typeof Divider;
    Operation: typeof Operation;
    isProCard: boolean;
    Group: typeof Group;
};
declare const Group: React.FC<StatisticCardProps>;
export default StatisticCard;
