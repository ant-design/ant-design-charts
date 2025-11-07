import groupToMap from './group-to-map';
export default (function (data, condition) {
    if (!condition) {
        // 没有条件，则自身改成数组
        return [data];
    }
    var groups = groupToMap(data, condition);
    var array = [];
    for (var i in groups) {
        array.push(groups[i]);
    }
    return array;
});
//# sourceMappingURL=group.js.map