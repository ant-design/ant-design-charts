'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = render;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _getAdapter = require('./getAdapter');

var _getAdapter2 = _interopRequireDefault(_getAdapter);

var _Utils = require('./Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders a react component into static HTML and provides a cheerio wrapper around it. This is
 * somewhat asymmetric with `mount` and `shallow`, which don't use any external libraries, but
 * Cheerio's API is pretty close to what we actually want and has a significant amount of utility
 * that would be recreating the wheel if we didn't use it.
 *
 * I think there are a lot of good use cases to use `render` instead of `shallow` or `mount`, and
 * thus I'd like to keep this API in here even though it's not really "ours".
 *
 * @param node
 * @param options
 * @returns {Cheerio}
 */

function render(node) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var adapter = (0, _getAdapter2['default'])(options);
  var renderer = adapter.createRenderer((0, _object2['default'])({ mode: 'string' }, options));
  var html = renderer.render(node, options.context);
  return (0, _Utils.loadCheerioRoot)(html);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwibm9kZSIsIm9wdGlvbnMiLCJhZGFwdGVyIiwicmVuZGVyZXIiLCJjcmVhdGVSZW5kZXJlciIsIm1vZGUiLCJodG1sIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7cUJBaUJ3QkEsTTs7Ozs7O0FBakJ4Qjs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY2UsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBb0M7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2pELE1BQU1DLFVBQVUsNkJBQVdELE9BQVgsQ0FBaEI7QUFDQSxNQUFNRSxXQUFXRCxRQUFRRSxjQUFSLDRCQUF5QkMsTUFBTSxRQUEvQixJQUE0Q0osT0FBNUMsRUFBakI7QUFDQSxNQUFNSyxPQUFPSCxTQUFTSixNQUFULENBQWdCQyxJQUFoQixFQUFzQkMsUUFBUU0sT0FBOUIsQ0FBYjtBQUNBLFNBQU8sNEJBQWdCRCxJQUFoQixDQUFQO0FBQ0QiLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEFkYXB0ZXIgZnJvbSAnLi9nZXRBZGFwdGVyJztcbmltcG9ydCB7IGxvYWRDaGVlcmlvUm9vdCB9IGZyb20gJy4vVXRpbHMnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSByZWFjdCBjb21wb25lbnQgaW50byBzdGF0aWMgSFRNTCBhbmQgcHJvdmlkZXMgYSBjaGVlcmlvIHdyYXBwZXIgYXJvdW5kIGl0LiBUaGlzIGlzXG4gKiBzb21ld2hhdCBhc3ltbWV0cmljIHdpdGggYG1vdW50YCBhbmQgYHNoYWxsb3dgLCB3aGljaCBkb24ndCB1c2UgYW55IGV4dGVybmFsIGxpYnJhcmllcywgYnV0XG4gKiBDaGVlcmlvJ3MgQVBJIGlzIHByZXR0eSBjbG9zZSB0byB3aGF0IHdlIGFjdHVhbGx5IHdhbnQgYW5kIGhhcyBhIHNpZ25pZmljYW50IGFtb3VudCBvZiB1dGlsaXR5XG4gKiB0aGF0IHdvdWxkIGJlIHJlY3JlYXRpbmcgdGhlIHdoZWVsIGlmIHdlIGRpZG4ndCB1c2UgaXQuXG4gKlxuICogSSB0aGluayB0aGVyZSBhcmUgYSBsb3Qgb2YgZ29vZCB1c2UgY2FzZXMgdG8gdXNlIGByZW5kZXJgIGluc3RlYWQgb2YgYHNoYWxsb3dgIG9yIGBtb3VudGAsIGFuZFxuICogdGh1cyBJJ2QgbGlrZSB0byBrZWVwIHRoaXMgQVBJIGluIGhlcmUgZXZlbiB0aG91Z2ggaXQncyBub3QgcmVhbGx5IFwib3Vyc1wiLlxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHJldHVybnMge0NoZWVyaW99XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcihvcHRpb25zKTtcbiAgY29uc3QgcmVuZGVyZXIgPSBhZGFwdGVyLmNyZWF0ZVJlbmRlcmVyKHsgbW9kZTogJ3N0cmluZycsIC4uLm9wdGlvbnMgfSk7XG4gIGNvbnN0IGh0bWwgPSByZW5kZXJlci5yZW5kZXIobm9kZSwgb3B0aW9ucy5jb250ZXh0KTtcbiAgcmV0dXJuIGxvYWRDaGVlcmlvUm9vdChodG1sKTtcbn1cbiJdfQ==
//# sourceMappingURL=render.js.map