import React from 'react'
import { mount } from 'enzyme'
import RadioGroup from './react'


describe('RadioButton', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      checked: jest.fn(),
      onChange: jest.fn(),
      onClick: jest.fn(),
      choices: []
    }

    wrapper = mount(<RadioGroup {...props} />)
  })

  describe('The default state of the component with minimal required items passed in', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should contain no list items if the choices passed in are an empty array', () => {
      expect(wrapper.find('li').length).toBe(0)
    })
  })

  describe('The radio buttons should render with passed in props and using the default direction', () => {
    let listItems

    beforeEach(() => {
      props = {
        ...props,
        choices: [
          {
            label: 'Filter 1',
            value: 'FILTER1',
          },
          {
            label: 'Filter 2',
            value: 'FILTER2',
          },
        ]
      }
      wrapper = mount(<RadioGroup {...props} />)
      listItems = wrapper.find('li')
    })

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should render li element equivalent to the number of choices passed in', () => {
      expect(listItems.length).toBe(props.choices.length)
    })

    it('Should render with no className on the list items if using the default direction', () => {
      wrapper.find('li').forEach( listItem => {
        expect(listItem.props().className).toBe('')
      })
    })

    it('Should render each list item with the key being the value passed into them from the choices', () => {
      wrapper.find('li').forEach( (listItem, index) => {
        expect(listItem.key()).toBe(props.choices[index].value)
      })
    })
  });

  describe('The radio buttons should render with passed in props and a direction set to anything other than "column"', () => {
    beforeEach(() => {
      props = {
        ...props,
        direction: '',
        choices: [
          {
            label: 'Filter 1',
            value: 'FILTER1',
          },
          {
            label: 'Filter 2',
            value: 'FILTER2',
          },
          {
            label: 'Filter 3',
            value: 'FILTER 3'
          }
        ]
      }
      wrapper = mount(<RadioGroup {...props} />)
    })

    it('Should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should render li element equivalent to the number of choices passed in', () => {
      expect(wrapper.find('li').length).toBe(props.choices.length)
    })

    it('Should render with no className on the list items if using the default direction', () => {
      wrapper.find('li').forEach(listItem => {
          expect(listItem.props().className).toBe('radio-group__row')
        })
    })
  })
})
