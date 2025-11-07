'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.typeName = typeName;
exports.spaces = spaces;
exports.indent = indent;
exports.debugNode = debugNode;
exports.debugNodes = debugNodes;

var _lodash = require('lodash.escape');

var _lodash2 = _interopRequireDefault(_lodash);

var _functionPrototype = require('function.prototype.name');

var _functionPrototype2 = _interopRequireDefault(_functionPrototype);

var _isString = require('is-string');

var _isString2 = _interopRequireDefault(_isString);

var _isNumberObject = require('is-number-object');

var _isNumberObject2 = _interopRequireDefault(_isNumberObject);

var _isCallable = require('is-callable');

var _isCallable2 = _interopRequireDefault(_isCallable);

var _isBooleanObject = require('is-boolean-object');

var _isBooleanObject2 = _interopRequireDefault(_isBooleanObject);

var _objectInspect = require('object-inspect');

var _objectInspect2 = _interopRequireDefault(_objectInspect);

var _has = require('has');

var _has2 = _interopRequireDefault(_has);

var _RSTTraversal = require('./RSTTraversal');

var _getAdapter = require('./getAdapter');

var _getAdapter2 = _interopRequireDefault(_getAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var booleanValue = Function.bind.call(Function.call, Boolean.prototype.valueOf);

function typeName(node) {
  var adapter = (0, _getAdapter2['default'])();
  if (adapter.displayNameOfNode) {
    return (0, _getAdapter2['default'])().displayNameOfNode(node) || 'Component';
  }
  return typeof node.type === 'function' ? node.type.displayName || (0, _functionPrototype2['default'])(node.type) || 'Component' : node.type;
}

function spaces(n) {
  return Array(n + 1).join(' ');
}

function indent(depth, string) {
  return string.split('\n').map(function (x) {
    return '' + String(spaces(depth)) + String(x);
  }).join('\n');
}

function propString(prop, options) {
  if ((0, _isString2['default'])(prop)) {
    return (0, _objectInspect2['default'])(String(prop), { quoteStyle: 'double' });
  }
  if ((0, _isNumberObject2['default'])(prop)) {
    return '{' + String((0, _objectInspect2['default'])(Number(prop))) + '}';
  }
  if ((0, _isBooleanObject2['default'])(prop)) {
    return '{' + String((0, _objectInspect2['default'])(booleanValue(prop))) + '}';
  }
  if ((0, _isCallable2['default'])(prop)) {
    return '{' + String((0, _objectInspect2['default'])(prop)) + '}';
  }
  if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
    if (options.verbose) {
      return '{' + String((0, _objectInspect2['default'])(prop)) + '}';
    }

    return '{{...}}';
  }
  return '{[' + (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) + ']}';
}

function propsString(node, options) {
  var props = (0, _RSTTraversal.propsOfNode)(node);
  var keys = Object.keys(props).filter(function (x) {
    return x !== 'children';
  });
  return keys.map(function (key) {
    return String(key) + '=' + String(propString(props[key], options));
  }).join(' ');
}

function indentChildren(childrenStrs, indentLength) {
  return childrenStrs.length ? '\n' + String(childrenStrs.map(function (x) {
    return indent(indentLength, x);
  }).join('\n')) + '\n' : '';
}

function isRSTNodeLike(node) {
  return (0, _has2['default'])(node, 'nodeType') && typeof node.nodeType === 'string' && (0, _has2['default'])(node, 'type') && (0, _has2['default'])(node, 'key') && (0, _has2['default'])(node, 'ref') && (0, _has2['default'])(node, 'instance') && (0, _has2['default'])(node, 'rendered');
}

function debugNode(node) {
  var indentLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof node === 'string' || typeof node === 'number') return (0, _lodash2['default'])(node);
  if (typeof node === 'function') {
    var name = (0, _functionPrototype2['default'])(node);
    return '[function' + (name ? ' ' + String(name) : '') + ']';
  }
  if (!node) return '';

  var adapter = (0, _getAdapter2['default'])();
  if (!adapter.isValidElement(node) && !isRSTNodeLike(node)) {
    return '{' + String((0, _objectInspect2['default'])(node)) + '}';
  }

  var childrenStrs = (0, _RSTTraversal.childrenOfNode)(node).map(function (n) {
    return debugNode(n, indentLength, options);
  }).filter(Boolean);
  var type = typeName(node);

  var props = options.ignoreProps ? '' : propsString(node, options);
  var beforeProps = props ? ' ' : '';
  var afterProps = childrenStrs.length ? '>' : ' ';
  var childrenIndented = indentChildren(childrenStrs, indentLength);
  var nodeClose = childrenStrs.length ? '</' + String(type) + '>' : '/>';
  return '<' + String(type) + beforeProps + String(props) + afterProps + String(childrenIndented) + nodeClose;
}

