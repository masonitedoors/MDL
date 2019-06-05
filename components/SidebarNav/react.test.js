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
  it('should show the main menu labels when the expand button is clicked', async () => {
    const {
      container, getByTitle, queryByTitle, queryAllByTitle, queryByText,
    } = render(
      <SidebarNavLayout>Test</SidebarNavLayout>,
    )

    const toggle = queryByTitle('Show menu labels')
    expect(queryByTitle('Show menu labels')).toBeTruthy()
    expect(queryByTitle('Hide menu labels')).toBeFalsy()
    fireEvent.click(toggle)
    await queryByText('Hide menu labels')
    expect(queryByText('Show menu labels').innerHTML).toBe('Hide menu labels')
  })
})
