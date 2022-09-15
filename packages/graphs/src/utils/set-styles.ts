export const setStyles = (container: HTMLDivElement, style: React.CSSProperties = {}) => {
  const keys = Object.keys(style);
  keys.forEach((key: string) => {
    container.style[key] = style[key];
  });
};
