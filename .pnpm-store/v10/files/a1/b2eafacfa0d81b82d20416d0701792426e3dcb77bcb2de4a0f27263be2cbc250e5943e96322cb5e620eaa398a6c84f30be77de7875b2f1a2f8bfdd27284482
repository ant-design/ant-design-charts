import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["valueEnum", "render", "renderText", "mode", "plain", "dataIndex", "request", "params", "editable"],
  _excluded2 = ["request", "columns", "params", "dataSource", "onDataSourceChange", "formProps", "editable", "loading", "onLoadingChange", "actionRef", "onRequestError", "emptyText", "contentStyle"];
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import ProForm, { ProFormField } from '@ant-design/pro-form';
import ProSkeleton from '@ant-design/pro-skeleton';
import { ErrorBoundary, InlineErrorFormItem, LabelIconTip, compareVersions, genCopyable, getFieldPropsOrFormItemProps, stringify, useEditableMap } from '@ant-design/pro-utils';
import { ConfigProvider, Descriptions, Space, version } from 'antd';
import toArray from "rc-util/es/Children/toArray";
import get from "rc-util/es/utils/get";
import React, { useContext, useEffect } from 'react';
import useFetchData from "./useFetchData";

// 兼容代码-----------

import { proTheme } from '@ant-design/pro-provider';
import "antd/es/descriptions/style";
//----------------------

// todo remove it

/**
 * 定义列表属性的类型定义，用于定义列表的一列
 * @typedef {Object} ProDescriptionsItemProps
 * @property {ProSchema} schema - 用于生成表格项的 schema 配置对象
 * @property {boolean} [hide] - 是否隐藏该列，可用于权限控制
 * @property {boolean} [plain] - 是否只展示文本，不展示标签
 * @property {boolean} [copyable] - 是否可以拷贝该列的内容
 * @property {boolean | { showTitle?: boolean }} [ellipsis] - 是否展示省略号，如果是一个对象，可以设置鼠标悬浮时是否展示完整的内容
 * @property {ProFieldFCMode} [mode] - ProField 组件的模式
 * @property {React.ReactNode} [children] - 表格项的子组件
 * @property {number} [order] - 表格项的排序
 * @property {number} [index] - 表格项的索引
 * @template T - 表格数据的类型
 * @template ValueType - 表格项的值类型
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
/**
 * 根据 dataIndex 获取值，支持 dataIndex 为数组
 *
 * @param item
 * @param entity
 */
var getDataFromConfig = function getDataFromConfig(item, entity) {
  var dataIndex = item.dataIndex;
  if (dataIndex) {
    var data = Array.isArray(dataIndex) ? get(entity, dataIndex) : entity[dataIndex];
    if (data !== undefined || data !== null) {
      return data;
    }
  }
  return item.children;
};

/**
 * 这里会处理编辑的功能
 *
 * @param props
 */
