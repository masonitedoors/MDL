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

  // Generate an array of page numbers.
  const pageNumbers = [...Array(totalPages + 1).keys()]
  pageNumbers.shift()

  // Define our first & last page numbers.
  const firstPageNumber = 1
  const lastPageNumber = pageNumbers[pageNumbers.length - 1]

  // Define our previous and next page.
  const prevPageNumber = currentPageNumber - 1
  const nextPageNumber = currentPageNumber + 1

  // Calculate the current item range for the current page.
  const currentItemsRangeMin = currentPageNumber * itemsPerPage - (itemsPerPage - 1)
  const currentItemsRangeMax = currentPageNumber === lastPageNumber
    ? totalItems
    : currentPageNumber * itemsPerPage
  const currentItemsRange = `${currentItemsRangeMin}-${currentItemsRangeMax} of ${totalItems}`

  return (
    <div className={cx('pagination')}>
      <div className={cx('pagination__info')}>
        <span className={cx('pagination__info-viewing-label')}>Viewing </span>
        {currentItemsRange}
      </div>
      <nav role="navigation" aria-label="Pagination Navigation">
        <ul className={cx('pagination__nav')}>
          <li className={cx(['pagination__nav-item', 'pagination__nav-item-prev'])}>
            <Button
              size="small"
              disabled={currentPageNumber === firstPageNumber}
              onClick={() => onChange(prevPageNumber)}
            >
              Prev
            </Button>
          </li>
          {pageNumbers.map(pageNumber => (
            <li
              key={pageNumber}
              className={cx([
                'pagination__nav-item',
                currentPageNumber === pageNumber && 'pagination__nav-item--active',
              ])}
            >
              <button
                type="button"
                className={cx('pagination__nav-link')}
                aria-label={`Goto Page ${pageNumber}`}
                onClick={() => onChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className={cx(['pagination__nav-item', 'pagination__nav-item-next'])}>
            <Button
              size="small"
              disabled={currentPageNumber === lastPageNumber}
              onClick={() => onChange(nextPageNumber)}
            >
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