function debugNodes(nodes) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return nodes.map(function (node) {
    return debugNode(node, undefined, options);
  }).join('\n\n\n');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EZWJ1Zy5qcyJdLCJuYW1lcyI6WyJ0eXBlTmFtZSIsInNwYWNlcyIsImluZGVudCIsImRlYnVnTm9kZSIsImRlYnVnTm9kZXMiLCJib29sZWFuVmFsdWUiLCJGdW5jdGlvbiIsImJpbmQiLCJjYWxsIiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJub2RlIiwiYWRhcHRlciIsImRpc3BsYXlOYW1lT2ZOb2RlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwibiIsIkFycmF5Iiwiam9pbiIsImRlcHRoIiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJ4IiwicHJvcFN0cmluZyIsInByb3AiLCJvcHRpb25zIiwiU3RyaW5nIiwicXVvdGVTdHlsZSIsIk51bWJlciIsInZlcmJvc2UiLCJwcm9wc1N0cmluZyIsInByb3BzIiwia2V5cyIsIk9iamVjdCIsImZpbHRlciIsImtleSIsImluZGVudENoaWxkcmVuIiwiY2hpbGRyZW5TdHJzIiwiaW5kZW50TGVuZ3RoIiwibGVuZ3RoIiwiaXNSU1ROb2RlTGlrZSIsIm5vZGVUeXBlIiwibmFtZSIsImlzVmFsaWRFbGVtZW50IiwiaWdub3JlUHJvcHMiLCJiZWZvcmVQcm9wcyIsImFmdGVyUHJvcHMiLCJjaGlsZHJlbkluZGVudGVkIiwibm9kZUNsb3NlIiwibm9kZXMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBaUJnQkEsUSxHQUFBQSxRO1FBVUFDLE0sR0FBQUEsTTtRQUlBQyxNLEdBQUFBLE07UUFpREFDLFMsR0FBQUEsUztRQTRCQUMsVSxHQUFBQSxVOztBQTVHaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUlBOzs7Ozs7QUFFQSxJQUFNQyxlQUFlQyxTQUFTQyxJQUFULENBQWNDLElBQWQsQ0FBbUJGLFNBQVNFLElBQTVCLEVBQWtDQyxRQUFRQyxTQUFSLENBQWtCQyxPQUFwRCxDQUFyQjs7QUFF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Q0EsTUFBTW9CLGNBQWNkLFFBQVEsR0FBUixHQUFjLEVBQWxDO0FBQ0EsTUFBTWUsYUFBYVQsYUFBYUUsTUFBYixHQUNmLEdBRGUsR0FFZixHQUZKO0FBR0EsTUFBTVEsbUJBQW1CWCxlQUFlQyxZQUFmLEVBQTZCQyxZQUE3QixDQUF6QjtBQUNBLE1BQU1VLFlBQVlYLGFBQWFFLE1BQWIsaUJBQTJCMUIsSUFBM0IsVUFBcUMsSUFBdkQ7QUFDQSxzQkFBV0EsSUFBWCxJQUFrQmdDLFdBQWxCLFVBQWdDZCxLQUFoQyxJQUF3Q2UsVUFBeEMsVUFBcURDLGdCQUFyRCxJQUF3RUMsU0FBeEU7QUFDRDs7QUFFTSxTQUFTOUMsVUFBVCxDQUFvQitDLEtBQXBCLEVBQXlDO0FBQUEsTUFBZHhCLE9BQWMsdUVBQUosRUFBSTs7QUFDOUMsU0FBT3dCLE1BQU01QixHQUFOLENBQVUsVUFBQ1gsSUFBRDtBQUFBLFdBQVVULFVBQVVTLElBQVYsRUFBZ0J3QyxTQUFoQixFQUEyQnpCLE9BQTNCLENBQVY7QUFBQSxHQUFWLEVBQXlEUixJQUF6RCxDQUE4RCxRQUE5RCxDQUFQO0FBQ0QiLCJmaWxlIjoiRGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXNjYXBlIGZyb20gJ2xvZGFzaC5lc2NhcGUnO1xuaW1wb3J0IGZ1bmN0aW9uTmFtZSBmcm9tICdmdW5jdGlvbi5wcm90b3R5cGUubmFtZSc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnaXMtc3RyaW5nJztcbmltcG9ydCBpc051bWJlciBmcm9tICdpcy1udW1iZXItb2JqZWN0JztcbmltcG9ydCBpc0NhbGxhYmxlIGZyb20gJ2lzLWNhbGxhYmxlJztcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnaXMtYm9vbGVhbi1vYmplY3QnO1xuaW1wb3J0IGluc3BlY3QgZnJvbSAnb2JqZWN0LWluc3BlY3QnO1xuaW1wb3J0IGhhcyBmcm9tICdoYXMnO1xuXG5pbXBvcnQge1xuICBwcm9wc09mTm9kZSxcbiAgY2hpbGRyZW5PZk5vZGUsXG59IGZyb20gJy4vUlNUVHJhdmVyc2FsJztcbmltcG9ydCBnZXRBZGFwdGVyIGZyb20gJy4vZ2V0QWRhcHRlcic7XG5cbmNvbnN0IGJvb2xlYW5WYWx1ZSA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVOYW1lKG5vZGUpIHtcbiAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIoKTtcbiAgaWYgKGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUpIHtcbiAgICByZXR1cm4gZ2V0QWRhcHRlcigpLmRpc3BsYXlOYW1lT2ZOb2RlKG5vZGUpIHx8ICdDb21wb25lbnQnO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygbm9kZS50eXBlID09PSAnZnVuY3Rpb24nXG4gICAgPyAobm9kZS50eXBlLmRpc3BsYXlOYW1lIHx8IGZ1bmN0aW9uTmFtZShub2RlLnR5cGUpIHx8ICdDb21wb25lbnQnKVxuICAgIDogbm9kZS50eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhY2VzKG4pIHtcbiAgcmV0dXJuIEFycmF5KG4gKyAxKS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoZGVwdGgsIHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCdcXG4nKS5tYXAoKHgpID0+IGAke3NwYWNlcyhkZXB0aCl9JHt4fWApLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBwcm9wU3RyaW5nKHByb3AsIG9wdGlvbnMpIHtcbiAgaWYgKGlzU3RyaW5nKHByb3ApKSB7XG4gICAgcmV0dXJuIGluc3BlY3QoU3RyaW5nKHByb3ApLCB7IHF1b3RlU3R5bGU6ICdkb3VibGUnIH0pO1xuICB9XG4gIGlmIChpc051bWJlcihwcm9wKSkge1xuICAgIHJldHVybiBgeyR7aW5zcGVjdChOdW1iZXIocHJvcCkpfX1gO1xuICB9XG4gIGlmIChpc0Jvb2xlYW4ocHJvcCkpIHtcbiAgICByZXR1cm4gYHske2luc3BlY3QoYm9vbGVhblZhbHVlKHByb3ApKX19YDtcbiAgfVxuICBpZiAoaXNDYWxsYWJsZShwcm9wKSkge1xuICAgIHJldHVybiBgeyR7aW5zcGVjdChwcm9wKX19YDtcbiAgfVxuICBpZiAodHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xuICAgICAgcmV0dXJuIGB7JHtpbnNwZWN0KHByb3ApfX1gO1xuICAgIH1cblxuICAgIHJldHVybiAne3suLi59fSc7XG4gIH1cbiAgcmV0dXJuIGB7WyR7dHlwZW9mIHByb3B9XX1gO1xufVxuXG5mdW5jdGlvbiBwcm9wc1N0cmluZyhub2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHByb3BzID0gcHJvcHNPZk5vZGUobm9kZSk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKCh4KSA9PiB4ICE9PSAnY2hpbGRyZW4nKTtcbiAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IGAke2tleX09JHtwcm9wU3RyaW5nKHByb3BzW2tleV0sIG9wdGlvbnMpfWApLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gaW5kZW50Q2hpbGRyZW4oY2hpbGRyZW5TdHJzLCBpbmRlbnRMZW5ndGgpIHtcbiAgcmV0dXJuIGNoaWxkcmVuU3Rycy5sZW5ndGhcbiAgICA/IGBcXG4ke2NoaWxkcmVuU3Rycy5tYXAoKHgpID0+IGluZGVudChpbmRlbnRMZW5ndGgsIHgpKS5qb2luKCdcXG4nKX1cXG5gXG4gICAgOiAnJztcbn1cblxuZnVuY3Rpb24gaXNSU1ROb2RlTGlrZShub2RlKSB7XG4gIHJldHVybiBoYXMobm9kZSwgJ25vZGVUeXBlJylcbiAgICAmJiB0eXBlb2Ygbm9kZS5ub2RlVHlwZSA9PT0gJ3N0cmluZydcbiAgICAmJiBoYXMobm9kZSwgJ3R5cGUnKVxuICAgICYmIGhhcyhub2RlLCAna2V5JylcbiAgICAmJiBoYXMobm9kZSwgJ3JlZicpXG4gICAgJiYgaGFzKG5vZGUsICdpbnN0YW5jZScpXG4gICAgJiYgaGFzKG5vZGUsICdyZW5kZXJlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVidWdOb2RlKG5vZGUsIGluZGVudExlbmd0aCA9IDIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBub2RlID09PSAnbnVtYmVyJykgcmV0dXJuIGVzY2FwZShub2RlKTtcbiAgaWYgKHR5cGVvZiBub2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9IGZ1bmN0aW9uTmFtZShub2RlKTtcbiAgICByZXR1cm4gYFtmdW5jdGlvbiR7bmFtZSA/IGAgJHtuYW1lfWAgOiAnJ31dYDtcbiAgfVxuICBpZiAoIW5vZGUpIHJldHVybiAnJztcblxuICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcigpO1xuICBpZiAoIWFkYXB0ZXIuaXNWYWxpZEVsZW1lbnQobm9kZSkgJiYgIWlzUlNUTm9kZUxpa2Uobm9kZSkpIHtcbiAgICByZXR1cm4gYHske2luc3BlY3Qobm9kZSl9fWA7XG4gIH1cblxuICBjb25zdCBjaGlsZHJlblN0cnMgPSBjaGlsZHJlbk9mTm9kZShub2RlKVxuICAgIC5tYXAoKG4pID0+IGRlYnVnTm9kZShuLCBpbmRlbnRMZW5ndGgsIG9wdGlvbnMpKVxuICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IHR5cGUgPSB0eXBlTmFtZShub2RlKTtcblxuICBjb25zdCBwcm9wcyA9IG9wdGlvbnMuaWdub3JlUHJvcHMgPyAnJyA6IHByb3BzU3RyaW5nKG5vZGUsIG9wdGlvbnMpO1xuICBjb25zdCBiZWZvcmVQcm9wcyA9IHByb3BzID8gJyAnIDogJyc7XG4gIGNvbnN0IGFmdGVyUHJvcHMgPSBjaGlsZHJlblN0cnMubGVuZ3RoXG4gICAgPyAnPidcbiAgICA6ICcgJztcbiAgY29uc3QgY2hpbGRyZW5JbmRlbnRlZCA9IGluZGVudENoaWxkcmVuKGNoaWxkcmVuU3RycywgaW5kZW50TGVuZ3RoKTtcbiAgY29uc3Qgbm9kZUNsb3NlID0gY2hpbGRyZW5TdHJzLmxlbmd0aCA/IGA8LyR7dHlwZX0+YCA6ICcvPic7XG4gIHJldHVybiBgPCR7dHlwZX0ke2JlZm9yZVByb3BzfSR7cHJvcHN9JHthZnRlclByb3BzfSR7Y2hpbGRyZW5JbmRlbnRlZH0ke25vZGVDbG9zZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVidWdOb2Rlcyhub2Rlcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBub2Rlcy5tYXAoKG5vZGUpID0+IGRlYnVnTm9kZShub2RlLCB1bmRlZmluZWQsIG9wdGlvbnMpKS5qb2luKCdcXG5cXG5cXG4nKTtcbn1cbiJdfQ==
//# sourceMappingURL=Debug.js.map