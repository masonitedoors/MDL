import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const handleOnClick = (e, readOnly, handleStatusClick) => {
  if (readOnly !== true) {
    handleStatusClick(e)
  }
}

export const StatusIndicator = (props) => {
  const { status, readOnly, handleStatusClick } = props

  const classes = cx('status', {
    'status--active': status === 'active',
    'status--pending': status === 'pending',
    'status--inactive': status === 'inactive',
    'status--readonly': readOnly === true,
  })

  return (
    <span
      className={cx(classes)}
      role="button"
      tabIndex="0"
      onClick={(e) => handleOnClick(e, readOnly, handleStatusClick)}
    />
  )
}

StatusIndicator.propTypes = {
  status: PropTypes.oneOf(['active', 'pending', 'inactive']),
  readOnly: PropTypes.bool,
  handleStatusClick: PropTypes.func,
}

StatusIndicator.defaultProps = {
  status: 'inactive',
  readOnly: false,
  handleStatusClick: undefined,
}

export default StatusIndicator
