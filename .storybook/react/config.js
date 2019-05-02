import { addParameters, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import parameters from './../parameters'
import 'styles/storybook/storybook'

addParameters(parameters)

const req = require.context('./../../components', true, /(stories\.react|react\.stories).js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
