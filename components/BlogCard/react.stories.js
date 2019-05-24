import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import BlogCard from './react'

storiesOf('BlogCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BlogCard
      title="Lorem Ipsum"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  ))
