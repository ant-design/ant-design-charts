/**
 * Create DOM from a html string.
 * @param str
 * @returns
 */
export function createDOM(str: string): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = str;

  const dom = container.childNodes[0];
  if (dom && container.contains(dom)) {
    container.removeChild(dom);
  }
  return dom as HTMLElement;
}
