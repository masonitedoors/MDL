import React from 'react'
import Lottie from 'react-lottie'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import animationData from './data.json'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

function AnimatedMasoniteLogo({ centered, variant }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={cx([{ centered, 'black': variant === 'dark' }])}>
      <Lottie options={defaultOptions} height={40} width={40} />
    </div>
  )
}

AnimatedMasoniteLogo.propTypes = {
  /**
   * Center the animated logo within the viewport.
   */
  centered: PropTypes.bool,
}

AnimatedMasoniteLogo.defaultProps = {
  centered: true,
  variant: 'dark'
}

export default AnimatedMasoniteLogo
