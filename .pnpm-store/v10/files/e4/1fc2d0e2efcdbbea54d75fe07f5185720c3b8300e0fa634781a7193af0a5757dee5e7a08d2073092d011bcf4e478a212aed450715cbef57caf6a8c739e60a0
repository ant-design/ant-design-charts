import type { BackgroundImageType } from '../types';
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
export declare const parseLinearGradient: (value: string) => {
    angle: string;
    stops: string[];
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
export declare const parseBackgroundImageType: (value: string) => BackgroundImageType | void;
/**
 * 获取真实图像尺寸
 * @param {string} backgroundSize value of background-size CSS property
 * @param {{width: number, height: number}} imageSize natural size of the image
 * @param {{width: number, height: number}} containerSize size of the container
 * @return {{width: number, height: number}} actual image size
 */
export declare const getActualImageSize: (backgroundSize: string, imageSize: {
    width: number;
    height: number;
}, containerSize: {
    width: any;
    height: any;
}) => {
    width: number;
    height: number;
};
