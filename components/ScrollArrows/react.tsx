import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import { mChevronLeft, mChevronRight } from '@masonite/svg-icons'
import Icon from '../Icon/react'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

export interface ScrollProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick: (direction: number) => void
}

const ScrollBase = ({
  left,
  className,
  ...rest
}: { left?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={cx(className, 'scroll-arrow')} type="button" {...rest}>
    <Icon svg={left ? mChevronLeft : mChevronRight} title={left ? 'Left' : 'Right'} size={36} />
  </button>
)

export const ScrollLeft = ({ onClick, ...rest }: ScrollProps) => (
  <ScrollBase left onClick={() => onClick && onClick(-1)} {...rest} />
)

export const ScrollRight = ({ onClick, ...rest }: ScrollProps) => (
  <ScrollBase onClick={() => onClick && onClick(1)} {...rest} />
)

export const ScrollDummy = () => <div>DUMMY</div>
