import { FC, ReactNode } from 'react';
import { ThemeAppearance, ThemeMode, UseTheme } from "../../types";
export interface ThemeSwitcherProps {
    /**
     * 应用的展示外观主题，只存在亮色和暗色两种
     * @default light
     */
    appearance?: ThemeAppearance;
    defaultAppearance?: ThemeAppearance;
    onAppearanceChange?: (appearance: ThemeAppearance) => void;
    /**
     * 主题的展示模式，有三种配置：跟随系统、亮色、暗色
     * 默认不开启自动模式，需要手动进行配置
     * @default light
     */
    themeMode?: ThemeMode;
    defaultThemeMode?: ThemeMode;
    onThemeModeChange?: (themeMode: ThemeMode) => void;
    children: ReactNode;
    useTheme: UseTheme;
}
declare const ThemeSwitcher: FC<ThemeSwitcherProps>;
export default ThemeSwitcher;
