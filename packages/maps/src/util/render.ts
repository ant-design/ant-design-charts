import type * as React from 'react';
import * as ReactDOM from 'react-dom';
import type { Root } from 'react-dom/client';

// Let compiler not to search module usage
const fullClone = {
  ...ReactDOM,
} as typeof ReactDOM & {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
    usingClientEntryPoint?: boolean;
  };
  createRoot?: CreateRoot;
};

type CreateRoot = (container: ContainerType) => Root;

const { version, render: reactRender, unmountComponentAtNode } = fullClone;

let createRoot: CreateRoot;
try {
  const mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18) {
    ({ createRoot } = fullClone);
  }
} catch (e) {
  // Do nothing;
}

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone;

  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}

const MARK = '__rc_react_root__';

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root;
};

function modernRender(node: React.ReactNode, container: ContainerType) {
  toggleWarning(true);
  const root = container[MARK] || createRoot(container);
  toggleWarning(false);

  root.render(node);

  container[MARK] = root;
}

function legacyRender(node: React.ReactElement, container: ContainerType) {
  reactRender(node, container);
}

/** @private Test usage. Not work in prod */
export function _r(node: React.ReactElement, container: ContainerType) {
  if (process.env.NODE_ENV !== 'production') {
    return legacyRender(node, container);
  }
}

export function render(node: React.ReactElement, container: ContainerType) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }

  legacyRender(node, container);
}

// ========================= Unmount ==========================
async function modernUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount();

    delete container[MARK];
  });
}

function legacyUnmount(container: ContainerType) {
  unmountComponentAtNode(container);
}

/** @private Test usage. Not work in prod */
export function _u(container: ContainerType) {
  if (process.env.NODE_ENV !== 'production') {
    return legacyUnmount(container);
  }
}

export async function unmount(container: ContainerType) {
  if (createRoot !== undefined) {
    // Delay to unmount to avoid React 18 sync warning
    return modernUnmount(container);
  }

  legacyUnmount(container);
}
