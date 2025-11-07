import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["current", "onCurrentChange", "submitter", "stepsFormRender", "stepsRender", "stepFormRender", "stepsProps", "onFinish", "formProps", "containerStyle", "formRef", "formMapRef", "layoutRender"];
import { ProConfigProvider, useIntl } from '@ant-design/pro-provider';
import { compareVersions, merge, useRefFunction } from '@ant-design/pro-utils';
import { Button, Col, ConfigProvider, Form, Row, Space, Steps, version } from 'antd';
import classNames from 'classnames';
import toArray from "rc-util/es/Children/toArray";
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
import StepForm from "./StepForm";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var StepsFormProvide = /*#__PURE__*/React.createContext(undefined);
var StepsLayoutStrategy = {
  horizontal: function horizontal(_ref) {
    var stepsDom = _ref.stepsDom,
      formDom = _ref.formDom;
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Row, {
        gutter: {
          xs: 8,
          sm: 16,
          md: 24
        },
        children: /*#__PURE__*/_jsx(Col, {
          span: 24,
          children: stepsDom
        })
      }), /*#__PURE__*/_jsx(Row, {
        gutter: {
          xs: 8,
          sm: 16,
          md: 24
        },
        children: /*#__PURE__*/_jsx(Col, {
          span: 24,
          children: formDom
        })
      })]
    });
  },
  vertical: function vertical(_ref2) {
    var stepsDom = _ref2.stepsDom,
      formDom = _ref2.formDom;
    return /*#__PURE__*/_jsxs(Row, {
      align: "stretch",
      wrap: true,
      gutter: {
        xs: 8,
        sm: 16,
        md: 24
      },
      children: [/*#__PURE__*/_jsx(Col, {
        xxl: 4,
        xl: 6,
        lg: 7,
        md: 8,
        sm: 10,
        xs: 12,
        children: /*#__PURE__*/React.cloneElement(stepsDom, {
          style: {
            height: '100%'
          }
        })
      }), /*#__PURE__*/_jsx(Col, {
        children: /*#__PURE__*/_jsx("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          },
          children: formDom
        })
      })]
    });
  }
};

/**
 * 给  StepForm 传递信息
 */
