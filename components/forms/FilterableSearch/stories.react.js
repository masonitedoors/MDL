import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import FilterableSearch from './react'

storiesOf('Forms/FilterableSearch', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({
      filterChoices: [
        { label: 'Filter 1', value: 'FILTER1', checked: true },
        { label: 'Filter 2', value: 'FILTER2', checked: false },
      ],
    })(({ store }) => (
      <FilterableSearch
        handleFilterChange={checkedChoice => {
          store.set({
            ...store.state,
            filterChoices: store.state.filterChoices.map(choice => (choice.value === checkedChoice ? { ...choice, checked: !choice.checked } : choice)),
          })
        }}
        handleSearch={value => {
          console.log('handleSearch callback invoked, returns:', value)
        }}
        filterChoices={store.state.filterChoices}
      />
    )),
  )
