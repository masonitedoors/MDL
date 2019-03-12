import React, { memo } from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'
import { React as Radio } from 'components/forms/RadioButton'

const RadioGroup = ({ choices = [], direction }) => {
  const radios = choices.map(props => <li key={props.value} className={direction === 'column' ? 'radio-group--column':''}><Radio onChange = {() => props.value } {...props} /></li>)
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
  choices: [ { label: 'Choice1', value: 'choice1', checked: false },
  { label: 'Choice2', value: 'choice2', checked: true }],
  direction: null
}

export default memo(RadioGroup)

//click events which will update my state - it will go under <Radio > Ln7