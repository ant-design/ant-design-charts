const setStyle = (container: HTMLElement, style?: React.CSSProperties) => {
  for (let k in style) {
    if (style.hasOwnProperty(k)) {
      container.style[k] = style[k];
    }
  }
};

export const CreateAttachContainer = (
  parentContainer: HTMLElement,
  containerId: string,
  style?: React.CSSProperties,
) => {
  const div = document.createElement('div');
  div.id = containerId;
  setStyle(div, style);
  parentContainer.parentNode?.appendChild(div);
};
