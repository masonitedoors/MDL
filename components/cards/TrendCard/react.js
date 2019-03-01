import React from 'react'
import { mChevronRight } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

function TrendCard({
  title, content, image, to, action,
}) {
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
            {title}{' '}
            <div className={cx(['trend-card__title-chevron'])}>
              <svg dangerouslySetInnerHTML={{ __html: mChevronRight }} />
            </div>
          </h2>
          {content}
        </div>
        <div className={cx('trend-card__image-wrapper')}>
          <img className={cx('trend-card__image')} src={image} alt="" />
        </div>
      </a>
    </article>
  )
}

TrendCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string,
  action: PropTypes.func,
}

TrendCard.defaultProps = {
  title: null,
  content: null,
  image: null,
  to: null,
  action: null,
}

export default TrendCard
