import { CustomElement, Group } from '../shapes';
import type { GenericAnimation, AnimationResult } from '../animation';
import { createOffscreenGroup, deepAssign, visibility } from '../util';
import type { ComponentOptions } from './types';

function applyVisibility() {
  visibility(this, this.attributes.visibility !== 'hidden');
}

export abstract class Component<T extends Record<string, any>> extends CustomElement<Required<T>> {
  protected _defaultOptions: Partial<T>;

  private _offscreen!: Group;

  protected get offscreenGroup() {
    if (!this._offscreen) this._offscreen = createOffscreenGroup(this);
    return this._offscreen;
  }

  public initialized = false;

  public get defaultOptions() {
    return this._defaultOptions;
  }

  constructor(options: ComponentOptions<Partial<T>>, defaultStyleProps: Partial<T> = {}) {
    super(deepAssign({}, { style: defaultStyleProps }, options));
    this._defaultOptions = defaultStyleProps;
  }

  connectedCallback() {
    this.render(this.attributes as Required<T>, this);
    this.bindEvents(this.attributes, this);
    this.initialized = true;
  }

  disconnectedCallback(): void {
    this._offscreen?.destroy();
  }

  attributeChangedCallback<Key extends keyof T>(name: Key): void {
    if (name === 'visibility') {
      applyVisibility.call(this);
    }
  }

  public update(attr?: Partial<T>, animate?: GenericAnimation) {
    this.attr(deepAssign({}, this.attributes, attr || {}));
    return this.render?.(this.attributes as Required<T>, this, animate);
  }

  public clear() {
    this.removeChildren();
  }

  public abstract render(
    attributes: Required<T>,
    container: Group,
    animate?: GenericAnimation
  ): void | AnimationResult[];

  public bindEvents(attributes: T, container: Group): void {}

  protected getSubShapeStyle(attributes: T): T {
    const { x, y, transform, transformOrigin, class: _class, className, zIndex, ...style } = attributes;
    return style as T;
  }
}
