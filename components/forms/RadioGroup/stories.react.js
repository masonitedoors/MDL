import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Radio from './react'
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
      <React.Fragment>
        <RadioGroup
          checkedChoice={store.state.checkedChoice}
          choices={store.state.choices}
          onChange={value => store.set({ checkedChoice: value })}
          direction
        />
      </React.Fragment>
    )),
  )

  .add('fully controlled', () => {
    const direction = 'column';
    const  choices = [
      {
        label: 'Filter 1',
        value: 'FILTER1',
      },
      {
        label: 'Filter 2',
        value: 'FILTER2',
      },
    ];
    return <RadioGroup direction={direction} choices = {choices} onChange = {() => console.log("click")} />
     
  })