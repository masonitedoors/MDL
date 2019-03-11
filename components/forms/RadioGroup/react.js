import React, { memo } from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'
import { React as Radio } from 'components/forms/RadioButton'

const RadioGroup = ({ choices = [], direction }) => {
  const radios = choices.map(props => <li className={direction === 'column' ? 'radio-group--column':''}><Radio {...props} /></li>)
  return <ul>{radios}</ul>
}

RadioGroup.PropTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  direction: PropTypes.oneOf['column','row']
}

RadioGroup.defaultProps = {
  choices: [ { label: 'Choice1', value: 'choice1', checked: true },
  { label: 'Choice2', value: 'choice2', checked: false }],
  direction: null
}

export default memo(RadioGroup)