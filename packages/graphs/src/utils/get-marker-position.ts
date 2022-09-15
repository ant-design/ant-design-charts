export const getMarkerPosition = (direction: string = 'right', size: number[]) => {
  const [width, height] = size;
  let x = 0;
  let y = 0;
  switch (direction) {
    case 'top':
      x = width / 2;
      y = 0;
      break;
    case 'right':
      x = width;
      y = height / 2;
      break;
    case 'bottom':
      x = width / 2;
      y = height;
      break;
    case 'left':
      x = 0;
      y = height / 2;
      break;
  }

  return { x, y };
};
