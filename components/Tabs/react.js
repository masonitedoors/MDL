import React from 'react'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const Tab = ({
  active, children, id, onTabClick,
}) => {
  const className = [s.tab, active && s['tab--active']].filter(v => v).join(' ')

  return (
    <li
      aria-selected={active ? 'true' : 'false'}
      className={className}
      onClick={() => onTabClick(id)}
      onKeyPress={e => onTabClick(id)}
      role="tab"
      tabIndex="0"
    >
      {children}
    </li>
  )
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  id: PropTypes.number.isRequired,
  onTabClick: PropTypes.func,
}

Tab.defaultProps = {
  children: null,
  onTabClick: () => false,
}

export { Tab }

function Tabs({ tabs, activeTab, onTabClick }) {
  const tabListItems = () =>
    tabs.map(({ id, children }) => (
      <Tab active={id === activeTab} key={id} id={id} onTabClick={onTabClick}>
        {children}
      </Tab>
    ))

  return (
    <ul role="tablist" className={s.tabs}>
      {tabListItems()}
    </ul>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ).isRequired,
  activeTab: PropTypes.number,
  onTabClick: PropTypes.func,
}

Tabs.defaultProps = {
  activeTab: null,
  onTabClick: null,
}

export default Tabs
