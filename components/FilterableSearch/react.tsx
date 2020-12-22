import React, { PureComponent } from 'react'
import classNames from 'classnames/bind'
import { mFilter, mChevronDown } from '@masonite/svg-icons'
import { React as TextField } from 'components/TextField'
import { React as Checkbox } from 'components/Checkbox'
import style from './style.module.scss'

const cx = classNames.bind(style)

interface FilterableSearchState {
  showFilters: boolean
}

export interface FilterableSearchProps {
  buttonLabel?: string
  dropdownIcon?: 'chevronDown' | 'filter'
  onFilterChange: any
  onInputChange?: any
  onSubmit?: any
  value: string
  filterChoices: {
    label: string
    value: string
    checked: boolean
  }[]
  placeholder: string
}

class FilterableSearch extends PureComponent<FilterableSearchProps> {
  state: FilterableSearchState = {
    showFilters: false,
  }

  dropdownIcons: Record<string, string> = {
    chevronDown: mChevronDown,
    filter: mFilter,
  }

  dropdownMenuRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick)
  }

  handleClick = ({ target }) => {
    const {
      dropdownMenuRef,
      state: { showFilters },
    } = this

    dropdownMenuRef.current
      && showFilters
      && !dropdownMenuRef.current.contains(target)
      && this.setState({ showFilters: false })
  }

  render() {
    const {
      buttonLabel = 'Search',
      dropdownIcon = 'chevronDown',
      onFilterChange,
      onInputChange,
      onSubmit,
      filterChoices = [],
      placeholder = 'Search',
      value,
    } = this.props

    const { showFilters } = this.state

    const selectedDropdownIcon = dropdownIcon && this.dropdownIcons[dropdownIcon]

    const SearchButton = () => (
      <button
        type="button"
        onClick={() => onSubmit && onSubmit(value)}
        className={cx(['filterable-search__btn'])}
      >
        {buttonLabel}
      </button>
    )

    const DropdownToggle = () => (
      <button
        type="button"
        className={cx([
          'filterable-search__dropdown-toggle',
          { 'filterable-search__dropdown-toggle--active': showFilters },
        ])}
        onClick={() =>
          this.setState((prevState: FilterableSearchState) => ({
            showFilters: !prevState.showFilters,
          }))
        }
      >
        <div
          className={cx([
            'filterable-search__dropdown-toggle-icon',
            { 'filterable-search__dropdown-toggle-icon--active': showFilters },
          ])}
          dangerouslySetInnerHTML={{ __html: selectedDropdownIcon }}
        />
      </button>
    )

    const DropdownMenu = ({ showFilters }: any) => (
      <ul
        className={cx([
          'filterable-search__dropdown-menu',
          { 'filterable-search__dropdown-menu--open': showFilters },
        ])}
      >
        {filterChoices.map(({ label, value, checked }, index) => (
          <li className={cx(['filterable-search__dropdown-menu-item'])} key={value}>
            {/* eslint-disable-next-line */}
            <label
              className={cx(['filterable-search__dropdown-menu-item-label'])}
              htmlFor={`${value}${index}`}
            >
              <Checkbox
                checked={checked}
                onChange={() => onFilterChange({ label, value, checked })}
              />
              <span className={cx(['filterable-search__dropdown-menu-item-label-text'])}>
                {label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    )

    return (
      <div className={cx(['filterable-search'])}>
        <TextField
          placeholder={placeholder}
          onChange={(value: string) => onInputChange(value)}
          onKeyDown={(ev: KeyboardEvent) => {
            if (ev.key === 'Enter' && onSubmit) onSubmit((ev.target as HTMLInputElement).value)
          }}
          value={value}
        />
        {onSubmit && <SearchButton />}
        <div ref={this.dropdownMenuRef}>
          <DropdownToggle />
          <DropdownMenu showFilters={showFilters} />
        </div>
      </div>
    )
  }
}

export default FilterableSearch
