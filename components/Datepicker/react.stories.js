import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import Datepicker from './react'

storiesOf('Datepicker', module)
  .add('default', () => {
		const [effectiveDate, setDate] = useState(null)
		const handleChange = date => setDate(date);

    return (
			<>
				<Datepicker
					value={effectiveDate}
					inputPlaceholder="Effective Date"
					onChange={handleChange}
					calendarPopperPosition='bottom'
				/>
			</>
		)
	})