import React, {Fragment} from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import ToolTip from './react'
import Readme from './react.README.md'

storiesOf('ToolTip', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
        <Fragment>
          <ToolTip message={'This is a sample message'}/>
        </Fragment>
    )
  })