export var StepFormProvide = /*#__PURE__*/React.createContext(null);
function StepsForm(props) {
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-steps-form');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var current = props.current,
    onCurrentChange = props.onCurrentChange,
    submitter = props.submitter,
    stepsFormRender = props.stepsFormRender,
    stepsRender = props.stepsRender,
    stepFormRender = props.stepFormRender,
    stepsProps = props.stepsProps,
    onFinish = props.onFinish,
    formProps = props.formProps,
    containerStyle = props.containerStyle,
    formRef = props.formRef,
    propsFormMapRef = props.formMapRef,
    propsLayoutRender = props.layoutRender,
    rest = _objectWithoutProperties(props, _excluded);
  var formDataRef = useRef(new Map());
  var formMapRef = useRef(new Map());
  var formArrayRef = useRef([]);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    formArray = _useState2[0],
    setFormArray = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var intl = useIntl();

  /**
   * 受控的方式来操作表单
   */
  var _useMergedState = useMergedState(0, {
      value: props.current,
      onChange: props.onCurrentChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    step = _useMergedState2[0],
    setStep = _useMergedState2[1];
  var layoutRender = useMemo(function () {
    return StepsLayoutStrategy[(stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.direction) || 'horizontal'];
  }, [stepsProps === null || stepsProps === void 0 ? void 0 : stepsProps.direction]);
  var lastStep = useMemo(function () {
    return step === formArray.length - 1;
  }, [formArray.length, step]);

  /**
   * 注册一个form进入，方便进行 props 的修改
   */
  var regForm = useCallback(function (name, childrenFormProps) {
    if (!formMapRef.current.has(name)) {
      setFormArray(function (oldFormArray) {
        return [].concat(_toConsumableArray(oldFormArray), [name]);
      });
    }
    formMapRef.current.set(name, childrenFormProps);
  }, []);

  /**
   * 解除挂载掉这个 form，同时步数 -1
   */
  var unRegForm = useCallback(function (name) {
    setFormArray(function (oldFormArray) {
      return oldFormArray.filter(function (n) {
        return n !== name;
      });
    });
    formMapRef.current.delete(name);
    formDataRef.current.delete(name);
  }, []);
  useImperativeHandle(propsFormMapRef, function () {
    return formArrayRef.current;
  }, [formArrayRef.current]);
  useImperativeHandle(formRef, function () {
    var _formArrayRef$current;
    return (_formArrayRef$current = formArrayRef.current[step || 0]) === null || _formArrayRef$current === void 0 ? void 0 : _formArrayRef$current.current;
  }, [step, formArrayRef.current]);

  /**
   * ProForm处理了一下 from 的数据，在其中做了一些操作 如果使用 Provider 自带的，自带的数据处理就无法生效了
   */
  var onFormFinish = useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, formData) {
      var values, success;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            formDataRef.current.set(name, formData);
            // 如果不是最后一步
            if (!(!lastStep || !onFinish)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            setLoading(true);
            values = merge.apply(void 0, [{}].concat(_toConsumableArray(Array.from(formDataRef.current.values()))));
            _context.prev = 5;
            _context.next = 8;
            return onFinish(values);
          case 8:
            success = _context.sent;
            if (success) {
              setStep(0);
              formArrayRef.current.forEach(function (form) {
                var _form$current;
                return (_form$current = form.current) === null || _form$current === void 0 ? void 0 : _form$current.resetFields();
              });
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            console.log(_context.t0);
          case 15:
            _context.prev = 15;
            setLoading(false);
            return _context.finish(15);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 12, 15, 18]]);
    }));
    return function (_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }(), [lastStep, onFinish, setLoading, setStep]);
  var stepsDom = useMemo(function () {
    var isNewAntd = compareVersions(version, '4.24.0') > -1;
    var itemsProps = isNewAntd ? {
      items: formArray.map(function (item) {
        var itemProps = formMapRef.current.get(item);
        return _objectSpread({
          key: item,
          title: itemProps === null || itemProps === void 0 ? void 0 : itemProps.title
        }, itemProps === null || itemProps === void 0 ? void 0 : itemProps.stepProps);
      })
    } : {};
    return /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-steps-container ").concat(hashId).trim(),
      style: {
        maxWidth: Math.min(formArray.length * 320, 1160)
      },
      children: /*#__PURE__*/_jsx(Steps, _objectSpread(_objectSpread(_objectSpread({}, stepsProps), itemsProps), {}, {
        current: step,
        onChange: undefined,
        children: !isNewAntd && formArray.map(function (item) {
          var itemProps = formMapRef.current.get(item);
          return /*#__PURE__*/_jsx(Steps.Step, _objectSpread({
            title: itemProps === null || itemProps === void 0 ? void 0 : itemProps.title
          }, itemProps === null || itemProps === void 0 ? void 0 : itemProps.stepProps), item);
        })
      }))
    });
  }, [formArray, hashId, prefixCls, step, stepsProps]);
  var onSubmit = useRefFunction(function () {
    var _from$current;
    var from = formArrayRef.current[step];
    (_from$current = from.current) === null || _from$current === void 0 || _from$current.submit();
  });

  /** 上一页功能 */
  var prePage = useRefFunction(function () {
    if (step < 1) return;
    setStep(step - 1);
  });
  var next = useMemo(function () {
    return submitter !== false && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
      type: "primary",
      loading: loading
    }, submitter === null || submitter === void 0 ? void 0 : submitter.submitButtonProps), {}, {
      onClick: function onClick() {
        var _submitter$onSubmit;
        submitter === null || submitter === void 0 || (_submitter$onSubmit = submitter.onSubmit) === null || _submitter$onSubmit === void 0 || _submitter$onSubmit.call(submitter);
        onSubmit();
      },
      children: intl.getMessage('stepsForm.next', '下一步')
    }), "next");
  }, [intl, loading, onSubmit, submitter]);
  var pre = useMemo(function () {
    return submitter !== false && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({}, submitter === null || submitter === void 0 ? void 0 : submitter.resetButtonProps), {}, {
      onClick: function onClick() {
        var _submitter$onReset;
        prePage();
        submitter === null || submitter === void 0 || (_submitter$onReset = submitter.onReset) === null || _submitter$onReset === void 0 || _submitter$onReset.call(submitter);
      },
      children: intl.getMessage('stepsForm.prev', '上一步')
    }), "pre");
  }, [intl, prePage, submitter]);
  var submit = useMemo(function () {
    return submitter !== false && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
      type: "primary",
      loading: loading
    }, submitter === null || submitter === void 0 ? void 0 : submitter.submitButtonProps), {}, {
      onClick: function onClick() {
        var _submitter$onSubmit2;
        submitter === null || submitter === void 0 || (_submitter$onSubmit2 = submitter.onSubmit) === null || _submitter$onSubmit2 === void 0 || _submitter$onSubmit2.call(submitter);
        onSubmit();
      },
      children: intl.getMessage('stepsForm.submit', '提交')
    }), "submit");
  }, [intl, loading, onSubmit, submitter]);
  var nextPage = useRefFunction(function () {
    if (step > formArray.length - 2) return;
    setStep(step + 1);
  });
  var submitterDom = useMemo(function () {
    var buttons = [];
    var index = step || 0;
    if (index < 1) {
      // 如果有且只有一个 StepForm 第一步就应该是提交按钮
      if (formArray.length === 1) {
        buttons.push(submit);
      } else {
        buttons.push(next);
      }
    } else if (index + 1 === formArray.length) {
      buttons.push(pre, submit);
    } else {
      buttons.push(pre, next);
    }
    buttons = buttons.filter(React.isValidElement);
    if (submitter && submitter.render) {
      var _formArrayRef$current2;
      var submitterProps = {
        form: (_formArrayRef$current2 = formArrayRef.current[step]) === null || _formArrayRef$current2 === void 0 ? void 0 : _formArrayRef$current2.current,
        onSubmit: onSubmit,
        step: step,
        onPre: prePage
      };
      return submitter.render(submitterProps, buttons);
    }
    if (submitter && (submitter === null || submitter === void 0 ? void 0 : submitter.render) === false) {
      return null;
    }
    return buttons;
  }, [formArray.length, next, onSubmit, pre, prePage, step, submit, submitter]);
  var formDom = useMemo(function () {
    return toArray(props.children).map(function (item, index) {
      var itemProps = item.props;
      var name = itemProps.name || "".concat(index);
      /** 是否是当前的表单 */
      var isShow = step === index;
      var config = isShow ? {
        contentRender: stepFormRender,
        submitter: false
      } : {};
      return /*#__PURE__*/_jsx("div", {
        className: classNames("".concat(prefixCls, "-step"), hashId, _defineProperty({}, "".concat(prefixCls, "-step-active"), isShow)),
        children: /*#__PURE__*/_jsx(StepFormProvide.Provider, {
          value: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, config), formProps), itemProps), {}, {
            name: name,
            step: index
          }),
          children: item
        })
      }, name);
    });
  }, [formProps, hashId, prefixCls, props.children, step, stepFormRender]);
  var finalStepsDom = useMemo(function () {
    if (stepsRender) {
      return stepsRender(formArray.map(function (item) {
        var _formMapRef$current$g;
        return {
          key: item,
          title: (_formMapRef$current$g = formMapRef.current.get(item)) === null || _formMapRef$current$g === void 0 ? void 0 : _formMapRef$current$g.title
        };
      }), stepsDom);
    }
    return stepsDom;
  }, [formArray, stepsDom, stepsRender]);
  var formContainer = useMemo(function () {
    return /*#__PURE__*/_jsxs("div", {
      className: "".concat(prefixCls, "-container ").concat(hashId).trim(),
      style: containerStyle,
      children: [formDom, stepsFormRender ? null : /*#__PURE__*/_jsx(Space, {
        children: submitterDom
      })]
    });
  }, [containerStyle, formDom, hashId, prefixCls, stepsFormRender, submitterDom]);
  var stepsFormDom = useMemo(function () {
    var doms = {
      stepsDom: finalStepsDom,
      formDom: formContainer
    };
    if (stepsFormRender) {
      if (propsLayoutRender) {
        return stepsFormRender(propsLayoutRender(doms), submitterDom);
      } else {
        return stepsFormRender(layoutRender(doms), submitterDom);
      }
    }
    if (propsLayoutRender) {
      return propsLayoutRender(doms);
    }
    return layoutRender(doms);
  }, [finalStepsDom, formContainer, layoutRender, stepsFormRender, submitterDom, propsLayoutRender]);
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classNames(prefixCls, hashId),
    children: /*#__PURE__*/_jsx(Form.Provider, _objectSpread(_objectSpread({}, rest), {}, {
      children: /*#__PURE__*/_jsx(StepsFormProvide.Provider, {
        value: {
          loading: loading,
          setLoading: setLoading,
          regForm: regForm,
          keyArray: formArray,
          next: nextPage,
          formArrayRef: formArrayRef,
          formMapRef: formMapRef,
          lastStep: lastStep,
          unRegForm: unRegForm,
          onFormFinish: onFormFinish
        },
        children: stepsFormDom
      })
    }))
  }));
}
function StepsFormWarp(props) {
  return /*#__PURE__*/_jsx(ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/_jsx(StepsForm, _objectSpread({}, props))
  });
}
StepsFormWarp.StepForm = StepForm;
StepsFormWarp.useForm = Form.useForm;
export { StepsFormWarp as StepsForm };