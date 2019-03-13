import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import s from './style.module.scss'


const Toggle = ({
  checked, disabled, onChange,
}) => (

  <div
    role="checkbox"
    aria-checked={checked}
    tabIndex={0}
    onClick={onChange}
    onKeyPress={onChange}
    className={s.toggle}
  >
    <label className={s.toggle__switch}>
      <input className={s.toggle__input} type="checkbox" />
      <span className={s.toggle__slider} />
    </label>

  </div>

)

Toggle.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['small', 'sm']),
  uppercase: PropTypes.bool,
}

Toggle.defaultProps = {
  onClick: null,
  variant: null,
  size: null,
  uppercase: false,
}

export default Toggle
