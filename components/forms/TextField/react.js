import React, { memo, useState } from 'react'
import classNames from 'classnames/bind'
import { mAlertTriangle } from '@masonite/svg-icons'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

const TextField = ({
  error, label, onBlur, onChange, onKeyDown, placeholder, value, variant,
}) => {
  const [isActive, setActive] = useState(false)
  const Label = label ? 'label' : 'div'

  return (
    <Label
      className={cx('text-field', {
        'text-field--with-label': label,
        'text-field--light': variant === 'light',
        'text-field--dark': variant === 'dark',
        'text-field--error': error,
        'text-field--active': isActive || value.length,
      })}
    >
      <div className={cx('text-field__label')}>{label}</div>
      <input
        className={cx('text-field__input')}
        type="text"
        placeholder={isActive || !label ? placeholder : ''}
        onKeyDown={onKeyDown}
        onBlur={event => {
          setActive(false)
          onBlur(event.target.value)
        }}
        onFocus={() => setActive(true)}
        onChange={event => onChange(event.target.value)}
        onClick={() => {}}
        value={value}
      />
      <div
        className={cx('text-field__icon')}
        dangerouslySetInnerHTML={{ __html: mAlertTriangle }}
      />
    </Label>
  )
}

export default memo(TextField)

TextField.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['dark', 'light']),
}

TextField.defaultProps = {
  onBlur: undefined,
  error: false,
  label: undefined,
  onKeyDown: undefined,
  placeholder: '',
  variant: 'light',
}
