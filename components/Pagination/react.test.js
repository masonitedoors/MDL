import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Pagination from './react'

describe('Pagination', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      page: 1,
      totalItems: 103,
      itemsPerPage: 10,
      onChange: jest.fn,
    }
    wrapper = shallow(<Pagination {...props} />)
  })

  it('Should render the component without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Should display the correct number of visible pages based on total items and items per page', () => {
    expect(wrapper.find('.pagination__nav-item').length).toBe(7)
  })
})
