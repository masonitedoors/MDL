import React, { Component } from 'react'
import { mChevronRight } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export default function TrendCard(props) {
  const {
    title, content, image, squareImages = false, to,
  } = props

  return (
    <article className={cx('trend-card')}>
      <a
        href={to}
        onClick={e => {
          e.preventDefault()
          action(to)
        }}
      >
        <div className={cx('trend-card__content')}>
          <h2 className={cx('trend-card__title')}>
            {title}
            {' '}
            <div className={cx(['trend-card__title-chevron'])}>
              <svg dangerouslySetInnerHTML={{ __html: mChevronRight }} />
            </div>
          </h2>
          {content}
        </div>
        <div
          className={cx('trend-card__image-wrapper')}
          // style={{
          //   backgroundImage: `url(${image})`
          // }}
        >
          <img className={cx('trend-card__image')} src={image} />
        </div>
      </a>
    </article>
  )
}
