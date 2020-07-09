import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

const Icon = ({
  className, title, size, style, svg,
}) => (
  <div
    className={cx('icon', className)}
    style={{ height: size, width: size, ...style }}
    dangerouslySetInnerHTML={{
      __html: svg.replace(/<title>\w+<\/title>/, `<title>${title}</title>`),
    }}
  />
)

export default Icon

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  title: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.shape({}),
  svg: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  className: [],
  size: 32,
  style: null,
  title: '',
}
