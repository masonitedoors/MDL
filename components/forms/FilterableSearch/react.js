import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { mChevronDown } from '@masonite/svg-icons'
import { React as Input } from 'components/forms/Input'
import { React as Checkbox } from 'components/forms/Checkbox'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

export default function FilterableSearch(props) {
  const [showFilters, toggleFilters] = useState(false)

  const { handleFilterChange = null, filterChoices = [] } = props

  return (
    <div className={cx(['FilterableSearch'])}>
      <Input />
      <SearchButton />
      <button
        type="button"
        className={cx(['FilterableSearch__dropdown-toggle'])}
        onClick={() => toggleFilters(!showFilters)}
      >
        <div
          className={cx(['FilterableSearch__dropdown-toggle-icon'])}
          dangerouslySetInnerHTML={{ __html: mChevronDown }}
        />
      </button>
      {showFilters && filterChoices.length > 0 && (
        <div className={cx(['FilterableSearch__dropdown-menu'])}>
          {filterChoices.map(({ label, value, checked }, index) => (
            // eslint-disable-next-line
            <label htmlFor={`filterItem${index}`} key={index}>
              <Checkbox
                name={`filterItem${index}`}
                checked={checked}
                onChange={() => handleFilterChange(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

const SearchButton = () => (
  <button type="button" className={cx(['FilterableSearch__btn'])}>
    Search
  </button>
)

FilterableSearch.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filterChoices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
}
