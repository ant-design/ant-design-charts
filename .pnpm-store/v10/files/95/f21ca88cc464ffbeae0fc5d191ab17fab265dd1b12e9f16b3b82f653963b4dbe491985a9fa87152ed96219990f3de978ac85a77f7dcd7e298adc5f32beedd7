import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["size", "collapse", "collapseLabel", "initialValues", "onValuesChange", "form", "placement", "formRef", "bordered", "ignoreRules", "footerRender"];
import { FilterOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, FilterDropdown } from '@ant-design/pro-utils';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import React, { useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { BaseForm } from "../../BaseForm";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
  var intl = useIntl();
  var lightFilterClassName = "".concat(prefixCls, "-light-filter");
  var _useStyle = useStyle(lightFilterClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(function () {
      return _objectSpread({}, values);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    moreValues = _useState4[0],
    setMoreValues = _useState4[1];
  useEffect(function () {
    setMoreValues(_objectSpread({}, values));
  }, [values]);
  var _useMemo = useMemo(function () {
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
      return /*#__PURE__*/_jsx(FilterOutlined, {
        className: "".concat(lightFilterClassName, "-collapse-icon ").concat(hashId).trim()
      });
    }
    return /*#__PURE__*/_jsx(FieldLabel, {
      size: size,
      label: intl.getMessage('form.lightFilter.more', '更多筛选')
    });
  };
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classNames(lightFilterClassName, hashId, "".concat(lightFilterClassName, "-").concat(size), _defineProperty({}, "".concat(lightFilterClassName, "-effective"), Object.keys(values).some(function (key) {
      return Array.isArray(values[key]) ? values[key].length > 0 : values[key];
    }))),
    children: /*#__PURE__*/_jsxs("div", {
      className: "".concat(lightFilterClassName, "-container ").concat(hashId).trim(),
      children: [outsideItems.map(function (child, index) {
        if (!(child !== null && child !== void 0 && child.props)) {
          return child;
        }
        var key = child.key;
        var _ref2 = (child === null || child === void 0 ? void 0 : child.props) || {},
          fieldProps = _ref2.fieldProps;
        var newPlacement = fieldProps !== null && fieldProps !== void 0 && fieldProps.placement ? fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placement : placement;
        return /*#__PURE__*/_jsx("div", {
          className: "".concat(lightFilterClassName, "-item ").concat(hashId).trim(),
          children: /*#__PURE__*/React.cloneElement(child, {
            fieldProps: _objectSpread(_objectSpread({}, child.props.fieldProps), {}, {
              placement: newPlacement
            }),
            // proFieldProps 会直接作为 ProField 的 props 传递过去
            proFieldProps: _objectSpread(_objectSpread({}, child.props.proFieldProps), {}, {
              light: true,
              label: child.props.label,
              bordered: bordered
            }),
            bordered: bordered
          })
        }, key || index);
      }), collapseItems.length ? /*#__PURE__*/_jsx("div", {
        className: "".concat(lightFilterClassName, "-item ").concat(hashId).trim(),
        children: /*#__PURE__*/_jsx(FilterDropdown, {
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
              onValuesChange(_objectSpread({}, moreValues));
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
            var newFieldProps = _objectSpread(_objectSpread({}, fieldProps), {}, {
              onChange: function onChange(e) {
                setMoreValues(_objectSpread(_objectSpread({}, moreValues), {}, _defineProperty({}, name, e !== null && e !== void 0 && e.target ? e.target.value : e)));
                return false;
              }
            });
            if (moreValues.hasOwnProperty(name)) {
              newFieldProps[child.props.valuePropName || 'value'] = moreValues[name];
            }
            var newPlacement = fieldProps !== null && fieldProps !== void 0 && fieldProps.placement ? fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placement : placement;
            return /*#__PURE__*/_jsx("div", {
              className: "".concat(lightFilterClassName, "-line ").concat(hashId).trim(),
              children: /*#__PURE__*/React.cloneElement(child, {
                fieldProps: _objectSpread(_objectSpread({}, newFieldProps), {}, {
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
    reset = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-form');
  var _useState5 = useState(function () {
      return _objectSpread({}, initialValues);
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    values = _useState6[0],
    setValues = _useState6[1];
  var formRef = useRef();
  useImperativeHandle(userFormRef, function () {
    return formRef.current;
  }, [formRef.current]);
  return /*#__PURE__*/_jsx(BaseForm, _objectSpread(_objectSpread({
    size: size,
    initialValues: initialValues,
    form: userForm,
    contentRender: function contentRender(items) {
      return /*#__PURE__*/_jsx(LightFilterContainer, {
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
          var newAllValues = _objectSpread(_objectSpread({}, values), newValues);
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
  }, omit(reset, ['labelWidth'])), {}, {
    onValuesChange: function onValuesChange(_, allValues) {
      var _formRef$current3;
      setValues(allValues);
      _onValuesChange === null || _onValuesChange === void 0 || _onValuesChange(_, allValues);
      (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 || _formRef$current3.submit();
    }
  }));
}
export { LightFilter };