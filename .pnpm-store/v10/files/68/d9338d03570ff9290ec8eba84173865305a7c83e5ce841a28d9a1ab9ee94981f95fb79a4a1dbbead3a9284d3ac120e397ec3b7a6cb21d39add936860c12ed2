import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RootEl } from './RootEl';
import { RootWindow } from './RootWindow';
import { RootFactory } from './RootFactory';

export const useScrollspy = ({
  sectionRefs,
  rootSelector,
  offset = 0,
}: {
  sectionRefs: RefObject<Element>[];
  rootSelector?: string;
  offset?: number;
}) => {
  const rootEl = useRef<RootWindow | RootEl | null>(null);

  useEffect(() => {
    rootEl.current = RootFactory.create(rootSelector);
  }, [rootSelector]);

  const isScrolledToBottom = useCallback(() => {
    if (!rootEl.current) {
      return false;
    }
    return rootEl.current.isScrolledToBottom();
  }, [rootEl]);

  const isElementInViewport = useCallback(
    (element: Element) => {
      if (!rootEl.current) {
        return false;
      }
      const innerScrollTop = rootEl.current.scrollTop;
      const innerScrollBottom = innerScrollTop + rootEl.current.outerHeight;
      const elementRect = element.getBoundingClientRect();
      const elementScrollTop =
        rootEl.current instanceof RootEl
          ? innerScrollTop + elementRect.top - rootEl.current.top + offset
          : innerScrollTop + elementRect.top + offset;
      const elementScrollBottom = elementScrollTop + elementRect.height;

      return [
        elementScrollTop < innerScrollBottom,
        elementScrollBottom > innerScrollTop,
      ].every(v => v);
    },
    [rootEl, offset]
  );

  const getElementsStatusInViewport = useCallback(() => {
    return sectionRefs.map(sectionRef => {
      if (sectionRef.current) {
        return isElementInViewport(sectionRef.current);
      }
      return false;
    });
  }, [isElementInViewport, sectionRefs]);

  const [elementsStatusInViewport, updateElementsStatusInViewport] = useState<
    boolean[]
  >([]);

  const currentElementIndexInViewport = useMemo(
    () => elementsStatusInViewport.findIndex(status => status),
    [elementsStatusInViewport]
  );

  const spy = useCallback(() => {
    const newElementsStatusInViewport = isScrolledToBottom()
      ? [...new Array(sectionRefs.length - 1).fill(false).map(v => v), true]
      : getElementsStatusInViewport();
    updateElementsStatusInViewport(newElementsStatusInViewport);
  }, [getElementsStatusInViewport, isScrolledToBottom, sectionRefs]);

  useEffect(() => {
    spy();
    if (rootEl.current) {
      rootEl.current.registerScrollEvent(spy);
    }

    return () => {
      if (rootEl.current) {
        rootEl.current.unregisterScrollEvent(spy);
      }
    };
  }, [spy]);

  return {
    elementsStatusInViewport,
    currentElementIndexInViewport,
  };
};
