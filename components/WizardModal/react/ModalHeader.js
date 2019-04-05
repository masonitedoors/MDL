import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from '../style.module.scss'

const cx = classNames.bind(style)

const ModalClose = ({ onDismiss }) => (
  <div onClick={onDismiss} className="internal-modal__close-icon">
    <svg className="internal-modal__close-icon-svg" dangerouslySetInnerHTML={{ __html: mX }} />
  </div>
)

ModalClose.propTypes = {
  onDismiss: PropTypes.func,
}

ModalClose.defaultProps = {
  onDismiss: undefined,
}

export const ModalHeader = ({ onDismiss, icon, text }) => (
  <header className="internal-modal__header">
    <div className="internal-modal__header-icon">
      <svg className="internal-modal__header-icon-svg" dangerouslySetInnerHTML={{ __html: icon }} />
    </div>
    <h1 className="internal-modal__title">{text}</h1>
    {onDismiss && <ModalClose onDismiss={onDismiss} />}
  </header>
)

ModalHeader.propTypes = {
  onDismiss: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string,
}

ModalHeader.defaultProps = {
  onDismiss: undefined,
  icon: undefined,
  text: undefined,
}

export default ModalHeader