export var FieldRender = function FieldRender(props) {
  var _proTheme$useToken2;
  var valueEnum = props.valueEnum,
    action = props.action,
    index = props.index,
    text = props.text,
    entity = props.entity,
    mode = props.mode,
    render = props.render,
    editableUtils = props.editableUtils,
    valueType = props.valueType,
    plain = props.plain,
    dataIndex = props.dataIndex,
    request = props.request,
    renderFormItem = props.renderFormItem,
    params = props.params,
    emptyText = props.emptyText;
  var form = ProForm.useFormInstance();
  var _proTheme$useToken = (_proTheme$useToken2 = proTheme.useToken) === null || _proTheme$useToken2 === void 0 ? void 0 : _proTheme$useToken2.call(proTheme),
    token = _proTheme$useToken.token;
  var fieldConfig = {
    text: text,
    valueEnum: valueEnum,
    mode: mode || 'read',
    proFieldProps: {
      emptyText: emptyText,
      render: render ? function (finText) {
        return render === null || render === void 0 ? void 0 : render(finText, entity, index, action, _objectSpread(_objectSpread({}, props), {}, {
          type: 'descriptions'
        }));
      } : undefined
    },
    ignoreFormItem: true,
    valueType: valueType,
    request: request,
    params: params,
    plain: plain
  };

  /** 如果是只读模式，fieldProps 的 form是空的，所以需要兜底处理 */
  if (mode === 'read' || !mode || valueType === 'option') {
    var fieldProps = getFieldPropsOrFormItemProps(props.fieldProps, undefined, _objectSpread(_objectSpread({}, props), {}, {
      rowKey: dataIndex,
      isEditable: false
    }));
    return /*#__PURE__*/_jsx(ProFormField, _objectSpread(_objectSpread({
      name: dataIndex
    }, fieldConfig), {}, {
      fieldProps: fieldProps
    }));
  }
  var renderDom = function renderDom() {
    var _editableUtils$action;
    var formItemProps = getFieldPropsOrFormItemProps(props.formItemProps, form, _objectSpread(_objectSpread({}, props), {}, {
      rowKey: dataIndex,
      isEditable: true
    }));
    var fieldProps = getFieldPropsOrFormItemProps(props.fieldProps, form, _objectSpread(_objectSpread({}, props), {}, {
      rowKey: dataIndex,
      isEditable: true
    }));
    return /*#__PURE__*/_jsxs("div", {
      style: {
        display: 'flex',
        gap: token.marginXS,
        alignItems: 'baseline'
      },
      children: [/*#__PURE__*/_jsx(InlineErrorFormItem, _objectSpread(_objectSpread({
        name: dataIndex
      }, formItemProps), {}, {
        style: _objectSpread({
          margin: 0
        }, (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.style) || {}),
        initialValue: text || (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.initialValue),
        children: /*#__PURE__*/_jsx(ProFormField, _objectSpread(_objectSpread({}, fieldConfig), {}, {
          // @ts-ignore
          proFieldProps: _objectSpread({}, fieldConfig.proFieldProps),
          renderFormItem: renderFormItem ? function () {
            return renderFormItem === null || renderFormItem === void 0 ? void 0 : renderFormItem(_objectSpread(_objectSpread({}, props), {}, {
              type: 'descriptions'
            }), {
              isEditable: true,
              recordKey: dataIndex,
              record: form.getFieldValue([dataIndex].flat(1)),
              defaultRender: function defaultRender() {
                return /*#__PURE__*/_jsx(ProFormField, _objectSpread(_objectSpread({}, fieldConfig), {}, {
                  fieldProps: fieldProps
                }));
              },
              type: 'descriptions'
            }, form);
          } : undefined,
          fieldProps: fieldProps
        }))
      })), /*#__PURE__*/_jsx("div", {
        style: {
          display: 'flex',
          maxHeight: token.controlHeight,
          alignItems: 'center',
          gap: token.marginXS
        },
        children: editableUtils === null || editableUtils === void 0 || (_editableUtils$action = editableUtils.actionRender) === null || _editableUtils$action === void 0 ? void 0 : _editableUtils$action.call(editableUtils, dataIndex || index, {
          cancelText: /*#__PURE__*/_jsx(CloseOutlined, {}),
          saveText: /*#__PURE__*/_jsx(CheckOutlined, {}),
          deleteText: false
        })
      })]
    });
  };
  return /*#__PURE__*/_jsx("div", {
    style: {
      marginTop: -5,
      marginBottom: -5,
      marginLeft: 0,
      marginRight: 0
    },
    children: renderDom()
  });
};
var schemaToDescriptionsItem = function schemaToDescriptionsItem(items, entity, action, editableUtils, emptyText) {
  var _items$map;
  var options = [];
  var isBigger58 = compareVersions(version, '5.8.0') >= 0;
  // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下
  var children = items === null || items === void 0 || (_items$map = items.map) === null || _items$map === void 0 ? void 0 : _items$map.call(items, function (item, index) {
    var _getDataFromConfig, _restItem$label, _restItem$label2;
    if ( /*#__PURE__*/React.isValidElement(item)) {
      return isBigger58 ? {
        children: item
      } : item;
    }
    var _ref = item,
      valueEnum = _ref.valueEnum,
      render = _ref.render,
      renderText = _ref.renderText,
      mode = _ref.mode,
      plain = _ref.plain,
      dataIndex = _ref.dataIndex,
      request = _ref.request,
      params = _ref.params,
      editable = _ref.editable,
      restItem = _objectWithoutProperties(_ref, _excluded);
    var defaultData = (_getDataFromConfig = getDataFromConfig(item, entity)) !== null && _getDataFromConfig !== void 0 ? _getDataFromConfig : restItem.children;
    var text = renderText ? renderText(defaultData, entity, index, action) : defaultData;
    var title = typeof restItem.title === 'function' ? restItem.title(item, 'descriptions', null) : restItem.title;

    //  dataIndex 无所谓是否存在
    // 有些时候不需要 dataIndex 可以直接 render
    var valueType = typeof restItem.valueType === 'function' ? restItem.valueType(entity || {}, 'descriptions') : restItem.valueType;
    var isEditable = editableUtils === null || editableUtils === void 0 ? void 0 : editableUtils.isEditable(dataIndex || index);
    var fieldMode = mode || isEditable ? 'edit' : 'read';
    var showEditIcon = editableUtils && fieldMode === 'read' && editable !== false && (editable === null || editable === void 0 ? void 0 : editable(text, entity, index)) !== false;
    var Component = showEditIcon ? Space : React.Fragment;
    var contentDom = fieldMode === 'edit' ? text : genCopyable(text, item, text);
    var field = isBigger58 && valueType !== 'option' ? _objectSpread(_objectSpread({}, restItem), {}, {
      key: restItem.key || ((_restItem$label = restItem.label) === null || _restItem$label === void 0 ? void 0 : _restItem$label.toString()) || index,
      label: (title || restItem.label || restItem.tooltip) && /*#__PURE__*/_jsx(LabelIconTip, {
        label: title || restItem.label,
        tooltip: restItem.tooltip,
        ellipsis: item.ellipsis
      }),
      children: /*#__PURE__*/_jsxs(Component, {
        children: [/*#__PURE__*/_createElement(FieldRender, _objectSpread(_objectSpread({}, item), {}, {
          key: item === null || item === void 0 ? void 0 : item.key,
          dataIndex: item.dataIndex || index,
          mode: fieldMode,
          text: contentDom,
          valueType: valueType,
          entity: entity,
          index: index,
          emptyText: emptyText,
          action: action,
          editableUtils: editableUtils
        })), showEditIcon && /*#__PURE__*/_jsx(EditOutlined, {
          onClick: function onClick() {
            editableUtils === null || editableUtils === void 0 || editableUtils.startEditable(dataIndex || index);
          }
        })]
      })
    }) : /*#__PURE__*/_createElement(Descriptions.Item, _objectSpread(_objectSpread({}, restItem), {}, {
      key: restItem.key || ((_restItem$label2 = restItem.label) === null || _restItem$label2 === void 0 ? void 0 : _restItem$label2.toString()) || index,
      label: (title || restItem.label || restItem.tooltip) && /*#__PURE__*/_jsx(LabelIconTip, {
        label: title || restItem.label,
        tooltip: restItem.tooltip,
        ellipsis: item.ellipsis
      })
    }), /*#__PURE__*/_jsxs(Component, {
      children: [/*#__PURE__*/_jsx(FieldRender, _objectSpread(_objectSpread({}, item), {}, {
        dataIndex: item.dataIndex || index,
        mode: fieldMode,
        text: contentDom,
        valueType: valueType,
        entity: entity,
        index: index,
        action: action,
        editableUtils: editableUtils
      })), showEditIcon && valueType !== 'option' && /*#__PURE__*/_jsx(EditOutlined, {
        onClick: function onClick() {
          editableUtils === null || editableUtils === void 0 || editableUtils.startEditable(dataIndex || index);
        }
      })]
    }));
    // 如果类型是 option 自动放到右上角
    if (valueType === 'option') {
      options.push(field);
      return null;
    }
    return field;
  }).filter(function (item) {
    return item;
  });
  return {
    // 空数组传递还是会被判定为有值
    options: options !== null && options !== void 0 && options.length ? options : null,
    children: children
  };
};
var ProDescriptionsItem = function ProDescriptionsItem(props) {
  return /*#__PURE__*/_jsx(Descriptions.Item, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));
};
ProDescriptionsItem.displayName = 'ProDescriptionsItem';
var DefaultProDescriptionsDom = function DefaultProDescriptionsDom(dom) {
  return dom.children;
};
var ProDescriptions = function ProDescriptions(props) {
  var _props$editable;
  var request = props.request,
    columns = props.columns,
    params = props.params,
    dataSource = props.dataSource,
    onDataSourceChange = props.onDataSourceChange,
    formProps = props.formProps,
    editable = props.editable,
    loading = props.loading,
    onLoadingChange = props.onLoadingChange,
    actionRef = props.actionRef,
    onRequestError = props.onRequestError,
    emptyText = props.emptyText,
    contentStyle = props.contentStyle,
    rest = _objectWithoutProperties(props, _excluded2);
  var context = useContext(ConfigProvider.ConfigContext);
  var action = useFetchData( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!request) {
            _context.next = 6;
            break;
          }
          _context.next = 3;
          return request(params || {});
        case 3:
          _context.t0 = _context.sent;
          _context.next = 7;
          break;
        case 6:
          _context.t0 = {
            data: {}
          };
        case 7:
          data = _context.t0;
          return _context.abrupt("return", data);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), {
    onRequestError: onRequestError,
    effects: [stringify(params)],
    manual: !request,
    dataSource: dataSource,
    loading: loading,
    onLoadingChange: onLoadingChange,
    onDataSourceChange: onDataSourceChange
  });

  /*
   * 可编辑行的相关配置
   */
  var editableUtils = useEditableMap(_objectSpread(_objectSpread({}, props.editable), {}, {
    childrenColumnName: undefined,
    dataSource: action.dataSource,
    setDataSource: action.setDataSource
  }));

  /** 支持 reload 的功能 */
  useEffect(function () {
    if (actionRef) {
      actionRef.current = _objectSpread({
        reload: action.reload
      }, editableUtils);
    }
  }, [action, actionRef, editableUtils]);

  // loading 时展示
  // loading =  undefined 但是 request 存在时也应该展示
  if (action.loading || action.loading === undefined && request) {
    return /*#__PURE__*/_jsx(ProSkeleton, {
      type: "descriptions",
      list: false,
      pageHeader: false
    });
  }
  var getColumns = function getColumns() {
    // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下
    var childrenColumns = toArray(props.children).filter(Boolean).map(function (item) {
      if (! /*#__PURE__*/React.isValidElement(item)) {
        return item;
      }
      var _ref3 = item === null || item === void 0 ? void 0 : item.props,
        valueEnum = _ref3.valueEnum,
        valueType = _ref3.valueType,
        dataIndex = _ref3.dataIndex,
        ellipsis = _ref3.ellipsis,
        copyable = _ref3.copyable,
        itemRequest = _ref3.request;
      if (!valueType && !valueEnum && !dataIndex && !itemRequest && !ellipsis && !copyable &&
      // @ts-ignore
      item.type.displayName !== 'ProDescriptionsItem') {
        return item;
      }
      return _objectSpread(_objectSpread({}, item === null || item === void 0 ? void 0 : item.props), {}, {
        entity: dataSource
      });
    });
    return [].concat(_toConsumableArray(columns || []), _toConsumableArray(childrenColumns)).filter(function (item) {
      if (!item) return false;
      if (item !== null && item !== void 0 && item.valueType && ['index', 'indexBorder'].includes(item === null || item === void 0 ? void 0 : item.valueType)) {
        return false;
      }
      return !(item !== null && item !== void 0 && item.hideInDescriptions);
    }).sort(function (a, b) {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }
      return (b.index || 0) - (a.index || 0);
    });
  };
  var _schemaToDescriptions = schemaToDescriptionsItem(getColumns(), action.dataSource || {}, (actionRef === null || actionRef === void 0 ? void 0 : actionRef.current) || action, editable ? editableUtils : undefined, props.emptyText),
    options = _schemaToDescriptions.options,
    children = _schemaToDescriptions.children;

  /** 如果不是可编辑模式，没必要注入 ProForm */
  var FormComponent = editable ? ProForm : DefaultProDescriptionsDom;

  /** 即使组件返回null了, 在传递的过程中还是会被Description检测到为有值 */
  var title = null;
  if (rest.title || rest.tooltip || rest.tip) {
    title = /*#__PURE__*/_jsx(LabelIconTip, {
      label: rest.title,
      tooltip: rest.tooltip || rest.tip
    });
  }
  var className = context.getPrefixCls('pro-descriptions');
  var isBigger58 = compareVersions(version, '5.8.0') >= 0;
  return /*#__PURE__*/_jsx(ErrorBoundary, {
    children: /*#__PURE__*/_jsx(FormComponent, _objectSpread(_objectSpread({
      form: (_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : _props$editable.form,
      component: false,
      submitter: false
    }, formProps), {}, {
      onFinish: undefined,
      children: /*#__PURE__*/_jsx(Descriptions, _objectSpread(_objectSpread({
        className: className
      }, rest), {}, {
        contentStyle: _objectSpread({
          minWidth: 0
        }, contentStyle || {}),
        extra: rest.extra ? /*#__PURE__*/_jsxs(Space, {
          children: [options, rest.extra]
        }) : options,
        title: title,
        items: isBigger58 ? children : undefined,
        children: isBigger58 ? null : children
      }))
    }), "form")
  });
};
ProDescriptions.Item = ProDescriptionsItem;
export { ProDescriptions };
export default ProDescriptions;