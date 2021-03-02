import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { React as ModalBackdrop } from 'components/ModalBackdrop'
import { React as Icon } from 'components/Icon'
import { mX } from '@masonite/svg-icons'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Flyout = React.forwardRef(({
  children, onClose, heading, moreHeading, width = 477,
}, ref) => (
  <>
    <aside ref={ref} className={cx('aside')} style={{ width }}>
      <div className={cx('header')}>
        <div className={cx('header__left')}>
          <button type="button" onClick={onClose} className={cx('close')}>
            <Icon svg={mX} size={20} />
          </button>
          {heading && <h2>{heading}</h2>}
        </div>
        {moreHeading}
      </div>

      {children}
    </aside>
    <ModalBackdrop />
  </>
))

Flyout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
  heading: PropTypes.string,
  moreHeading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

Flyout.defaultProps = {
  heading: null,
  moreHeading: null,
}

export default Flyout
