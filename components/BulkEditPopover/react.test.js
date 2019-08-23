import React from 'react'
import {
  render, fireEvent, cleanup, waitForElement,
} from '@testing-library/react'
import BulkEditPopover from './BulkEditPopover'

describe('BulkEditPopover', () => {
  it('should render without crashing', () => {
    expect(render(<BulkEditPopover />)).toMatchSnapshot()
  })
})
