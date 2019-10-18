import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'
import { withKnobs, number } from '@storybook/addon-knobs'
import Pagination from './react'

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({ currentPageNumber: 1 })(({ store }) => {
      const itemsPerPage = number('Number of items per page', 10)
      const totalItems = number('Total number of items', 103)

      return (
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPageNumber={store.state.currentPageNumber}
          onChange={e => store.set({ currentPageNumber: e.currentPageNumber })}
        />
      )
    }),
  )
