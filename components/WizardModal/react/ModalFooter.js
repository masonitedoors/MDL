import React from 'react'
import PropTypes from 'prop-types'
import { React as PaginationDots } from 'components/PaginationDots'
import classNames from 'classnames/bind'
import style from '../style.module.scss'

const cx = classNames.bind(style)

const ModalFooter = ({ children, activePage, totalPages }) => (
  <footer className={cx('wizard-modal__footer')}>
    {typeof activePage !== 'undefined' && typeof totalPages !== 'undefined' ? (
      <PaginationDots activePage={activePage} totalPages={totalPages} />
    ) : (
      <div />
    )}
    <div className={cx('wizard-modal__footer-actions')}>{children}</div>
  </footer>
)

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
  ]).isRequired,
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
}

ModalFooter.defaultProps = {
  activePage: undefined,
  totalPages: undefined,
}

export default ModalFooter
