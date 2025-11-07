const special = require('../groups/special')
const positioning = require('../groups/positioning')
const boxModel = require('../groups/boxModel')
const typography = require('../groups/typography')
const visual = require('../groups/visual')
const animation = require('../groups/animation')
const misc = require('../groups/misc')

module.exports = () =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Box Model', boxModel],
    ['Typography', typography],
    ['Visual', visual],
    ['Animation', animation],
    ['Misc', misc],
  ]
    .map(([groupName, properties]) => ({
      emptyLineBefore: 'always',
      properties,
      groupName,
    }))
    .reduce(
      (acc, { properties }) => ({
        'properties-order': [...acc['properties-order'], ...properties],
      }),
      { 'order': ['custom-properties'], 'properties-order': [], 'unspecified-properties-position': 'bottom' },
    )
