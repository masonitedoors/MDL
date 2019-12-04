import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import Select from './react'

storiesOf('Select', module).add(
  'default',
  withState({ value: '' })(({ store }) => {
    const { value } = store.state
    const onChange = () => store.set({ value })
    const options = [{ label: 'Masonite', value: 'masonite' },  { label: 'Digital', value: 'digital' }]
    
    return <Select {...{ value, onChange, options }} />
  }),
)
