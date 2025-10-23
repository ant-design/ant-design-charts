"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _DrawerForm = require("../../layouts/DrawerForm");
var _LightFilter = require("../../layouts/LightFilter");
var _ModalForm = require("../../layouts/ModalForm");
var _ProForm = require("../../layouts/ProForm");
var _QueryFilter = require("../../layouts/QueryFilter");
var _StepsForm = require("../../layouts/StepsForm");
var _layoutType = require("./layoutType");
var _valueType = require("./valueType");
var _jsxRuntime = require("react/jsx-runtime");
var _typing = require("./typing");
Object.keys(_typing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typing[key];
    }
  });
});
var _excluded = ["columns", "layoutType", "type", "action", "shouldUpdate", "formRef"];
var FormLayoutType = {
  DrawerForm: _DrawerForm.DrawerForm,
  QueryFilter: _QueryFilter.QueryFilter,
  LightFilter: _LightFilter.LightFilter,
  StepForm: _StepsForm.StepsForm.StepForm,
  StepsForm: _layoutType.StepsForm,
  ModalForm: _ModalForm.ModalForm,
  Embed: _layoutType.Embed,
  Form: _ProForm.ProForm
};

/**
 * 此组件可以根据 Json Schema 来生成相应的表单,大部分配置与 antd 的 table 列配置相同
 *
 * @see 此组件仍为 beta 版本，api 可能发生变化
 */

function BetaSchemaForm(props) {
  var columns = props.columns,
    _props$layoutType = props.layoutType,
    layoutType = _props$layoutType === void 0 ? 'Form' : _props$layoutType,
    _props$type = props.type,
    type = _props$type === void 0 ? 'form' : _props$type,
    action = props.action,
    _props$shouldUpdate = props.shouldUpdate,
    shouldUpdate = _props$shouldUpdate === void 0 ? function (pre, next) {
      return (0, _proUtils.stringify)(pre) !== (0, _proUtils.stringify)(next);
    } : _props$shouldUpdate,
    propsFormRef = props.formRef,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var FormRenderComponents = FormLayoutType[layoutType] || _ProForm.ProForm;
  var _Form$useForm = _antd.Form.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var formInstance = _antd.Form.useFormInstance();
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    forceUpdate = _useState2[1];
  var _useState3 = (0, _react.useState)(function () {
      return [];
    }),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    formDomsDeps = _useState4[0],
    updatedFormDoms = _useState4[1];
  var formRef = (0, _proUtils.useReactiveRef)(props.form || formInstance || form);
  var oldValuesRef = (0, _react.useRef)();
  var propsRef = (0, _proUtils.useLatest)(props);

  /**
   * 生成子项，方便被 table 接入
   *
   * @param items
   */
  var genItems = (0, _proUtils.useRefFunction)(function (items) {
    return items.filter(function (originItem) {
      return !(originItem.hideInForm && type === 'form');
    }).sort(function (a, b) {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }
      return (b.index || 0) - (a.index || 0);
    }).map(function (originItem, index) {
      var title = (0, _proUtils.runFunction)(originItem.title, originItem, 'form', /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
        label: originItem.title,
        tooltip: originItem.tooltip || originItem.tip
      }));
      var item = (0, _proUtils.omitUndefined)({
        title: title,
        label: title,
        name: originItem.name,
        valueType: (0, _proUtils.runFunction)(originItem.valueType, {}),
        key: originItem.key || originItem.dataIndex || index,
        columns: originItem.columns,
        valueEnum: originItem.valueEnum,
        dataIndex: originItem.dataIndex || originItem.key,
        initialValue: originItem.initialValue,
        width: originItem.width,
        index: originItem.index,
        readonly: originItem.readonly,
        colSize: originItem.colSize,
        colProps: originItem.colProps,
        rowProps: originItem.rowProps,
        className: originItem.className,
        tooltip: originItem.tooltip || originItem.tip,
        dependencies: originItem.dependencies,
        proFieldProps: originItem.proFieldProps,
        ignoreFormItem: originItem.ignoreFormItem,
        getFieldProps: originItem.fieldProps ? function () {
          return (0, _proUtils.runFunction)(originItem.fieldProps, formRef.current, originItem);
        } : undefined,
        getFormItemProps: originItem.formItemProps ? function () {
          return (0, _proUtils.runFunction)(originItem.formItemProps, formRef.current, originItem);
        } : undefined,
        render: originItem.render,
        renderFormItem: originItem.renderFormItem,
        renderText: originItem.renderText,
        request: originItem.request,
        params: originItem.params,
        transform: originItem.transform,
        convertValue: originItem.convertValue,
        debounceTime: originItem.debounceTime,
        defaultKeyWords: originItem.defaultKeyWords
      });
      return (0, _valueType.renderValueType)(item, {
        action: action,
        type: type,
        originItem: originItem,
        formRef: formRef,
        genItems: genItems
      });
    }).filter(function (field) {
      return Boolean(field);
    });
  });
  var onValuesChange = (0, _react.useCallback)(function (changedValues, values) {
    var propsOnValuesChange = propsRef.current.onValuesChange;
    if (shouldUpdate === true || typeof shouldUpdate === 'function' && shouldUpdate(values, oldValuesRef.current)) {
      updatedFormDoms([]);
    }
    oldValuesRef.current = values;
    propsOnValuesChange === null || propsOnValuesChange === void 0 || propsOnValuesChange(changedValues, values);
  }, [propsRef, shouldUpdate]);
  var formChildrenDoms = (0, _proUtils.useDeepCompareMemo)(function () {
    if (!formRef.current) return;
    // like StepsForm's columns but not only for StepsForm
    if (columns.length && Array.isArray(columns[0])) return;
    return genItems(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, restProps === null || restProps === void 0 ? void 0 : restProps.open, action, type, formDomsDeps]);

  /**
   * Append layoutType component specific props
   */
  var specificProps = (0, _proUtils.useDeepCompareMemo)(function () {
    if (layoutType === 'StepsForm') {
      return {
        forceUpdate: forceUpdate,
        columns: columns
      };
    }
    return {};
  }, [columns, layoutType]);
  (0, _react.useImperativeHandle)(propsFormRef, function () {
    return formRef.current;
  }, [formRef.current]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FormRenderComponents, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, specificProps), restProps), {}, {
    onInit: function onInit(_, initForm) {
      var _restProps$onInit;
      if (propsFormRef) {
        propsFormRef.current = initForm;
      }
      restProps === null || restProps === void 0 || (_restProps$onInit = restProps.onInit) === null || _restProps$onInit === void 0 || _restProps$onInit.call(restProps, _, initForm);
      formRef.current = initForm;
    },
    form: props.form || form,
    formRef: formRef,
    onValuesChange: onValuesChange,
    children: formChildrenDoms
  }));
}
var _default = exports.default = BetaSchemaForm;