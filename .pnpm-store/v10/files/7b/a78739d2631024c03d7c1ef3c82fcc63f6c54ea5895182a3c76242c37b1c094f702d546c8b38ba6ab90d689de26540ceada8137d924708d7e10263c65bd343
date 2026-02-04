import { identity } from '@antv/util';
import { format } from 'fecha';
import { Continuous } from './continuous';
import { TickMethodOptions, TimeOptions } from '../types';
import { d3Time } from '../tick-methods/d3-time';
import { d3TimeNice, createInterpolateNumber, localIntervalMap, utcIntervalMap, chooseNiceTimeMask } from '../utils';

function offset(date: Date): Date {
  const minuteOffset = date.getTimezoneOffset();
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + minuteOffset, d.getSeconds(), d.getMilliseconds());
  return d;
}

export class Time extends Continuous<TimeOptions> {
  protected getDefaultOptions(): TimeOptions {
    return {
      domain: [new Date(2000, 0, 1), new Date(2000, 0, 2)],
      range: [0, 1],
      nice: false,
      tickCount: 5,
      tickInterval: undefined,
      unknown: undefined,
      clamp: false,
      tickMethod: d3Time,
      interpolate: createInterpolateNumber,
      mask: undefined,
      utc: false,
    };
  }

  protected chooseTransforms() {
    const transform = (x: Date) => +x;
    const untransform = (x: number) => new Date(x);
    return [transform, untransform];
  }

  protected chooseNice() {
    return d3TimeNice;
  }

  protected getTickMethodOptions(): TickMethodOptions<Date> {
    const { domain, tickCount, tickInterval, utc } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount, tickInterval, utc];
  }

  public getFormatter() {
    const { mask, utc } = this.options;
    const maskMap = utc ? utcIntervalMap : localIntervalMap;
    const time = utc ? offset : identity; // fecha 不支持 utc 格式化，所以需要设置一个偏移
    return (d: Date) => format(time(d), mask || chooseNiceTimeMask(d, maskMap));
  }

  public clone() {
    return new Time(this.options);
  }
}
