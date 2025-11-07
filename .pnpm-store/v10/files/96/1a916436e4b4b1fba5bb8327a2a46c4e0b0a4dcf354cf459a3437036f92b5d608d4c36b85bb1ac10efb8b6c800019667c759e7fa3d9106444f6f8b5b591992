import { Root } from './type';

export class RootEl extends Root {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    super();
    this.el = el;
  }

  get top() {
    return this.el.getBoundingClientRect().top;
  }

  get outerHeight() {
    return this.el.getBoundingClientRect().height;
  }

  get scrollTop() {
    return this.el.scrollTop;
  }

  get scrollHeight() {
    return this.el.scrollHeight;
  }

  isScrolledToBottom() {
    return this.scrollTop + this.outerHeight >= this.scrollHeight;
  }

  registerScrollEvent(callback: () => void) {
    this.el.addEventListener('scroll', callback);
  }

  unregisterScrollEvent(callback: () => void) {
    this.el.removeEventListener('scroll', callback);
  }

  static create(selector: string) {
    const el = document.querySelector(selector);

    if (!el) {
      throw new Error('element is not found.');
    }
    return new RootEl(el as HTMLElement);
  }
}
