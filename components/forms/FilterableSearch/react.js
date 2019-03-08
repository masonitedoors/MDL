import React, { PureComponent } from 'react'
import classNames from 'classnames/bind'
import { mFilter, mChevronDown } from '@masonite/svg-icons'
import { React as TextField } from 'components/forms/TextField'
import { React as Checkbox } from 'components/forms/Checkbox'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const cx = classNames.bind(style)

class FilterableSearch extends PureComponent {
  state = {
    showFilters: false,
  }

  dropdownIcons = {
    chevronDown: mChevronDown,
    filter: mFilter,
  }

  dropdownMenuRef = React.createRef()

  componentDidMount() {
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
      buttonLabel,
      dropdownIcon,
      onFilterChange,
      onInputChange,
      onSubmit,
      filterChoices = [],
      placeholder,
      value,
    } = this.props

    const { showFilters } = this.state

    const selectedDropdownIcon = this.dropdownIcons[dropdownIcon]

    const SearchButton = () => (
      <button
        type="button"
        onClick={() => onSubmit && onSubmit(value)}
        className={cx(['FilterableSearch__btn'])}
      >
        {buttonLabel}
      </button>
    )

    const DropdownToggle = () => (
      <button
        type="button"
        className={cx(['FilterableSearch__dropdown-toggle'])}
        onClick={() =>
          this.setState(prevState => ({
            showFilters: !prevState.showFilters,
          }))
        }
      >
        <div
          className={cx(['FilterableSearch__dropdown-toggle-icon'])}
          dangerouslySetInnerHTML={{ __html: selectedDropdownIcon }}
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
                onChange={() => onFilterChange({ label, value, checked })}
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
        <TextField
          placeholder={placeholder}
          onChange={value => onInputChange(value)}
          onKeyDown={ev => {
            if (ev.keyCode === 13 && onSubmit) onSubmit(ev.target.value)
          }}
          value={value}
        />
        {onSubmit && <SearchButton />}
        <div ref={this.dropdownMenuRef}>
          <DropdownToggle />
          <DropdownMenu show={showFilters} />
        </div>
      </div>
    )
  }
}

FilterableSearch.propTypes = {
  buttonLabel: PropTypes.string,
  dropdownIcon: PropTypes.oneOf(['chevronDown', 'filter']),
  onFilterChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
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
  buttonLabel: 'Search',
  dropdownIcon: 'chevronDown',
  placeholder: 'Search',
  onSubmit: undefined,
  onInputChange: undefined,
}

export default FilterableSearch
