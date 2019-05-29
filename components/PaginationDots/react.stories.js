import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'
import PaginationDots from './react'
import Readme from './react.README.md'

storiesOf('PaginationDots', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    const activePage = number('Active Page', 1)
    const totalPages = number('Total Pages', 5)

    return <PaginationDots activePage={activePage} totalPages={totalPages} />
  })
