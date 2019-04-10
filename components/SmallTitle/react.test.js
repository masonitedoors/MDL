import React from 'react'
import { shallow } from 'enzyme'
import SmallTitle from './react'

describe('SmallTitle', () => {
  it('should render without crashing', () => {
    expect(shallow(<SmallTitle>Title</SmallTitle>)).toMatchSnapshot()
  })
})
