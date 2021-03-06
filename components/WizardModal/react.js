import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import classNames from 'classnames/bind'
import { React as TextField } from 'components/TextField'
import ModalHeader from './react/ModalHeader'
import ModalBody from './react/ModalBody'
import ModalFooter from './react/ModalFooter'
import style from './style.module.scss'

const cx = classNames.bind(style)

export class Modal extends Component {
  handleClickOutside = () => this.props.onOutsideClick()

  render() {
    const { children } = this.props
    return <div className={cx('wizard-modal')}>{children}</div>
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onOutsideClick: PropTypes.func,
}

Modal.defaultProps = {
  onOutsideClick: () => {},
}

const WizardModal = onClickOutside(Modal)

export const BodyTextField = props => <TextField {...props} variant="secondary" />

export default WizardModal

WizardModal.Header = ModalHeader
WizardModal.Body = ModalBody
WizardModal.TextField = BodyTextField
WizardModal.Footer = ModalFooter
