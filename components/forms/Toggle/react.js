import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Toggle = ({ checked, disabled, onChange }) => (

  <label class="toggle" role="switch" onClick={() => !disabled && onChange()} onKeyPress={() => !disabled && onChange()}>
    <input class="toggle__input" type="checkbox" />
    <span class="toggle__track">
      <span class="toggle__knob"></span>
    </span>
  </label>

  <div
    role="checkbox"
    aria-checked={checked}
    tabIndex={0}
    onClick={() => !disabled && onChange()}
    onKeyPress={() => !disabled && onChange()}
    className={cx(['toggle', { 'toggle--disabled': disabled }])}
  >
    <input
      tabIndex="-1"
      className={cx(['toggle__input'])}
      type="checkbox"
      checked={checked}
      readOnly
    />
    <span className={s.toggle__slider} />
  </div>
)

Toggle.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

Toggle.defaultProps = {
  disabled: false,
  onChange: null,
  checked: false,
}

export default Toggle
