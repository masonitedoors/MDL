import React from 'react'
import Calendar from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Datepicker = ({
	value,
	onChange,
	inputPlaceholder,
	disabled,
	calendarPopperPosition,
	calendarClassName,
	...props
}) => {
	return (
		<div className={cx('datepicker')}>
			<Calendar
				value={value}
				onChange={onChange}
				disabled={disabled}
				inputPlaceholder={inputPlaceholder}
				calendarPopperPosition={calendarPopperPosition}
				colorPrimary="#99c221"
				calendarClassName={cx('calendar')}
				{...props}
			/>
		</div>
	)
}

export default Datepicker