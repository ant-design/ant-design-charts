import type { CSSProperties } from 'react';
import React from 'react';
import 'antd/lib/badge/style';
type StatusProps = {
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
};
/** 快捷操作，用于快速的展示一个状态 */
declare const Status: {
    Success: React.FC<StatusProps>;
    Error: React.FC<StatusProps>;
    Processing: React.FC<StatusProps>;
    Default: React.FC<StatusProps>;
    Warning: React.FC<StatusProps>;
    success: React.FC<StatusProps>;
    error: React.FC<StatusProps>;
    processing: React.FC<StatusProps>;
    default: React.FC<StatusProps>;
    warning: React.FC<StatusProps>;
};
export type ProFieldStatusType = keyof typeof Status;
export declare const ProFieldBadgeColor: React.FC<StatusProps & {
    color: string;
}>;
export default Status;
