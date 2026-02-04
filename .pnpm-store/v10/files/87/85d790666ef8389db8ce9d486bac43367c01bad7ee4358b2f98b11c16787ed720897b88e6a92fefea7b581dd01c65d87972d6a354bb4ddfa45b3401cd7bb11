"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3LogNice = void 0;
const log_1 = require("./log");
const d3LogNice = (a, b, _, base) => {
    const shouldReflect = a < 0;
    const log = (0, log_1.logs)(base, shouldReflect);
    const pow = (0, log_1.pows)(base, shouldReflect);
    const r = a > b;
    const min = r ? b : a;
    const max = r ? a : b;
    const niceDomain = [pow(Math.floor(log(min))), pow(Math.ceil(log(max)))];
    return r ? niceDomain.reverse() : niceDomain;
};
exports.d3LogNice = d3LogNice;
//# sourceMappingURL=d3-log-nice.js.map