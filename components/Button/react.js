import React from 'react'
import classNames from 'classnames/bind'
import '../../vendor/vanilla-rippleJS/ripple.css'
import '../../vendor/vanilla-rippleJS/ripple'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Button = ({
  children, disabled, fullWidth, onClick, variant, size, uppercase,
}) => {
  const classes = cx(['btn'], {
    'btn--primary': variant === 'primary',
    'btn--secondary': ['secondary', 'dark'].includes(variant),
    'btn--default': ['default', 'light'].includes(variant),
    'btn--uppercase': uppercase,
    'btn--sm': size === 'small' || size === 'sm',
    'btn--disabled': disabled,
    'btn--full-width': fullWidth,
  })

  const rippleClasses = (variant === 'primary' || variant === 'secondary') ? 'rippleJS--lightRipple' : ''

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {children}
      <span className={`${rippleClasses} rippleJS`} />
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'sm']),
  uppercase: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  onClick: null,
  variant: 'default',
  size: null,
  uppercase: false,
  fullWidth: false,
}

export default Button
