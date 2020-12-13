import React, { FC } from 'react'
import { withKnobs, number, boolean } from '@storybook/addon-knobs'
import Counter from './react'

export default {
  title: 'Counter',
  component: Counter,
    decorators: [
    withKnobs,
    (Story: FC) => (
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  const value = number('Value', 3)
  const showZero = boolean('Show Zero', false)

  return <Counter showZero={showZero} value={value} />
}
