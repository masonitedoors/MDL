import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { mX } from '@masonite/svg-icons'
import { React as SmallTitle } from 'components/SmallTitle'
import style from '../style.module.scss'

const cx = classNames.bind(style)

const ModalClose = ({ onDismiss }) => (
  <div
    onClick={onDismiss}
    onKeyPress={onDismiss}
    tabIndex={0}
    role="button"
    className={cx('wizard-modal__close-icon')}
  >
    <svg className={cx('wizard-modal__close-icon-svg')} dangerouslySetInnerHTML={{ __html: mX }} />
  </div>
)

ModalClose.propTypes = {
  onDismiss: PropTypes.func,
}

ModalClose.defaultProps = {
  onDismiss: undefined,
}

export const ModalHeader = ({
  onDismiss, icon, title, subtitle,
}) => (
  <header className={cx('wizard-modal__header')}>
    <div className={cx('wizard-modal__header-title-area')}>
      <div className={cx('wizard-modal__header-icon')}>
        <svg
          className={cx('wizard-modal__header-icon-svg')}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <h1 className={cx('wizard-modal__title')}>{title}</h1>
      {onDismiss && <ModalClose onDismiss={onDismiss} />}
    </div>
    {subtitle && (
      <div className={cx('wizard-modal__subheading')}>
        <SmallTitle>{subtitle}</SmallTitle>
      </div>
    )}
  </header>
)

export default ModalHeader

ModalHeader.propTypes = {
  onDismiss: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

ModalHeader.defaultProps = {
  onDismiss: undefined,
  icon: undefined,
  subtitle: undefined,
}
