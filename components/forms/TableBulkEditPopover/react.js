import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const TableBulkEditPopover = ({ children, direction, cell }) => (
  <th class={cx('popover-wrapper', {
    'popover-wrapper--top': direction === 'top',
    'popover-wrapper--left': direction === 'left',
  })}
  >
    <div className={cx({

      'popover-wrapper--position-top': direction === 'top',
      'popover-wrapper--position-left': direction === 'left',

    })}>
      {children}
    </div>
    <div className={cx('popover-wrapper--cell')}>{cell}</div>
  </th>
)

export default TableBulkEditPopover

TableBulkEditPopover.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  direction: PropTypes.string.isRequired
}
