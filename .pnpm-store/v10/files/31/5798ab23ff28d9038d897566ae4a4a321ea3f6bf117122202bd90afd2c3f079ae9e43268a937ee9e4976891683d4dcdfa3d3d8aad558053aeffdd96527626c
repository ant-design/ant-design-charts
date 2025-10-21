var proFieldProps = "valueType request plain renderFormItem render text formItemProps valueEnum";
var proFormProps = "fieldProps isDefaultDom groupProps contentRender submitterProps submitter";
export function pickProProps(props) {
  var customValueType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var propList = "".concat(proFieldProps, " ").concat(proFormProps).split(/[\s\n]+/);
  var attrs = {};
  Object.keys(props || {}).forEach(function (key) {
    //如果是自定义的 valueType，则不需要过滤掉，全部传给使用者
    if (propList.includes(key) && !customValueType) {
      return;
    }
    attrs[key] = props[key];
  });
  return attrs;
}