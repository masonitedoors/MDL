import React from 'react'
import { mount } from 'enzyme'
import { JSDOM } from 'jsdom'
import RadioGroup from './react'

const jsdom = new JSDOM('<!doctype html><html><body><div id="app">Mount here</div></body></html>')
const { window } = jsdom

describe('RadioButton', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      checked: jest.fn(),
      onChange: jest.fn(),
      onClick: jest.fn(),
      direction: 'row',
      choices: [
        {
          label: 'Filter 1',
          value: 'FILTER1',
        },
        {
          label: 'Filter 2',
          value: 'FILTER2',
        },
      ],
      checkedChoice: null,
    }

    wrapper = mount(<RadioGroup {...props} />, {
      attachTo: window.document.querySelector('#app'),
    })
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with user actions', () => {
    it('should have the correct amount of radio buttons', () => {
      const radios = wrapper.find('li')
      expect(radios.length).toBe(2)
    })
  })
})
