import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CarouselPagination from './react'
import Readme from './react.README.md'
  
storiesOf('CarouselPagination', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <CarouselPagination pages={[]} activePage={0} onClick={() => {}} />        
    )    
})
