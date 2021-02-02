import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { React as Button } from 'components/Button'
import CarouselSlide from './react'
import Readme from './react.README.md'

storiesOf('CarouselSlide', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => {
    return (
      <>
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <ul style={{position: 'relative', listStyle: 'none', overflow: 'hidden', width: '100%', padding: '0', margin: '0'}}>
          <CarouselSlide
              heading={'Less Noise Equals More Focus'}
              subHeading={'Safety features that give peace of mind.'}
              image={'https://embed.widencdn.net/img/masonite/shgcf0ogpj/exact/STC%20DOOR%20WAVE.png'}
              podOneHeading={'The Value of Silence'}
              podOneContent={'Learn how doors play a crucial role in the built environment.'}
              podTwoHeading={'Acoustic Sound Tool'}
              podTwoContent={'Hear the difference acoustically rated doors can make to the environment.'}
              podThreeHeading={'Acoustic Door Finder'}
              podThreeContent={'Find the right wood door for any environment based on STC rating, fire rating, and more.'}
              slideColor={'#7c878e'}
            />
        </ul>
      </div>
      </>
    )
  })
