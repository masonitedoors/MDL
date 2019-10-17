import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs, array, boolean, number,
} from '@storybook/addon-knobs'
import Pagination from './react'

const props = () => ({
  disabled: boolean('Disable backward/forward buttons (disabled)', false),
  page: number('The current page (page)', 1),
  total: number('Total number of items (totalItems)', 103),
  pageSize: number('Number of items per page (pageSize)', 10),
  pageSizes: array('Choices of `pageSize` (pageSizes)', [10, 20, 30, 40, 50]),
  onChange: action('onChange'),
})

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('default', () => <Pagination {...props()} />)
