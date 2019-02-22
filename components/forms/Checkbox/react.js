import React, { memo } from 'react'
import propTypes from 'prop-types'
import { mCheck } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

const Checkbox = ({ checked, disabled, onChange }) => (
  <div className={s.Checkbox} onClick={onChange}>
    <input className={s.Checkbox__checkbox} type="checkbox" checked={checked} readOnly />
    <div className={s['Checkbox__svg-wrapper']}>
      <svg
        className={cx(['Checkbox__svg-icon'], { 'Checkbox__svg-icon--checked': checked })}
        dangerouslySetInnerHTML={{ __html: mCheck }}
      />
    </div>
  </div>
)

export default memo(Checkbox)

Checkbox.propTypes = {
  checked: propTypes.bool.isRequired,
  disabled: propTypes.bool,
  onChange: propTypes.func,
}

Checkbox.defaultProps = {
  disabled: false,
  onChange: null,
}
