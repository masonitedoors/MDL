import { addParameters, configure } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options'
import parameters from './../addon-options'
import 'styles/storybook'

addParameters(parameters)

const req = require.context('./../../components', true, /(stories\.vue|vue\.stories).js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
