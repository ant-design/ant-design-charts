'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var omitDeep = _interopDefault(require('omit-deep'));
var rename = _interopDefault(require('deep-rename-keys'));
var xmlReader = require('xml-reader');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var parseInput = function parseInput(input) {
  var parsed = xmlReader.parseSync(input, {
    parentNodes: false
  });
  var hasMoreChildren = parsed.name === 'root' && parsed.children.length > 1;
  var isValid = hasMoreChildren ? parsed.children.reduce(function (acc, _ref) {
    var name = _ref.name;
    return !acc ? name === 'svg' : true;
  }, false) : parsed.children[0].name === 'svg';

  if (isValid) {
    return hasMoreChildren ? parsed : parsed.children[0];
  } else {
    throw Error('nothing to parse');
  }
};
var removeDoctype = function removeDoctype(input) {
  return input.replace(/<[\/]{0,1}(\!?DOCTYPE|\??xml)[^><]*>/gi, '');
};
var wrapInput = function wrapInput(input) {
  return "<root>".concat(input, "</root>");
};
var removeAttrs = function removeAttrs(obj) {
  return omitDeep(obj, ['parent']);
};
var camelize = function camelize(node) {
  return rename(node, function (key) {
    if (!notCamelcase(key)) {
      return toCamelCase(key);
    }

    return key;
  });
};
var toCamelCase = function toCamelCase(prop) {
  return prop.replace(/[-|:]([a-z])/gi, function (all, letter) {
    return letter.toUpperCase();
  });
};

var notCamelcase = function notCamelcase(prop) {
  return /^(data|aria)(-\w+)/.test(prop);
};

var escapeText = function escapeText(text) {
  if (text) {
    var str = String(text);
    return /[&<>]/.test(str) ? "<![CDATA[".concat(str.replace(/]]>/, ']]]]><![CDATA[>'), "]]>") : str;
  }

  return '';
};
var escapeAttr = function escapeAttr(attr) {
  return String(attr).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

var svgsonSync = function svgsonSync(input) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$transformNode = _ref.transformNode,
      transformNode = _ref$transformNode === void 0 ? function (node) {
    return node;
  } : _ref$transformNode,
      _ref$camelcase = _ref.camelcase,
      camelcase = _ref$camelcase === void 0 ? false : _ref$camelcase;

  var wrap = function wrap(input) {
    var cleanInput = removeDoctype(input);
    return wrapInput(cleanInput);
  };

  var unwrap = function unwrap(res) {
    return res.name === 'root' ? res.children : res;
  };

  var applyFilters = function applyFilters(input) {
    var applyTransformNode = function applyTransformNode(node) {
      var children = node.children;
      return node.name === 'root' ? children.map(applyTransformNode) : _objectSpread2(_objectSpread2({}, transformNode(node)), children && children.length > 0 ? {
        children: children.map(applyTransformNode)
      } : {});
    };

    var n;
    n = removeAttrs(input);
    n = applyTransformNode(n);

    if (camelcase) {
      n = camelize(n);
    }

    return n;
  };

  return unwrap(applyFilters(parseInput(wrap(input))));
};
function svgson() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    try {
      var res = svgsonSync.apply(void 0, args);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
}

var stringify = function stringify(ast) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$transformAttr = _ref.transformAttr,
      transformAttr = _ref$transformAttr === void 0 ? function (key, value, escape) {
    return "".concat(key, "=\"").concat(escape(value), "\"");
  } : _ref$transformAttr,
      _ref$selfClose = _ref.selfClose,
      selfClose = _ref$selfClose === void 0 ? true : _ref$selfClose;

  if (Array.isArray(ast)) {
    return ast.map(function (ast) {
      return stringify(ast, {
        transformAttr: transformAttr,
        selfClose: selfClose
      });
    }).join('');
  }

  if (ast.type === 'text') {
    return escapeText(ast.value);
  }

  var attributes = '';

  for (var attr in ast.attributes) {
    var attrStr = transformAttr(attr, ast.attributes[attr], escapeAttr, ast.name);
    attributes += attrStr ? " ".concat(attrStr) : '';
  }

  return ast.children.length || !selfClose ? "<".concat(ast.name).concat(attributes, ">").concat(stringify(ast.children, {
    transformAttr: transformAttr,
    selfClose: selfClose
  }), "</").concat(ast.name, ">") : "<".concat(ast.name).concat(attributes, "/>");
};

exports.default = svgson;
exports.parse = svgson;
exports.parseSync = svgsonSync;
exports.stringify = stringify;
