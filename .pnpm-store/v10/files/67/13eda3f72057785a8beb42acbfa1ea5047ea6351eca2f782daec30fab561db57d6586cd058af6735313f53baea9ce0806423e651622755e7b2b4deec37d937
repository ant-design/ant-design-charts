/**
 * 获得触发事件的坐标
 */
export function getEventPos(e: any): [number, number] {
  const { canvas, touches, offsetX, offsetY } = e;
  if (canvas) {
    const { x, y } = canvas;
    return [x, y];
  }
  if (touches) {
    const { clientX, clientY } = touches[0];
    return [clientX, clientY];
  }
  if (offsetX && offsetY) return [offsetX, offsetY];
  return [0, 0];
}
