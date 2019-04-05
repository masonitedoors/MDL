import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const ModalBackdrop = ({ children }) => (
  <div className={cx('modal-backdrop')}>
    <div className={cx('modal-backdrop__content')}>{children}</div>
  </div>
)

export default ModalBackdrop

ModalBackdrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
