import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["transform", "actionRender", "creatorButtonProps", "label", "alwaysShowItemLabel", "tooltip", "creatorRecord", "itemRender", "rules", "itemContainerRender", "fieldExtraRender", "copyIconProps", "children", "deleteIconProps", "arrowSort", "upIconProps", "downIconProps", "actionRef", "style", "prefixCls", "actionGuard", "min", "max", "colProps", "wrapperCol", "rowProps", "onAfterAdd", "onAfterRemove", "isValidateList", "emptyListMessage", "className", "containerClassName", "containerStyle", "readonly"];
import { CopyOutlined, DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { ProFormContext } from '@ant-design/pro-utils';
import { ConfigProvider, Form } from 'antd';
import classNames from 'classnames';
import { noteOnce } from "rc-util/es/warning";
import React, { useContext, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import FieldContext from "../../FieldContext";
import { useGridHelpers } from "../../helpers";
import { ProFormListContainer } from "./ListContainer";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FormListContext = /*#__PURE__*/React.createContext({});
function ProFormList(props) {
  var actionRefs = useRef();
  var context = useContext(ConfigProvider.ConfigContext);
  var listContext = useContext(FormListContext);
  var baseClassName = context.getPrefixCls('pro-form-list');
  // Internationalization
  var intl = useIntl();
  /** 从 context 中拿到的值 */
  var _React$useContext = React.useContext(FieldContext),
    setFieldValueType = _React$useContext.setFieldValueType;
  var transform = props.transform,
    actionRender = props.actionRender,
    creatorButtonProps = props.creatorButtonProps,
    label = props.label,
    alwaysShowItemLabel = props.alwaysShowItemLabel,
    tooltip = props.tooltip,
    creatorRecord = props.creatorRecord,
    itemRender = props.itemRender,
    rules = props.rules,
    itemContainerRender = props.itemContainerRender,
    fieldExtraRender = props.fieldExtraRender,
    _props$copyIconProps = props.copyIconProps,
    copyIconProps = _props$copyIconProps === void 0 ? {
      Icon: CopyOutlined,
      tooltipText: intl.getMessage('copyThisLine', '复制此项')
    } : _props$copyIconProps,
    _children = props.children,
    _props$deleteIconProp = props.deleteIconProps,
    deleteIconProps = _props$deleteIconProp === void 0 ? {
      Icon: DeleteOutlined,
      tooltipText: intl.getMessage('deleteThisLine', '删除此项')
    } : _props$deleteIconProp,
    arrowSort = props.arrowSort,
    _props$upIconProps = props.upIconProps,
    upIconProps = _props$upIconProps === void 0 ? {
      Icon: ArrowUpOutlined,
      tooltipText: intl.getMessage('sortUpThisLine', '向上排序')
    } : _props$upIconProps,
    _props$downIconProps = props.downIconProps,
    downIconProps = _props$downIconProps === void 0 ? {
      Icon: ArrowDownOutlined,
      tooltipText: intl.getMessage('sortDownThisLine', '向下排序')
    } : _props$downIconProps,
    actionRef = props.actionRef,
    style = props.style,
    prefixCls = props.prefixCls,
    actionGuard = props.actionGuard,
    min = props.min,
    max = props.max,
    colProps = props.colProps,
    wrapperCol = props.wrapperCol,
    rowProps = props.rowProps,
    _onAfterAdd = props.onAfterAdd,
    _onAfterRemove = props.onAfterRemove,
    _props$isValidateList = props.isValidateList,
    isValidateList = _props$isValidateList === void 0 ? false : _props$isValidateList,
    _props$emptyListMessa = props.emptyListMessage,
    emptyListMessage = _props$emptyListMessa === void 0 ? '列表不能为空' : _props$emptyListMessa,
    className = props.className,
    containerClassName = props.containerClassName,
    containerStyle = props.containerStyle,
    readonly = props.readonly,
    rest = _objectWithoutProperties(props, _excluded);
  var _useGridHelpers = useGridHelpers({
      colProps: colProps,
      rowProps: rowProps
    }),
    ColWrapper = _useGridHelpers.ColWrapper,
    RowWrapper = _useGridHelpers.RowWrapper;
  var proFormContext = useContext(ProFormContext);

  // 处理 list 的嵌套
  var name = useMemo(function () {
    if (listContext.name === undefined) {
      return [rest.name].flat(1);
    }
    return [listContext.name, rest.name].flat(1);
  }, [listContext.name, rest.name]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(actionRef, function () {
    return _objectSpread(_objectSpread({}, actionRefs.current), {}, {
      get: function get(index) {
        return proFormContext.formRef.current.getFieldValue([].concat(_toConsumableArray(name), [index]));
      },
      getList: function getList() {
        return proFormContext.formRef.current.getFieldValue(_toConsumableArray(name));
      }
    });
  }, [name, proFormContext.formRef]);
  useEffect(function () {
    noteOnce(!!proFormContext.formRef, "ProFormList \u5FC5\u987B\u8981\u653E\u5230 ProForm \u4E2D,\u5426\u5219\u4F1A\u9020\u6210\u884C\u4E3A\u5F02\u5E38\u3002");
    noteOnce(!!proFormContext.formRef, "Proformlist must be placed in ProForm, otherwise it will cause abnormal behavior.");
  }, [proFormContext.formRef]);
  useEffect(function () {
    // 如果 setFieldValueType 和 props.name 不存在不存入
    if (!setFieldValueType || !props.name) {
      return;
    }

    // Field.type === 'ProField' 时 props 里面是有 valueType 的，所以要设置一下
    // 写一个 ts 比较麻烦，用 any 顶一下
    setFieldValueType([props.name].flat(1).filter(function (itemName) {
      return itemName !== undefined;
    }), {
      valueType: 'formList',
      transform: transform
    });
  }, [props.name, setFieldValueType, transform]);
  var _useStyle = useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (!proFormContext.formRef) return null;
  return wrapSSR( /*#__PURE__*/_jsx(ColWrapper, {
    children: /*#__PURE__*/_jsx("div", {
      className: classNames(baseClassName, hashId),
      style: style,
      children: /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({
        label: label,
        prefixCls: prefixCls,
        tooltip: tooltip,
        style: style,
        required: rules === null || rules === void 0 ? void 0 : rules.some(function (rule) {
          return rule.required;
        }),
        wrapperCol: wrapperCol,
        className: className
      }, rest), {}, {
        name: isValidateList ? name : undefined,
        rules: isValidateList ? [{
          validator: function validator(rule, value) {
            if (!value || value.length === 0) {
              return Promise.reject(new Error(emptyListMessage));
            }
            return Promise.resolve();
          },
          required: true
        }] : undefined,
        children: /*#__PURE__*/_jsx(Form.List, _objectSpread(_objectSpread({
          rules: rules
        }, rest), {}, {
          name: name,
          children: function children(fields, action, meta) {
            // 将 action 暴露给外部
            actionRefs.current = action;
            return /*#__PURE__*/_jsxs(RowWrapper, {
              children: [/*#__PURE__*/_jsx(ProFormListContainer, {
                name: name,
                readonly: !!readonly,
                originName: rest.name,
                copyIconProps: copyIconProps,
                deleteIconProps: deleteIconProps,
                arrowSort: arrowSort,
                upIconProps: upIconProps,
                downIconProps: downIconProps,
                formInstance: proFormContext.formRef.current,
                prefixCls: baseClassName,
                meta: meta,
                fields: fields,
                itemContainerRender: itemContainerRender,
                itemRender: itemRender,
                fieldExtraRender: fieldExtraRender,
                creatorButtonProps: creatorButtonProps,
                creatorRecord: creatorRecord,
                actionRender: actionRender,
                action: action,
                actionGuard: actionGuard,
                alwaysShowItemLabel: alwaysShowItemLabel,
                min: min,
                max: max,
                count: fields.length,
                onAfterAdd: function onAfterAdd(defaultValue, insertIndex, count) {
                  if (isValidateList) {
                    proFormContext.formRef.current.validateFields([name]);
                  }
                  _onAfterAdd === null || _onAfterAdd === void 0 || _onAfterAdd(defaultValue, insertIndex, count);
                },
                onAfterRemove: function onAfterRemove(index, count) {
                  if (isValidateList) {
                    if (count === 0) {
                      proFormContext.formRef.current.validateFields([name]);
                    }
                  }
                  _onAfterRemove === null || _onAfterRemove === void 0 || _onAfterRemove(index, count);
                },
                containerClassName: containerClassName,
                containerStyle: containerStyle,
                children: _children
              }), /*#__PURE__*/_jsx(Form.ErrorList, {
                errors: meta.errors
              })]
            });
          }
        }))
      }))
    })
  }));
}
export { FormListContext, ProFormList };