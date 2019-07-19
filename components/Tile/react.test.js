import React from 'react'
import { mount } from 'enzyme'
import Tile from './react'

describe('Tile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Tile />)
  })

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
