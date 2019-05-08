import React from 'react'
import { mount } from 'enzyme'
import { mAlertTriangle } from '@masonite/svg-icons'
import TextField from './react'

describe('TextField', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      value: '',
    }

    wrapper = mount(<TextField {...props} />)
  })

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have an active class when the input is focused', () => {
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('text-field--active'),
    ).toBe(false)
    wrapper
      .find('input')
      .props()
      .onFocus({ target: { value: '' } })
    wrapper.update()
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('text-field--active'),
    ).toBe(true)
  })

  it('should not contain the no-margin modifier when the component initially loads, as the "removeMargin" prop is defaulted to false', () => {
    expect(wrapper.find('.text-field--no-margin').length).toBe(0)
  })

  it('should be wrapped in a <Label> tag if a label is provided', () => {
    expect(wrapper.findWhere(n => n.name() === 'label').length).toBe(0)
    wrapper.setProps({ label: 'TextField Label' })
    expect(wrapper.findWhere(n => n.name() === 'label').length).toBe(1)
  })

  it('should invoke onBlur prop with the value and event when onBlur is invoked', () => {
    const mockEvent = { target: { value: '' } }
    wrapper
      .find('input')
      .props()
      .onBlur(mockEvent)
    expect(props.onBlur).toHaveBeenCalledTimes(1)
    expect(props.onBlur).toHaveBeenCalledWith('', mockEvent)
  })

  it('should invoke onFocus prop with the value and event when onFocus is invoked', () => {
    const mockEvent = { target: { value: '' } }
    wrapper
      .find('input')
      .props()
      .onFocus(mockEvent)
    expect(props.onFocus).toHaveBeenCalledTimes(1)
    expect(props.onFocus).toHaveBeenCalledWith('', mockEvent)
  })

  it('should invoke onChange prop with the value and event when onChange is invoked', () => {
    const mockEvent = { target: { value: 'Text' } }
    wrapper
      .find('input')
      .props()
      .onChange(mockEvent)
    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(props.onChange).toHaveBeenCalledWith('Text', mockEvent)
  })

  it('should render a trailing icon when trailingIcon has a value', () => {
    const mockSvgString = '<svg></svg>'
    expect(
      wrapper
        .findWhere(n => n.name() === 'TrailingIcon')
        .find('div')
        .props().dangerouslySetInnerHTML.__html,
    ).toBe(undefined)
    wrapper.setProps({ trailingIcon: mockSvgString })
    expect(
      wrapper
        .findWhere(n => n.name() === 'TrailingIcon')
        .find('div')
        .props().dangerouslySetInnerHTML.__html,
    ).toBe(mockSvgString)
  })

  it('should replace the trailingIcon with the error icon when the error prop is true', () => {
    const mockSvgString = '<svg></svg>'
    wrapper.setProps({ trailingIcon: mockSvgString, error: true })
    expect(
      wrapper
        .findWhere(n => n.name() === 'TrailingIcon')
        .find('div')
        .props().dangerouslySetInnerHTML.__html,
    ).toBe(mAlertTriangle)
  })

  it('Should set the no-margin modifier when the "removeMargin" prop is passed in as true', () => {
    wrapper.setProps({ removeMargin: true })
    expect(wrapper.find('.text-field--no-margin').length).toBe(1)
  })
})
