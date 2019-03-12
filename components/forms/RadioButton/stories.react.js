import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Radio from './react'

storiesOf('Forms/Radio', module)
  .addDecorator(withKnobs)
  .add(
    'checked with a click event',
    withState({ checked: true })(({ store }) => (
      <React.Fragment>
      <Radio
        checked={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
        name={store.state.name}
      />
      </React.Fragment>
    )),
  )
  .add('fully controlled', () => {
    const checked = boolean('Checked', true)
    return <Radio checked={checked} name={name}/>
  })
