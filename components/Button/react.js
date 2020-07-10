import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { mCheck } from '@masonite/svg-icons'
import s from './style.module.scss'
import Icon from '../Icon/react'

const cx = classNames.bind(s)

const Button = ({
  children,
  className,
  disabled,
  fullWidth,
  onClick,
  variant,
  size,
  style,
  uppercase,
  active,
  ...props
}) => {
  const classes = cx('btn', {
    'btn--primary': variant === 'primary',
    'btn--secondary': ['secondary', 'dark'].includes(variant),
    'btn--light': variant === 'light',
    'btn--default': variant === 'default',
    'btn--uppercase': uppercase,
    'btn--sm': size === 'small' || size === 'sm',
    'btn--large': size === 'large',
    'btn--disabled': disabled,
    'btn--full-width': fullWidth,
    'btn--active': active,
    'btn--large-active': size === 'large' && active,
    'btn--small-active': (size === 'small' || size === 'sm') && active,
  }, className)

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
      {active && size === 'large' && (
        <span className={cx('btn--active-check')}>
          <Icon svg={mCheck} size={16} />
        </span>
      )}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'light']),
  size: PropTypes.oneOf(['small', 'sm', 'large']),
  style: PropTypes.shape({}),
  uppercase: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  active: false,
  className: null,
  disabled: false,
  onClick: null,
  variant: 'default',
  size: null,
  style: null,
  uppercase: false,
  fullWidth: false,
}

export default Button
