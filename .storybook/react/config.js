import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import options from './../addon-options'
import 'styles/storybook'

addDecorator(withOptions(options))

const req = require.context('./../../components', true, /stories\.react\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
