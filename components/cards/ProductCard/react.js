import React from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const ProductCard = ({
  title, image, to, action,
}) => (
  <article className={s['product-card']}>
    <a
      href={to}
      className={s['card-link']}
      onClick={e => {
        e.preventDefault()
        action(to)
      }}
    >
      <div className={s['image-wrapper']}>
        <img className={s.image} alt={title} src={image} />
      </div>
      <h3 className={s.title}>{title}</h3>
    </a>
  </article>
)

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string,
  action: PropTypes.string,
}

ProductCard.defaultProps = {
  title: 'Unnamed Door',
  image: null,
  to: null,
  action: null,
}

export default ProductCard
