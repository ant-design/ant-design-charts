import * as React from 'react';
declare type Padding<T> = T | {
    top?: T;
    right?: T;
    bottom?: T;
    left?: T;
};
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    value: string;
    onValueChange: (value: string) => void;
    highlight: (value: string) => string | React.ReactNode;
    tabSize: number;
    insertSpaces: boolean;
    ignoreTabKey: boolean;
    padding: Padding<number | string>;
    style?: React.CSSProperties;
    textareaId?: string;
    textareaClassName?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    preClassName?: string;
};
declare type State = {
    capture: boolean;
};
declare type Record = {
    value: string;
    selectionStart: number;
    selectionEnd: number;
};
declare type History = {
    stack: (Record & {
        timestamp: number;
    })[];
    offset: number;
};
export default class Editor extends React.Component<Props, State> {
    static defaultProps: {
        tabSize: number;
        insertSpaces: boolean;
        ignoreTabKey: boolean;
        padding: number;
    };
    state: {
        capture: boolean;
    };
    componentDidMount(): void;
    private _recordCurrentState;
    private _getLines;
    private _recordChange;
    private _updateInput;
    private _applyEdits;
    private _undoEdit;
    private _redoEdit;
    private _handleKeyDown;
    private _handleChange;
    private _history;
    private _input;
    get session(): {
        history: History;
    };
    set session(session: {
        history: History;
    });
    render(): JSX.Element;
}
export {};
