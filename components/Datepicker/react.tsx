import * as React from 'react'
import classNames from 'classnames/bind'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import styles from './style.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

const cx = classNames.bind(styles)

type DatepickerProps = {
  props: React.ComponentPropsWithoutRef<DatePicker>
}

const Datepicker = (props: DatepickerProps) => {
  const MyContainer = ({ className, children }) => {
    return (
      <div className={cx('mdl-container-wrapper')}>
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    )
  };
  return (
    <DatePicker
      calendarContainer={MyContainer}
      formatWeekDay={(day) => day[0]}
      {...props}
    />
  )
}
// Datepicker.defaultProps = defaultProps;

export default Datepicker
