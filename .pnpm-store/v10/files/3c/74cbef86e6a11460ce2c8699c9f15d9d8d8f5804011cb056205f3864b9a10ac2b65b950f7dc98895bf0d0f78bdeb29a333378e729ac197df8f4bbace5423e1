export interface FlexItemConfig {
  /** default: 0 */
  // order?: number;
  /** default: 0 */
  flexGrow: number;
  /** default: 1 */
  flexShrink: number;
  /** default: auto */
  flexBasis: number | 'auto';
  /** default: auto */
  alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export interface FlexContainerConfig {
  /** default: row */
  flexDirection: 'row' | 'column'; // | 'row-reverse' | 'column-reverse';
  /** default: nowrap */
  flexWrap: 'nowrap'; // | 'wrap' | 'wrap-reverse';
  /** default: flex-start */
  justifyContent: 'flex-start' | 'flex-end' | 'center'; // | 'space-between' | 'space-around';
  /** default: stretch */
  alignItems: 'flex-start' | 'flex-end' | 'center'; // | 'baseline' | 'stretch';
  /** default: stretch */
  alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
}

export interface FlexElementConfig extends FlexItemConfig, FlexContainerConfig {}

export interface FlexLayoutConfig extends Partial<FlexContainerConfig>, Partial<FlexItemConfig> {
  display: 'flex';
}
