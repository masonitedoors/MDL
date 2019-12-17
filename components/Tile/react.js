import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { mCheck } from '@masonite/svg-icons'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Tile = ({
  selected, label, imageUrl, onClick, uppercase,
}) => (
  <div
    tabIndex="-1"
    onClick={onClick}
    onKeyPress={onClick}
    role="checkbox"
    aria-checked={selected}
    className={cx('tile', { 'tile--selected': selected })}
  >
    <svg className={cx('tile__selected-icon')} dangerouslySetInnerHTML={{ __html: mCheck }} />
    <div className={cx('tile__label', { 'tile__label--uppercase': uppercase })}>{label}</div>
    {imageUrl && (
      <div className={cx('tile__image')}>
        <img src={imageUrl} alt={label} />
      </div>
    )}
  </div>
)

export default Tile

Tile.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  uppercase: PropTypes.string,
}

Tile.defaultProps = {
  selected: false,
  onClick: null,
  uppercase: false,
}
