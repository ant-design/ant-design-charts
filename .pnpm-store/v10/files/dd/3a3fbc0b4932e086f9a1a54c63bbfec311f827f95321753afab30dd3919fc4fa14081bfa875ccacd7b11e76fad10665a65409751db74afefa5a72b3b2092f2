const scale = ['year', 'month', 'day', 'hour', 'minute', 'second'] as const;
const masks = ['YYYY', 'MM', 'DD', 'hh', 'mm', 'ss'];
type TimeScale = (typeof scale)[number];

export function parseDate(date: Date | string) {
  return date instanceof Date ? date : new Date(date);
}

/**
 * 生成时间格式化
 * @param maxUnit 最大时间单位
 * @param minUnit 最小时间单位
 */
export function getMask([maxUnit, minUnit]: [TimeScale, TimeScale]) {
  const startIndex = scale.indexOf(maxUnit);
  const endIndex = scale.indexOf(minUnit);
  let format = '';
  for (let i = startIndex; i <= endIndex; i += 1) {
    format += masks[i];
    if (i < endIndex) {
      let connect = '-';
      if (i === 2) connect = ' ';
      else if (i > 2) connect = ':';
      format += connect;
    }
  }
  return format;
}

/**
 * 格式化时间
 */
export function formatTime(date: Date, mask: string) {
  type TimeMapKeys = 'YYYY' | 'MM' | 'DD' | 'HH' | 'mm' | 'ss';
  const timeMap: {
    [keys in TimeMapKeys]: number;
  } = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  let strftime = mask;
  (Object.keys(timeMap) as TimeMapKeys[]).forEach((key) => {
    const val = timeMap[key];
    strftime = strftime.replace(key, key === 'YYYY' ? `${val}` : `${val}`.padStart(2, '0'));
  });
  return strftime;
}

/**
 * 获取两个时间的差值，单位毫秒
 */
export function getTimeDiff(a: Date | string, b: Date | string) {
  return parseDate(a).getTime() - parseDate(b).getTime();
}

/**
 * 获取时间跨度
 */
export function getTimeScale(a: Date | string, b: Date | string): TimeScale {
  const [ma, mb] = [parseDate(a), parseDate(b)];
  if (ma.getFullYear() !== mb.getFullYear()) return 'year';
  if (ma.getMonth() !== mb.getMonth()) return 'month';
  if (ma.getDay() !== mb.getDay()) return 'day';
  if (ma.getHours() !== mb.getHours()) return 'hour';
  if (ma.getMinutes() !== mb.getMinutes()) return 'minute';
  return 'second';
}

/**
 * 获取给定时间的开始时间
 */
export function getTimeStart(date: Date, scale: TimeScale) {
  const result = new Date(date);
  const timeMap = {
    year: (d: Date) => {
      d.setMonth(0);
      d.setHours(0, 0, 0, 0);
    },
    month: (d: Date) => {
      d.setDate(1);
      d.setHours(0, 0, 0, 0);
    },
    day: (d: Date) => d.setHours(0, 0, 0, 0),
    hour: (d: Date) => d.setMinutes(0, 0, 0),
    minute: (d: Date) => d.setSeconds(0, 0),
    second: (d: Date) => d.setMilliseconds(0),
  };
  timeMap[scale](result);
  return formatTime(result, getMask(['year', scale]));
}
