import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import ScrollArea from 'react-scrollbar'
import style from './style.module.scss'

const cx = classNames.bind(style)

export const ScrollBar = ({
  children, areaStyle, contentStyle, scrollSpeed,
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
  /**
   * A single child element.
   */
  children: PropTypes.element.isRequired,
  /**
   * The style for the component.
   */
  areaStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /**
   * Inline styles applied to element with scroll area content.
   */
  contentStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /**
   * The scroll speed.
   */
  scrollSpeed: PropTypes.number,
}

ScrollBar.defaultProps = {
  scrollSpeed: 1,
  areaStyle: {},
  contentStyle: {},
}
