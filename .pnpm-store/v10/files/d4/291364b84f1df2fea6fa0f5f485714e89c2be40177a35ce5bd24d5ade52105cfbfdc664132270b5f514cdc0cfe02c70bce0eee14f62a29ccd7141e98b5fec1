"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlRender = FormControlRender;
exports.ProFormItemRender = exports.FormItemRender = void 0;
exports.pickControlProps = pickControlProps;
exports.pickControlPropsWithId = pickControlPropsWithId;
exports.useControlModel = useControlModel;
exports.withFormItemRender = withFormItemRender;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _FormItem = _interopRequireDefault(require("../FormItem"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"],
  _excluded2 = ["children"];
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
function useControlModel(_ref, model) {
  var value = _ref.value,
    onChange = _ref.onChange;
  if (!Array.isArray(model)) {
    var p = getControlConfigProps(model);
    return (0, _defineProperty2.default)((0, _defineProperty2.default)({}, p.valuePropName, value), p.trigger, function (e) {
      onChange === null || onChange === void 0 || onChange(e !== null && e !== void 0 && e.target ? e.target[p.valuePropName] : e);
    });
  }
  return model.reduce(function (acc, k) {
    var p = getControlConfigProps(k);
    var name = p.name || k;
    acc[name] = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, p.valuePropName, value === null || value === void 0 ? void 0 : value[name]), p.trigger, function (v) {
      onChange === null || onChange === void 0 || onChange((0, _objectSpread3.default)((0, _objectSpread3.default)({}, value), {}, (0, _defineProperty2.default)({}, name, v !== null && v !== void 0 && v.target ? v.target[p.valuePropName] : v)));
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
function FormControlRender(props) {
  var children = props.children,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _Form$Item$useStatus = _antd.Form.Item.useStatus(),
    status = _Form$Item$useStatus.status,
    errors = _Form$Item$useStatus.errors,
    warnings = _Form$Item$useStatus.warnings;
  return children((0, _objectSpread3.default)({
    status: status,
    errors: errors,
    warnings: warnings
  }, restProps));
}

/**
 * 提取props中的 value 和 onChange 属性
 */
function pickControlProps(props) {
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
function pickControlPropsWithId(props) {
  return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, pickControlProps(props)), {}, {
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
function withFormItemRender(Comp) {
  return function (props) {
    var children = props.children,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, (0, _objectSpread3.default)((0, _objectSpread3.default)({}, restProps), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FormControlRender, {
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
var FormItemRender = exports.FormItemRender = withFormItemRender(_antd.Form.Item);

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
var ProFormItemRender = exports.ProFormItemRender = withFormItemRender(_FormItem.default);