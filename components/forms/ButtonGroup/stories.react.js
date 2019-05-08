import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import ButtonGroup from './react'

storiesOf('Forms/ButtonGroup', module)
  .addDecorator(withKnobs)
  .add(
    'row and column test',
    withState({
      maxNumberPerRow: null,
      buttonArray: [
        {
          label: 'Filter 1',
          value: 'FILTER1',
        },
        {
          label: 'Filter 2',
          value: 'FILTER2',
        },
        {
          label: 'Filter 3',
          value: 'FILTER3',
        },
        {
          label: 'Filter 4',
          value: 'FILTER4',
        },
        {
          label: 'Filter 5',
          value: 'FILTER5',
        },
        {
          label: 'Filter 6',
          value: 'FILTER6',
        },
        {
          label: 'Filter 7',
          value: 'FILTER7',
        },
        {
          label: 'Filter 8',
          value: 'FILTER8',
        },
        {
          label: 'Filter 9',
          value: 'FILTER9',
        },
        {
          label: 'Filter 10',
          value: 'FILTER10',
        },
      ],
      direction: 'column',
    })(({ store }) => {
      const row = boolean('Row', false)
      return (
        <ButtonGroup
          checkedChoice={store.state.checkedChoice}
          buttonArray={store.state.buttonArray}
          onChange={({ target: { value: maxNumberPerRow } }) => store.set({ maxNumberPerRow })}
          row={row}
        />
      )
    }),
  )
