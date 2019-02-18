import React, { createElement } from 'react'
import s from './style.module.scss'

export const Heading = props => {
  const { level, children, noMargin } = props
  const tag = `h${level}`
  const style = noMargin && {
    marginBottom: '0',
  }
  return createElement(tag, { className: s[tag], style }, children)
}

export const P = props => {
  const { children } = props
  return <p className={s.p}>{children}</p>
}
