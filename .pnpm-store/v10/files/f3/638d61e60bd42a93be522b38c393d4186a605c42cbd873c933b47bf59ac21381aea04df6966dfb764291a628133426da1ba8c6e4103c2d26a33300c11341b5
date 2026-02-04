"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
const util_1 = require("@antv/util");
const fecha_1 = require("fecha");
const continuous_1 = require("./continuous");
const d3_time_1 = require("../tick-methods/d3-time");
const utils_1 = require("../utils");
function offset(date) {
    const minuteOffset = date.getTimezoneOffset();
    const d = new Date(date);
    d.setMinutes(d.getMinutes() + minuteOffset, d.getSeconds(), d.getMilliseconds());
    return d;
}
class Time extends continuous_1.Continuous {
    getDefaultOptions() {
        return {
            domain: [new Date(2000, 0, 1), new Date(2000, 0, 2)],
            range: [0, 1],
            nice: false,
            tickCount: 5,
            tickInterval: undefined,
            unknown: undefined,
            clamp: false,
            tickMethod: d3_time_1.d3Time,
            interpolate: utils_1.createInterpolateNumber,
            mask: undefined,
            utc: false,
        };
    }
    chooseTransforms() {
        const transform = (x) => +x;
        const untransform = (x) => new Date(x);
        return [transform, untransform];
    }
    chooseNice() {
        return utils_1.d3TimeNice;
    }
    getTickMethodOptions() {
        const { domain, tickCount, tickInterval, utc } = this.options;
        const min = domain[0];
        const max = domain[domain.length - 1];
        return [min, max, tickCount, tickInterval, utc];
    }
    getFormatter() {
        const { mask, utc } = this.options;
        const maskMap = utc ? utils_1.utcIntervalMap : utils_1.localIntervalMap;
        const time = utc ? offset : util_1.identity; // fecha 不支持 utc 格式化，所以需要设置一个偏移
        return (d) => (0, fecha_1.format)(time(d), mask || (0, utils_1.chooseNiceTimeMask)(d, maskMap));
    }
    clone() {
        return new Time(this.options);
    }
}
exports.Time = Time;
//# sourceMappingURL=time.js.map