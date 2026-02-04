export default function requestAnimationFrame(fn: FrameRequestCallback) {
  const method = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    // @ts-ignore
    window.mozRequestAnimationFrame ||
    // @ts-ignore
    window.msRequestAnimationFrame ||
    function(f) {
      return setTimeout(f, 16);
    };

  return method(fn);
};
