import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import Datepicker from './react'
import storyStyles from './react.stories.module.scss'

const cx = classNames.bind(storyStyles)

storiesOf('Datepicker', module)
  .add('default', () => {
		const [effectiveDate, setDate] = useState(null)
		const handleChange = date => setDate(date);

    return (
			<>
				<div classNames={cx('date')}>
					<Datepicker
						selected={effectiveDate}
						placeholderText="Effective Date"
						onChange={handleChange}
					/>
				</div>
			</>
		)
	})