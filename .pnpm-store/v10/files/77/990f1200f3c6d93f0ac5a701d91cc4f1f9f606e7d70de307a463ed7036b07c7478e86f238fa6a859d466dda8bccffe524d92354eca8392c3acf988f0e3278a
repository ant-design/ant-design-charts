"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const order_1 = require("./utils/order");
const groupN_1 = require("./groupN");
/**
 * The Group transform group data by x and y channels, and aggregate.
 */
const Group = (options = {}) => {
    const { channels = ['x', 'y'] } = options, rest = __rest(options, ["channels"]);
    const groupBy = (I, mark) => (0, order_1.createGroups)(channels, I, mark);
    return (0, groupN_1.GroupN)(Object.assign(Object.assign({}, rest), { groupBy }));
};
exports.Group = Group;
exports.Group.props = {};
//# sourceMappingURL=group.js.map