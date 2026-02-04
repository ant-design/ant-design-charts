// Ordinary Least Squares from vega-statistics by Jeffrey Heer
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
// Source: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/packages/vega-statistics/src/regression/ols.js
export function ols(uX, uY, uXY, uX2) {
  const delta = uX2 - uX * uX,
        slope = Math.abs(delta) < 1e-24 ? 0 : (uXY - uX * uY) / delta,
        intercept = uY - slope * uX;

  return [intercept, slope];
}