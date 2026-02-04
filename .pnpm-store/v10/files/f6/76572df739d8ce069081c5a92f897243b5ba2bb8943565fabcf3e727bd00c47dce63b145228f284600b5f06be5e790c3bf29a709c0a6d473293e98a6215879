import * as React from 'react';

type State = {
    inView: boolean;
    entry?: IntersectionObserverEntry;
};
/**
 ## Render props

 To use the `<InView>` component, you pass it a function. It will be called
 whenever the state changes, with the new value of `inView`. In addition to the
 `inView` prop, children also receive a `ref` that should be set on the
 containing DOM element. This is the element that the IntersectionObserver will
 monitor.

 If you need it, you can also access the
 [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
 on `entry`, giving you access to all the details about the current intersection
 state.

 ```jsx
 import { InView } from 'react-intersection-observer';

 const Component = () => (
 <InView>
 {({ inView, ref, entry }) => (
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    )}
 </InView>
 );

 export default Component;
 ```

 ## Plain children

 You can pass any element to the `<InView />`, and it will handle creating the
 wrapping DOM element. Add a handler to the `onChange` method, and control the
 state in your own component. Any extra props you add to `<InView>` will be
 passed to the HTML element, allowing you set the `className`, `style`, etc.

 ```jsx
 import { InView } from 'react-intersection-observer';

 const Component = () => (
 <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
 <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
 </InView>
 );

 export default Component;
 ```
 */
declare class InView extends React.Component<IntersectionObserverProps | PlainChildrenProps, State> {
    node: Element | null;
    _unobserveCb: (() => void) | null;
    constructor(props: IntersectionObserverProps | PlainChildrenProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IntersectionObserverProps): void;
    componentWillUnmount(): void;
    observeNode(): void;
    unobserve(): void;
    handleNode: (node?: Element | null) => void;
    handleChange: (inView: boolean, entry: IntersectionObserverEntry) => void;
    render(): React.ReactNode;
}

/**
 * React Hooks make it easy to monitor the `inView` state of your components. Call
 * the `useInView` hook with the (optional) [options](#options) you need. It will
 * return an array containing a `ref`, the `inView` status and the current
 * [`entry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).
 * Assign the `ref` to the DOM element you want to monitor, and the hook will
 * report the status.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import { useInView } from 'react-intersection-observer';
 *
 * const Component = () => {
 *   const { ref, inView, entry } = useInView({
 *       threshold: 0,
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       <h2>{`Header inside viewport ${inView}.`}</h2>
 *     </div>
 *   );
 * };
 * ```
 */
declare function useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange, }?: IntersectionOptions): InViewHookResponse;

/**
 * What should be the default behavior if the IntersectionObserver is unsupported?
 * Ideally the polyfill has been loaded, you can have the following happen:
 * - `undefined`: Throw an error
 * - `true` or `false`: Set the `inView` value to this regardless of intersection state
 * **/
declare function defaultFallbackInView(inView: boolean | undefined): void;
/**
 * @param element - DOM Element to observe
 * @param callback - Callback function to trigger when intersection status changes
 * @param options - Intersection Observer options
 * @param fallbackInView - Fallback inView value.
 * @return Function - Cleanup function that should be triggered to unregister the observer
 */
declare function observe(element: Element, callback: ObserverInstanceCallback, options?: IntersectionObserverInit, fallbackInView?: boolean | undefined): () => void;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type ObserverInstanceCallback = (inView: boolean, entry: IntersectionObserverEntry) => void;
interface RenderProps {
    inView: boolean;
    entry: IntersectionObserverEntry | undefined;
    ref: React.RefObject<any> | ((node?: Element | null) => void);
}
interface IntersectionOptions extends IntersectionObserverInit {
    /** The IntersectionObserver interface's read-only `root` property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. If the `root` is null, then the bounds of the actual document viewport are used.*/
    root?: Element | Document | null;
    /** Margin around the root. Can have values similar to the CSS margin property, e.g. `10px 20px 30px 40px` (top, right, bottom, left). */
    rootMargin?: string;
    /** Number between `0` and `1` indicating the percentage that should be visible before triggering. Can also be an `array` of numbers, to create multiple trigger points. */
    threshold?: number | number[];
    /** Only trigger the inView callback once */
    triggerOnce?: boolean;
    /** Skip assigning the observer to the `ref` */
    skip?: boolean;
    /** Set the initial value of the `inView` boolean. This can be used if you expect the element to be in the viewport to start with, and you want to trigger something when it leaves. */
    initialInView?: boolean;
    /** Fallback to this inView state if the IntersectionObserver is unsupported, and a polyfill wasn't loaded */
    fallbackInView?: boolean;
    /** IntersectionObserver v2 - Track the actual visibility of the element */
    trackVisibility?: boolean;
    /** IntersectionObserver v2 - Set a minimum delay between notifications */
    delay?: number;
    /** Call this function whenever the in view state changes */
    onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
}
interface IntersectionObserverProps extends IntersectionOptions {
    /**
     * Children expects a function that receives an object
     * contain an `inView` boolean and `ref` that should be
     * assigned to the element root.
     */
    children: (fields: RenderProps) => React.ReactNode;
}
/**
 * Types specific to the PlainChildren rendering of InView
 * */
type PlainChildrenProps = IntersectionOptions & {
    children?: React.ReactNode;
    /**
     * Render the wrapping element as this element.
     * This needs to be an intrinsic element.
     * If you want to use a custom element, please use the useInView
     * hook to manage the ref explicitly.
     * @default `'div'`
     */
    as?: React.ElementType;
    /** Call this function whenever the in view state changes */
    onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
} & Omit<React.HTMLProps<HTMLElement>, "onChange">;
/**
 * The Hook response supports both array and object destructing
 */
type InViewHookResponse = [
    (node?: Element | null) => void,
    boolean,
    IntersectionObserverEntry | undefined
] & {
    ref: (node?: Element | null) => void;
    inView: boolean;
    entry?: IntersectionObserverEntry;
};

export { InView, type InViewHookResponse, type IntersectionObserverProps, type IntersectionOptions, type ObserverInstanceCallback, type PlainChildrenProps, defaultFallbackInView, observe, useInView };
