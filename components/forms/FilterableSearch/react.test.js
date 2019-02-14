import React from 'react'
import { shallow, mount } from 'enzyme'
import FilterableSearch from './react'

describe('FilterableSearch', () => {
  let props
  let instance
  let wrapper

  beforeEach(() => {
    props = {
      handleFilterChange: jest.fn(),
      handleSearch: jest.fn(),
      filterChoices: [
        { label: 'Filter 1', value: 'FILTER1', checked: false },
        { label: 'Filter 2', value: 'FILTER2', checked: false },
      ],
    }

    wrapper = mount(<FilterableSearch {...props} />)
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with user actions', () => {
    it('should display the filter options when clicking the dropdown button', () => {
      expect(wrapper.find('.FilterableSearch__dropdown-menu')).toHaveLength(0)
      wrapper.find('DropdownToggle').simulate('click')
      expect(wrapper.find('.FilterableSearch__dropdown-menu')).toHaveLength(1)
      wrapper.find('DropdownToggle').simulate('click')
      expect(wrapper.find('.FilterableSearch__dropdown-menu')).toHaveLength(0)
    })
    it('should trigger search action when the user hits enter in input or clicks SearchButton', () => {
      expect(props.handleSearch).toBeCalledTimes(0)
      wrapper.find('SearchButton').simulate('click')
      expect(props.handleSearch).toBeCalledTimes(1)
      wrapper.find('.input').simulate('keyDown', { keyCode: 1 })
      wrapper.find('.input').simulate('keyDown', { keyCode: 13 })
      expect(props.handleSearch).toBeCalledTimes(2)
    })
  })
})
