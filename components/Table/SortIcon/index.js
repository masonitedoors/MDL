import React from 'react'
import { React as Icon } from 'components/Icon'
import { mUpArrow, mDownArrow, mDualArrows } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export const SortIcon = ({ sortAscending = null }) => (
  <Icon
    className={cx('sort-icon')}
    svg={
      // eslint-disable-next-line no-nested-ternary
      sortAscending === null ? mDualArrows : sortAscending ? mUpArrow : mDownArrow
    }
    title={
      // eslint-disable-next-line no-nested-ternary
      sortAscending === null ? 'Unsorted' : sortAscending ? 'Ascending' : 'Descending'
    }
    size={16}
  />
)
