import React, { Component, PureComponent } from 'react'
import classNames from 'classnames/bind'
import { mX } from '@masonite/svg-icons'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const cx = classNames.bind(s)

export default class Input extends PureComponent {
  render() {
    const {
      error, onChange, onKeyDown, placeholder, value, variant,
    } = this.props

    return (
      <div className={cx('input-wrapper')}>
        <input
          className={cx('input', {
            'input--light': variant === 'light',
            'input--dark': variant === 'dark',
            'input--error': error,
          })}
          type="text"
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onChange={ev => onChange(ev.target.value)}
          value={value}
        />
        <div
          className={cx(['input-icon', { 'input-icon--error': error }])}
          dangerouslySetInnerHTML={{ __html: mX }}
        />
      </div>
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.bool,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['dark', 'light']),
}

Input.defaultProps = {
  onChange: null,
  error: false,
  onKeyDown: null,
  placeholder: '',
  value: '',
  variant: 'light',
}
