import React from 'react'
import { mount } from 'enzyme'
import { JSDOM } from 'jsdom'
import FilterableSearch from './react'

const jsdom = new JSDOM('<!doctype html><html><body><div id="app">Mount here</div></body></html>')
const { window } = jsdom

describe('FilterableSearch', () => {
  let props
  let wrapper
  let instance

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

    instance = wrapper.instance()
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with user actions', () => {
    it('Should have an initial state with the "showFilters" set to "false"', () => {
      expect(instance.state.showFilters).toBe(false)
    })

    it('Should set the showFilters in the state to be false when the dropdownToggle button is clicked two times', () => {
      const dropDownToggleButton = wrapper.find('DropdownToggle').find('button').at(0)

      dropDownToggleButton.simulate('click')
      expect(instance.state.showFilters).toBeTruthy()

      dropDownToggleButton.simulate('click')
      expect(instance.state.showFilters).toBe(false)
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
