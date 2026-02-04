import * as React from 'react';
import { FormatRelativeTimeOptions } from '@formatjs/intl';
export interface Props extends FormatRelativeTimeOptions {
    value?: number;
    unit?: Intl.RelativeTimeFormatUnit;
    updateIntervalInSeconds?: number;
    children?(value: string): React.ReactElement | null;
}
declare const FormattedRelativeTime: React.FC<Props>;
export default FormattedRelativeTime;
