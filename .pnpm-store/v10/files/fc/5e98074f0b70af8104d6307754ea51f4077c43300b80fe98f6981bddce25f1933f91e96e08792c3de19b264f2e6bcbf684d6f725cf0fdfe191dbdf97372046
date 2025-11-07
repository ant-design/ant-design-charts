/**
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 * @typedef {import('micromark-util-types').Handle} _Handle
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

/**
 * @typedef {[string, string]} Attribute
 *   Internal tuple representing an attribute.
 */

/**
 * @typedef {Record<string, Handle>} HtmlOptions
 *   Configuration.
 *
 *   > 👉 **Note**: the special field `'*'` can be used to specify a fallback
 *   > handle to handle all otherwise unhandled directives.
 *
 * @callback Handle
 *   Handle a directive.
 * @param {CompileContext} this
 *   Current context.
 * @param {Directive} directive
 *   Directive.
 * @returns {boolean | void}
 *   Signal whether the directive was handled.
 *   Yield `false` to let the fallback (a special handle for `'*'`) handle it.
 *
 * @typedef Directive
 *   Structure representing a directive.
 * @property {DirectiveType} type
 *   Kind.
 * @property {string} name
 *   Name of directive.
 * @property {string | undefined} [label]
 *   Compiled HTML content that was in `[brackets]`.
 * @property {Record<string, string> | undefined} [attributes]
 *   Object w/ HTML attributes.
 * @property {string | undefined} [content]
 *   Compiled HTML content inside container directive.
 * @property {number | undefined} [_fenceCount]
 *   Private :)
 *
 * @typedef {'containerDirective' | 'leafDirective' | 'textDirective'} DirectiveType
 *   Kind.
 */

import {ok as assert} from 'uvu/assert'
import {parseEntities} from 'parse-entities'

const own = {}.hasOwnProperty

/**
 * Create an extension for `micromark` to support directives when serializing
 * to HTML.
 *
 * @param {HtmlOptions | null | undefined} [options]
 *   Configuration.
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support directives when serializing to HTML.
 */
export function directiveHtml(options) {
  const options_ = options || {}
  return {
    enter: {
      directiveContainer() {
        return enter.call(this, 'containerDirective')
      },
      directiveContainerAttributes: enterAttributes,
      directiveContainerLabel: enterLabel,
      directiveContainerContent() {
        this.buffer()
      },

      directiveLeaf() {
        return enter.call(this, 'leafDirective')
      },
      directiveLeafAttributes: enterAttributes,
      directiveLeafLabel: enterLabel,

      directiveText() {
        return enter.call(this, 'textDirective')
      },
      directiveTextAttributes: enterAttributes,
      directiveTextLabel: enterLabel
    },
    exit: {
      directiveContainer: exit,
      directiveContainerAttributeClassValue: exitAttributeClassValue,
      directiveContainerAttributeIdValue: exitAttributeIdValue,
      directiveContainerAttributeName: exitAttributeName,
      directiveContainerAttributeValue: exitAttributeValue,
      directiveContainerAttributes: exitAttributes,
      directiveContainerContent: exitContainerContent,
      directiveContainerFence: exitContainerFence,
      directiveContainerLabel: exitLabel,
      directiveContainerName: exitName,

      directiveLeaf: exit,
      directiveLeafAttributeClassValue: exitAttributeClassValue,
      directiveLeafAttributeIdValue: exitAttributeIdValue,
      directiveLeafAttributeName: exitAttributeName,
      directiveLeafAttributeValue: exitAttributeValue,
      directiveLeafAttributes: exitAttributes,
      directiveLeafLabel: exitLabel,
      directiveLeafName: exitName,

      directiveText: exit,
      directiveTextAttributeClassValue: exitAttributeClassValue,
      directiveTextAttributeIdValue: exitAttributeIdValue,
      directiveTextAttributeName: exitAttributeName,
      directiveTextAttributeValue: exitAttributeValue,
      directiveTextAttributes: exitAttributes,
      directiveTextLabel: exitLabel,
      directiveTextName: exitName
    }
  }

  /**
   * @this {CompileContext}
   * @param {DirectiveType} type
   */
  function enter(type) {
    let stack = this.getData('directiveStack')
    if (!stack) this.setData('directiveStack', (stack = []))
    stack.push({type, name: ''})
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitName(token) {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    stack[stack.length - 1].name = this.sliceSerialize(token)
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function enterLabel() {
    this.buffer()
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitLabel() {
    const data = this.resume()
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    stack[stack.length - 1].label = data
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function enterAttributes() {
    this.buffer()
    this.setData('directiveAttributes', [])
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitAttributeIdValue(token) {
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')
    attributes.push([
      'id',
      parseEntities(this.sliceSerialize(token), {
        attribute: true
      })
    ])
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitAttributeClassValue(token) {
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')

    attributes.push([
      'class',
      parseEntities(this.sliceSerialize(token), {
        attribute: true
      })
    ])
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitAttributeName(token) {
    // Attribute names in CommonMark are significantly limited, so character
    // references can’t exist.
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')

    attributes.push([this.sliceSerialize(token), ''])
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitAttributeValue(token) {
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')
    attributes[attributes.length - 1][1] = parseEntities(
      this.sliceSerialize(token),
      {attribute: true}
    )
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitAttributes() {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')
    /** @type {Directive['attributes']} */
    const cleaned = {}
    let index = -1

    while (++index < attributes.length) {
      const attribute = attributes[index]

      if (attribute[0] === 'class' && cleaned.class) {
        cleaned.class += ' ' + attribute[1]
      } else {
        cleaned[attribute[0]] = attribute[1]
      }
    }

    this.resume()
    this.setData('directiveAttributes')
    stack[stack.length - 1].attributes = cleaned
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitContainerContent() {
    const data = this.resume()
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    stack[stack.length - 1].content = data
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exitContainerFence() {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    const directive = stack[stack.length - 1]
    if (!directive._fenceCount) directive._fenceCount = 0
    directive._fenceCount++
    if (directive._fenceCount === 1) this.setData('slurpOneLineEnding', true)
  }

  /**
   * @this {CompileContext}
   * @type {_Handle}
   */
  function exit() {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    const directive = stack.pop()
    assert(directive, 'expected directive')
    /** @type {boolean|undefined} */
    let found
    /** @type {boolean|void} */
    let result

    assert(directive.name, 'expected `name`')

    if (own.call(options_, directive.name)) {
      result = options_[directive.name].call(this, directive)
      found = result !== false
    }

    if (!found && own.call(options_, '*')) {
      result = options_['*'].call(this, directive)
      found = result !== false
    }

    if (!found && directive.type !== 'textDirective') {
      this.setData('slurpOneLineEnding', true)
    }
  }
}
