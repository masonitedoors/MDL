import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const ModalBackdrop = ({
  children, className, show, style,
}) => {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    // Inner transition won't fire, if outer transition's `in` is already true.
    setEntered(show)
  }, [])

  return (
    <CSSTransition
      in={show}
      timeout={150}
      classNames="modal-backdrop"
      onEntered={() => setEntered(true)}
      onExited={() => setEntered(false)}
    >
      <div className={cx('modal-backdrop', className)} style={style}>
        <CSSTransition in={entered} timeout={250} classNames="modal-backdrop__content">
          <div className={cx('modal-backdrop__content')}>{children}</div>
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}

export default ModalBackdrop

ModalBackdrop.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    background: PropTypes.string,
  }),
}

ModalBackdrop.defaultProps = {
  className: '',
  show: true,
  style: null,
}
