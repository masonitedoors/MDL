import React from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'


const Toggle = ({
  checked, onChange,
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
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

Toggle.defaultProps = {
  onChange: null,
  checked: false,
}

export default Toggle
