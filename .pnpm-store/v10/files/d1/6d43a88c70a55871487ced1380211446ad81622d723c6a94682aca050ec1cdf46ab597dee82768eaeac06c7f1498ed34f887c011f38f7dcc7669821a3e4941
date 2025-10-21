abstract class ReadingProgressCore {
  abstract get rootSelector():
    | (Window & typeof globalThis)
    | HTMLElement
    | null;

  abstract getProgress: () => number;
  abstract getViewportHeight: () => number;
}

class ReadingProgressWindow extends ReadingProgressCore {
  get rootSelector() {
    return window;
  }

  private measureWrapperHeight = () => {
    const targetElHeihgt = document.body.getBoundingClientRect().height || 0;

    return Math.round(targetElHeihgt - this.getViewportHeight());
  };

  getViewportHeight = () => {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  };

  getProgress = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    return Math.round((top / this.measureWrapperHeight()) * 100);
  };
}

class ReadingProgressElement extends ReadingProgressCore {
  rootEl: HTMLElement | null;
  targetEl: HTMLElement | null;
  constructor({ rootEl, targetEl }: { rootEl: string; targetEl: string }) {
    super();
    this.rootEl = document.querySelector(rootEl);
    this.targetEl = document.querySelector(targetEl);
  }

  get rootSelector() {
    return this.rootEl;
  }

  private measureWrapperHeight = () => {
    const targetElHeight = this.targetEl?.getBoundingClientRect().height || 0;

    return Math.round(targetElHeight - this.getViewportHeight());
  };

  getViewportHeight = () => {
    return this.rootEl?.clientHeight || 0;
  };

  getProgress = () => {
    const top = this.rootEl?.scrollTop || 0;

    return Math.round((top / this.measureWrapperHeight()) * 100);
  };
}

export class ReadingProgress {
  private rp: ReadingProgressCore;

  constructor({ rootEl, targetEl }: { rootEl?: string; targetEl?: string }) {
    this.rp =
      typeof rootEl === 'string' && typeof targetEl === 'string'
        ? new ReadingProgressElement({ rootEl, targetEl })
        : new ReadingProgressWindow();
  }

  get rootSelector() {
    return this.rp.rootSelector;
  }

  getViewportHeight = () => {
    return this.rp.getViewportHeight();
  };

  getProgress = () => {
    return this.rp.getProgress();
  };
}
