import React from 'react'
import { shallow } from 'enzyme'
import PaginationDots, { Dot } from './react'

describe('PaginationDots', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      activePage: 2,
      totalPages: 5,
    }

    wrapper = shallow(<PaginationDots {...props} />)
  })

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should only have one active page', () => {
    expect(wrapper.findWhere(n => n.props().filled).length).toBe(1)
  })

  it('should have a filled prop set to true on the correct dot', () => {
    expect(
      wrapper
        .find('Dot')
        .at(2)
        .props().filled,
    ).toBe(true)
  })
})

describe('Dot', () => {
  it('should have filled class applied', () => {
    const wrapper = shallow(<Dot filled />)
    expect(wrapper.hasClass('pagination-dots__dot--filled')).toBe(true)
  })
})
