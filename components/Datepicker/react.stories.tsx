import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import Datepicker from './react'


storiesOf('Datepicker', module)
  .add('default', () => {
		const [effectiveDate, setDate] = useState(null)

    return (
			<>
				<div>
					<Datepicker
						selected={effectiveDate}
						placeholderText="Effective Date"
						onChange={setDate}
					/>
				</div>
			</>
		)
	})