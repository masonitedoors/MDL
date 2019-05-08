import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { React as Button } from 'components/forms/button/Button'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const ButtonGroup = ({
  maxNumberPerRow, buttonArray, row, onChange,
}) => {
  const buttons = buttonArray.map(({ label, value }) => (
    <li key={value} className={cx(['button-group__li'])}>
      <Button
        // eslint-disable-next-line no-alert
        onClick={() => alert('click')}
        uppercase
        disabled={false}
      >
          Test Button
      </Button>
    </li>
  ))
  return <ul className={cx(['button-group', row && 'button-group--row'])}>{buttons}</ul>
}

ButtonGroup.propTypes = {
  maxNumberPerRow: PropTypes.number,
  row: PropTypes.bool,
  buttonArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}

ButtonGroup.defaultProps = {
  maxNumberPerRow: null,
  row: true,
}

export default memo(ButtonGroup)
