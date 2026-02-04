import { Text } from '../shapes';
import { applyToText } from './text';

export function ellipsisIt(node: Text, w: number, suffix = '...') {
  applyToText(node, { wordWrap: true, wordWrapWidth: w, maxLines: 1, textOverflow: suffix });
}
