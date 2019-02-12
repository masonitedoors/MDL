import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import FilterableSearch from './react'

storiesOf('Forms/FilterableSearch', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const checked = boolean('Checked', true)
    return <FilterableSearch filterChoices={[{ label: 'Label', value: 'idk', selected: true }]} />
  })
