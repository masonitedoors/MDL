/* eslint valid-typeof: 0 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk') // eslint-disable-line import/no-extraneous-dependencies

function createCssClassesFromColors() {
  const colors = getCssColors()
  fs.writeFileSync('./styles/storybook/colors.json', JSON.stringify(colors, null, 4))
  return true
}

function getCssColors() {
  const file = fs.readFileSync(path.resolve(__dirname, './../styles/_colors.scss'), 'utf-8')
  return getArrayOfVariableObjects(file)
}

function getArrayOfVariableObjects(str) {
  const lines = str.split('\n')
  return lines
    .map(line => {
      const [name, value] = line.replace(';', '').split(':')
      let leftPad = ''

      if (value === typeof 'undefined' || value === undefined) {
        return null
      }
      if (value.match(/\$/g)) {
        return null
      }
      if (value.length === 5) {
        leftPad = '   '
      }

      console.log(`${chalk.hex(value)('██')} ${value} ${leftPad}${chalk.hex('#777')(name)}`)

      return (
        typeof value !== 'undefined' && {
          name: name.slice(1),
          value: value.trim(),
        }
      )
    })
    .filter(v => v)
}

module.exports.createCssClassesFromColors = createCssClassesFromColors
