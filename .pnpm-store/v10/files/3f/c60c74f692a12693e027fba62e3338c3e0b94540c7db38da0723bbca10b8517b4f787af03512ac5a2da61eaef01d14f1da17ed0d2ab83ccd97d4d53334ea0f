/*!
 * @antv/g-plugin-dragndrop
 * @description A G plugin for Drag n Drop implemented with PointerEvents
 * @version 2.1.1
 * @date 12/24/2025, 11:56:44 AM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _callSuper = require('@babel/runtime/helpers/callSuper');
var _inherits = require('@babel/runtime/helpers/inherits');
var gLite = require('@antv/g-lite');
var _regeneratorRuntime = require('@babel/runtime/helpers/regeneratorRuntime');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var util = require('@antv/util');

var DragndropPlugin = /*#__PURE__*/function () {
  function DragndropPlugin(dragndropPluginOptions) {
    _classCallCheck(this, DragndropPlugin);
    this.dragndropPluginOptions = dragndropPluginOptions;
  }
  return _createClass(DragndropPlugin, [{
    key: "apply",
    value: function apply(context) {
      var _this = this;
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext;
      var document = renderingContext.root.ownerDocument;

      // TODO: should we add an option like `draggable` to Canvas
      var canvas = document.defaultView;
      var handlePointerdown = function handlePointerdown(event) {
        var target = event.target;
        var isDocument = target === document;
        var draggableEventTarget = isDocument && _this.dragndropPluginOptions.isDocumentDraggable ? document : target.closest && target.closest('[draggable=true]');

        // `draggable` may be set on ancestor nodes:
        // @see https://github.com/antvis/G/issues/1088
        if (draggableEventTarget) {
          // delay triggering dragstart event
          var dragstartTriggered = false;
          var dragstartTimeStamp = event.timeStamp;
          var dragstartClientCoordinates = [event.clientX, event.clientY];
          var currentDroppable = null;
          var lastDragClientCoordinates = [event.clientX, event.clientY];
          // @ts-ignore
          // eslint-disable-next-line no-inner-declarations
          var handlePointermove = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
              var timeElapsed, distanceMoved, point, elementsBelow, elementBelow, droppableBelow;
              return _regeneratorRuntime().wrap(function (_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (dragstartTriggered) {
                      _context.next = 2;
                      break;
                    }
                    timeElapsed = event.timeStamp - dragstartTimeStamp;
                    distanceMoved = util.distanceSquareRoot([event.clientX, event.clientY], dragstartClientCoordinates); // check thresholds
                    if (!(timeElapsed <= _this.dragndropPluginOptions.dragstartTimeThreshold || distanceMoved <= _this.dragndropPluginOptions.dragstartDistanceThreshold)) {
                      _context.next = 1;
                      break;
                    }
                    return _context.abrupt("return");
                  case 1:
                    // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragstart_event
                    event.type = 'dragstart';
                    draggableEventTarget.dispatchEvent(event);
                    dragstartTriggered = true;
                  case 2:
                    // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drag_event
                    event.type = 'drag';
                    // @ts-ignore
                    event.dx = event.clientX - lastDragClientCoordinates[0];
                    // @ts-ignore
                    event.dy = event.clientY - lastDragClientCoordinates[1];
                    draggableEventTarget.dispatchEvent(event);
                    lastDragClientCoordinates = [event.clientX, event.clientY];
                    if (isDocument) {
                      _context.next = 4;
                      break;
                    }
                    point = _this.dragndropPluginOptions.overlap === 'pointer' ? [event.canvasX, event.canvasY] : target.getBounds().center;
                    _context.next = 3;
                    return document.elementsFromPoint(point[0], point[1]);
                  case 3:
                    elementsBelow = _context.sent;
                    // prevent from picking the dragging element
                    elementBelow = elementsBelow[elementsBelow.indexOf(target) + 1];
                    droppableBelow = (elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.closest('[droppable=true]')) || (_this.dragndropPluginOptions.isDocumentDroppable ? document : null);
                    if (currentDroppable !== droppableBelow) {
                      if (currentDroppable) {
                        // null when we were not over a droppable before this event
                        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragleave_event
                        event.type = 'dragleave';
                        event.target = currentDroppable;
                        currentDroppable.dispatchEvent(event);
                      }
                      if (droppableBelow) {
                        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragleave_event
                        event.type = 'dragenter';
                        event.target = droppableBelow;
                        droppableBelow.dispatchEvent(event);
                      }
                      currentDroppable = droppableBelow;
                      if (currentDroppable) {
                        // null if we're not coming over a droppable now
                        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragover_event
                        event.type = 'dragover';
                        event.target = currentDroppable;
                        currentDroppable.dispatchEvent(event);
                      }
                    }
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function handlePointermove(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          canvas.addEventListener('pointermove', handlePointermove);
          var stopDragging = function stopDragging(originalPointerUpEvent) {
            if (dragstartTriggered) {
              // prevent click event being triggerd
              // @see https://github.com/antvis/G/issues/1091
              originalPointerUpEvent.detail = {
                preventClick: true
              };

              // clone event first
              var _event = originalPointerUpEvent.clone();

              // drop should fire before dragend
              // @see https://javascript.tutorialink.com/is-there-a-defined-ordering-between-dragend-and-drop-events/

              if (currentDroppable) {
                // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drop_event
                _event.type = 'drop';
                _event.target = currentDroppable;
                currentDroppable.dispatchEvent(_event);
              }

              // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/dragend_event
              _event.type = 'dragend';
              draggableEventTarget.dispatchEvent(_event);
              dragstartTriggered = false;
            }
            canvas.removeEventListener('pointermove', handlePointermove);
          };
          target.addEventListener('pointerup', stopDragging, {
            once: true
          });
          target.addEventListener('pointerupoutside', stopDragging, {
            once: true
          });
        }
      };
      renderingService.hooks.init.tap(DragndropPlugin.tag, function () {
        canvas.addEventListener('pointerdown', handlePointerdown);
      });
      renderingService.hooks.destroy.tap(DragndropPlugin.tag, function () {
        canvas.removeEventListener('pointerdown', handlePointerdown);
      });
    }
  }]);
}();
DragndropPlugin.tag = 'Dragndrop';

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Plugin);
    _this = _callSuper(this, Plugin);
    _this.name = 'dragndrop';
    _this.options = options;
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      this.addRenderingPlugin(new DragndropPlugin(_objectSpread({
        overlap: 'pointer',
        isDocumentDraggable: false,
        isDocumentDroppable: false,
        dragstartDistanceThreshold: 0,
        dragstartTimeThreshold: 0
      }, this.options)));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this.plugins[0].dragndropPluginOptions, options);
    }
  }]);
}(gLite.AbstractRendererPlugin);

exports.Plugin = Plugin;
//# sourceMappingURL=index.js.map
