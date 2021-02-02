import React from 'react'
import classNames from 'classnames/bind'
import { React as Icon } from 'components/Icon'
import { mX } from '@masonite/svg-icons'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const CarouselSlide = ({
  heading, subHeading, image, podOneHeading, podTwoHeading, 
  podThreeHeading, podOneContent, podTwoContent, podThreeContent, 
  slideColor
}) => {
  return (
    <>
      <li className={cx('acoustics-slider--slide')} style={{backgroundColor: slideColor}}>
        <header className={cx('acoustics-slider--slide-header')}>
          <h2 className={cx('acoustics-slider--slide-heading')}>{heading}</h2>
          <h3 className={cx('acoustics-slider--slide-subheading')}>{subHeading}</h3>
        </header>
        <div className={cx('acoustics-slider--slide-content')}>
          <figure className={cx('acoustics-slider--slide-image-container')}>
            <img src={image} className={cx('acoustics-slider--slide-image')} />
          </figure>
          <div className={cx('acoustics-slider--slide-content-list')}>
            <div className={cx('slide-content-list---item')}>
              <h4 className={cx('slide-content-heading')}>{podOneHeading}</h4>
              <p className={cx('slide-content-text')}>{podOneContent}</p>
            </div>
            <div className={cx('slide-content-list---item')}>
              <h4 className={cx('slide-content-heading')}>{podTwoHeading}</h4>
              <p className={cx('slide-content-text')}>{podTwoContent}</p>
            </div>
            <div className={cx('slide-content-list---item')}>
              <h4 className={cx('slide-content-heading')}>{podThreeHeading}</h4>
              <p className={cx('slide-content-text')}>{podThreeContent}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

CarouselSlide.defaultProps = {
  heading: null,
  image: null,
  podOneHeading: null,
  podTwoHeading: null,
  podThreeHeading: null,
  podOneContent: null,
  podTwoContent: null,
  podThreeContent: null,
  slideColor: null,
  subHeading: null,
}

export default CarouselSlide
