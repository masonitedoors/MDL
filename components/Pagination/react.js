import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { React as Button } from 'components/Button'
import { generateVisiblePages } from './generateVisiblePages'

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
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pageNumbers = [...Array(totalPages).keys()].map(n => n + 1)

  const firstPageNumber = 1
  const lastPageNumber = pageNumbers[pageNumbers.length - 1]
  const prevPageNumber = page - 1
  const nextPageNumber = page + 1

  const viewingMin = page * itemsPerPage - (itemsPerPage - 1)
  const viewingMax = page === lastPageNumber ? totalItems : page * itemsPerPage
  const viewingRange = `${viewingMin}-${viewingMax} of ${totalItems}`

  const visiblePageNumbers = generateVisiblePages(page, totalPages)

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
              uppercase={true}
              bold={true}
            >
              {prevLabel}
            </Button>
          </li>

          {visiblePageNumbers.map((pageNumber, i) => {
            const key = `${i}_${pageNumber}`
            return (
              <li
                key={key}
                className={cx([
                  'pagination__nav-item',
                  page === pageNumber && 'pagination__nav-item--active',
                ])}
              >
                {pageNumber === '...' ? (
                  <span className={cx(['pagination__nav-ellipsis'])}>...</span>
                ) : (
                  <button
                    type="button"
                    className={cx('pagination__nav-link')}
                    aria-label={`Page ${pageNumber}`}
                    onClick={() => onChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )}
              </li>
            )
          })}

          <li className={cx(['pagination__nav-item', 'pagination__nav-item-next'])}>
            <Button
              size="small"
              aria-label={`Page ${nextPageNumber}`}
              disabled={page === lastPageNumber}
              onClick={() => onChange(nextPageNumber)}
              uppercase={true}
              bold={true}
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
  viewingLabel: 'Viewing',
}

export default Pagination
