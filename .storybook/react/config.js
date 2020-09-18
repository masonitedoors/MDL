import { addDecorator, addParameters, configure } from '@storybook/react'
import parameters from '../parameters'
import 'storybook-readme/register'
import 'styles/storybook.scss'

addParameters(parameters)

const req = require.context('./../../components', true, /(stories\.react|react\.stories).js$/)

function loadStories() {
  const reqWelcomeStory = require.context('./../../components', true, /react.welcome.js$/)
  reqWelcomeStory(reqWelcomeStory.keys()[0])
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
