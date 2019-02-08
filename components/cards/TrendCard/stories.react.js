import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import TrendCard from './react'

storiesOf('Cards/TrendCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const squareImage = boolean('Square image', false)
    return (
      <TrendCard
        title="Lorem Ipsum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="http://embed.widencdn.net/img/masonite/7z1oiiebef/640x360px/?keep=c&crop=yes"
        squareImage={squareImage}
      />
    )
  })
  .add('without an image', () => (
    <TrendCard
      title="Lorem Ipsum"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image={null}
    />
  ))
