import { addDecorator, configure } from '@storybook/html'
import { withOptions } from '@storybook/addon-options'
import options from './../parameters'

addDecorator(withOptions(options))

import 'styles/global.scss'

const req = require.context('./../../components', true, /stories\.html\.js$/)

function loadStories() {
  require('./../../styles/storybook/stories.html.js')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
