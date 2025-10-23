import type { GenericAnimation } from '../../animation';
import type { ComponentOptions } from '../../core';
import type { PathStyleProps, RectStyleProps, TextStyleProps } from '../../shapes';
import type { PrefixObject } from '../../types';

export type NavigatorStyleProps = Omit<RectStyleProps, 'width' | 'height'> &
  PrefixObject<PathStyleProps & { size?: number }, 'button'> &
  PrefixObject<TextStyleProps, 'pageNum'> & {
    x?: number;
    y?: number;
    animate?: GenericAnimation;
    /** padding between buttons and page number  */
    controllerPadding?: number;
    /** spacing between controller and page content */
    controllerSpacing?: number;
    formatter?: (curr: number, total: number) => string;
    defaultPage?: number;
    loop?: boolean;
    orientation?: 'horizontal' | 'vertical';
    /** once pageWidth is not provided, it will be set to bbox shape */
    pageWidth?: number;
    /** infer to pageWidth */
    pageHeight?: number;
  };

export type NavigatorOptions = ComponentOptions<NavigatorStyleProps>;
