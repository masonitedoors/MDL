import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Radio from './react'
import Readme from './react.README.md'

storiesOf('Radio', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add(
    'checked with a click event',
    withState({ checked: true, value: 'OPTION1' })(({ store }) => (
      <Radio
        checked={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
        key={store.state.key}
        name={store.state.name}
        value={store.state.value}
      />
    )),
  )
