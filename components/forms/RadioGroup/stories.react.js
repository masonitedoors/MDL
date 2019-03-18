import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import RadioGroup from './react'

storiesOf('Forms/RadioGroup', module)
  .addDecorator(withKnobs)
  .add(
    'checked with a click event',
    withState({
      checkedChoice: null,
      choices: [
        {
          label: 'Filter 1',
          value: 'FILTER1',
        },
        {
          label: 'Filter 2',
          value: 'FILTER2',
        },
      ],
      direction: 'column',
    })(({ store }) => (
      <RadioGroup
        checkedChoice={store.state.checkedChoice}
        choices={store.state.choices}
        onChange={value => store.set({ checkedChoice: value })}
        direction={store.state.direction}
      />
    )),
  )
