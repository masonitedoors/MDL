import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { mChevronDown } from '@masonite/svg-icons'
import { React as Input } from 'components/forms/Input'
import { React as Checkbox } from 'components/forms/Checkbox'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

export default class FilterableSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFilters: false,
    }

    this.dropdownMenuRef = React.createRef()
  }

  componentWillMount() {
    document.body.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick)
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
      handleInputChange,
      handleSearch,
      filterChoices = [],
      placeholder,
      value,
    } = this.props

    const { showFilters } = this.state

    const SearchButton = () => (
      <button
        type="button"
        onClick={() => handleSearch(value)}
        className={cx(['FilterableSearch__btn'])}
      >
        Search
      </button>
    )

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
          <li className={cx(['FilterableSearch__dropdown-menu-item'])} key={value}>
            {/* eslint-disable-next-line */}
            <label
              className={cx(['FilterableSearch__dropdown-menu-item-label'])}
              htmlFor={`${value}${index}`}
            >
              <Checkbox
                name={`${value}${index}`}
                checked={checked}
                onChange={() => handleFilterChange({ label, value, checked })}
              />
              <span className={cx(['FilterableSearch__dropdown-menu-item-label-text'])}>
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
          onChange={value => handleInputChange(value)}
          onKeyDown={ev => {
            if (ev.keyCode === 13) {
              handleSearch(ev.target.value)
            }
          }}
          value={value}
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
  handleInputChange: PropTypes.func,
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
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
  handleInputChange: null,
}
