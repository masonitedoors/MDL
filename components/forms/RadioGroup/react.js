import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { React as Radio } from 'components/forms/RadioButton'
import s from './style.module.scss'

const RadioGroup = ({
  checkedChoice, choices, direction, onChange,
}) => {
  const radios = choices.map(({ label, value }) => (
    <li key={value} className={direction === 'column' ? 'radio-group--column' : ''}>
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
  direction: PropTypes.oneOf[('column', 'row')],
  onChange: PropTypes.func.isRequired,
}

RadioGroup.defaultProps = {
  checkedChoice: null,
  direction: null,
}

export default memo(RadioGroup)

// click events which will update my state - it will go under <Radio > Ln7
