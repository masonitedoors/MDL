import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

export interface CounterProps {
  /** Display the counter when it is equal to zero. */
  showZero?: boolean

  /** The displayed number */
  value: number
}

export const Counter: FC<HTMLAttributes<HTMLDivElement> & CounterProps> = ({
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
