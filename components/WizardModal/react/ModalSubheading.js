import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { React as SmallTitle } from 'components/SmallTitle'
import style from '../style.module.scss'

const cx = classNames.bind(style)

const ModalSubheading = ({ children }) => (
  <div className={cx('wizard-modal__subheading')}>
    <SmallTitle>{children}</SmallTitle>
  </div>
)

export default ModalSubheading

ModalSubheading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element]).isRequired,
}
