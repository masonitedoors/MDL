import React from 'react'
import DatePicker from 'react-datepicker'
import './style.module.scss'

const Datepicker = ({
	selected,
	onChange,
	placeholderText,
	disabled,
	...props
}) => {
	return (
		<div>
			<DatePicker
				selected={selected}
				onChange={onChange}
				disabled={disabled}
				placeholderText={placeholderText}
				{...props}
			/>
		</div>
	)
}

export default Datepicker