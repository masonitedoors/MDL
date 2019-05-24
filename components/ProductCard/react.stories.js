import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import ProductCard from './react'

const stories = storiesOf('ProductCard', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => {
  const title = text('Title', 'Product Card Title')
  const image = text(
    'Image',
    'https://embed.widencdn.net/img/masonite/jmrx3nt7zf/100px/C11-Primed-Shaker_30.jpeg',
  )

  return <ProductCard title={title} image={image} />
})
