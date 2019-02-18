import React from 'react'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Button = props => {
  const {
    children, onClick = null, variant = null, size = null, uppercase = false,
  } = props

  const classes = cx(['btn'], {
    'btn--light': variant === 'light',
    'btn--dark': variant === 'dark',
    'btn--uppercase': uppercase,
    'btn--sm': size === 'small' || size === 'sm',
  })

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
