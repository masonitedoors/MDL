import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from '../style.module.scss'

const cx = classNames.bind(style)

const ModalBody = ({ children }) => <div className={cx('wizard-modal__body')}>{children}</div>

export default ModalBody

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
  ]).isRequired,
}
