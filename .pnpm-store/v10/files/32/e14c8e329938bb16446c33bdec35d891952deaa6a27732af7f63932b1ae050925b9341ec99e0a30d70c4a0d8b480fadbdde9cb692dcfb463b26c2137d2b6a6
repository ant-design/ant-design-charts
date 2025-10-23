import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children"],
  _excluded2 = ["children"];
import { Form } from 'antd';
import React from 'react';
import ProFormItem from "../FormItem";
import { jsx as _jsx } from "react/jsx-runtime";
function getControlConfigProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var valuePropName = props.valuePropName || 'value';
  var trigger = props.trigger || 'onChange';
  var name = props.name;
  return {
    valuePropName: valuePropName,
    trigger: trigger,
    name: name
  };
}
export function useControlModel(_ref, model) {
  var value = _ref.value,
    onChange = _ref.onChange;
  if (!Array.isArray(model)) {
    var p = getControlConfigProps(model);
    return _defineProperty(_defineProperty({}, p.valuePropName, value), p.trigger, function (e) {
      onChange === null || onChange === void 0 || onChange(e !== null && e !== void 0 && e.target ? e.target[p.valuePropName] : e);
    });
  }
  return model.reduce(function (acc, k) {
    var p = getControlConfigProps(k);
    var name = p.name || k;
    acc[name] = _defineProperty(_defineProperty({}, p.valuePropName, value === null || value === void 0 ? void 0 : value[name]), p.trigger, function (v) {
      onChange === null || onChange === void 0 || onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, name, v !== null && v !== void 0 && v.target ? v.target[p.valuePropName] : v)));
    });
    return acc;
  }, {});
}
/**
 * 用在 ProForm.Item 或 Form.Item 于 表单项之间的，用于劫持渲染的函数
 * ``` tsx
 * <Form.Item name='name' label='名称'>
 *   <FormControlRender>
 *   {
 *     formItemProps => (
 *       <div>
 *         <span>prefix</span>
 *         <Input {...formItemProps} />
 *       </div>
 *     )
 *   }
 *   </FormControlRender>
 * </Form.Item>
 * ```
 */
export function FormControlRender(props) {
  var children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _Form$Item$useStatus = Form.Item.useStatus(),
    status = _Form$Item$useStatus.status,
    errors = _Form$Item$useStatus.errors,
    warnings = _Form$Item$useStatus.warnings;
  return children(_objectSpread({
    status: status,
    errors: errors,
    warnings: warnings
  }, restProps));
}

/**
 * 提取props中的 value 和 onChange 属性
 */
export function pickControlProps(props) {
  return {
    value: props.value,
    onChange: function onChange(value) {
      return props.onChange(value !== null && value !== void 0 && value.target ? value.target.value : value);
    }
  };
}

/**
 * 提取props中的 value、onChange 和 id 属性
 */
export function pickControlPropsWithId(props) {
  return _objectSpread(_objectSpread({}, pickControlProps(props)), {}, {
    id: props.id
  });
}

/**
 * 用于包裹ProForm.Item Form.Item，使其可以使用render props的形式
 * @description 用法
 * const FormItem = withFormItemRender(用于包裹ProForm.Item)
 * ``` tsx
 * <FormItem name='name' label='名称'>
 *   {
 *     formItemProps => (
 *       <div>
 *         <span>prefix</span>
 *         <Input {...formItemProps} />
 *       </div>
 *     )
 *   }
 * </FormItem>
 * ```
 */
export function withFormItemRender(Comp) {
  return function (props) {
    var children = props.children,
      restProps = _objectWithoutProperties(props, _excluded2);
    return /*#__PURE__*/_jsx(Comp, _objectSpread(_objectSpread({}, restProps), {}, {
      children: /*#__PURE__*/_jsx(FormControlRender, {
        children: children
      })
    }));
  };
}

/**
 * 用 withFormItemRender 加工Form.Item，使其拥有render props能力，同时暴露出 status 属性方便自定义组件校验使用
 *
 * ``` tsx
 *   <FormItemRender name='name' label='名称'>
 *   {
 *     formItemProps => (
 *       <div>
 *         <h3>prefix</h3>
 *         <textarea {...formItemProps} style={{ borderColor: formItemProps.status === 'error' ? 'red' : undefined }} />
 *       </div>
 *     )
 *   }
 *   </FormItemRender>
 * ```
 */
export var FormItemRender = withFormItemRender(Form.Item);

/**
 * 用 withFormItemRender 加工 ProForm.Item，使其拥有render props能力，同时暴露出 status 属性方便自定义组件校验使用
 * ``` tsx
 *   <ProFormItemRender name='name' label='名称'>
 *   {
 *     formItemProps => (
 *       <div>
 *         <h3>prefix</h3>
 *         <textarea {...formItemProps} style={{ borderColor: formItemProps.status === 'error' ? 'red' : undefined }} />
 *       </div>
 *     )
 *   }
 *   </ProFormItemRender>
 * ```
 */
export var ProFormItemRender = withFormItemRender(ProFormItem);