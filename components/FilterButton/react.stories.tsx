import React from 'react'
import FilterButton, { FilterButtonProps } from './react'
import { Meta, Story } from '@storybook/react'
import { mCategories } from '@masonite/svg-icons'

const Template: Story<FilterButtonProps> = (props: FilterButtonProps) => {
  return <FilterButton {...props} />
}

export default { title: 'FilterButton' } as Meta

export const Primary = Template.bind({})
Primary.args = {
  svg: mCategories,
  valueDisplay: 'Current value',
  placeholder: 'Thing Type',
  narrow: false,
  className: 'none',
}
