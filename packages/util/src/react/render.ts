import * as React from 'react';

const MARK = '__rc_react_root__';

type RootType = {
  render: (node: React.ReactNode) => void;
  unmount: () => void;
};

type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: RootType;
};

let createRoot: ((container: Element | DocumentFragment) => RootType) | undefined;
let legacyRender: ((node: React.ReactElement, container: Element | DocumentFragment) => void) | undefined;
let legacyUnmount: ((container: Element | DocumentFragment) => boolean) | undefined;

let initialized = false;

async function ensureReactDOM() {
  if (initialized) return;
  initialized = true;

  try {
    const version = React.version || '';
    const mainVersion = parseInt(version.split('.')[0], 10);

    if (mainVersion >= 18) {
      const client = await import('react-dom/client');
      createRoot = client.createRoot;
    } else {
      const legacy = await import('react-dom');
      legacyRender = legacy.render;
      legacyUnmount = legacy.unmountComponentAtNode;
    }
  } catch (e) {
    console.warn('[react-render] Failed to load ReactDOM API:', e);
  }
}

// ========== 渲染 ==========
function modernRender(node: React.ReactNode, container: ContainerType) {
  if (!container[MARK]) {
    container[MARK] = createRoot!(container);
  }
  container[MARK]!.render(node);
}

function fallbackLegacyRender(node: React.ReactElement, container: ContainerType) {
  if (!legacyRender) throw new Error('ReactDOM.render not available');
  legacyRender(node, container);
}

export async function render(node: React.ReactElement, container: ContainerType) {
  await ensureReactDOM();
  if (createRoot) modernRender(node, container);
  else fallbackLegacyRender(node, container);
}

// ========== 卸载 ==========
function fallbackLegacyUnmount(container: ContainerType) {
  if (!legacyUnmount) throw new Error('ReactDOM.unmountComponentAtNode not available');
  legacyUnmount(container);
}

async function modernUnmount(container: ContainerType) {
  container[MARK]?.unmount?.();
  delete container[MARK];
}

export async function unmount(container: ContainerType) {
  await ensureReactDOM();
  if (createRoot) return modernUnmount(container);
  else return fallbackLegacyUnmount(container);
}
