import { addDecorator, addParameters, configure } from '@storybook/react'
import { addReadme } from 'storybook-readme'
import parameters from './../parameters'
import 'styles/storybook'

addDecorator(addReadme)
addParameters(parameters)

const req = require.context('./../../components', true, /(stories\.react|react\.stories).js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
