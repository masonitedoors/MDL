import React from 'react'
import { mount } from 'enzyme'
import WizardModal from './react'

describe('WizardModal', () => {
  it('should render without crashing', () => {
    expect(
      mount(
        <WizardModal>
          <WizardModal.Header title="Title" />
          <WizardModal.Body>Body</WizardModal.Body>
          <WizardModal.Footer>Footer</WizardModal.Footer>
        </WizardModal>,
      ),
    ).toMatchSnapshot()
  })
})
