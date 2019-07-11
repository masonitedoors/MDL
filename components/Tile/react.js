import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Tile = ({ selected, label, imageUrl }) => (
  <div className={cx('tile', { 'tile--selected': selected })}>
    {label}
    <div>{imageUrl}</div>
  </div>
)

export default Tile

Tile.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

Tile.defaultProps = {
  selected: false,
}
