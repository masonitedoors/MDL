import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { mCheck } from '@masonite/svg-icons'
import { Toast, toastContainerProps } from './react'
import Button from '../Button/react'

const Template = ({ includeButtons, ...props }) => {
  const buttonsOverride = includeButtons
    ? {
      buttons: closeToast => ([
        <Button key="close" onClick={closeToast}>
          Close
        </Button>,
        <Button key="nothing" onClick={() => { return false }}>
          Do Nothing
        </Button>,
      ])
    } : null

  const onClick = () => {
    toast(
      <Toast {...{ ...props, ...buttonsOverride }} />,
      { autoClose: false, closeOnClick: false }
    )
  }

  return <Button {...{ onClick }}>SHOW</Button>
}

export default {
  title: 'Toast',
  component: Toast,
  decorators: [Story => (
    <>
      <Story />
      <ToastContainer {...toastContainerProps} />
    </>
  )]
}

export const IconHeading = Template.bind({})
IconHeading.args = {
  heading: 'My Heading',
  headingIcon: mCheck,
  children: 'You have updated DistributorA with 12 discount groups.',
  includeButtons: false,
}

export const EmojiHeading = Template.bind({})
EmojiHeading.args = {
  heading: '🧐 Wait a sec',
  children: 'Some filter changes you made require updates to related filters. Some options may not be available. Please update those affected filters indicated in red.',
  includeButtons: false,
}
