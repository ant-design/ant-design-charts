import type { StatisticProps as AntdStatisticProps, BadgeProps } from 'antd';
import React from 'react';
export interface StatisticProps extends AntdStatisticProps {
    /**
     * 样式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * ClassName
     *
     * @ignore
     */
    className?: string;
    /** 描述性标签 */
    description?: React.ReactNode;
    /** 标题提示 */
    tip?: React.ReactNode;
    /** 当前项显示的状态 */
    status?: BadgeProps['status'];
    /** Icon 图标 */
    icon?: React.ReactNode;
    /** Layout 布局 */
    layout?: 'horizontal' | 'vertical' | 'inline';
    /** 趋势 */
    trend?: 'up' | 'down';
    children?: any;
}
declare const Statistic: React.FC<StatisticProps>;
export default Statistic;
