import React from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import './style.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

const Datepicker = ({ className, ...props }) => {
  const MyContainer = ({ className, children }) => {
    return (
      <div className='mdl-container-wrapper'>
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    )
  }
  return (
    <div>
      <DatePicker
				calendarContainer={MyContainer}
				{...props} 
			/>
    </div>
  )
}

export default Datepicker
