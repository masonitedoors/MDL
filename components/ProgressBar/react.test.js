import React from 'react'
import { shallow } from 'enzyme'
import {
  render, fireEvent, wait, waitForElement, cleanup,
} from '@testing-library/react'
import ProgressBar from './react'

describe('ProgressBar', () => {
  afterEach(cleanup)
  describe('with renders', () => {
    it('should render without crashing', () => {
      expect(shallow(<ProgressBar />)).toMatchSnapshot()
    })
  })
})
