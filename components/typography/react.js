import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const Heading = ({ level, children, noMargin }) => {
  const tag = `h${level}`
  const style = noMargin && {
    marginBottom: '0',
  }
  return createElement(tag, { className: s[tag], style }, children)
}

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  children: PropTypes.string,
  noMargin: PropTypes.string,
}

Heading.defaultProps = {
  children: null,
  noMargin: null,
}

const P = ({ children }) => <p className={s.p}>{children}</p>

P.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Heading, P }
