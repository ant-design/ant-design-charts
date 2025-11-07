export type TimeTransform = (d: Date, ...rest: any[]) => Date;
type TimeRange = (start: Date, stop: Date, step: number, shouldAdjust?: boolean) => Date[];
type TimeProcess = (d: Date, ...rest: any[]) => void;
type TimeField = (d: Date) => number;

export const DURATION_SECOND = 1000;
export const DURATION_MINUTE = DURATION_SECOND * 60;
export const DURATION_HOUR = DURATION_MINUTE * 60;
export const DURATION_DAY = DURATION_HOUR * 24;
export const DURATION_WEEK = DURATION_DAY * 7;
export const DURATION_MONTH = DURATION_DAY * 30;
export const DURATION_YEAR = DURATION_DAY * 365;

export type Interval = {
  floor: TimeTransform;
  ceil: TimeTransform;
  range: TimeRange;
  duration: number;
};

export type IntervalMap = {
  millisecond: Interval;
  second: Interval;
  minute: Interval;
  hour: Interval;
  day: Interval;
  week: Interval;
  month: Interval;
  year: Interval;
};

export function createInterval(duration: number, floorish: TimeProcess, offseti: TimeProcess, field?: TimeField) {
  const adjust: TimeTransform = (date, step) => {
    const test = (date: Date) => field(date) % step === 0;
    let i = step;
    while (i && !test(date)) {
      offseti(date, -1);
      i -= 1;
    }
    return date;
  };

  const floori: TimeProcess = (date, step?: number) => {
    if (step) adjust(date, step);
    floorish(date);
  };

  const floor: TimeTransform = (date, step?: number) => {
    const d = new Date(+date);
    floori(d, step);
    return d;
  };

  const ceil: TimeTransform = (date, step?: number) => {
    const d = new Date(+date - 1);
    floori(d, step);
    offseti(d, step);
    floori(d);
    return d;
  };

  const range = (start: Date, stop: Date, step: number, shouldAdjust?: boolean) => {
    const ticks = [];
    const roundStep = Math.floor(step);
    const t = shouldAdjust ? ceil(start, step) : ceil(start);
    for (let i = t; i < stop; offseti(i, roundStep), floori(i)) {
      ticks.push(new Date(+i));
    }
    return ticks;
  };

  return {
    ceil,
    floor,
    range,
    duration,
  };
}

export const millisecond: Interval = createInterval(
  1,
  (date) => date,
  (date, step = 1) => {
    date.setTime(+date + step);
  },
  (date) => date.getTime()
);

export const second: Interval = createInterval(
  DURATION_SECOND,
  (date) => {
    date.setMilliseconds(0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_SECOND * step);
  },
  (date) => date.getSeconds()
);

export const minute: Interval = createInterval(
  DURATION_MINUTE,
  (date) => {
    date.setSeconds(0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_MINUTE * step);
  },
  (date) => date.getMinutes()
);

export const hour: Interval = createInterval(
  DURATION_HOUR,
  (date) => {
    date.setMinutes(0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_HOUR * step);
  },
  (date) => date.getHours()
);

export const day: Interval = createInterval(
  DURATION_DAY,
  (date) => {
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_DAY * step);
  },
  (date) => date.getDate() - 1
);

export const month: Interval = createInterval(
  DURATION_MONTH,
  (date) => {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    const month = date.getMonth();
    date.setMonth(month + step);
  },
  (date) => date.getMonth()
);

export const week: Interval = createInterval(
  DURATION_WEEK,
  (date) => {
    date.setDate(date.getDate() - (date.getDay() % 7));
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    date.setDate(date.getDate() + 7 * step);
  },
  (date) => {
    const start = month.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / DURATION_WEEK);
  }
);

export const year: Interval = createInterval(
  DURATION_YEAR,
  (date) => {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    const year = date.getFullYear();
    date.setFullYear(year + step);
  },
  (date) => date.getFullYear()
);

export const localIntervalMap: IntervalMap = {
  millisecond,
  second,
  minute,
  hour,
  day,
  week,
  month,
  year,
};
