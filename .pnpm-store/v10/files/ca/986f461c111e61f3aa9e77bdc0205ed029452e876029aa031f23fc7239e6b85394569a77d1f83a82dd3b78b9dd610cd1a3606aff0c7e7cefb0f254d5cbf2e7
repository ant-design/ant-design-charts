"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToShape = void 0;
var _color = _interopRequireDefault(require("color"));
var _clipPath = require("../utils/clipPath");
var _models = require("../models");
var _utils = require("../models/utils");
var _background = require("../utils/background");
var _image = require("../utils/image");
var _svg = require("../utils/svg");
var _svg2 = require("./svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 将节点转换为 Shape 对象
 * @param node HTML Node
 * @param styles
 */
const parseToShape = async (node, styles) => {
  // 解析布局
  const bcr = node.getBoundingClientRect();
  const {
    left,
    top
  } = bcr;
  const width = bcr.right - bcr.left;
  const height = bcr.bottom - bcr.top;
  const rect = new _models.Rectangle({
    width,
    height,
    x: left,
    y: top
  });

  // 解析基础信息

  rect.name = node.className || 'rect';
  rect.mapBasicInfo(node);

  // 解析样式

  const style = new _models.Style();
  if (!styles) {
    styles = getComputedStyle(node);
  }
  const {
    overflow
  } = styles;
  if (overflow === 'hidden') {
    rect.hasClippingMask = true;
  }
  const {
    // 背景颜色
    backgroundColor
  } = styles;

  // 解析背景颜色
  const background = new _color.default(backgroundColor);
  if (background.alpha() !== 0) {
    style.addColorFill(backgroundColor);
  }

  // 解析阴影
  const {
    boxShadow,
    borderWidth
  } = styles;
  if (boxShadow !== _utils.defaultNodeStyle.boxShadow) {
    // 拿到阴影样式
    const shadowStrings = _models.Shadow.splitShadowString(boxShadow);
    shadowStrings.forEach(shadowString => {
      const shadowObject = _models.Shadow.shadowStringToObject(shadowString);

      // 判断是内阴影还是外阴影
      if (shadowObject.inset) {
        // 针对内阴影 如果存在 border 的话
        if (borderWidth.indexOf(' ') === -1) {
          // 需要给 spread + 1 才能还原相应效果
          shadowObject.spread += parseFloat(borderWidth);
        }
        style.addInnerShadow(shadowObject);
      } else {
        style.addShadow(shadowObject);
      }
    });
  }
  const {
    borderColor
  } = styles;

  // 判断是否包含多种描边颜色
  const hasMultiColor = Array.from(borderColor.matchAll(/rgb/g)).length > 1;
  // 处理描边
  if (borderWidth.indexOf(' ') === -1 && !hasMultiColor) {
    const {
      borderBottomStyle,
      borderLeftStyle,
      borderTopStyle,
      borderRightStyle
    } = styles;
    style.addBorder({
      color: borderColor,
      thickness: parseFloat(borderWidth)
    });

    // 如果是虚线
    const isDashed = borderBottomStyle === 'dashed' && borderLeftStyle === 'dashed' && borderTopStyle === 'dashed' && borderRightStyle === 'dashed';
    if (isDashed) {
      style.setBorderDashed({
        dash: 3 * parseFloat(borderWidth),
        spacing: 3 * parseFloat(borderWidth)
      });
    }
    // 如果是点
    const isDotted = borderBottomStyle === 'dotted' && borderLeftStyle === 'dotted' && borderTopStyle === 'dotted' && borderRightStyle === 'dotted';
    if (isDotted) {
      style.setBorderDashed({
        dash: parseFloat(borderWidth),
        spacing: parseFloat(borderWidth)
      });
    }
  } else {
    // 使用内阴影来模拟单边描边
    const {
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth
    } = styles;
    // 顶部描边
    const borderTopWidthFloat = parseFloat(borderTopWidth);
    if (borderTopWidthFloat !== 0) {
      style.addInnerShadow({
        color: styles.borderTopColor,
        offsetY: borderTopWidthFloat
      });
    }

    // 右侧描边
    const borderRightWidthFloat = parseFloat(borderRightWidth);
    if (borderRightWidthFloat !== 0) {
      style.addInnerShadow({
        color: styles.borderRightColor,
        offsetX: -borderRightWidthFloat
      });
    }

    // 底部描边
    const borderBottomWidthFloat = parseFloat(borderBottomWidth);
    if (borderBottomWidthFloat !== 0) {
      style.addInnerShadow({
        color: styles.borderBottomColor,
        offsetY: -borderBottomWidthFloat
      });
    }

    // 左侧描边
    const borderLeftWidthFloat = parseFloat(borderLeftWidth);
    if (borderLeftWidthFloat !== 0) {
      style.addInnerShadow({
        color: styles.borderLeftColor,
        offsetX: borderLeftWidthFloat
      });
    }
  }
  rect.style = style;

  // TODO borderRadius can be expressed in different formats and use various units -
  // for simplicity we assume "X%"

  rect.cornerRadius = {
    topLeft: _models.Style.parseBorderRadius(styles.borderTopLeftRadius, width, height),
    topRight: _models.Style.parseBorderRadius(styles.borderTopRightRadius, width, height),
    bottomLeft: _models.Style.parseBorderRadius(styles.borderBottomLeftRadius, width, height),
    bottomRight: _models.Style.parseBorderRadius(styles.borderBottomRightRadius, width, height)
  };

  // 解析背景填充
  const backgroundImageResult = (0, _background.parseBackgroundImageType)(styles.backgroundImage);
  if (backgroundImageResult) {
    switch (backgroundImageResult.type) {
      // Image 类型的背景填充
      case 'Image':
        {
          let url = backgroundImageResult.value;

          // 没有带协议头的话
          if (url.startsWith('//')) {
            url = (location.protocol ? location.protocol : 'https') + url;
          }

          // 获取实际的图片尺寸
          const img = new Image();
          img.src = url;
          await (0, _image.waitForImageLoaded)(img); // 加载下这个图片来获取真实图片尺寸

          const actualImgSize = (0, _background.getActualImageSize)(styles.backgroundSize, {
            width: img.width,
            height: img.height
          }, {
            width,
            height
          });

          ///  获取图片真实坐标  ///

          const getPositionNum = (position, type) => {
            // 解析百分比值
            // 这个百分比应该是图片中心的百分比值
            if (position.endsWith('%')) {
              const {
                width: aW,
                height: aH
              } = actualImgSize;
              const unit = type === 'x' ? width : height;
              const size = type === 'x' ? aW : aH;
              if (unit * parseFloat(position) !== 0) {
                return unit * parseFloat(position) / 100 - size / 2;
              }
              return unit * parseFloat(position);
            }
            // 解析实际值
            return parseFloat(position);
          };
          const bitmapX = getPositionNum(styles.backgroundPositionX, 'x');
          const bitmapY = getPositionNum(styles.backgroundPositionY, 'y');

          /// 针对 svg 类型的 background 进行解析 ///
          let isSvgBackground = false;
          let svg;

          // 外联型 svg
          if (url.startsWith('http') && url.endsWith('svg')) {
            svg = await (0, _svg2.parseURLToSvg)(url, new _models.Frame({
              x: rect.x,
              y: rect.y,
              width,
              height
            }));
            isSvgBackground = true;
          }

          // 内联型 svg
          if (url.startsWith('data:image')) {
            // 如果是 svg类型的 data image
            const rawString = (0, _image.base64ToSvgString)(url);
            if (rawString) {
              const svgString = await (0, _svg.StrToRenderSVG)(rawString, {
                width,
                height
              });
              svg = new _models.Svg({
                svgString,
                x: rect.x,
                y: rect.y,
                height,
                width
              });
              svg.mapBasicInfo(node);
              isSvgBackground = true;
            }
          }

          // 如果是 Svg 图像
          // 直接采用Svg + background 的方式
          if (isSvgBackground && svg) {
            try {
              svg.mapBasicInfo(node);
              const group = new _models.Group({
                x: left,
                y: top,
                width,
                height
              });
              group.name = '编组';
              group.addLayer(rect); // 变成相对坐标
              group.addLayer(svg); // 保留自身的位置

              return group;
            } catch (e) {
              console.warn(e);
              return rect;
            }
          }

          /// 如果不是 Svg 则是图片填充 ///

          // 背景图片与填充的比例一致
          // 可以直接使用 Svg 或 Image
          // 则不用 background-fill
          if (bitmapX === 0 && bitmapY === 0 && actualImgSize.width / actualImgSize.height === width / height) {
            await style.addImageFill(url);
          } else {
            // use a Group(Shape + Bitmap) to correctly represent
            // clipping of the background image
            const image = new _models.Bitmap({
              url,
              x: bitmapX,
              y: bitmapY,
              width: actualImgSize.width,
              height: actualImgSize.height
            });
            await image.init();
            image.name = '背景图片';
            rect.hasClippingMask = true;
            const group = new _models.Group({
              x: left,
              y: top,
              width,
              height
            });
            rect.name = 'Mask';
            group.name = '编组';
            group.addLayer(rect); // 变成相对坐标

            group.layers.push(image); // 保留自身的位置

            return group;
          }
          break;
        }

      // 线性渐变类型的背景填充
      case 'LinearGradient':
        // eslint-disable-next-line no-case-declarations
        const {
          angle,
          stops
        } = backgroundImageResult.value;
        style.addGradientFill(angle, stops);
        break;
      default:
        // 暂不支持:
        // - TODO radial gradient
        // - multiple background-image
        break;
    }
  }

  // If clip-path in style, should return a group with mask
  if (styles.clipPath !== 'none') {
    const mask = (0, _clipPath.createClipPathMask)(styles.clipPath);
    if (mask) {
      const group = new _models.Group({
        x: left,
        y: top,
        width,
        height
      });
      group.name = '剪切蒙版组';
      group.layers.push(mask);
      group.addLayer(rect);
      return group;
    }
  }
  return rect;
};
exports.parseToShape = parseToShape;