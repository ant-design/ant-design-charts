/** @type {import('eslint-doc-generator').GenerateOptions} */
module.exports = {
  configEmoji: [
    ['recommended', '✅'],
    ['flat/recommended', '✅'],
  ],
  postprocess: (doc) => {
    return doc.replace(/✅\s*✅/gu, '✅')
  },
}
