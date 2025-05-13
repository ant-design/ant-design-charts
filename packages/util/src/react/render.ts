import * as React from 'react';

let version = React.version || ''

let createRoot: ((container: Element | DocumentFragment) => any) | undefined;
let legacyRender: ((node: React.ReactElement, container: Element | DocumentFragment) => void) | undefined;
let legacyUnmount: ((container: Element | DocumentFragment) => boolean) | undefined;

const MARK = '__rc_react_root__';

type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: ReturnType<NonNullable<typeof createRoot>>;
};

try {
  const mainVersion = parseInt(version.split('.')[0], 10);

  if (mainVersion >= 18) {
    // 动态引入 React 18+ 的 API
    const client = require('react-dom/client');
    createRoot = client.createRoot;
  } else {
    // 仅在 React <18 才有 render/unmountComponentAtNode
    const legacyReactDOM = require('react-dom');
    legacyRender = legacyReactDOM.render;
    legacyUnmount = legacyReactDOM.unmountComponentAtNode;
  }
} catch (e) {
  // 忽略错误
}

// ========== 渲染 ==========
function modernRender(node: React.ReactNode, container: ContainerType) {
  if (!container[MARK]) {
    container[MARK] = createRoot!(container);
  }
  container[MARK]!.render(node);
}

function fallbackLegacyRender(node: React.ReactElement, container: ContainerType) {
  if (legacyRender) {
    legacyRender(node, container);
  } else {
    throw new Error('ReactDOM.render is not available in this React version');
  }
}

export function render(node: React.ReactElement, container: ContainerType) {
  if (createRoot) {
    modernRender(node, container);
  } else {
    fallbackLegacyRender(node, container);
  }
}

// ========== 卸载 ==========
function fallbackLegacyUnmount(container: ContainerType) {
  if (legacyUnmount) {
    legacyUnmount(container);
  } else {
    throw new Error('ReactDOM.unmountComponentAtNode is not available in this React version');
  }
}

async function modernUnmount(container: ContainerType) {
  return Promise.resolve().then(() => {
    container[MARK]?.unmount?.();
    delete container[MARK];
  });
}

export async function unmount(container: ContainerType) {
  if (createRoot) {
    return modernUnmount(container);
  } else {
    return fallbackLegacyUnmount(container);
  }
}
