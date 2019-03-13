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
      checkedChoice: null
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
    it('should display the when clicking the dropdown button', () => {
     const radios = wrapper.find('li');         
     expect(radios.length).toBe(2);
    })
    it('should check direction of radio group', () => {
     expect(wrapper.find('li')).to.have.className('radio-group-row')
    })
  })
})
