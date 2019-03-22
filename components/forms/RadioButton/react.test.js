import React from 'react'
import { mount } from 'enzyme'
import RadioButton from './react'

describe('RadioButton', () => {
  let props
  let wrapper
  let inputElem

  beforeEach(() => {
    props = {
      checked: false
    }
    wrapper = mount(<RadioButton {...props} />)
    inputElem = wrapper.find('input').at(0)
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Initial values for the radio component when it is created', () => {
    it('Should render with the default checked as undefined', () => {
      expect(inputElem.props().checked).toBe(false)
    })

    it('Should render the value as undefined if one is not passed in', () => {
      expect(inputElem.props().value).toEqual(undefined)
    })

    it('Should be null with the onClick and keypress events', () => {
      expect(inputElem.props().onClick).toEqual(null)
      expect(inputElem.props().onKeyPress).toEqual(null)
    })
  })

  describe('The values of the radio input should be updated when props are passed in', () => {
    let props
    let wrapper
    let inputElem

    beforeEach( () => {
      props = {
        ...props,
        checked: false,
        onChange: jest.fn(),
        value: 'true',
      }

      wrapper = mount(<RadioButton {...props} />)
      inputElem = wrapper.find('input').at(0)
    })

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should render with the default checked status of false when the checked is passed in as "false"', () => {
      expect(inputElem.props().checked).toBe(props.checked)
    })

    it('Should render with the value property set to the passed in value property', () => {
      expect(inputElem.props().value).toEqual(props.value)
    })

    describe('with user actions', () => {
      it('should call onChange on click', () => {
        inputElem.simulate('click')
        expect(props.onChange).toHaveBeenCalledTimes(1)
      })

      it('Should call onChange when the input field triggers an "onChange" event', () => {
        const mockEvent = { target: { value: !props.value }}
        inputElem.prop('onKeyPress')(mockEvent)
        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith(mockEvent)
      })
    })

  })
})
