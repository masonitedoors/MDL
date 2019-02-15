import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { mX } from '@masonite/svg-icons'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const cx = classNames.bind(s)

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  onChange = ev => {
    this.setState({ value: ev.target.value })
  }

  render() {
    const {
      error, onKeyDown, placeholder, variant,
    } = this.props
    const { value } = this.state

    return (
      <div className={cx('input-wrapper')}>
        <input
          className={cx('input', {
            'input--dark': variant === 'dark',
            'input--error': error,
          })}
          type="text"
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onChange={this.onChange}
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
  error: PropTypes.bool,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  error: false,
  placeholder: '',
}
