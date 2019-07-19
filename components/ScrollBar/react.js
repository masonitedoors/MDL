import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import ScrollArea from 'react-scrollbar'
import style from './style.module.scss'

console.log(style)
const cx = classNames.bind(style)

export const ScrollBar = ({
  children,
  areaStyle,
  contentStyle,
  scrollSpeed,
}) => (
  <ScrollArea
    speed={scrollSpeed}
    className={cx('scroll-bar-area')}
    contentClassName={cx('scroll-bar-content')}
    style={areaStyle}
    contentStyle={contentStyle}
  >
    {children}
  </ScrollArea>
)

export default ScrollBar

ScrollBar.propTypes = {
  children: PropTypes.element.isRequired,
  areaStyle: PropTypes.element.isRequired,
  contentStyle: PropTypes.element.isRequired,
  scrollSpeed: PropTypes.number.isRequired,
}
