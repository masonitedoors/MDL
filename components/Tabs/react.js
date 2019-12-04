import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Tab = ({
  active, children, id, onTabClick, size,
}) => (
  <li
    aria-selected={active ? 'true' : 'false'}
    className={cx('tab', {
      'tab--active': active,
      'tab--sm': size && size === 'sm',
    })}
    onClick={() => onTabClick(id)}
    onKeyPress={e => onTabClick(id)}
    role="tab"
    tabIndex="0"
  >
    {children}
  </li>
)

export { Tab }

export const Tabs = ({
  tabs, activeTab, onTabClick, size,
}) => {
  const tabListItems = () =>
    tabs.map(({ id, children }) => (
      <Tab active={id === activeTab} key={id} id={id} size={size} onTabClick={onTabClick}>
        {children}
      </Tab>
    ))

  return (
    <ul role="tablist" className={cx('tabs')}>
      {tabListItems()}
    </ul>
  )
}

const size = { propType: PropTypes.oneOf(['sm']), defaultProp: null }

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ).isRequired,
  activeTab: PropTypes.number,
  onTabClick: PropTypes.func,
  size: size.propType,
}

Tabs.defaultProps = {
  activeTab: null,
  onTabClick: null,
  size: size.defaultProp,
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  id: PropTypes.number.isRequired,
  onTabClick: PropTypes.func,
  size: size.propType,
}

Tab.defaultProps = {
  children: null,
  onTabClick: () => false,
  size: size.defaultProp,
}

export default Tabs
