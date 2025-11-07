function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var TreeLayout = require('./layout/base');
var dendrogram = require('./layout/dendrogram');
var doTreeLayout = require('./layout/do-layout');
var util = require('./util');
var DendrogramLayout = /*#__PURE__*/function (_TreeLayout) {
  function DendrogramLayout() {
    return _TreeLayout.apply(this, arguments) || this;
  }
  _inheritsLoose(DendrogramLayout, _TreeLayout);
  var _proto = DendrogramLayout.prototype;
  _proto.execute = function execute() {
    var me = this;
    me.rootNode.width = 0;
    return doTreeLayout(me.rootNode, me.options, dendrogram);
  };
  return DendrogramLayout;
}(TreeLayout);
var DEFAULT_OPTIONS = {};
function dendrogramLayout(root, options) {
  options = util.assign({}, DEFAULT_OPTIONS, options);
  return new DendrogramLayout(root, options).execute();
}
module.exports = dendrogramLayout;