import React from 'react'
import mount from 'enzyme'
import ColorBlock from './react'

describe('ColorBlock', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ColorBlock />)
  })

  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot()
  })
})
