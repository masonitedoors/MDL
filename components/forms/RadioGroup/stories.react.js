import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Radio from './react'
import RadioGroup from  './react'
storiesOf('Forms/RadioGroup', module)
  .addDecorator(withKnobs)
  .add(
    'checked with a click event',
    withState({ choices: [
      {
        label: 'Filter 1',
        value: 'FILTER1',
        checked: true,
      },
      {
        label: 'Filter 2',
        value: 'FILTER2',
        checked: false,
      },
    ], direction: 'column'  })(({ store }) => (
      <React.Fragment>
       <RadioGroup
          choices = {store.state.choices}
          direction 
        />
      </React.Fragment>
    )),
  )
