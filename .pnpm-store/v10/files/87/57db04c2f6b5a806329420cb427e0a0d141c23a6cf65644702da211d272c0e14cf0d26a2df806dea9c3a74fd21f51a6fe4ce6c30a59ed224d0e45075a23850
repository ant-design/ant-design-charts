import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["contentRender", "numberFormatOptions", "numberPopoverRender", "open"],
  _excluded2 = ["text", "mode", "render", "renderFormItem", "fieldProps", "proFieldKey", "plain", "valueEnum", "placeholder", "locale", "customSymbol", "numberFormatOptions", "numberPopoverRender"];
import { intlMap as allIntlMap, useIntl } from '@ant-design/pro-provider';
import { InputNumber, Popover } from 'antd';
import useMergedState from "rc-util/es/hooks/useMergedState";
import omit from "rc-util/es/omit";
import React, { useCallback, useMemo } from 'react';
// 兼容代码-----------
import "antd/es/input-number/style";
import "antd/es/popover/style";
//----------------------

import { openVisibleCompatible } from '@ant-design/pro-utils';
import { jsx as _jsx } from "react/jsx-runtime";
var defaultMoneyIntl = new Intl.NumberFormat('zh-Hans-CN', {
  currency: 'CNY',
  style: 'currency'
});
var enMoneyIntl = {
  style: 'currency',
  currency: 'USD'
};
var ruMoneyIntl = {
  style: 'currency',
  currency: 'RUB'
};
var rsMoneyIntl = {
  style: 'currency',
  currency: 'RSD'
};
var msMoneyIntl = {
  style: 'currency',
  currency: 'MYR'
};
var ptMoneyIntl = {
  style: 'currency',
  currency: 'BRL'
};
var intlMap = {
  default: defaultMoneyIntl,
  'zh-Hans-CN': {
    currency: 'CNY',
    style: 'currency'
  },
  'en-US': enMoneyIntl,
  'ru-RU': ruMoneyIntl,
  'ms-MY': msMoneyIntl,
  'sr-RS': rsMoneyIntl,
  'pt-BR': ptMoneyIntl
};

/**
 * A function that formats the number.
 * @param {string | false} locale - The currency symbol, which is the first parameter of the
 * formatMoney function.
 * @param {number | string | undefined} paramsText - The text to be formatted
 * @param {number} precision - number, // decimal places
 * @param {any} [config] - the configuration of the number format, which is the same as the
 * configuration of the number format in the Intl.NumberFormat method.
 * @returns A function that takes in 4 parameters and returns a string.
 */
var getTextByLocale = function getTextByLocale(locale, paramsText, precision, config) {
  var moneySymbol = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var moneyText = paramsText === null || paramsText === void 0 ? void 0 : paramsText.toString().replaceAll(',', '');
  if (typeof moneyText === 'string') {
    var parsedNum = Number(moneyText);
    // 转换数字为NaN时，返回原始值展示
    if (Number.isNaN(parsedNum)) return moneyText;
    moneyText = parsedNum;
  }
  if (!moneyText && moneyText !== 0) return '';
  var supportFormat = false;
  try {
    supportFormat = locale !== false && Intl.NumberFormat.supportedLocalesOf([locale.replace('_', '-')], {
      localeMatcher: 'lookup'
    }).length > 0;
  } catch (error) {}
  try {
    // Formatting the number, when readonly moneySymbol = false, unused currency.
    var initNumberFormatter = new Intl.NumberFormat(supportFormat && locale !== false ? (locale === null || locale === void 0 ? void 0 : locale.replace('_', '-')) || 'zh-Hans-CN' : 'zh-Hans-CN', _objectSpread(_objectSpread({}, intlMap[locale || 'zh-Hans-CN'] || defaultMoneyIntl), {}, {
      maximumFractionDigits: precision
    }, config));
    var finalMoneyText = initNumberFormatter.format(moneyText);

    // 同时出现两个符号的情况需要处理
    var doubleSymbolFormat = function doubleSymbolFormat(Text) {
      var match = Text.match(/\d+/);
      if (match) {
        var number = match[0];
        return Text.slice(Text.indexOf(number));
      } else {
        return Text;
      }
    };
    // 过滤一下，只留下数字
    var pureMoneyText = doubleSymbolFormat(finalMoneyText);

    /**
     * 首字母判断是否是正负符号
     */
    var _ref = finalMoneyText || '',
      _ref2 = _slicedToArray(_ref, 1),
      operatorSymbol = _ref2[0];

    // 兼容正负号
    if (['+', '-'].includes(operatorSymbol)) {
      return "".concat(moneySymbol || '').concat(operatorSymbol).concat(pureMoneyText);
    }
    return "".concat(moneySymbol || '').concat(pureMoneyText);
  } catch (error) {
    return moneyText;
  }
};

