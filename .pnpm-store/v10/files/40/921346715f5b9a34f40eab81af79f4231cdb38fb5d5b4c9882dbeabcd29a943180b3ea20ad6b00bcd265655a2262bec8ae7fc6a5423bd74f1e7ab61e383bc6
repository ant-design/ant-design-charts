export default function cancelAnimationFrame(handler: number) {
  const method =
    window.cancelAnimationFrame ||
    // @ts-ignore
    window.webkitCancelAnimationFrame ||
    // @ts-ignore
    window.mozCancelAnimationFrame ||
    // @ts-ignore
    window.msCancelAnimationFrame ||
    clearTimeout;

  method(handler);
}
