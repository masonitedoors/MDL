import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import StatusIndicator, { handleOnClick } from 'components/StatusIndicator'

describe('When the component is created', () => {
  let props
  let wrapper
  let instance

  beforeEach(() => {
    props = {
      handleStatusClick: jest.fn(),
      readOnly: false,
      status: 'active',
    }

    wrapper = shallow(
      <StatusIndicator {...props} />,
    )

    instance = wrapper.instance()
  })

  it('Renders as expected', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Should trigger the handleStatusClick if the status indicator is not set to readonly', () => {
    handleOnClick('test', false, props.handleStatusClick)

    expect(props.handleStatusClick).toHaveBeenCalledTimes(1)
    expect(props.handleStatusClick).toHaveBeenCalledWith('test')
  })

  it('Should not trigger the handleStatusClick if the status indicator is set to readonly', () => {
    handleOnClick('test', true, props.handleStatusClick)

    expect(props.handleStatusClick).toHaveBeenCalledTimes(0)
  })
})
