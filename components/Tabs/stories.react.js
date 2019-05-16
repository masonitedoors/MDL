import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Tabs from './react'

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withState({ activeTab: 1 })(({ store }) => {
      const tabs = [
        {
          id: 0,
          children: 'Lorem Ipsum',
        },
        {
          id: 1,
          children: <span>Using JSX</span>,
        },
      ]
      return (
        <Tabs
          tabs={tabs}
          activeTab={store.state.activeTab}
          onTabClick={id => store.set({ activeTab: id })}
        />
      )
    }),
  )
