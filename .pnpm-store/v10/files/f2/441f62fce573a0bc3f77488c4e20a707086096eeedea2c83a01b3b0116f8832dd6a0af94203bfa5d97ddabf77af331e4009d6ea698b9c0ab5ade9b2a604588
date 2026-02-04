"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proForm = require("@ant-design/pro-form");
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function toLowerLine(str) {
  var temp = str.replace(/[A-Z]/g, function (match) {
    return "-".concat(match.toLowerCase());
  });
  if (temp.startsWith('-')) {
    // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
}
/**
 * 获取当前选择的 Form Layout 配置
 *
 * @param isForm
 * @param searchConfig
 * @returns LightFilter | QueryFilter | ProForm
 */
var getFormCompetent = function getFormCompetent(isForm, searchConfig) {
  if (!isForm && searchConfig !== false) {
    if ((searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.filterType) === 'light') {
      return 'LightFilter';
    }
    return 'QueryFilter';
  }
  return 'Form';
};

/**
 * 获取需要传给相应表单的props
 *
 * @param searchConfig
 * @param name
 */
var getFromProps = function getFromProps(isForm, searchConfig, name) {
  if (!isForm && name === 'LightFilter') {
    // 传给 lightFilter 的问题
    return (0, _omit.default)((0, _objectSpread2.default)({}, searchConfig), ['labelWidth', 'defaultCollapsed', 'filterType']);
  }
  if (!isForm) {
    // 传给 QueryFilter 的配置
    return (0, _omit.default)((0, _objectSpread2.default)({
      labelWidth: searchConfig ? searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.labelWidth : undefined,
      defaultCollapsed: true
    }, searchConfig), ['filterType']);
  }
  return {};
};

/**
 * 从formConfig中获取传给相应表单的配置
 *
 * @param isForm
 * @param formConfig
 */
var getFormConfigs = function getFormConfigs(isForm, formConfig) {
  if (isForm) {
    // 传给Form的配置
    return (0, _omit.default)(formConfig, ['ignoreRules']);
  }
  // 传给Filter的配置
  return (0, _objectSpread2.default)({
    ignoreRules: true
  }, formConfig);
};
/**
 * 这里会把 列配置转化为 form 表单
 *
 * @param param0
 * @returns
 */
var FormRender = function FormRender(_ref) {
  var onSubmit = _ref.onSubmit,
    formRef = _ref.formRef,
    _ref$dateFormatter = _ref.dateFormatter,
    dateFormatter = _ref$dateFormatter === void 0 ? 'string' : _ref$dateFormatter,
    type = _ref.type,
    columns = _ref.columns,
    action = _ref.action,
    ghost = _ref.ghost,
    manualRequest = _ref.manualRequest,
    _onReset = _ref.onReset,
    submitButtonLoading = _ref.submitButtonLoading,
    searchConfig = _ref.search,
    formConfig = _ref.form,
    bordered = _ref.bordered;
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var isForm = type === 'form';
  /** 提交表单，根据两种模式不同，方法不相同 */
  var submit = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(values, firstLoad) {
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (onSubmit) {
              onSubmit(values, firstLoad);
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function submit(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var columnsList = (0, _react.useMemo)(function () {
    return columns.filter(function (item) {
      if (item === _antd.Table.EXPAND_COLUMN || item === _antd.Table.SELECTION_COLUMN) {
        return false;
      }
      if ((item.hideInSearch || item.search === false) && type !== 'form') {
        return false;
      }
      if (type === 'form' && item.hideInForm) {
        return false;
      }
      return true;
    }).map(function (item) {
      var _item$dataIndex;
      var finalValueType = !item.valueType || ['textarea', 'jsonCode', 'code'].includes(item === null || item === void 0 ? void 0 : item.valueType) && type === 'table' ? 'text' : item === null || item === void 0 ? void 0 : item.valueType;
      var columnKey = (item === null || item === void 0 ? void 0 : item.key) || (item === null || item === void 0 || (_item$dataIndex = item.dataIndex) === null || _item$dataIndex === void 0 ? void 0 : _item$dataIndex.toString());
      return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        width: undefined
      }, item.search && (0, _typeof2.default)(item.search) === 'object' ? item.search : {}), {}, {
        valueType: finalValueType,
        proFieldProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item.proFieldProps), {}, {
          proFieldKey: columnKey ? "table-field-".concat(columnKey) : undefined
        })
      });
    });
  }, [columns, type]);
  var className = getPrefixCls('pro-table-search');
  var formClassName = getPrefixCls('pro-table-form');
  var competentName = (0, _react.useMemo)(function () {
    return getFormCompetent(isForm, searchConfig);
  }, [searchConfig, isForm]);

  // 传给每个表单的配置，理论上大家都需要
  var loadingProps = (0, _react.useMemo)(function () {
    return {
      submitter: {
        submitButtonProps: {
          loading: submitButtonLoading
        }
      }
    };
  }, [submitButtonLoading]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, getPrefixCls('pro-card'), true), "".concat(getPrefixCls('pro-card'), "-border"), !!bordered), "".concat(getPrefixCls('pro-card'), "-bordered"), !!bordered), "".concat(getPrefixCls('pro-card'), "-ghost"), !!ghost), className, true), formClassName, isForm), getPrefixCls("pro-table-search-".concat(toLowerLine(competentName))), true), "".concat(className, "-ghost"), ghost), searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.className, searchConfig !== false && (searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.className))),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proForm.BetaSchemaForm, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
      layoutType: competentName,
      columns: columnsList,
      type: type
    }, loadingProps), getFromProps(isForm, searchConfig, competentName)), getFormConfigs(isForm, formConfig || {})), {}, {
      formRef: formRef,
      action: action,
      dateFormatter: dateFormatter,
      onInit: function onInit(values, form) {
        formRef.current = form;
        // 触发一个 submit，之所以这里触发是为了保证 value 都被 format了
        if (type !== 'form') {
          var _action$current, _action$current2, _action$current2$setP;
          // 修改 pageSize，变成从 url 中获取的
          var pageInfo = (_action$current = action.current) === null || _action$current === void 0 ? void 0 : _action$current.pageInfo;
          // 从 values 里获取是因为有时候要从 url中获取的 pageSize。
          var _ref3 = values,
            _ref3$current = _ref3.current,
            current = _ref3$current === void 0 ? pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.current : _ref3$current,
            _ref3$pageSize = _ref3.pageSize,
            pageSize = _ref3$pageSize === void 0 ? pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.pageSize : _ref3$pageSize;
          (_action$current2 = action.current) === null || _action$current2 === void 0 || (_action$current2$setP = _action$current2.setPageInfo) === null || _action$current2$setP === void 0 || _action$current2$setP.call(_action$current2, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageInfo), {}, {
            current: parseInt(current, 10),
            pageSize: parseInt(pageSize, 10)
          }));
          /** 如果是手动模式不需要提交 */
          if (manualRequest) return;
          submit(values, true);
        }
      },
      onReset: function onReset(values) {
        _onReset === null || _onReset === void 0 || _onReset(values);
      },
      onFinish: function onFinish(values) {
        submit(values, false);
      },
      initialValues: formConfig === null || formConfig === void 0 ? void 0 : formConfig.initialValues
    }))
  });
};
var _default = exports.default = FormRender;