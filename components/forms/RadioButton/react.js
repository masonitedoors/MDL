import React, { memo } from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const Radio = ({ checked, onChange, value }) => (
  <div role="radio" aria-checked={checked} tabIndex={0} className={s.radio}>
    <input
      onClick={onChange}
      onKeyPress={onChange}
      key={value}
      className={s.radio__input}
      type="radio"
      checked={checked}
      value={value}
      readOnly
    />
  </div>
)

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
}

Radio.defaultProps = {
  onChange: null,
  name: 'radio',
  value: null,
}

export default memo(Radio)
