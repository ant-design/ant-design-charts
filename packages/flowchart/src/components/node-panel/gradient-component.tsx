import React from 'react';
import { getGradientColor } from './util';
interface IProps {
  startColor: string;
  endColor: string;
  randomId: string;
}
export const GradientComponent = ({ startColor, endColor, randomId }: IProps) => {
  startColor = getGradientColor(startColor);
  endColor = getGradientColor(endColor);
  return (
    <>
      <linearGradient id={`top-bottom-${randomId}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={startColor}></stop>
        <stop offset="100%" stopColor={endColor}></stop>
      </linearGradient>
      <linearGradient id={`bottom-top-${randomId}`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor={startColor}></stop>
        <stop offset="100%" stopColor={endColor}></stop>
      </linearGradient>
      <linearGradient id={`left-right-${randomId}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={startColor}></stop>
        <stop offset="100%" stopColor={endColor}></stop>
      </linearGradient>
      <linearGradient id={`right-left-${randomId}`} x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor={startColor}></stop>
        <stop offset="100%" stopColor={endColor}></stop>
      </linearGradient>
      <radialGradient id={`radial-${randomId}`} cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor={startColor}></stop>
        <stop offset="100%" stopColor={endColor}></stop>
      </radialGradient>
    </>
  );
};
