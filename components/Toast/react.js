import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { React as Icon } from 'components/Icon'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

export const Toast = ({ children, headingIcon, heading, buttons, closeToast, toastProps, ...rest }) => (
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

Toast.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  headingIcon: PropTypes.string,
  heading: PropTypes.string,
  buttons: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
}

Toast.defaultProps = {
  children: null,
  headingIcon: null,
  heading: null,
  buttons: null,
}

export const toastContainerProps = {
  position: "bottom-right",
  className: cx('outer-toast')
}
