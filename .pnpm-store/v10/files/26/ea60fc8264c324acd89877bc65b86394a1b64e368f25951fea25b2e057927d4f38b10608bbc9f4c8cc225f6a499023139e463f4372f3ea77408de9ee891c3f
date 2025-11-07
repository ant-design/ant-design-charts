var separateTree = require('./separate-root');
var VALID_DIRECTIONS = ['LR',
// left to right
'RL',
// right to left
'TB',
// top to bottom
'BT',
// bottom to top
'H',
// horizontal
'V' // vertical
];
var HORIZONTAL_DIRECTIONS = ['LR', 'RL', 'H'];
var isHorizontal = function isHorizontal(direction) {
  return HORIZONTAL_DIRECTIONS.indexOf(direction) > -1;
};
var DEFAULT_DIRECTION = VALID_DIRECTIONS[0];
module.exports = function (root, options, layoutAlgrithm) {
  var direction = options.direction || DEFAULT_DIRECTION;
  options.isHorizontal = isHorizontal(direction);
  if (direction && VALID_DIRECTIONS.indexOf(direction) === -1) {
    throw new TypeError("Invalid direction: " + direction);
  }
  if (direction === VALID_DIRECTIONS[0]) {
    // LR
    layoutAlgrithm(root, options);
  } else if (direction === VALID_DIRECTIONS[1]) {
    // RL
    layoutAlgrithm(root, options);
    root.right2left();
  } else if (direction === VALID_DIRECTIONS[2]) {
    // TB
    layoutAlgrithm(root, options);
  } else if (direction === VALID_DIRECTIONS[3]) {
    // BT
    layoutAlgrithm(root, options);
    root.bottom2top();
  } else if (direction === VALID_DIRECTIONS[4] || direction === VALID_DIRECTIONS[5]) {
    // H or V
    // separate into left and right trees
    var _separateTree = separateTree(root, options),
      left = _separateTree.left,
      right = _separateTree.right;
    // do layout for left and right trees
    layoutAlgrithm(left, options);
    layoutAlgrithm(right, options);
    options.isHorizontal ? left.right2left() : left.bottom2top();
    // combine left and right trees
    right.translate(left.x - right.x, left.y - right.y);
    // translate root
    root.x = left.x;
    root.y = right.y;
    var bb = root.getBoundingBox();
    if (options.isHorizontal) {
      if (bb.top < 0) {
        root.translate(0, -bb.top);
      }
    } else {
      if (bb.left < 0) {
        root.translate(-bb.left, 0);
      }
    }
  }
  // fixed root position, default value is true
  var fixedRoot = options.fixedRoot;
  if (fixedRoot === undefined) fixedRoot = true;
  if (fixedRoot) {
    root.translate(-(root.x + root.width / 2 + root.hgap), -(root.y + root.height / 2 + root.vgap));
  }
  reassignXYIfRadial(root, options);
  return root;
};
function reassignXYIfRadial(root, options) {
  if (options.radial) {
    var _ref = options.isHorizontal ? ["x", "y"] : ["y", "x"],
      rScale = _ref[0],
      radScale = _ref[1];
    var min = {
      x: Infinity,
      y: Infinity
    };
    var max = {
      x: -Infinity,
      y: -Infinity
    };
    var count = 0;
    root.DFTraverse(function (node) {
      count++;
      var x = node.x,
        y = node.y;
      min.x = Math.min(min.x, x);
      min.y = Math.min(min.y, y);
      max.x = Math.max(max.x, x);
      max.y = Math.max(max.y, y);
    });
    var radDiff = max[radScale] - min[radScale];
    if (radDiff === 0) return;
    var avgRad = Math.PI * 2 / count;
    root.DFTraverse(function (node) {
      var rad = (node[radScale] - min[radScale]) / radDiff * (Math.PI * 2 - avgRad) + avgRad;
      var r = node[rScale] - root[rScale];
      node.x = Math.cos(rad) * r;
      node.y = Math.sin(rad) * r;
    });
  }
}