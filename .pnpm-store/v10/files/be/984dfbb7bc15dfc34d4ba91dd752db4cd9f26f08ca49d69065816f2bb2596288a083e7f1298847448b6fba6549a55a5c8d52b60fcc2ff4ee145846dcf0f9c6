function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var TreeLayout = require('./layout/base');
var mindmap = require('./layout/mindmap');
var doTreeLayout = require('./layout/do-layout');
var util = require('./util');
var MindmapLayout = /*#__PURE__*/function (_TreeLayout) {
  function MindmapLayout() {
    return _TreeLayout.apply(this, arguments) || this;
  }
  _inheritsLoose(MindmapLayout, _TreeLayout);
  var _proto = MindmapLayout.prototype;
  _proto.execute = function execute() {
    var me = this;
    return doTreeLayout(me.rootNode, me.options, mindmap);
  };
  return MindmapLayout;
}(TreeLayout);
var DEFAULT_OPTIONS = {};
function mindmapLayout(root, options) {
  options = util.assign({}, DEFAULT_OPTIONS, options);
  return new MindmapLayout(root, options).execute();
}
module.exports = mindmapLayout;