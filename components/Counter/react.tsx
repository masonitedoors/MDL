import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface ICounterProps {
  showZero?: boolean
  value: number
}

export const Counter: FC<HTMLAttributes<HTMLDivElement> & ICounterProps> = ({
  className,
  showZero = false,
  value,
  ...props
}) => (
  <div
    className={cx('Counter', { 'Counter--hidden': !showZero && +value === 0 }, className)}
    {...props}
  >
    {value}
  </div>
)

export default Counter
