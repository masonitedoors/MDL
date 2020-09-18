import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import { withKnobs, number } from '@storybook/addon-knobs'
import Pagination from './react'

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({ page: 1 })(({ store }) => {
      const itemsPerPage = number('Number of items per page', 10)
      const totalItems = number('Total number of items', 103)

      return (
        <Pagination
          page={store.state.page}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onChange={page => store.set({ page })}
        />
      )
    }),
  )
