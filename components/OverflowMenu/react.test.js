import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Button from 'components/Button/react'
import { OverflowMenu } from './react'

describe('When the component is created', () => {
  let wrapper
  let instance

  beforeEach(() => {
    wrapper = shallow(
      <OverflowMenu>
        <p>This is a test</p>
        <Button variant="default" fullWidth uppercase>
          My First Button
        </Button>
        <Button variant="default" fullWidth uppercase>
          My Second Button
        </Button>
        <Button variant="default" fullWidth uppercase>
          My Third Button
        </Button>
      </OverflowMenu>,
    )

    instance = wrapper.instance()
  })

  it('Renders as expected', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Should not display the overflow menu on the initial state', () => {
    expect(wrapper.find('overflow-menu__actions').length).toBe(0)
  })

  it('Should not contain the overflow button action color change on initial state', () => {
    expect(wrapper.find('.overflow-menu__svg--opened').length).toBe(0)
    expect(wrapper.find('.overflow-menu__svg').length).toBe(1)
  })

  it('Should contain the overflow button action color if the button is clicked', () => {
    instance.toggleOverflowMenu()
    expect(wrapper.find('.overflow-menu__svg--opened').length).toBe(1)
    expect(wrapper.find('.overflow-menu__svg').length).toBe(0)
  })

  it('Should toggle the overflow menu if clicked multiple times', () => {
    instance.toggleOverflowMenu()
    expect(wrapper.find('.overflow-menu__actions').length).toBe(1)
    expect(instance.state.displayOverflowMenuActions).toBeTruthy()

    instance.toggleOverflowMenu()
    expect(wrapper.find('.overflow-menu__actions').length).toBe(0)
    expect(instance.state.displayOverflowMenuActions).toBe(false)
  })

  it('Should display the list of overflow menu actions when the overflow button is clicked', () => {
    wrapper.find('.overflow-menu__button').simulate('click')
    expect(wrapper.find('.overflow-menu__actions').length).toBe(1)
  })

  describe('The overflow menu actions functionality when they are visibile', () => {
    beforeEach(() => {
      instance.toggleOverflowMenu()
    })

    it('Should contain all of the children passed in as props', () => {
      expect(wrapper.find('.overflow-menu__actions').children().length).toBe(4)
    })

    it('Should hide the overflow menu when a button is clicked within it (with the assertion the event is a button)', () => {
      const mockEvent = {
        event: {
          target: {
            matches: () => true,
          },
        },
      }

      instance.checkToCloseOverflowMenu(mockEvent.event)
      expect(instance.state.displayOverflowMenuActions).toBe(false)
    })

    it('Should hide the overflow menu when a button is clicked within it (with the assertion the event is not a button)', () => {
      const mockEvent = {
        event: {
          target: {
            matches: () => false,
          },
        },
      }

      instance.checkToCloseOverflowMenu(mockEvent.event)
      expect(instance.state.displayOverflowMenuActions).toBeTruthy()
    })

    it('Should close the overflow menu actions if the "handleClickOutside" method is fired and the overflow menu is open', () => {
      instance.handleClickOutside()
      expect(instance.state.displayOverflowMenuActions).toBe(false)
    })

    it('Should not open the overflow menu actions if the "handleClickOutside" method is fired and the overflow menu is already closed', () => {
      instance.setState({ displayOverflowMenuActions: false })
      instance.handleClickOutside()
      expect(instance.state.displayOverflowMenuActions).toBe(false)
    })
  })
})
