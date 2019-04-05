import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import { mX } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import ModalHeader from './react/ModalHeader'
import ModalFooter from './react/ModalFooter'
import style from './style.module.scss'

const cx = classNames.bind(style)

export class ModalWrapper extends Component {
  handleClickOutside = () => this.props.onOutsideClick()

  render() {
    const { children } = this.props
    return <div className="internal-modal">{children}</div>
  }
}

ModalWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func]).isRequired,
  onOutsideClick: PropTypes.func,
}

ModalWrapper.defaultProps = {
  onOutsideClick: undefined,
}

WizardModal.Header = ModalHeader
WizardModal.Footer = ModalFooter

export const WizardModal = onClickOutside(ModalWrapper)
