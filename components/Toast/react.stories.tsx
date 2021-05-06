import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { mCheck } from '@masonite/svg-icons'
import { Toast, toastContainerProps } from './react'
import { React as Button } from '../Button'
import { Meta, Story } from '@storybook/react'

const Template: Story<any> = ({ includeButtons, ...props }: { includeButtons: boolean }) => {
  const buttonsOverride = includeButtons
    ? {
      buttons: (closeToast: () => void) => ([
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

  return <Button {...{ onClick }}>Show</Button>
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
} as Meta

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
