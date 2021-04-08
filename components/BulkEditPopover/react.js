import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import { React as Checkbox } from 'components/Checkbox'
import { React as TextField } from 'components/TextField'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const BulkEditPopover = React.forwardRef(
  (
    {
      formControlType,
      formControlProps,
      left = 0,
      top = 0,
      width = 0,
      popDirection = 'top',
      visible = false,
      focused = false,
      onMouseLeave,
      clearAllCellStates,
      value,
    },
    ref,
  ) => {
    const bulkEditOutsideClickHandler = event => {
      if (ref.current) !ref.current.contains(event.target) && clearAllCellStates()
    }

    useEffect(() => {
      window.addEventListener('click', bulkEditOutsideClickHandler, true)
      return window.removeEventListener('click', bulkEditOutsideClickHandler)
    }, [])

    const getDirectionStyle = () => {
      const style = {
        top: {
          bottom: '100%',
          top: 'auto',
        },
        left: {
          right: '100%',
          left: 'auto',
        },
      }
      return style[popDirection]
    }

    switch (formControlType) {
      case TextField:
        formControlProps = {
          removeMargin: true,
          ...formControlProps,
        }
        break
      default:
    }

    return (
      <div
        ref={ref}
        className={cx('bulk-edit-popover', {
          'bulk-edit-popover--visible': visible || focused,
          'bulk-edit-popover--focused': focused,
          'bulk-edit-popover--w-textfield': formControlType === TextField,
          'bulk-edit-popover--w-checkbox': formControlType === Checkbox,
        })}
        style={{
          top,
          left,
          width,
          ...getDirectionStyle(),
        }}
        onMouseLeave={onMouseLeave}
        data-testid="bulkEditPopover"
      >
        {formControlType && React.createElement(formControlType, { ...formControlProps })}
      </div>
    )
  },
)

export default BulkEditPopover
