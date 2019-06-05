import React from 'react'
import { shallow } from 'enzyme'
import {
  render, fireEvent, wait, waitForElement,
} from '@testing-library/react'
import SidebarNavLayout, { SidebarNav } from './react'

describe('SidebarNav', () => {
  //   describe('with renders', () => {
  //     it('should render without crashing', () => {
  //       expect(shallow(<SidebarNav />)).toMatchSnapshot()
  //       expect(
  //         shallow(
  //           <SidebarNavLayout>
  //             <article />
  //           </SidebarNavLayout>,
  //         ),
  //       ).toMatchSnapshot()
  //     })
  //   })
  it('should show the main menu labels when the expand button is clicked', async () => {
    const {
      container, getByTitle, queryByTitle, queryAllByTitle,
    } = render(<SidebarNav />)

    console.log(getByTitle('Show menu labels').innerHTML)
    expect(queryByTitle('Show menu labels')).toBeTruthy()
    expect(queryByTitle('Hide menu labels')).toBeFalsy()
    // console.log(queryByTitle('Show menu labels').firstChild)
    fireEvent.click(queryByTitle('Show menu labels').firstChild)
    await waitForElement(() => expect(queryByTitle('Hide menu labels')).toBeTruthy())
    expect(queryAllByTitle('Show menu labels')).toHaveLength(0)
  })
})
