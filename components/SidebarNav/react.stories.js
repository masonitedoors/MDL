import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import {
  mEntry, mExport, mContact, mSignout,
} from '@masonite/svg-icons'
import logo from 'images/masonite-icon.png'
import SidebarNavLayout from './react'
import Readme from './react.README.md'

const addKey = item => ({ ...item, key: item.label })

const combatStorybookPaddingStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
}

const Content = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </>
)

const menuItems = [
  {
    label: 'Exterior Doors',
    icon: <span dangerouslySetInnerHTML={{ __html: mEntry }} />,
    active: true,
    href: '/',
    items: [
      {
        label: 'Menu Item 1',
        href: '/menu/1',
        onClick,
      },
      {
        label: 'Menu Item 2',
        href: '/menu/2',
        onClick,
      },
    ].map(addKey),
  },
  {
    label: 'External Link',
    icon: <span dangerouslySetInnerHTML={{ __html: mExport }} />,
    href: '#',
  },
  {
    label: 'Contact',
    icon: <span dangerouslySetInnerHTML={{ __html: mContact }} />,
    href: '#',
  },
].map(addKey)

const bottomMenuItems = [
  {
    label: 'Log Out',
    icon: <span dangerouslySetInnerHTML={{ __html: mSignout }} />,
  },
].map(addKey)

const Logo = (
  <a href="/" tabIndex="0">
    <img src={logo} alt="Back to Landing" />
  </a>
)

const onClick = () => console.log('Mock onClick call')

const location = {
  pathname: '/glass/inventory',
}

storiesOf('SidebarNav', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('Default', () => {
    const hasLogo = boolean('Has Logo', true)

    return (
      <div style={combatStorybookPaddingStyle}>
        <SidebarNavLayout
          logo={hasLogo && Logo}
          location={location}
          menuItems={menuItems}
          bottomMenuItems={bottomMenuItems}
        >
          <div style={{ padding: 20 }}>
            <h1>Page Title</h1>
            <Content />
          </div>
        </SidebarNavLayout>
      </div>
    )
  })
  .add('Header Above Example', () => {
    const hasLogo = boolean('Has Logo', false)
    const headerHeight = '60px'
    const heightStyle = {
      style: {
        height: `calc(100vh - ${headerHeight})`,
      },
    }

    return (
      <div style={combatStorybookPaddingStyle}>
        <header style={{ backgroundColor: '#343639', padding: 8, height: headerHeight }}>
          <h1>Page Title</h1>
        </header>
        <SidebarNavLayout
          logo={hasLogo && Logo}
          location={location}
          menuItems={menuItems}
          bottomMenuItems={bottomMenuItems}
          layoutWrapperProps={heightStyle}
          contentWrapperProps={heightStyle}
        >
          <div style={{ padding: 20 }}>
            <h2>Heading</h2>
            <Content />
          </div>
        </SidebarNavLayout>
      </div>
    )
  })
