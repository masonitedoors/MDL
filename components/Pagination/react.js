import React from 'react'
import classNames from 'classnames/bind'
import { React as Button } from 'components/Button'
import PropTypes from 'prop-types'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Pagination = ({
  currentPageNumber,
  totalItems,
  itemsPerPage,
  onChange,
  prevLabel,
  nextLabel,
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
  const currentItemsRangeMax = currentPageNumber === lastPageNumber ? totalItems : currentPageNumber * itemsPerPage
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
              aria-label={`Page ${prevPageNumber}`}
              disabled={currentPageNumber === firstPageNumber}
              onClick={() => onChange(prevPageNumber)}
            >
              {prevLabel}
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
                aria-label={`Page ${pageNumber}`}
                onClick={() => onChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className={cx(['pagination__nav-item', 'pagination__nav-item-next'])}>
            <Button
              size="small"
              aria-label={`Page ${nextPageNumber}`}
              disabled={currentPageNumber === lastPageNumber}
              onClick={() => onChange(nextPageNumber)}
            >
              {nextLabel}
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
  prevLabel: PropTypes.string,
  nextLabel: PropTypes.string,
}

Pagination.defaultProps = {
  itemsPerPage: 10,
  prevLabel: 'Prev',
  nextLabel: 'Next',
}

export default Pagination
