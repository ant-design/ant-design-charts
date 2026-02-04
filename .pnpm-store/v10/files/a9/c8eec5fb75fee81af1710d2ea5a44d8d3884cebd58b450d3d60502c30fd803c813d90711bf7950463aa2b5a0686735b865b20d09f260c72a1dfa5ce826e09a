import { BaseStyleProps, DisplayObject, Group, GroupStyleProps } from '../../shapes';
export type ColumnStyleProps = GroupStyleProps;
export interface ColumnsStyleProps extends BaseStyleProps {
    x?: number;
    y?: number;
    columns: ColumnStyleProps[][];
}
export declare class Columns extends DisplayObject<ColumnsStyleProps> {
    columnsGroup: Group;
    constructor({ style, ...rest }: Partial<DisplayObject<ColumnsStyleProps>>);
    render(): void;
    update(attr: Partial<ColumnsStyleProps>): void;
    clear(): void;
}
