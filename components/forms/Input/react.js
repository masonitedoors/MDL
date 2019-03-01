import React, { memo, useState } from 'react'
import classNames from 'classnames/bind'
import { mX } from '@masonite/svg-icons'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

const Input = ({
  error, label, onChange, onKeyDown, placeholder, value, variant,
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
        placeholder={isActive ? placeholder : ''}
        onKeyDown={onKeyDown}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={ev => onChange(ev.target.value)}
        onClick={() => {}}
        value={value}
      />
      <div className={cx('text-field__icon')} dangerouslySetInnerHTML={{ __html: mX }} />
    </Label>
  )
}

export default memo(Input)

Input.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.bool,
  label: PropTypes.string,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['dark', 'light']),
}

Input.defaultProps = {
  onChange: undefined,
  error: false,
  label: undefined,
  onKeyDown: undefined,
  placeholder: '',
  value: '',
  variant: 'light',
}
