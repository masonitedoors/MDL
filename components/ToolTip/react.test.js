import React from 'react'
import { shallow } from 'enzyme'
import ToolTip from './react'

describe('ToolTip', () => {
  let props
  let wrapper
  let instance

  beforeEach(() => {
    props = {
      message: 'This is a sample message'
    }

    wrapper = shallow(<ToolTip {...props} />)
    instance = wrapper.instance()
  })

  it('Should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should toggle the displayTooltip when triggered', () => {
    expect(instance.state.displayTooltip).toBeFalsy()

    instance.changeTooltipDisplay()
    expect(instance.state.displayTooltip).toBeTruthy()

    instance.changeTooltipDisplay()
    expect(instance.state.displayTooltip).toBeFalsy()
  })
})
