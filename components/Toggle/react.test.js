import React from 'react'
import { shallow } from 'enzyme'
import { mVolume1 } from '@masonite/svg-icons'
import Toggle from './react'

describe('Toggle', () => {
  let props
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Toggle />)
  })

  describe('rendering with defaults', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render with the className of "toggle" on the initial load', () => {
      expect(wrapper.find('.toggle').length).toBe(1)
    })

    it('should render the input in an unchecked state', () => {
      expect(wrapper.find('.toggle__input').props().checked).toBe(false)
    })
  })

  describe('rendering with props', () => {
    beforeEach(() => {
      props = {
        onChange: jest.fn(),
      }

      wrapper = shallow(<Toggle {...props} />)
    })

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have a checked input when checked is true', () => {
      wrapper.setProps({ checked: true })
      expect(wrapper.find('.toggle__input').props().checked).toBe(true)
    })

    it('should call onChange when the component is clicked', () => {
      wrapper.simulate('click')
      expect(props.onChange).toHaveBeenCalledTimes(1)
    })

    it('should call onChange when the component has a keypress event', () => {
      wrapper.simulate('keypress')
      expect(props.onChange).toHaveBeenCalledTimes(1)
    })

    it('should not call onChange when disabled and clicked', () => {
      wrapper.setProps({ disabled: true })
      wrapper.simulate('click')
      expect(props.onChange).toHaveBeenCalledTimes(0)
    })

    it('should not call onChange when disabled and has a keypress event', () => {
      wrapper.setProps({ disabled: true })
      wrapper.simulate('keypress')
      expect(props.onChange).toHaveBeenCalledTimes(0)
    })

    it('should have on/off labels when large and checked', () => {
      expect(wrapper.find('.toggle__label-on').length).toBe(0)
      wrapper.setProps({ large: true })
      expect(wrapper.find('.toggle__label-on').length).toBe(1)
    })

    it('should display icon when icon prop is used', () => {
      const icon = '<svg></svg>'
      wrapper.setProps({ large: true, icon })
      expect(wrapper.find('.toggle__knob').html()).toContain('<svg></svg>')
    })

    it('should have large modifier class when large', () => {
      wrapper.setProps({ large: true })
      expect(wrapper.find('.toggle--large').length).toBe(1)
    })
  })
})
