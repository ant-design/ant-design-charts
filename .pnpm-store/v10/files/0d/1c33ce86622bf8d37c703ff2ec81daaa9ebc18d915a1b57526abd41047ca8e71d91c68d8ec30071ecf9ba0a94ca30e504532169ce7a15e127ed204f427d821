import type { DisplayObject } from '../../../shapes';
import { AxisStyleProps, RotateOverlapCfg } from '../types';
import { boundTest } from '../utils/test';

export type Utils = {
  rotate: (label: DisplayObject, rotate: number | string) => void;
};

type RotateType = Parameters<Utils['rotate']>[1];

export default function rotateLabels(
  labels: DisplayObject[],
  overlapCfg: RotateOverlapCfg,
  attr: AxisStyleProps,
  utils: Utils
) {
  const { optionalAngles = [0, 45, 90], margin, recoverWhenFailed = true } = overlapCfg;

  const defaultAngles = labels.map((label) => label.getLocalEulerAngles());

  const runAndPassed = () => boundTest(labels, attr, margin).length < 1;

  const setLabelsRotate = (angle: RotateType | RotateType[]) =>
    labels.forEach((label, index) => {
      const rotate = Array.isArray(angle) ? angle[index] : angle;
      utils.rotate(label, +rotate);
    });

  for (const angle of optionalAngles) {
    setLabelsRotate(angle);
    if (runAndPassed()) return;
  }

  if (recoverWhenFailed) {
    setLabelsRotate(defaultAngles);
  }
}
