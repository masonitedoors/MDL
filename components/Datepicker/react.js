import React from 'react'
import DatePicker from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Datepicker = ({
	calendarClassName,
	className,
	...props
}) => {
	return (
		<div className={cx('datepicker')}>
			<DatePicker
				className
				colorPrimary="#99c221"
				calendarClassName={cx('calendar')}
				{...props}
			/>
		</div>
	)
}

export default Datepicker