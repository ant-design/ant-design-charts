import { CustomElement, Group } from '../shapes';
import type { GenericAnimation, AnimationResult } from '../animation';
import type { ComponentOptions } from './types';
export declare abstract class Component<T extends Record<string, any>> extends CustomElement<Required<T>> {
    protected _defaultOptions: Partial<T>;
    private _offscreen;
    protected get offscreenGroup(): Group;
    initialized: boolean;
    get defaultOptions(): Partial<T>;
    constructor(options: ComponentOptions<Partial<T>>, defaultStyleProps?: Partial<T>);
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback<Key extends keyof T>(name: Key): void;
    update(attr?: Partial<T>, animate?: GenericAnimation): void | AnimationResult[];
    clear(): void;
    abstract render(attributes: Required<T>, container: Group, animate?: GenericAnimation): void | AnimationResult[];
    bindEvents(attributes: T, container: Group): void;
    protected getSubShapeStyle(attributes: T): T;
}
