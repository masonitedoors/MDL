import { storiesOf } from '@storybook/html'
import './stories.scss'
import tinycolor from 'tinycolor2'
import colors from './colors'

storiesOf('Colors', module).add('main', () => {
  const colorsMarkup = colors
    .map(
      ({ name, value }) => `<article class="color">
          <div class="color__swatch" style="background-color: ${value}">
            <div class="color__value" style="color: ${tinycolor
    .mostReadable(value, ['#000', '#fff'])
    .toHexString()}">${value}</div>
          </div>
          <div class="color__label">${name}</div>
        </article>`,
    )
    .join('')
  return `<div class="colors">${colorsMarkup}</div>`
})
