export const DURATION_SECOND = 1000;
export const DURATION_MINUTE = DURATION_SECOND * 60;
export const DURATION_HOUR = DURATION_MINUTE * 60;
export const DURATION_DAY = DURATION_HOUR * 24;
export const DURATION_WEEK = DURATION_DAY * 7;
export const DURATION_MONTH = DURATION_DAY * 30;
export const DURATION_YEAR = DURATION_DAY * 365;
export function createInterval(duration, floorish, offseti, field) {
    const adjust = (date, step) => {
        const test = (date) => field(date) % step === 0;
        let i = step;
        while (i && !test(date)) {
            offseti(date, -1);
            i -= 1;
        }
        return date;
    };
    const floori = (date, step) => {
        if (step)
            adjust(date, step);
        floorish(date);
    };
    const floor = (date, step) => {
        const d = new Date(+date);
        floori(d, step);
        return d;
    };
    const ceil = (date, step) => {
        const d = new Date(+date - 1);
        floori(d, step);
        offseti(d, step);
        floori(d);
        return d;
    };
    const range = (start, stop, step, shouldAdjust) => {
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
export const millisecond = createInterval(1, (date) => date, (date, step = 1) => {
    date.setTime(+date + step);
}, (date) => date.getTime());
export const second = createInterval(DURATION_SECOND, (date) => {
    date.setMilliseconds(0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_SECOND * step);
}, (date) => date.getSeconds());
export const minute = createInterval(DURATION_MINUTE, (date) => {
    date.setSeconds(0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_MINUTE * step);
}, (date) => date.getMinutes());
export const hour = createInterval(DURATION_HOUR, (date) => {
    date.setMinutes(0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_HOUR * step);
}, (date) => date.getHours());
export const day = createInterval(DURATION_DAY, (date) => {
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_DAY * step);
}, (date) => date.getDate() - 1);
export const month = createInterval(DURATION_MONTH, (date) => {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const month = date.getMonth();
    date.setMonth(month + step);
}, (date) => date.getMonth());
export const week = createInterval(DURATION_WEEK, (date) => {
    date.setDate(date.getDate() - (date.getDay() % 7));
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setDate(date.getDate() + 7 * step);
}, (date) => {
    const start = month.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / DURATION_WEEK);
});
export const year = createInterval(DURATION_YEAR, (date) => {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const year = date.getFullYear();
    date.setFullYear(year + step);
}, (date) => date.getFullYear());
export const localIntervalMap = {
    millisecond,
    second,
    minute,
    hour,
    day,
    week,
    month,
    year,
};
//# sourceMappingURL=time-interval.js.map