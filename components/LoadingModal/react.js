import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { React as ModalBackdrop } from 'components/ModalBackdrop'
import AnimatedMasoniteLogo  from 'components/AnimatedMasoniteLogo'

const cx = classNames.bind(styles)

const LoadingModal = () => (

   <ModalBackdrop>
    <AnimatedMasoniteLogo centered = {false} black={true} />
  </ModalBackdrop>
 
)

export default LoadingModal
