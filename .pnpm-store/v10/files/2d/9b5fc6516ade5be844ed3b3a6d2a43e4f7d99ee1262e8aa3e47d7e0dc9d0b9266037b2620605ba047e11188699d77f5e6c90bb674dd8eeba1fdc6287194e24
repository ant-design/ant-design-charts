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

/**
 * 获得触发事件相对于页面 viewport 的坐标
 */
export function getEventViewportPos(e: any): [number, number] {
  const { nativeEvent, touches, clientX, clientY } = e;
  if (nativeEvent) {
    return [nativeEvent.clientX, nativeEvent.clientY];
  }
  if (touches) {
    const { clientX, clientY } = touches[0];
    return [clientX, clientY];
  }
  if (typeof clientX === 'number' && typeof clientY === 'number') return [clientX, clientY];
  return [0, 0];
}
