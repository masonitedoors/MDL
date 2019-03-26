import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Radio = ({
  checked, label, onChange, value,
}) => {
  const Label = label ? 'label' : 'div'
  return (
    <Label className={cx('radio')} key={value}>
      <div className={cx('radio__input-wrapper')}>
        <input
          className={s.radio__input}
          aria-checked={checked}
          tabIndex={0}
          onClick={onChange}
          onKeyPress={onChange}
          type="radio"
          checked={checked}
          value={value}
          readOnly
        />
      </div>
      {label && (
        <span className={cx(['radio__label', checked && 'radio__label--checked'])}>{label}</span>
      )}
    </Label>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
}

Radio.defaultProps = {
  onChange: null,
  value: undefined,
  label: '',
}

export default memo(Radio)
