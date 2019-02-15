import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { mChevronDown } from '@masonite/svg-icons'
import { React as Input } from 'components/forms/Input'
import { React as Checkbox } from 'components/forms/Checkbox'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

export default class FilterableSearch extends Component {
  state = {
    showFilters: false,
  }

  dropdownMenuRef = React.createRef()

  componentWillMount() {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick = ({ target }) => {
    const { showFilters } = this.state
    const dropdownMenu = this.dropdownMenuRef.current

    if (showFilters && !dropdownMenu.contains(target)) {
      this.setState({ showFilters: false })
    }
  }

  render() {
    const {
      handleFilterChange,
      handleSearch,
      filterChoices = [],
      placeholder,
    } = this.props

    const { showFilters } = this.state

    const SearchButton = () => {
      const { handleSearch } = this.props
      return (
        <button
          type="button"
          onClick={handleSearch}
          className={cx(['FilterableSearch__btn'])}
        >
          Search
        </button>
      )
    }

    const DropdownToggle = () => (
      <button
        type="button"
        className={cx(['FilterableSearch__dropdown-toggle'])}
        onClick={() => this.setState(prevState => ({
          showFilters: !prevState.showFilters,
        }))
        }
      >
        <div
          className={cx(['FilterableSearch__dropdown-toggle-icon'])}
          dangerouslySetInnerHTML={{ __html: mChevronDown }}
        />
      </button>
    )

    const DropdownMenu = ({ show }) => (
      <ul
        className={cx([
          'FilterableSearch__dropdown-menu',
          { 'FilterableSearch__dropdown-menu--open': show },
        ])}
      >
        {filterChoices.map(({ label, value, checked }, index) => (
          <li
            className={cx(['FilterableSearch__dropdown-menu-item'])}
            key={value}
          >
            {/* eslint-disable-next-line */}
            <label
              className={cx(['FilterableSearch__dropdown-menu-item-label'])}
              htmlFor={`${value}${index}`}
            >
              <Checkbox
                name={`${value}${index}`}
                checked={checked}
                onChange={() => handleFilterChange(value)}
              />
              <span
                className={cx([
                  'FilterableSearch__dropdown-menu-item-label-text',
                ])}
              >
                {label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    )

    return (
      <div className={cx(['FilterableSearch'])}>
        <Input
          placeholder={placeholder}
          onKeyDown={ev => {
            if (ev.keyCode === 13) {
              handleSearch(ev.value)
            }
          }}
        />
        <SearchButton />
        <div ref={this.dropdownMenuRef}>
          <DropdownToggle />
          <DropdownMenu show={showFilters} />
        </div>
      </div>
    )
  }
}

FilterableSearch.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  filterChoices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
}

FilterableSearch.defaultProps = {
  placeholder: 'Search',
}
