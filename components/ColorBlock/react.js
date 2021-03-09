import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { color } from '@storybook/addon-knobs'

const cx = classNames.bind(styles)

const ColorBlock = ({
  link, linkText, heading, subHeading, copy, image, backgroundColor, colorScheme
}) => {
  return (
    <>
      <div className={cx('color-block')}>
        <figure className={cx('color-block--image')}>
          <a href={link} className={cx('color-block--image-link d-block')}>
            <img src={image} className={cx('color-block--image-img')} alt={'Color Example ' + heading} />
          </a>
        </figure>
        <div className={cx('color-block--text') + ' color-scheme-' + colorScheme} style={{backgroundColor: backgroundColor}}>
          <div className={cx('color-block--text-inner')}>
            <h3 className={cx('color-block--title')}>{heading}</h3>
            {subHeading && <h4 className={cx('color-block--subtitle')}>{subHeading}</h4>}
            <p className={cx('color-block--copy')}>{copy}</p>
            <a href={link} className={cx('color-block--link')}>{linkText}</a>
          </div>
        </div>
      </div>
    </>
  )
}

ColorBlock.defaultProps = {
  copy: null,
  heading: null,
  link: null,
  linkText: null,
  image: null,
  subHeading: null,
}

export default ColorBlock
