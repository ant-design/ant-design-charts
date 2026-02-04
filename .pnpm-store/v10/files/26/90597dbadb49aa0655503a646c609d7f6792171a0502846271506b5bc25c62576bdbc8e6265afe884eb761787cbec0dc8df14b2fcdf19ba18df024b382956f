import { deepMix } from '@antv/util';
import type { BaseStyleProps, PathStyleProps } from '../../shapes';
import { DisplayObject, Group } from '../../shapes';
import { deepAssign, select } from '../../util';

export interface LinesStyleProps extends BaseStyleProps {
  x?: number;
  y?: number;
  lines: PathStyleProps[];
  areas: PathStyleProps[];
}

export class Lines extends DisplayObject<LinesStyleProps> {
  private linesGroup = this.appendChild(new Group());

  private areasGroup = this.appendChild(new Group());

  constructor({ style, ...rest }: Partial<DisplayObject<LinesStyleProps>>) {
    super(deepMix({}, { type: 'lines' }, { style, ...rest }));
    this.render();
  }

  public render(): void {
    const { lines, areas, x, y } = this.attributes;
    this.style.transform = `translate(${x}, ${y})`;
    if (lines) this.renderLines(lines);
    if (areas) this.renderAreas(areas);
  }

  public clear(): void {
    this.linesGroup.removeChildren();
    this.areasGroup.removeChildren();
  }

  public update(attr: Partial<LinesStyleProps>) {
    this.attr(deepAssign({}, this.attributes, attr));
    this.render();
  }

  private renderLines(lines: LinesStyleProps['lines']) {
    select(this.linesGroup)
      .selectAll('.line')
      .data(lines)
      .join(
        (enter) =>
          enter
            .append('path')
            .attr('className', 'line')
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

  private renderAreas(areas: LinesStyleProps['areas']) {
    select(this.linesGroup)
      .selectAll('.area')
      .data(areas)
      .join(
        (enter) =>
          enter
            .append('path')
            .attr('className', 'area')
            .each(function (style) {
              this.attr(style);
            }),
        (update) =>
          update.each(function (style) {
            this.style(style);
          }),
        (exit) => exit.remove()
      );
  }
}
