import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

function BlogCard(props) {
  const { title, content, to } = props

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

BlogCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  to: PropTypes.string,
}

BlogCard.defaultProps = {
  title: null,
  content: null,
  to: null,
}

export default BlogCard
