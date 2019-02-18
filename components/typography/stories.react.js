import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Heading, P } from './react'

storiesOf('Typography/Content', module)
  .addDecorator(withKnobs)
  .add('All', () => {
    // const darkMode = boolean("Dark Mode", false);
    const headings = [...Array(6).keys()].map(level => {
      const lvl = level + 1
      return (
        <Heading level={lvl}>
          Lorem Ipsum (h
          {lvl}
)
        </Heading>
      )
    })

    return (
      <Fragment>
        <section>
          {headings}
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </P>
        </section>
      </Fragment>
    )
  })
