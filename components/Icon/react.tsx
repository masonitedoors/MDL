import React, { FC } from 'react'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

interface IconProps {
  className?: string
  /** The SVG title. It is the text that appears on hover */
  title?: string
  /** Width and height in pixels */
  size?: number
  /** Merges with style tag of icon div */
  style?: object
  /** SVG markup as a string */
  svg: string
}

const Icon: FC<IconProps> = ({
  className, title, size = 32, style, svg,
}) => (
  <div
    className={cx('icon', className)}
    style={{ height: size, width: size, ...style }}
    dangerouslySetInnerHTML={{
      __html: title ? svg.replace(/<title>\w+<\/title>/, `<title>${title}</title>`) : svg,
    }}
  />
)

export default Icon
