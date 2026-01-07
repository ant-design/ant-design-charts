"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightFilter = LightFilter;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _BaseForm = require("../../BaseForm");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["size", "collapse", "collapseLabel", "initialValues", "onValuesChange", "form", "placement", "formRef", "bordered", "ignoreRules", "footerRender"];
/**
 * 单行的查询表单，一般用于配合 table 或者 list使用 有时也会用于 card 的额外区域
 *
 * @param props
 */
var LightFilterContainer = function LightFilterContainer(props) {
  var items = props.items,
    prefixCls = props.prefixCls,
    _props$size = props.size,
    size = _props$size === void 0 ? 'middle' : _props$size,
    collapse = props.collapse,
    collapseLabel = props.collapseLabel,
    onValuesChange = props.onValuesChange,
    bordered = props.bordered,
    values = props.values,
    footerRender = props.footerRender,
    placement = props.placement;
  var intl = (0, _proProvider.useIntl)();
  var lightFilterClassName = "".concat(prefixCls, "-light-filter");
  var _useStyle = (0, _style.useStyle)(lightFilterClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(function () {
      return (0, _objectSpread3.default)({}, values);
    }),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    moreValues = _useState4[0],
    setMoreValues = _useState4[1];
  (0, _react.useEffect)(function () {
    setMoreValues((0, _objectSpread3.default)({}, values));
  }, [values]);
  var _useMemo = (0, _react.useMemo)(function () {
      var collapseItemsArr = [];
      var outsideItemsArr = [];
      items.forEach(function (item) {
        var _ref = item.props || {},
          secondary = _ref.secondary;
        if (secondary || collapse) {
          collapseItemsArr.push(item);
        } else {
          outsideItemsArr.push(item);
        }
      });
      return {
        collapseItems: collapseItemsArr,
        outsideItems: outsideItemsArr
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.items]),
    collapseItems = _useMemo.collapseItems,
    outsideItems = _useMemo.outsideItems;
  var renderCollapseLabelRender = function renderCollapseLabelRender() {
    if (collapseLabel) {
      return collapseLabel;
    }
    if (collapse) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.FilterOutlined, {
        className: "".concat(lightFilterClassName, "-collapse-icon ").concat(hashId).trim()
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
      size: size,
      label: intl.getMessage('form.lightFilter.more', '更多筛选')
    });
  };
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(lightFilterClassName, hashId, "".concat(lightFilterClassName, "-").concat(size), (0, _defineProperty2.default)({}, "".concat(lightFilterClassName, "-effective"), Object.keys(values).some(function (key) {
      return Array.isArray(values[key]) ? values[key].length > 0 : values[key];
    }))),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(lightFilterClassName, "-container ").concat(hashId).trim(),
      children: [outsideItems.map(function (child, index) {
        if (!(child !== null && child !== void 0 && child.props)) {
          return child;
        }
        var key = child.key;
        var _ref2 = (child === null || child === void 0 ? void 0 : child.props) || {},
          fieldProps = _ref2.fieldProps;
        var newPlacement = fieldProps !== null && fieldProps !== void 0 && fieldProps.placement ? fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placement : placement;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(lightFilterClassName, "-item ").concat(hashId).trim(),
          children: /*#__PURE__*/_react.default.cloneElement(child, {
            fieldProps: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, child.props.fieldProps), {}, {
              placement: newPlacement
            }),
            // proFieldProps 会直接作为 ProField 的 props 传递过去
            proFieldProps: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, child.props.proFieldProps), {}, {
              light: true,
              label: child.props.label,
              bordered: bordered
            }),
            bordered: bordered
          })
        }, key || index);
      }), collapseItems.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(lightFilterClassName, "-item ").concat(hashId).trim(),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FilterDropdown, {
          padding: 24,
          open: open,
          onOpenChange: function onOpenChange(changeOpen) {
            setOpen(changeOpen);
          },
          placement: placement,
          label: renderCollapseLabelRender(),
          footerRender: footerRender,
          footer: {
            onConfirm: function onConfirm() {
              onValuesChange((0, _objectSpread3.default)({}, moreValues));
              setOpen(false);
            },
            onClear: function onClear() {
              var clearValues = {};
              collapseItems.forEach(function (child) {
                var name = child.props.name;
                clearValues[name] = undefined;
              });
              onValuesChange(clearValues);
            }
          },
          children: collapseItems.map(function (child) {
            var key = child.key;
            var _child$props = child.props,
              name = _child$props.name,
              fieldProps = _child$props.fieldProps;
            var newFieldProps = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, fieldProps), {}, {
              onChange: function onChange(e) {
                setMoreValues((0, _objectSpread3.default)((0, _objectSpread3.default)({}, moreValues), {}, (0, _defineProperty2.default)({}, name, e !== null && e !== void 0 && e.target ? e.target.value : e)));
                return false;
              }
            });
            if (moreValues.hasOwnProperty(name)) {
              newFieldProps[child.props.valuePropName || 'value'] = moreValues[name];
            }
            var newPlacement = fieldProps !== null && fieldProps !== void 0 && fieldProps.placement ? fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placement : placement;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "".concat(lightFilterClassName, "-line ").concat(hashId).trim(),
              children: /*#__PURE__*/_react.default.cloneElement(child, {
                fieldProps: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, newFieldProps), {}, {
                  placement: newPlacement
                })
              })
            }, key);
          })
        })
      }, "more") : null]
    })
  }));
};
function LightFilter(props) {
  var size = props.size,
    collapse = props.collapse,
    collapseLabel = props.collapseLabel,
    initialValues = props.initialValues,
    _onValuesChange = props.onValuesChange,
    userForm = props.form,
    placement = props.placement,
    userFormRef = props.formRef,
    bordered = props.bordered,
    ignoreRules = props.ignoreRules,
    footerRender = props.footerRender,
    reset = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-form');
  var _useState5 = (0, _react.useState)(function () {
      return (0, _objectSpread3.default)({}, initialValues);
    }),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    values = _useState6[0],
    setValues = _useState6[1];
  var formRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(userFormRef, function () {
    return formRef.current;
  }, [formRef.current]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseForm.BaseForm, (0, _objectSpread3.default)((0, _objectSpread3.default)({
    size: size,
    initialValues: initialValues,
    form: userForm,
    contentRender: function contentRender(items) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(LightFilterContainer, {
        prefixCls: prefixCls,
        items: items === null || items === void 0 ? void 0 : items.flatMap(function (item) {
          var _item$type;
          if (!item || !(item !== null && item !== void 0 && item.type)) return item;
          /** 如果是 ProFormGroup，直接拼接dom */
          if ((item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName) === 'ProForm-Group') return item.props.children;
          return item;
        }),
        size: size,
        bordered: bordered,
        collapse: collapse,
        collapseLabel: collapseLabel,
        placement: placement,
        values: values || {},
        footerRender: footerRender,
        onValuesChange: function onValuesChange(newValues) {
          var _formRef$current, _formRef$current2;
          var newAllValues = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, values), newValues);
          setValues(newAllValues);
          (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.setFieldsValue(newAllValues);
          (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 || _formRef$current2.submit();
          if (_onValuesChange) {
            _onValuesChange(newValues, newAllValues);
          }
        }
      });
    },
    formRef: formRef,
    formItemProps: {
      colon: false,
      labelAlign: 'left'
    },
    fieldProps: {
      style: {
        width: undefined
      }
    }
  }, (0, _omit.default)(reset, ['labelWidth'])), {}, {
    onValuesChange: function onValuesChange(_, allValues) {
      var _formRef$current3;
      setValues(allValues);
      _onValuesChange === null || _onValuesChange === void 0 || _onValuesChange(_, allValues);
      (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 || _formRef$current3.submit();
    }
  }));
}