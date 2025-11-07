'use strict';

var DEFAULT_SIZE = 50;
var DEFAULT_WIDTH = 2;

var LN_2 = Math.log(2);
var self = module.exports;

var helper = require('./helper');

// Triangle
function kernel(x) {
  return 1 - Math.abs(x);
}

/**
 * Get min and max value for the pdf, covering all arr data range while respecting options' data
 * @param arr
 * @param options
 * @returns {*}
 */
module.exports.getUnifiedMinMax = function (arr, options) {
  return self.getUnifiedMinMaxMulti([arr], options);
};

module.exports.getUnifiedMinMaxMulti = function (arrMulti, options) {
  options = options || {};

  var relaxMin = false;
  var relaxMax = false;

  var width = helper.isNumber(options.width) ? options.width : DEFAULT_WIDTH;
  var size = helper.isNumber(options.size) ? options.size : DEFAULT_SIZE;
  var min = helper.isNumber(options.min) ? options.min : (relaxMin = true, helper.findMinMulti(arrMulti));
  var max = helper.isNumber(options.max) ? options.max : (relaxMax = true, helper.findMaxMulti(arrMulti));

  var range = max - min;
  var step = range / (size - 1);

  // Relax?
  if (relaxMin) {
    min = min - 2 * width * step;
  }
  if (relaxMax) {
    max = max + 2 * width * step;
  }

  return {
    min: min,
    max: max
  };
};

module.exports.create = function (arr, options) {
  options = options || {};

  if (!arr || (arr.length === 0)) {
    return [];
  }

  var size = helper.isNumber(options.size) ? options.size : DEFAULT_SIZE;
  var width = helper.isNumber(options.width) ? options.width : DEFAULT_WIDTH;
  var normalizedMinMax = self.getUnifiedMinMax(arr, {
    size: size,
    width: width,
    min: options.min,
    max: options.max
  });

  var min = normalizedMinMax.min;
  var max = normalizedMinMax.max;

  var range = max - min;
  var step = range / (size - 1);
  if (range === 0) {
    // Special case...
    return [{x: min, y: 1}];
  }

  // Good to go

  var buckets = [];
  for (var i = 0; i < size; i++) {
    buckets.push({
      x: min + i * step,
      y: 0
    });
  }

  var xToBucket = function (x) {
    return Math.floor((x - min) / step);
  };

  var partialArea = generatePartialAreas(kernel, width);
  var fullArea = partialArea[width];
  var c = partialArea[width-1] - partialArea[width-2];

  var initalValue = 0;
  arr.forEach(function (x) {
    var bucket = xToBucket(x);

    // Totally outside?
    if ((bucket + width < 0) || (bucket - width >= buckets.length)) {
      return;
    }

    var start = Math.max(bucket - width, 0);
    var mid = bucket;
    var end = Math.min(bucket + width, buckets.length - 1);

    var leftBlockCount = start - (bucket - width);
    var rightBlockCount = (bucket + width) - end;
    var spilledAreaLeft = partialArea[-width-1 + leftBlockCount] || 0;
    var spilledAreaRight = partialArea[-width-1 + rightBlockCount] || 0;
    var weight = fullArea / (fullArea - spilledAreaLeft - spilledAreaRight);

    if (leftBlockCount > 0) {
      initalValue += weight * (leftBlockCount - 1) * c;
    }

    // Add grads
    var startGradPos = Math.max(0, bucket-width+1);
    if (helper.inside(0, buckets.length-1, startGradPos)) {
      buckets[startGradPos].y += weight * 1 * c;
    }
    if (helper.inside(0, buckets.length-1, mid + 1)) {
      buckets[mid + 1].y -= weight * 2 * c;
    }
    if (helper.inside(0, buckets.length-1, end + 1)) {
      buckets[end + 1].y += weight * 1 * c;
    }
  });

  var accumulator = initalValue;
  var gradAccumulator = 0;
  var area = 0;
  buckets.forEach(function (bucket) {
    gradAccumulator += bucket.y;
    accumulator += gradAccumulator;

    bucket.y = accumulator;
    area += accumulator;
  });

  // Normalize
  if (area > 0) {
    buckets.forEach(function (bucket) {
      bucket.y /= area;
    });
  }

  return buckets;
};

function generatePartialAreas(kernel, width) {
  var partialAreas = {};

  var accumulator = 0;
  for (var i = -width; i <= width; i++) {
    accumulator += kernel(i/width);
    partialAreas[i] = accumulator;
  }

  return partialAreas;
}

module.exports.getExpectedValueFromPdf = function (pdf) {
  if (!pdf || (pdf.length === 0)) {
    return undefined;
  }

  var expected = 0;

  pdf.forEach(function (obj) {
    expected += obj.x * obj.y;
  });

  return expected;
};

module.exports.getXWithLeftTailArea = function (pdf, area) {
  if (!pdf || (pdf.length === 0)) {
    return undefined;
  }

  var accumulator = 0;
  var last = 0;
  for (var i = 0; i < pdf.length; i++) {
    last = i;
    accumulator += pdf[i].y;

    if (accumulator >= area) {
      break;
    }
  }

  return pdf[last].x;
};

module.exports.getPerplexity = function (pdf) {
  if (!pdf || (pdf.length === 0)) {
    return undefined;
  }

  var entropy = 0;
  pdf.forEach(function (obj) {
    var ln = Math.log(obj.y);

    if (isFinite(ln)) {
      entropy += obj.y * ln;
    }
  });
  entropy = -entropy / LN_2;

  return Math.pow(2, entropy);
};