// 默认的代码类型
var DefaultPrecisionCont = 2;

/**
 * input 的弹框，用于显示格式化之后的内容
 *
 * @result 10,000 -> 一万
 * @result 10, 00, 000, 000 -> 一亿
 */
var InputNumberPopover = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var content = _ref3.contentRender,
    numberFormatOptions = _ref3.numberFormatOptions,
    numberPopoverRender = _ref3.numberPopoverRender,
    open = _ref3.open,
    rest = _objectWithoutProperties(_ref3, _excluded);
  var _useMergedState = useMergedState(function () {
      return rest.defaultValue;
    }, {
      value: rest.value,
      onChange: rest.onChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    value = _useMergedState2[0],
    onChange = _useMergedState2[1];

  /**
   * 如果content 存在要根据 content 渲染一下
   */
  var dom = content === null || content === void 0 ? void 0 : content(_objectSpread(_objectSpread({}, rest), {}, {
    value: value
  }));
  var props = openVisibleCompatible(dom ? open : false);
  return /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread({
    placement: "topLeft"
  }, props), {}, {
    trigger: ['focus', 'click'],
    content: dom,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return (triggerNode === null || triggerNode === void 0 ? void 0 : triggerNode.parentElement) || document.body;
    },
    children: /*#__PURE__*/_jsx(InputNumber, _objectSpread(_objectSpread({
      ref: ref
    }, rest), {}, {
      value: value,
      onChange: onChange
    }))
  }));
});

