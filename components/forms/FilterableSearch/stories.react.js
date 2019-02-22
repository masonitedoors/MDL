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
      value: '',
      filterChoices: [
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
      ],
    })(({ store }) => (
      <FilterableSearch
        onFilterChange={checkedChoice => {
          store.set({
            ...store.state,
            filterChoices: store.state.filterChoices.map(choice =>
              (choice.value === checkedChoice.value
                ? {
                  ...choice,
                  checked: !choice.checked,
                }
                : choice)),
          })
        }}
        value={store.state.value}
        onInputChange={value => {
          console.log('handleInputChange invoked, returns: ', value)
          store.set({
            value,
          })
        }}
        onSubmit={value => {
          console.log('handleSearch callback invoked, returns:', value)
        }}
        filterChoices={store.state.filterChoices}
      />
    )),
  )
  .add(
    'without onSubmit',
    withState({
      value: '',
      filterChoices: [
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
      ],
    })(({ store }) => (
      <FilterableSearch
        placeholder="Filter"
        onFilterChange={checkedChoice => {
          store.set({
            ...store.state,
            filterChoices: store.state.filterChoices.map(choice =>
              (choice.value === checkedChoice.value
                ? { ...choice, checked: !choice.checked }
                : choice)),
          })
        }}
        value={store.state.value}
        onInputChange={value => {
          console.log('handleInputChange invoked, returns: ', value)
          store.set({
            value,
          })
        }}
        filterChoices={store.state.filterChoices}
      />
    )),
  )
