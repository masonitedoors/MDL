import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import Icon from '../Icon/react'
import { mMoreVertical } from '@masonite/svg-icons'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

export interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  svg: string
  placeholder?: string
  valueDisplay?: string
  narrow?: boolean
}

const FilterButton = ({
  svg,
  placeholder,
  valueDisplay,
  narrow,
  className,
  ...rest
}: FilterButtonProps) => (
  <button className={cx(className, 'filter-button', { narrow })} {...rest}>
    <Icon svg={svg} title={placeholder} size={40} />
    <div className={cx('select-text')}>
      <div className={cx('select-label')}>{placeholder}</div>
      <div className={cx('select-value')}>{valueDisplay}</div>
    </div>
    <Icon svg={mMoreVertical} className={cx('dots')} title={placeholder} size={24} />
  </button>
)

export default FilterButton
