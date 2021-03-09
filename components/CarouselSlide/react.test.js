import React from 'react'
import { mount } from 'enzyme'
import CarouselSlide from './react'

describe('CarouselSlide', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<CarouselSlide />)
  })

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
