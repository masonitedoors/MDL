import React from 'react'
import { mount } from 'enzyme'
import { JSDOM } from 'jsdom'
import FilterableSearch from './react'

const jsdom = new JSDOM('<!doctype html><html><body><div id="app">Mount here</div></body></html>')
const { window } = jsdom

describe('FilterableSearch', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      onFilterChange: jest.fn(),
      onInputChange: jest.fn(),
      onSubmit: jest.fn(),
      value: '',
      filterChoices: [
        { label: 'Filter 1', value: 'FILTER1', checked: false },
        { label: 'Filter 2', value: 'FILTER2', checked: false },
      ],
    }

    wrapper = mount(<FilterableSearch {...props} />, {
      attachTo: window.document.querySelector('#app'),
    })
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with user actions', () => {
    it('should display the filter options when clicking the dropdown button', () => {
      expect(wrapper.find('DropdownMenu').prop('show')).toEqual(false)
      wrapper.find('DropdownToggle').simulate('click')
      expect(wrapper.find('DropdownMenu').prop('show')).toEqual(true)
      wrapper.find('DropdownToggle').simulate('click')
      expect(wrapper.find('DropdownMenu').prop('show')).toEqual(false)
    })
    it('should trigger search action when the user hits enter in input or clicks SearchButton', () => {
      expect(props.onSubmit).toBeCalledTimes(0)
      wrapper.find('SearchButton').simulate('click')
      expect(props.onSubmit).toBeCalledTimes(1)
      wrapper.find('.text-field__input').simulate('keyDown', { keyCode: 1 }) // not Enter key
      wrapper.find('.text-field__input').simulate('keyDown', { keyCode: 13 }) // Enter key
      expect(props.onSubmit).toBeCalledTimes(2)
    })
  })
})
