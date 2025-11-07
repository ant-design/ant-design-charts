import type { ButtonHTMLAttributes } from 'react';
import { ClassProp } from 'class-variance-authority/types';
import { JSX } from 'react/jsx-runtime';
import type { ReactNode } from 'react';
import type { UserMessage } from '@stagewise/agent-interface/toolbar';

export declare function Badge({ children, color, style, className }: BadgeProps): JSX.Element;

declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: ReactNode;
    className?: string;
}

declare const badgeVariants: (props?: {
    color?: "blue" | "green" | "red" | "yellow" | "purple" | "orange" | "pink";
    style?: "default" | "outline";
} & ClassProp) => string;

export declare function Button({ children, variant, size, glassy, asChild, className, ...props }: ButtonProps): JSX.Element;

declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
    glassy?: boolean;
}

declare type OmitUndefined<T> = T extends undefined ? never : T;

export declare function Panel({ children, alwaysFullHeight, className, }: {
    children?: ReactNode;
    alwaysFullHeight?: boolean;
    className?: string;
}): JSX.Element;

export declare function PanelContent({ children, className, ...props }: PanelContentProps): JSX.Element;

declare interface PanelContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export declare function PanelFooter({ children, className, }: {
    children?: ReactNode;
    className?: string;
}): JSX.Element;

export declare function PanelHeader({ title, description, iconArea, actionArea, className, }: {
    title?: string | ReactNode;
    description?: string | ReactNode;
    iconArea?: ReactNode;
    actionArea?: ReactNode;
    className?: string;
}): JSX.Element;

declare type PluginUserMessage = Omit<UserMessage, 'id' | 'createdAt' | 'sentByPlugin' | 'metadata' | 'pluginContent'>;

export declare interface ToolbarContext {
    sendPrompt: (prompt: PluginUserMessage) => void;
    mainAppWindow: Window;
}

export declare const useToolbar: () => ToolbarContext;

declare type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;

export { }
