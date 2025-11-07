export function stringToHTML(str: string): HTMLElement | undefined {
  const tempNode = document.createElement('div');
  tempNode.innerHTML = str;
  return tempNode.firstChild as HTMLElement;
}

export function parseHTML(element: string | HTMLElement): HTMLElement | undefined {
  if (typeof element === 'string') {
    return stringToHTML(element);
  }
  return element;
}
