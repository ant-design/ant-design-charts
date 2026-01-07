"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _Provide = require("../../Store/Provide");
var _jsxRuntime = require("react/jsx-runtime");
var DensityIcon = function DensityIcon(props) {
  var _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ColumnHeightOutlined, {}) : _props$icon;
  var counter = (0, _react.useContext)(_Provide.TableContext);
  var intl = (0, _proProvider.useIntl)();
  var dropdownProps = (0, _proUtils.menuOverlayCompatible)({
    selectedKeys: [counter.tableSize],
    onClick: function onClick(_ref) {
      var _counter$setTableSize;
      var key = _ref.key;
      (_counter$setTableSize = counter.setTableSize) === null || _counter$setTableSize === void 0 || _counter$setTableSize.call(counter, key);
    },
    style: {
      width: 80
    },
    items: [{
      key: 'large',
      label: intl.getMessage('tableToolBar.densityLarger', '宽松')
    }, {
      key: 'middle',
      label: intl.getMessage('tableToolBar.densityMiddle', '中等')
    }, {
      key: 'small',
      label: intl.getMessage('tableToolBar.densitySmall', '紧凑')
    }]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Dropdown, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dropdownProps), {}, {
    trigger: ['click'],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: intl.getMessage('tableToolBar.density', '表格密度'),
      children: icon
    })
  }));
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(DensityIcon);