import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["columns", "layoutType", "type", "action", "shouldUpdate", "formRef"];
import { LabelIconTip, omitUndefined, runFunction, stringify, useDeepCompareMemo, useLatest, useReactiveRef, useRefFunction } from '@ant-design/pro-utils';
import { Form } from 'antd';
import React, { useCallback, useImperativeHandle, useRef, useState } from 'react';
import { DrawerForm } from "../../layouts/DrawerForm";
import { LightFilter } from "../../layouts/LightFilter";
import { ModalForm } from "../../layouts/ModalForm";
import { ProForm } from "../../layouts/ProForm";
import { QueryFilter } from "../../layouts/QueryFilter";
import { StepsForm as ProStepsForm } from "../../layouts/StepsForm";
import { Embed, StepsForm } from "./layoutType";
import { renderValueType } from "./valueType";
import { jsx as _jsx } from "react/jsx-runtime";
export * from "./typing";
var FormLayoutType = {
  DrawerForm: DrawerForm,
  QueryFilter: QueryFilter,
  LightFilter: LightFilter,
  StepForm: ProStepsForm.StepForm,
  StepsForm: StepsForm,
  ModalForm: ModalForm,
  Embed: Embed,
  Form: ProForm
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
      return stringify(pre) !== stringify(next);
    } : _props$shouldUpdate,
    propsFormRef = props.formRef,
    restProps = _objectWithoutProperties(props, _excluded);
  var FormRenderComponents = FormLayoutType[layoutType] || ProForm;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var formInstance = Form.useFormInstance();
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  var _useState3 = useState(function () {
      return [];
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formDomsDeps = _useState4[0],
    updatedFormDoms = _useState4[1];
  var formRef = useReactiveRef(props.form || formInstance || form);
  var oldValuesRef = useRef();
  var propsRef = useLatest(props);

  /**
   * 生成子项，方便被 table 接入
   *
   * @param items
   */
  var genItems = useRefFunction(function (items) {
    return items.filter(function (originItem) {
      return !(originItem.hideInForm && type === 'form');
    }).sort(function (a, b) {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }
      return (b.index || 0) - (a.index || 0);
    }).map(function (originItem, index) {
      var title = runFunction(originItem.title, originItem, 'form', /*#__PURE__*/_jsx(LabelIconTip, {
        label: originItem.title,
        tooltip: originItem.tooltip || originItem.tip
      }));
      var item = omitUndefined({
        title: title,
        label: title,
        name: originItem.name,
        valueType: runFunction(originItem.valueType, {}),
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
          return runFunction(originItem.fieldProps, formRef.current, originItem);
        } : undefined,
        getFormItemProps: originItem.formItemProps ? function () {
          return runFunction(originItem.formItemProps, formRef.current, originItem);
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
      return renderValueType(item, {
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
  var onValuesChange = useCallback(function (changedValues, values) {
    var propsOnValuesChange = propsRef.current.onValuesChange;
    if (shouldUpdate === true || typeof shouldUpdate === 'function' && shouldUpdate(values, oldValuesRef.current)) {
      updatedFormDoms([]);
    }
    oldValuesRef.current = values;
    propsOnValuesChange === null || propsOnValuesChange === void 0 || propsOnValuesChange(changedValues, values);
  }, [propsRef, shouldUpdate]);
  var formChildrenDoms = useDeepCompareMemo(function () {
    if (!formRef.current) return;
    // like StepsForm's columns but not only for StepsForm
    if (columns.length && Array.isArray(columns[0])) return;
    return genItems(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, restProps === null || restProps === void 0 ? void 0 : restProps.open, action, type, formDomsDeps]);

  /**
   * Append layoutType component specific props
   */
  var specificProps = useDeepCompareMemo(function () {
    if (layoutType === 'StepsForm') {
      return {
        forceUpdate: forceUpdate,
        columns: columns
      };
    }
    return {};
  }, [columns, layoutType]);
  useImperativeHandle(propsFormRef, function () {
    return formRef.current;
  }, [formRef.current]);
  return /*#__PURE__*/_jsx(FormRenderComponents, _objectSpread(_objectSpread(_objectSpread({}, specificProps), restProps), {}, {
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
export default BetaSchemaForm;