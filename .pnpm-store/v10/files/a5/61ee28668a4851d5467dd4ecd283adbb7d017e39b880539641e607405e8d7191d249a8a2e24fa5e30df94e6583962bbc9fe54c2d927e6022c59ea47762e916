import { SerializedStyles } from './css';
export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm'
/**
 * 最小断点，可以作为移动端的判断断点
 */
 | 'xs';
export type DeviceScreen = 'mobile' | 'tablet' | 'laptop' | 'desktop';
export type ResponsiveKey = Breakpoint | DeviceScreen;
export interface ResponsiveMap extends Record<ResponsiveKey, SerializedStyles> {
}
