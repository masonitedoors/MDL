import React from 'react'
import { storiesOf } from '@storybook/react'
import Readme from './react.README.md'

storiesOf('Grid', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg">
          This is the 12-column grid found in Bootstrap 4. Developers may use the column mixins or
          the utility classes provided.
        </div>
        <div className="col-sm-12">col-sm-12</div>
        <div className="col-sm-8">col-sm-8</div>
        <div className="col-sm-4">col-sm-4</div>
        <div className="col-sm-6">col-sm-6</div>
        <div className="col-sm-6">col-sm-6</div>
        <div className="col-sm-3">col-sm-3</div>
        <div className="col-sm-3">col-sm-3</div>
        <div className="col-sm-3">col-sm-3</div>
        <div className="col-sm-3">col-sm-3</div>
      </div>
    </div>
  ))
