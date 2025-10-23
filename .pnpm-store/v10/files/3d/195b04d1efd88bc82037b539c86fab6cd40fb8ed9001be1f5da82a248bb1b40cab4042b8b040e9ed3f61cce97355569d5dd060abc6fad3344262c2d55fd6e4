"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMergeCell = exports.isBordered = exports.genColumnKey = exports.checkUndefinedOrNull = void 0;
exports.mergePagination = mergePagination;
exports.parseDefaultColumnConfig = parseDefaultColumnConfig;
exports.postDataPipeline = postDataPipeline;
exports.useActionType = useActionType;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
/**
 * 检查值是否存在 为了 避开 0 和 false
 *
 * @param value
 */
var checkUndefinedOrNull = exports.checkUndefinedOrNull = function checkUndefinedOrNull(value) {
  return value !== undefined && value !== null;
};

/**
 * 合并用户 props 和 预设的 props
 *
 * @param pagination
 * @param action
 * @param intl
 */
function mergePagination(pagination, pageInfo, intl) {
  var _pagination$current, _pagination$pageSize;
  if (pagination === false) {
    return false;
  }
  var total = pageInfo.total,
    current = pageInfo.current,
    pageSize = pageInfo.pageSize,
    setPageInfo = pageInfo.setPageInfo;
  var defaultPagination = (0, _typeof2.default)(pagination) === 'object' ? pagination : {};
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    showTotal: function showTotal(all, range) {
      return "".concat(intl.getMessage('pagination.total.range', '第'), " ").concat(range[0], "-").concat(range[1], " ").concat(intl.getMessage('pagination.total.total', '条/总共'), " ").concat(all, " ").concat(intl.getMessage('pagination.total.item', '条'));
    },
    total: total
  }, defaultPagination), {}, {
    current: pagination !== true && pagination ? (_pagination$current = pagination.current) !== null && _pagination$current !== void 0 ? _pagination$current : current : current,
    pageSize: pagination !== true && pagination ? (_pagination$pageSize = pagination.pageSize) !== null && _pagination$pageSize !== void 0 ? _pagination$pageSize : pageSize : pageSize,
    onChange: function onChange(page, newPageSize) {
      var _ref = pagination,
        onChange = _ref.onChange;
      onChange === null || onChange === void 0 || onChange(page, newPageSize || 20);
      // pageSize 改变之后就没必要切换页码
      if (newPageSize !== pageSize || current !== page) {
        setPageInfo({
          pageSize: newPageSize,
          current: page
        });
      }
    }
  });
}

/**
 * 获取用户的 action 信息
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
function useActionType(ref, action, props) {
  /** 这里生成action的映射，保证 action 总是使用的最新 只需要渲染一次即可 */
  var userAction = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.editableUtils), {}, {
    pageInfo: action.pageInfo,
    reload: function () {
      var _reload = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(resetPageIndex) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!resetPageIndex) {
                _context.next = 3;
                break;
              }
              _context.next = 3;
              return action.setPageInfo({
                current: 1
              });
            case 3:
              _context.next = 5;
              return action === null || action === void 0 ? void 0 : action.reload();
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function reload(_x) {
        return _reload.apply(this, arguments);
      }
      return reload;
    }(),
    reloadAndRest: function () {
      var _reloadAndRest = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // reload 之后大概率会切换数据，清空一下选择。
              props.onCleanSelected();
              _context2.next = 3;
              return action.setPageInfo({
                current: 1
              });
            case 3:
              _context2.next = 5;
              return action === null || action === void 0 ? void 0 : action.reload();
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function reloadAndRest() {
        return _reloadAndRest.apply(this, arguments);
      }
      return reloadAndRest;
    }(),
    reset: function () {
      var _reset = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3() {
        var _action$reset;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return props.resetAll();
            case 2:
              _context3.next = 4;
              return action === null || action === void 0 || (_action$reset = action.reset) === null || _action$reset === void 0 ? void 0 : _action$reset.call(action);
            case 4:
              _context3.next = 6;
              return action === null || action === void 0 ? void 0 : action.reload();
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }(),
    fullScreen: function fullScreen() {
      return props.fullScreen();
    },
    clearSelected: function clearSelected() {
      return props.onCleanSelected();
    },
    setPageInfo: function setPageInfo(rest) {
      return action.setPageInfo(rest);
    }
  });
  // eslint-disable-next-line no-param-reassign
  ref.current = userAction;
}
/**
 * 一个转化的 pipeline 列表
 *
 * @param data
 * @param pipeline
 */
function postDataPipeline(data, pipeline) {
  if (pipeline.filter(function (item) {
    return item;
  }).length < 1) {
    return data;
  }
  return pipeline.reduce(function (pre, postData) {
    return postData(pre);
  }, data);
}
var isBordered = exports.isBordered = function isBordered(borderType, border) {
  if (border === undefined) {
    return false;
  }
  if (typeof border === 'boolean') {
    return border;
  }
  return border[borderType];
};
var isMergeCell = exports.isMergeCell = function isMergeCell(dom // 如果是合并单元格的，直接返回对象
) {
  var _dom$props;
  return dom && (0, _typeof2.default)(dom) === 'object' && (dom === null || dom === void 0 || (_dom$props = dom.props) === null || _dom$props === void 0 ? void 0 : _dom$props.colSpan);
};

/**
 * 根据 key 和 dataIndex 生成唯一 id
 *
 * @param key 用户设置的 key
 * @param dataIndex 在对象中的数据
 * @param index 序列号，理论上唯一
 */
var genColumnKey = exports.genColumnKey = function genColumnKey(key, index) {
  if (key) {
    return Array.isArray(key) ? key.join('-') : key.toString();
  }
  return "".concat(index);
};

/**
 * 将 ProTable - column - dataIndex 转为字符串形式
 *
 * @param dataIndex Column 中的 dataIndex
 */
function parseDataIndex(dataIndex) {
  if (Array.isArray(dataIndex)) {
    return dataIndex.join(',');
  }
  return dataIndex === null || dataIndex === void 0 ? void 0 : dataIndex.toString();
}

/**
 * 从 ProColumns 数组中取出默认的排序和筛选数据
 *
 * @param columns ProColumns
 */
function parseDefaultColumnConfig(columns) {
  var filter = {};
  var sort = {};
  columns.forEach(function (column) {
    // 转换 dataIndex
    var dataIndex = parseDataIndex(column.dataIndex);
    if (!dataIndex) {
      return;
    }
    // 当 column 启用 filters 功能时，取出默认的筛选值
    if (column.filters) {
      var defaultFilteredValue = column.defaultFilteredValue;
      if (defaultFilteredValue === undefined) {
        filter[dataIndex] = null;
      } else {
        filter[dataIndex] = column.defaultFilteredValue;
      }
    }
    // 当 column 启用 sorter 功能时，取出默认的排序值
    if (column.sorter && column.defaultSortOrder) {
      sort[dataIndex] = column.defaultSortOrder;
    }
  });
  return {
    sort: sort,
    filter: filter
  };
}