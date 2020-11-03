import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { React as Button } from 'components/Button'
import Flyout from './react'
import Readme from './react.README.md'

storiesOf('Flyout', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => {
    const [show, setShow] = useState()
    const [messageShowing, setMessageShowing] = useState()
    const [width, setWidth] = useState(477)

    const onClose = () => {
      setShow(false)
      setMessageShowing(true)
    }

    return (
      <>
        {show && (
          <Flyout
            heading='A heading goes here'
            moreHeading={<button>moreHeading</button>}
            {...{ onClose, width }}
          >
            <div style={{ border: 'solid 1px green', width: 100, marginLeft: 100, marginTop: 100 }}>{'{children}'} show below the heading.</div>
          </Flyout>
        )}
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={({ target }) => setWidth(target.value)}
          />
        </label>

        <div><Button onClick={() => setShow(true)}>Show Flyout</Button></div>

        {messageShowing && (
          <p>
            The onClose just ran. The caller is responsible for actually closing.
          </p>
        )}
      </>
    )
  })
