import React from 'react'
import classNames from 'classnames/bind'
import { React as Button } from 'components/Button'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Pagination = ({
  currentPageNumber, totalItems, itemsPerPage = 10, onChange,
}) => {
  // Calculate the total number of pages.
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Calculate the current item range for the current page.
  const currentItemRangeMax = currentPageNumber * itemsPerPage
  const currentItemRangeMin = currentItemRangeMax - (itemsPerPage - 1)
  const currentItemRange = `${currentItemRangeMin}-${currentItemRangeMax} of ${totalItems}`

  // Generate an array of page numbers.
  const pageNumbers = [...Array(totalPages + 1).keys()]
  pageNumbers.shift()

  // Define our first & last page numbers.
  const firstPageNumber = 1
  const lastPageNumber = pageNumbers[pageNumbers.length - 1]

  return (
    <div className={cx('pagination')}>
      <div className={cx('pagination__info')}>
        <span className={cx('pagination__info-viewing-label')}>Viewing </span>
        {currentItemRange}
      </div>
      <nav role="navigation" aria-label="Pagination Navigation">
        <ul className={cx('pagination__nav')}>
          <li className={cx(['pagination__nav-item', 'pagination__nav-item-prev'])}>
            <Button size="small" disabled={currentPageNumber === firstPageNumber}>
              Prev
            </Button>
          </li>
          {pageNumbers.map(pageNumber => (
            <li
              className={cx([
                'pagination__nav-item',
                currentPageNumber === pageNumber && 'pagination__nav-item--active',
              ])}
              key={pageNumber}
            >
              <button
                className={cx('pagination__nav-link')}
                aria-label={`Goto Page ${pageNumber}`}
                type="button"
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className={cx(['pagination__nav-item', 'pagination__nav-item-next'])}>
            <Button size="small" disabled={currentPageNumber === lastPageNumber}>
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
