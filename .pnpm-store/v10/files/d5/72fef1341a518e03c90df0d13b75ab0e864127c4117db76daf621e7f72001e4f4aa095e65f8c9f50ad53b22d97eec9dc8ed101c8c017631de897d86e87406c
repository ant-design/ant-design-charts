import type { ReactNode } from 'react';
import { SelectedElement } from '@stagewise/agent-interface/toolbar';
import type { UserMessage } from '@stagewise/agent-interface/toolbar';

/** Additional information that a plugin can provide when the user selects a context element */
export declare interface ContextElementContext {
    /** Up to ~50 characters of information (element name, whatever...) that get's rendered when selecting an element */
    annotation: string | null;
}

/** A context snippet that get's added into the prompt. */
export declare interface ContextSnippet {
    promptContextName: string;
    content: (() => string | Promise<string>) | string;
}

/** A user-selectable context snippet offer that optionally get's added into the prompt. */
export declare interface ContextSnippetOffer extends ContextSnippet {
    displayName: string;
}

export declare function initToolbar(config?: ToolbarConfig): void;

declare interface InternalToolbarConfig {
    /** A list of plugins that the toolbar should use. */
    plugins: ToolbarPlugin[];
    /** Experimental features that are not yet stable and might change in the future. */
    experimental?: {
        /**
         * If true, the toolbar will use the stagewise MCP server.
         */
        enableStagewiseMCP: boolean;
        /**
         * If true, the toolbar will allow tool calls to sync progress with the agent.
         */
        enableToolCalls: boolean;
    };
}

export declare interface MCP {
    prompts: {
        list: (cursor?: string) => MCPPromptList | Promise<MCPPromptList>;
        get: (name: string) => MCPPromptMessage | Promise<MCPPromptMessage>;
    };
    resources: {
        list: (cursor?: string) => MCPResourceList | Promise<MCPResourceList>;
        read: (uri: string) => MCPResourceContent | Promise<MCPResourceContent>;
    };
    tools: {
        list: (cursor?: string) => MCPToolList | Promise<MCPToolList>;
        call: (name: string) => MCPToolResponse | Promise<MCPToolResponse>;
    };
}

export declare type MCPPrompt = {
    name: string;
    description: string;
    arguments: {
        name: string;
        description: string;
        required: boolean;
    }[];
    generator: () => MCPPromptMessage | Promise<MCPPromptMessage>;
};

export declare type MCPPromptList = {
    prompts: MCPPrompt[];
    nextCursor?: string;
};

export declare type MCPPromptMessage = {
    role: 'user' | 'assistant';
    content: {
        type: 'text';
        text: string;
    } | {
        type: 'image' | 'audio';
        data: string;
        mimeType: string;
    } | {
        type: 'resource';
        resource: {
            uri: string;
            mimeType: string;
            text: string;
        };
    };
};

export declare type MCPResource = {
    uri: string;
    name: string;
    description: string;
    mimeType: string;
    size: number;
};

export declare type MCPResourceContent = {
    uri: string;
    mimeType: string;
} & ({
    text: string;
} | {
    data: string;
});

export declare type MCPResourceList = {
    resources: MCPResource[];
    nextCursor?: string;
};

export declare type MCPTool = {
    /** Unique identifier for the tool */
    name: string;
    /** Human-readable description */
    description?: string;
    /** JSON Schema for the tool's parameters */
    inputSchema: object;
    /** Optional hints about tool behavior */
    annotations?: {
        /** Human-readable title for the tool */
        title?: string;
        /** If true, the tool does not modify its environment */
        readOnlyHint?: boolean;
        /** If true, the tool may perform destructive updates */
        destructiveHint?: boolean;
        /** If true, repeated calls with same args have no additional effect */
        idempotentHint?: boolean;
        /** If true, tool interacts with external entities */
        openWorldHint?: boolean;
    };
};

export declare type MCPToolList = {
    tools: MCPTool[];
    nextCursor?: string;
};

export declare type MCPToolResponse = {
    content: ({
        type: 'text';
        text: string;
    } | {
        type: 'image' | 'audio';
        data: string;
        mimeType: string;
    } | {
        type: 'resource';
        resource: {
            uri: string;
            mimeType: string;
            text: string;
        };
    })[];
    isError: boolean;
};

export declare type PluginUserMessage = Omit<UserMessage, 'id' | 'createdAt' | 'sentByPlugin' | 'metadata' | 'pluginContent'>;

/** Additional information that a plugin can provide automatically (without user triggering) when the user sends a prompt */
export declare interface PromptContext {
    contextSnippets: ContextSnippet[];
}

/** Additional information that a plugin may provide once the user get's into prompting mode.
 *
 * Used to provide user selectable context snippets that get added to the prompt once it's sent.
 */
export declare interface PromptingExtension {
    contextSnippetOffers: ContextSnippetOffer[];
}

export { SelectedElement }

export declare interface ToolbarConfig extends Omit<ToolbarConfig_2, 'plugins'> {
    plugins?: ToolbarPluginLoader[];
}

declare interface ToolbarConfig_2 extends Omit<InternalToolbarConfig, 'plugins'> {
    plugins: ToolbarPluginLoader[];
}

export declare interface ToolbarContext {
    sendPrompt: (prompt: PluginUserMessage) => void;
    mainAppWindow: Window;
}

export declare interface ToolbarPlugin {
    /** The name of the plugin shown to the user. */
    displayName: string;
    /** The name of the plugin used for internal identification. */
    pluginName: string;
    /** A short description of what the plugin does. */
    description: string;
    /** A monochrome svg icon that will be rendered in places where the plugin is shown */
    iconSvg: ReactNode | null;
    onActionClick?: () => undefined | ReactNode;
    /** Not yet implemented. Add a MCP server to the plugin that will be accessible to the agent. */
    mcp?: MCP | null;
    /** Called when the toolbar and the plugin is loaded. */
    onLoad?: ((toolbar: ToolbarContext) => void) | null;
    /** Called when the prompting mode get's started. Plugins may provide some additional */
    onPromptingStart?: (() => PromptingExtension | null) | null;
    /** Called when the prompting mode get's aborted. */
    onPromptingAbort?: (() => void) | null;
    /** Not implemented right now. */
    onResponse?: (() => void) | null;
    /** Called just before a prompt is sent. Plugins can use this to automatically provide additional context for the prompt or simply listen to some change. */
    onPromptSend?: ((prompt: Omit<UserMessage, 'id'>) => PromptContext | Promise<PromptContext> | null) | null;
    /** Called when a context element is hovered in the context menu. This only happens in prompting mode. */
    onContextElementHover?: ((element: HTMLElement) => ContextElementContext) | null;
    /** Called when a context element is selected in the context menu. This only happens in prompting mode. */
    onContextElementSelect?: ((element: HTMLElement) => ContextElementContext) | null;
}

declare interface ToolbarPluginLoader {
    loader: true;
    mainPlugin: string;
}

export declare interface UIHandle {
    remove: () => void;
}

export { }
