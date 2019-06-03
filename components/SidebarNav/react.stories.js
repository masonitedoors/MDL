import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  mEntry, mInterior, mExport, mContact, mSignout,
} from '@masonite/svg-icons'
import logo from 'images/masonite-icon.png'
import SidebarNav from './react'
import Readme from './react.README.md'

const addKey = item => ({ ...item, key: item.label })

storiesOf('SidebarNav', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('Default', () => {
    const onClick = () => console.log('Mock onClick call')
    const menuItems = [
      {
        label: 'Exterior Doors',
        icon: <span dangerouslySetInnerHTML={{ __html: mEntry }} />,
        href: '/',
        items: [
          {
            label: 'Net Price Management',
            href: '/',
            onClick,
          },
          {
            label: 'Glass Management',
            href: '/glass/inventory',
            onClick,
          },
          {
            label: 'Slab Management',
            href: '/slab/inventory',
            onClick,
          },
          {
            label: 'Factory Glazed Management',
            href: '/factory-glazed/inventory',
            onClick,
          },
        ].map(addKey),
      },
      {
        label: 'Interior Doors',
        icon: <span dangerouslySetInnerHTML={{ __html: mInterior }} />,
        href: '/interior/',
      },
      {
        label: 'Export',
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

    return (
      <div style={{ width: '100%', height: '100%', margin: '-8px' }}>
        <SidebarNav
          logo={(
            <a href="/" tabIndex="0">
              <img src={logo} alt="Back to Landing" />
            </a>
)}
          menuItems={menuItems}
          bottomMenuItems={bottomMenuItems}
        />
      </div>
    )
  })
