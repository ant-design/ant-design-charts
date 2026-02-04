/// <reference types="react" />
import type { ColProps, RowProps } from 'antd';
import type { ProFormGridConfig } from '../typing';
export declare const GridContext: import("react").Context<ProFormGridConfig>;
interface CommonProps {
    Wrapper?: React.FC<any>;
}
export interface GridHelpers {
    RowWrapper: React.FC<RowProps & CommonProps>;
    ColWrapper: React.FC<ColProps & CommonProps>;
    grid: boolean;
}
export declare const gridHelpers: (config: ProFormGridConfig & CommonProps) => GridHelpers;
export declare const useGridHelpers: (props?: (ProFormGridConfig & CommonProps) | boolean) => GridHelpers;
export {};
