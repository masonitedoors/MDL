import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import { mChevronRight, mBook, mFlag } from '@masonite/svg-icons'
import Sidebar from './react'

storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withState({ activeTab: 1 })(({ store }) => {
      const links = [
        {
          id: 1,
          image: <svg dangerouslySetInnerHTML={{ __html: mBook }} />,
          text: 'Lorem Ipsum',
          link: '#',
        },
        {
          id: 2,
          image: <svg dangerouslySetInnerHTML={{ __html: mChevronRight }} />,
          text: 'Lorem Ipsum',
          link: '#',
        },
        {
          id: 3,
          image: <svg dangerouslySetInnerHTML={{ __html: mFlag }} />,
          text: 'Lorem Ipsum',
          link: '#',
        },
      ]
      return <Sidebar links={links} />
    }),
  )
