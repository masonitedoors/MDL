import React from 'react'
import { render } from '@testing-library/react'
import Counter from './index'

describe('Counter', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Counter value={5} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
