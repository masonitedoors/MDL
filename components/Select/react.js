import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactSelect } from 'react-select'
import styles from './index.module.scss'

export const Select = ({ value, onChange, options }) => (
  <ReactSelect {...{ value, onChange, options, classNamePrefix: 'mdl-select' }} />
)

export default Select

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.required,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
}

Select.defaultProps = {}
