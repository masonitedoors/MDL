import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import FilterableSearch from './react'

storiesOf('Forms/FilterableSearch', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({
      value: '',
      filterChoices: [
        { label: 'Filter 1', value: 'FILTER1', checked: true },
        { label: 'Filter 2', value: 'FILTER2', checked: false },
      ],
    })(({ store }) => (
      <FilterableSearch
        handleFilterChange={checkedChoice => {
          store.set({
            ...store.state,
            filterChoices: store.state.filterChoices.map(choice => (choice.value === checkedChoice.value
              ? { ...choice, checked: !choice.checked }
              : choice)),
          })
        }}
        value={store.state.value}
        handleInputChange={value => {
          console.log('handleInputChange invoked, returns: ', value)
          store.set({ value })
        }}
        handleSearch={value => {
          console.log('handleSearch callback invoked, returns:', value)
        }}
        filterChoices={store.state.filterChoices}
      />
    )),
  )
