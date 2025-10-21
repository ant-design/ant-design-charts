import { RootEl } from './RootEl';
import { RootWindow } from './RootWindow';

export class RootFactory {
  static create(selector?: string): RootEl | RootWindow {
    if (!selector) {
      return RootWindow.create();
    }
    return RootEl.create(selector);
  }
}
