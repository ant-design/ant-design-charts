import type { LayoutExecuter } from '../types';
import { getItemsBBox } from '../utils';
import type { FlexLayoutConfig } from './types';
import { BBox } from '../../bbox';

export const flex: LayoutExecuter<FlexLayoutConfig> = function (container, children, config) {
  const { width, height } = container;
  const {
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    alignContent = 'flex-start',
    alignItems = 'flex-start',
  } = config;

  const isHorizontalFlow = flexDirection === 'row'; // || flexDirection === 'row-reverse';
  const isLeftToRightFlow = flexDirection === 'row' || flexDirection === 'column';

  // implement default layout;
  // flex direction
  const direction = isHorizontalFlow ? (isLeftToRightFlow ? [1, 0] : [-1, 0]) : isLeftToRightFlow ? [0, 1] : [0, -1];

  let [offsetX, offsetY] = [0, 0];
  const itemsFromDirection = children.map((child) => {
    const { width, height } = child;
    const [x, y] = [offsetX, offsetY];
    [offsetX, offsetY] = [offsetX + width * direction[0], offsetY + height * direction[1]];
    return new BBox(x, y, width, height);
  });

  // flex wrap
  // todo

  // justify content
  // flex-start, flex-end, center
  const itemsForJustifyContentBBox = getItemsBBox(itemsFromDirection);
  const justifyContentOffset = {
    'flex-start': 0,
    'flex-end': isHorizontalFlow
      ? width - itemsForJustifyContentBBox.width
      : height - itemsForJustifyContentBBox.height,
    center: isHorizontalFlow
      ? (width - itemsForJustifyContentBBox.width) / 2
      : (height - itemsForJustifyContentBBox.height) / 2,
  };
  const itemsFromJustifyContent = itemsFromDirection.map((item) => {
    const { x, y } = item;
    const itemBox = BBox.fromRect(item);
    itemBox.x = isHorizontalFlow ? x + justifyContentOffset[justifyContent] : x;
    itemBox.y = isHorizontalFlow ? y : y + justifyContentOffset[justifyContent];
    return itemBox;
  });

  // align items
  // flex-start, flex-end, center
  const itemsForAlignItemsBBox = getItemsBBox(itemsFromJustifyContent);

  const calcAlignItemsOffset = (box: DOMRect) => {
    const [key, size] = isHorizontalFlow ? ['height', height] : ['width', width];

    switch (alignItems) {
      case 'flex-start':
        return 0;
      case 'flex-end':
        return size - box[key as 'width' | 'height'];
      case 'center':
        return size / 2 - box[key as 'width' | 'height'] / 2;
      default:
        return 0;
    }
  };

  const itemsFromAlignItems = itemsFromJustifyContent.map((item) => {
    const { x, y } = item;
    const itemBox = BBox.fromRect(item);
    itemBox.x = isHorizontalFlow ? x : x + calcAlignItemsOffset(itemBox);
    itemBox.y = isHorizontalFlow ? y + calcAlignItemsOffset(itemBox) : y;
    return itemBox;
  });

  const finalItems = itemsFromAlignItems.map((item) => {
    const itemBox = BBox.fromRect(item);
    itemBox.x += container.x ?? 0;
    itemBox.y += container.y ?? 0;
    return itemBox;
  });

  return finalItems;
};
