"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = require("react");
var useFetchData = function useFetchData(getData, options) {
  var _ref = options || {},
    onRequestError = _ref.onRequestError,
    effects = _ref.effects,
    manual = _ref.manual,
    dataSource = _ref.dataSource,
    defaultDataSource = _ref.defaultDataSource,
    onDataSourceChange = _ref.onDataSourceChange;
  var _useMergedState = (0, _useMergedState5.default)(defaultDataSource, {
      value: dataSource,
      onChange: onDataSourceChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    entity = _useMergedState2[0],
    setEntity = _useMergedState2[1];
  var _useMergedState3 = (0, _useMergedState5.default)(options === null || options === void 0 ? void 0 : options.loading, {
      value: options === null || options === void 0 ? void 0 : options.loading,
      onChange: options === null || options === void 0 ? void 0 : options.onLoadingChange
    }),
    _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
    loading = _useMergedState4[0],
    setLoading = _useMergedState4[1];
  var updateDataAndLoading = function updateDataAndLoading(data) {
    setEntity(data);
    setLoading(false);
  };
  /** 请求数据 */
  var fetchList = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
      var _ref3, data, success;
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!loading) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setLoading(true);
            _context.prev = 3;
            _context.next = 6;
            return getData();
          case 6:
            _context.t0 = _context.sent;
            if (_context.t0) {
              _context.next = 9;
              break;
            }
            _context.t0 = {};
          case 9:
            _ref3 = _context.t0;
            data = _ref3.data;
            success = _ref3.success;
            if (success !== false) {
              updateDataAndLoading(data);
            }
            _context.next = 23;
            break;
          case 15:
            _context.prev = 15;
            _context.t1 = _context["catch"](3);
            if (!(onRequestError === undefined)) {
              _context.next = 21;
              break;
            }
            throw new Error(_context.t1);
          case 21:
            onRequestError(_context.t1);
          case 22:
            setLoading(false);
          case 23:
            _context.prev = 23;
            setLoading(false);
            return _context.finish(23);
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 15, 23, 26]]);
    }));
    return function fetchList() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (manual) {
      return;
    }
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [].concat((0, _toConsumableArray2.default)(effects || []), [manual]));
  return {
    dataSource: entity,
    setDataSource: setEntity,
    loading: loading,
    reload: function reload() {
      return fetchList();
    }
  };
};
var _default = exports.default = useFetchData;