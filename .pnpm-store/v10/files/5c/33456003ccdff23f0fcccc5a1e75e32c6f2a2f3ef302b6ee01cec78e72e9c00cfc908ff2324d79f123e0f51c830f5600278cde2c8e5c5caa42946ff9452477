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
import { createGroups } from './utils/order';
import { GroupN } from './groupN';
/**
 * The Group transform group data by x and y channels, and aggregate.
 */
export const Group = (options = {}) => {
    const { channels = ['x', 'y'] } = options, rest = __rest(options, ["channels"]);
    const groupBy = (I, mark) => createGroups(channels, I, mark);
    return GroupN(Object.assign(Object.assign({}, rest), { groupBy }));
};
Group.props = {};
//# sourceMappingURL=group.js.map