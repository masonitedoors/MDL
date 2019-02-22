import React from 'react'
import Lottie from 'react-lottie'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import animationData from './data.json'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

function AnimatedMasoniteLogo({ centered }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={cx({ centered })}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

AnimatedMasoniteLogo.propTypes = {
  centered: PropTypes.bool,
}

AnimatedMasoniteLogo.defaultProps = {
  centered: true,
}

export default AnimatedMasoniteLogo
