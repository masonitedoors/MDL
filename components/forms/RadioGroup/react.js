import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { React as Radio } from 'components/forms/RadioButton'
import s from './style.module.scss'

const RadioGroup = ({
  checkedChoice, choices, direction, onChange,
}) => {
  const radios = choices.map(({ label, value }) => (
    <li key={value} className={direction === 'column' ? '' : s['radio-group-row']}>
      <Radio
        checked={checkedChoice === value}
        onClick={value => onChange(value)}
        onChange={value => onChange(value)}
        label={label}
        value={value}
      />
    </li>
  ))
  return <ul>{radios}</ul>
}

RadioGroup.propTypes = {
  checkedChoice: PropTypes.string,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.string,
}

RadioGroup.defaultProps = {
  checkedChoice: null,
  direction: 'column',
}

export default memo(RadioGroup)
