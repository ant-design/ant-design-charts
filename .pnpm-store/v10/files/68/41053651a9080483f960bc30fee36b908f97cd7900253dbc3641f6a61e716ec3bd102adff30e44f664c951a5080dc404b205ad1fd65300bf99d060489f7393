import type { PathArray } from '@antv/util';
import { PathStyleProps } from '@antv/g';
import { ShapeComponent as SC, WithPrefix } from '../../runtime';
export type ConnectorOptions = ConnectorPathStyleProps & Record<string, any>;
type MarkerStyleProps<P extends string> = WithPrefix<Record<string, any>, P>;
type ConnectorPathStyleProps = Omit<PathStyleProps, 'path'> & MarkerStyleProps<'endMarker'> & {
    connectorPath?: PathArray[];
    endMarker?: boolean;
};
export declare const Connector: SC<ConnectorOptions>;
export {};
