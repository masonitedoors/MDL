import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { React as TextField } from 'components/TextField'
import { React as Checkbox } from 'components/Checkbox'
import classNames from 'classnames/bind'
import BulkEditPopover from 'components/BulkEditPopover/react'
import styles from './style.module.scss'

export const TableContext = React.createContext({})

const cx = classNames.bind(styles)

const getHeaderColWidths = (table, headerColsLength = null) =>
  (table
    && table.querySelector('tbody tr:first-child td')
    && Array.from(table.querySelector('tbody tr:first-child').children)
      .filter((col, i) => (headerColsLength !== null ? headerColsLength > i : true))
      .map(col => window.getComputedStyle(col).width))
  || []

export const Table = ({
  stickyHeader,
  header,
  height,
  footer,
  body,
  bodyOverride,
  children,
  headerCols,
  headerRows,
  fullWidth,
  sortableColumns,
  stripedRows,
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
  const [selectionLocked, setSelectionLock] = useState(false)
  const [allCellsSelected, setAllCellsSelected] = useState(false)
  const [bulkEditInputValue, setBulkEditInputValue] = useState('')
  const [scrollLeft, setScrollLeft] = useState(0)
  const [formControlType, setFormControlType] = useState(null)
  const [formControlProps, setFormControlProps] = useState(null)

  const clearAllCellStates = () => {
    setActiveCell(null)
    setHoveredCell(null)
    setSelectionLock(false)
    setAllCellsSelected(false)
    setBulkEditInputValue('')
  }

  const getBulkEditPopoverPosition = () => {
    if (!tableRef.current || !hoveredCell) {
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
    if (activeCell && activeCell.popDirection) {
      return activeCell.popDirection
    }
    if (hoveredCell && hoveredCell.popDirection) {
      return hoveredCell.popDirection
    }
    return null
  }

  const getSelectionDirection = () => {
    if (activeCell && activeCell.selectionDirection) {
      return activeCell.selectionDirection
    }
    if (hoveredCell && hoveredCell.selectionDirection) {
      return hoveredCell.selectionDirection
    }
    return null
  }

  const handleBulkEditPopoverMouseLeave = event => {
    if (!(event.relatedTarget !== bulkEditPopoverRef.current)) {
      !selectionLocked && clearAllCellStates()
    }
  }

  const handleCellMouseLeave = event => {
    if (!(event.relatedTarget === bulkEditPopoverRef.current)) {
      !selectionLocked && clearAllCellStates()
    }
  }

  const getTheadClasses = () => cx('table__header')

  const getCellClasses = (dataType = null, active = false) => {
    const dType = typeof dataType === 'function' ? dataType() : dataType
    return cx([
      'table__cell',
      {
        'table__cell--align-left': typeof dType === 'string',
        'table__cell--align-right': typeof dType === 'number',
        'table__cell--active': active,
      },
    ])
  }

  const getColumnInputVariant = columnIndex => (columnIndex % 2 ? 'light' : 'dark')

  const cellSelectionClasses = ({
    x = null,
    y = null,
    colsLength,
    rowsLength,
    tableId,
    direction = null,
    allSelected = false,
  }) =>
    (allSelected
      ? cx([
        'table__cell-selection',
        'table__cell-selection--all',
        {
          'table__cell-selection--top-left': x === headerCols && y === headerRows,
          'table__cell-selection--top': x !== headerCols && x !== colsLength && y === headerRows,
          'table__cell-selection--top-right': x === colsLength - 1 && y === headerRows,
          'table__cell-selection--right': x === colsLength - 1 && y > headerRows,
          'table__cell-selection--bottom-right': x === colsLength - 1 && y === rowsLength - 1,
          'table__cell-selection--bottom':
              x !== headerCols && x !== colsLength && y === rowsLength - 1,
          'table__cell-selection--bottom-left': x === headerCols && y === rowsLength - 1,
          'table__cell-selection--left': x === headerCols && y > headerRows,
        },
      ])
      : (activeCell || hoveredCell)
        && cx([
          'table__cell-selection',
          direction === 'row' && {
            'table__cell-selection--row-start': x === headerCols,
            'table__cell-selection--row':
              (activeCell && activeCell.tableId === tableId && activeCell.y === y)
              || (hoveredCell && hoveredCell.tableId === tableId && hoveredCell.y === y),
            'table__cell-selection--row-end': x === colsLength - 1,
          },
          direction === 'column' && {
            'table__cell-selection--col-start': y === headerRows,
            'table__cell-selection--col':
              (activeCell && activeCell.tableId === tableId && activeCell.x === x)
              || (hoveredCell && hoveredCell.tableId === tableId && hoveredCell.x === x),
            'table__cell-selection--col-end': y === rowsLength - 1,
          },
        ]))

  const updateHeaderColWidths = () => {
    if (!(tableRef && tableRef.current)) return false

    const widths = getHeaderColWidths(tableRef.current)

    return (
      widths
      && tableRef.current.querySelectorAll('thead th').forEach((th, i) => (th.style.width = widths[i]))
    )
  }

  useEffect(() => {
    updateHeaderColWidths()
    window.addEventListener('resize', updateHeaderColWidths)

    return () => window.removeEventListener('resize', updateHeaderColWidths)
  }, [])

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
        getTheadClasses,
        getCellClasses,
        getColumnInputVariant,
        getHeaderColWidths,
        formControlType,
        formControlProps,
        overflowRef,
        setFormControlType,
        setFormControlProps,
        bulkEditPopoverRef,
        headerCols,
        headerRows,
        allCellsSelected,
        setAllCellsSelected,
        bulkEditInputValue,
        setBulkEditInputValue,
        handleCellMouseLeave,
        selectionLocked,
        setSelectionLock,
        tableRef,
        fixedClassName: cx('table__cell--fixed'),
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
      <div className={cx('table-outer-wrapper')}>
        <BulkEditPopover
          {...getBulkEditPopoverPosition()}
          visible={hoveredCell && (hoveredCell.id || allCellsSelected)}
          focused={activeCell && (activeCell.id || allCellsSelected)}
          popDirection={getPopoverPosition()}
          ref={bulkEditPopoverRef}
          selectionLocked={selectionLocked}
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
            onClick: () => formControlProps.onFocus,
            onKeyDown: event => {
              switch (formControlType) {
                case TextField:
                  return (
                    formControlProps.onKeyDown
                    && formControlProps.onKeyDown(bulkEditInputValue)(event)
                  )
                default:
                  return event
              }
            },
            checked: bulkEditInputValue,
            value: bulkEditInputValue,
          }}
          value={bulkEditInputValue}
          activeCell={activeCell}
          clearAllCellStates={clearAllCellStates}
          onMouseLeave={handleBulkEditPopoverMouseLeave}
        />
        <div
          ref={overflowRef}
          className={cx({
            'table-inner-wrapper': headerCols,
          })}
          style={{ height }}
          onScroll={() => setScrollLeft(overflowRef.current.scrollLeft)}
        >
          <table
            ref={tableRef}
            className={cx('table', {
              'table--striped-rows': stripedRows,
              'table--full-width': fullWidth,
              'table--2-colspan-header': headerCols === 2,
              'table--sticky': stickyHeader,
              'table--sortable': sortableColumns,
            })}
          >
            {header && <thead className={cx('table__header')}>{header}</thead>}
            {children}
            {bodyOverride || (body && <tbody>{body}</tbody>)}
            {footer && <tfoot>{footer}</tfoot>}
          </table>
        </div>
      </div>
    </TableContext.Provider>
  )
}

Table.propTypes = {
  fullWidth: PropTypes.bool,
  bodyOverride: PropTypes.bool,
  headerCols: PropTypes.number,
  headerRows: PropTypes.number,
  stickyHeader: PropTypes.bool,
}

Table.defaultProps = {
  fullWidth: false,
  bodyOverride: false,
  headerCols: 1,
  headerRows: 1,
  height: 'initial',
  stickyHeader: false,
  stripedRows: false,
}

export { SortIcon } from './SortIcon'
