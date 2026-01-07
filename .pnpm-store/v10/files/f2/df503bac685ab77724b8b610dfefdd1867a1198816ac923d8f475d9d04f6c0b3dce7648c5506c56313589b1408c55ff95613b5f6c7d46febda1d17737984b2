import { NodeRepr as NativeNodeRepr } from './index'

export interface DOMTokenList {
  add(...tokens: string[]): void
  remove(...tokens: string[]): void
  toggle(token: string, force?: boolean): boolean
  contains(token: string): boolean
  length: number
  item(index: number): string | null
  toString(): string
  value: string
  [Symbol.iterator](): Iterator<string>
}

export class NodeRepr extends NativeNodeRepr {
  get classList(): DOMTokenList
  get dataset(): Record<string, string>
}

export class DOMParser {
  parseFromString(string: string, mimeType: string): NodeRepr
}
