/**
 * Modify the CSS of a DOM.
 * @param dom
 * @param css
 * @returns
 */
export function modifyCSS(dom: HTMLElement | null | undefined, css: { [key: string]: any }): HTMLElement {
  if (!dom) return;

  Object.keys(css).forEach((key) => {
    dom.style[key] = css[key];
  });
  return dom;
}
