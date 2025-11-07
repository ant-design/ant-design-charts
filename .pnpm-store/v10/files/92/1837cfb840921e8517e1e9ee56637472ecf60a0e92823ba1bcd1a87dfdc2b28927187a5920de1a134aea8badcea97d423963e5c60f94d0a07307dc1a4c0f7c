import { FormatDateTimeRangeOptions } from '@formatjs/intl';
import * as React from 'react';
interface Props extends FormatDateTimeRangeOptions {
    from: Parameters<Intl.DateTimeFormat['formatRange']>[0];
    to: Parameters<Intl.DateTimeFormat['formatRange']>[1];
    children?(value: React.ReactNode): React.ReactElement | null;
}
declare const FormattedDateTimeRange: React.FC<Props>;
export default FormattedDateTimeRange;
