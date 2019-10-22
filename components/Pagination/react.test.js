import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Pagination from './react'

describe('Pagination', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      page: 4,
      totalItems: 103,
      itemsPerPage: 10,
      onChange: jest.fn(),
    }
    wrapper = shallow(<Pagination {...props} />)
  })

  it('Should render the component without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Should display the correct number of visible pages based on total items and items per page', () => {
    expect(wrapper.find('.pagination__nav-item').length).toBe(10)
  })

  it('Should return the correct page number when a user clicks a specific page', () => {
    const buttonPage3 = wrapper.find('button[aria-label="Page 3"]')
    buttonPage3.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(props.onChange).toHaveBeenCalledWith(3)
  })

  describe('When the first page is active', () => {
    let prevButton
    let nextButton

    beforeEach(() => {
      props = {
        ...props,
        page: 1,
      }
      wrapper = shallow(<Pagination {...props} />)
      prevButton = wrapper.find('.pagination__nav-item-prev Button')
      nextButton = wrapper.find('.pagination__nav-item-next Button')
    })

    it('Should disable the `prev` page button', () => {
      expect(prevButton.props().disabled).toBe(true)
    })

    it('Should enable the `next` page button', () => {
      expect(nextButton.props().disabled).toBe(false)
    })
  })

  describe('When the last page is active', () => {
    let prevButton
    let nextButton

    beforeEach(() => {
      props = {
        ...props,
        page: 11,
      }
      wrapper = shallow(<Pagination {...props} />)
      prevButton = wrapper.find('.pagination__nav-item-prev Button')
      nextButton = wrapper.find('.pagination__nav-item-next Button')
    })

    it('Should enable the `prev` page button', () => {
      expect(prevButton.props().disabled).toBe(false)
    })

    it('Should disable the `next` page button', () => {
      expect(nextButton.props().disabled).toBe(true)
    })
  })
})
