import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Toggle = ({
  checked, disabled, icon, onChange, large,
}) => (
  <div
    aria-checked={checked}
    className={cx(['toggle', { 'toggle--large': large }])}
    onClick={() => !disabled && onChange()}
    onKeyPress={() => !disabled && onChange()}
    role="switch"
    tabIndex={0}
  >
    <input
      checked={checked}
      className={s.toggle__input}
      disabled={disabled}
      readOnly
      tabIndex="-1"
      type="checkbox"
    />
    <span className={s.toggle__track} aria-hidden="true">
      <span className={s.toggle__knob} dangerouslySetInnerHTML={{ __html: icon }} />
      {large && (
        <>
          <span className={s['toggle__label-on']}>On</span>
          <span className={s['toggle__label-off']}>Off</span>
        </>
      )}
    </span>
  </div>
)

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  large: PropTypes.bool,
}

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  icon: null,
  onChange: null,
  large: false,
}

export default Toggle
