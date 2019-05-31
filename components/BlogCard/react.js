import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

function BlogCard({
  title, content, to, action,
}) {
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
  /**
   * The card title.
   */
  title: PropTypes.string,
  /**
   * The card's content area.
   */
  content: PropTypes.string,
  /**
   * The href value if the card is clickable.
   */
  to: PropTypes.string,
  /**
   * The onClick action for the card.
   */
  action: PropTypes.func,
}

BlogCard.defaultProps = {
  title: null,
  content: null,
  to: null,
  action: null,
}

export default BlogCard
