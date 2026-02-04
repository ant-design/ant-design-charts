/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */

import {asciiAlpha, asciiAlphanumeric} from 'micromark-util-character'
/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} type
 */
export function factoryName(effects, ok, nok, type) {
  const self = this
  return start

  /** @type {State} */
  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(type)
      effects.consume(code)
      return name
    }
    return nok(code)
  }

  /** @type {State} */
  function name(code) {
    if (code === 45 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return name
    }
    effects.exit(type)
    return self.previous === 45 || self.previous === 95 ? nok(code) : ok(code)
  }
}
