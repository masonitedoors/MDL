import React from 'react'
import classNames from 'classnames/bind'
// import { Button } from 'components/Button'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Pagination = ({
  disabled, // Disable backward/forward buttons.
  page, // The current page.
  total, // Total number of items.
  pageSize, // Number of items per page.
  pageSizes, // Choices of `pageSize`.
  onChange,
}) => {
  console.log('disabled', disabled)
  console.log('page', page)
  console.log('total', total)
  console.log('pageSize', pageSize)
  console.log('pageSizes', pageSizes)
  console.log('onChange', onChange)

  return (
    <div className={cx('pagination')}>
      <div className={cx('pagination__info')}>
        <span className={cx('pagination__info-viewing-label')}>Viewing</span> 1-30 of 99
      </div>
      <ul className={cx('pagination__nav')}>
        <li className={cx('pagination__nav-item')}>
          <button className={cx('pagination__nav-link')} type="button">
            1
          </button>
        </li>
        <li className={cx(['pagination__nav-item', 'pagination__nav-item--active'])}>
          <button className={cx('pagination__nav-link')} type="button">
            2
          </button>
        </li>
        <li className={cx('pagination__nav-item')}>
          <button className={cx('pagination__nav-link')} type="button">
            3
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
