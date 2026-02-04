import { deepMix } from '@antv/util';
import { BaseStyleProps, DisplayObject, Group, GroupStyleProps } from '../../shapes';
import { deepAssign, select } from '../../util';

export type ColumnStyleProps = GroupStyleProps;

export interface ColumnsStyleProps extends BaseStyleProps {
  x?: number;
  y?: number;
  columns: ColumnStyleProps[][];
}

export class Columns extends DisplayObject<ColumnsStyleProps> {
  columnsGroup: Group;

  constructor({ style, ...rest }: Partial<DisplayObject<ColumnsStyleProps>>) {
    super(deepMix({}, { type: 'column' }, { style, ...rest }));
    this.columnsGroup = new Group({ name: 'columns' });
    this.appendChild(this.columnsGroup);
    this.render();
  }

  public render(): void {
    const { columns, x, y } = this.attributes;
    this.columnsGroup.style.transform = `translate(${x}, ${y})`;

    select(this.columnsGroup)
      .selectAll('.column')
      .data(columns.flat())
      .join(
        (enter) =>
          enter
            .append('rect')
            .attr('className', 'column')
            .each(function (style) {
              this.attr(style);
            }),
        (update) =>
          update.each(function (style) {
            this.attr(style);
          }),
        (exit) => exit.remove()
      );
  }

  public update(attr: Partial<ColumnsStyleProps>): void {
    this.attr(deepAssign({}, this.attributes, attr));
    this.render();
  }

  public clear(): void {
    this.removeChildren();
  }
}
