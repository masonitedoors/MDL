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
      className={cx('input-wrapper', {
        'input-wrapper--with-label': label,
      })}
    >
      <div
        className={cx('input-label', {
          'input-label--active': isActive || value.length,
        })}
      >
        {label}
      </div>
      <input
        className={cx('input', {
          'input--light': variant === 'light',
          'input--dark': variant === 'dark',
          'input--error': error,
        })}
        type="text"
        placeholder={isActive ? placeholder : ''}
        onKeyDown={onKeyDown}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={ev => onChange(ev.target.value)}
        onClick={() => {}}
        value={value}
      />
      <div
        className={cx(['input-icon', { 'input-icon--error': error }])}
        dangerouslySetInnerHTML={{ __html: mX }}
      />
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
  onKeyDown: null,
  placeholder: '',
  value: '',
  variant: 'light',
}
