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
  labelAlwaysAbove,
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
  align,
  disabled,
  readonly,
}) => {
  const [isActive, setActive] = useState(false)
  const Label = label ? 'label' : 'div'
  const fieldValue = (value || '').toString()

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
        'text-field--active': isActive || fieldValue.length,
        'text-field--label-always-above': labelAlwaysAbove,
        'text-field--no-margin': removeMargin,
        'text-field--disabled': disabled,
        'text-field--readonly': readonly,
      })}
    >
      <div className={cx('text-field__label', {
        'text-field--error': error,
      })}>{label}</div>
      <div className={cx('text-field__helper')}>{helper}</div>
      <input
        className={cx('text-field__input', {
          'text-field__input--align-right': align === 'right',
          'text-field__input--align-center': align === 'center',
          'text-field__input--trailing-icon': trailingIcon,
        })}
        type={type}
        placeholder={labelAlwaysAbove || !label ? placeholder : ''}
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
        value={fieldValue}
        disabled={disabled}
        readOnly={readonly}
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
  labelAlwaysAbove: PropTypes.bool,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trailingIcon: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email']),
  variant: PropTypes.oneOf(['dark', 'light']),
  removeMargin: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
}

TextField.defaultProps = {
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  error: false,
  helper: '',
  label: undefined,
  labelAlwaysAbove: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
  trailingIcon: undefined,
  type: 'text',
  variant: 'dark',
  removeMargin: false,
  align: 'left',
  value: '',
  disabled: false,
  readonly: false,
}
