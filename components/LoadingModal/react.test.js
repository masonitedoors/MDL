import { shallow } from 'enzyme'
import React from 'react'
import LoadingModal from './react'

describe('LoadingModal', () => {
  it('should render without crashing', () => {
    expect(
      shallow(
        <LoadingModal>
        </LoadingModal>,
      ),
    ).toMatchSnapshot()
  })
})
