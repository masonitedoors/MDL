import React from 'react'
import { mount } from 'enzyme'
import { JSDOM } from 'jsdom'
import RadioButton from './react'

const jsdom = new JSDOM('<!doctype html><html><body><div id="app">Mount here</div></body></html>')
const { window } = jsdom

describe('RadioButton', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      checked: true,
      onChange: jest.fn(),
      value: 'true',
      name: 'radio'
    }

    wrapper = mount(<RadioButton {...props} />, {
      attachTo: window.document.querySelector('#app'),
    })
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with user actions', () => {
    it('should display the when clicking the radio button', () => {
      wrapper.find('input').simulate('click');
      expect(wrapper.find('input').prop('value')).toEqual('true');
    })
  })
})
