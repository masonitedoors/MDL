import React from 'react'
import {
  render, fireEvent,
} from '@testing-library/react'
import Toast from './react'

describe('Toast', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Toast />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with content', () => {
    const { asFragment } = render(
      <Toast
        heading="My heading"
      >
        <div>Some body content</div>
      </Toast>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
