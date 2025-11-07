export interface FlexItemConfig {
    /** default: 0 */
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
    flexDirection: 'row' | 'column';
    /** default: nowrap */
    flexWrap: 'nowrap';
    /** default: flex-start */
    justifyContent: 'flex-start' | 'flex-end' | 'center';
    /** default: stretch */
    alignItems: 'flex-start' | 'flex-end' | 'center';
    /** default: stretch */
    alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
}
export interface FlexElementConfig extends FlexItemConfig, FlexContainerConfig {
}
export interface FlexLayoutConfig extends Partial<FlexContainerConfig>, Partial<FlexItemConfig> {
    display: 'flex';
}
