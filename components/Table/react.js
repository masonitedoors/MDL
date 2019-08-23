import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { React as TextField } from 'components/TextField'
import { React as Checkbox } from 'components/Checkbox'
import { React as BulkEditPopover } from 'components/BulkEditPopover'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

export const TableContext = React.createContext({})

const cx = classNames.bind(styles)

const getHeaderColWidths = (table, headerColsLength) =>
  Array.from(table.querySelector('tr').children)
    .filter((col, i) => headerColsLength > i)
    .map(col => window.getComputedStyle(col).width)

export const Table = ({
  header,
  footer,
  body,
  bodyOverride,
  headerCols,
  headerRows = 1,
  fullWidth,
}) => {
  const tableRef = useRef()
  const overflowRef = useRef()
  const bulkEditPopoverRef = useRef()

  const initialCellState = {
    id: null,
    tableId: null,
    x: null,
    y: null,
  }
  const [activeCell, setActiveCell] = useState(initialCellState)
  const [hoveredCell, setHoveredCell] = useState(initialCellState)
  const [bulkEditInputValue, setBulkEditInputValue] = useState('')
  const [scrollLeft, setScrollLeft] = useState(0)
  const [formControl, setFormControl] = useState(null)
  const [formControlType, setFormControlType] = useState(null)
  const [formControlProps, setFormControlProps] = useState(null)

  const clearAllCellStates = () => {
    setActiveCell({})
    setHoveredCell({})
    setBulkEditInputValue('')
  }

  const getBulkEditPopoverPosition = () => {
    if (!tableRef.current) {
      return false
    }
    let cellPosition
    const rows = tableRef.current.querySelectorAll('tr')

    Array.from(rows).forEach((row, y) => {
      const cell = Array.from(row.children).find(
        (col, x) => hoveredCell.x === x && hoveredCell.y === y,
      )

      if (cell) {
        window.foundCell = cell
        cellPosition = {
          height: cell.offsetHeight,
          top: cell.offsetTop,
          left: cell.offsetLeft - scrollLeft,
          width: cell.offsetWidth,
        }
      }
    })
    return cellPosition
  }

  const getPopoverPosition = () => {
    if (activeCell.id) {
      return activeCell.popDirection
    }
    if (hoveredCell.id) {
      return hoveredCell.popDirection
    }
  }

  const handleCellMouseLeave = event => {
    if (!(event.relatedTarget === bulkEditPopoverRef.current)) {
      !activeCell.id && clearAllCellStates()
    }
  }

  const getSelectionDirection = () => {
    let retVal
    if (activeCell.id) {
      retVal = activeCell.selectionDirection
    }
    if (hoveredCell.id) {
      retVal = hoveredCell.selectionDirection
    }
    return retVal
  }

  const getCellClasses = dataType => {
    const dType = typeof dataType === 'function' ? dataType() : dataType
    return classNames([
      'mdl-table__cell',
      {
        'mdl-table__cell--align-right': typeof dType === 'number',
      },
    ])
  }

  const cellSelectionClasses = ({
    x = null,
    y = null,
    colsLength,
    rowsLength,
    tableId,
    direction,
  }) =>
    classNames([
      'mdl-table__cell-selection',
      direction === 'row' && {
        'mdl-table__cell-selection--row-start': x === headerCols,
        'mdl-table__cell-selection--row':
          (activeCell.tableId === tableId && activeCell.y === y)
          || (hoveredCell.tableId === tableId && hoveredCell.y === y),
        'mdl-table__cell-selection--row-end': x === colsLength - 1,
      },
      direction === 'column' && {
        'mdl-table__cell-selection--col-start': y === headerRows,

        'mdl-table__cell-selection--col':
          (activeCell.tableId === tableId && activeCell.x === x)
          || (hoveredCell.tableId === tableId && hoveredCell.x === x),

        'mdl-table__cell-selection--col-end': y === rowsLength - 1,
      },
    ])

  return (
    <TableContext.Provider
      value={{
        activeCell,
        hoveredCell,
        setActiveCell,
        setHoveredCell,
        clearAllCellStates,
        cellSelectionClasses,
        selectionDirection: getSelectionDirection(),
        getCellClasses,
        setFormControl,
        setFormControlType,
        setFormControlProps,
        bulkEditPopoverRef,
        headerCols,
        headerRows,
        bulkEditInputValue,
        setBulkEditInputValue,
        handleCellMouseLeave,
        fixedClassName: cx('mdl-table__cell--fixed'),
        getFixedCellStyle: n => ({
          left: tableRef.current
            ? getHeaderColWidths(tableRef.current, headerCols).reduce(
              (acc, width, i) =>
                (headerCols > i && i !== 0 ? acc + Number(width.replace(/[^0-9\\.]/g, '')) : acc),
              0,
            )
            : 'initial',
        }),
      }}
    >
      <div className={cx('mdl-table-outer-wrapper')}>
        <BulkEditPopover
          {...getBulkEditPopoverPosition()}
          visible={hoveredCell.id}
          focused={activeCell.id}
          popDirection={getPopoverPosition()}
          ref={bulkEditPopoverRef}
          formControl={formControl}
          formControlType={formControlType}
          formControlProps={{
            ...formControlProps,
            onChange: val => {
              switch (formControlType) {
                case Checkbox:
                  setBulkEditInputValue(!bulkEditInputValue)
                  return formControlProps.onChange(!bulkEditInputValue)

                case TextField:
                  return setBulkEditInputValue(
                    formControlProps.onChange
                      ? formControlProps.onChange(bulkEditInputValue)(val)
                      : val,
                  )
                default:
                  return val
              }
            },
            checked: bulkEditInputValue,
            value: bulkEditInputValue,
          }}
          value={bulkEditInputValue}
          activeCell={activeCell}
          clearAllCellStates={clearAllCellStates}
          onMouseLeave={() => !activeCell.id}
        />
        <div
          ref={overflowRef}
          className={cx('mdl-table-inner-wrapper')}
          onScroll={() => setScrollLeft(overflowRef.current.scrollLeft)}
        >
          <table
            ref={tableRef}
            className={cx('mdl-table', {
              'mdl-table--full-width': fullWidth,
              'mdl-table--2-colspan-header': headerCols === 2,
            })}
          >
            {header && <thead>{header}</thead>}
            {bodyOverride || <tbody>{body}</tbody>}
            {footer && <tfoot>{footer}</tfoot>}
          </table>
        </div>
      </div>
    </TableContext.Provider>
  )
}

Table.propTypes = {
  header: PropTypes.element,
  fullWidth: PropTypes.bool,
}

Table.defaultProps = {
  headerCols: 0,
  fullWidth: false,
}

export default Table
