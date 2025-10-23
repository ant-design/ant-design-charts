export const replaceChildren = (el: HTMLElement, content: string | HTMLElement | HTMLElement[]) => {
  if (content == null) {
    el.innerHTML = '';
    return;
  }
  if (el.replaceChildren) {
    if (Array.isArray(content)) {
      el.replaceChildren(...content);
    } else {
      el.replaceChildren(content);
    }
  } else {
    el.innerHTML = '';
    if (Array.isArray(content)) {
      content.forEach((child) => el.appendChild(child));
    } else {
      el.appendChild(content as HTMLElement);
    }
  }
};
