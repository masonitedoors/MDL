import React, { FC } from 'react'
import { mCheck } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export interface CheckboxProps {
  checked: boolean
  disabled?: boolean
  onChange?: any
}

export const Checkbox: FC<CheckboxProps> = ({ checked, disabled = false, onChange = null }) => (
  <div
    role="checkbox"
    aria-checked={checked}
    tabIndex={0}
    className={cx('checkbox')}
    onClick={onChange}
    onKeyPress={onChange}
  >
    <input className={cx('checkbox-input')} type="checkbox" checked={checked} readOnly />
    <div className={cx('checkbox-svg-wrapper')}>
      <svg
        className={cx('checkbox-svg-icon', { 'checkbox-svg-icon--checked': checked })}
        dangerouslySetInnerHTML={{ __html: mCheck }}
      />
    </div>
  </div>
)

export default Checkbox
