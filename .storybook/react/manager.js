import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'
import brandImage from '../../images/masonite-icon.png'

addons.setConfig({
  theme: create({
    base: 'dark',
    appContentBg: 'white',
    brandTitle: 'Masonite Design Language',
    brandUrl: 'https://github.com/masonitedoors/MDL',
    brandImage,
  }),
})
