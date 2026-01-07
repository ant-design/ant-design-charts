export function chooseNiceTimeMask(date, intervalMap) {
    const { second, minute, hour, day, week, month, year } = intervalMap;
    if (second.floor(date) < date)
        return '.SSS';
    if (minute.floor(date) < date)
        return ':ss';
    if (hour.floor(date) < date)
        return 'hh:mm';
    if (day.floor(date) < date)
        return 'hh A';
    if (month.floor(date) < date) {
        if (week.floor(date) < date)
            return 'MMM DD';
        return 'ddd DD';
    }
    if (year.floor(date) < date)
        return 'MMMM';
    return 'YYYY';
}
//# sourceMappingURL=choose-mask.js.map