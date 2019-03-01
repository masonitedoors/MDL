import React, { Component } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.links = props.links

    // this.state = {
    //   expanded: true,
    // }
  }

  getMenuItems() {
    return this.links.map(({
      text, url, image, id,
    }) => (
      <li key={id}>
        <a href={url}>
          <span>{text}</span>
        </a>
      </li>
    ))
  }

  render() {
    return (
      <aside className={cx('sidebar')}>
        <div>icon</div>
        <ul>{this.getMenuItems()}</ul>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.element,
      url: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ),
}

Sidebar.defaultProps = {
  links: [],
}

export default Sidebar
