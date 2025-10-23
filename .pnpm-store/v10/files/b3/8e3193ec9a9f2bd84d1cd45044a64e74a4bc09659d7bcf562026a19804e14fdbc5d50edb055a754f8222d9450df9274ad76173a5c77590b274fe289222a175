import React from 'react';

/**
 * ProHelp 数据源子项内容类型。
 * 该类型定义了多种数据源子项内容类型，例如 h1、h2、link、text、image等。
 * 其中，link 和 inlineLink 属性都是链接类型的数据源子项内容，不同的是 inlineLink 是内联链接，而 link 是块级链接。
 *
 * @typedef {object} ProHelpDataSourceContentType
 * @property {string} h1 标题1类型的数据源子项内容。
 * @property {string} h2 标题2类型的数据源子项内容。
 * @property {{ children: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>} link 链接类型的数据源子项内容。
 * @property {{ children: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>} inlineLink 内联链接类型的数据源子项内容。
 * @property {string} text 文本类型的数据源子项内容。
 * @property {ImageProps} image 图片类型的数据源子项内容。
 */

/**
 * ProHelp 数据源子项内容类型的类型，可能的取值为 "h1"、"h2"、"link"、"inlineLink"、"text" 和 "image"。
 * @typedef {'h1' | 'h2' | 'link' | 'inlineLink' | 'text' | 'image'} ProHelpDataSourceChildrenType
 */

/**
 * ProHelp 数据源子项内容属性类型。
 * @template ValueType 数据源项值的类型，默认为 'text'。
 * 该类型定义了一个名为 children 的对象属性，根据 valueType 属性的值来确定该属性对象的具体类型，
 * 如果 valueType 的类型是 ProHelpDataSourceChildrenType，
 * 则使用 ProHelpDataSourceContentType 中 ProHelpDataSourceChildrenType 所对应的属性类型；
 * 否则，使用 ProHelpDataSourceContentType 中 ValueType 所对应的属性类型。
 */

/**
 * ProHelp 数据源子项类型。
 * @template ValueTypeMap 数据源项值的类型，默认为 'text'。
 * @property {(ValueType | ProHelpDataSourceChildrenType)} valueType 数据源子项值的类型，可以为指定的类型，也可以是自定义类型。
 * @property {ProHelpDataSourceContentProps<ValueType>} children 包含数据源子项内容的对象。
 */

/**
 * ProHelp 数据源类型。
 * @template ValueType 数据源项值的类型，默认为 'text'。
 * @property {string} key 数据源项的唯一标识。
 * @property {string} title 数据源项的标题。
 * @property children 包含子项的数组，每个子项包含一个唯一标识，标题以及子子项数组。
 */

/**
 * 这段代码定义了一个名为 ProHelpProvide 的 React 上下文对象，并且指定了该上下文对象的初始值为 { dataSource: [] }。
 * 这个上下文对象中包含了一个名为 dataSource 的属性，该属性的值是一个数组，类型为 ProHelpDataSource<any>[]。
 * 该上下文对象通常用于在 React 组件树中共享数据，即可以通过在组件中使用 ProHelpProvide.Provider 包裹一组组件，
 * 将 dataSource 和 valueTypeMap 数据源传递给这些组件，这些组件即可从上下文中获取 dataSource 数据源，实现数据的共享和传递。
 */
export var ProHelpProvide = /*#__PURE__*/React.createContext({
  dataSource: [],
  valueTypeMap: new Map()
});