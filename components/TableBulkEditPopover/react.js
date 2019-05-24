import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const TableBulkEditPopover = ({ children, direction, cell }) => (
  <th
    style={{ position: 'absolute' }}
    className={cx('popover-wrapper', {
      'popover-wrapper--top': direction === 'top',
      'popover-wrapper--left': direction === 'left',
    })}
  >
    <div
      className={cx('popover', {
        'popover--top': direction === 'top',
        'popover--left': direction === 'left',
      })}
    >
      {children}
    </div>
    <div className={cx('popover-wrapper__cell')}>{cell}</div>
  </th>
)

export default TableBulkEditPopover

TableBulkEditPopover.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  direction: PropTypes.string.isRequired,
  cell: PropTypes.string.isRequired,
}
