import React from 'react'
import classNames from 'classnames/bind'
import { React as Button } from 'components/Button'
import PropTypes from 'prop-types'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Pagination = ({
  page,
  totalItems,
  itemsPerPage,
  onChange,
  prevLabel,
  nextLabel,
  viewingLabel,
}) => {
  // Calculate total pages needed & generate an array of page numbers.
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pageNumbers = [...Array(totalPages + 1).keys()]
  pageNumbers.shift()

  // Define our first & last page numbers.
  const firstPageNumber = 1
  const lastPageNumber = pageNumbers[pageNumbers.length - 1]

  // Define our previous and next page.
  const prevPageNumber = page - 1
  const nextPageNumber = page + 1

  // Calculate the current item range for the current page.
  const viewingMin = page * itemsPerPage - (itemsPerPage - 1)
  const viewingMax = page === lastPageNumber ? totalItems : page * itemsPerPage
  const viewingRange = `${viewingMin}-${viewingMax} of ${totalItems}`

  return (
    <div className={cx('pagination')}>
      <div className={cx('pagination__info')}>
        <span className={cx('pagination__info-viewing-label')}>{viewingLabel}</span>
        {viewingRange}
      </div>
      <nav role="navigation" aria-label="Pagination Navigation">
        <ul className={cx('pagination__nav')}>
          <li className={cx(['pagination__nav-item', 'pagination__nav-item-prev'])}>
            <Button
              size="small"
              aria-label={`Page ${prevPageNumber}`}
              disabled={page === firstPageNumber}
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
                page === pageNumber && 'pagination__nav-item--active',
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
              disabled={page === lastPageNumber}
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
  page: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
  prevLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  viewingLabel: PropTypes.string,
}

Pagination.defaultProps = {
  itemsPerPage: 10,
  prevLabel: 'Prev',
  nextLabel: 'Next',
  viewingLabel: 'Viewing ',
}

export default Pagination
