// import React from 'react'
// import { mount } from 'enzyme'
// import Toggle from './react'

// describe('Toggle', () => {
//   let props
//   let wrapper

//   beforeEach(() => {
//     wrapper = mount(<Toggle />)
//   })

//   describe('Should render with default properties set when nothing is passed in', () => {
//     it('Should render correctly', () => {
//       expect(wrapper).toMatchSnapshot()
//     })

//     it('Should render with the className of "toggle" on the initial load', () => {
//       expect(wrapper.find('.toggle').length).toBe(1)
//     })

//     it('Should render the toggle switch in an unchecked state', () => {
//       expect(wrapper.find('.toggle__input').props().checked).toBe(false)
//     })
//   })

//   describe('Should render the component when properties are passed into it and the checked state is false', () => {
//     beforeEach(() => {
//       props = {
//         onChange: jest.fn(),
//         checked: false,
//         disabled: false,
//       }

//       wrapper = mount(<Toggle {...props} />)
//     })

//     it('Should render correctly', () => {
//       expect(wrapper).toMatchSnapshot()
//     })

//     it('Should change to a disabled state when the toggle div is clicked upon', () => {
//       wrapper.find('.toggle').simulate('click')
//       expect(props.onChange).toHaveBeenCalledTimes(1)
//       expect(wrapper.find('.toggle__input').filterWhere(item => item.prop('checked')).length).toBe(
//         1,
//       )
//     })

//     it('Should change to a disabled state when a key is pressed when inside the toggle div', () => {
//       const mockEvent = { target: { value: !props.value } }
//       wrapper.find('.toggle').prop('onKeyPress')(mockEvent)

//       expect(props.onChange).toHaveBeenCalledTimes(1)
//       expect(wrapper.find('toggle--disabled')).toBeTruthy()
//     })

//     it('Should render the toggle switch in an unchecked state', () => {
//       expect(wrapper.find('.toggle__input').props().checked).toBe(false)
//     })
//   })

//   describe('Should render the component when properties are passed into it and the checked state and checked state are true', () => {
//     beforeEach(() => {
//       props = {
//         onChange: jest.fn(),
//         checked: true,
//         disabled: true,
//       }

//       wrapper = mount(<Toggle {...props} />)
//     })

//     it('Should render correctly', () => {
//       expect(wrapper).toMatchSnapshot()
//     })

//     it('Should change to a non disabled state when the toggle div is clicked upon', () => {
//       wrapper.find('.toggle--disabled').simulate('click')
//       expect(props.onChange).toHaveBeenCalledTimes(0)
//     })

//     it('Should change to a disabled state when a key is pressed when inside the toggle div', () => {
//       const mockEvent = { target: { value: !props.value } }
//       wrapper.find('.toggle--disabled').prop('onKeyPress')(mockEvent)
//       expect(props.onChange).toHaveBeenCalledTimes(0)
//     })

//     it('Should render the toggle switch in an unchecked state', () => {
//       expect(wrapper.find('.toggle__input').props().checked).toBeTruthy()
//     })
//   })
// })
