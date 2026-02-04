var raf = function raf(fn) {
  return +setTimeout(fn, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined') {
  raf = requestAnimationFrame;
  caf = cancelAnimationFrame;
}

export default function wrapperRaf(callback) {
  return raf(callback);
}
wrapperRaf.cancel = caf;