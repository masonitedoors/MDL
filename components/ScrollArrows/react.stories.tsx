import React from 'react'
import { ScrollLeft, ScrollRight } from './react'
import { Meta, Story } from '@storybook/react'
import { useState } from '@storybook/client-api'

const Template: Story<any> = () => {
  const [value, setValue] = useState<number>(0)
  const onClick = (delta: number) => setValue(value + delta)

  return (
    <div
      style={{
        width: 500,
        height: 200,
        border: 'solid 1px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ScrollLeft onClick={onClick} />
      Value: {value}
      <ScrollRight onClick={onClick} />
    </div>
  )
}

export default { title: 'ScrollArrow' } as Meta

export const Primary = Template.bind({})
Primary.args = {}
