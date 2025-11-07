import { ID, Node, PlainObject } from '../types';

export function doBFS<N extends PlainObject>(
  queue: Node<N>[],
  visited: Set<ID>,
  fn: (node: Node<N>) => boolean | void,
  navigator: (id: ID) => Node<N>[],
): boolean {
  while (queue.length) {
    const node = queue.shift()!;
    const abort = fn(node);
    if (abort) {
      return true;
    }
    visited.add(node.id);
    navigator(node.id).forEach((n) => {
      if (!visited.has(n.id)) {
        visited.add(n.id);
        queue.push(n);
      }
    });
  }
  return false;
}

export function doDFS<N extends PlainObject>(
  node: Node<N>,
  visited: Set<ID>,
  fn: (node: Node<N>) => boolean | void,
  navigator: (id: ID) => Node<N>[],
): boolean {
  const abort = fn(node);
  if (abort) {
    return true;
  }

  visited.add(node.id);
  for (const n of navigator(node.id)) {
    if (!visited.has(n.id)) {
      if (doDFS(n, visited, fn, navigator)) {
        return true;
      }
    }
  }

  return false;
}
