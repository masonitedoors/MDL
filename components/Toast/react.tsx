import React, { PropsWithChildren, ReactNode } from 'react'
import classNames from 'classnames/bind'
import { React as Icon } from '../Icon'
import styles from './style.module.scss'
import { ToastContainerProps, ToastProps as ToastifyToastProps } from 'react-toastify'

const cx = classNames.bind(styles)

export interface ToastProps {
  headingIcon?: string
  heading?: string
  buttons?: ReactNode | ((closeToast?: () => void, toastProps?: ToastifyToastProps) => ReactNode)
  closeToast?: () => void
  toastProps?: ToastifyToastProps
}

export const Toast = ({ children, headingIcon, heading, buttons, closeToast, toastProps, ...rest }: PropsWithChildren<ToastProps>) => (
  <div {...rest}>
    <h2>
      {headingIcon && (
        <Icon svg={headingIcon} className={cx('toast-header-icon')} size={24} />
      )}
      {heading}
    </h2>
    <p>{children}</p>
    {buttons && (
      <div className={cx('toast-buttons')}>
        {typeof buttons === 'function' ? buttons(closeToast, toastProps) : buttons}
      </div>
    )}
  </div>
)

export const toastContainerProps: ToastContainerProps = {
  position: "bottom-right",
  className: cx('outer-toast')
}
