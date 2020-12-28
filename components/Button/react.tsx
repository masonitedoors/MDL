import React, { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import { mCheck } from '@masonite/svg-icons'
import s from './style.module.scss'
import Icon from '../Icon/react'

const cx = classNames.bind(s)

export interface ButtonProps {
  children: ReactNode
  /** Adds CSS classes after all computed button classes. */
  className?: string
  disabled?: boolean
  /** Sets the button to take up 100% width of its parent. */
  fullWidth?: boolean
  onClick?: any
  /** The button style. If none is provided, the button background is transparent with no shadow. */
  variant?: 'default' | 'primary' | 'secondary' | 'light'
  size?: 'sm' | 'lg' | 'small' | 'large'
  /** Apply inline styles directly to the button. */
  style?: object
  uppercase?: boolean
  active?: boolean
  /** Makes the text bold. The default style is already bold. */
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
      'btn--large': size === 'large' || size === 'lg',
      'btn--disabled': disabled,
      'btn--full-width': fullWidth,
      'btn--bold': bold,
      'btn--active': active,
      'btn--large-active': (size === 'large' || size === 'lg') && active,
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
