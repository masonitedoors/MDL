import React, { memo, useState } from 'react'
import classNames from 'classnames/bind'
import { mAlertTriangle } from '@masonite/svg-icons'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

const TextField = ({
  error,
  helper,
  label,
  onBlur,
  onClick,
  onFocus,
  onChange,
  onKeyDown,
  placeholder,
  trailingIcon,
  type,
  value,
  variant,
  removeMargin,
}) => {
  const [isActive, setActive] = useState(false)
  const Label = label ? 'label' : 'div'

  const TrailingIcon = () => (
    <div
      className={cx(['text-field__icon', trailingIcon && !error && 'text-field__icon--trailing'])}
      dangerouslySetInnerHTML={{ __html: error ? mAlertTriangle : trailingIcon }}
    />
  )

  return (
    <Label
      className={cx('text-field', {
        'text-field--with-label': label,
        'text-field--light': variant === 'light',
        'text-field--dark': variant === 'dark',
        'text-field--error': error,
        'text-field--active': isActive || value.length,
        'text-field--no-margin': removeMargin
      })}
    >
      <div className={cx('text-field__label')}>{label}</div>
      <div className={cx('text-field__helper')}>{helper}</div>
      <input
        className={cx('text-field__input')}
        type={type}
        placeholder={isActive || !label ? placeholder : ''}
        onKeyDown={onKeyDown}
        onBlur={event => {
          setActive(false)
          onBlur && onBlur(event.target.value, event)
        }}
        onFocus={event => {
          setActive(true)
          onFocus && onFocus(event.target.value, event)
        }}
        onChange={event => onChange(event.target.value, event)}
        onClick={onClick}
        value={value}
      />
      <TrailingIcon />
    </Label>
  )
}

export default memo(TextField)

TextField.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  error: PropTypes.bool,
  helper: PropTypes.string,
  label: PropTypes.string,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  trailingIcon: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email']),
  variant: PropTypes.oneOf(['dark', 'light']),
  removeMargin: PropTypes.bool,
}

TextField.defaultProps = {
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  error: false,
  helper: '',
  label: undefined,
  onKeyDown: undefined,
  placeholder: '',
  trailingIcon: undefined,
  type: 'text',
  variant: 'dark',
  removeMargin: false,
}
