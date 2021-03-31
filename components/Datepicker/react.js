import React from 'react'
import classNames from 'classnames/bind'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import styles from './style.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

const cx = classNames.bind(styles)

const Datepicker = ({ className, ...props }) => {
  const MyContainer = ({ className, children }) => {
    return (
      <div className={cx('mdl-container-wrapper')}>
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
