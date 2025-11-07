import * as React from 'react';
import { IconBaseProps } from './Icon';
export interface CustomIconOptions {
    scriptUrl?: string | string[];
    extraCommonProps?: {
        [key: string]: any;
    };
}
export interface IconFontProps<T extends string = string> extends IconBaseProps {
    type: T;
}
export default function create<T extends string = string>(options?: CustomIconOptions): React.FC<IconFontProps<T>>;
