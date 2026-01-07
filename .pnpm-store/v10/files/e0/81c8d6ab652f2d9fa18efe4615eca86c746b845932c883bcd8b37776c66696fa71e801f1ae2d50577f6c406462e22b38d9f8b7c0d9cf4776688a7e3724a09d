/*
 * MIT License http://opensource.org/licenses/MIT
 * Author: Ben Holloway @bholloway
 */
'use strict';

const os = require('os');
const path = require('path');
const postcss = require('postcss');

const fileProtocol = require('../file-protocol');
const algerbra = require('../position-algerbra');

const ORPHAN_CR_REGEX = /\r(?!\n)(.|\n)?/g;

/**
 * Process the given CSS content into reworked CSS content.
 *
 * @param {string} sourceFile The absolute path of the file being processed
 * @param {string} sourceContent CSS content without source-map
 * @param {{outputSourceMap: boolean, transformDeclaration:function, absSourceMap:object,
 *        sourceMapConsumer:object, removeCR:boolean}} params Named parameters
 * @return {{content: string, map: object}} Reworked CSS and optional source-map
 */
function process(sourceFile, sourceContent, params) {
  // #107 libsass emits orphan CR not considered newline, postcss does consider newline (content vs source-map mismatch)
  const correctedContent = params.removeCR && (os.EOL !== '\r') ?
    sourceContent.replace(ORPHAN_CR_REGEX, ' $1') :
    sourceContent;

  // IMPORTANT - prepend file protocol to all sources to avoid problems with source map
  const plugin = Object.assign(
    () => ({
      postcssPlugin: 'postcss-resolve-url',
      prepare: () => {
        const visited = new Set();

        /**
         * Given an apparent position find the directory of the original file.
         *
         * @param startPosApparent {{line: number, column: number}}
         * @returns {false|string} Directory of original file or false on invalid
         */
        const positionToOriginalDirectory = (startPosApparent) => {
          // reverse the original source-map to find the original source file before transpilation
          const startPosOriginal =
            !!params.sourceMapConsumer &&
            params.sourceMapConsumer.originalPositionFor(startPosApparent);

          // we require a valid directory for the specified file
          const directory =
            !!startPosOriginal &&
            !!startPosOriginal.source &&
            fileProtocol.remove(path.dirname(startPosOriginal.source));

          return directory;
        };

        return {
          Declaration: (declaration) => {
            var prefix,
              isValid = declaration.value && (declaration.value.indexOf('url') >= 0) && !visited.has(declaration);
            if (isValid) {
              prefix = declaration.prop + declaration.raws.between;
              declaration.value = params.transformDeclaration(declaration.value, getPathsAtChar);
              visited.add(declaration);
            }

            /**
             * Create a hash of base path strings.
             *
             * Position in the declaration is supported by postcss at the position of the url() statement.
             *
             * @param {number} index Index in the declaration value at which to evaluate
             * @throws Error on invalid source map
             * @returns {{subString:string, value:string, property:string, selector:string}} Hash of base path strings
             */
            function getPathsAtChar(index) {
              var subString    = declaration.value.slice(0, index),
                posSelector  = algerbra.sanitise(declaration.parent.source.start),
                posProperty  = algerbra.sanitise(declaration.source.start),
                posValue     = algerbra.add([posProperty, algerbra.strToOffset(prefix)]),
                posSubString = algerbra.add([posValue, algerbra.strToOffset(subString)]);

              var result = {
                subString: positionToOriginalDirectory(posSubString),
                value    : positionToOriginalDirectory(posValue),
                property : positionToOriginalDirectory(posProperty),
                selector : positionToOriginalDirectory(posSelector)
              };

              var isValid = [result.subString, result.value, result.property, result.selector].every(Boolean);
              if (isValid) {
                return result;
              }
              else if (params.sourceMapConsumer) {
                throw new Error(
                  'source-map information is not available at url() declaration ' + (
                    ORPHAN_CR_REGEX.test(sourceContent) ?
                      '(found orphan CR, try removeCR option)' :
                      '(no orphan CR found)'
                  )
                );
              } else {
                throw new Error('a valid source-map is not present (ensure preceding loaders output a source-map)');
              }
            }
          }
        };
      }
    }),
    { postcss: true }
  );

  // IMPORTANT - prepend file protocol to all sources to avoid problems with source map
  return postcss([plugin])
    .process(correctedContent, {
      from: fileProtocol.prepend(sourceFile),
      map : params.outputSourceMap && {
        prev          : !!params.absSourceMap && fileProtocol.prepend(params.absSourceMap),
        inline        : false,
        annotation    : false,
        sourcesContent: true  // #98 sourcesContent missing from output map
      }
    })
    .then(({css, map}) => ({
      content: css,
      map    : params.outputSourceMap ? fileProtocol.remove(map.toJSON()) : null
    }));
}

module.exports = process;
