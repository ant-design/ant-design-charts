import { Band, Linear } from '@antv/scale';
import { clone, isArray, isFunction, isNumber } from '@antv/util';
import { Component } from '../../core';
import { Group } from '../../shapes';
import { maybeAppend, select, subStyleProps } from '../../util';
import type { ColumnStyleProps, ColumnsStyleProps } from './columns';
import { Columns } from './columns';
import type { LinesStyleProps } from './lines';
import { Lines } from './lines';
import {
  dataToLines,
  lineToCurvePath,
  lineToLinePath,
  linesToAreaPaths,
  linesToStackAreaPaths,
  linesToStackCurveAreaPaths,
} from './path';
import type { Data, SparklineOptions, SparklineStyleProps } from './types';
import { getRange, getStackedData } from './utils';

export type { SparklineOptions, SparklineStyleProps };

export class Sparkline extends Component<SparklineStyleProps> {
  public static tag = 'sparkline';

  /**
   * 将data统一格式化为数组形式
   * 如果堆叠，则生成堆叠数据
   */
  private get rawData(): Data {
    const { data: rawData } = this.attributes;
    if (!rawData || rawData?.length === 0) return [[]];
    const data = clone(rawData);
    // number[] -> number[][]
    return isNumber(data[0]) ? [data] : data;
  }

  private get data(): Data {
    if (this.attributes.isStack) return getStackedData(this.rawData);
    return this.rawData;
  }

  private get scales(): { x: Linear | Band; y: Linear } {
    return this.createScales(this.data);
  }

  /**
   * 基准线，默认为 0
   */
  private get baseline(): number {
    const { y } = this.scales;
    const [y1, y2] = y.getOptions().domain || [0, 0];
    if (y2 < 0) {
      return y.map(y2);
    }

    return y.map(y1 < 0 ? 0 : y1);
  }

  private get containerShape() {
    const { width, height } = this.attributes;
    return { width, height } as { width: number; height: number };
  }

  private get linesStyle(): LinesStyleProps {
    const { type, isStack, smooth } = this.attributes;
    if (type !== 'line') throw new Error('linesStyle can only be used in line type');
    const areaStyle = subStyleProps(this.attributes, 'area');
    const lineStyle = subStyleProps(this.attributes, 'line');
    const { width } = this.containerShape;
    const { data } = this;
    if (data[0].length === 0) return { lines: [], areas: [] };
    const { x, y } = this.scales as { x: Linear; y: Linear };
    // 线条Path
    const lines = dataToLines(data, { type: 'line', x, y });

    // 生成区域path
    let areas: any[] = [];
    if (areaStyle) {
      const { baseline } = this;
      if (isStack) {
        areas = smooth
          ? linesToStackCurveAreaPaths(lines, width, baseline)
          : linesToStackAreaPaths(lines, width, baseline);
      } else {
        areas = linesToAreaPaths(lines, smooth!, width, baseline);
      }
    }
    return {
      lines: lines.map((line, idx) => {
        return {
          stroke: this.getColor(idx),
          d: smooth ? lineToCurvePath(line) : lineToLinePath(line),
          ...lineStyle,
        };
      }) as any,
      areas: areas.map((path, idx) => {
        return {
          d: path,
          fill: this.getColor(idx),
          ...areaStyle,
        };
      }),
    };
  }

  private get columnsStyle(): ColumnsStyleProps {
    const columnStyle = subStyleProps(this.attributes, 'column');
    const { isStack, type, scale } = this.attributes;
    if (type !== 'column') throw new Error('columnsStyle can only be used in column type');
    const { height } = this.containerShape;
    let { rawData: data } = this;
    if (!data) return { columns: [] };
    if (isStack) data = getStackedData(data);
    const { x, y } = this.createScales(data) as { x: Band; y: Linear };
    const [minVal, maxVal] = getRange(data);
    const heightScale = new Linear({
      domain: [0, maxVal - (minVal > 0 ? 0 : minVal)],
      range: [0, height * scale],
    });

    const bandWidth = x.getBandWidth();
    const { rawData } = this;
    return {
      columns: data.map((column, i) => {
        return column.map((val, j) => {
          const barWidth = bandWidth / data.length;
          const getShape = () => {
            return {
              x: x.map(j) + barWidth * i,
              y: val >= 0 ? y.map(val) : y.map(0),
              width: barWidth,
              height: heightScale.map(Math.abs(val)),
            };
          };
          const getStackShape = () => {
            return {
              x: x.map(j),
              y: y.map(val),
              width: bandWidth,
              height: heightScale.map(rawData[i][j]),
            };
          };

          return {
            fill: this.getColor(i),
            ...columnStyle,
            ...(isStack ? getStackShape() : getShape()),
          } as ColumnStyleProps;
        });
      }),
    };
  }

  constructor(options: SparklineOptions) {
    super(options, {
      type: 'line',
      x: 0,
      y: 0,
      width: 200,
      height: 20,
      isStack: false,
      color: ['#83daad', '#edbf45', '#d2cef9', '#e290b3', '#6f63f4'],
      smooth: true,
      lineLineWidth: 1,
      areaOpacity: 0,
      isGroup: false,
      columnLineWidth: 1,
      columnStroke: '#fff',
      scale: 1,
      spacing: 0,
    });
  }

  public render(attributes: Required<SparklineStyleProps>, container: Group) {
    maybeAppend(container, '.container', 'rect').attr('className', 'container').node();

    const { type, x, y } = attributes;
    const className = `spark${type}`;
    const style: any = {
      x,
      y,
      ...(type === 'line' ? this.linesStyle : this.columnsStyle),
    };

    select(container)
      .selectAll('.spark')
      .data([type])
      .join(
        (enter) =>
          enter
            .append((type) => {
              if (type === 'line') return new Lines({ className, style });
              return new Columns({ className, style });
            })
            .attr('className', `spark ${className}`),
        (update) => update.update(style),
        (exit) => exit.remove()
      );
  }

  /**
   * 根据数据索引获取color
   */
  private getColor(index: number) {
    const { color } = this.attributes;
    if (isArray(color)) {
      return color[index % color.length];
    }
    if (isFunction(color)) {
      return color.call(null, index);
    }
    return color;
  }

  /**
   * 根据数据生成scale
   */
  private createScales(data: number[][]) {
    const { type, scale, range = [], spacing } = this.attributes;
    const { width, height } = this.containerShape;
    const [minVal, maxVal] = getRange(data);

    const yScale = new Linear({
      domain: [range[0] ?? minVal, range[1] ?? maxVal],
      range: [height, height * (1 - scale)],
    });

    if (type === 'line') {
      return {
        type,
        x: new Linear({
          domain: [0, data[0].length - 1],
          range: [0, width],
        }),
        y: yScale,
      };
    }

    return {
      type,
      x: new Band({
        domain: data[0].map((val, idx) => idx),
        range: [0, width],
        paddingInner: spacing,
        paddingOuter: spacing / 2,
        align: 0.5,
      }),
      y: yScale,
    };
  }
}
