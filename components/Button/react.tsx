import React, { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import { mCheck } from '@masonite/svg-icons'
import s from './style.module.scss'
import Icon from '../Icon/react'

const cx = classNames.bind(s)

export interface ButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  onClick?: any
  variant?: 'default' | 'primary' | 'secondary' | 'light'
  size?: 'sm' | 'lg' | 'small' | 'large'
  style?: any
  uppercase?: boolean
  active?: boolean
  bold?: boolean
}

const Button: FC<ButtonProps> = ({
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
  bold,
  ...props
}) => {
  const classes = cx(
    'btn',
    {
      'btn--primary': variant === 'primary',
      'btn--secondary': ['secondary', 'dark'].includes(variant),
      'btn--light': variant === 'light',
      'btn--default': variant === 'default',
      'btn--uppercase': uppercase,
      'btn--sm': size === 'small' || size === 'sm',
      'btn--large': size === 'large',
      'btn--disabled': disabled,
      'btn--full-width': fullWidth,
      'btn--bold': bold,
      'btn--active': active,
      'btn--large-active': size === 'large' && active,
      'btn--small-active': (size === 'small' || size === 'sm') && active,
    },
    className,
  )

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

export default Button
