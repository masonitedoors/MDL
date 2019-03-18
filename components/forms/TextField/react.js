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
  onChange,
  onKeyDown,
  placeholder,
  trailingIcon,
  type,
  value,
  variant,
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
      <div className={cx('text-field__helper')}>{helper}</div>
      {/* <div className={cx('text-field__icon text-field__icon--trailing')}>
        <svg
          className={cx(['checkbox-svg-icon'])}
          dangerouslySetInnerHTML={{ __html: mAlertTriangle }}
        />
      </div> */}
      <input
        className={cx('text-field__input')}
        type={type}
        placeholder={isActive || !label ? placeholder : ''}
        onKeyDown={onKeyDown}
        onBlur={event => {
          setActive(false)
          onBlur && onBlur(event)
        }}
        onFocus={() => setActive(true)}
        onChange={onChange}
        onClick={onClick}
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
}

TextField.defaultProps = {
  onBlur: undefined,
  onClick: undefined,
  error: false,
  helper: '',
  label: undefined,
  onKeyDown: undefined,
  placeholder: '',
  trailingIcon: undefined,
  type: 'text',
  variant: 'dark',
}
