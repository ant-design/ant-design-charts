export const popupCenter = ({
  url,
  title,
  w,
  h,
}: {
  url: string;
  title: string;
  w: number;
  h: number;
}) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth;

  // 修正计算 left 和 top，使窗口能够居中
  const left = (width - w / systemZoom) / 2 + dualScreenLeft;
  const top = (height - h / systemZoom) / 2 + dualScreenTop;

  const newWindow = window.open(
    url,
    title,
    `
      scrollbars=none,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
    `,
  );
  if (newWindow && newWindow.focus) {
    newWindow.focus();
  }

  return newWindow;
};
