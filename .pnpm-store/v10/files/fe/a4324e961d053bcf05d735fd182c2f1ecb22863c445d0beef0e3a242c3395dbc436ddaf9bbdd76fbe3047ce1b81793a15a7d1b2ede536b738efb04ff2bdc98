"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinearGradient = exports.parseBackgroundImageType = exports.getActualImageSize = void 0;
const stringToStopParam = str => {
  // rgb(0, 0, 0) 20% 需要拆分
  const [color, ...offsets] = str.split(/\s+(?=[^)]*(\(|$))/).filter(item => item);
  if (offsets.length === 0) {
    return color;
  }
  if (offsets.length === 1) {
    return {
      color,
      offset: parseFloat(offsets[0]) / 100
    };
  }
  return offsets.map(offset => ({
    color,
    offset: parseFloat(offset) / 100
  }));
};
const pushStopParam = (stopParams, str) => {
  const stopParam = stringToStopParam(str);
  if (Array.isArray(stopParam)) {
    stopParams.push(...stopParam);
  } else {
    stopParams.push(stopParam);
  }
};

/**
 * 解析线性渐变
 *
 * ---
 * <linear-gradient> = linear-gradient(
 * [ [ <angle> | to <side-or-corner> ] ,]?
 * <color-stop>[, <color-stop>]+
 * )
 *
 * <side-or-corner> = [left | right] || [top | bottom]
 *
 * ---
 * * Example: "to top, rgba(67, 90, 111, 0.04), white"
 *
 * @param value
 * @see https://www.w3.org/TR/css3-images/#linear-gradients
 */
const parseLinearGradient = value => {
  const parts = [];
  let currentPart = [];
  let i = 0;
  let skipComma = false;

  // There can be commas in colors, carefully break apart the value
  while (i < value.length) {
    const char = value.substr(i, 1);
    if (char === '(') {
      skipComma = true;
    } else if (char === ')') {
      skipComma = false;
    }
    if (char === ',' && !skipComma) {
      parts.push(currentPart.join('').trim());
      currentPart = [];
    } else {
      currentPart.push(char);
    }
    if (i === value.length - 1) {
      parts.push(currentPart.join('').trim());
    }
    i += 1;
  }
  if (parts.length < 2) {
    throw Error('Invalid linear-gradient value: ' + value);
  }
  return parts.reduce((result, part, index) => {
    if (index === 0) {
      // 第一个参数不是角度的话默认 180deg
      if (part.includes('to') || part.includes('deg') || part.includes('rad') || part.includes('turn')) {
        result.angle = part;
      } else {
        pushStopParam(result.stops, part);
      }
      return result;
    }
    pushStopParam(result.stops, part);
    return result;
  }, {
    angle: '180deg',
    stops: []
  });
};

/**
 * 解析背景图片类型
 * The structure is as follows:
 * (Supports images and gradients)
 *
 * ---
 * <background-image> = <bg-image> [ , <bg-image> ]*
 * <bg-image> = <image> | none
 * <image> = <url> | <image-list> | <element-reference> | <image-combination> | <gradient>
 * ---
 * @param value
 * @see: https://www.w3.org/TR/css-backgrounds-3/#the-background-image
 * ---
 */
exports.parseLinearGradient = parseLinearGradient;
const parseBackgroundImageType = value => {
  if (value === 'none') {
    return;
  }
  const urlMatches = value.match(/^url\("(.+)"\)$/i);
  const linearGradientMatches = value.match(/^linear-gradient\((.+)\)$/i);
  const radialGradientMatches = value.match(/^radial-gradient\((.+)\)$/i);
  if (urlMatches && urlMatches.length === 2) {
    // Image
    // eslint-disable-next-line consistent-return
    return {
      type: 'Image',
      value: urlMatches[1]
    };
  }
  if (linearGradientMatches && linearGradientMatches.length === 2) {
    // Linear gradient
    const linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);
    if (linearGradientConfig) {
      // eslint-disable-next-line consistent-return
      return {
        type: 'LinearGradient',
        value: linearGradientConfig
      };
    }
  }
  if (radialGradientMatches && radialGradientMatches.length === 2) {
    // 辐射渐变
    // const linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);

    if (radialGradientMatches) {
      // eslint-disable-next-line consistent-return
      return {
        type: 'radialGradient',
        value: ''
      };
    }
  }
};

/**
 * 获取真实图像尺寸
 * @param {string} backgroundSize value of background-size CSS property
 * @param {{width: number, height: number}} imageSize natural size of the image
 * @param {{width: number, height: number}} containerSize size of the container
 * @return {{width: number, height: number}} actual image size
 */
exports.parseBackgroundImageType = parseBackgroundImageType;
const getActualImageSize = (backgroundSize, imageSize, containerSize) => {
  let width = 0;
  let height = 0;
  const {
    height: imgH,
    width: imgW
  } = imageSize;

  // sanity check
  if (imgW === 0 || imgH === 0 || containerSize.width === 0 || containerSize.height === 0) {
    width = 0;
    height = 0;
  } else if (backgroundSize === 'cover') {
    if (imgW > imgH) {
      height = containerSize.height;
      width = height / imgH * imgW;
    } else {
      width = containerSize.width;
      height = width / imgW * imgH;
    }
  } else if (backgroundSize === 'contain') {
    if (imgW > imgH) {
      width = containerSize.width;
      height = width / imgW * imgH;
    } else {
      height = containerSize.height;
      width = height / imgH * imgW;
    }
  } else if (backgroundSize === 'auto') {
    width = imgW;
    height = imgH;
  } else {
    // we currently don't support multiple backgrounds
    const [singleBackgroundSize] = backgroundSize.split(',');
    let [backgroundSizeWidth, backgroundSizeHeight] = singleBackgroundSize.trim().split(' ');
    if (backgroundSizeWidth === 'auto' || backgroundSizeWidth === undefined) {
      backgroundSizeWidth = '';
    } else if (backgroundSizeWidth.endsWith('%')) {
      backgroundSizeWidth = (parseFloat(backgroundSizeWidth) / 100 * containerSize.width).toString();
    } else if (backgroundSizeWidth.endsWith('px')) {
      backgroundSizeWidth = parseFloat(backgroundSizeWidth).toString();
    }
    if (backgroundSizeHeight === 'auto' || backgroundSizeHeight === undefined) {
      backgroundSizeHeight = '';
    } else if (backgroundSizeHeight.endsWith('%')) {
      backgroundSizeHeight = (parseFloat(backgroundSizeHeight) / 100 * containerSize.height).toString();
    } else if (backgroundSizeHeight.endsWith('px')) {
      backgroundSizeHeight = parseFloat(backgroundSizeHeight).toString();
    }
    if (backgroundSizeWidth !== '' && backgroundSizeHeight === '') {
      width = Number(backgroundSizeWidth);
      height = width / imgW * imgH;
    } else if (backgroundSizeWidth === '' && backgroundSizeHeight !== '') {
      height = Number(backgroundSizeHeight);
      width = height / imgH * imgW;
    } else if (backgroundSizeWidth !== '' && backgroundSizeHeight !== '') {
      width = Number(backgroundSizeWidth);
      height = Number(backgroundSizeHeight);
    }
  }
  return {
    width,
    height
  };
};
exports.getActualImageSize = getActualImageSize;