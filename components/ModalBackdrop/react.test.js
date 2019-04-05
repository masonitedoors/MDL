import { shallow } from 'enzyme'
import React from 'react'
import ModalBackdrop from './react'

describe('ModalBackdrop', () => {
  it('should render without crashing', () => {
    expect(
      shallow(
        <ModalBackdrop>
          <div>Test</div>
        </ModalBackdrop>,
      ),
    ).toMatchSnapshot()
  })
})
