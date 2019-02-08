import React from 'react'
import s from './style.module.scss'

const ProductCard = props => {
  const {
    title = 'Unnamed Door', image, to, action,
  } = props

  return (
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
}

export default ProductCard
