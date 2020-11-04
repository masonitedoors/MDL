import React from 'react'
import {
  render, fireEvent,
} from '@testing-library/react'
import Flyout from './react'

describe('Flyout', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Flyout />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with content', () => {
    const { asFragment } = render(
      <Flyout
        heading="My heading"
        moreHeading={<button>A test button</button>}
        width={700}
      >
        <div>Some body content</div>
      </Flyout>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onClose', () => {
    const onClose = jest.fn()
    render(<Flyout onClose={onClose} />)
    const closeButton = document.querySelector('.close')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })
})
