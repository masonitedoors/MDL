import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { React as Radio } from 'components/Radio'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const RadioGroup = ({
  checkedChoice, choices, row, onChange,
}) => {
  const radios = choices.map(({ label, value }) => (
    <li key={value} className={cx(['radio-group__li'])}>
      <Radio
        checked={checkedChoice === value}
        onClick={onChange}
        onChange={onChange}
        value={value}
        label={label}
      />
    </li>
  ))
  return <ul className={cx(['radio-group', row && 'radio-group--row'])}>{radios}</ul>
}

RadioGroup.propTypes = {
  checkedChoice: PropTypes.string,
  row: PropTypes.bool,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}

RadioGroup.defaultProps = {
  checkedChoice: null,
  row: false,
}

export default memo(RadioGroup)
