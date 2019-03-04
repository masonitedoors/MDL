import React, { memo } from 'react'
import propTypes from 'prop-types'
import s from './style.module.scss'


const Radio = ({ checked, onChange }) => (
  <div
    role="radio"
    aria-checked={checked}
    tabIndex={0}
    className={s.radio}
    onClick={onChange}
    onKeyPress={onChange}
  >
    <input className={s['radio-input']} type="radio" checked={checked} readOnly />
  </div>
)

Radio.propTypes = {
  checked: propTypes.bool.isRequired,
  disabled: propTypes.bool,
  onChange: propTypes.func,
}

Radio.defaultProps = {
  disabled: false,
  onChange: null,
}

export default memo(Radio)
