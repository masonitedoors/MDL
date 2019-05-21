import React from 'react'
import { shallow } from 'enzyme'
import TableBulkEditPopover from './react'

describe('TableBulkEditPopover', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
     direction: 'left',
     childern: 'field',
     cell: '4.2'
    }

    wrapper = shallow(<TableBulkEditPopover {...props} />)
   
  })

  describe('rendering with defaults', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should return cell value',()=>{
     expect (wrapper.find('.popover-wrapper--cell').text()).toBe('4.2')
    })
    it('should return left direction class',()=>{
      expect (wrapper.find('.popover-wrapper--position-left').length).toBe(1)
    })

    it('should return top direction class',()=>{
      props = {
        ...props,
        direction: 'top',
       }
   
       wrapper = shallow(<TableBulkEditPopover {...props} />)
      expect (wrapper.find('.popover-wrapper--position-top').length).toBe(1)
    })
  })
})
