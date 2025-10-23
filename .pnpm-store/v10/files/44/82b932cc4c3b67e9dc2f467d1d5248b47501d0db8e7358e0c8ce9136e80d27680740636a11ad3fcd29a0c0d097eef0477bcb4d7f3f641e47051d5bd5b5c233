import type { FormatXMLElementFn, Options as IntlMessageFormatOptions, PrimitiveType } from 'intl-messageformat';
import * as React from 'react';
import { MessageDescriptor } from '@formatjs/intl';
export interface Props<V extends Record<string, any> = Record<string, React.ReactNode | PrimitiveType | FormatXMLElementFn<React.ReactNode>>> extends MessageDescriptor {
    values?: V;
    tagName?: React.ElementType<any>;
    children?(nodes: React.ReactNode[]): React.ReactNode | null;
    ignoreTag?: IntlMessageFormatOptions['ignoreTag'];
}
declare const MemoizedFormattedMessage: React.ComponentType<Props>;
export default MemoizedFormattedMessage;
