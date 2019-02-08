import React, { Component } from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export default function BlogCard(props) {
  const {
    title, content, image, to,
  } = props

  return (
    <article className={cx('blog-card')}>
      <a
        href={to}
        onClick={e => {
          e.preventDefault()
          action(to)
        }}
      >
        <div className={cx('blog-card__content')}>
          <h2 className={cx('blog-card__title')}>{title}</h2>
          {content}
        </div>
      </a>
    </article>
  )
}
