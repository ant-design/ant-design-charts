function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var TreeLayout = require('./layout/base');
var nonLayeredTidyTree = require('./layout/non-layered-tidy');
var doTreeLayout = require('./layout/do-layout');
var util = require('./util');
var CompactBoxTreeLayout = /*#__PURE__*/function (_TreeLayout) {
  function CompactBoxTreeLayout() {
    return _TreeLayout.apply(this, arguments) || this;
  }
  _inheritsLoose(CompactBoxTreeLayout, _TreeLayout);
  var _proto = CompactBoxTreeLayout.prototype;
  _proto.execute = function execute() {
    var me = this;
    return doTreeLayout(me.rootNode, me.options, nonLayeredTidyTree);
  };
  return CompactBoxTreeLayout;
}(TreeLayout);
var DEFAULT_OPTIONS = {};
function compactBoxLayout(root, options) {
  options = util.assign({}, DEFAULT_OPTIONS, options);
  return new CompactBoxTreeLayout(root, options).execute();
}
module.exports = compactBoxLayout;