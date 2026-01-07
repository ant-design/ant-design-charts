"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickProFormItemProps = pickProFormItemProps;
var antdFormItemPropsList = [
// https://ant.design/components/form-cn/#Form.Item
'colon', 'dependencies', 'extra', 'getValueFromEvent', 'getValueProps', 'hasFeedback', 'help', 'htmlFor', 'initialValue', 'noStyle', 'label', 'labelAlign', 'labelCol', 'name', 'preserve', 'normalize', 'required', 'rules', 'shouldUpdate', 'trigger', 'validateFirst', 'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol', 'hidden', 'validateDebounce',
// 我自定义的
'addonBefore', 'addonAfter', 'addonWarpStyle'];

// eslint-disable-next-line @typescript-eslint/ban-types
function pickProFormItemProps(props) {
  var attrs = {};
  antdFormItemPropsList.forEach(function (key) {
    if (props[key] !== undefined) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}