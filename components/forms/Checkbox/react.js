import React, { memo } from 'react'
import propTypes from 'prop-types'
import { mCheck } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Checkbox = ({ checked, disabled, onChange }) => (
  <div
    role="checkbox"
    aria-checked={checked}
    tabIndex={0}
    className={s.checkbox}
    onClick={onChange}
    onKeyPress={onChange}
  >
    <input className={s['checkbox-input']} type="checkbox" checked={checked} readOnly />
    <div className={s['checkbox-svg-wrapper']}>
      <svg
        className={cx(['checkbox-svg-icon'], { 'checkbox-svg-icon--checked': checked })}
        dangerouslySetInnerHTML={{ __html: mCheck }}
      />
    </div>
  </div>
)

Checkbox.propTypes = {
  checked: propTypes.bool.isRequired,
  disabled: propTypes.bool,
  onChange: propTypes.func,
}

Checkbox.defaultProps = {
  disabled: false,
  onChange: null,
}

export default memo(Checkbox)
