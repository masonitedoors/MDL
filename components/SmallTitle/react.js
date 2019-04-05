import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export const SmallTitle = ({ children }) => <h2 className={cx('small-title')}>{children}</h2>

export default SmallTitle

SmallTitle.propTypes = {
  children: PropTypes.string.isRequired,
}
