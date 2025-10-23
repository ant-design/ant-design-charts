import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["content"],
  _excluded2 = ["content"];
import React from 'react';
var RE_URL = /^(http:|https:)?\/\//;
function isUrl(str) {
  return RE_URL.test(str) || str.startsWith('/') && !str.startsWith('/*') || str.startsWith('./') || str.startsWith('../');
}
var EnableJsScript = function EnableJsScript() {
  return /*#__PURE__*/React.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<b>Enable JavaScript to run this app.</b>"
    }
  });
};
var GlobalDataScript = function GlobalDataScript(props) {
  var _manifest$assets;
  var loaderData = props.loaderData,
    htmlPageOpts = props.htmlPageOpts,
    manifest = props.manifest;
  var clientCssPath = (manifest === null || manifest === void 0 || (_manifest$assets = manifest.assets) === null || _manifest$assets === void 0 ? void 0 : _manifest$assets['umi.css']) || '';
  return /*#__PURE__*/React.createElement("script", {
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: "window.__UMI_LOADER_DATA__ = ".concat(JSON.stringify(loaderData || {}), "; window.__UMI_METADATA_LOADER_DATA__ = ").concat(JSON.stringify(htmlPageOpts || {}), "; window.__UMI_BUILD_ClIENT_CSS__ = '").concat(clientCssPath, "'")
    }
  });
};
function normalizeScripts(script) {
  var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof script === 'string') {
    return isUrl(script) ? _objectSpread({
      src: script
    }, extraProps) : {
      content: script
    };
  } else if (_typeof(script) === 'object') {
    return _objectSpread(_objectSpread({}, script), extraProps);
  } else {
    throw new Error("Invalid script type: ".concat(_typeof(script)));
  }
}
function generatorStyle(style) {
  return isUrl(style) ? {
    type: 'link',
    href: style
  } : {
    type: 'style',
    content: style
  };
}
var HydrateMetadata = function HydrateMetadata(props) {
  var _htmlPageOpts$favicon, _htmlPageOpts$keyword, _htmlPageOpts$metas, _htmlPageOpts$links, _htmlPageOpts$styles, _htmlPageOpts$headScr;
  var htmlPageOpts = props.htmlPageOpts;
  return /*#__PURE__*/React.createElement(React.Fragment, null, (htmlPageOpts === null || htmlPageOpts === void 0 ? void 0 : htmlPageOpts.title) && /*#__PURE__*/React.createElement("title", null, htmlPageOpts.title), htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$favicon = htmlPageOpts.favicons) === null || _htmlPageOpts$favicon === void 0 ? void 0 : _htmlPageOpts$favicon.map(function (favicon, key) {
    return /*#__PURE__*/React.createElement("link", {
      key: key,
      rel: "shortcut icon",
      href: favicon
    });
  }), (htmlPageOpts === null || htmlPageOpts === void 0 ? void 0 : htmlPageOpts.description) && /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: htmlPageOpts.description
  }), (htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$keyword = htmlPageOpts.keywords) === null || _htmlPageOpts$keyword === void 0 ? void 0 : _htmlPageOpts$keyword.length) && /*#__PURE__*/React.createElement("meta", {
    name: "keywords",
    content: htmlPageOpts.keywords.join(',')
  }), htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$metas = htmlPageOpts.metas) === null || _htmlPageOpts$metas === void 0 ? void 0 : _htmlPageOpts$metas.map(function (em) {
    return /*#__PURE__*/React.createElement("meta", {
      key: em.name,
      name: em.name,
      content: em.content
    });
  }), htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$links = htmlPageOpts.links) === null || _htmlPageOpts$links === void 0 ? void 0 : _htmlPageOpts$links.map(function (link, key) {
    return /*#__PURE__*/React.createElement("link", _extends({
      key: key
    }, link));
  }), htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$styles = htmlPageOpts.styles) === null || _htmlPageOpts$styles === void 0 ? void 0 : _htmlPageOpts$styles.map(function (style, key) {
    var _generatorStyle = generatorStyle(style),
      type = _generatorStyle.type,
      href = _generatorStyle.href,
      content = _generatorStyle.content;
    if (type === 'link') {
      return /*#__PURE__*/React.createElement("link", {
        key: key,
        rel: "stylesheet",
        href: href
      });
    } else if (type === 'style') {
      return /*#__PURE__*/React.createElement("style", {
        key: key
      }, content);
    }
  }), htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$headScr = htmlPageOpts.headScripts) === null || _htmlPageOpts$headScr === void 0 ? void 0 : _htmlPageOpts$headScr.map(function (script, key) {
    var _normalizeScripts = normalizeScripts(script),
      content = _normalizeScripts.content,
      rest = _objectWithoutProperties(_normalizeScripts, _excluded);
    return /*#__PURE__*/React.createElement("script", _extends({
      dangerouslySetInnerHTML: {
        __html: content
      },
      key: key
    }, rest));
  }));
};
export function Html(_ref) {
  var _htmlPageOpts$scripts;
  var children = _ref.children,
    loaderData = _ref.loaderData,
    manifest = _ref.manifest,
    htmlPageOpts = _ref.htmlPageOpts,
    __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _ref.__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    mountElementId = _ref.mountElementId;
  // TODO: 处理 head 标签，比如 favicon.ico 的一致性
  // TODO: root 支持配置
  if (__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== null && __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.pureHtml) {
    return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement(HydrateMetadata, {
      htmlPageOpts: htmlPageOpts
    })), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement(EnableJsScript, null), /*#__PURE__*/React.createElement("div", {
      id: mountElementId
    }, children), /*#__PURE__*/React.createElement(GlobalDataScript, {
      manifest: manifest,
      loaderData: loaderData,
      htmlPageOpts: htmlPageOpts
    })));
  }
  if (__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== null && __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.pureApp) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
  var clientCss = typeof window === 'undefined' ? manifest === null || manifest === void 0 ? void 0 : manifest.assets['umi.css'] : window.__UMI_BUILD_ClIENT_CSS__;
  return (
    /*#__PURE__*/
    // FIXME: Resolve the hydrate warning for suppressHydrationWarning(3)
    React.createElement("html", {
      suppressHydrationWarning: true,
      lang: (htmlPageOpts === null || htmlPageOpts === void 0 ? void 0 : htmlPageOpts.lang) || 'en'
    }, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/React.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), clientCss && /*#__PURE__*/React.createElement("link", {
      suppressHydrationWarning: true,
      rel: "stylesheet",
      href: clientCss
    }), /*#__PURE__*/React.createElement(HydrateMetadata, {
      htmlPageOpts: htmlPageOpts
    })), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement(EnableJsScript, null), /*#__PURE__*/React.createElement("div", {
      id: mountElementId
    }, children), /*#__PURE__*/React.createElement(GlobalDataScript, {
      manifest: manifest,
      loaderData: loaderData,
      htmlPageOpts: htmlPageOpts
    }), htmlPageOpts === null || htmlPageOpts === void 0 || (_htmlPageOpts$scripts = htmlPageOpts.scripts) === null || _htmlPageOpts$scripts === void 0 ? void 0 : _htmlPageOpts$scripts.map(function (script, key) {
      var _normalizeScripts2 = normalizeScripts(script),
        content = _normalizeScripts2.content,
        rest = _objectWithoutProperties(_normalizeScripts2, _excluded2);
      return /*#__PURE__*/React.createElement("script", _extends({
        dangerouslySetInnerHTML: {
          __html: content
        },
        key: key
      }, rest));
    })))
  );
}