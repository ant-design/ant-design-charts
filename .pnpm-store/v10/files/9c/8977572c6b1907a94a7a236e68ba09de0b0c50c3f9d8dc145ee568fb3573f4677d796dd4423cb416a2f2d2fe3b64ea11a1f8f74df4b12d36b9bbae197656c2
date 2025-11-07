export var columnSort = function columnSort(columnsMap) {
  return function (a, b) {
    var _columnsMap$aKey, _columnsMap$bKey;
    var aFixed = a.fixed,
      aIndex = a.index;
    var bFixed = b.fixed,
      bIndex = b.index;
    if (aFixed === 'left' && bFixed !== 'left' || bFixed === 'right' && aFixed !== 'right') {
      return -2;
    }
    if (bFixed === 'left' && aFixed !== 'left' || aFixed === 'right' && bFixed !== 'right') {
      return 2;
    }
    // 如果没有index，在 dataIndex 或者 key 不存在的时候他会报错
    var aKey = a.key || "".concat(aIndex);
    var bKey = b.key || "".concat(bIndex);
    if ((_columnsMap$aKey = columnsMap[aKey]) !== null && _columnsMap$aKey !== void 0 && _columnsMap$aKey.order || (_columnsMap$bKey = columnsMap[bKey]) !== null && _columnsMap$bKey !== void 0 && _columnsMap$bKey.order) {
      var _columnsMap$aKey2, _columnsMap$bKey2;
      return (((_columnsMap$aKey2 = columnsMap[aKey]) === null || _columnsMap$aKey2 === void 0 ? void 0 : _columnsMap$aKey2.order) || 0) - (((_columnsMap$bKey2 = columnsMap[bKey]) === null || _columnsMap$bKey2 === void 0 ? void 0 : _columnsMap$bKey2.order) || 0);
    }
    return (a.index || 0) - (b.index || 0);
  };
};