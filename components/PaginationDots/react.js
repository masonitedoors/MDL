import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export const Dot = ({ filled }) => (
  <div className={cx(['pagination-dots__dot', filled && 'pagination-dots__dot--filled'])} />
)

export const PaginationDots = ({ activePage, totalPages }) => (
  <div className="pagination-dots">
    {[...Array(totalPages).keys()].map((dot, i) => (
      <Dot key={dot} filled={i === activePage} />
    ))}
  </div>
)

export default memo(PaginationDots)

PaginationDots.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
}

Dot.propTypes = {
  filled: PropTypes.bool.isRequired,
}
