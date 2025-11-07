function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var TreeLayout = require('./layout/base');
var indentedTree = require('./layout/indented');
var separateTree = require('./layout/separate-root');
var util = require('./util');
var VALID_DIRECTIONS = ['LR',
// left to right
'RL',
// right to left
'H' // horizontal
];
var DEFAULT_DIRECTION = VALID_DIRECTIONS[0];
var IndentedLayout = /*#__PURE__*/function (_TreeLayout) {
  function IndentedLayout() {
    return _TreeLayout.apply(this, arguments) || this;
  }
  _inheritsLoose(IndentedLayout, _TreeLayout);
  var _proto = IndentedLayout.prototype;
  _proto.execute = function execute() {
    var me = this;
    var options = me.options;
    var root = me.rootNode;
    options.isHorizontal = true;
    // default indent 20 and sink first children;
    var _options$indent = options.indent,
      indent = _options$indent === void 0 ? 20 : _options$indent,
      _options$dropCap = options.dropCap,
      dropCap = _options$dropCap === void 0 ? true : _options$dropCap,
      _options$direction = options.direction,
      direction = _options$direction === void 0 ? DEFAULT_DIRECTION : _options$direction,
      align = options.align;
    if (direction && VALID_DIRECTIONS.indexOf(direction) === -1) {
      throw new TypeError("Invalid direction: " + direction);
    }
    if (direction === VALID_DIRECTIONS[0]) {
      // LR
      indentedTree(root, indent, dropCap, align);
    } else if (direction === VALID_DIRECTIONS[1]) {
      // RL
      indentedTree(root, indent, dropCap, align);
      root.right2left();
    } else if (direction === VALID_DIRECTIONS[2]) {
      // H
      // separate into left and right trees
      var _separateTree = separateTree(root, options),
        left = _separateTree.left,
        right = _separateTree.right;
      indentedTree(left, indent, dropCap, align);
      left.right2left();
      indentedTree(right, indent, dropCap, align);
      var bbox = left.getBoundingBox();
      right.translate(bbox.width, 0);
      root.x = right.x - root.width / 2;
    }
    return root;
  };
  return IndentedLayout;
}(TreeLayout);
var DEFAULT_OPTIONS = {};
function indentedLayout(root, options) {
  options = util.assign({}, DEFAULT_OPTIONS, options);
  return new IndentedLayout(root, options).execute();
}
module.exports = indentedLayout;