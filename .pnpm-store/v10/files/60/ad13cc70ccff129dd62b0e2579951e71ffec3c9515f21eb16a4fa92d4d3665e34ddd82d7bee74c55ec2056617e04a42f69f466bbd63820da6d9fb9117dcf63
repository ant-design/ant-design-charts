import { Root } from './type';

export class RootWindow extends Root {
  get outerHeight() {
    return window.innerHeight;
  }

  get scrollTop() {
    return document.documentElement.scrollTop;
  }

  get scrollHeight() {
    return document.documentElement.scrollHeight;
  }

  isScrolledToBottom() {
    return this.scrollTop + this.outerHeight >= this.scrollHeight;
  }

  registerScrollEvent(callback: () => void) {
    document.addEventListener('scroll', callback);
  }

  unregisterScrollEvent(callback: () => void) {
    document.removeEventListener('scroll', callback);
  }

  static create() {
    return new RootWindow();
  }
}
