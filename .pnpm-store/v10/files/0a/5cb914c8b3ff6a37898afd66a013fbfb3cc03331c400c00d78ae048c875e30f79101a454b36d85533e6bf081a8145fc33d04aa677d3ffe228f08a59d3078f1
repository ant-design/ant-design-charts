/* eslint-disable no-param-reassign */
import React from 'react';
import reactCSS from 'reactcss';
import * as color from '../../helpers/color';
import { EditableInput } from '../common';
export var SketchFields = function SketchFields(_ref) {
  var onChange = _ref.onChange,
    rgb = _ref.rgb,
    hsl = _ref.hsl,
    hex = _ref.hex,
    disableAlpha = _ref.disableAlpha;
  var styles = reactCSS({
    default: {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    disableAlpha: {
      alpha: {
        display: 'none'
      }
    }
  }, {
    disableAlpha: disableAlpha
  });
  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      color.isValidHex(data.hex) && (onChange === null || onChange === void 0 ? void 0 : onChange({
        hex: data.hex,
        source: 'hex'
      }, e));
    } else if (data.r || data.g || data.b) {
      onChange === null || onChange === void 0 ? void 0 : onChange({
        r: data.r || (rgb === null || rgb === void 0 ? void 0 : rgb.r),
        g: data.g || (rgb === null || rgb === void 0 ? void 0 : rgb.g),
        b: data.b || (rgb === null || rgb === void 0 ? void 0 : rgb.b),
        a: rgb === null || rgb === void 0 ? void 0 : rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }
      data.a /= 100;
      onChange === null || onChange === void 0 ? void 0 : onChange({
        h: hsl === null || hsl === void 0 ? void 0 : hsl.h,
        s: hsl === null || hsl === void 0 ? void 0 : hsl.s,
        l: hsl === null || hsl === void 0 ? void 0 : hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: styles.fields,
    className: "flexbox-fix"
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.double
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: "hex",
    value: hex === null || hex === void 0 ? void 0 : hex.replace('#', ''),
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: "r",
    value: rgb === null || rgb === void 0 ? void 0 : rgb.r,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: "g",
    value: rgb === null || rgb === void 0 ? void 0 : rgb.g,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: "b",
    value: rgb === null || rgb === void 0 ? void 0 : rgb.b,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.alpha
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: "a",
    value: Math.round(((rgb === null || rgb === void 0 ? void 0 : rgb.a) || 0) * 100),
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "100"
  })));
};
export default SketchFields;