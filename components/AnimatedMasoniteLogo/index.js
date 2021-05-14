import React from 'react'
import Lottie from 'lottie-react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import animationData from './data.json'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

function AnimatedMasoniteLogo({ variant }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div
      className={cx([
        'animated-masonite-logo',
        { 'animated-masonite-logo--dark': variant === 'dark' },
      ])}
    >
      <Lottie options={defaultOptions} height={40} width={40} />
    </div>
  )
}

AnimatedMasoniteLogo.propTypes = {
  variant: PropTypes.string,
}

AnimatedMasoniteLogo.defaultProps = {
  variant: 'dark',
}

export default AnimatedMasoniteLogo