/**
 * 金额组件
 *
 * @param FieldMoneyProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
var FieldMoney = function FieldMoney(_ref4, ref) {
  var _fieldProps$precision;
  var text = _ref4.text,
    type = _ref4.mode,
    render = _ref4.render,
    renderFormItem = _ref4.renderFormItem,
    fieldProps = _ref4.fieldProps,
    proFieldKey = _ref4.proFieldKey,
    plain = _ref4.plain,
    valueEnum = _ref4.valueEnum,
    placeholder = _ref4.placeholder,
    locale = _ref4.locale,
    _ref4$customSymbol = _ref4.customSymbol,
    customSymbol = _ref4$customSymbol === void 0 ? fieldProps.customSymbol : _ref4$customSymbol,
    _ref4$numberFormatOpt = _ref4.numberFormatOptions,
    numberFormatOptions = _ref4$numberFormatOpt === void 0 ? fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.numberFormatOptions : _ref4$numberFormatOpt,
    _ref4$numberPopoverRe = _ref4.numberPopoverRender,
    numberPopoverRender = _ref4$numberPopoverRe === void 0 ? (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.numberPopoverRender) || false : _ref4$numberPopoverRe,
    rest = _objectWithoutProperties(_ref4, _excluded2);
  var precision = (_fieldProps$precision = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.precision) !== null && _fieldProps$precision !== void 0 ? _fieldProps$precision : DefaultPrecisionCont;
  var intl = useIntl();
  // 当手动传入locale时，应该以传入的locale为准，未传入时则根据全局的locale进行国际化
  if (locale && allIntlMap[locale]) {
    intl = allIntlMap[locale];
  }
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');

  /**
   * 获取货币的符号
   * 如果 customSymbol 存在直接使用 customSymbol
   * 如果 moneySymbol 为 false，返回空
   * 如果没有配置使用默认的
   */
  var moneySymbol = useMemo(function () {
    if (customSymbol) {
      return customSymbol;
    }
    if (rest.moneySymbol === false || fieldProps.moneySymbol === false) {
      return undefined;
    }
    return intl.getMessage('moneySymbol', '¥');
  }, [customSymbol, fieldProps.moneySymbol, intl, rest.moneySymbol]);

  /*
   * A function that formats the number.
   * 1000 -> 1,000
   */
  var getFormateValue = useCallback(function (value) {
    // 新建数字正则，需要配置小数点
    var reg = new RegExp("\\B(?=(\\d{".concat(3 + Math.max(precision - DefaultPrecisionCont, 0), "})+(?!\\d))"), 'g');
    // 切分为 整数 和 小数 不同
    var _String$split = String(value).split('.'),
      _String$split2 = _slicedToArray(_String$split, 2),
      intStr = _String$split2[0],
      floatStr = _String$split2[1];

    // 最终的数据string，需要去掉 , 号。
    var resultInt = intStr.replace(reg, ',');

    // 计算最终的小数点
    var resultFloat = '';

    /* Taking the floatStr and slicing it to the precision. */
    if (floatStr && precision > 0) {
      resultFloat = ".".concat(floatStr.slice(0, precision === undefined ? DefaultPrecisionCont : precision));
    }
    return "".concat(resultInt).concat(resultFloat);
  }, [precision]);

  // 如果是阅读模式，直接返回字符串
  if (type === 'read') {
    var dom = /*#__PURE__*/_jsx("span", {
      ref: ref,
      children: getTextByLocale(locale || false, text, precision, numberFormatOptions !== null && numberFormatOptions !== void 0 ? numberFormatOptions : fieldProps.numberFormatOptions, moneySymbol)
    });
    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/_jsx(InputNumberPopover, _objectSpread(_objectSpread({
      contentRender: function contentRender(props) {
        if (numberPopoverRender === false) return null;
        if (!props.value) return null;
        var localeText = getTextByLocale(moneySymbol || locale || false, "".concat(getFormateValue(props.value)), precision, _objectSpread(_objectSpread({}, numberFormatOptions), {}, {
          notation: 'compact'
        }), moneySymbol);
        if (typeof numberPopoverRender === 'function') {
          return numberPopoverRender === null || numberPopoverRender === void 0 ? void 0 : numberPopoverRender(props, localeText);
        }
        return localeText;
      },
      ref: ref,
      precision: precision
      // 删除默认min={0}，允许输入一个负数的金额，用户可自行配置min来限制是否允许小于0的金额
      ,
      formatter: function formatter(value) {
        if (value && moneySymbol) {
          return "".concat(moneySymbol, " ").concat(getFormateValue(value));
        }
        return value === null || value === void 0 ? void 0 : value.toString();
      },
      parser: function parser(value) {
        if (moneySymbol && value) {
          return value.replace(new RegExp("\\".concat(moneySymbol, "\\s?|(,*)"), 'g'), '');
        }
        return value;
      },
      placeholder: placeholderValue
    }, omit(fieldProps, ['numberFormatOptions', 'precision', 'numberPopoverRender', 'customSymbol', 'moneySymbol', 'visible', 'open'])), {}, {
      onBlur: fieldProps.onBlur ? function (e) {
        var _fieldProps$onBlur;
        var value = e.target.value;
        if (moneySymbol && value) {
          value = value.replace(new RegExp("\\".concat(moneySymbol, "\\s?|(,*)"), 'g'), '');
        }
        (_fieldProps$onBlur = fieldProps.onBlur) === null || _fieldProps$onBlur === void 0 || _fieldProps$onBlur.call(fieldProps, value);
      } : undefined
    }));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: type
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldMoney);