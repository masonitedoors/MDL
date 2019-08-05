import React from 'react'
import { shallow } from 'enzyme'
import {
  render, fireEvent, wait, waitForElement, cleanup,
} from '@testing-library/react'
import SidebarNavLayout, { SidebarNav } from './react'

describe('SidebarNav', () => {
  afterEach(cleanup)
  describe('with renders', () => {
    it('should render without crashing', () => {
      expect(shallow(<SidebarNav />)).toMatchSnapshot()
      expect(
        shallow(
          <SidebarNavLayout>
            <article />
          </SidebarNavLayout>,
        ),
      ).toMatchSnapshot()
    })
  })
})
