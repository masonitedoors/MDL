import React, { useState, useReducer } from 'react'
import { mChevronsLeft, mChevronsRight } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const locationShape = { pathname: PropTypes.string }

const menuReducer = (state, { type, index: selectedIndex = null }) => {
  switch (type) {
    case 'SHOW_MENU':
      return state.map((showing, i) => (selectedIndex === i ? true : showing))
    case 'HIDE_ALL_MENUS':
      return state.map(showing => false)
    default:
      return state
  }
}

const Submenu = ({
  items, expanded, location, dispatchMenuState,
}) => (
  <ul
    onMouseOut={() => dispatchMenuState({ type: 'HIDE_ALL_MENUS' })}
    onBlur={() => dispatchMenuState({ type: 'HIDE_ALL_MENUS' })}
    className={cx('sidebar-nav-submenu', {
      'sidebar-nav-submenu--expanded': expanded,
    })}
  >
    {items.map(({ label, href = '#', onClick }) => (
      <li key={label}>
        <a
          className={cx('menu-item-link', {
            'menu-item-link--active': location && location.pathname === href,
          })}
          href={href}
          tabIndex="0"
          onClick={e => {
            if (onClick) {
              e.preventDefault()
              onClick()
              console.log(location, href)
            }
          }}
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
)

Submenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  expanded: PropTypes.bool.isRequired,
  location: PropTypes.shape(locationShape).isRequired,
  dispatchMenuState: PropTypes.func.isRequired,
}

const MainMenuItem = ({
  icon,
  href,
  label,
  onClick,
  items,
  index,
  active,
  location,
  menuState,
  dispatchMenuState,
  showMainMenuLabels,
  showingMainMenuLabels,
}) => {
  const onMouseOver = () => {
    dispatchMenuState({ type: 'HIDE_ALL_MENUS' })
    if (items.length > 0) dispatchMenuState({ type: 'SHOW_MENU', index })
  }

  return (
    <li
      key={label}
      className={cx('menu-item', { 'menu-item--active': active || false })}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      <a
        tabIndex="0"
        className={cx('menu-item-link')}
        href={href}
        onClick={e => {
          if (onClick) {
            e.preventDefault()
            onClick()
          }
        }}
      >
        <span className={cx('menu-item-link__icon')}>{icon}</span>
        <span
          className={cx('menu-item-link__label', {
            'menu-item-link__label--hide': !showingMainMenuLabels,
            'menu-item-link__label--hidden': !showMainMenuLabels,
          })}
        >
          {label}
        </span>
      </a>

      {items.length > 0 && (
        <Submenu
          items={items}
          location={location}
          expanded={menuState[index]}
          dispatchMenuState={dispatchMenuState}
        />
      )}
    </li>
  )
}

MainMenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.shape(locationShape).isRequired,
  menuState: PropTypes.arrayOf(PropTypes.bool).isRequired,
  dispatchMenuState: PropTypes.func.isRequired,
  showMainMenuLabels: PropTypes.bool.isRequired,
  showingMainMenuLabels: PropTypes.bool.isRequired,
}

MainMenuItem.defaultProps = {
  active: undefined,
  href: '#',
  items: [],
  onClick: null,
}

export const SidebarNav = ({
  menuItems = [],
  bottomMenuItems = [],
  logo,
  location,
  expandedCb,
}) => {
  const [menuState, dispatchMenuState] = useReducer(menuReducer, menuItems.map(v => false))
  const [showingMainMenuLabels, setShowingMainMenuLabels] = useState(false)
  const [showMainMenuLabels, setShowMainMenuLabels] = useState(false)
  const menuItemDependencies = {
    location,
    menuState,
    dispatchMenuState,
    showMainMenuLabels,
    showingMainMenuLabels,
  }

  expandedCb(showingMainMenuLabels)

  return (
    <aside className={cx('sidebar')}>
      <nav
        className={cx('main-menu', {
          'main-menu--expanded': showingMainMenuLabels,
        })}
        onTransitionEnd={() => setShowMainMenuLabels(showingMainMenuLabels)}
      >
        <ul className={cx('main-menu__top')}>
          <li className={cx(['menu-item', 'menu-item--logo'])}>{logo}</li>
          {menuItems.map((props, index) => (
            <MainMenuItem index={index} {...props} {...menuItemDependencies} />
          ))}
        </ul>
        <ul className={cx('main-menu__bottom')}>
          {bottomMenuItems.map((props, index) => (
            <MainMenuItem index={index} {...props} {...menuItemDependencies} />
          ))}
        </ul>
      </nav>

      <div
        className={cx('expand-btn')}
        onClick={() => setShowingMainMenuLabels(!showingMainMenuLabels)}
        onKeyDown={e => e.key === 'Enter' && setShowingMainMenuLabels(!showingMainMenuLabels)}
        title="Press enter to toggle display of main menu item labels"
        tabIndex={0}
        role="button"
      >
        <span
          className={cx('expand-btn__icon')}
          dangerouslySetInnerHTML={{
            __html: showMainMenuLabels ? mChevronsLeft : mChevronsRight,
          }}
        />
      </div>
    </aside>
  )
}

const menuItemShape = PropTypes.arrayOf(
  PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  }),
)

SidebarNav.propTypes = {
  logo: PropTypes.node,
  location: PropTypes.shape(locationShape),
  menuItems: menuItemShape,
  bottomMenuItems: menuItemShape,
  expandedCb: PropTypes.func,
}

SidebarNav.defaultProps = {
  logo: null,
  location: {},
  menuItems: [],
  bottomMenuItems: [],
  expandedCb: () => {},
}

export const SidebarNavLayout = props => {
  const [expanded, setExpanded] = useState(false)
  const { children } = props
  return (
    <div>
      <SidebarNav {...props} expandedCb={expanded => setExpanded(expanded)} />
      <div className={cx('content', expanded && 'content--main-menu-expanded')}>{children}</div>
    </div>
  )
}

SidebarNavLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SidebarNavLayout
