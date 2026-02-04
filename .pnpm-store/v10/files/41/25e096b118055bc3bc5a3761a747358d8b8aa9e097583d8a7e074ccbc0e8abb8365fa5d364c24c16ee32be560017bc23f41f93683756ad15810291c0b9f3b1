export { default as loader } from '@monaco-editor/loader';
import * as react from 'react';
import { ReactNode } from 'react';
import * as monaco_editor from 'monaco-editor';
import { editor } from 'monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

type MonacoDiffEditor = editor.IStandaloneDiffEditor;
type DiffOnMount = (editor: MonacoDiffEditor, monaco: Monaco) => void;
type DiffBeforeMount = (monaco: Monaco) => void;
type DiffEditorProps = {
    /**
     * The original source (left one) value
     */
    original?: string;
    /**
     * The modified source (right one) value
     */
    modified?: string;
    /**
     * Language for the both models - original and modified
     */
    language?: string;
    /**
     * This prop gives you the opportunity to specify the language of the
     * original source separately, otherwise, it will get the value of the language property
     */
    originalLanguage?: string;
    /**
     * This prop gives you the opportunity to specify the language of the
     * modified source separately, otherwise, it will get the value of language property
     */
    modifiedLanguage?: string;
    /**
     * Path for the "original" model
     * Will be passed as a third argument to `.createModel` method
     * `monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))`
     */
    originalModelPath?: string;
    /**
     * Path for the "modified" model
     * Will be passed as a third argument to `.createModel` method
     * `monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))`
     */
    modifiedModelPath?: string;
    /**
     * Indicator whether to dispose the current original model when the DiffEditor is unmounted or not
     * @default false
     */
    keepCurrentOriginalModel?: boolean;
    /**
     * Indicator whether to dispose the current modified model when the DiffEditor is unmounted or not
     * @default false
     */
    keepCurrentModifiedModel?: boolean;
    /**
     * The theme for the monaco
     * Available options "vs-dark" | "light"
     * Define new themes by `monaco.editor.defineTheme`
     * @default "light"
     */
    theme?: Theme | string;
    /**
     * The loading screen before the editor will be mounted
     * @default "loading..."
     */
    loading?: ReactNode;
    /**
     * IDiffEditorConstructionOptions
     */
    options?: editor.IDiffEditorConstructionOptions;
    /**
     * Width of the editor wrapper
     * @default "100%"
     */
    width?: number | string;
    /**
     * Height of the editor wrapper
     * @default "100%"
     */
    height?: number | string;
    /**
     * Class name for the editor container
     */
    className?: string;
    /**
     * Props applied to the wrapper element
     */
    wrapperProps?: object;
    /**
     * Signature: function(monaco: Monaco) => void
     * An event is emitted before the editor is mounted
     * It gets the monaco instance as a first argument
     * Defaults to "noop"
     */
    beforeMount?: DiffBeforeMount;
    /**
     * Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void
     * An event is emitted when the editor is mounted
     * It gets the editor instance as a first argument and the monaco instance as a second
     * Defaults to "noop"
     */
    onMount?: DiffOnMount;
};

declare function DiffEditor({ original, modified, language, originalLanguage, modifiedLanguage, originalModelPath, modifiedModelPath, keepCurrentOriginalModel, keepCurrentModifiedModel, theme, loading, options, height, width, className, wrapperProps, beforeMount, onMount, }: DiffEditorProps): JSX.Element;

declare const _default$1: react.MemoExoticComponent<typeof DiffEditor>;

declare function useMonaco(): typeof monaco_editor | null;

type OnMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;
type BeforeMount = (monaco: Monaco) => void;
type OnChange = (value: string | undefined, ev: editor.IModelContentChangedEvent) => void;
type OnValidate = (markers: editor.IMarker[]) => void;
type EditorProps = {
    /**
     * Default value of the current model
     */
    defaultValue?: string;
    /**
     * Default language of the current model
     */
    defaultLanguage?: string;
    /**
     * Default path of the current model
     * Will be passed as the third argument to `.createModel` method
     * `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`
     */
    defaultPath?: string;
    /**
     * Value of the current model
     */
    value?: string;
    /**
     * Language of the current model
     */
    language?: string;
    /**
     * Path of the current model
     * Will be passed as the third argument to `.createModel` method
     * `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`
     */
    path?: string;
    /**
     * The theme for the monaco
     * Available options "vs-dark" | "light"
     * Define new themes by `monaco.editor.defineTheme`
     * @default "light"
     */
    theme?: Theme | string;
    /**
     * The line to jump on it
     */
    line?: number;
    /**
     * The loading screen before the editor will be mounted
     * @default "Loading..."
     */
    loading?: ReactNode;
    /**
     * IStandaloneEditorConstructionOptions
     */
    options?: editor.IStandaloneEditorConstructionOptions;
    /**
     * IEditorOverrideServices
     */
    overrideServices?: editor.IEditorOverrideServices;
    /**
     * Indicator whether to save the models' view states between model changes or not
     * Defaults to true
     */
    saveViewState?: boolean;
    /**
     * Indicator whether to dispose the current model when the Editor is unmounted or not
     * @default false
     */
    keepCurrentModel?: boolean;
    /**
     * Width of the editor wrapper
     * @default "100%"
     */
    width?: number | string;
    /**
     * Height of the editor wrapper
     * @default "100%"
     */
    height?: number | string;
    /**
     * Class name for the editor container
     */
    className?: string;
    /**
     * Props applied to the wrapper element
     */
    wrapperProps?: object;
    /**
     * Signature: function(monaco: Monaco) => void
     * An event is emitted before the editor is mounted
     * It gets the monaco instance as a first argument
     * Defaults to "noop"
     */
    beforeMount?: BeforeMount;
    /**
     * Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void
     * An event is emitted when the editor is mounted
     * It gets the editor instance as a first argument and the monaco instance as a second
     * Defaults to "noop"
     */
    onMount?: OnMount;
    /**
     * Signature: function(value: string | undefined, ev: monaco.editor.IModelContentChangedEvent) => void
     * An event is emitted when the content of the current model is changed
     */
    onChange?: OnChange;
    /**
     * Signature: function(markers: monaco.editor.IMarker[]) => void
     * An event is emitted when the content of the current model is changed
     * and the current model markers are ready
     * Defaults to "noop"
     */
    onValidate?: OnValidate;
};

declare function Editor({ defaultValue, defaultLanguage, defaultPath, value, language, path, theme, line, loading, options, overrideServices, saveViewState, keepCurrentModel, width, height, className, wrapperProps, beforeMount, onMount, onChange, onValidate, }: EditorProps): JSX.Element;

declare const _default: react.MemoExoticComponent<typeof Editor>;

type Monaco = typeof monaco;
type Theme = 'vs-dark' | 'light';

export { BeforeMount, DiffBeforeMount, _default$1 as DiffEditor, DiffEditorProps, DiffOnMount, _default as Editor, EditorProps, Monaco, MonacoDiffEditor, OnChange, OnMount, OnValidate, Theme, _default as default, useMonaco };
